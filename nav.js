const navMenuBtn = document.getElementById("nav-menu-button")

navMenuBtn.addEventListener("click", slideInNavigation)


function slideInNavigation() {
  const nav = document.getElementById("nav")

  nav.style.translate = 0;
}