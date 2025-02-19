function compararNumeros(num1, num2) {
    if(num1 < num2) {
        return "Número 2 é maior"
    }  else if (num1 == num2) {
        return "Os números são iguais."
    } 
        else {
        return "Número 1 é maior"
    }
}

function numberCheck(numero) {
   if(numero > 0) {
    return "Número positivo."
   } else if (numero < 0) {
    return "Número negativo."
   } else {
    return "Número zero."
   }
}

function dayOfTheWeek(dia){
    switch (dia){
        case 1:
            return "Sunday"
        case 2:
            return "Monday"
        case 3:
            return "Tuesday"
        case 4: 
            return "Wednesday"
        case 5:
            return "Thursday"
        case 6:
            return "Friday"
        case 7: 
            return "Saturday"
        default:
            return "Invalid day."
    }
}
console.log (dayOfTheWeek(2))