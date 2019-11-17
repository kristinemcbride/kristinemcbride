
const container = document.querySelector("body");
const nav = document.querySelector(".nav");
const footer = document.querySelector(".footer");

container.addEventListener("scroll", () => {
  nav.classList.add("nav__scroll");
  footer.style.display = "flex";
} );




