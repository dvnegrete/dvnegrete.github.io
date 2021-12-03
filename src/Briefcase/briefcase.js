import { App } from "../App/index.js"
import { DB_briefcase } from "./DB_briefcase.js"

import { DB_briefcase } from "./DB_briefcase.js"

const appNode = document.getElementById("mainBriefcase");
debugger;

let container = [];
const briefcaseCount = DB_briefcase.length;

for (let index = 0; index < briefcaseCount; index++) {
    const nameProyect = DB_briefcase[index].name;
    const elementNameProyect = document.createElement("div");
    elementNameProyect.className = "elementNameProyect";
    elementNameProyect.innerText = nameProyect;    
    container.push(elementNameProyect);
}

appNode.append(...container);