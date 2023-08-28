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

// formulario
document.addEventListener("DOMContentLoaded", function() {
  const personalForm = document.getElementById("myForm");

  personalForm.addEventListener("submit", function(event) {
    event.preventDefault();
    setTimeout(function() {
      cleanFields();
    },1000);
  });
  
  function cleanFields() {
    personalForm.reset();
  }
});
