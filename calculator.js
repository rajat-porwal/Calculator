let operand1, operand2, operator = null;



function sum(Num1, Num2){                       
    return Num1 + Num2; 
}

function subtract(Num1, Num2){
    return Num1 - Num2;
}

function multiplication(Num1, Num2){
    return Num1 * Num2;
}

function division(numerator, denominator){
    if( !( denominator == 0 || isNaN(denominator) ) ){             // condition for denominator to be not Zero or NaN
        return numerator / denominator;
    }
    else return null;
}

function operate(operand1, operator, operand2){
    switch(operator){
        case '+':
           sum(operand1, operand2);
           break;


        case '-':
            subtract(operand1, operand2);
            break;
            
        case '*':
            multiplication(operand1, operand2);
            break;

        case '/':
            division(operand1, operand2);
            break;
            
        default:
            alert('Invalid Selection');
    }

}

operate(5, '/', 61);