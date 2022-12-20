'use strict';
//variables>>>
const user= {
    fields : [],
    
};

const computer = {
    fields: [],
};
//variables<<<

//core>>>
assignEventToTableElements();
assignEventToRestartButton();
//core<<<


//functions>>
function assignEventToTableElements(){
    for (let i = 1; i < 10; i++) {
     console.log(document.getElementById(i.toString()));
    document.getElementById(i.toString()).addEventListener('click',clickOnTableElement);
    }
}
function clickOnTableElement(ele){
    this.textContent = "X";
    console.log(this);
}
function assignEventToRestartButton(){
    document.querySelector(".buttonRestart").addEventListener('click',()=>{
       for (let i = 1; i < 10; i++) {
        document.getElementById(i.toString()).textContent="";
         console.log('lol');
       }
    });
}
