/* 1. Write a Logic to count number of 1's in the array
a=[1,1,1,1,2,2,2,2,2,2,1,1,2]  */

// let a=[1,1,1,1,2,2,2,2,2,2,1,1,2]
// function dublicate(array,num)
// {
//     let count=0;
//    for(let i=0;i<array.length;i++)
//    {  
   
//         if(array[i]===num)
//         {
//             count++
//         }
//    }
//  return count;
// }
// console.log(dublicate(a,1))
// console.log(dublicate(a,1))

// function counterNum(array,numb)
// {
//     let count=0;
//     let countedNumber = array.map((ele)=>{
//       if(ele===numb)
//       {
//         count++
//       }
//     })

//     return count;
// }

// console.log(counterNum(a,1))


// function findDub(array,num)
// {
//     let count=0;

//     let countedNumber = array.reduce((accumulator,curVal,index)=>
//     {
//         if(curVal===num)
//         {
//   count++;

//         }
//     })

//     return count;
// }
// let a=[1,1,1,1,2,2,2,2,2,2,1,1,2]
// console.log(findDub(a,1))






/*   2.Convert to Object: 
Input: ["1", "4", "0", "6", "9"]  
output: {"1":1,"4":4,"0":0,"6":6,"9":9
}*/


// function convertToObj(array)
// {
//     let convertToObj ={};

//     for(let item in array)
//     {
//        convertToObj[item] = parseInt(item);
//     }

//     return convertToObj


// }
// console.log(convertToObj(["1", "4", "0", "6", "9"]))






/*   Write a logic to count number of 1's occurrence in a=112341112321132 without using typecasting  */

// let a=112341112321132 ;
// function countOccurence(num)
// {



// }
// console.log(countOccurence(a))


// (Bonus) do the same logic without conditional operator i.e., IF, FILTER,==,===, '?', Switch Case operators  * *note the array will consist only 1 or 2;

let a=[1,1,1,1,2,2,2,2,2,2,1,1,2];

function countedNumbers(array)
{
    let counted = 0;

    const counts = a.map((ele)=>
    {
        if(ele===1) 
        {
            counted++
        }
    });

    return counted
}
console.log(countedNumbers(a))

