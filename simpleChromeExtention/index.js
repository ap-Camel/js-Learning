
/*
function addUrl() {
    console.log("button clicked")
} */

var arr = [];

if(localStorage.getItem("array") === null) {
    localStorage.setItem("array", JSON.stringify(arr));
    console.log("im inside null")
} else {
    arr = JSON.parse(localStorage.getItem("array"));
    var string = ``;
    for(var i = 0; i < arr.length; i++) {
        string += `<li><a  target="_blank" href="${arr[i]}">${arr[i]}</a></li>`
    }
    document.getElementById("ul01").innerHTML += string;
}

document.getElementById("btn01").addEventListener("click", function() {
    console.log("button clicked");
    var input01 = document.getElementById("input01").value;
    arr.push(input01);
    console.log(input01);
    if(!(input01 === '' || input01 === ' ')) {
        //document.getElementById("p01").innerText += (arr[arr.length - 1] + "\n");
        document.getElementById("ul01").innerHTML += ("<li><a target='_blank' href='" + arr[arr.length - 1] + "' >" + arr[arr.length - 1] + "</a></li>")
        localStorage.setItem("array", JSON.stringify(arr));
    }
    document.getElementById("input01").value = "";
})

document.getElementById("btn02").addEventListener("click", function() {
    console.log("deleting leads");
    arr = [];
    localStorage.setItem("array", JSON.stringify(arr));
    document.getElementById("ul01").innerHTML = " ";
})



