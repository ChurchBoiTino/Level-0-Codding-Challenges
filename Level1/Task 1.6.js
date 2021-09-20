function longestStrings(arr)
{
    arrOfStrings = arr.sort(function(a, b) {return b.length - a.length});
    var longestStr = '';
    var theStrings = '';

    
    for(var i = 0; i < arrOfStrings.length; i++)
    {
        if(arrOfStrings[i].length > longestStr.length)
        {
            longestStr = arrOfStrings[i];
        }

        if(longestStr.length === arrOfStrings[i].length)
        {
            theStrings += arrOfStrings[i] + '\n';
        }
    }

    return theStrings;
}

console.log(longestStrings(['Chicken', 'Chccken', 'Chocolate']));