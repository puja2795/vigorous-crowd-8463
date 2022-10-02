document.querySelector("form").addEventListener("submit", loginFunction)

function loginFunction(event){
    event.preventDefault();
    let usersObj = JSON.parse(localStorage.getItem("users")) || {};
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    if(usersObj[email] && usersObj[email].password == password){
        alert("Log In Successful")
    }
    
    else{
        alert("Invalid User Name or Password, Please check");
    }  

}

function login(){
    location.replace("./signin.html")
}

function signup(){
    location.replace("./signup.html")
}

function home(){
    location.replace("./index.html")
}

var mq = window.matchMedia("(max-width: 1200px)");
    
function mqFunc() {
    if(mq.matches){
        document.getElementById("items").style.display="none";
    } else{
        document.getElementById("items").style.display="flex";
    }
}

function menu(isOpen) {
    let el = document.getElementsByClassName("burger")[0];
    if(isOpen) {
        el.getElementsByTagName("i")[0].style.display = "none";
        el.getElementsByTagName("i")[1].style.display = "block";
        document.getElementById("items").style.display="flex";
    } else{
        el.getElementsByTagName("i")[0].style.display = "block";
        el.getElementsByTagName("i")[1].style.display = "none";
        document.getElementById("items").style.display="none";
    }
}

mqFunc();
mq.addListener(mqFunc);