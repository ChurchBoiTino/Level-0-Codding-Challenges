function celsiusToFarenheit(degrees){
    const celsius = (9/5) * degrees + 32;

    return celsius;
}

function farenheitToCelsius(degrees){
    const farenheit = (5/9) * (degrees - 32);

    return farenheit;
}

console.log(celsiusToFarenheit(35));
console.log(farenheitToCelsius(95));