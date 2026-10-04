const heroSlides = [
  {
    image: "asset/hero/Talm_x_LBB_brosse_corps_-_home_1000x.webp",
    label: "Body Care",
    title: "Talm x La Bonne Brosse: new detox Body Brush",
  },
  {
    image: "asset/hero/2026_07_OMC_SUNDAYRILEY_0_Home_1000x.webp",
    label: "Breakout Breakup",
    title: "Step into a new clear skin season, with Sunday Riley",
  },
  {
    image: "asset/hero/202609_VIOLETTE_FR_Bisou_Balm_Chocolat_home_1000x.webp",
    label: "Bisou Balm",
    title: "French color, soft texture, and everyday shine",
  },
  {
    image: "asset/hero/Home_-_TF_Satin_Kajal_Liner_Jeans_-_VBB_1000x.webp",
    label: "Satin Kajal",
    title: "Make the eye edit sharper with Victoria Beckham Beauty",
  },
];

const slidesContainer = document.querySelector(".slides");
const previousButton = document.querySelector(".slider-arrow.prev");
const nextButton = document.querySelector(".slider-arrow.next");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const menuClose = document.querySelector(".mobile-menu-close");
const navMegaLinks = document.querySelectorAll(".nav-mega > a");
const productTrack = document.querySelector(".product-track");
const productPreviousButton = document.querySelector(".product-prev");
const productNextButton = document.querySelector(".product-next");
const brandTrack = document.querySelector(".brand-track");
const brandPreviousButton = document.querySelector(".brand-prev");
const brandNextButton = document.querySelector(".brand-next");
const bestsellerTrack = document.querySelector(".bestseller-track");
const bestsellerPreviousButton = document.querySelector(".bestseller-prev");
const bestsellerNextButton = document.querySelector(".bestseller-next");
const journalTrack = document.querySelector(".journal-track");
const journalPreviousButton = document.querySelector(".journal-prev");
const journalNextButton = document.querySelector(".journal-next");
const footerToggles = document.querySelectorAll(".footer-toggle");
const newsletterForm = document.querySelector(".newsletter");
const newsletterEmail = document.querySelector("#newsletter-email");
const accountTriggers = document.querySelectorAll(".account-trigger");
const loginPanel = document.querySelector(".login-panel");
const loginClose = document.querySelector(".login-close");
const passwordToggle = document.querySelector(".password-toggle");
const loginPassword = document.querySelector("#login-password");

let activeIndex = 0;
let autoplayId;
let renderedSlides = [];
let productIndex = 0;
let brandIndex = 0;
let bestsellerIndex = 0;
let journalIndex = 0;

