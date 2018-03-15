// main-menu.js

var menuButton = document.querySelector(".page-header__toggle");
var menu = document.querySelector(".page-header__nav");

menuButton.addEventListener("click", function(event) {
  event.preventDefault();
  menu.classList.toggle("page-header__nav--closed");
});
