'use strict';
//variables>>>
const table= new Map();

//variables<<<

//core>>>
cleaningTable();
assignEventToTableElements();
assignEventToRestartButton();
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
    if (this.textContent != "X" || this.textContent != "O") {
      this.textContent = "X";
    }
    console.log(this.textContent)
    this.removeEventListener('click',clickOnTableElement);
    if(isEmptyField())computerMove();
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
    while ( number == 0 || table.get(number).textContent == "O" ||table.get(number).textContent == "X") {
      number = drawPosition();
      console.log(number);
    }
    table.get(number).textContent="O";
    table.get(number).removeEventListener("click", clickOnTableElement);
}
function isEmptyField(){
    for(const ele of table.values()){
        if (ele.textContent == "") return true;
    }
   return false;
}
function drawPosition(){
    return Math.round(Math.random()*9);
}