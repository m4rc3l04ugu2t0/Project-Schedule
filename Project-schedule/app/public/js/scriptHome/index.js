export function toggleMenu() {
  console.log("vwe");
  var containerAsideMenu = document.querySelector(".container-side-bar");
  var sideBar = document.querySelector(".side-bar-left");
  const containerContent = document.querySelector(".container-aside-menu");

  if (containerAsideMenu.style.width === "250px") {
    containerAsideMenu.style.width = "0";
    containerAsideMenu.style.height = "0";
    // conteudo.style.marginLeft = "0";
  } else {
    // window.getComputedStyle().width

    containerAsideMenu.style.width = "250px";
    containerAsideMenu.style.height = "100%";
    // conteudo.style.marginLeft = "250px";

    // containerContent.style.width = "";
  }
}
