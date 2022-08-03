let form = document.getElementsByClassName("newform");
let name = document.getElementById("name");
let email = document.getElementById("email");
let num = document.getElementById("num");
let row = document.getElementById("submit");

console.log(name.innerText,email.innerText,num.innerText,row.innerText);
form.addEventListener("Submit",addfunction);
function addfunction(event){
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let num = document.getElementById("num");
    if(name == '' || email == '' || num == ''){
        document.querySelector(".alert1").innerText = "Empty Input Feild(s)"
    }
}