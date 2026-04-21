const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const siteUrl = "https://shippingcargofromdubaitorussia.com";
const whatsappUrl = "https://wa.me/971544717855";

const blogStyles = `
:root {
  --bg: #f4f7fb;
  --surface: #ffffff;
  --surface-soft: #eef3f8;
  --line: #d9e2ec;
  --ink: #162235;
  --muted: #5d6c7b;
  --brand: #1d3557;
  --accent: #e63946;
  --accent-soft: #fdf0f2;
  --radius: 8px;
  --shadow: 0 14px 34px rgba(29, 53, 87, 0.08);
  --content: 1180px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background: var(--bg);
  color: var(--ink);
  font-family: Inter, Arial, sans-serif;
  line-height: 1.7;
}

img { display: block; max-width: 100%; }
a { color: var(--brand); text-decoration: none; }
a:hover { text-decoration: underline; }

.blog-topbar {
  background: var(--brand);
  color: #fff;
  font-size: 0.95rem;
}

.blog-wrap {
  width: min(calc(100% - 32px), var(--content));
  margin: 0 auto;
}

.blog-topbar .blog-wrap,
.blog-header .blog-wrap,
.blog-hero .blog-wrap,
.blog-section .blog-wrap,
.blog-footer .blog-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.blog-topbar .blog-wrap { padding: 10px 0; flex-wrap: wrap; }
.blog-topbar a { color: #fff; }

.blog-header {
  position: sticky;
  top: 0;
  z-index: 15;
  background: rgba(255,255,255,0.95);
  border-bottom: 1px solid var(--line);
  backdrop-filter: blur(10px);
}

.blog-header .blog-wrap { padding: 16px 0; }

.blog-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 800;
  color: var(--ink);
}

.blog-brand img { width: 44px; height: 44px; }

.blog-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  align-items: center;
}

.blog-nav a {
  color: var(--ink);
  font-weight: 600;
  font-size: 0.95rem;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 18px;
  border-radius: var(--radius);
  border: 1px solid transparent;
  font-weight: 700;
  text-decoration: none;
}

.button-primary {
  background: var(--accent);
  color: #fff;
}

.button-secondary {
  background: transparent;
  border-color: var(--brand);
  color: var(--brand);
}

.blog-hero {
  background: linear-gradient(180deg, rgba(29,53,87,0.08), rgba(29,53,87,0.02));
  border-bottom: 1px solid var(--line);
}

.blog-hero .blog-wrap {
  align-items: stretch;
  padding: 52px 0 34px;
}

.blog-hero-copy { flex: 1 1 58%; }
.blog-hero-visual {
  flex: 1 1 42%;
  overflow: hidden;
  border-radius: var(--radius);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
  background: var(--surface);
}
.blog-hero-visual img { width: 100%; height: 100%; min-height: 300px; object-fit: cover; }

.eyebrow {
  color: var(--accent);
  font-weight: 800;
  text-transform: uppercase;
  font-size: 0.88rem;
}

h1, h2, h3 {
  color: var(--ink);
  margin: 0 0 14px;
  line-height: 1.2;
}

h1 { font-size: clamp(2rem, 4vw, 3.25rem); max-width: 13ch; }
h2 { font-size: clamp(1.55rem, 2vw, 2.1rem); }
h3 { font-size: 1.12rem; }

p, li { color: var(--muted); font-size: 1rem; }

.pill-row,
.hero-actions,
.link-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.pill {
  background: var(--surface-soft);
  border: 1px solid var(--line);
  color: var(--brand);
  border-radius: var(--radius);
  padding: 8px 12px;
  font-size: 0.92rem;
  font-weight: 700;
}

.blog-section { padding: 42px 0; }
.blog-section.alt {
  background: var(--surface);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.grid-2, .grid-3, .grid-4, .article-layout, .footer-grid {
  display: grid;
  gap: 18px;
}

.grid-2 { grid-template-columns: repeat(2, minmax(0,1fr)); }
.grid-3 { grid-template-columns: repeat(3, minmax(0,1fr)); }
.grid-4 { grid-template-columns: repeat(4, minmax(0,1fr)); }
.article-layout { grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.65fr); align-items: start; }
.footer-grid { grid-template-columns: 1.3fr 1fr 1fr; }

.card,
.aside-card,
.quote-box,
.article-card,
.breadcrumbs,
.toc-box {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.card,
.aside-card,
.quote-box,
.article-card,
.toc-box {
  padding: 22px;
}

.article-card { padding: 26px; }

.section-intro { max-width: 760px; margin-bottom: 22px; }
.stack { display: grid; gap: 18px; }

.breadcrumbs {
  width: min(calc(100% - 32px), var(--content));
  margin: 24px auto 0;
  padding: 12px 18px;
}

.breadcrumbs ol {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0;
  padding: 0;
  font-size: 0.94rem;
}

.breadcrumbs li:not(:last-child)::after {
  content: "/";
  margin-left: 10px;
  color: var(--muted);
}

.article-body p { margin: 0 0 18px; }
.article-body ul { margin: 0 0 18px; padding-left: 18px; }
.article-body li { margin-bottom: 8px; }
.article-body h2 { margin-top: 30px; }
.article-body h3 { margin-top: 20px; }

.article-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  color: var(--muted);
  font-size: 0.94rem;
  margin: 14px 0 0;
}

.toc-box ul,
.footer-list,
.check-list {
  margin: 0;
  padding-left: 18px;
}

.toc-box li,
.footer-list li,
.check-list li { margin-bottom: 10px; }

.check-list {
  list-style: none;
  padding: 0;
}

.check-list li {
  position: relative;
  padding-left: 24px;
}

.check-list li::before {
  content: "•";
  position: absolute;
  left: 8px;
  top: -2px;
  color: var(--accent);
  font-size: 1.3rem;
}

.quote-box {
  background: linear-gradient(180deg, var(--surface), var(--accent-soft));
}

.quote-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 18px;
}

.blog-footer {
  background: #0f1b29;
  color: #d9e2ec;
  margin-top: 38px;
}

.blog-footer .blog-wrap {
  display: block;
  padding: 38px 0 18px;
}

.blog-footer h2,
.blog-footer h3,
.blog-footer p,
.blog-footer a { color: #d9e2ec; }
.blog-footer a:hover { color: #fff; }

.footer-bottom {
  border-top: 1px solid rgba(217,226,236,0.16);
  margin-top: 16px;
  padding-top: 16px;
  font-size: 0.92rem;
}

@media (max-width: 980px) {
  .blog-topbar .blog-wrap,
  .blog-header .blog-wrap,
  .blog-hero .blog-wrap,
  .blog-section .blog-wrap {
    display: block;
  }

  .blog-nav { margin-top: 14px; }
  .grid-2, .grid-3, .grid-4, .article-layout, .footer-grid { grid-template-columns: 1fr; }
}
`;

