const menuLeft = document.querySelector(".menu-left");
const btnOnOffMenu = document.querySelector(".btn-on-off-menu");

let onOff = false;

export const handleOpenMenu = () => {
  if (!onOff) {
    menuLeft.style.width = "200px";
    menuLeft.style.height = "100%";
    onOff = true;
  } else {
    menuLeft.style.width = "";
    menuLeft.style.height = "";
    onOff = false;
  }
};
