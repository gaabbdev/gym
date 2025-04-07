const bar = document.querySelector("#bar");
const nav = document.querySelector("#nav");
const menu = document.querySelector("#menu");
const close = document.querySelector("#close");

eventos();

function eventos() {
  bar.addEventListener("click", () => menu.classList.add("nav__show"));

  close.addEventListener("click", () => menu.classList.remove("nav__show"));

  document.addEventListener("scroll", () =>
    window.scrollY > 140
      ? nav.classList.add("menu-bg")
      : nav.classList.remove("menu-bg")
  );
}