const posts = [
  {
    slug: "shipping-cargo-from-dubai-to-russia-guide",
    title: "Shipping Cargo From Dubai to Russia: Simple Guide",
    metaTitle: "Shipping Cargo From Dubai to Russia | Simple Guide",
    description: "A simple guide to shipping cargo from Dubai to Russia, covering air freight, sea freight, documents, transit planning and quote preparation.",
    h1: "Shipping Cargo From Dubai to Russia: Simple Guide",
    category: "Shipping Guide",
    image: "/img/banner.webp",
    excerpt: "A straightforward guide for sending cargo from Dubai to Russia with practical notes on freight mode, documents, timing and quote preparation.",
    intro: [
      "Shipping cargo from Dubai to Russia usually starts with four basic questions: what the cargo is, how urgent it is, where in Russia it needs to go, and whether the shipping documents are already prepared. Those points decide whether air freight, sea freight or a managed delivery option makes more sense.",
      "This page is a simple starting guide. It is meant to help the sender understand the route before requesting a quote, so the shipment can be planned with clearer expectations on service, timing and paperwork."
    ],
    sections: [
      {
        h2: "Start with the cargo details",
        paragraphs: [
          "Before asking for a shipping price, write down the shipment type, total weight, dimensions, pickup location in Dubai and destination city in Russia. These details affect both cost and route choice.",
          "A small urgent carton, a pallet shipment and a larger commercial load will not move the same way, even if they are going to the same country."
        ]
      },
      {
        h2: "Choose the right shipping method",
        paragraphs: [
          "Air freight is usually better for urgent shipments, samples, documents and smaller commercial cargo that needs faster delivery. Sea freight is usually better for larger, heavier or less urgent shipments where cost control matters more than speed.",
          "If the shipment needs pickup, customs support and final delivery in one managed process, a door-to-door arrangement can also be useful."
        ]
      },
      {
        h2: "Prepare the shipping documents early",
        paragraphs: [
          "Clean paperwork makes the route much easier to manage. In most cases the shipment should have a commercial invoice, packing list, sender details, receiver details and an accurate description of the goods.",
          "If the cargo description is vague or the documents change after the quote, both the delivery timing and the final cost can change as well."
        ]
      },
      {
        h2: "Transit time depends on service and destination",
        paragraphs: [
          "Shipping time from Dubai to Russia depends on the freight method, destination city, customs handling and how quickly the shipment is ready at origin. Air freight is normally faster, while sea freight takes longer but is often better for planned cargo.",
          "That is why timing should be discussed as a realistic range, not as one fixed promise for every shipment."
        ]
      },
      {
        h2: "Request a better quote",
        paragraphs: [
          "A useful quote starts with clear shipment facts: cargo type, weight, dimensions, pickup point, destination city and preferred service speed. The more accurate the shipment brief is, the more useful the quote will be.",
          "If you are shipping cargo from Dubai to Russia for the first time, start with the basic route and document information first, then request the quote with those details ready."
        ]
      }
    ],
    faq: [
      ["What is the best way to ship cargo from Dubai to Russia?", "That depends on the shipment size, urgency, destination city and document readiness. Air freight is usually better for urgent cargo, while sea freight is usually better for larger planned shipments."],
      ["What documents are usually needed?", "Most shipments need a commercial invoice, packing list, sender details, receiver details and a clear cargo description."],
      ["Can I get a quote before the cargo is packed?", "Yes, but the quote will be more accurate if the dimensions, weight and shipment details are already confirmed."]
    ],
    related: []
  }
];

