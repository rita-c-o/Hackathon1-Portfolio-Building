let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let navLinks = document.querySelectorAll("header nav a");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active"); 
  menuIcon.classList.toggle("open"); 
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active"); 
    menuIcon.classList.remove("open");  
  });
});

window.onscroll = () => {
  let sections = document.querySelectorAll("section");
  let scrollPosition = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (scrollPosition >= offset && scrollPosition < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector('header nav a[href="#' + id + '"]')
          .classList.add("active");
      });
    }
  });
};