const newInProducts = [
  {
    image: "asset/Our new-in products/SatinKajalLinerJeans_VictoriaBeckham_1000x.webp",
    badges: ["Cult", "New"],
    brand: "Victoria Beckham Beauty",
    name: "Satin Kajal Eye Pencil",
    price: "39 €",
    detail: "21 Shades",
    rating: "★★★★☆",
    reviews: "1196 Avis",
  },
  {
    image:
      "asset/Our new-in products/202608_LBBxTalm_BrosseCorps_PeauxNormales_RosePoudre_Packshot_1000x.webp",
    badges: ["New"],
    brand: "La Bonne Brosse",
    name: "No. 02 Body Brush x Talm for Normal ...",
    price: "98 €",
    detail: "2 Shades",
    rating: "☆☆☆☆☆",
    reviews: "0 Avis",
  },
  {
    image: "asset/Our new-in products/202510_Cecile_Braden_Brosses_packshot_1000x.webp",
    badges: ["New"],
    brand: "Cecily Braden",
    name: "Drainage Brush Duo",
    price: "150 €",
    detail: "",
    rating: "★★★★★",
    reviews: "5 Avis",
  },
  {
    image: "asset/Our new-in products/202603_BrosseLymphatiqueVisage_Holidermie_1000x.webp",
    badges: ["New"],
    brand: "Holidermie",
    name: "Facial Lymphatic Brush",
    price: "39 €",
    detail: "",
    rating: "★★★★★",
    reviews: "2 Avis",
  },
  {
    image: "asset/Our new-in products/2024_12_VictoriaBeckhamBeauty_FutureLashMascaraNoir_Packshot2_1000x.webp",
    badges: ["New"],
    brand: "Victoria Beckham Beauty",
    name: "Future Lash Lengthening Mascara",
    price: "39 €",
    detail: "3 Shades",
    rating: "★★★★☆",
    reviews: "182 Avis",
  },
  {
    image: "asset/Our new-in products/202606_Mascaranoir_OMC_1000x.webp",
    badges: ["New"],
    brand: "Oh My Cream Skincare",
    name: "Lengthening Mascara",
    price: "29 €",
    detail: "",
    rating: "★★★★☆",
    reviews: "36 Avis",
  },
  {
    image:
      "asset/Our new-in products/202607_SupremeBio-ComplexLiquidFoundationF1_packshot_1000x.webp",
    badges: ["New"],
    brand: "Westman Atelier",
    name: "Supreme Bio-Complex Liquid Foundation",
    price: "68 €",
    detail: "16 Shades",
    rating: "★★★★☆",
    reviews: "41 Avis",
  },
  {
    image:
      "asset/Our new-in products/202607_ThruLinewaterproofeyelinerSerif_Ilia_bb319a3d-d065-4c11-8ccd-11c35857f030_1000x.webp",
    badges: ["New"],
    brand: "Ilia",
    name: "Thru Line Waterproof Eyeliner",
    price: "28 €",
    detail: "4 Shades",
    rating: "★★★★☆",
    reviews: "24 Avis",
  },
];

const brandCards = [
  {
    image:
      "asset/our brands/OMC_Oh-My-Cream-Skincare_1000x1417_50413929-b0d4-49f1-b8c0-8b76c326c3d6_700x.webp",
    title: "Oh My Cream Skincare",
  },
  {
    image: "asset/our brands/2025_06_OMC_MIMETIQUE_1_Post_700x.webp",
    title: "Mimétique",
  },
  {
    image: "asset/our brands/2021_06_omc0154_m_combeau_post_tiniy_700x.webp",
    title: "Combeau",
  },
  {
    image: "asset/our brands/VIOLETTE_FR_-_Post1_Marque_700x.webp",
    title: "Violette_FR",
  },
  {
    image: "asset/our brands/202501_VICTORIA_BECKHAM_BEAUTY_HOME_recrop_700x.webp",
    title: "Victoria Beckham Beauty",
  },
  {
    image: "asset/our brands/OHMYCREAM_MARQUES_ILIA_700x.webp",
    title: "Ilia",
  },
  {
    image: "asset/our brands/Derma_700x.webp",
    title: "Dermalogica",
  },
  {
    image: "asset/our brands/Tata_700x.webp",
    title: "Tata Harper",
  },
  {
    image: "asset/our brands/Pai_700x.webp",
    title: "Pai",
  },
  {
    image: "asset/our brands/2016_12_OMC1908_700x.webp",
    title: "Oh My Cream",
  },
  {
    image: "asset/our brands/Session-studio-020-2_700x.webp",
    title: "Westman Atelier",
  },
  {
    image: "asset/our brands/2020_09_visuel-collection-augustinusbader_2500x625_TINY_700x.webp",
    title: "Augustinus Bader",
  },
];

