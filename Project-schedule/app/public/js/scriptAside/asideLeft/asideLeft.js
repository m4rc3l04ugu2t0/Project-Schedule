const menuLeft = document.querySelector(".menu-left");
const btnOnOffMenu = document.querySelector(".btn-on-off-menu");

export const handleOpenMenu = (elementClicked) => {
  if (elementClicked.className !== "menu-left") {
    console.log("nooooo");
  }
  console.log("open");

  menuLeft.style.width = "200px";
};
