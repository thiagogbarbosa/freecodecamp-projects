/* Palindrome Checker. palindrome is a word or phrase that can be read
the same way forwards and backwards, ignoring punctuation, case and spacing

You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols)
and turn everything into the same case (lower or upper case)
in order to check for palindromes.
*/

//Getting DOM elements
const palindromeInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const showResults = document.getElementById("result");

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
    if(isValidInput(input)){
        let cleanString = input.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
        let regex = /[^A-Za-z0-9]/ig;
        cleanString = cleanString.replace(regex,"")
        return cleanString;  
    } else{
        alert("Please input a value")
    };
};
//Expected output: "ailimafalouolafamilia"

//check if it is a palindrome
function isApalindrome(str){
//compare the original string with reversed one
//it can be done using methods or using loops.
    let reversedString = clearInput(str).split("").reverse().join("");
    return reversedString===clearInput(str)? true : false;
};

function displayResults(){
    const isApalindromeBoolean = isApalindrome(palindromeInput.value);
    //showResults.style.display="block";
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
//isApalindrome("Subi no Ônibus");
//addEventListener
//console.log(checkBtn);
/*checkBtn.addEventListener("click", c => {
    c = "olá";
    console.log(c);
} ); */

checkBtn.addEventListener("click", displayResults);