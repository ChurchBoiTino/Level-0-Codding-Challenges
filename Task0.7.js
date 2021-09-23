function celsiusToFarenheit(degrees){

    var celsius = (9/5) * degrees + 32;

    return celsius;
}

function farenheitToCelsius(farenheit){
    
    var farenheit = (5/9) * (farenheit - 32);

    return farenheit;
}

console.log(celsiusToFarenheit(35));
console.log(farenheitToCelsius(95));