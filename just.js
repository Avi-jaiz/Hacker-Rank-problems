let s  = '07:05:45PM';

function removeAMPM(s)
{
    let removed= s.slice(0,-2)
    return removed;

}

console.log(removeAMPM(s))