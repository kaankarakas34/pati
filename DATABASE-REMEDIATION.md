# Database Remediation

## Application Changes

Local implementation covers the confirmed Critical, High and Medium findings.
Production protection still requires the reviewed migration, runtime role grants
and deployment. No production schema or data was changed.

| Finding | Local remediation |
| --- | --- |
| C1 guest upsert/status takeover and pending-data exposure | Create-only pending feedback, server IDs/date, separate authenticated versioned moderation, public approved-only reads, durable submission quota. |
| H1 unbounded reads and global frontend loads | Explicit projections, bounded 1-100 row keysets, server filters, targeted details, paginated admin and feedback screens, offline sitemaps. |
| H2 feedback indexes and pagination | Target/status/created-at/id indexes, microsecond-preserving cursors, immutable creation time. |
| H3 shared identity and missing relations | Places registry, subtype FKs, locations, profiles, favorites, source identity, restricted deletion and atomic merge. |
| H4 schema/RLS drift | Explicit checksummed migration runner; Data API privileges revoked; non-bypass pati_api role; owner-scoped favorite RLS. |
| H5 GET seeds and mock fallback | Runtime initialization removed. Database failures remain failures; sample data exists only in explicitly isolated development preview. |
| H6 destructive migration and non-atomic dedupe | Empty-target-only copy, bounded batches, validation before commit; explicit versioned transactional merge. |
| H7 duplicate IDs/slugs/sources | Server UUID creation, source composite primary key, unique guide slug and hotel canonical route, version conflicts. |
| H8 importer credentials/TLS | Removed embedded credentials and mock rewriting; explicit connection, verified remote TLS, stable provider identity. |
| M1 JSON growth | Typed bounded JSON payloads, GIN indexes for active containment filters; editorial snapshots retained intentionally. |
| M2 dates and scalar integrity | DATE columns, preserved verification notes, score/status/rating/price checks and numeric price fields. |
| M3 duplicated geography and payloads | Normalized location reference with canonical display labels; short list descriptions and separate detail reads. |
| M4 lost updates/counters | Partial versioned updates/deletes; atomic ad counter increments; single-transaction merge. |
| M5 uncontrolled retention | Durable rate limiting and bounded explicit dry-run-first maintenance; no implicit deletion schedule. |
| M6 connections and slow requests | Default pool size 3, connection timeout 5s, statement timeout 15s; explicit EXPLAIN tooling. |

