/*var user1 = [
    {
        username:"A1",
        password:"A1"
    }
];
var user2 = [
    {
        username:"A2",
        password:"A2"
    }
];
var user3 = [
    {
        username:"A3",
        password:"A3"
    }
];
    var infouser = prompt("What is Your Username"); 
    var infopass = prompt("What is Your Password");
    if(infouser === user1[0].username && infopass === user1[0].password)
    {
        alert("welcome Askand1");
    }else if(infouser  === user2[0].username && infopass===user2[0].password)
    {
        alert("welcome Askand2");
    }else if (infouser === user3[0].username && infopass===user3[0].password) 
    {
        alert("welcome Askand3");
    }else{
        alert("Sorry Wrong username or password");
    }
*/
/*
var iinput = document.getElementById("userinput");
var btn = document.getElementById("enter");
var ul = document.querySelector("ul");
function mouseadd(){
    if (iinput.value.length > 0){
        alert("Task Added!!!!!")
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(iinput.value));
        ul.appendChild(li);
        iinput.value = "";
    }else{
        alert("please enter the task!!!!!")
    }
}
function keyadd(){
    if (iinput.value.length > 0 && event.keyCode === 13){
        alert("Task Added!!!!!")
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(iinput.value));
        ul.appendChild(li);
        iinput.value = "";
    }
}
btn.addEventListener("click",function(){
    mouseadd();
})
iinput.addEventListener("keypress", function(){
    keyadd();
})

var list = document.getElementsByTagName("li");
list.addEventListener("onmouseover", function(){
    list.className="done";
})
*/
var css = document.getElementById("hhh333");
var col1 = document.getElementById("input1");
var col2 = document.getElementById("input2");
var body = document.getElementById("gradient");
function grad(){
    body.style.background = 
    "linear-gradient(to right," + col1.value + ", " + col2.value + ")"
    css.textContent = body.style.background + ";" 
}