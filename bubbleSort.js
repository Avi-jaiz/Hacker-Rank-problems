/* Bubble Sort */

function bubbleSort(array)
{
     let swapped = true;

     do{
        swapped = false;
        for(let i=0;i<array.length;i++)
        {
             
              if(array[i]>array[i+1])
              {
                 let temp = array[i+1];
                 array[i+1] = array[i];
                 array[i] = temp;
                 swapped = true;
              }
        }
     }

     while(swapped)
     {

        return array
     }
}
console.log(bubbleSort([5,4,3,2,1]))