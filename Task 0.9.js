<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> e08c6052411c2e6fccd28e023e87eca52a7c8d63
function returnAllVowels(randomString)
{
    var onlyVowels = '';
    let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']

    for(let i of randomString.toLowerCase())
    {
<<<<<<< HEAD
        if(vowels.includes(i))  	
=======
        if(vowels.includes(i))
>>>>>>> e08c6052411c2e6fccd28e023e87eca52a7c8d63
        {
            onlyVowels += i + ', ';
        }
    }

    onlyVowels = Array.from(new Set(onlyVowels.split(', '))).toString();

    console.log(onlyVowels);


}

returnAllVowels('The chUrch is on Thursday');
<<<<<<< HEAD


=======
=======
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

    return onlyVowels;


}

console.log(returnAllVowels('The chUrch is on Thursday'));
>>>>>>> c742eaa26decd9ac4d9f542f9abaf4559cf7e808
>>>>>>> e08c6052411c2e6fccd28e023e87eca52a7c8d63
