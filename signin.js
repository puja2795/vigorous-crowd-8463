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
    location.replace("file:///C:/Users/sahoo/Documents/WEB-21/Project/vigorous-crowd-8463/signin.html")
}

function signup(){
    location.replace("file:///C:/Users/sahoo/Documents/WEB-21/Project/vigorous-crowd-8463/signup.html")
}

function home(){
    location.replace("file:///C:/Users/sahoo/Documents/WEB-21/Project/vigorous-crowd-8463/index.html")
}