const bestsellerProducts = [
  {
    image: "asset/Our new-in products/SatinKajalLinerJeans_VictoriaBeckham_1000x.webp",
    badges: ["Cult", "New"],
    brand: "Victoria Beckham Beauty",
    name: "Satin Kajal Eye Pencil",
    price: "39 €",
    detail: "21 Shades",
    rating: "★★★★☆",
    reviews: "1196 Avis",
  },
  {
    image: "asset/Our new-in products/202606_Mascaranoir_OMC_1000x.webp",
    badges: ["Cult"],
    brand: "Oh My Cream Skincare",
    name: "Lengthening Mascara",
    price: "29 €",
    detail: "",
    rating: "★★★★☆",
    reviews: "185 Avis",
  },
  {
    image:
      "asset/Our new-in products/202607_SupremeBio-ComplexLiquidFoundationF1_packshot_1000x.webp",
    badges: ["Cult"],
    brand: "Westman Atelier",
    name: "Supreme Bio-Complex Liquid Foundation",
    price: "68 €",
    detail: "16 Shades",
    rating: "★★★★☆",
    reviews: "1962 Avis",
  },
  {
    image:
      "asset/Our new-in products/202607_ThruLinewaterproofeyelinerSerif_Ilia_bb319a3d-d065-4c11-8ccd-11c35857f030_1000x.webp",
    badges: ["Cult"],
    brand: "Ilia",
    name: "Thru Line Waterproof Eyeliner",
    price: "30 €",
    detail: "8 Shades",
    rating: "★★★★☆",
    reviews: "1246 Avis",
  },
  {
    image: "asset/Our new-in products/2024_12_VictoriaBeckhamBeauty_FutureLashMascaraNoir_Packshot2_1000x.webp",
    badges: ["Cult"],
    brand: "Victoria Beckham Beauty",
    name: "Future Lash Lengthening Mascara",
    price: "39 €",
    detail: "3 Shades",
    rating: "★★★★☆",
    reviews: "1020 Avis",
  },
  {
    image:
      "asset/Our new-in products/202608_LBBxTalm_BrosseCorps_PeauxNormales_RosePoudre_Packshot_1000x.webp",
    badges: ["Cult"],
    brand: "La Bonne Brosse",
    name: "No. 02 Body Brush x Talm for Normal ...",
    price: "98 €",
    detail: "2 Shades",
    rating: "☆☆☆☆☆",
    reviews: "0 Avis",
  },
  {
    image: "asset/Our new-in products/202510_Cecile_Braden_Brosses_packshot_1000x.webp",
    badges: ["Cult"],
    brand: "Cecily Braden",
    name: "Drainage Brush Duo",
    price: "150 €",
    detail: "",
    rating: "★★★★★",
    reviews: "5 Avis",
  },
  {
    image: "asset/Our new-in products/202603_BrosseLymphatiqueVisage_Holidermie_1000x.webp",
    badges: ["Cult"],
    brand: "Holidermie",
    name: "Facial Lymphatic Brush",
    price: "39 €",
    detail: "",
    rating: "★★★★★",
    reviews: "2 Avis",
  },
];

const journalArticles = [
  {
    image: "asset/in the journal/unnamed_23fef954-ccd0-4b32-b2f2-1478dbf82d97_700x.webp",
    title: "In Louise Damas’s bathroom",
  },
  {
    image: "asset/in the journal/unnamed_545a3d7f-f9ad-4091-b9e7-92f36eeba31c_700x.webp",
    title: "5 Things to Know Before Your First Cold Bath!",
  },
  {
    image: "asset/in the journal/unnamed_5c0f4559-8519-46e0-8716-41ed8e315384_700x.webp",
    title: "Makeup Tutorial: Violette Serrat’s ”Plume Look” on Juliette Levy Cohen",
  },
  {
    image: "asset/in the journal/unnamed_7b31196d-b4e9-4708-b7ae-a8185b9a006e_700x.webp",
    title: "The Best Places to Keep Your Legs Feeling Light All Summer Long",
  },
  {
    image: "asset/in the journal/unnamed_824d164d-dab1-4f23-a6b4-acace8a342c7_700x.webp",
    title: "Our beauty rituals for a calm morning",
  },
  {
    image: "asset/in the journal/unnamed_ac3c5409-1fdb-46e6-bfc1-e093c1064531_700x.webp",
    title: "The skincare gestures we keep coming back to",
  },
  {
    image: "asset/in the journal/unnamed_c117d672-cfc3-4ac2-b713-ab88a1764f13_700x.webp",
    title: "Inside a softer summer beauty routine",
  },
];

