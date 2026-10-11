export function setupNavigation() {
  const nav = document.querySelector(".nav");

  const updateNav = () => {
    nav?.classList.toggle("scrolled", window.scrollY > 120);
  };

  updateNav();
  window.addEventListener("scroll", updateNav, { passive: true });
}
