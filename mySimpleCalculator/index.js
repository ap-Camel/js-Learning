var input = document.getElementById("input01");
var result = document.getElementById("p01");

var temp = [];

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

    temp.push(input.value);
    let string = "";
    for(let i = 0; i < temp.length; i++) {
        string += `${temp[i]} + `;
    }
    result.innerText = string;
    input.value = "";
})