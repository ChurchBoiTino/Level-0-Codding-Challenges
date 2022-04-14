function numToTime(number){

     hours = Math.floor(number / 60);
     minutes = number % 60;

    if(hours > 1 || hours === 0){

        hours = hours + ' hours';
    }
    else{

        hours = hours + ' hour';
    }

    if(minutes === 0 || minutes > 1){

        minutes = minutes + ' minutes';
    }
    else{
        
        minutes = minutes + ' minute';
    }

    const time = hours + ' and ' + minutes;

    return time;
}

console.log(numToTime(61));
