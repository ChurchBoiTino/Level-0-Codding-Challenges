function returnAllVowels(randomString)
{
    var onlyVowels = '';
    let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']

    for(let i of randomString.toLowerCase())
    {
        if(vowels.includes(i))  	
        {
            onlyVowels += i + ', ';
        }
    }

    onlyVowels = Array.from(new Set(onlyVowels.split(', '))).toString();

    console.log(onlyVowels);


}

returnAllVowels('The chUrch is on Thursday');