const postMap = new Map(posts.map((post) => [post.slug, post]));

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function writeFile(relPath, content) {
  const target = path.join(root, relPath);
  ensureDir(path.dirname(target));
  fs.writeFileSync(target, content);
}

function postUrl(slug) {
  return `/blog/${slug}/`;
}

function absolute(rel) {
  if (rel === "/") return `${siteUrl}/`;
  return `${siteUrl}${rel}`;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function readTime(post) {
  const words = JSON.stringify(post).split(/\s+/).length;
  return `${Math.max(4, Math.round(words / 210))} min read`;
}

function header(current = "") {
  return `<header class="container mx-auto px-4 py-4 flex items-center justify-between">
        <div class="flex items-center">
            <a href="/" class="flex items-center no-underline">
                <img src="/img/logo.webp" alt="dubai to russia" style="width: 140px;">
                <div class="ml-2 w-4 h-4 rounded-full bg-primary"></div>
            </a>
        </div>
        
        <nav class="hidden md:flex items-center space-x-8">
            <a href="/" class="text-secondary hover:text-accent">Home</a>
            <a href="/#services" class="text-secondary hover:text-accent">Services</a>
            <a href="/blog/" class="text-secondary hover:text-accent">Blog</a>
            <a href="/#quote" class="text-secondary hover:text-accent">Contact</a>
        </nav>
        
        <div class="flex items-center space-x-4">
            <a href="/#tracking" class="hidden md:block border border-secondary text-secondary px-4 py-2 rounded hover:bg-secondary hover:text-white transition">Track Shipment</a>
            <a href="/#quote" class="bg-primary text-white px-4 py-2 rounded hover:bg-red-600 transition">Get a Quote</a>
        </div>
    </header>`;
}

function footer() {
  return `<footer class="blog-footer">
    <div class="blog-wrap">
      <div class="footer-grid">
        <div>
          <h2>D2R Cargo Blog</h2>
          <p>Simple, route-focused guidance for shippers moving cargo from Dubai to Russia and needing cleaner answers on service choice, customs, timing and delivery planning.</p>
          <p><a href="/">Visit homepage</a><br><a href="mailto:info@d2r.com">info@d2r.com</a><br><a href="tel:+971544717855">+971 54 471 7855</a></p>
        </div>
        <div>
          <h3>Main Guide</h3>
          <ul class="footer-list">
            <li><a href="${postUrl("shipping-cargo-from-dubai-to-russia-guide")}">Shipping Cargo From Dubai to Russia: Simple Guide</a></li>
          </ul>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul class="footer-list">
            <li><a href="/">Home</a></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/#quote">Get a Quote</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 D2R Cargo. Blog content focused on Dubai to Russia shipping routes, freight planning and customs-ready delivery support.</p>
      </div>
    </div>
  </footer>`;
}

function whatsappFloat() {
  return `<a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" class="whatsapp-float">
    <span aria-hidden="true" class="whatsapp-float__ripple whatsapp-float__ripple--one"></span>
    <span aria-hidden="true" class="whatsapp-float__ripple whatsapp-float__ripple--two"></span>
    <span aria-hidden="true" class="whatsapp-float__core">
      <svg aria-hidden="true" viewBox="0 0 48 48" class="whatsapp-float__icon">
        <path fill="currentColor" d="M40.8 7A23.56 23.56 0 0 0 24 0C10.9 0 .2 10.67.19 23.78c0 4.2 1.1 8.28 3.17 11.9L0 48l12.61-3.31a23.7 23.7 0 0 0 11.37 2.9h.01c13.11 0 23.78-10.67 23.79-23.79A23.7 23.7 0 0 0 40.8 7ZM23.98 43.56a19.8 19.8 0 0 1-10.07-2.76l-.72-.43-7.48 1.96 2-7.3-.47-.75a19.67 19.67 0 0 1-3.02-10.51c0-10.88 8.87-19.75 19.77-19.75 5.3 0 10.43 2.08 14.39 5.8a19.68 19.68 0 0 1 5.79 13.99c-.01 10.91-8.88 19.78-19.79 19.78m10.84-14.8c-.6-.29-3.51-1.74-4.06-1.94-.55-.19-.94-.29-1.34.29-.4.59-1.54 1.94-1.88 2.32-.34.4-.7.45-1.29.16-.59-.3-2.51-.93-4.78-2.96-1.77-1.57-2.96-3.53-3.31-4.12-.34-.59-.03-.91.27-1.21.26-.27.59-.7.89-1.04.29-.34.39-.59.59-.99.19-.4.1-.74-.05-1.04-.15-.29-1.34-3.23-1.84-4.41-.48-1.17-.97-1.01-1.34-1.02l-1.14-.02c-.4 0-1.04.15-1.58.74-.55.59-2.08 2.04-2.08 4.97 0 2.92 2.13 5.75 2.43 6.15.29.4 4.19 6.4 10.15 8.98 1.41.61 2.52.98 3.39 1.25 1.42.46 2.71.39 3.74.24 1.14-.17 3.5-1.44 4-2.83.49-1.39.49-2.58.34-2.83-.15-.25-.55-.4-1.14-.69"/>
      </svg>
    </span>
  </a>`;
}

function schema(page, type = "BlogPosting") {
  const canonical = type === "CollectionPage" ? absolute("/blog/") : absolute(postUrl(page.slug));
  const graph = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "D2R Cargo",
      url: `${siteUrl}/`,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/img/logo.webp`
      }
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "D2R Cargo"
    }
  ];

  if (type === "CollectionPage") {
    graph.push({
      "@type": "CollectionPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: "Dubai to Russia Shipping Blog",
      description: "Guides and blog posts covering Dubai to Russia shipping services, customs, cost, timing and destination planning."
    });
  } else {
    graph.push({
      "@type": "BlogPosting",
      "@id": `${canonical}#article`,
      headline: page.h1,
      description: page.description,
      image: `${siteUrl}${page.image}`,
      author: {
        "@type": "Organization",
        name: "D2R Cargo"
      },
      publisher: {
        "@id": `${siteUrl}/#organization`
      },
      mainEntityOfPage: canonical,
      datePublished: "2026-04-20",
      dateModified: "2026-04-20",
      articleSection: page.category
    });
  }

  return `<script type="application/ld+json">${JSON.stringify(graph, null, 2)}</script>`;
}

