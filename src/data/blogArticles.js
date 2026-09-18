import { CLUSTER_A_ARTICLES } from "./blog/clusterA.js";
import { CLUSTER_B_ARTICLES } from "./blog/clusterB.js";
import { CLUSTER_C_ARTICLES } from "./blog/clusterC.js";
import { CLUSTER_D_ARTICLES } from "./blog/clusterD.js";
import { CLUSTER_E_ARTICLES } from "./blog/clusterE.js";
import { CLUSTER_F_ARTICLES } from "./blog/clusterF.js";
import { CLUSTER_G_ARTICLES } from "./blog/clusterG.js";

export const BLOG_CLUSTERS = [
  {
    id: "cluster-a",
    slug: "evcil-hayvanla-seyahat",
    code: "A",
    title: "Evcil Hayvanla Seyahat",
    badge: "Seyahat & Ulaşım",
    description: "Uçak, araba, toplu taşıma kuralları ve pet pansiyonu hazırlıkları.",
    articleCount: CLUSTER_A_ARTICLES.length
  },
  {
    id: "cluster-b",
    slug: "kopek-davranislari-ve-gunluk-yasam",
    code: "B",
    title: "Köpek Davranışları ve Günlük Yaşam",
    badge: "Köpek Bakımı",
    description: "Tasma eğitimi, ayrılık kaygısı, havlama, tuvalet ve sosyalleşme rehberleri.",
    articleCount: CLUSTER_B_ARTICLES.length
  },
  {
    id: "cluster-c",
    slug: "kedi-davranislari-ve-gunluk-yasam",
    code: "C",
    title: "Kedi Davranışları ve Günlük Yaşam",
    badge: "Kedi Bakımı",
    description: "Kum kabı sorunları, tüy yumağı, tırnak kesimi ve yalnız kalma yönetimi.",
    articleCount: CLUSTER_C_ARTICLES.length
  },
  {
    id: "cluster-d",
    slug: "pet-hizmeti-secim-rehberleri",
    code: "D",
    title: "Pet Hizmeti Seçim Rehberleri",
    badge: "Hizmet Seçimi",
    description: "Gezdirici, otel, pet taksi, kuaför ve bakıcı seçerken dikkat edilecekler.",
    articleCount: CLUSTER_D_ARTICLES.length
  },
  {
    id: "cluster-e",
    slug: "sahiplenme-ve-ilk-gunler",
    code: "E",
    title: "Sahiplenme ve İlk Günler",
    badge: "Sahiplenme",
    description: "3-3-3 kuralı, ilk 72 saat güven protokolü, ev güvenliği ve alışveriş listeleri.",
    articleCount: CLUSTER_E_ARTICLES.length
  },
  {
    id: "cluster-f",
    slug: "mevsimsel-guvenlik-ve-bakim",
    code: "F",
    title: "Mevsimsel Güvenlik ve Bakım",
    badge: "Mevsimsel Bakım",
    description: "Yaz sıcakları, kışın yol tuzları, kene koruması ve havai fişek tedbirleri.",
    articleCount: CLUSTER_F_ARTICLES.length
  },
  {
    id: "cluster-g",
    slug: "yerel-kesif-ve-patili-yasam",
    code: "G",
    title: "Yerel Keşif ve Patili Yaşam",
    badge: "Açık Hava & Yaşam",
    description: "İstanbul rotaları, köpekle piknik, çadır kampı ve köpek plajları kuralları.",
    articleCount: CLUSTER_G_ARTICLES.length
  }
];

export const BLOG_ARTICLES = [
  ...CLUSTER_A_ARTICLES,
  ...CLUSTER_B_ARTICLES,
  ...CLUSTER_C_ARTICLES,
  ...CLUSTER_D_ARTICLES,
  ...CLUSTER_E_ARTICLES,
  ...CLUSTER_F_ARTICLES,
  ...CLUSTER_G_ARTICLES
];

export function getBlogArticleBySlug(slug) {
  if (!slug) return null;
  const cleanSlug = slug.replace(/^(\/)?(blog|rehber)\//, "").replace(/\/$/, "");
  return BLOG_ARTICLES.find(
    (a) => a.slug === cleanSlug || a.id === cleanSlug || a.slug === slug || a.id === slug
  ) || null;
}

export function getBlogArticlesByCluster(clusterId) {
  return BLOG_ARTICLES.filter(
    (a) => a.clusterId === clusterId || a.clusterTitle === clusterId
  );
}

export function getAllBlogArticles() {
  return BLOG_ARTICLES;
}

export function getRelatedBlogArticles(currentArticle, limit = 3) {
  if (!currentArticle) return [];
  return BLOG_ARTICLES
    .filter(
      (a) =>
        a.id !== currentArticle.id &&
        (a.clusterId === currentArticle.clusterId || a.category === currentArticle.category)
    )
    .slice(0, limit);
}
