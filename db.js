import pg from 'pg';
import { 
  initialHotels, 
  initialBoardings, 
  initialGuides, 
  initialCorrections, 
  initialComplaints,
  initialVets,
  initialTaxis
} from './src/data/mockData.js';

const { Pool } = pg;

const hasDatabaseUrl = Boolean(process.env.DATABASE_URL);
const isVercelWithoutDb = Boolean(process.env.VERCEL === '1' && !hasDatabaseUrl);

const connectionString = process.env.DATABASE_URL || 'postgresql://pati_user:pati_password@localhost:5436/pati_db';
const isLocalDatabase = /(?:localhost|127\.0\.0\.1|pati_db)(?::|\/)/i.test(connectionString);
const poolConnectionString = (() => {
  if (isLocalDatabase) return connectionString;
  try {
    const parsed = new URL(connectionString);
    parsed.searchParams.delete('sslmode');
    return parsed.toString();
  } catch {
    return connectionString;
  }
})();

const pool = new Pool({
  connectionString: poolConnectionString,
  ssl: isLocalDatabase ? false : { rejectUnauthorized: false },
  max: isLocalDatabase ? 10 : 3,
  idleTimeoutMillis: 10000,
  connectionTimeoutMillis: 5000
});

pool.on('error', (err) => {
  console.warn('Postgres connection pool notice:', err.message);
});

export async function checkDatabaseConnection() {
  if (isVercelWithoutDb) {
    return { database: 'mock_fallback', user: 'guest', checked_at: new Date().toISOString() };
  }
  try {
    const result = await pool.query('SELECT current_database() AS database, current_user AS user, NOW() AS checked_at');
    return result.rows[0];
  } catch (err) {
    return { database: 'offline', user: 'offline', checked_at: new Date().toISOString() };
  }
}

const initialExperiences = [
  {
    id: "exp-1",
    name: "Bitez Sahil Sabah Yürüyüş Rotası",
    category: "Plaj & Sahil",
    city: "Muğla",
    district: "Bodrum",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    petPolicy: "Sabah erken ve akşam saatlerinde tasmalı köpeklerle yürüyüş için uygundur.",
    allowedPets: ["dog"],
    features: ["Sahil yürüyüşü", "Gölgelik alan", "Su noktası", "Yakın veteriner"],
    description: "Bitez sahil şeridi, özellikle sabah erken saatlerde köpekle yürüyüş ve kısa deniz molaları için Bodrum'un en rahat noktalarından biridir.",
    address: "Bitez Sahili, Bodrum",
    phone: "",
    website: "",
    mapUrl: "https://maps.google.com/?q=Bitez+Sahili+Bodrum",
    bestTime: "07:00-09:00 ve 19:00 sonrası",
    rules: "Yoğun saatlerde tasma kullanılmalı, plaj işletmelerinin özel alan kuralları ayrıca sorulmalıdır.",
    verified: true,
    baseTrustScore: 9.2,
    lastVerified: "2026-08-24"
  },
  {
    id: "exp-2",
    name: "Moda Sahil Pet Dostu Kafe Hattı",
    category: "Kafe & Restoran",
    city: "İstanbul",
    district: "Kadıköy",
    imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    petPolicy: "Açık alanlarda kedi ve köpek kabul eden çok sayıda kafe bulunur.",
    allowedPets: ["dog", "cat"],
    features: ["Açık alan", "Mama kabı", "Yürüyüş rotası", "Toplu taşıma yakın"],
    description: "Moda sahil hattı, kısa şehir kaçamaklarında evcil hayvanla kahve molası ve yürüyüşü birleştirmek isteyenler için güçlü bir rotadır.",
    address: "Moda Sahili, Kadıköy",
    phone: "",
    website: "",
    mapUrl: "https://maps.google.com/?q=Moda+Sahili+Kadikoy",
    bestTime: "Hafta içi gündüz ve gün batımı",
    rules: "Kapalı alan kabulü işletmeden işletmeye değişir; yoğun saatlerde rezervasyon önerilir.",
    verified: true,
    baseTrustScore: 9.4,
    lastVerified: "2026-08-22"
  },
  {
    id: "exp-3",
    name: "Göreme Gün Doğumu Seyir Noktası",
    category: "Rota & Aktivite",
    city: "Nevşehir",
    district: "Göreme",
    imageUrl: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?auto=format&fit=crop&w=800&q=80",
    petPolicy: "Tasmalı köpeklerle kısa yürüyüş ve fotoğraf molası için uygundur.",
    allowedPets: ["dog"],
    features: ["Manzara", "Kısa yürüyüş", "Fotoğraf noktası", "Araçla erişim"],
    description: "Kapadokya'da balonları izlemek isteyen köpek sahipleri için düşük tempolu, kısa süreli ve unutulmaz bir sabah aktivitesi.",
    address: "Göreme Seyir Tepesi",
    phone: "",
    website: "",
    mapUrl: "https://maps.google.com/?q=Goreme+Sunset+Point",
    bestTime: "Gün doğumu",
    rules: "Soğuk havalarda köpek montu, yaz aylarında su kabı önerilir. Kalabalıkta kısa tasma kullanılmalıdır.",
    verified: true,
    baseTrustScore: 9.1,
    lastVerified: "2026-08-18"
  }
];

const initialAds = [
  {
    id: "ad-1",
    title: "Bodrum'da pet dostu transfer kampanyası",
    sponsor: "Bodrum Pet Transfer",
    placement: "home-hero",
    targetUrl: "https://www.enuygun.com",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    city: "Muğla",
    category: "Pet Taksi",
    startsAt: "2026-08-01",
    endsAt: "2026-09-30",
    status: "active",
    impressions: 1240,
    clicks: 86
  },
  {
    id: "ad-2",
    title: "Kedi oteli erken rezervasyon avantajı",
    sponsor: "Pati Sarayı Kedi Oteli",
    placement: "listing-sidebar",
    targetUrl: "https://www.enuygun.com",
    imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
    city: "İstanbul",
    category: "Bakım",
    startsAt: "2026-08-15",
    endsAt: "2026-10-15",
    status: "active",
    impressions: 890,
    clicks: 42
  }
];

