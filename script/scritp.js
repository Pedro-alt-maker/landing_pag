document.querySelector(".menu_mobile").addEventListener("click", function () {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("abrirNavbar");
});
const btn = document.querySelector(".menu_mobile");
btn.addEventListener("click", function () {
  btn.classList.toggle("activar");
});
ScrollReveal().reveal(".sect_home", {
  origin: "left",
  duration: 2000,
  distance: "20%",
});

ScrollReveal().reveal(".card_cardapio", {
  origin: "left",
  duration: 2000,
  distance: "20%",
});

ScrollReveal().reveal(".sect_home_mobile", {
  origin: "rigth",
  duration: 2000,
  distance: "20%",
});
ScrollReveal().reveal(".sect_avalia_card", {
  origin: "rigth",
  duration: 2000,
  distance: "20%",
});
