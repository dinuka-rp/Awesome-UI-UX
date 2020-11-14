
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");    // turn on 'open' class in navLinks
  
  links.forEach(link => {
    link.classList.toggle("fade");    // turn on 'fade' class in li
  });
});