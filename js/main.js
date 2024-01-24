let nav = document.querySelector("nav");
let navToggler = document.querySelector(".mobile-icon-menu");

navToggler.addEventListener("click", showAndHideNav);

function showAndHideNav() {
  nav.classList.toggle("show");
}
