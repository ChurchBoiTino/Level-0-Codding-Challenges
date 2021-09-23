function commonCharacters(str1, str2){

    let splitstr = str1.split('');
    commonChars = '';

    for(let i of str2){

        if(splitstr.includes(i)){

            commonChars += i + ', ';
        }
    }

    commonChar = commonChars.substring(0, commonChars.length - 2);

    return 'Common letters: ' + commonChar;
}

console.log(commonCharacters('Tsakaniv', 'Tevinv'));