function visibleCount() {
  return window.matchMedia("(max-width: 760px)").matches ? 1 : 2;
}

function edgeSlides() {
  const count = visibleCount();
  return {
    first: heroSlides.slice(0, count),
    last: heroSlides.slice(-count),
    count,
  };
}

function renderSlides() {
  const { first, last, count } = edgeSlides();
  renderedSlides = [...last, ...heroSlides, ...first];
  activeIndex = count;

  slidesContainer.innerHTML = renderedSlides
    .map(
      (slide) => `
        <article class="slide-card">
          <div class="image-wrap">
            <img src="${slide.image}" alt="${slide.title}" />
            <h2 class="kicker">${slide.label}</h2>
          </div>
          <div class="slide-copy">
            <p class="slide-title">${slide.title}</p>
            <a class="button-link" href="#">Discover</a>
          </div>
        </article>
      `
    )
    .join("");

  jumpToIndex(activeIndex);
}

function slideDistance() {
  const card = slidesContainer.querySelector(".slide-card");

  if (!card) {
    return 0;
  }

  const gap = parseFloat(getComputedStyle(slidesContainer).gap) || 0;
  return card.getBoundingClientRect().width + gap;
}

function updatePosition() {
  slidesContainer.style.transform = `translateX(-${activeIndex * slideDistance()}px)`;
}

function jumpToIndex(index) {
  slidesContainer.classList.add("no-transition");
  activeIndex = index;
  updatePosition();
  slidesContainer.offsetHeight;
  slidesContainer.classList.remove("no-transition");
}

function moveSlider(direction) {
  activeIndex += direction;
  updatePosition();
}

function startAutoplay() {
  window.clearInterval(autoplayId);
  autoplayId = window.setInterval(() => moveSlider(1), 5000);
}

function moveAndRestart(direction) {
  moveSlider(direction);
  startAutoplay();
}

previousButton.addEventListener("click", () => moveAndRestart(-1));
nextButton.addEventListener("click", () => moveAndRestart(1));

function openMenu() {
  nav.classList.add("open");
  document.body.classList.add("menu-open");
  menuToggle.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  nav.classList.remove("open");
  document.body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
  document.querySelectorAll(".nav-mega.submenu-open").forEach((item) => {
    item.classList.remove("submenu-open");
  });
}

menuToggle.addEventListener("click", () => {
  if (document.body.classList.contains("menu-open")) {
    closeMenu();
    return;
  }

  openMenu();
});

menuClose.addEventListener("click", closeMenu);

function isDrawerMenu() {
  return window.matchMedia("(max-width: 980px)").matches;
}

navMegaLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (!isDrawerMenu()) {
      return;
    }

    event.preventDefault();
    const item = link.closest(".nav-mega");
    const wasOpen = item.classList.contains("submenu-open");

    document.querySelectorAll(".nav-mega.submenu-open").forEach((openItem) => {
      openItem.classList.remove("submenu-open");
    });

    if (!wasOpen) {
      item.classList.add("submenu-open");
    }
  });
});

