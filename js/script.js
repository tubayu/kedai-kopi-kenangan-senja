// hamburger menu ketika di klik
const hamburgerMenu = document.querySelector("#hamburger-menu");
const navbarNav = document.querySelector(".navbar .navbar-nav");

hamburgerMenu.addEventListener("click", function () {
  navbarNav.classList.toggle("active");
});

//klik diluar sidebar untuk menghilangkan nav
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
