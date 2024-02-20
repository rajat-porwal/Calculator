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
    if( ( !denominator == 0 || isNaN(denominator) ) ){             // condition for denomentor to be not Zero or NaN
        return numerator / denominator;
    }

    else return null;
}


