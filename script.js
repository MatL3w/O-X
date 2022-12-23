'use strict';
//variables>>>
const table= new Map();
let modals;
const userMark = "X";
const computerMark = "O"
//variables<<<

//core>>>
cleaningTable();
assignEventToTableElements();
assignEventToRestartButton();
assignEventToModalWindow();
//core<<<


//functions>>
function assignEventToTableElements(){
    for (let i = 1; i < 10; i++) {
        table.set(i, document.getElementById(i.toString()));
        console.log(document.getElementById(i.toString()));
        table.get(i).addEventListener('click',clickOnTableElement);
    }
}
function clickOnTableElement(ele){
    if (this.textContent != userMark || this.textContent != computerMark) {
      this.textContent = userMark;
    }
    console.log(this.textContent)
    this.removeEventListener('click',clickOnTableElement);
   ;
    if (!checkForWinner(userMark) && isEmptyField()) {
      computerMove();
      checkForWinner(computerMark);
    } else {

    }
}
function assignEventToRestartButton(){
    document.querySelector(".buttonRestart").addEventListener('click',cleaningTable);
}
function cleaningTable(){
           for (let i = 1; i < 10; i++) {
             document.getElementById(i.toString()).textContent = "";
             console.log("lol");
           }
           assignEventToTableElements();
}
function computerMove(){
    let number = drawPosition();
    console.log(number);
    while ( number == 0 || table.get(number).textContent == computerMark ||table.get(number).textContent == userMark) {
      number = drawPosition();
      console.log(number);
    }
    table.get(number).textContent="O";
    table.get(number).removeEventListener("click", clickOnTableElement);
}
function isEmptyField(){
    for(const ele of table.values()){
        if (ele.textContent != computerMark && ele.textContent != userMark) return true;
    }
   return false;
}
function drawPosition(){
    return Math.round(Math.random()*9);
}
function checkForWinner(mark){
    const wynik = new Array();
    for(const ele of table.values()){
        if(ele.textContent == mark)wynik.push(ele.id);
    }
    if ((wynik.includes("1") && wynik.includes("2")&&wynik.includes('3')) ||
        (wynik.includes("4") && wynik.includes("5")&&wynik.includes('6')) ||
        (wynik.includes("7") && wynik.includes("8")&&wynik.includes('9')) ||
        (wynik.includes("1") && wynik.includes("4")&&wynik.includes('7')) ||
        (wynik.includes("2") && wynik.includes("5")&&wynik.includes('8')) ||
        (wynik.includes("3") && wynik.includes("6")&&wynik.includes('9')) ||
        (wynik.includes("1") && wynik.includes("5")&&wynik.includes('9')) ||
        (wynik.includes("3") && wynik.includes("5")&&wynik.includes('7')) ) {

      console.log(`wygrywa ${mark}`);
      console.log(wynik);
      for (const ele of modals) {
        ele.style.display = "block";
      }
    }
    return false;
}
function assignEventToModalWindow(){
    modals = document.querySelectorAll(".hidden");
    console.log(modals);
    for(const ele of modals){
        ele.addEventListener('click',()=>{
            for(const element of modals){
            element.style.display ='none';
            }
        })
        console.log(ele);
    }
}