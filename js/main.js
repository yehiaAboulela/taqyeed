// const sideNavOverlay = document.querySelector(".overlay");
// const mobileNav = document.querySelector(".mobile-nav");
const openSideNavBtn = document.querySelector("#openSideNavBtn");
const escMinuBtn = document.querySelector("#escMinuBtn");
const mobileNav = document.querySelector(".main-side-nav");

openSideNavBtn.addEventListener("click", function () {
  mobileNav.classList.add("active");
});
escMinuBtn.addEventListener("click", function () {
  mobileNav.classList.remove("active");
});
sideNavOverlay.addEventListener("click", function () {
  mobileNav.classList.remove("active");
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
  },
});
