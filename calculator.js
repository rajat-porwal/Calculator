let buttons = document.querySelector('#buttons');
let btn = document.querySelectorAll('.btn'); 
let display = document.querySelector('#display');

let operand1, operand2, operator = null;
let clickedInput = [];
let result = 0;
let evaluated = false;

let operatorList = ['/', '*', '+', '-', '=']


/*
getElementByClassName on this button
resulted in Uncaught TypeError: btn.addEventListener is not a function
    at calculator.js:5:8 this error
So use querySelector for it
*/
// for(let i=0; i<btn.length; i++){
//     btn[i].addEventListener('click', () => {
//     let num1 = btn[i].innerHTML;
//     tempNum.push(num1);
//     });
// }
/* NEVER USE A FOR LOOP WITH EVENT LISTENER */

buttons.addEventListener('click', (event) => {      //eventDelegation instead of a for loop here

    if(event.target.className === 'numBtn'){

        clickedInput.push(event.target.innerHTML);      //CRUX OF MY CODE TO GET VALUES
        displayAppendValue(event.target.innerHTML);
    }  

    
    if(event.target.className === 'oprtrBtn'){

        operator = event.target.innerHTML;
        operand1 = parseInt(clickedInput.join(''));
        clickedInput.length = 0;                            //RESET THE CLICKED ARRAY
        displayAppendValue(event.target.innerHTML);
    }  

    if(event.target.className === 'calculate'){

        operand2 = parseInt(clickedInput.join(''));
        displayAppendValue(event.target.innerHTML);
        clickedInput.length = 0;

        result = operate(operand1, operator, operand2);
        display.value = result;
        evaluated = true;
    }

    console.table(operand1, operand2, operator, clickedInput);  
    console.log(result);


    

    //let tempOperand, tempOperand1, tempOperand2 = [];
    // tempOperand = splitArray1 (clickedInput, operatorList);         //split array into separate array based on operators
    // tempOperand1 = tempOperand[0];


    // tempOperand2 = tempOperand[1];
    // operand1 = parseInt(tempOperand1.join(''));
    // // operand2 = parseInt(tempOperand2.join(''));
    // if(! tempOperand2 === undefined){
    //     operand2 = parseInt(tempOperand2.join(''));

    // }

    /* WHAT I TRIED TO GET OPERANDS AND OPERATOR IS 
    1 - ALL MY BUTTON CLASSES WERE NAMED SAME WHICH MADE ME
        WANT TO SPLIT THE CLICKED ARRAY BASED ON OPERATOR LIST AND 

        IT WAS FUTILE BECAUSE EVERY CLICK WAS RE RUNNING THE CODE IN
        A WAY I COULD ONY GET THE 1st OPERAND ONLY */   
    // if(! clickedInput.includes('+')){                    METHOD 1 TO GET 1ST OPERAND  BUT HAD NO CLUE HOW TO GET TEH SECOND ONE
    //     operand1 =parseInt( clickedInput.join(''));
    //     console.log(operand1);
    // }

    // else {
    //     tempOperand2 = clickedInput
    //     console.log(operand1);
    // }

});



function clearDisplayValue(){
    display.value = '';
}

function displayAppendValue (elem) {

    if(evaluated){
        clearDisplayValue();
        evaluated = false;
    }

    
     if (display.value === "0") {               //new code when i want initially the display to show 0
            display.value = elem;
        } 
        
        else {
            display.value += elem;
        }

    


    //old code that did the same as above except initially it was blank
    // display.value = display.value + elem;
}

function sum(num1, num2){                       
    return num1 + num2; 
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiplication(num1, num2){
    return num1 * num2;
}

function division(numerator, denominator){
    if( !( denominator == 0 || isNaN(denominator) ) ){             // condition for denominator to be not Zero or NaN
        return numerator / denominator;
    }
    else return null;
}

function operate(operand1, operator, operand2){                   // function to call arithmetic function as per operator
    switch(operator){
        
        case '+':
           return sum(operand1, operand2);
           break;


        case '-':
            return subtract(operand1, operand2);
            break;
            
        case '*':
            return multiplication(operand1, operand2);
            break;

        case '/':
            return division(operand1, operand2);
            break;
            
        default:
            alert('Invalid Selection');
    }

}

// console.log(operate(5,'+', 61));

// function splitArray1(originalArray, splitArray) {
//     const splittedArrays = [[], []];
    
//     originalArray.forEach(element => {
//       if (splitArray.includes(element)) {
//         splittedArrays.push([]);
//       } else {
//         splittedArrays[splittedArrays.length - 1].push(element);
//       }
//     });
    
//     return splittedArrays.filter(subArray => subArray.length > 0);
//   }