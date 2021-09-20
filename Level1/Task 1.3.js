function checkForNumber(num1, num2)
{
    var sum = num1 +num2;

    if(num1 === 65 || num2 === 65 || sum === 65)
    {
        return true;
    }
    else
    {
        return false;
    }
}

console.log(checkForNumber(30, 30));