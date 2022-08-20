/* Write a JavaScript function to get the number of occurrences of each letter in specified string */

function letterOccurence(string)
{
    let countedString ={};
    for(let letter of string)
    {
           countedString[letter] = (countedString[letter] || 0)+1;
    }

    return countedString;
}
console.log(letterOccurence(("thequickbrownfoxjumpsoverthelazydog")));