function layout({ title, description, canonical, image, content, schemaMarkup, current }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="robots" content="index,follow">
  <meta name="theme-color" content="#1d3557">
  <link rel="canonical" href="${canonical}">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: '#e63946',
            secondary: '#1d3557',
            accent: '#457b9d',
          }
        }
      }
    }
  </script>
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="/img/faviocn.png" type="image/png">
  <link rel="apple-touch-icon" href="/img/faviocn.png">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/blog.css">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${siteUrl}${image}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  ${schemaMarkup}
</head>
<body>
  ${header(current)}
  ${content}
  ${footer()}
  ${whatsappFloat()}
</body>
</html>`;
}

function breadcrumbs(items) {
  return `<nav class="breadcrumbs" aria-label="Breadcrumb">
    <ol>
      ${items
        .map((item, index) => {
          const current = index === items.length - 1;
          return `<li>${current ? escapeHtml(item.label) : `<a href="${item.href}">${item.label}</a>`}</li>`;
        })
        .join("")}
    </ol>
  </nav>`;
}

function postLink(slug, text) {
  return `<a href="${postUrl(slug)}">${text || postMap.get(slug).h1}</a>`;
}

function renderParagraphs(section) {
  let html = "";
  for (const p of section.paragraphs) html += `<p>${p}</p>`;
  if (section.links?.length) {
    html += `<p>${section.links.map((item) => postLink(item.slug, item.text)).join(", ")}.</p>`;
  }
  return html;
}

function relatedCards(slugs) {
  return `<div class="grid-2">
    ${slugs
      .map((slug) => {
        const post = postMap.get(slug);
        return `<article class="card">
          <h3><a href="${postUrl(slug)}">${post.h1}</a></h3>
          <p>${post.excerpt}</p>
          <p><a href="${postUrl(slug)}">Read article</a></p>
        </article>`;
      })
      .join("")}
  </div>`;
}

function postPageStyles() {
  return `<style>
    .whatsapp-float {
      position: fixed;
      right: 24px;
      bottom: 24px;
      z-index: 50;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 76px;
      height: 76px;
      text-decoration: none;
      isolation: isolate;
    }

    .whatsapp-float__core,
    .whatsapp-float__ripple {
      position: absolute;
      inset: 0;
      border-radius: 9999px;
    }

    .whatsapp-float__core {
      inset: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      background:
        radial-gradient(circle at 30% 28%, rgba(255, 255, 255, 0.34), transparent 32%),
        linear-gradient(145deg, #34eb7a 0%, #25d366 52%, #149647 100%);
      border: 1px solid rgba(255, 255, 255, 0.4);
      box-shadow:
        0 20px 42px rgba(20, 150, 71, 0.34),
        0 8px 22px rgba(7, 94, 84, 0.2),
        inset 0 -4px 12px rgba(7, 94, 84, 0.22);
      transition: transform 0.24s ease, box-shadow 0.24s ease;
    }

    .whatsapp-float__ripple {
      background: radial-gradient(circle, rgba(37, 211, 102, 0.3) 0%, rgba(37, 211, 102, 0.14) 45%, rgba(37, 211, 102, 0) 72%);
      animation: whatsapp-ripple 2.8s ease-out infinite;
    }

    .whatsapp-float__ripple--two {
      animation-delay: 1.4s;
    }

    .whatsapp-float__icon {
      width: 34px;
      height: 34px;
      color: #fff;
      filter: drop-shadow(0 2px 4px rgba(7, 94, 84, 0.22));
    }

    .whatsapp-float:hover .whatsapp-float__core {
      transform: translateY(-2px) scale(1.04);
      box-shadow:
        0 24px 48px rgba(20, 150, 71, 0.4),
        0 10px 24px rgba(7, 94, 84, 0.24),
        inset 0 -4px 12px rgba(7, 94, 84, 0.24);
    }

    .whatsapp-float:focus-visible {
      outline: none;
    }

    .whatsapp-float:focus-visible .whatsapp-float__core {
      box-shadow:
        0 0 0 5px rgba(255, 255, 255, 0.9),
        0 0 0 9px rgba(37, 211, 102, 0.3),
        0 20px 42px rgba(20, 150, 71, 0.34);
    }

    @keyframes whatsapp-ripple {
      0% {
        transform: scale(0.72);
        opacity: 0;
      }

      18% {
        opacity: 0.55;
      }

      100% {
        transform: scale(1.28);
        opacity: 0;
      }
    }

    @media (max-width: 640px) {
      .whatsapp-float {
        right: 16px;
        bottom: 16px;
        width: 68px;
        height: 68px;
      }

      .whatsapp-float__core {
        inset: 5px;
      }

      .whatsapp-float__icon {
        width: 30px;
        height: 30px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .whatsapp-float__core,
      .whatsapp-float__ripple {
        transition: none;
        animation: none;
      }
    }
  </style>`;
}

function renderPost(post) {
  const canonical = absolute(postUrl(post.slug));
  const toc = post.sections.map((section, index) => ({
    id: `section-${index + 1}`,
    label: section.h2
  }));
  const introHtml = post.intro.map((p) => `<p class="mb-4">${p}</p>`).join("");
  const sectionHtml = post.sections
    .map((section, index) => {
      const paragraphs = section.paragraphs.map((p) => `<p class="mb-4">${p}</p>`).join("");
      const links = section.links?.length
        ? `<p class="mb-4">${section.links
            .map((item) => `<a class="text-primary font-semibold hover:underline" href="${postUrl(item.slug)}">${item.text}</a>`)
            .join(", ")}.</p>`
        : "";
      return `<section id="section-${index + 1}">
                <h2 class="text-2xl font-bold text-secondary mb-4 mt-10 pt-4">${section.h2}</h2>
                ${paragraphs}${links}
              </section>`;
    })
    .join("");

  const relatedSidebar = post.related.length
    ? `<div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 class="text-secondary font-bold text-lg mb-4 flex items-center">
                <svg class="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                Related reading
              </h3>
              <ul class="space-y-4 text-sm">
                ${post.related
                  .map((slug) => {
                    const relatedPost = postMap.get(slug);
                    return `<li>
                  <a href="${postUrl(slug)}" class="text-gray-600 font-medium hover:text-primary transition-colors block leading-snug">${relatedPost.h1}</a>
                </li>`;
                  })
                  .join("")}
              </ul>
            </div>`
    : `<div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 class="text-secondary font-bold text-lg mb-4 flex items-center">
                <svg class="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 21a9 9 0 100-18 9 9 0 000 18z"></path></svg>
                Quick links
              </h3>
              <ul class="space-y-4 text-sm">
                <li><a href="/blog/" class="text-gray-600 font-medium hover:text-primary transition-colors block leading-snug">Back to blog</a></li>
                <li><a href="/" class="text-gray-600 font-medium hover:text-primary transition-colors block leading-snug">Visit homepage</a></li>
                <li><a href="${whatsappUrl}" class="text-gray-600 font-medium hover:text-primary transition-colors block leading-snug">Chat on WhatsApp</a></li>
              </ul>
            </div>`;

  const relatedArticles = post.related.length
    ? `<section class="bg-white py-16 md:py-24 border-t border-gray-100">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="mb-12">
          <div class="inline-block bg-gray-100 text-gray-500 font-bold px-3 py-1 rounded text-xs uppercase tracking-wider mb-4">
            Related Articles
          </div>
          <h2 class="text-3xl font-bold text-secondary mb-4">Continue with the next route question</h2>
          <p class="text-gray-500 max-w-2xl text-lg">Use the related articles below to move into the service, customs, pricing or destination topic that matches the shipment most closely.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          ${post.related
            .map((slug) => {
              const relatedPost = postMap.get(slug);
              return `<a href="${postUrl(slug)}" class="group block p-6 md:p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-xl hover:border-gray-200 transition-all duration-300">
            <h3 class="text-xl font-bold text-secondary group-hover:text-primary mb-3 transition-colors">${relatedPost.h1}</h3>
            <p class="text-gray-500 mb-4 text-sm leading-relaxed">${relatedPost.excerpt}</p>
            <span class="text-primary font-semibold text-sm flex items-center">Read article <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></span>
          </a>`;
            })
            .join("")}
        </div>
      </div>
    </section>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(post.metaTitle)}</title>
  <meta name="description" content="${escapeHtml(post.description)}">
  <meta name="robots" content="index,follow">
  <meta name="theme-color" content="#1d3557">
  <link rel="canonical" href="${canonical}">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: '#e63946',
            secondary: '#1d3557',
            accent: '#457b9d',
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
          }
        }
      }
    }
  </script>
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="/img/faviocn.png" type="image/png">
  <link rel="apple-touch-icon" href="/img/faviocn.png">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${escapeHtml(post.metaTitle)}">
  <meta property="og:description" content="${escapeHtml(post.description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${siteUrl}${post.image}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(post.metaTitle)}">
  <meta name="twitter:description" content="${escapeHtml(post.description)}">
  ${schema(post)}
  ${postPageStyles()}
