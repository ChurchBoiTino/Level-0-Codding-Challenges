function mergeArrays(arr1, arr2)
{
    result = [];
    var biggestArr = Math.max(arr1.length, arr2.length);

    for(var i = 0; i < biggestArr; i++)
    {
        if(arr1[i] !== undefined)
        {
            result.push(arr1[i]);
        }

        if(arr2 !== undefined)
        {
             result.push(arr2[i]);
        }
    }

    return result;
}

console.log(mergeArrays(['1', '2', '3'], ['4', '6', '5', '7', '8', '9']));

