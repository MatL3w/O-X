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
    console.log(this);
}
function assignEventToRestartButton(){
    document.querySelector(".buttonRestart").addEventListener('click',cleaningTable);
}
function cleaningTable(){
           for (let i = 1; i < 10; i++) {
             document.getElementById(i.toString()).textContent = "";
             console.log("lol");
           }
}
