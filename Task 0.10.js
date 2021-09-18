function commonCharacters(str1, str2)
{
    let splitstr = str1.split('');
    commonChars = '';

    for(let i of str2)
    {
        if(splitstr.includes(i))
        {
            commonChars += i + ', ';
        }
    }

    return 'Common characters: ' + commonChars;
}

console.log(commonCharacters('Tsakani', 'Tevin'));