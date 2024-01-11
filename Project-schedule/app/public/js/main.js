import "../../src/style/main.scss";
import "../../public/assets/css/styleHome/style.scss";
import "../../public/assets/css/styleRegister/style.scss";

import { toggleMenu } from "./scriptHome";

const handleDocumentOnClick = (e) => {
  const elementClicked = e.target;

  console.log(elementClicked.className);

  if (elementClicked.className === "bi bi-list") {
    toggleMenu();
  }
};

document.addEventListener("click", handleDocumentOnClick);

console.log("Hello, World!");
