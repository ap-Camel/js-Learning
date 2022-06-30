
var count = 0;
console.log(count)

function increment() {
    
    count += 1;
    console.log("the button was clicked  " + count);
    document.getElementById("id01").innerHTML = count;
}

function save() {
    var element = document.getElementById("id01").innerHTML;
    var element02 = document.getElementById("id02");

    element02.innerHTML += (element + " - ");
}

function reset() {
    count = 0;
    document.getElementById("id01").innerHTML = count;
}