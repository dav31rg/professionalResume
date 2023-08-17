let navBarMobile = document.querySelector(".menu-mobile");
const header = document.querySelector(".menu-pc");

function showMenu() {
    navBarMobile.classList.toggle("menu-mobile--open");    
}


// Agrega un evento de desplazamiento (scroll)
window.addEventListener("scroll", () => {
  // Verifica la posición de desplazamiento vertical
  if (window.scrollY > 0) {
    // Agrega una clase CSS al encabezado para aplicar la sombra
    header.classList.add("scrolled");
  } else {
    // Remueve la clase si la posición de desplazamiento es cero
    header.classList.remove("scrolled");
  }
});