async function seedGrowthTables(client) {
  const expCount = await client.query("SELECT COUNT(*) FROM experiences");
  if (Number(expCount.rows[0].count) === 0) {
    for (const e of initialExperiences) {
      await client.query(`
        INSERT INTO experiences (
          id, name, category, city, district, image_url, pet_policy, allowed_pets, features, description,
          address, phone, website, map_url, best_time, rules, verified, base_trust_score, last_verified
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)
        ON CONFLICT (id) DO NOTHING
      `, [
        e.id, e.name, e.category, e.city, e.district, e.imageUrl, e.petPolicy, JSON.stringify(e.allowedPets),
        JSON.stringify(e.features), e.description, e.address, e.phone, e.website, e.mapUrl, e.bestTime, e.rules,
        e.verified, e.baseTrustScore, e.lastVerified
      ]);
    }
  }

  const adCount = await client.query("SELECT COUNT(*) FROM ads");
  if (Number(adCount.rows[0].count) === 0) {
    for (const ad of initialAds) {
      await client.query(`
        INSERT INTO ads (
          id, title, sponsor, placement, target_url, image_url, city, category, starts_at, ends_at, status, impressions, clicks
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
        ON CONFLICT (id) DO NOTHING
      `, [
        ad.id, ad.title, ad.sponsor, ad.placement, ad.targetUrl, ad.imageUrl, ad.city, ad.category,
        ad.startsAt, ad.endsAt, ad.status, ad.impressions, ad.clicks
      ]);
    }
  }
}

