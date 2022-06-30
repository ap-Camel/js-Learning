
var num01 = parseInt(document.getElementById("num01").innerHTML);
var num02 = parseInt(document.getElementById("num02").innerHTML);
var sum = document.getElementById("sum").innerHTML;

function addition(){
    var sum01 = num01 + num02;
    document.getElementById("sum").innerHTML = sum + sum01;
}

function subtraction() {
    var sub02 = num01 - num02;
    document.getElementById("sum").innerHTML = sum + sub02;
}

function multiply(){
    var mul03 = num01 * num02;
    document.getElementById("sum").innerHTML = sum + mul03;

}

function divide(){
    var div04 = num01 / num02;
    document.getElementById("sum").innerHTML = sum + div04;
}