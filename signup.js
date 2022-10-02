let form = document.querySelector("form");
form.addEventListener("submit", signupFunction);

function signupFunction(event) {
    event.preventDefault();
    let usersObj = JSON.parse(localStorage.getItem("users")) || {};
    const email = form.querySelector("#email").value;
    if (usersObj[email]) {
        alert("Email already exist");
    } else {
        let obj = {
            name: form.querySelector("#name").value,
            password: form.querySelector("#password").value,
        };
        
        usersObj[email] = obj;
        localStorage.setItem("users", JSON.stringify(usersObj));
        location.replace("./signin.html")
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