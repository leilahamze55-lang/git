const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const menuClose = document.querySelector(".mobile-menu-close");
const navMegaLinks = document.querySelectorAll(".nav-mega > a");

const slides = document.querySelectorAll(".slide-card");
const slidesTrack = document.querySelector(".slides");
const prevSlide = document.querySelector(".slider-arrow.prev");
const nextSlide = document.querySelector(".slider-arrow.next");

const productCards = document.querySelectorAll(".products-section:not(.bestsellers-section) .product-card");
const productTrack = document.querySelector(".products-section:not(.bestsellers-section) .product-track");
const productPrev = document.querySelector(".product-prev");
const productNext = document.querySelector(".product-next");

const bestsellerCards = document.querySelectorAll(".bestseller-track .product-card");
const bestsellerTrack = document.querySelector(".bestseller-track");
const bestsellerPrev = document.querySelector(".bestseller-prev");
const bestsellerNext = document.querySelector(".bestseller-next");

const brandCards = document.querySelectorAll(".brand-card");
const brandTrack = document.querySelector(".brand-track");
const brandPrev = document.querySelector(".brand-prev");
const brandNext = document.querySelector(".brand-next");

const journalCards = document.querySelectorAll(".journal-card");
const journalTrack = document.querySelector(".journal-track");
const journalPrev = document.querySelector(".journal-prev");
const journalNext = document.querySelector(".journal-next");

const footerToggles = document.querySelectorAll(".footer-toggle");
const newsletterForm = document.querySelector(".newsletter");
const newsletterEmail = document.querySelector("#newsletter-email");

const accountTriggers = document.querySelectorAll(".account-trigger");
const loginPanel = document.querySelector(".login-panel");
const loginClose = document.querySelector(".login-close");
const passwordToggle = document.querySelector(".password-toggle");
const loginPassword = document.querySelector("#login-password");

let slideIndex = 0;
let productIndex = 0;
let bestsellerIndex = 0;
let brandIndex = 0;
let journalIndex = 0;

function visibleCount(track) {
  return Number(getComputedStyle(track).getPropertyValue("--show-count"));
}

function showItems(items, start, count) {
  items.forEach((item, index) => {
    item.classList.add("is-hidden");

    if (index >= start && index < start + count) {
      item.classList.remove("is-hidden");
    }
  });
}

function moveSlider(items, currentIndex, direction, count) {
  const maxIndex = Math.max(0, items.length - count);
  let newIndex = currentIndex + direction;

  if (newIndex < 0) {
    newIndex = maxIndex;
  }

  if (newIndex > maxIndex) {
    newIndex = 0;
  }

  showItems(items, newIndex, count);
  return newIndex;
}

function updateAllSliders() {
  showItems(slides, slideIndex, visibleCount(slidesTrack));
  showItems(productCards, productIndex, visibleCount(productTrack));
  showItems(bestsellerCards, bestsellerIndex, visibleCount(bestsellerTrack));
  showItems(brandCards, brandIndex, visibleCount(brandTrack));
  showItems(journalCards, journalIndex, visibleCount(journalTrack));
}

function openMenu() {
  nav.classList.add("open");
  document.body.classList.add("menu-open");
}

function closeMenu() {
  nav.classList.remove("open");
  document.body.classList.remove("menu-open");

  document.querySelectorAll(".nav-mega.submenu-open").forEach((item) => {
    item.classList.remove("submenu-open");
  });
}

menuToggle.addEventListener("click", () => {
  if (document.body.classList.contains("menu-open")) {
    closeMenu();
  } else {
    openMenu();
  }
});

menuClose.addEventListener("click", closeMenu);

navMegaLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (!document.body.classList.contains("menu-open")) {
      return;
    }

    event.preventDefault();
    link.parentElement.classList.toggle("submenu-open");
  });
});

prevSlide.addEventListener("click", () => {
  slideIndex = moveSlider(slides, slideIndex, -1, visibleCount(slidesTrack));
});

nextSlide.addEventListener("click", () => {
  slideIndex = moveSlider(slides, slideIndex, 1, visibleCount(slidesTrack));
});

productPrev.addEventListener("click", () => {
  productIndex = moveSlider(productCards, productIndex, -1, visibleCount(productTrack));
});

productNext.addEventListener("click", () => {
  productIndex = moveSlider(productCards, productIndex, 1, visibleCount(productTrack));
});

bestsellerPrev.addEventListener("click", () => {
  bestsellerIndex = moveSlider(bestsellerCards, bestsellerIndex, -1, visibleCount(bestsellerTrack));
});

bestsellerNext.addEventListener("click", () => {
  bestsellerIndex = moveSlider(bestsellerCards, bestsellerIndex, 1, visibleCount(bestsellerTrack));
});

brandPrev.addEventListener("click", () => {
  brandIndex = moveSlider(brandCards, brandIndex, -1, visibleCount(brandTrack));
});

brandNext.addEventListener("click", () => {
  brandIndex = moveSlider(brandCards, brandIndex, 1, visibleCount(brandTrack));
});

journalPrev.addEventListener("click", () => {
  journalIndex = moveSlider(journalCards, journalIndex, -1, visibleCount(journalTrack));
});

journalNext.addEventListener("click", () => {
  journalIndex = moveSlider(journalCards, journalIndex, 1, visibleCount(journalTrack));
});

footerToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const column = toggle.parentElement;
    column.classList.toggle("expanded");

    if (column.classList.contains("expanded")) {
      toggle.textContent = "See Less";
    } else {
      toggle.textContent = "See More";
    }
  });
});

function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (isValidEmail(newsletterEmail.value)) {
    newsletterForm.classList.remove("invalid");
  } else {
    newsletterForm.classList.add("invalid");
  }
});

function openLogin() {
  closeMenu();
  loginPanel.classList.add("open");
}

function closeLogin() {
  loginPanel.classList.remove("open");
}

accountTriggers.forEach((button) => {
  button.addEventListener("click", openLogin);
});

loginClose.addEventListener("click", closeLogin);

passwordToggle.addEventListener("click", () => {
  if (loginPassword.type === "password") {
    loginPassword.type = "text";
  } else {
    loginPassword.type = "password";
  }
});

window.addEventListener("resize", () => {
  slideIndex = 0;
  productIndex = 0;
  bestsellerIndex = 0;
  brandIndex = 0;
  journalIndex = 0;
  updateAllSliders();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    closeLogin();
  }
});

updateAllSliders();
