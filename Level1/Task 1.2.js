function checkForThree(num1, num2)
{
    var sum = num1 + num2;

    if((num1 === 3 || num2 === 3) && sum.toString().indexOf('3') > -1)
    {
        return true;
    }
    else
    {
        return false;
    }
}

console.log(checkForThree(39, 3));