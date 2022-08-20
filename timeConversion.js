/* convert 12Hrs to 24Hrs time format */
let s  = '07:05:45PM'


function timeConversion(s)
{
    let newTime = "";
    let removed= s.slice(0,-8)
    if(removed>12)
    { newTime =  parseInt(removed)-12
        newTime = (newTime+s.slice(2,-2))
    }
    if(removed<12)
    {
        newTime =  parseInt(removed)+12
        newTime = (newTime+s.slice(2,-2))
    }
return newTime

}
console.log(timeConversion(s))


































// function timeConversion(s)
// {
//     if(s.includes('PM')|| s.includes("AM"))
//     {
        
//         if(s.includes('PM'))
//         {
//             let indexOfPM = s.indexOf('PM');
//             let slicedPM = s.slice(indexOfPM);

//             return indexOfPM
            

//         }

//         if(s.includes('AM'))
//         {
//             let indexOfAM = s.indexOf('AM');
//             let slicedAM = s.slice(indexOfAM);

//             return slicedAM

//         }

//     }
   

// }
// console.log(timeConversion(s))