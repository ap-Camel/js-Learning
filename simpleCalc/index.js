
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


var arr = ["my name", 22, true];
arr.push("im trash");
arr.pop();

function looping() {
    for(var i = 0; i < arr.length; i += 1) {
        console.log(arr[i]);
    }
}

function addText(){
    var p = document.getElementById("p01");
    for(var i = 0; i < arr.length; i++) {
        p.innerHTML += ( " " + arr[i] );
    }
}

console.log(arr);

function getRandom() {
    var randomNum = Math.floor(Math.random() * 6) + 1;
    console.log(randomNum);
}

var me = {
    name: "me",
    age: 22,
    country: "iraq",
    logData: function() {
        console.log(this.name + " is " + this.age + " years old and lives in " + this.country)
    }
}
