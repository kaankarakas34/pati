# Security remediation

Scope: the 9 Critical and 13 High findings from the initial GuardVibe audit, followed by the remaining 41 Medium findings.
No production deployment, database migration, credential rotation, or paid service was used.

| Original finding | Files | Remediation |
| --- | --- | --- |
| TLS verification disabled (3) | db.js; scripts/check-supabase-connection.js; scripts/migrate-to-supabase.js | Remote connections verify certificates. Shared database configuration prevents connection-string SSL overrides and supports a PEM CA bundle. Local exemptions use exact parsed hostnames. |
| Embedded Docker password (1) | docker-compose.yml | Password is required from the local environment. Port is bound to loopback. Embedded fallback passwords were also removed from database and migration code. |
| Dynamic migration SQL (5) | scripts/migrate-to-supabase.js; lib/migration-sql.js | Tables are allowlisted, column names validated, identifiers escaped by pg-format, and values remain PostgreSQL parameters. Original escaped SQL was not a demonstrated injection exploit. |
| Axios version declarations (2) | package.json; package-lock.json | Minimum version raised to 1.19.0 and lockfile refreshed. The original installed 1.19.0 was already above the scanner's vulnerable threshold. |
| Missing package files allowlist (1) | package.json | Added explicit files allowlist and private flag to prevent accidental publication. |
| URL fetches / SSRF (2) | scripts/find-http-url.js; scripts/test-upload-http.js; lib/public-http.js | Public-address validation includes DNS answers, reserved ranges and IPv6. Socket lookup pins validated IPs. Redirects and environment proxies are disabled; response sizes are bounded. The same protection now covers the public scrape endpoint, which requires admin authentication. |
| Missing route ID validation (6) | server.js; lib/admin-security.js | All seven delete routes validate bounded IDs before database access, including the additional ads route. Existing parameterized SQL is retained. |
| Stored HTML / XSS (1) | src/pages/GuideDetail.jsx; src/lib/guide-html.js | DOMPurify allowlist strips executable markup and unsafe attributes while preserving article formatting. |
| Vulnerable Vite dependency (1) | package.json; package-lock.json; vite.config.js | Upgraded to patched Vite 6.4.3, compatible with the existing Node runtime. Dev server defaults to loopback. |

Additional fixes: admin authorization fails closed when ADMIN_TOKEN is missing, comparisons use constant-time digests, and qs is overridden to the patched 6.16.x line for the Express dependency chain.

## Medium remediation

| Findings | Files | Remediation and verification |
| --- | --- | --- |
| VG151 / VG959: 36 findings across 18 error responses | server.js; lib/http-responses.js | Responses use a fixed generic message while diagnostic errors stay in server logs. Health failure status remains 503; write failures remain 500. Local HTTP tests force errors in all 17 write handlers and verify the exact response, while unit tests cover 503. Added an Express error handler for malformed / oversized requests and unexpected synchronous errors. |
| TAINT:open-redirect: 3 findings | server.js; lib/http-responses.js | Every redirect passes through a bounded, slash-separated slug allowlist. External URLs, protocol-relative URLs, backslashes, encoded separators, dot segments and control characters are rejected. Unit tests cover hostile targets; HTTP tests verify legacy category and hotel redirects still work. The original destinations were already locally generated, rather than demonstrated external redirects. |
| TAINT:path-traversal: 2 findings | server.js; lib/html-template.js | Template loading is isolated in a no-argument reader using exactly two fixed module-relative file URLs. Request-controlled paths cannot be supplied. HTTP tests verify both production and development template selection with hostile query values. The original file paths were also fixed; the reported taint flow was a false positive. |

No rules or files were excluded from GuardVibe to obtain the final Medium count.

## Environment requirements

- Set POSTGRES_PASSWORD to a unique random secret for a new local Docker database. For an existing volume, changing this variable does NOT change the database password. Rotate the old password through PostgreSQL separately, and update DATABASE_URL / SOURCE_DATABASE_URL to match. Never delete the data volume to rotate credentials.
- Remote databases must present a valid certificate. If the provider requires its own CA, set DATABASE_SSL_CA_FILE to the path of its PEM CA bundle, available to the server and migration scripts. Do not disable verification to resolve a certificate error.
- The migration script now requires SOURCE_DATABASE_URL explicitly. It is destructive by design and was not run during verification.
- Existing deployments are unchanged until these files are deployed and their environment is configured. Any password previously shared or committed must be rotated; removing a literal does not remove Git history.
- URL fetches reject redirects. Use the final public URL when a hotel/CDN address redirects.

## Verification

Run `npm run test:security`, `npm run build`, `npm audit`, and `npx -y guardvibe audit --full --format json`.
Security tests use synthetic input and local HTTP servers, with real database initialization disabled.

Verified locally on 2026-09-04:

- `npm run test:security`: 16 tests passed, including real local API requests, forced database failures, malformed request bodies, redirect validation and both template paths.
- `npm run build`: passed; existing bundle size / empty manual chunk warnings remain.
- `npm audit --audit-level=low`: 0 vulnerabilities.
- `git diff --check`: passed.
- GuardVibe full audit: 1 finding (1 Critical, 0 High, 0 Medium), result hash `6c4b7338dc3d8769`. Before Medium remediation: 42 findings (1 Critical, 0 High, 41 Medium). Initial audit: 69 findings (9 Critical, 13 High, 47 Medium).
- The remaining Critical is the VG514 false positive described below. GuardVibe still returns FAIL; no clean scanner verdict is claimed.

GuardVibe VG514 currently recognizes plain `${VAR}` references but not Compose's required-value `${VAR:?message}` syntax. Consequently it can still report the required environment reference in docker-compose.yml as a hardcoded secret. This is a documented false positive; the fail-closed configuration is preserved and the finding is not suppressed.

The final scan reports no Medium findings. This verifies the reported findings, not the absence of every possible security defect. Live credentials and production TLS connections were not exercised.
