// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.style.display = "none";
  });
});

// Loader
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hide");
  }, 1400);
});

// Scroll animation
const revealOnScroll = () => {
  document.querySelectorAll(".fade-up").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) {
      el.classList.add("show");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Cursor Glow
const cursorGlow = document.getElementById("cursorGlow");
document.addEventListener("mousemove", (e) => {
  cursorGlow.style.left = e.clientX + "px";
  cursorGlow.style.top = e.clientY + "px";
});

// Back to top
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Render cards
function renderCards(data, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = data.map(item => `
    <a class="place-card fade-up" href="${item.link}" target="_blank">
      <img src="${item.image}" alt="${item.title}">
      <div class="card-content">
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
      </div>
    </a>
  `).join("");
}

function renderCulture(data, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = data.map(item => `
    <div class="culture-card fade-up">
      <h4>${item.icon} ${item.title}</h4>
      <p>${item.desc}</p>
    </div>
  `).join("");
}

function renderGallery(data, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = data.map(item => `
    <a class="gallery-item fade-up" href="${item.link}" target="_blank">
      <img src="${item.image}" alt="${item.title}">
      <div class="gallery-overlay">
        <h4>${item.title}</h4>
      </div>
    </a>
  `).join("");
}

function renderSlider(data, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const doubled = [...data, ...data];
  container.innerHTML = doubled.map(item => `
    <div class="slide-card">
      <img src="${item.image}" alt="${item.title}">
      <div class="slide-overlay">
        <h4>${item.title}</h4>
      </div>
    </div>
  `).join("");
}

renderCards(destinationsData, "destinationsGrid");
renderCards(foodsData, "foodsGrid");
renderCulture(cultureData, "cultureGrid");
renderGallery(galleryData, "galleryGrid");
renderSlider(sliderData, "sliderTrack");
revealOnScroll();
