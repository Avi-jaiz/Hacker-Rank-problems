// /* Question - Given array element of 5 ... answer should be two distint number whose sum of element should be minimum and max */


//  // minSum = 1+2+3+4 = 10;  maxSum = 2+3+4+5 = 14
// // let arr = [1,3,5,7,9];

// // function minMaxSum(arr)
// // {
// //     let minSum =0;
// //     let maxSum = 0
// //  for(let i=0;i<arr.length;i++)
// //  {
    
// //     if(arr[i]<arr[i+1])
// //     {
// //         maxSum += arr[i+1];
// //     }
// //  }

// //  for(let j=5;j>=0;j--)
// //  {
// //     if(arr[j]>arr[j-1])
// //     {
// //         minSum+=arr[j-1]
// //     }
// //  }

// //  return [minSum,maxSum];
// // }

// // console.log(minMaxSum(arr))


// /*  To print     its base is 6 and height is 6

//      #
//     ##
//    ###
//   ####
//  #####
// ######   */


// // function stairCase(n)
// // {
// //     for(let i = 0; i < n; i++){
// //         // Clear the output after each loop
// //         let output = "";
// //         for(let j = 0; j < n; j++){
// //           // Loop through, whenever (n-1-i) is bigger than j concat a space else #
// //            if(j<(n-1-i))
// //            {
// //               output+=' '
// //            }
// //            else 
// //            {
// //                output+="#"
// //            }
// //         }
// //         console.log(output);
// //     }
// // }
// // console.log(stairCase(6))





// /*  Calculate the factorial and store the existing factorial in an cache memory */
// // let cache ={};
// // function factorial (x)
// // {
    
// //     if(x<2)
// //     {
// //         return 1;
// //     }

// //     if(!(x in cache))
// //     {
// //          cache[x] = x*factorial(x-1)
// //     }
// //     return cache[x]
// // }


// // console.log(cache)

// /* above program puts the cache in global but we need to hide in to avoid exposure  */

// // outer/global scope

// /* Below program Hides the cache variable inside a function   */

// // function hideTheCache() {
// //     // "middle scope", where we hide `cache`
// //     var cache = {};

// //     return factorial;

// //     // **********************

// //     function factorial(x) {
// //         // inner scope
// //         if (x < 2) return 1;
// //         if (!(x in cache)) {
// //             cache[x] = x * factorial(x - 1);
// //         }

        

// //         return cache[x];

// //     }
    
// // }

// // var factorial = hideTheCache();

// // console.log(factorial(5))

// /* 7 69 2 221 8974  */

// // function sortArray(array)
// // {
// //    let swapped = true;
// //    do{
// //       swapped = false;
// //        for(let i=0;i<array.length;i++)
// //        {
// //             if(array[i]>array[i+1])
// //             {
// //                  let temp = array[i];
// //                  array[i] = array[i+1];
// //                  array[i+1] = temp;
// //                  swapped = true;
// //             }
// //        }
// //    }
// //    while(swapped)
// //    {
// //       return array
// //    }
   
    
// // }
// // console.log(sortArray([5,4,3,2,1]))



// function miniMaxSum(arr) {
//     // Write your code here
  
//   let swapped =true;
//     do
//     {
//         swapped = false;
//         for(let i=0;i<arr.length;i++)
//         {
//              if(arr[i]>arr[i+1])
//              {
//                   let temp = arr[i+1];
//                   arr[i+1] = arr[i];
//                   arr[i] = temp;
//                   swapped =true;
//              }
//         }
//     }
//     while(swapped)
//     {
//           let minSum =0;
//      let maxSum = 0
//   for(let i=0;i<arr.length;i++)
//   {
    
//      if(arr[i]<arr[i+1])
//      {
//          maxSum += arr[i+1];
//     }
//  }

//  for(let j=5;j>=0;j--)
//   {
//      if(arr[j]>arr[j-1])
//     {
//         minSum+=arr[j-1]
//     }
//  }
  
//   for(let k=0;k<arr.length;k++)
//   {
//        if(arr[k]==arr[k+1])
//        {
//           minSum+= arr[k];
//           maxSum+= arr[k+1]
//        }
//   }


//  return [minSum,maxSum];
//     }
  
  
// }
// console.log(miniMaxSum([7, 69, 2, 221, 8974]))
// console.log(miniMaxSum([5,3,1,2,4]))
// console.log(miniMaxSum([5,5,5,5,5]))
