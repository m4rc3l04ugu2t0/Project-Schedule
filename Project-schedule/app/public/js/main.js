import { handleOpenMenu } from "../js/scriptAside/asideLeft/asideLeft";
import "../../src/style/main.scss";
import "../../public/assets/css/styleHome/style.scss";
import "../../public/assets/css/styleRegister/style.scss";

const handleDocumentOnclick = (event) => {
  const elementClicked = event.target;
  console.log(elementClicked);

  return elementClicked;
};

const handleLoadPage = () => {
  document.addEventListener("click", handleDocumentOnclick);

  if (window.location.pathname === "/") {
    handleOpenMenu();
    return;
  }

  console.log("Não no carregamento da página");
};

document.addEventListener("DOMContentLoaded", handleLoadPage);

console.log("Hello, World!");
