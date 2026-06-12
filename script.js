const titleEl = document.getElementById("title");
const quest1 = document.getElementById("quest1");
const quest2 = document.getElementById("quest2");
const quest3 = document.getElementById("quest3");
const quest4 = document.getElementById("quest4");
let resp1 = document.getElementById("resp1");
let resp2 = document.getElementById("resp2");
let resp3 = document.getElementById("resp3");
let resp4 = document.getElementById("resp4");
let messageEl = document.getElementById("message");
const winEl = document.getElementById("win");
let numPnt = document.getElementById("numpoint");
const pointEl = document.getElementById("point");
const maxPnt = document.getElementById("maxpoint");
const start = document.getElementById("startBtn");
const restart = document.getElementById("restartBtn");
quest1.style.display = "none";
quest2.style.display = "none";
quest3.style.display = "none";
quest4.style.display = "none";
resp1.style.display = "none";
resp2.style.display = "none";
resp3.style.display = "none";
resp4.style.display = "none";
numPnt.style.display = "none";
pointEl.style.display = "none";
maxPnt.style.display = "none";
function startBtn() {
    start.style.display = "none";
    titleEl.style.display = "none";
    quest1.style.display = "inline-block";
    resp1.style.display = "inline-block";
    resp2.style.display = "inline-block";
    resp3.style.display = "inline-block";
    resp4.style.display = "inline-block";
    numPnt.style.display = "inline-block";
    pointEl.style.display = "inline-block";
    maxPnt.style.display = "inline-block";
}
function btnA() {
    if (resp1.textContent === "Lisboa") {
        messageEl.textContent = "Correto!";
        messageEl.style.color = 'green';
        setTimeout(() => {messageEl.textContent = "";}, 1500);
        numPnt.textContent = 1;
        quest2.style.display = "inline-block";
        quest1.style.display = "none";
        resp1.textContent = "300";
        resp2.textContent = "90";
        resp3.textContent = "60";
        resp4.textContent = "30";
    } else if (resp1.textContent === "300" || resp1.textContent === "para Jogar") {
        messageEl.textContent = "Errado, Tente novamente.";
        messageEl.style.color = 'red';
        setTimeout(() => {messageEl.textContent = "";}, 1500);
    } else if (resp1.textContent === "8 biliões") {
        messageEl.textContent = "Correto!";
        messageEl.style.color = 'green';
        setTimeout(() => {messageEl.textContent = "";}, 1500);
        numPnt.textContent = 3;
        quest4.style.display = "inline-block";
        quest3.style.display = "none";
        resp1.textContent = "para Jogar";
        resp2.textContent = "para Programar";
        resp3.textContent = "para Reproduzir Mídia";
        resp4.textContent = "para Navegar na Web";
    }
}
function btnB() {
    if (resp2.textContent === "Porto" || resp2.textContent === "8 milhões" || resp2.textContent === "para Programar") {
        messageEl.textContent = "Errado, Tente novamente.";
        messageEl.style.color = 'red';
        setTimeout(() => {messageEl.textContent = "";}, 1500);
    } else if (resp2.textContent === "90") {
        messageEl.textContent = "Correto!";
        messageEl.style.color = 'green';
        setTimeout(() => {messageEl.textContent = "";}, 1500);
        numPnt.textContent = 2;
        quest3.style.display = "inline-block";
        quest2.style.display = "none";
        resp1.textContent = "8 biliões";
        resp2.textContent = "8 milhões";
        resp3.textContent = "12 biliões";
        resp4.textContent = "6 biliões";
    }
}
function btnC() {
    if (resp3.textContent === "Aveiro" || resp3.textContent === "60" || resp3.textContent === "12 biliões") {
        messageEl.textContent = "Errado, Tente novamente.";
        messageEl.style.color = 'red';
        setTimeout(() => {messageEl.textContent = "";}, 1500);
    } else if (resp3.textContent === "para Reproduzir Mídia") {
        messageEl.textContent = "Correto!";
        messageEl.style.color = 'green';
        setTimeout(() => {messageEl.textContent = "";}, 1500);
        numPnt.textContent = 4;
        quest1.style.display = "none";
        quest2.style.display = "none";
        quest3.style.display = "none";
        quest4.style.display = "none";
        winEl.style.display = "inline-block";
        resp1.style.display = "none";
        resp2.style.display = "none";
        resp3.style.display = "none";
        resp4.style.display = "none";
        restart.style.display = "inline-block";
    }
}
function btnD() {
    if (resp4.textContent === "Guarda" || resp4.textContent === "30" || resp4.textContent === "6 biliões" || resp4.textContent === "para Navegar na Web") {
        messageEl.textContent = "Errado, Tente novamente.";
        messageEl.style.color = 'red';
        setTimeout(() => {messageEl.textContent = "";}, 1500);
    }
}
function restartBtn() {
    winEl.style.display = "none";
    restart.style.display = "none";
    numPnt.textContent = 0;
    quest1.style.display = "inline-block";
    resp1.style.display = "inline-block";
    resp2.style.display = "inline-block";
    resp3.style.display = "inline-block";
    resp4.style.display = "inline-block";
    resp1.textContent = "Lisboa";
    resp2.textContent = "Porto";
    resp3.textContent = "Aveiro";
    resp4.textContent = "Guarda";
}
