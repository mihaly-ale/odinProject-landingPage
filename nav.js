const navMenuBtn = document.getElementById("nav-menu-button")
const navbar = document.getElementById("nav")
const bar = navMenuBtn.children[1]
let isNavOpen = false

navMenuBtn.addEventListener("click", () => {
  slideInNavigation();
  changeNavMenuBtn()
})

function slideInNavigation() {
  if (isNavOpen) {
    navbar.classList.add("nav-off-screen")
    isNavOpen = false
  } else {
    navbar.classList.remove("nav-off-screen")
    isNavOpen = true
  }
}

function changeNavMenuBtn() {
  if (!isNavOpen) {
    bar.classList.remove("change-menu-bar")
    bar.textContent = "—"
  } else {
    bar.classList.add("change-menu-bar")
    bar.textContent = "✕"
  }
}

window.addEventListener("scroll", () => {
  closeNavOnScroll();

})

function closeNavOnScroll() {
  if (isNavOpen) {
    navbar.classList.add("nav-off-screen")
    bar.classList.remove("change-menu-bar")
    bar.textContent = "—"
    isNavOpen = false
  }
}
