import "./styles.css";
import { homeModule } from "./home";
import { menuModule } from "./menu";
import { contactModule } from "./contact";


const divContainer = document.getElementById("content");
const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const contactBtn = document.getElementById("contactBtn");

homeModule();
const homeBtnClick = function() {
    homeBtn.addEventListener("click", () => {
        divContainer.innerHTML = "";
        homeModule();
    });
};

const menuBtnClick = function() {
    menuBtn.addEventListener("click", () => {
        divContainer.innerHTML = "";
        menuModule();
    });
};

const contactBtnClick = function() {
    contactBtn.addEventListener("click", () => {
        divContainer.innerHTML = "";
        contactModule();
    });
};

homeBtnClick();
menuBtnClick();
contactBtnClick();