// Arr = [2,3,5,5,4,8,8,9]
// Find second largest number


// function secondLargest(Arr)
// {
//     let duplicate=[]
//     for(let i=0;i<Arr.length;i++)
//     {
//         for (let j=i+1;j<Arr.length;j++)
//         {
//             if(Arr[i]===Arr[j])
//             {
//               duplicate.push(Arr[j])
//             }
//         }
//     }
//   return duplicate
// }

// console.log(secondLargest(Arr))

let Arr = [2,3,5,5,4,8,8,9]
/* find the second largest number
*/
function secondLargestNumber(Arr,largestNum)
{
  let left =0;
  let right =Arr.length-1;

  while(left<right)
  {
       let mid = Math.floor((left+right)/2)

       console.log(mid)

       if(largestNum>Arr[mid])
       {
         left++
       }

       else if(largestNum<Arr[mid])
       {
        right--
       }

       else if (largestNum===Arr[mid])
       {
         console.log(mid)
       }
  }


  
}
console.log(secondLargestNumber(Arr,9))