function returnAllVowels(randomString)
{
    var onlyVowels = '';
    let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']

    for(let i of randomString)
    {
        if(vowels.includes(i))
        {
            onlyVowels += i + ', ';
        }
    }

    return onlyVowels;


}

console.log(returnAllVowels('The chUrch is on Thursday'));