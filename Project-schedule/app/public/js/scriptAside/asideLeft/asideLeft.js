const conatinerNavLeft = document.querySelector(".container-navbar-left");
const btnNavLeft = document.querySelector(".btn-nav-left");
const inconMenu = document.querySelector(".aside-left-off");

export const handleNavLeft = (value) => {
  if (!value) {
    conatinerNavLeft.style.width = "";
    conatinerNavLeft.style.heigth = "";
    inconMenu.innerHTML = "menu";
    return;
  }

  conatinerNavLeft.style.width = "300px";
  conatinerNavLeft.style.heigth = "100%";
  inconMenu.innerHTML = "close";
};