function renderProductCards() {
  productTrack.innerHTML = newInProducts
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-badges">
            ${product.badges.map((badge) => `<span>${badge}</span>`).join("")}
          </div>
          <img src="${product.image}" alt="${product.name}" />
          <h3 class="product-brand">${product.brand}</h3>
          <p class="product-name">${product.name}</p>
          <p class="product-price">
            ${product.price}${product.detail ? ` <em>|</em> ${product.detail}` : ""}
          </p>
          <div class="product-rating" aria-label="${product.rating} ${product.reviews}">
            ${product.rating}<span>${product.reviews}</span>
          </div>
          <button class="add-basket" type="button">Add to Basket</button>
        </article>
      `
    )
    .join("");
  updateProductPosition();
}

function productCardTemplate(product) {
  return `
    <article class="product-card">
      <div class="product-badges">
        ${product.badges.map((badge) => `<span>${badge}</span>`).join("")}
      </div>
      <img src="${product.image}" alt="${product.name}" />
      <h3 class="product-brand">${product.brand}</h3>
      <p class="product-name">${product.name}</p>
      <p class="product-price">
        ${product.price}${product.detail ? ` <em>|</em> ${product.detail}` : ""}
      </p>
      <div class="product-rating" aria-label="${product.rating} ${product.reviews}">
        ${product.rating}<span>${product.reviews}</span>
      </div>
      <button class="add-basket" type="button">Add to Basket</button>
    </article>
  `;
}

function renderBestsellerCards() {
  bestsellerTrack.innerHTML = bestsellerProducts.map(productCardTemplate).join("");
  updateBestsellerPosition();
}

function productStep() {
  const card = productTrack.querySelector(".product-card");

  if (!card) {
    return 0;
  }

  const gap = parseFloat(getComputedStyle(productTrack).gap) || 0;
  return card.getBoundingClientRect().width + gap;
}

function bestsellerStep() {
  const card = bestsellerTrack.querySelector(".product-card");

  if (!card) {
    return 0;
  }

  const gap = parseFloat(getComputedStyle(bestsellerTrack).gap) || 0;
  return card.getBoundingClientRect().width + gap;
}

function visibleProductCount() {
  if (window.matchMedia("(max-width: 760px)").matches) {
    return 1;
  }

  if (window.matchMedia("(max-width: 980px)").matches) {
    return 2;
  }

  return 5;
}

function updateProductPosition() {
  productTrack.style.transform = `translateX(-${productIndex * productStep()}px)`;
}

function updateBestsellerPosition() {
  bestsellerTrack.style.transform = `translateX(-${bestsellerIndex * bestsellerStep()}px)`;
}

function moveProducts(direction) {
  const maxIndex = Math.max(0, newInProducts.length - visibleProductCount());
  productIndex = Math.min(Math.max(productIndex + direction, 0), maxIndex);
  updateProductPosition();
}

function moveBestsellers(direction) {
  const maxIndex = Math.max(0, bestsellerProducts.length - visibleProductCount());
  bestsellerIndex = Math.min(Math.max(bestsellerIndex + direction, 0), maxIndex);
  updateBestsellerPosition();
}

productPreviousButton.addEventListener("click", () => moveProducts(-1));
productNextButton.addEventListener("click", () => moveProducts(1));
bestsellerPreviousButton.addEventListener("click", () => moveBestsellers(-1));
bestsellerNextButton.addEventListener("click", () => moveBestsellers(1));

function renderBrandCards() {
  brandTrack.innerHTML = brandCards
    .map(
      (brand) => `
        <article class="brand-card" tabindex="0">
          <img src="${brand.image}" alt="${brand.title}" />
          <h3>${brand.title}</h3>
        </article>
      `
    )
    .join("");
  updateBrandPosition();
}

function renderJournalCards() {
  journalTrack.innerHTML = journalArticles
    .map(
      (article) => `
        <article class="journal-card">
          <img src="${article.image}" alt="${article.title}" />
          <h3>${article.title}</h3>
        </article>
      `
    )
    .join("");
  updateJournalPosition();
}

function brandStep() {
  const card = brandTrack.querySelector(".brand-card");

  if (!card) {
    return 0;
  }

  const gap = parseFloat(getComputedStyle(brandTrack).gap) || 0;
  return card.getBoundingClientRect().width + gap;
}

function journalStep() {
  const card = journalTrack.querySelector(".journal-card");

  if (!card) {
    return 0;
  }

  const gap = parseFloat(getComputedStyle(journalTrack).gap) || 0;
  return card.getBoundingClientRect().width + gap;
}

function visibleBrandCount() {
  if (window.matchMedia("(max-width: 760px)").matches) {
    return 1;
  }

  if (window.matchMedia("(max-width: 980px)").matches) {
    return 2;
  }

  return 4;
}

function visibleJournalCount() {
  return visibleBrandCount();
}

function updateBrandPosition() {
  brandTrack.style.transform = `translateX(-${brandIndex * brandStep()}px)`;
}

function updateJournalPosition() {
  journalTrack.style.transform = `translateX(-${journalIndex * journalStep()}px)`;
}

function moveBrands(direction) {
  const maxIndex = Math.max(0, brandCards.length - visibleBrandCount());
  brandIndex = Math.min(Math.max(brandIndex + direction, 0), maxIndex);
  updateBrandPosition();
}

function moveJournal(direction) {
  const maxIndex = Math.max(0, journalArticles.length - visibleJournalCount());
  journalIndex = Math.min(Math.max(journalIndex + direction, 0), maxIndex);
  updateJournalPosition();
}

brandPreviousButton.addEventListener("click", () => moveBrands(-1));
brandNextButton.addEventListener("click", () => moveBrands(1));
journalPreviousButton.addEventListener("click", () => moveJournal(-1));
journalNextButton.addEventListener("click", () => moveJournal(1));

footerToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const column = toggle.closest(".footer-column");
    const isExpanded = column.classList.toggle("expanded");
    toggle.textContent = isExpanded ? "See Less" : "See More";
    toggle.setAttribute("aria-expanded", String(isExpanded));
  });
});

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(value);
}

function validateNewsletter(showEmptyError = false) {
  const value = newsletterEmail.value.trim();
  const isInvalid = value.length > 0 ? !isValidEmail(value) : showEmptyError;
  newsletterForm.classList.toggle("invalid", isInvalid);
  newsletterEmail.setAttribute("aria-invalid", String(isInvalid));
  return !isInvalid;
}

newsletterEmail.addEventListener("input", () => validateNewsletter(false));

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  validateNewsletter(true);
});

function openLogin() {
  closeMenu();
  loginPanel.classList.add("open");
  loginPanel.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLogin() {
  loginPanel.classList.remove("open");
  loginPanel.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

accountTriggers.forEach((trigger) => {
  trigger.addEventListener("click", openLogin);
});

loginClose.addEventListener("click", closeLogin);

passwordToggle.addEventListener("click", () => {
  const isPassword = loginPassword.type === "password";
  loginPassword.type = isPassword ? "text" : "password";
  passwordToggle.setAttribute("aria-label", isPassword ? "Hide password" : "Show password");
});

window.addEventListener("resize", () => {
  if (!isDrawerMenu()) {
    closeMenu();
  }

  renderSlides();
  const maxIndex = Math.max(0, newInProducts.length - visibleProductCount());
  productIndex = Math.min(productIndex, maxIndex);
  updateProductPosition();
  const maxBestsellerIndex = Math.max(0, bestsellerProducts.length - visibleProductCount());
  bestsellerIndex = Math.min(bestsellerIndex, maxBestsellerIndex);
  updateBestsellerPosition();
  const maxBrandIndex = Math.max(0, brandCards.length - visibleBrandCount());
  brandIndex = Math.min(brandIndex, maxBrandIndex);
  updateBrandPosition();
  const maxJournalIndex = Math.max(0, journalArticles.length - visibleJournalCount());
  journalIndex = Math.min(journalIndex, maxJournalIndex);
  updateJournalPosition();
});

slidesContainer.addEventListener("transitionend", () => {
  const { count } = edgeSlides();
  const firstRealIndex = count;
  const lastRealIndex = heroSlides.length + count - 1;

  if (activeIndex > lastRealIndex) {
    jumpToIndex(firstRealIndex);
  }

  if (activeIndex < firstRealIndex) {
    jumpToIndex(lastRealIndex);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    moveAndRestart(-1);
  }

  if (event.key === "ArrowRight") {
    moveAndRestart(1);
  }

  if (event.key === "Escape") {
    closeMenu();
    closeLogin();
  }
});

renderSlides();
renderProductCards();
renderBestsellerCards();
renderBrandCards();
renderJournalCards();
startAutoplay();
