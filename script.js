const data = window.siteContent;

/* =========================================
   SEO
========================================= */

document.title = data.seo.title;

/* =========================================
   COMPANY NAME
========================================= */

document.querySelectorAll("[data-company-name]").forEach((el) => {
  el.textContent = data.company.name;
});

document.querySelectorAll("[data-company-short]").forEach((el) => {
  el.textContent = data.company.shortName;
});

/* =========================================
   PHONE
========================================= */

document.querySelectorAll("[data-phone]").forEach((el) => {
  el.textContent = data.company.phone;
});

document.querySelectorAll("[data-phone-link]").forEach((el) => {
  el.href = `tel:${data.company.phoneRaw}`;
});

/* =========================================
   HERO
========================================= */

const heroBadge = document.getElementById("hero-badge");

if (heroBadge) {
  heroBadge.textContent = data.hero.badge;
}

const heroTitle = document.getElementById("hero-title");

if (heroTitle) {
  heroTitle.innerHTML = `
    ${data.hero.title}<br>
    <em>${data.hero.highlight}</em>
  `;
}

const heroSubtitle = document.getElementById("hero-subtitle");

if (heroSubtitle) {
  heroSubtitle.textContent = data.hero.subtitle;
}

/* =========================================
   ABOUT
========================================= */

const aboutTitle = document.getElementById("about-title");

if (aboutTitle) {
  aboutTitle.textContent = data.about.title;
}

const aboutDesc1 = document.getElementById("about-description-1");

if (aboutDesc1) {
  aboutDesc1.textContent = data.about.description1;
}

const aboutDesc2 = document.getElementById("about-description-2");

if (aboutDesc2) {
  aboutDesc2.textContent = data.about.description2;
}

const aboutOwners = document.getElementById("about-owners");

if (aboutOwners) {
  aboutOwners.innerHTML = data.about.ownerNames.replace(
    "&",
    "<br>&"
  );
}

const aboutQuote = document.getElementById("about-quote");

if (aboutQuote) {
  aboutQuote.textContent = data.about.quote;
}

/* =========================================
   STATS
========================================= */

const ratingStat = document.getElementById("stat-rating");

if (ratingStat) {
  ratingStat.textContent = data.stats.rating;
}

const reviewsStat = document.getElementById("stat-reviews");

if (reviewsStat) {
  reviewsStat.textContent = data.stats.reviews;
}

const ratingStatCopy = document.getElementById("stat-rating-copy");

if (ratingStatCopy) {
  ratingStatCopy.textContent = data.stats.rating;
}

const reviewsStatCopy = document.getElementById("stat-reviews-copy");

if (reviewsStatCopy) {
  reviewsStatCopy.textContent = `${data.stats.reviews} Reviews on Google & Facebook`;
}

const experienceStat = document.getElementById("stat-experience");

if (experienceStat) {
  experienceStat.textContent = data.stats.experience;
}

const emergencyStat = document.getElementById("stat-emergency");

if (emergencyStat) {
  emergencyStat.textContent = data.stats.emergency;
}

/* =========================================
   IMAGES
========================================= */

const logoImg = document.getElementById("logo-img");

if (logoImg) {
  logoImg.src = data.images.logo;
}

const footerLogoImg = document.getElementById("footer-logo-img");

if (footerLogoImg) {
  footerLogoImg.src = data.images.logo;
}

const heroImg = document.getElementById("hero-img");

if (heroImg) {
  heroImg.src = data.images.hero;
}

const aboutImg = document.getElementById("about-img");

if (aboutImg) {
  aboutImg.src = data.images.about;
}

/* =========================================
   SERVICES
========================================= */

const servicesContainer =
  document.getElementById("services-container");

if (servicesContainer) {
  servicesContainer.innerHTML = "";

  data.services.forEach((service) => {
    servicesContainer.innerHTML += `
      <article class="service-card">
        <div class="service-num">${service.number}</div>

        <h3 class="service-title">
          ${service.title}
        </h3>

        <p class="service-text">
          ${service.description}
        </p>

        <a href="#contact" class="service-link">
          ${service.cta}
        </a>
      </article>
    `;
  });
}

/* =========================================
   FAQ EXPAND / COLLAPSE
========================================= */

document.querySelectorAll("details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (detail.open) {
      document.querySelectorAll("details").forEach((other) => {
        if (other !== detail) {
          other.removeAttribute("open");
        }
      });
    }
  });
});