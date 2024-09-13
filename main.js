// CÓDIGO DO MENU MOBILE
// const btnMobile = document.getElementById('btn-mobile');

// function toggleMenu(){
//   const nav = document.getElementById('nav');
//   nav.classList.toggle('active');
// }

// btnMobile.addEventListener('click', toggleMenu);

const btnMobile = document.querySelector("#btn-mobile");

btnMobile.addEventListener("click", function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
});

// CÓDIGO DO DARKMODE
let darkmode = localStorage.getItem("darkmode");
const trocaTema = document.getElementById("trocatema");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

trocaTema.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  if (darkmode !== "active") {
    enableDarkmode();
  } else {
    disableDarkmode();
  }
});

// CÓDIGO DO SCROLL
document.querySelectorAll(".link-icon-ancora").forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const sectionId = anchor.getAttribute("href");
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});
