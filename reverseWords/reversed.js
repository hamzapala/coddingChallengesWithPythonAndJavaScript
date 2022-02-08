// Purpose of the this coding challenge is to write a code that given a string , returns reverse order of words.
let myWord = prompt("Write a word or a sentence:");
function reversedWord(str) {
    return str.split('').reverse().join('')
}
console.log(reversedWord(myWord));