</head>
<body class="bg-[#f8f9fa] text-gray-800 font-sans antialiased min-h-screen flex flex-col">
  <header class="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between max-w-6xl">
        <div class="flex items-center">
            <a href="/" class="flex items-center no-underline">
                <img src="/img/logo.webp" alt="Dubai to Russia Cargo" class="w-[140px] h-auto">
                <div class="ml-2 w-3 h-3 rounded-full bg-primary"></div>
            </a>
        </div>
        
        <nav class="hidden md:flex items-center space-x-8">
            <a href="/" class="text-secondary font-medium hover:text-primary transition-colors">Home</a>
            <a href="/#services" class="text-secondary font-medium hover:text-primary transition-colors">Services</a>
            <a href="/blog/" class="text-primary font-medium border-b-2 border-primary pb-1">Blog</a>
            <a href="/#quote" class="text-secondary font-medium hover:text-primary transition-colors">Contact</a>
        </nav>
        
        <div class="flex items-center space-x-4">
            <a href="/#tracking" class="hidden md:block border-2 border-secondary text-secondary px-5 py-2 rounded-lg font-bold hover:bg-secondary hover:text-white transition-all">Track</a>
            <a href="${whatsappUrl}" class="bg-primary text-white px-5 py-2.5 rounded-lg font-bold hover:bg-red-700 transition-all shadow-md shadow-red-500/20">Get a Quote</a>
        </div>
    </div>
  </header>

  <main class="flex-grow">
    <article>
      <header class="bg-white border-b border-gray-100 pt-16 pb-12">
        <div class="container mx-auto px-4 max-w-4xl">
          <nav class="flex mb-6 text-sm text-gray-400 font-medium" aria-label="Breadcrumb">
            <ol class="flex items-center space-x-2">
              <li><a href="/" class="hover:text-primary transition-colors">Home</a></li>
              <li><span class="mx-2">/</span></li>
              <li><a href="/blog/" class="hover:text-primary transition-colors">Blog</a></li>
              <li><span class="mx-2">/</span></li>
              <li class="text-secondary font-semibold truncate max-w-[200px] md:max-w-none">${post.h1}</li>
            </ol>
          </nav>
          
          <div class="flex items-center flex-wrap gap-4 mb-6">
             <div class="inline-flex items-center gap-2 bg-blue-50 text-secondary font-bold px-3 py-1 rounded-md text-xs uppercase tracking-wider border border-blue-100">
                <span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
                ${post.category}
             </div>
             <span class="text-gray-500 text-sm font-medium flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                ${readTime(post)}
             </span>
             <span class="text-gray-400 text-sm font-medium">Published April 20, 2026</span>
          </div>
          
          <h1 class="text-3xl md:text-5xl font-extrabold text-secondary tracking-tight mb-6 leading-tight">${post.h1}</h1>
          <p class="text-lg md:text-xl text-gray-500 leading-relaxed mb-10 max-w-3xl">${post.description}</p>

          <div class="rounded-2xl overflow-hidden shadow-md border border-gray-100 aspect-[16/7]">
            <img src="${post.image}" alt="${post.h1}" class="w-full h-full object-cover">
          </div>
        </div>
      </header>

      <div class="container mx-auto px-4 max-w-6xl py-12 md:py-16 flex flex-col lg:flex-row gap-12">
        <div class="lg:w-2/3">
          <div class="text-gray-600 text-lg leading-relaxed space-y-6">
            ${introHtml}
            ${sectionHtml}
          </div>
        </div>

        <aside class="lg:w-1/3">
          <div class="sticky top-28 space-y-6">
            <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 class="text-secondary font-bold text-lg mb-4 flex items-center">
                <svg class="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg>
                In this article
              </h3>
              <ul class="space-y-3 text-gray-500 text-sm font-medium">
                ${toc.map((item) => `<li><a href="#${item.id}" class="hover:text-primary transition-colors block">${item.label}</a></li>`).join("")}
              </ul>
            </div>

            ${relatedSidebar}

            <div class="bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl p-6 shadow-sm border border-red-100">
              <h3 class="text-secondary font-bold text-xl mb-3">Need a route quote?</h3>
              <p class="text-gray-600 text-sm mb-6 leading-relaxed">
                Share the cargo type, dimensions, pickup point and destination city to get more useful route and delivery guidance.
              </p>
              <div class="flex flex-col gap-3">
                <a href="${whatsappUrl}" class="bg-primary text-white text-center px-4 py-2.5 rounded-lg font-bold hover:bg-red-700 transition-all shadow-md shadow-red-500/20 w-full">Request Quote</a>
                <a href="/" class="bg-white border text-center border-gray-200 text-secondary px-4 py-2.5 rounded-lg font-bold hover:bg-gray-50 transition-all w-full">Visit Homepage</a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </article>

    ${relatedArticles}

    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="mb-12">
          <div class="inline-block bg-blue-50 text-secondary font-bold px-3 py-1 rounded text-xs uppercase tracking-wider mb-4 border border-blue-100">
            FAQ
          </div>
          <h2 class="text-3xl font-bold text-secondary mb-4">Route Guide Questions</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          ${post.faq
            .map(
              ([q, a]) => `<div class="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 class="font-bold text-secondary text-lg mb-4">${q}</h3>
            <p class="text-gray-500 text-sm leading-relaxed">${a}</p>
          </div>`,
            )
            .join("")}
        </div>
      </div>
    </section>
  </main>

  <footer class="bg-secondary text-white py-12 md:py-16">
    <div class="container mx-auto px-4 max-w-6xl">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-gray-700/50 pb-12">
        <div>
          <h2 class="text-2xl font-bold mb-4 flex items-center">
            D2R Cargo
            <div class="ml-2 w-2 h-2 rounded-full bg-primary"></div>
          </h2>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">
            Simple, route-focused guidance for shippers moving cargo from Dubai to Russia and needing cleaner answers on service choice, customs, timing and delivery planning.
          </p>
          <div class="space-y-2">
            <a href="mailto:info@d2r.com" class="text-gray-300 hover:text-white transition-colors flex items-center gap-2"><svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> info@d2r.com</a>
            <a href="tel:+971544717855" class="text-gray-300 hover:text-white transition-colors flex items-center gap-2"><svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> +971 54 471 7855</a>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Blog</h3>
          <ul class="space-y-3 text-sm">
            <li><a href="/blog/" class="text-gray-400 hover:text-primary transition-colors">Blog Home</a></li>
            <li><a href="${postUrl(post.slug)}" class="text-gray-400 hover:text-primary transition-colors">${post.h1}</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold mb-4">Quick Links</h3>
          <ul class="space-y-3 text-sm">
            <li><a href="/" class="text-gray-400 hover:text-primary transition-colors">Homepage</a></li>
            <li><a href="/#services" class="text-gray-400 hover:text-primary transition-colors">Services</a></li>
            <li><a href="${whatsappUrl}" class="text-gray-400 hover:text-primary transition-colors">WhatsApp Quote</a></li>
          </ul>
        </div>
      </div>
      
      <div class="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-medium">
        <p>&copy; 2026 D2R Cargo. All rights reserved.</p>
        <p class="mt-2 md:mt-0">Dubai to Russia shipping specialists.</p>
      </div>
    </div>
  </footer>

  ${whatsappFloat()}
