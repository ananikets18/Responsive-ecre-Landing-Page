// *===== TOGGLE MENU ===== */
const toggle_menu_btn = document.querySelector(".toggle_menu_btn");
const menu = document.querySelector(".menu");
const close_btn = document.querySelector(".btn_close_menu");

// Open Menu
toggle_menu_btn.addEventListener("click", () => {
  menu.classList.add("show");
});

// Close Menu
close_btn.addEventListener("click", () => {
  menu.classList.remove("show");
});

// *===== GSAP ANIMATION ===== *//;

// *===== NAVBAR ===== */
gsap.from(".logo, .toggle_menu_btn", {
  opacity: 0,
  duration: 1,
  delay: 2,
  y: 10,
});

gsap.from(".primary-menu-list-item, .secondary-menu-list-item", {
  opacity: 0,
  duration: 1,
  delay: 2.1,
  y: 20,
  stagger: 0.2,
});

// *===== HERO ===== */

gsap.from(".title", {
  opacity: 0,
  duration: 1,
  delay: 1.6,
  y: 30,
});

gsap.from(".heading", {
  opacity: 0,
  duration: 1,
  delay: 1.8,
  y: 30,
});

gsap.from(".desc", {
  opacity: 0,
  duration: 1,
  delay: 2,
  y: 30,
});

gsap.from(".search__properties", {
  opacity: 0,
  duration: 1,
  delay: 2.3,
  y: 30,
});

gsap.from(".content_img", {
  opacity: 0,
  duration: 1,
  delay: 2.4,
  y: 10,
  stagger: 0.2,
});

gsap.from(".card", {
  opacity: 0,
  duration: 0.88,
  delay: 2.6,
  x: 20,
});

gsap.from(".prop_circle", {
  opacity: 0,
  duration: 0.88,
  delay: 2.8,
  y: 20,
});

gsap.from(".circle", {
  opacity: 0,
  duration: 1,
  delay: 2.6,
  x: -20,
});