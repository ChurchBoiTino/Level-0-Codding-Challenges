<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> e08c6052411c2e6fccd28e023e87eca52a7c8d63
function numToTime(number)
{
    var hours = Math.floor(number / 60);
    var minutes = number % 60;

    if(hours > 1)
    {
        hours = hours + ' hours';
    }
    else
    {
        hours = hours + ' hour';
    }

    if(minutes === 0 || minutes > 1)
    {
        minutes = minutes + ' minutes';
    }
    else
    {
        minutes = minutes + ' minute';
    }

    var time = hours + ' and ' + minutes;

    return time;
}

<<<<<<< HEAD
console.log(numToTime(240));
=======
console.log(numToTime(240));

=======
function numToTime(number)
{
    var hours = Math.floor(number / 60);
    var minutes = number % 60;

    if(hours > 1)
    {
        hours = hours + ' hours';
    }
    else
    {
        hours = hours + ' hour';
    }

    if(minutes === 0 || minutes > 1)
    {
        minutes = minutes + ' minutes';
    }
    else
    {
        minutes = minutes + ' minute';
    }

    var time = hours + ' and ' + minutes;

    return time;
}

console.log(numToTime(240));

>>>>>>> c742eaa26decd9ac4d9f542f9abaf4559cf7e808
>>>>>>> e08c6052411c2e6fccd28e023e87eca52a7c8d63
