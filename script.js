const header = document.querySelector(".menu-pc");
let navBarMobile = document.querySelector(".menu-mobile");

function showMenu() {
    navBarMobile.classList.toggle("menu-mobile--open");    
}


// Agrega un evento de desplazamiento scroll para header
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});