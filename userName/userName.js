// 1. The username is between 4 and 25 characters.
// 2. It must start with a letter.
// 3. It can only contain letters, numbers, and the underscore character.
// 4. It cannot end with an underscore character.
// If the username is valid then your program should return the string true, otherwise return the string false.
// Examples
// Input: "aa_"
// Output: false
// Input: "u__hello_world123"
// Output: true

let userName = prompt(`1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.
If the username is valid then program returns true unless false.`)
var isAlpha = function(ch){
    return /^[A-Z]$/i.test(ch);
  }

if (userName.length > 4 
    && userName.length < 25 
    && isAlpha(userName[0]) 
    && LettersNumbersUnderscore(userName)
    && !(userName.endsWith("_"))) {
    console.log(true);
} else {
    console.log(false);
}

function LettersNumbersUnderscore(str) {
  return /^[0-9a-zA-Z_]+$/.test(str);
}