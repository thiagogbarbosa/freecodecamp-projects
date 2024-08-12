const numberInput = document.getElementById("input");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const romanNumberals = {
    M: 1000,
    CM:900,
    D: 500,
    CD: 400,
    C:100,
    XC:90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
};

/*
const inputHandler = (input)=>{
    //se for nulo: Please enter a valid number
    //se for negativo: please enter a number greater than or equal to 1
    //se for maior que 3999: enter a number less or equal to 3999

}*/

const arabToRoman = (userInput)=>{
    let romanOutput = "";
    let input = userInput;
    const objKeys= Object.keys(romanNumberals);
    const objValues = Object.values(romanNumberals);
    for(let i = 0; objValues[i]>=1; i++){
        while(input>=objValues[i]){
            romanOutput += objKeys[i]; 
            input -= objValues[i];
        };
    };

    console.log(romanOutput);

}; 

arabToRoman(3290);

