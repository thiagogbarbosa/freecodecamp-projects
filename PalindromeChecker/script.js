/* Palindrome Checker Project. Palindrome is a word or phrase that can be read
the same way forwards and backwards, ignoring punctuation (and symbols), case and spacing.
*/

//Getting DOM elements
const palindromeInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const showResults = document.getElementById("result");

//isValidInput check if is a valid input. Input !== Null, "".
function isValidInput(input){
    //If the input is a whitespace the method trim() should return an empty string.
    return input !== null && typeof input === "string" && input.trim() !== ""? true : false;
};

//clearInput will remove punctuation, spaces(among words), symbols and set all to lower case if its a valid input.
function clearInput(input){
    if(isValidInput(input)){
        //normalizing the input by canonical decomposition and replacing the combining mark's code's
        let cleanString = input.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
        let regex = /[^A-Za-z0-9_]/ig;
        cleanString = cleanString.replace(regex,"") //replacing every symbol but the underscore by an empty string
        return cleanString;  
    } else{
        alert("Please input a value")
        return null
    };
};

//isApalindrome checks if input is a palindrome by comparing the original input with the inverted input
function isApalindrome(str){

//It also could be done using loops but this was the solution I choose
    let reversedString = clearInput(str).split("").reverse().join("");

    //Checking for falsy values. If the input is just symbols it still will be a valid input
    //then, when the clearInput() function is called the output will be an empty string
    //which can't be a palindrome.
    if(!reversedString){
        return alert("Please, insert a valid input");
    } else if(reversedString===clearInput(str)) {
        return true
    } else {
        return false
    };
};

//displayResults shows to the user if the phrase or word is a palindrome or not.
function displayResults(){
    const isApalindromeBoolean = isApalindrome(palindromeInput.value);
    let palindromeMsg = `
    <p class="user-input">
    <strong>${palindromeInput.value}</strong> is a palindrome.
    </p>
    `;
    if(isApalindromeBoolean){
        return showResults.innerHTML= palindromeMsg;
    } else {
        palindromeMsg = `
    <p class="user-input">
    <strong>${palindromeInput.value}</strong> is not a palindrome.
    </p>
    `;
        return showResults.innerHTML = palindromeMsg;
    }
};

checkBtn.addEventListener("click",displayResults);