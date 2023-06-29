// JavaScript for Toggle Menu
var navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}

// Button Reset
const form = document.querySelector('form');
form.querySelector('button[type="reset"]').addEventListener('click', (event) => {
  event.preventDefault();
  form.reset();
});