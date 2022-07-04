var input = document.getElementById("input01");
var result = document.getElementById("p01");

var tempArr = [];
var temp = 0;
var currentOperation = "n";

var results = [];

document.getElementById("btn01").addEventListener("click", () => {
    //result = parseFloat(result) + input.value;
    input.value += 1;
})

document.getElementById("btn02").addEventListener("click", () => {
    //result = parseFloat(result) + input.value;
    input.value += 2;
})

document.getElementById("btn03").addEventListener("click", () => {
    //result = parseFloat(result) + input.value;
    input.value += 3;
})

document.getElementById("btn04").addEventListener("click", () => {
    //result = parseFloat(result) + input.value;
    input.value += 4;
})

document.getElementById("btn05").addEventListener("click", () => {
    //result = parseFloat(result) + input.value;
    input.value += 5;
})

document.getElementById("btn06").addEventListener("click", () => {
    //result = parseFloat(result) + input.value;
    input.value += 6;
})

document.getElementById("btn07").addEventListener("click", () => {
    //result = parseFloat(result) + input.value;
    input.value += 7;
})

document.getElementById("btn08").addEventListener("click", () => {
    //result = parseFloat(result) + input.value;
    input.value += 8;
})

document.getElementById("btn09").addEventListener("click", () => {
    //result = parseFloat(result) + input.value;
    input.value += 9;
})

document.getElementById("btnAdd").addEventListener("click", () => {

    if(!(input.value === "" || input.value === " ")) {
        currentOperation = "+";
        calculate();
        result.innerText += (" + " + input.value);
        input.value = "";
    }
    

    /*

    temp += parseFloat(input.value);
    input.value = "";
    result.innerText = temp;

    */


    /*
    tempArr.push(input.value);
    let string = "";
    for(let i = 0; i < tempArr.length; i++) {
        string += `${tempArr[i]} + `;
    }
    result.innerText = string;
    input.value = "";
    */
})


document.getElementById("btnSub").addEventListener("click", () => {

    if(!(input.value === "" || input.value === " ")) {
        currentOperation = "-";
        calculate();
        result.innerText += (" - " + input.value);
        input.value = "";
    }

    /*
    temp -= parseFloat(input.value);
    input.value = "";
    result.innerText = temp;
    */
})

document.getElementById("btnMul").addEventListener("click", () => {
    if(!(input.value === "" || input.value === " ")) {
        currentOperation = "*";
        calculate();
        result.innerText += (" * " + input.value);
        input.value = "";
    }
})

document.getElementById("btnDiv").addEventListener("click", () => {
    if(!(input.value === "" || input.value === " ")) {
        currentOperation = "/";
        calculate();
        result.innerText += (" / " + input.value);
        input.value = "";
    }
})

document.getElementById("btnEqual").addEventListener("click", () => {
    results.push(result.innerText);
    let string = "";
    for(let i = results.length - 1; i >= 0 && i > results.length - 6; i--) {
        string += `<p> ${results[i]} </p>`
    }
    //console.log(string);
    document.getElementById("results").innerHTML = string;
    result.innerText = temp;
})

document.getElementById("btnClear").addEventListener("click", () => {
    result.innerText = 0;
    temp = 0;
})

function calculate() {
    switch(currentOperation) {
        case "+":
            temp += parseFloat(input.value);
            //input.value = "";
            //result.innerText = temp;
        break;

        case "-":
            temp -= parseFloat(input.value);
        break;

        case "*":
            temp *= parseFloat(input.value);
        break;

        case "/":
            temp /= parseFloat(input.value);
        break;

        default:

    }
}