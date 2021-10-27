function celsiusToFarenheit(degrees){
    let celsius = (9/5) * degrees + 32;

    return celsius;
}

function farenheitToCelsius(farenheit){
    let farenheit = (5/9) * (farenheit - 32);

    return farenheit;
}

console.log(celsiusToFarenheit(35));
console.log(farenheitToCelsius(95));