// Helper to check if tables exist and initialize the database schema
export async function initDatabase() {
  console.log("Initializing PostgreSQL database...");
  const client = await pool.connect();
  try {
    // 1. Create Hotels Table
    await client.query(`
      CREATE TABLE IF NOT EXISTS hotels (
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        city VARCHAR(100) NOT NULL,
        district VARCHAR(100) NOT NULL,
        type VARCHAR(100) NOT NULL,
        allowed_pets JSONB NOT NULL,
        suitability INT NOT NULL,
        weight_limit INT NOT NULL,
        extra_fee TEXT NOT NULL,
        features JSONB NOT NULL,
        quiz_tags JSONB NOT NULL,
        base_trust_score NUMERIC(3,1) NOT NULL,
        verified BOOLEAN DEFAULT TRUE,
        last_verified VARCHAR(255) NOT NULL,
        image_url VARCHAR(2000) NOT NULL,
        gallery_images JSONB,
        description TEXT NOT NULL,
        why_selected TEXT,
        suitable_for JSONB,
        not_suitable_for JSONB,
        disallowed_pets JSONB,
        breed_restrictions TEXT,
        max_pets_per_room INT,
        deposit_info TEXT,
        required_docs TEXT,
        can_leave_in_room_alone BOOLEAN,
        rules JSONB,
        veterinary_support TEXT,
        phone VARCHAR(255),
        email VARCHAR(255),
        website VARCHAR(2000),
        booking_links JSONB,
        editor_note TEXT,
        info_source VARCHAR(1000),
        faq JSONB
      );
    `);

    // 2. Create Boardings Table
    await client.query(`
      CREATE TABLE IF NOT EXISTS boardings (
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category VARCHAR(255) NOT NULL,
        city VARCHAR(100) NOT NULL,
        district VARCHAR(100) NOT NULL,
        image_url VARCHAR(2000) NOT NULL,
        gallery_images JSONB,
        allowed_pets JSONB NOT NULL,
        features JSONB NOT NULL,
        quiz_tags JSONB NOT NULL,
        price VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        boarding_model TEXT NOT NULL,
        daily_program TEXT,
        accredited_vet VARCHAR(1000),
        phone VARCHAR(255),
        email VARCHAR(255),
        website VARCHAR(2000),
        booking_links JSONB,
        camera_support BOOLEAN DEFAULT TRUE,
        required_docs TEXT,
        neutering_required TEXT,
        aggression_policy TEXT,
        info_source VARCHAR(1000),
        base_trust_score NUMERIC(3,1) NOT NULL,
        last_verified VARCHAR(255) NOT NULL
      );
    `);

    await client.query(`ALTER TABLE hotels ADD COLUMN IF NOT EXISTS gallery_images JSONB;`);
    await client.query(`ALTER TABLE boardings ADD COLUMN IF NOT EXISTS gallery_images JSONB;`);

    // 3. Create Guides Table
    await client.query(`
      CREATE TABLE IF NOT EXISTS guides (
        id VARCHAR(100) PRIMARY KEY,
        slug VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        category VARCHAR(255) NOT NULL,
        short_answer TEXT NOT NULL,
        summary TEXT NOT NULL,
        published_at VARCHAR(255) NOT NULL,
        updated_at VARCHAR(255) NOT NULL,
        author JSONB NOT NULL,
        vet_checked BOOLEAN DEFAULT FALSE,
        vet_name VARCHAR(255),
        content TEXT NOT NULL,
        checklist JSONB,
        faq JSONB,
        seo_title VARCHAR(255),
        seo_desc VARCHAR(1000)
      );
    `);

    // 4. Create Corrections Table
    await client.query(`
      CREATE TABLE IF NOT EXISTS corrections (
        id VARCHAR(100) PRIMARY KEY,
        hotel_id VARCHAR(100) NOT NULL,
        hotel_name VARCHAR(255) NOT NULL,
        text TEXT NOT NULL,
        date VARCHAR(255) NOT NULL,
        status VARCHAR(100) DEFAULT 'pending'
      );
    `);

    // 5. Create Complaints Table
    await client.query(`
      CREATE TABLE IF NOT EXISTS complaints (
        id VARCHAR(100) PRIMARY KEY,
        target_id VARCHAR(100) NOT NULL,
        target_name VARCHAR(255) NOT NULL,
        author VARCHAR(255) NOT NULL,
        text TEXT NOT NULL,
        date VARCHAR(255) NOT NULL,
        status VARCHAR(100) DEFAULT 'pending'
      );
    `);

    // 6. Create Reviews Table
    await client.query(`
      CREATE TABLE IF NOT EXISTS reviews (
        id VARCHAR(100) PRIMARY KEY,
        target_id VARCHAR(100) NOT NULL,
        author VARCHAR(255) NOT NULL,
        rating INT NOT NULL,
        text TEXT NOT NULL,
        date VARCHAR(255) NOT NULL,
        status VARCHAR(50) DEFAULT 'approved'
      );
    `);

    // 7. Create Pet Taxis Table
    await client.query(`
      CREATE TABLE IF NOT EXISTS pet_taxis (
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        city VARCHAR(100) NOT NULL,
        district VARCHAR(100) NOT NULL,
        image_url VARCHAR(2000) NOT NULL,
        allowed_pets JSONB NOT NULL,
        features JSONB NOT NULL,
        price VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        phone VARCHAR(255),
        email VARCHAR(255),
        website VARCHAR(2000),
        base_trust_score NUMERIC(3,1) NOT NULL,
        last_verified VARCHAR(255) NOT NULL
      );
    `);

    // 8. Create Vets Table
    await client.query(`
      CREATE TABLE IF NOT EXISTS vets (
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        city VARCHAR(100) NOT NULL,
        district VARCHAR(100) NOT NULL,
        image_url VARCHAR(2000) NOT NULL,
        address TEXT NOT NULL,
        features JSONB NOT NULL,
        description TEXT NOT NULL,
        phone VARCHAR(255),
        email VARCHAR(255),
        website VARCHAR(2000),
        base_trust_score NUMERIC(3,1) NOT NULL,
        last_verified VARCHAR(255) NOT NULL
      );
    `);

    // 9. Create Experiences / Places Table
    await client.query(`
      CREATE TABLE IF NOT EXISTS experiences (
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category VARCHAR(100) NOT NULL,
        city VARCHAR(100) NOT NULL,
        district VARCHAR(100) NOT NULL,
        image_url VARCHAR(2000) NOT NULL,
        pet_policy TEXT NOT NULL,
        allowed_pets JSONB NOT NULL,
        features JSONB NOT NULL,
        description TEXT NOT NULL,
        address TEXT,
        phone VARCHAR(255),
        website VARCHAR(2000),
        map_url VARCHAR(2000),
        best_time TEXT,
        rules TEXT,
        verified BOOLEAN DEFAULT TRUE,
        base_trust_score NUMERIC(3,1) NOT NULL,
        last_verified VARCHAR(255) NOT NULL
      );
    `);

    // 10. Create Advertising Placements Table
    await client.query(`
      CREATE TABLE IF NOT EXISTS ads (
        id VARCHAR(100) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        sponsor VARCHAR(255) NOT NULL,
        placement VARCHAR(100) NOT NULL,
        target_url VARCHAR(2000) NOT NULL,
        image_url VARCHAR(2000),
        city VARCHAR(100),
        category VARCHAR(100),
        starts_at VARCHAR(255) NOT NULL,
        ends_at VARCHAR(255) NOT NULL,
        status VARCHAR(50) DEFAULT 'active',
        impressions INT DEFAULT 0,
        clicks INT DEFAULT 0
      );
    `);

    // 11. Create Advertising Applications Table
    await client.query(`
      CREATE TABLE IF NOT EXISTS ad_applications (
        id UUID PRIMARY KEY,
        business_name VARCHAR(160) NOT NULL,
        business_type VARCHAR(100) NOT NULL,
        contact_name VARCHAR(120) NOT NULL,
        email VARCHAR(180) NOT NULL,
        phone VARCHAR(40) NOT NULL,
        website VARCHAR(500),
        city VARCHAR(100) NOT NULL,
        message TEXT,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);
    await client.query(`CREATE INDEX IF NOT EXISTS ad_applications_created_idx ON ad_applications (created_at DESC);`);

    console.log("PostgreSQL tables successfully verified.");

    const hotelsCount = await client.query("SELECT COUNT(*) FROM hotels");
    if (Number(hotelsCount.rows[0].count) > 0) {
      console.log("Existing content found. Skipping destructive seed and preserving live records.");
      await seedGrowthTables(client);
      const vetsCount = await client.query("SELECT COUNT(*) FROM vets");
      if (Number(vetsCount.rows[0].count) < initialVets.length) {
        console.log(`Syncing initial vets data into DB (${vetsCount.rows[0].count} < ${initialVets.length})...`);
        await syncInitialVets(client);
      }
      return;
    }

    // Seeding Database
    console.log("Seeding initial hotels data...");
    for (const h of initialHotels) {
      await client.query(`
        INSERT INTO hotels (
          id, name, city, district, type, allowed_pets, suitability, weight_limit, extra_fee, features, quiz_tags,
          base_trust_score, verified, last_verified, image_url, description, why_selected, suitable_for,
          not_suitable_for, disallowed_pets, breed_restrictions, max_pets_per_room, deposit_info, required_docs,
          can_leave_in_room_alone, rules, veterinary_support, phone, email, website, booking_links, editor_note, info_source, faq
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34)
      `, [
        h.id, h.name, h.city, h.district, h.type, JSON.stringify(h.allowedPets), h.suitability, h.weightLimit, h.extraFee,
        JSON.stringify(h.features), JSON.stringify(h.quizTags || []), h.baseTrustScore || 9.5, h.verified, h.lastVerified, h.imageUrl,
        h.description, h.whySelected, JSON.stringify(h.suitableFor || []), JSON.stringify(h.notSuitableFor || []),
        JSON.stringify(h.disallowedPets || []), h.breedRestrictions, h.maxPetsPerRoom, h.depositInfo, h.requiredDocs,
        h.canLeaveInRoomAlone, JSON.stringify(h.rules || {}), h.veterinarySupport, h.phone, h.email, h.website,
        JSON.stringify(h.bookingLinks || { enuygun: '', otelz: '', booking: '' }),
        h.editorNote, h.infoSource, JSON.stringify(h.faq || [])
      ]);
    }

    console.log("Seeding initial boardings data...");
    for (const b of initialBoardings) {
      await client.query(`
        INSERT INTO boardings (
          id, name, category, city, district, image_url, allowed_pets, features, quiz_tags, price, description,
          boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs,
          neutering_required, aggression_policy, info_source, base_trust_score, last_verified
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25)
      `, [
        b.id, b.name, b.category, b.city, b.district, b.imageUrl, JSON.stringify(b.allowedPets), JSON.stringify(b.features),
        JSON.stringify(b.quizTags || []), b.price, b.description, b.boardingModel, b.dailyProgram, b.accreditedVet, b.phone,
        b.email, b.website, JSON.stringify(b.bookingLinks || { enuygun: '', otelz: '', booking: '' }),
        b.cameraSupport, b.requiredDocs, b.neuteringRequired, b.aggressionPolicy, b.infoSource,
        b.baseTrustScore || 9.5, b.lastVerified
      ]);
    }

    console.log("Seeding initial guides data...");
    for (const g of initialGuides) {
      await client.query(`
        INSERT INTO guides (
          id, slug, title, category, short_answer, summary, published_at, updated_at, author, vet_checked, vet_name,
          content, checklist, faq, seo_title, seo_desc
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
      `, [
        g.id, g.slug, g.title, g.category, g.shortAnswer, g.summary, g.publishedAt, g.updatedAt, JSON.stringify(g.author),
        g.vetChecked, g.vetName, g.content, JSON.stringify(g.checklist || []), JSON.stringify(g.faq || []), g.seoTitle, g.seoDesc
      ]);
    }

    console.log("Seeding initial corrections data...");
    for (const c of initialCorrections) {
      await client.query(`
        INSERT INTO corrections (id, hotel_id, hotel_name, text, date, status)
        VALUES ($1, $2, $3, $4, $5, $6)
      `, [c.id, c.hotelId, c.hotelName, c.text, c.date, c.status]);
    }

    console.log("Seeding initial complaints data...");
    for (const c of initialComplaints) {
      await client.query(`
        INSERT INTO complaints (id, target_id, target_name, author, text, date, status)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
      `, [c.id, c.targetId, c.targetName, c.author, c.text, c.date, c.status]);
    }

    console.log("Seeding initial reviews data...");
    const initialReviews = [
      {
        id: "rev-1",
        targetId: "hotel-1",
        author: "Zeynep T.",
        rating: 10,
        text: "The Marmara Bodrum harika bir kedi dostu otel. Bahçe katındaki odamızda kedimizle çok rahat ettik. Mama kapları ve pet karşılama paketi çok ince düşünülmüştü.",
        date: "2026-08-20",
        status: "approved"
      },
      {
        id: "rev-2",
        targetId: "hotel-2",
        author: "Can B.",
        rating: 9,
        text: "Büyük ırk köpeğimizi kabul eden nadir otellerden. Odalar taş mimari olduğu için çok ferah. Kapadokya seyahatimiz boyunca hiç zorlanmadık. Kesinlikle tavsiye ederim.",
        date: "2026-08-18",
        status: "approved"
      },
      {
        id: "rev-3",
        targetId: "boarding-1",
        author: "Melis A.",
        rating: 10,
        text: "Kedimi 5 gün boyunca güvenle bıraktım. Mobil kamera yayını ile 24 saat canlı izleyebilmek inanılmaz güven verdi. Temizlik üst düzeydeydi.",
        date: "2026-08-22",
        status: "approved"
      }
    ];

    for (const r of initialReviews) {
      await client.query(`
        INSERT INTO reviews (id, target_id, author, rating, text, date, status)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
      `, [r.id, r.targetId, r.author, r.rating, r.text, r.date, r.status]);
    }

    console.log("Seeding initial taxis data...");
    const initialTaxis = [
      {
        id: "taxi-1",
        name: "Pati Dostu VIP Taksi",
        city: "İstanbul",
        district: "Kadıköy",
        imageUrl: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=400&q=80",
        allowedPets: ["dog", "cat"],
        features: ["Şehirlerarası Taşıma", "Klima Kontrolü", "Evcil Hayvan Yatağı", "7/24 Aktif"],
        price: "KM başına 20 TL",
        description: "İstanbul genelinde ve şehirlerarası yolculuklarda patili dostlarınız için özel tasarlanmış lüks ve güvenli pet taksi hizmeti. Taşımalarımızda özel dezenfekte edilmiş pet koltukları ve emniyet kemerleri kullanılmaktadır.",
        phone: "+90 532 123 4567",
        email: "vippati@pettaksi.com",
        website: "https://www.enuygun.com",
        baseTrustScore: 9.6,
        lastVerified: "2026-08-24"
      },
      {
        id: "taxi-2",
        name: "Bodrum Pet Transfer",
        city: "Muğla",
        district: "Bodrum",
        imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
        allowedPets: ["dog", "cat", "bird"],
        features: ["Şehir içi Sabit Fiyat", "Kafes Sağlama", "Veteriner Refakati"],
        price: "Şehir içi sabit 400 TL",
        description: "Bodrum yarımadasında kedi, köpek ve kuşlarınızın veteriner, otel, plaj ve havalimanı transferlerini güvenle sağlıyoruz. Klimalı araçlarımız her sürüş sonrası sterilize edilmektedir.",
        phone: "+90 542 765 4321",
        email: "bodrum@pettaksi.com",
        website: "https://www.enuygun.com",
        baseTrustScore: 9.3,
        lastVerified: "2026-08-20"
      }
    ];

    for (const t of initialTaxis) {
      await client.query(`
        INSERT INTO pet_taxis (id, name, city, district, image_url, allowed_pets, features, price, description, phone, email, website, base_trust_score, last_verified)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
      `, [t.id, t.name, t.city, t.district, t.imageUrl, JSON.stringify(t.allowedPets), JSON.stringify(t.features), t.price, t.description, t.phone, t.email, t.website, t.baseTrustScore, t.lastVerified]);
    }

    console.log("Seeding initial vets data...");
    for (const v of initialVets) {
      await client.query(`
        INSERT INTO vets (id, name, city, district, image_url, address, features, description, phone, email, website, base_trust_score, last_verified)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
        ON CONFLICT (id) DO UPDATE SET
          name = EXCLUDED.name, city = EXCLUDED.city, district = EXCLUDED.district,
          image_url = EXCLUDED.image_url, address = EXCLUDED.address, features = EXCLUDED.features,
          description = EXCLUDED.description, phone = EXCLUDED.phone, email = EXCLUDED.email,
          website = EXCLUDED.website, base_trust_score = EXCLUDED.base_trust_score, last_verified = EXCLUDED.last_verified
      `, [v.id, v.name, v.city, v.district, v.imageUrl, v.address, JSON.stringify(v.features), v.description, v.phone, v.email, v.website, v.baseTrustScore, v.lastVerified]);
    }

    await seedGrowthTables(client);

    console.log("Database successfully seeded with zero character-limit errors.");

  } catch (error) {
    console.error("Database initialization failed:", error);
  } finally {
    client.release();
  }
}

const DEFAULT_FALLBACK_IMG = "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80";

function fixImageUrl(url, fallback = DEFAULT_FALLBACK_IMG) {
  if (!url || typeof url !== 'string') return fallback;
  if (url.includes('cdn.patiyleseyahat.com')) {
    return fallback;
  }
  if (url.startsWith('http://')) {
    return url.replace('http://', 'https://');
  }
  return url;
}

// Database Helpers
export async function syncInitialHotels(clientOrPool = pool) {
  for (const h of initialHotels) {
    await clientOrPool.query(`
      INSERT INTO hotels (
        id, name, city, district, type, allowed_pets, suitability, weight_limit, extra_fee, features, quiz_tags,
        base_trust_score, verified, last_verified, image_url, description, why_selected, suitable_for,
        not_suitable_for, disallowed_pets, breed_restrictions, max_pets_per_room, deposit_info, required_docs,
        can_leave_in_room_alone, rules, veterinary_support, phone, email, website, booking_links, editor_note, info_source, faq
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34)
      ON CONFLICT (id) DO NOTHING
    `, [
      h.id, h.name, h.city, h.district, h.type, JSON.stringify(h.allowedPets || []), h.suitability, h.weightLimit, h.extraFee,
      JSON.stringify(h.features || []), JSON.stringify(h.quizTags || []), h.baseTrustScore || 9.5, h.verified, h.lastVerified, h.imageUrl,
      h.description, h.whySelected, JSON.stringify(h.suitableFor || []), JSON.stringify(h.notSuitableFor || []),
      JSON.stringify(h.disallowedPets || []), h.breedRestrictions, h.maxPetsPerRoom, h.depositInfo, h.requiredDocs,
      h.canLeaveInRoomAlone, JSON.stringify(h.rules || {}), h.veterinarySupport, h.phone, h.email, h.website,
      JSON.stringify(h.bookingLinks || { enuygun: '', otelz: '', booking: '' }),
      h.editorNote, h.infoSource, JSON.stringify(h.faq || [])
    ]);
  }
}

export async function getHotels() {
  try {
    let result = await pool.query("SELECT * FROM hotels ORDER BY id DESC");
    if (result.rows.length < initialHotels.length) {
      console.log(`getHotels: DB has ${result.rows.length} hotels, lower than initialHotels (${initialHotels.length}). Auto-syncing...`);
      await syncInitialHotels(pool);
      result = await pool.query("SELECT * FROM hotels ORDER BY id DESC");
    }
    return result.rows.map(h => ({
      id: h.id,
      name: h.name,
      city: h.city,
      district: h.district,
      type: h.type,
      allowedPets: h.allowed_pets,
      suitability: h.suitability,
      weightLimit: h.weight_limit,
      extraFee: h.extra_fee,
      features: h.features,
      quizTags: h.quiz_tags,
      baseTrustScore: parseFloat(h.base_trust_score),
      verified: h.verified,
      lastVerified: h.last_verified,
      imageUrl: fixImageUrl(h.image_url),
      galleryImages: (h.gallery_images || []).map(img => fixImageUrl(img)),
      description: h.description,
      whySelected: h.why_selected,
      suitableFor: h.suitable_for,
      notSuitableFor: h.not_suitable_for,
      disallowedPets: h.disallowed_pets,
      breedRestrictions: h.breed_restrictions,
      maxPetsPerRoom: h.max_pets_per_room,
      depositInfo: h.deposit_info,
      requiredDocs: h.required_docs,
      canLeaveInRoomAlone: h.can_leave_in_room_alone,
      rules: h.rules,
      veterinarySupport: h.veterinary_support,
      phone: h.phone,
      email: h.email,
      website: h.website,
      bookingLinks: h.booking_links || { enuygun: '', otelz: '', booking: '' },
      editorNote: h.editor_note,
      infoSource: h.info_source,
      faq: h.faq
    }));
  } catch (err) {
    console.warn("getHotels DB error, returning initialHotels:", err.message);
    return initialHotels;
  }
}

export async function saveHotel(h) {
  const query = `
    INSERT INTO hotels (
      id, name, city, district, type, allowed_pets, suitability, weight_limit, extra_fee, features, quiz_tags,
      base_trust_score, verified, last_verified, image_url, gallery_images, description, why_selected, suitable_for,
      not_suitable_for, disallowed_pets, breed_restrictions, max_pets_per_room, deposit_info, required_docs,
      can_leave_in_room_alone, rules, veterinary_support, phone, email, website, booking_links, editor_note,
      info_source, faq
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35)
    ON CONFLICT (id) DO UPDATE SET
      name = EXCLUDED.name, city = EXCLUDED.city, district = EXCLUDED.district, type = EXCLUDED.type,
      allowed_pets = EXCLUDED.allowed_pets, suitability = EXCLUDED.suitability, weight_limit = EXCLUDED.weight_limit,
      extra_fee = EXCLUDED.extra_fee, features = EXCLUDED.features, quiz_tags = EXCLUDED.quiz_tags,
      base_trust_score = EXCLUDED.base_trust_score, verified = EXCLUDED.verified, last_verified = EXCLUDED.last_verified,
      image_url = EXCLUDED.image_url, gallery_images = EXCLUDED.gallery_images, description = EXCLUDED.description, why_selected = EXCLUDED.why_selected,
      suitable_for = EXCLUDED.suitable_for, not_suitable_for = EXCLUDED.not_suitable_for, disallowed_pets = EXCLUDED.disallowed_pets,
      breed_restrictions = EXCLUDED.breed_restrictions, max_pets_per_room = EXCLUDED.max_pets_per_room,
      deposit_info = EXCLUDED.deposit_info, required_docs = EXCLUDED.required_docs,
      can_leave_in_room_alone = EXCLUDED.can_leave_in_room_alone, rules = EXCLUDED.rules,
      veterinary_support = EXCLUDED.veterinary_support, phone = EXCLUDED.phone, email = EXCLUDED.email,
      website = EXCLUDED.website, booking_links = EXCLUDED.booking_links, editor_note = EXCLUDED.editor_note,
      info_source = EXCLUDED.info_source, faq = EXCLUDED.faq
    RETURNING *;
  `;
  const result = await pool.query(query, [
    h.id, h.name, h.city, h.district, h.type, JSON.stringify(h.allowedPets), h.suitability, h.weightLimit, h.extraFee,
    JSON.stringify(h.features), JSON.stringify(h.quizTags || []), h.baseTrustScore ?? 9.5, h.verified, h.lastVerified, h.imageUrl,
    JSON.stringify(h.galleryImages || []), h.description, h.whySelected, JSON.stringify(h.suitableFor || []), JSON.stringify(h.notSuitableFor || []),
    JSON.stringify(h.disallowedPets || []), h.breedRestrictions, h.maxPetsPerRoom, h.depositInfo, h.requiredDocs,
    h.canLeaveInRoomAlone, JSON.stringify(h.rules || {}), h.veterinarySupport, h.phone, h.email, h.website,
    JSON.stringify(h.bookingLinks || { enuygun: '', otelz: '', booking: '' }), h.editorNote, h.infoSource,
    JSON.stringify(h.faq || [])
  ]);
  return result.rows[0];
}

export async function deleteHotel(id) {
  await pool.query("DELETE FROM hotels WHERE id = $1", [id]);
}

export async function getBoardings() {
  try {
    const result = await pool.query("SELECT * FROM boardings ORDER BY id DESC");
    return result.rows.map(b => ({
      id: b.id,
      name: b.name,
      category: b.category,
      city: b.city,
      district: b.district,
      imageUrl: b.image_url,
      galleryImages: b.gallery_images || [],
      allowedPets: b.allowed_pets,
      features: b.features,
      quizTags: b.quiz_tags,
      price: b.price,
      description: b.description,
      boardingModel: b.boarding_model,
      dailyProgram: b.daily_program,
      accreditedVet: b.accredited_vet,
      phone: b.phone,
      email: b.email,
      website: b.website,
      bookingLinks: b.booking_links || { enuygun: '', otelz: '', booking: '' },
      cameraSupport: b.camera_support,
      requiredDocs: b.required_docs,
      neuteringRequired: b.neutering_required,
      aggressionPolicy: b.aggression_policy,
      infoSource: b.info_source,
      baseTrustScore: parseFloat(b.base_trust_score),
      lastVerified: b.last_verified
    }));
  } catch (err) {
    console.warn("getBoardings DB error, returning initialBoardings:", err.message);
    return initialBoardings;
  }
}

export async function saveBoarding(b) {
  const query = `
    INSERT INTO boardings (
      id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description,
      boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs,
      neutering_required, aggression_policy, info_source, base_trust_score, last_verified
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26)
    ON CONFLICT (id) DO UPDATE SET
      name = EXCLUDED.name, category = EXCLUDED.category, city = EXCLUDED.city, district = EXCLUDED.district,
      image_url = EXCLUDED.image_url, gallery_images = EXCLUDED.gallery_images, allowed_pets = EXCLUDED.allowed_pets, features = EXCLUDED.features,
      quiz_tags = EXCLUDED.quiz_tags, price = EXCLUDED.price, description = EXCLUDED.description,
      boarding_model = EXCLUDED.boarding_model, daily_program = EXCLUDED.daily_program,
      accredited_vet = EXCLUDED.accredited_vet, phone = EXCLUDED.phone, email = EXCLUDED.email,
      website = EXCLUDED.website, booking_links = EXCLUDED.booking_links, camera_support = EXCLUDED.camera_support, required_docs = EXCLUDED.required_docs,
      neutering_required = EXCLUDED.neutering_required, aggression_policy = EXCLUDED.aggression_policy,
      info_source = EXCLUDED.info_source, base_trust_score = EXCLUDED.base_trust_score, last_verified = EXCLUDED.last_verified
    RETURNING *;
  `;
  const result = await pool.query(query, [
    b.id, b.name, b.category, b.city, b.district, b.imageUrl, JSON.stringify(b.galleryImages || []), JSON.stringify(b.allowedPets), JSON.stringify(b.features),
    JSON.stringify(b.quizTags || []), b.price, b.description, b.boardingModel, b.dailyProgram, b.accreditedVet, b.phone,
    b.email, b.website, JSON.stringify(b.bookingLinks || { enuygun: '', otelz: '', booking: '' }),
    b.cameraSupport, b.requiredDocs, b.neuteringRequired, b.aggressionPolicy, b.infoSource,
    b.baseTrustScore || 9.5, b.lastVerified
  ]);
  return result.rows[0];
}

export async function deleteBoarding(id) {
  await pool.query("DELETE FROM boardings WHERE id = $1", [id]);
}

export async function getGuides() {
  try {
    const result = await pool.query("SELECT * FROM guides ORDER BY id DESC");
    return result.rows.map(g => ({
      id: g.id,
      slug: g.slug,
      title: g.title,
      category: g.category,
      shortAnswer: g.short_answer,
      summary: g.summary,
      publishedAt: g.published_at,
      updatedAt: g.updated_at,
      author: g.author,
      vetChecked: g.vet_checked,
      vetName: g.vet_name,
      content: g.content,
      checklist: g.checklist,
      faq: g.faq,
      seoTitle: g.seo_title,
      seoDesc: g.seo_desc
    }));
  } catch (err) {
    console.warn("getGuides DB error, returning initialGuides:", err.message);
    return initialGuides;
  }
}

export async function saveGuide(g) {
  const query = `
    INSERT INTO guides (
      id, slug, title, category, short_answer, summary, published_at, updated_at, author, vet_checked, vet_name,
      content, checklist, faq, seo_title, seo_desc
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
    ON CONFLICT (id) DO UPDATE SET
      slug = EXCLUDED.slug, title = EXCLUDED.title, category = EXCLUDED.category,
      short_answer = EXCLUDED.short_answer, summary = EXCLUDED.summary,
      published_at = EXCLUDED.published_at, updated_at = EXCLUDED.updated_at,
      author = EXCLUDED.author, vet_checked = EXCLUDED.vet_checked, vet_name = EXCLUDED.vet_name,
      content = EXCLUDED.content, checklist = EXCLUDED.checklist, faq = EXCLUDED.faq,
      seo_title = EXCLUDED.seo_title, seo_desc = EXCLUDED.seo_desc
    RETURNING *;
  `;
  const result = await pool.query(query, [
    g.id, g.slug, g.title, g.category, g.shortAnswer, g.summary, g.publishedAt, g.updatedAt, JSON.stringify(g.author),
    g.vetChecked, g.vetName, g.content, JSON.stringify(g.checklist || []), JSON.stringify(g.faq || []), g.seoTitle, g.seoDesc
  ]);
  return result.rows[0];
}

export async function deleteGuide(id) {
  await pool.query("DELETE FROM guides WHERE id = $1", [id]);
}

export async function getCorrections() {
  try {
    const result = await pool.query("SELECT * FROM corrections ORDER BY id DESC");
    return result.rows.map(c => ({
      id: c.id,
      hotelId: c.hotel_id,
      hotelName: c.hotel_name,
      text: c.text,
      date: c.date,
      status: c.status
    }));
  } catch (err) {
    console.warn("getCorrections DB error, returning initialCorrections:", err.message);
    return initialCorrections;
  }
}

export async function saveCorrection(c) {
  const query = `
    INSERT INTO corrections (id, hotel_id, hotel_name, text, date, status)
    VALUES ($1, $2, $3, $4, $5, $6)
    ON CONFLICT (id) DO UPDATE SET
      status = EXCLUDED.status
    RETURNING *;
  `;
  const result = await pool.query(query, [c.id, c.hotelId, c.hotelName, c.text, c.date, c.status]);
  return result.rows[0];
}

export async function getComplaints() {
  try {
    const result = await pool.query("SELECT * FROM complaints ORDER BY id DESC");
    return result.rows.map(c => ({
      id: c.id,
      targetId: c.target_id,
      targetName: c.target_name,
      author: c.author,
      text: c.text,
      date: c.date,
      status: c.status
    }));
  } catch (err) {
    console.warn("getComplaints DB error, returning initialComplaints:", err.message);
    return initialComplaints;
  }
}

export async function saveComplaint(c) {
  const query = `
    INSERT INTO complaints (id, target_id, target_name, author, text, date, status)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    ON CONFLICT (id) DO UPDATE SET
      status = EXCLUDED.status
    RETURNING *;
  `;
  const result = await pool.query(query, [c.id, c.targetId, c.targetName, c.author, c.text, c.date, c.status]);
  return result.rows[0];
}

// Reviews Helpers
export async function getReviews(targetId) {
  try {
    const result = await pool.query(
      "SELECT * FROM reviews WHERE target_id = $1 AND status = 'approved' ORDER BY date DESC",
      [targetId]
    );
    return result.rows.map(r => ({
      id: r.id,
      targetId: r.target_id,
      author: r.author,
      rating: parseInt(r.rating),
      text: r.text,
      date: r.date,
      status: r.status
    }));
  } catch (err) {
    return [];
  }
}

export async function saveReview(r) {
  const query = `
    INSERT INTO reviews (id, target_id, author, rating, text, date, status)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    ON CONFLICT (id) DO UPDATE SET
      author = EXCLUDED.author, rating = EXCLUDED.rating, text = EXCLUDED.text,
      date = EXCLUDED.date, status = EXCLUDED.status
    RETURNING *;
  `;
  const result = await pool.query(query, [
    r.id, r.targetId, r.author, r.rating, r.text, r.date, r.status || 'approved'
  ]);
  return result.rows[0];
}

// Pet Taxis Helpers
export async function getPetTaxis() {
  try {
    const result = await pool.query("SELECT * FROM pet_taxis ORDER BY id DESC");
    return result.rows.map(t => ({
      id: t.id,
      name: t.name,
      city: t.city,
      district: t.district,
      imageUrl: t.image_url,
      allowedPets: t.allowed_pets,
      features: t.features,
      price: t.price,
      description: t.description,
      phone: t.phone,
      email: t.email,
      website: t.website,
      baseTrustScore: parseFloat(t.base_trust_score),
      lastVerified: t.last_verified
    }));
  } catch (err) {
    console.warn("getPetTaxis DB error, returning initialTaxis:", err.message);
    return initialTaxis;
  }
}

export async function savePetTaxi(t) {
  const query = `
    INSERT INTO pet_taxis (id, name, city, district, image_url, allowed_pets, features, price, description, phone, email, website, base_trust_score, last_verified)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
    ON CONFLICT (id) DO UPDATE SET
      name = EXCLUDED.name, city = EXCLUDED.city, district = EXCLUDED.district, image_url = EXCLUDED.image_url,
      allowed_pets = EXCLUDED.allowed_pets, features = EXCLUDED.features, price = EXCLUDED.price,
      description = EXCLUDED.description, phone = EXCLUDED.phone, email = EXCLUDED.email, website = EXCLUDED.website,
      base_trust_score = EXCLUDED.base_trust_score, last_verified = EXCLUDED.last_verified
    RETURNING *;
  `;
  const result = await pool.query(query, [
    t.id, t.name, t.city, t.district, t.imageUrl, JSON.stringify(t.allowedPets || []), JSON.stringify(t.features || []),
    t.price, t.description, t.phone, t.email, t.website, t.baseTrustScore || 9.5, t.lastVerified
  ]);
  return result.rows[0];
}

export async function deletePetTaxi(id) {
  await pool.query("DELETE FROM pet_taxis WHERE id = $1", [id]);
}

// Vets Helpers
export async function syncInitialVets(clientOrPool = pool) {
  for (const v of initialVets) {
    await clientOrPool.query(`
      INSERT INTO vets (id, name, city, district, image_url, address, features, description, phone, email, website, base_trust_score, last_verified)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
      ON CONFLICT (id) DO NOTHING
    `, [v.id, v.name, v.city, v.district, v.imageUrl, v.address, JSON.stringify(v.features), v.description, v.phone, v.email, v.website, v.baseTrustScore, v.lastVerified]);
  }
}

export async function getVets() {
  try {
    let result = await pool.query("SELECT * FROM vets ORDER BY id DESC");
    if (result.rows.length < initialVets.length) {
      console.log(`getVets: DB has ${result.rows.length} vets, lower than initialVets (${initialVets.length}). Auto-syncing...`);
      await syncInitialVets(pool);
      result = await pool.query("SELECT * FROM vets ORDER BY id DESC");
    }
    return result.rows.map(v => ({
      id: v.id,
      name: v.name,
      city: v.city,
      district: v.district,
      imageUrl: v.image_url,
      address: v.address,
      features: v.features,
      description: v.description,
      phone: v.phone,
      email: v.email,
      website: v.website,
      baseTrustScore: parseFloat(v.base_trust_score),
      lastVerified: v.last_verified
    }));
  } catch (err) {
    console.warn("getVets DB error, returning initialVets:", err.message);
    return initialVets;
  }
}

export async function saveVet(v) {
  const query = `
    INSERT INTO vets (id, name, city, district, image_url, address, features, description, phone, email, website, base_trust_score, last_verified)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
    ON CONFLICT (id) DO UPDATE SET
      name = EXCLUDED.name, city = EXCLUDED.city, district = EXCLUDED.district, image_url = EXCLUDED.image_url,
      address = EXCLUDED.address, features = EXCLUDED.features, description = EXCLUDED.description,
      phone = EXCLUDED.phone, email = EXCLUDED.email, website = EXCLUDED.website,
      base_trust_score = EXCLUDED.base_trust_score, last_verified = EXCLUDED.last_verified
    RETURNING *;
  `;
  const result = await pool.query(query, [
    v.id, v.name, v.city, v.district, v.imageUrl, v.address, JSON.stringify(v.features || []), v.description,
    v.phone, v.email, v.website, v.baseTrustScore || 9.5, v.lastVerified
  ]);
  return result.rows[0];
}

export async function deleteVet(id) {
  await pool.query("DELETE FROM vets WHERE id = $1", [id]);
}

// Experiences / Places Helpers
export async function getExperiences() {
  try {
    const result = await pool.query("SELECT * FROM experiences ORDER BY id DESC");
    return result.rows.map(e => ({
      id: e.id,
      name: e.name,
      category: e.category,
      city: e.city,
      district: e.district,
      imageUrl: e.image_url,
      petPolicy: e.pet_policy,
      allowedPets: e.allowed_pets,
      features: e.features,
      description: e.description,
      address: e.address,
      phone: e.phone,
      website: e.website,
      mapUrl: e.map_url,
      bestTime: e.best_time,
      rules: e.rules,
      verified: e.verified,
      baseTrustScore: parseFloat(e.base_trust_score),
      lastVerified: e.last_verified
    }));
  } catch (err) {
    console.warn("getExperiences DB error, returning initialExperiences:", err.message);
    return initialExperiences;
  }
}

export async function saveExperience(e) {
  const query = `
    INSERT INTO experiences (
      id, name, category, city, district, image_url, pet_policy, allowed_pets, features, description,
      address, phone, website, map_url, best_time, rules, verified, base_trust_score, last_verified
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)
    ON CONFLICT (id) DO UPDATE SET
      name = EXCLUDED.name, category = EXCLUDED.category, city = EXCLUDED.city, district = EXCLUDED.district,
      image_url = EXCLUDED.image_url, pet_policy = EXCLUDED.pet_policy, allowed_pets = EXCLUDED.allowed_pets,
      features = EXCLUDED.features, description = EXCLUDED.description, address = EXCLUDED.address,
      phone = EXCLUDED.phone, website = EXCLUDED.website, map_url = EXCLUDED.map_url, best_time = EXCLUDED.best_time,
      rules = EXCLUDED.rules, verified = EXCLUDED.verified, base_trust_score = EXCLUDED.base_trust_score,
      last_verified = EXCLUDED.last_verified
    RETURNING *;
  `;
  const result = await pool.query(query, [
    e.id, e.name, e.category, e.city, e.district, e.imageUrl, e.petPolicy,
    JSON.stringify(e.allowedPets || []), JSON.stringify(e.features || []), e.description,
    e.address, e.phone, e.website, e.mapUrl, e.bestTime, e.rules,
    e.verified !== false, e.baseTrustScore || 9.0, e.lastVerified
  ]);
  return result.rows[0];
}

export async function deleteExperience(id) {
  await pool.query("DELETE FROM experiences WHERE id = $1", [id]);
}

// Advertising Helpers
export async function getAds() {
  try {
    const result = await pool.query("SELECT * FROM ads ORDER BY id DESC");
    return result.rows.map(ad => ({
      id: ad.id,
      title: ad.title,
      sponsor: ad.sponsor,
      placement: ad.placement,
      targetUrl: ad.target_url,
      imageUrl: ad.image_url,
      city: ad.city,
      category: ad.category,
      startsAt: ad.starts_at,
      endsAt: ad.ends_at,
      status: ad.status,
      impressions: ad.impressions,
      clicks: ad.clicks
    }));
  } catch (err) {
    console.warn("getAds DB error, returning initialAds:", err.message);
    return initialAds;
  }
}

export async function saveAd(ad) {
  const query = `
    INSERT INTO ads (
      id, title, sponsor, placement, target_url, image_url, city, category, starts_at, ends_at, status, impressions, clicks
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
    ON CONFLICT (id) DO UPDATE SET
      title = EXCLUDED.title, sponsor = EXCLUDED.sponsor, placement = EXCLUDED.placement,
      target_url = EXCLUDED.target_url, image_url = EXCLUDED.image_url, city = EXCLUDED.city,
      category = EXCLUDED.category, starts_at = EXCLUDED.starts_at, ends_at = EXCLUDED.ends_at,
      status = EXCLUDED.status, impressions = EXCLUDED.impressions, clicks = EXCLUDED.clicks
    RETURNING *;
  `;
  const result = await pool.query(query, [
    ad.id, ad.title, ad.sponsor, ad.placement, ad.targetUrl, ad.imageUrl, ad.city, ad.category,
    ad.startsAt, ad.endsAt, ad.status || 'active', parseInt(ad.impressions || 0), parseInt(ad.clicks || 0)
  ]);
  return result.rows[0];
}

export async function deleteAd(id) {
  await pool.query("DELETE FROM ads WHERE id = $1", [id]);
}

export async function getAdApplications() {
  const result = await pool.query("SELECT * FROM ad_applications ORDER BY created_at DESC");
  return result.rows.map(row => ({
    id: row.id,
    businessName: row.business_name,
    businessType: row.business_type,
    contactName: row.contact_name,
    email: row.email,
    phone: row.phone,
    website: row.website,
    city: row.city,
    message: row.message,
    createdAt: row.created_at
  }));
}

export async function saveAdApplication(application) {
  const result = await pool.query(`
    INSERT INTO ad_applications (
      id, business_name, business_type, contact_name, email, phone, website, city, message
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING id, created_at
  `, [
    application.id, application.businessName, application.businessType, application.contactName,
    application.email, application.phone, application.website || null, application.city,
    application.message || null
  ]);
  return result.rows[0];
}
