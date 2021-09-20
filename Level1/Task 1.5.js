function triangle(value)
{
    if(value > 0)
    {
        for(var i = 0; i < value; i++)
        {
            for(var j = 0; j <= i; j++)
            {
                console.log('#')
            }
            console.log("");
        }
    }

    if(value < 0)
    {
        for(var i = value; i < 0; i++)
        {
            for(var j = i * -1; j >= 1; j--)
            {
                console.log('#')
            }
            console.log("");
        }
    }
}

triangle(-10);