// toggle navbar
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".navbar");

  hamburger.addEventListener("click", function () {
    navbar.classList.toggle("active-nav");
  });
});

// change nav background on scroll
const headerSelect = document.getElementById("header");

function changeBg() {
  const scrollValue = window.scrollY;
  if (scrollValue < 200) {
    headerSelect.classList.remove("header-active");
  } else {
    headerSelect.classList.add("header-active");
  }
}
window.addEventListener("scroll", changeBg);
