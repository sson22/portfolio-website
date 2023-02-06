"use strict";

const navbar = document.getElementById("navbar");
const navbarLogoName = document.getElementById("navbar__logo__name");
const navbarLogoIcon = document.getElementById("navbar__logo__icon");

/* Handle changing the navbar color and background color when you scroll down or up. */
window.addEventListener("scroll", function () {
  if (window.scrollY > 1) {
    navbar.style.backgroundColor = "#2d7081";
    navbar.style.color = "white";
    navbarLogoName.style.color = "white";
    navbarLogoIcon.className = "fa-regular fa-paper-plane";
  } else if (this.window.scrollY === 0) {
    navbar.style.backgroundColor = "transparent";
    navbarLogoIcon.className = "fa-solid fa-paper-plane navbar__icon ";
    navbarLogoName.style.color = "#2d7081";
  }
});
/* find location of section using data-link. There're linked by the id of section */
const navBarLink = document.querySelectorAll(".navbar__menu li");
for (const li of navBarLink) {
  li.addEventListener("click", function () {
    const checkLocation = document.querySelector(this.dataset.link).offsetTop;
    window.scrollTo({ top: checkLocation, behavior: "smooth" });
  });
}

// Handle active class when you click navbar menu.
const clickedNavBarLink = document.getElementsByClassName("navbar__menu__item");
function handleClick(event) {
  //Delete every "active"  in navbar__menu__item.
  for (let i = 0; i < clickedNavBarLink.length; i++) {
    clickedNavBarLink[i].classList.remove("active");
  }
  ß;
  event.target.classList.add("active");
}
function init() {
  for (let i = 0; i < clickedNavBarLink.length; i++) {
    clickedNavBarLink[i].addEventListener("click", handleClick);
  }
}

init();
