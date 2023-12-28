import "../../src/style/main.scss";
import { handleNavLeft } from "./scriptAside/asideLeft/asideLeft";

const elementOnCLick = {};

let onOff = false;

const handleEventClick = (e) => {
  const elemet = e.target;

  if (elemet.className === "aside-left-off") {
    onOff = !onOff;
    handleNavLeft(onOff);
  }
};

document.addEventListener("click", handleEventClick);

console.log("wello word!!!");
