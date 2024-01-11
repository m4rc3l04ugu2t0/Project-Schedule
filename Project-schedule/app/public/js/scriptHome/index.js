export function toggleMenu() {
  console.log("vwe");
  var containerAsideMenu = document.querySelector(".container-side-bar");
  var sideBar = document.querySelector(".side-bar-left");
  const containerContent = document.querySelector(".container-content");

  if (containerAsideMenu.style.width === "200px") {
    containerAsideMenu.style.width = "0";
    // containerAsideMenu.style.height = "0";
    containerAsideMenu.style.maxWidth = ""; // Removendo a maxWidth quando a largura for igual a "200px"
  } else {
    containerAsideMenu.style.width = "200px";
    // containerAsideMenu.style.height = "100%";
    containerAsideMenu.style.maxWidth = "200px"; // Adicionando a maxWidth quando a largura for diferente de "200px"
  }
}
