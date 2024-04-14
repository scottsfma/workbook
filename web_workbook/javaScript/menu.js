const menubutton = document.querySelector(".menubutton");

const offScreenMenu = document.querySelector(".off-screen-menu");

menubutton.addEventListener("click", () => {
  menubutton.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
