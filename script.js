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

const toggleButton = document.getElementById("toggleButton");
const colorPalettes = document.querySelectorAll(".color-circle");
const orangePallete = document.getElementById("orangeCircle");
const pathsToChange = document.querySelectorAll("#path494, #path496, #path508, #path518, #path538")
const popup =  document.getElementById("popup");

function changePathColor(path,color) {
  path.style.fill = color;
}

colorPalettes.forEach(palette => {
  palette.addEventListener("click" ,() => {
    const colorName = palette.classList[1];
    const newColor = getComputedStyle(document.documentElement).getPropertyValue(`--${colorName}`);
    document.documentElement.style.setProperty("--orange", newColor);
    
    pathsToChange.forEach(path => {
      changePathColor(path, newColor);
    });
  });
});

orangePallete.addEventListener("click", () => {
  document.documentElement.style.setProperty("--orange", "#ff7517");
  pathsToChange.forEach(path => {
    changePathColor(path, "#ff7517");
  });
});

toggleButton.addEventListener("click", () => {
  if (popup.classList.contains("hidden")) {
    popup.classList.remove("hidden");
  } else {
    popup.classList.add("hidden");
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


