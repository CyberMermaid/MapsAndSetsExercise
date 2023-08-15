/*Quick Question #1
What does the following code return? */
new Set([1, 1, 2, 2, 3, 4])
//{1,2,3,4}

/* Quick Question #2
What does the following code return?
[...new Set("referee")].join("")
*/
// Since the provided code shows a syntax error, I replaced it with the code below. 
const mySet = new Set("referee");
const joined = [...mySet].join("");
console.log(joined);
//‘ref’

/* Quick Questions #3
What does the Map m look like after running the following code ? */
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);

//{{[1,2,3] => true}, {[1,2,3] => false}}

/* hasDuplicate
Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
hasDuplicate([1, 3, 2, 1]) // true
hasDuplicate([1, 5, -1, 4]) // false */

//if arr.length equals set(arr).size, return true. Else return false. 
function hasDuplicate(arr) { return arr.length === new Set(arr).size; }

/* vowelCount
Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 } */

function vowelCount(str) {
    // Use a Map to remember the frequency of each vowel
    const counts = new Map();
    // Create a set of vowels
    const vowels = new Set("aeiou");

    // Loop through the letters
    for (const letter of str) {
        // If it's a vowel...
        if (vowels.has(letter)) {
            // Count it
            const currentCount = counts.get(letter) || 0;
            counts.set(letter, currentCount + 1);
        }
    };
    return counts;
}


