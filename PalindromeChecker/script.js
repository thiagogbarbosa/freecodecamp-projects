/* Palindrome Checker. palindrome is a word or phrase that can be read
the same way forwards and backwards, ignoring punctuation, case and spacing

You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols)
and turn everything into the same case (lower or upper case)
in order to check for palindromes.
*/

//Getting DOM elements
const palindromeInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
let userInput = [];

//Check if is a valid input -- "Can't be null or space"
function isValidInput(input){
    if(input === null){
        return true
    } else if (typeof input === "string" && input.trim() !== ""){
        return true;
    } else{
        return false
    }
};

//standardize input, remove punctuation, spaces and symbols -> all to lowercase
//Input example "Aí, Lima falou: Olá, família
function clearInput(input){
    //punctuations
    //spaces
    //symbols

};
//Expected output: "ailimafalouolafamilia"



//check if it is a palindrome
function isApalindrome(){};

//addEventListener
checkBtn.addEventListener("click",);