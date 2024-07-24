import estudar from "./util.js";
import {elogiar} from "./util.js";

const bnt1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
    estudar("Vamos estudar React");
});

const bnt2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
    elogiar("O livro React do Major é muito bom!")
});