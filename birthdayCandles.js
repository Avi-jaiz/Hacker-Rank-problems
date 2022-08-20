// function birthdayCakeCandles(candles) {
//     // Write your code here
//     let count={};

// for(let item of candles)
// {
//      count[item] = (count[item]||0)+1
// }
 
//   for(let num in count)
//   {
//        if(count[num]>1)
//        {
//         return `The repeated number is  ${num} , ${count[num]} times`;
//        }
//   }


// }


/* alternate solution */

function birthdayCakeCandles(candles)
{
    let max =candles[0] 
    let count =0;

    for(let i=0;i<candles.length;i++)
    {
        if(candles[i]>max)
        {
            max = candles[i]
        }
    }

    for(let j=0;j<candles.length;j++)
    {
        if(candles[j]===max)
        {
            count++
        }
    }
    return count
}


console.log(birthdayCakeCandles([3,2,1,3])) //2
console.log(birthdayCakeCandles([18 ,90 ,90 ,13 ,90 ,75 ,90 ,8 ,90, 43])) //5
console.log(birthdayCakeCandles([82 ,49 ,82 ,82 ,41, 82 ,15 ,63 ,38, 25])) //4 
