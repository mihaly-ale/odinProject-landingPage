const navMenuBtn = document.getElementById("nav-menu-button")
const navbar = document.getElementById("nav")
let isNavOpen = false

navMenuBtn.addEventListener("click", slideInNavigation)

function slideInNavigation() {

  if (isNavOpen) {
    navbar.classList.add("nav-off-screen")
    isNavOpen = false
  } else {
    navbar.classList.remove("nav-off-screen")
    isNavOpen = true
  }
}
