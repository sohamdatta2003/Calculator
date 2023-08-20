let buttons = document.querySelectorAll('button')
let screen = document.querySelector('.display')

let calculation=[]
let rCalc

function calculate(button){
    const value=button.textContent
    if (value=="clear"){
        calculation=[]
        screen.textContent='.'
    }else if(value=="="){
        screen.textContent=eval(calculation.join(''))
    }else{
        calculation.push(value);
        rCalc = calculation.join("");
        screen.textContent = rCalc;
    }
}  


buttons.forEach(button => button.addEventListener('click',() => calculate(button)))