</body>
</html>`;
}

function renderBlogIndex() {
  const guide = posts[0];
  const content = `<section class="blog-hero">
    <div class="blog-wrap">
      <div class="blog-hero-copy">
        <div class="eyebrow">Blog Hub</div>
        <h1>Dubai to Russia Shipping Blog</h1>
        <p>A simple blog page with one practical guide covering the basic Dubai to Russia shipping route, documents, timing and quote preparation.</p>
        <div class="pill-row">
          <span class="pill">1 focused article</span>
          <span class="pill">Simple clean design</span>
          <span class="pill">Easy starting point</span>
        </div>
        <div class="hero-actions">
          <a class="button button-primary" href="${postUrl(guide.slug)}">Read the guide</a>
          <a class="button button-secondary" href="/">Go to homepage</a>
        </div>
      </div>
      <div class="blog-hero-visual">
        <img src="/img/banner.webp" alt="Dubai to Russia Shipping Blog">
      </div>
    </div>
  </section>
  ${breadcrumbs([{ href: "/", label: "Home" }, { href: "/blog/", label: "Blog" }])}
  <section class="blog-section">
    <div class="blog-wrap">
      <div class="section-intro">
        <div class="eyebrow">Shipping Guide</div>
        <h2>Start with one clear route guide</h2>
        <p>This article gives a simple overview of shipping cargo from Dubai to Russia so visitors can understand the basic route before asking for a quote.</p>
      </div>
      <div class="grid-2">
        <article class="card">
          <div class="eyebrow">${guide.category}</div>
          <h3><a href="${postUrl(guide.slug)}">${guide.h1}</a></h3>
          <p>${guide.excerpt}</p>
          <p><a href="${postUrl(guide.slug)}">Read article</a></p>
        </article>
      </div>
    </div>
  </section>
  <section class="blog-section">
    <div class="blog-wrap">
      <div class="grid-2">
        <div class="quote-box">
          <h2>Use the guide before requesting a quote</h2>
          <p>The better the shipment details are, the more useful the quote and route advice will be. Read the guide first, then send the cargo details by WhatsApp or through the site form.</p>
          <div class="quote-actions">
            <a class="button button-primary" href="/#quote">Request Quote</a>
            <a class="button button-secondary" href="${postUrl(guide.slug)}">Read guide</a>
          </div>
        </div>
        <div class="aside-card">
          <h3>What this guide covers</h3>
          <ul class="check-list">
            <li>How to choose between air freight and sea freight</li>
            <li>What shipment details affect the quote</li>
            <li>Which documents should be prepared first</li>
            <li>How to think about timing and destination planning</li>
          </ul>
        </div>
      </div>
    </div>
  </section>`;

  return layout({
    title: "Dubai to Russia Shipping Blog | D2R Cargo",
    description: "Dubai to Russia shipping blog with route guides on air freight, sea freight, customs, pricing, timing, Moscow delivery and cargo planning.",
    canonical: absolute("/blog/"),
    image: "/img/banner.webp",
    content,
    schemaMarkup: schema({}, "CollectionPage"),
    current: "/blog/"
  });
}

function writeBlog() {
  writeFile("blog/index.html", renderBlogIndex());
  for (const post of posts) {
    writeFile(path.join("blog", post.slug, "index.html"), renderPost(post));
  }
}

function writeRobots() {
  writeFile(
    "robots.txt",
    `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`,
  );
}

function writeSitemap() {
  const urls = ["/", "/blog/", ...posts.map((post) => postUrl(post.slug))];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${absolute(url)}</loc>
    <lastmod>2026-04-20</lastmod>
  </url>`,
  )
  .join("\n")}
</urlset>`;
  writeFile("sitemap.xml", xml);
}

function main() {
  writeBlog();
  writeRobots();
  writeSitemap();
}

main();