SQL search uses pg_trgm on a normalized search document. Containment filters
use JSONB GIN indexes. References: [PostgreSQL pg_trgm](https://www.postgresql.org/docs/17/pgtrgm.html),
[Supabase RLS guidance](https://supabase.com/docs/guides/database/postgres/row-level-security).

Important scope limits: no live Advisor results or production query plans were
available. CLI 2.54.11 has no `db advisors` command and this checkout was not
linked. The 100k places / 1m users / 5m reviews / 10m favorites scenario still
needs production-like load testing, actual EXPLAIN (ANALYZE, BUFFERS), pool-budget
sizing and index-usage observation. Small-dataset tests are not capacity proof.

Use `npm run db:explain -- --city istanbul --target PLACE_ID` for read-only plans;
add `--analyze` only on an approved test environment because it executes SELECTs.
Set AUDIT_DATABASE_URL explicitly. No EXPLAIN ANALYZE of mutations is provided.
The wizard scores a bounded 60-candidate set, not an exhaustive global optimum.
Search terms shorter than three normalized characters do not apply a text filter.
Small editorial JSON (rules, booking links, author snapshots, FAQ) is deliberately
retained instead of gratuitous relational expansion. No broad soft-delete layer
or event log was added. Legacy display price is not used for numeric comparisons.

In-place upgrade: take a verified backup, run preflight against the existing
database, rehearse on its restored clone, then run db:migrate with owner
credentials in a write-frozen maintenance window and deploy matching API/frontend.
The separate empty-target copy workflow below is optional, not mandatory for an
in-place upgrade. Do not apply this same migration through both Supabase CLI and
the custom checksum runner. Historical root migrations are not auto-replayed.

Any password previously committed in importer history must be rotated separately
at its provider; removing it from source does not revoke it. Retention schedules,
backup/restore validation and production rollout remain operator steps.

Status: scripts implemented locally; the database migration has NOT been deployed.
No live database, network API, paid service, or production data was accessed for
this work. Commands below are rollout instructions, not commands already run.
Package commands are maintained separately; use the direct Node commands here.

## Connections and Roles

All database scripts use `lib/database-config.js`, including certificate-verified
TLS for remote hosts and `DATABASE_SSL_CA_FILE` support. There are no embedded
passwords or credential prompts. The shared configuration permits plaintext only
for its configured local hosts; scripts do not override its TLS policy.

| Operation | Explicit connection | Role |
| --- | --- | --- |
| Legacy source | `SOURCE_DATABASE_URL` | Owner/audit login able to see every legacy row, read-only transaction |
| Migration destination | `MIGRATION_DATABASE_URL` | Schema owner, distinct empty database |
| Preflight | `PREFLIGHT_DATABASE_URL`, otherwise `AUDIT_DATABASE_URL` | Owner/audit visibility, read-only transaction |
| Vet import | `IMPORT_DATABASE_URL` | Login granted `pati_api`; startup `-c role=pati_api` |
| Sitemap build | `SITEMAP_DATABASE_URL` | Login granted `pati_api`; startup `-c role=pati_api`, read-only transaction |
| Retention | `MAINTENANCE_DATABASE_URL` | Maintenance owner; no runtime role switch |

These scripts never fall back to `DATABASE_URL`. Preflight does not automatically
use the source URL: explicitly assign its audit connection to the source being
checked. Migration/preflight set `row_security=off` so insufficient visibility
fails instead of silently copying or approving a filtered subset. This setting
does not grant RLS bypass; the audit login must already have sufficient authority.
The runtime login must have `GRANT pati_api TO <runtime_login>` and must not own
application tables. The runtime role intentionally lacks DELETE on
`private.submission_limits`; retention needs the separate maintenance owner.

## Rollout

1. Back up the legacy source and verify a restore. Freeze source writes for the
   final migration window; a consistent snapshot alone does not capture later
   writes. Inventory all eleven required tables, even empty `ad_applications`.
2. Run `node scripts/database-preflight.js --batch-size 250 --sample-limit 20`
   against the source using the audit connection. Exit 0 means these checks
   passed, 2 means findings, and 1 means an incomplete/failed audit. Resolve
   findings through explicitly approved legacy-data cleanup before migration.
3. Provision a distinct empty target and separately apply the reviewed migration
   using `node scripts/apply-migrations.js` with `MIGRATION_DATABASE_URL`.
   This requires the privileges to install `pg_trgm`, create the private schema,
   roles, functions, constraints, indexes and policies. The copy script never
   initializes schema or calls `initDatabase`.
4. Run `node scripts/migrate-to-supabase.js --batch-size 250` for a read-only
   source audit and target readiness check. Then rehearse the explicit
   `node scripts/migrate-to-supabase.js --apply --batch-size 250` on an isolated
   target. It requires the exact checked-in migration checksum in
   `private.app_migrations`; a differently provisioned target must be reconciled
   through the migration owner, not by bypassing the check.
5. Inspect all eleven counts, preflight the target, verify application behavior
   and role grants, then perform the approved final copy and connection cutover.
   Keep the source backup and a rollback/cutover plan. No deployment or cutover
   is performed by these scripts.
6. Build sitemap artifacts before enabling the static sitemap routes. Review
   retention scopes with the data owner, run a preview, then apply only the
   selected policy. Configure scheduling separately; no scheduler was installed.

## Legacy Copy

The reviewed schema migration intentionally executes
`DROP INDEX IF EXISTS public.ad_applications_created_idx` after creating
`ad_applications_page_idx` on `(created_at DESC, id DESC)`. This is an actual,
requested index replacement, not a scanner false positive or a data deletion.
It remains a schema change requiring migration-owner review; its locks and
query-plan impact must be assessed during rollout. The migration file was not
changed as part of the script hardening.

Preflight aggregate queries and the copy's table-lock query use explicit
`{text, values}` configurations and complete `pg-format` templates. `%s`
fragments come only from internal SQL and fixed table lists; identifiers are
escaped with `%I`, and sample limits remain bind parameters. No scanner
suppression, identifier interpolation from CLI input, or validation bypass was
introduced. A scanner may still require review of those trusted fragments.

Copied tables, in dependency order: `hotels`, `boardings`, `guides`, `pet_taxis`,
`vets`, `experiences`, `ads`, `corrections`, `complaints`, `reviews`, and
`ad_applications`. Source IDs and JSON values are preserved. Catalog insert
triggers register places/locations before feedback is copied.

The default is read-only. `--apply` uses one dedicated destination client and one
transaction for the entire copy. It takes the schema migration advisory lock and
exclusive locks on destination application tables, then refuses any nonempty
legacy or related destination table. It never truncates, deletes, overwrites,
upserts, silently skips conflicts, seeds sample data, or changes RLS/schema.

Keyset reads and typed multi-row inserts use 250 rows by default, configurable
from 1 to 1000. Each batch compares inserted values before proceeding, followed
by table counts, immediate constraints and target preflight before commit. City
and district compare through `private.slug`: the location registry chooses the
canonical display labels for equivalent aliases. Every other copied field is
compared exactly after target type conversion. Date/timestamp reads use text to
preserve PostgreSQL microseconds, and JSON is transferred as raw text then parsed
by PostgreSQL so JavaScript cannot round large JSON numbers. Legacy `last_verified` text is retained in
`verification_note`; only valid ISO dates populate the new date field. Legacy
feedback without `created_at` uses its date at midnight UTC. Other omitted new
metadata uses schema defaults, so old creation times cannot be reconstructed.

This is a legacy-to-empty-target copy, not a general backup/restore or incremental
sync. Already-normalized source columns, unsupported columns, missing tables,
constraint failures and conflicts abort. New profiles, favorites, source links,
locations and rate-limit state are not copied from another normalized deployment.
The default readiness check does not simulate inserts or exhaustively prove
target compatibility. A full target rehearsal remains required.

Batching bounds rows and client memory, not the overall transaction/WAL volume
or the size of an individual legacy field. Locks last until commit; the source
snapshot and final validation can be long-lived. There is no resume checkpoint
or automatic retry. After a connection failure near COMMIT, inspect target
counts and contents before retrying: the outcome may be uncertain. After a
successful copy, another run refuses the populated target.

## Preflight

The audit performs SELECTs inside a repeatable-read, read-only transaction.
It reports bounded ID-only samples and counts of:

- Orphan corrections, complaints and reviews; cross-catalog ID collisions.
- Duplicate guide slugs and hotel normalized city/district/name groups, using
  the same NFKD, apostrophe-removal and Turkish-character SQL expression as
  `private.slug`. Hotel collisions require approved
  cleanup because the schema enforces a unique canonical route. Other catalogs
  use ID routes and may contain same-name entries.
- Incompatible date values and reversed ad date ranges. Free-form verification
  notes remain valid legacy notes, while impossible ISO-shaped dates fail.
- JSON shape and size violations: `author`, hotel `rules`, and `booking_links`
  are objects; all other JSON columns are arrays. Experience `rules` is text.
  JSONB null is distinguished from SQL NULL. Arrays/objects have the migration's
  50,000-byte bound; features/checklist retain their tighter 12,000-byte limits,
  and features/allowed-pets/gallery arrays enforce 100/20/50 element limits.
- On the new schema, missing/wrong place registrations, orphan registry entries,
  inconsistent locations, orphan source identities and orphan favorites.

These are targeted checks, not proof of every scalar constraint, auth reference,
permission, extension, index, or business rule. Read batches and samples are
bounded, but duplicate/orphan queries may scan or aggregate whole tables. A
60-second statement timeout fails the audit rather than reporting success.
The script does not repair, delete or silently rename legacy data.

## Vet Import

Preview locally:

```sh
node scripts/import-vets-data.js --input ./vets.json --provider google_maps
node scripts/import-vets-data.js --input ./vets.json --provider google_maps --apply --batch-size 100
```

Input is a JSON array or an object mapping location names to arrays, capped at
32 MiB. Records require a name/title, resolvable city/district, and stable source
identity. Supply `source: {provider, externalId}`, or `--provider` together with
`placeId`, `place_id`, or `externalId`. File position, name and telephone are not
source identities. Old scraper files without provider IDs need explicit source
enrichment before import. The small existing district/city mapping is retained;
explicit item city/district wins. Address text is no longer guessed into geography.

IDs derive deterministically from provider plus external ID. Existing source
identities are skipped without overwriting curated fields. Identity collisions
with another catalog fail. Insert and source registration share a transaction,
with stable ordered identity locks; each 1-500-row batch commits separately.
Failure reports previously committed batches. Re-running safely skips those
identities, but this is not a source-refresh/update tool or fuzzy deduplicator.

No fabricated features, Google-rating-derived trust score, emergency service
claims or verification date are added. Absent features default to `[]`, trust
score to 0, and last verification to null. The script never edits mock data,
creates schema, or connects during its default preview.

## Explicit Hotel Merge

```sh
node scripts/dedupe-hotels.js --keeper-id HOTEL_A --duplicate-id HOTEL_B --keeper-version 3 --duplicate-version 2
node scripts/dedupe-hotels.js --keeper-id HOTEL_A --duplicate-id HOTEL_B --keeper-version 3 --duplicate-version 2 --apply
```

The preview is entirely local and emits the exact request. Apply requires
`API_URL` and `ADMIN_TOKEN`, sends exactly one
`POST /api/admin/hotels/merge` with
`{keeperId,duplicateId,keeperVersion,duplicateVersion}`, and refuses redirects.
That endpoint is implemented by the separately owned API/repository changes.
There is no update-then-delete fallback, full-catalog discovery, automatic pair
selection, or automatic retry. Re-read both records after a stale version,
timeout, or uncertain result before deciding whether another request is needed.
Deployment and real authentication/merge behavior were not exercised here.

## Retention

```sh
node scripts/database-maintenance.js --rejected-days 90 --pending-days 180 --ad-application-days 365 --expired-rate-limits
node scripts/database-maintenance.js --rejected-days 90 --pending-days 180 --ad-application-days 365 --expired-rate-limits --apply --batch-size 250 --max-batches 20
```

The numbers above are examples, not an approved retention policy. No scope is
selected implicitly. Rejected/pending flags apply only to reviews, complaints
and corrections in that exact status; approved feedback is never selected.
Ad applications are selected by age because they have no moderation status.
Both creation and last-modification time must precede the cutoff, protecting
recent moderation/edits. Expired submission limits use the repository's one-hour
window. Cutoffs are fixed at invocation time and use strict less-than comparisons.

Preview uses read-only transactions and bounded keyset pages. Apply deletes via
locked, bounded CTE batches with `FOR UPDATE SKIP LOCKED`, committing each batch.
Defaults are 250 rows and 20 batches per table/status policy; maxima are 1000
rows and 1000 batches. Counts are bounded observations, not full totals. A cap,
concurrent changes or skipped locks may leave work for another run. Failed runs
report known committed progress. Deletion is irreversible without a backup;
legal holds and policy approval are external operator responsibilities.

## Static Sitemaps

```sh
node scripts/build-sitemaps.js --site-url https://www.patiyleseyahat.com --batch-size 250 --chunk-size 5000
```

This is an offline build job: it reads PostgreSQL directly with a read-only
snapshot and writes files, without fetching pages or calling the application
API. It does require an explicitly configured database when an operator runs
it; no such connection was made during implementation.

Output is exactly `public/sitemaps/index.xml` plus uniquely named
`public/sitemaps/sitemap-<build-id>-<number>.xml` chunks. The server serves the
index at `/sitemap.xml` and chunks at `/sitemaps/*.xml`. The index references that
static chunk URL convention. Publish all chunks before the index. The local
writer stages and renames the index last, retaining the prior index on failure.

Catalog reads select only needed fields and use bounded keysets; distinct hotel
location reads also use tuple keysets. XML is escaped. Chunks default to 5000
URLs, cap at 10,000 URLs and approximately 10 MiB, and the index caps at 10,000
chunks. The job includes known static/category pages, hotel canonical routes,
hotel city/district pages and boarding/taxi/vet/guide ID routes. It deliberately
does not invent experience detail routes, exhaustive marketing/filter aliases,
or modification dates for static pages. Catalog modification dates use
`modified_at`, which initially reflects migration time for legacy records.

Duplicate hotel slugs or disagreement between database slugs and the existing
JavaScript canonical URL helper abort publication. The checked-in normalizers
now agree on the tested Turkish, accented and apostrophe examples; publication
still fails if future changes cause drift. The duplicate check is a build-time aggregate,
never a request-time scan. Requests only read prebuilt files via the separately
owned server integration. Old or failed-build chunks are retained to preserve
cached indexes; prune them separately after the cache/rollback window. Concurrent
builds are last-index-writer-wins and should be serialized by the scheduler.

## Verification Boundary

Verification uses import-safe exported functions, injected transports/writers,
and local in-memory PGlite with `pg_trgm`. It does not connect to a live database
or emit public sitemap artifacts. Production TLS, role membership, network
failures around COMMIT, lock contention, filesystem publication on the deployed
host, and production-scale resource usage still require deployment rehearsal.

Offline checks exercised all eleven tables, source JSON/date/orphan/slug
findings, dry-run behavior, rollback on injected copy validation failure,
normalized location aliases, exact microseconds and large JSON numbers,
nonempty target rejection, source-identity import reruns under `pati_api`,
retention scopes and bounds, XML parsing/chunk references, and failure before
index publication. Tests were run through exported functions with in-memory
fixtures; no additional test files or package commands were created.
## Verification and Scanner Triage

GuardVibe 3.31.0 raw full scan on 2026-09-04 still reports FAIL with
2 Critical, 5 High and 0 Medium warnings. No rule was disabled or suppressed.
These remaining regex matches were individually checked:

| Rule | Location | Evidence / disposition |
| --- | --- | --- |
| VG514 | docker-compose.yml:7 | Required environment interpolation, not a literal password; absent secret prevents container setup. |
| VG540 | integrity migration:366 | Drops only the superseded ad_applications_created_idx index. Runs through explicit owner-only migration, not the runtime API. No table/data drop. |
| VG406 (2) | lib/api-router.js | recordId, resource allowlists and repository validators precede parameterized SQL. HTTP hostile-ID/invalid-resource tests return 400. The regex crosses validator calls. |
| VG678 (3) | server.js | Global middleware sets X-Content-Type-Options: nosniff before every route. HTTP tests assert the actual header. The rule matches the getPublicUrl import/outbound fetch and a sendFile call without recognizing prior middleware. |

npm audit reports 0 known dependency vulnerabilities. Real-browser checks used
only the isolated in-memory preview: 24+6 hotel keyset pages, admin login,
pending review submission, editor approval, public approved-only readback,
canonical hotel detail, desktop/mobile rendering and no page console errors.
The 390px detail check had no horizontal overflow. The preview is disposable,
not production data. Its command refuses NODE_ENV=production and Vercel.

Production deployment, secret rotation, production-sized EXPLAIN ANALYZE,
actual Supabase Advisor output, retention scheduling and load tests are not
claimed as completed. Older SECURITY-REMEDIATION.md records the preceding
security pass; this file contains the subsequent database remediation status.
