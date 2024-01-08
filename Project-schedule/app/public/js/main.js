import { handleOpenMenu } from "./scriptAside/menuLeft/asideLeft";

import "../../src/style/main.scss";
import "../../public/assets/css/styleHome/style.scss";
import "../../public/assets/css/styleRegister/style.scss";

const handleDocumentOnClick = (e) => {
  const elementClicked = e.target;

  console.log(elementClicked.className);

  if (elementClicked.className === "aside-left-off") {
    handleOpenMenu();
  }
};

document.addEventListener("click", handleDocumentOnClick);

console.log("Hello, World!");
