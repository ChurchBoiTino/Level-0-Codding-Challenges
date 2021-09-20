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