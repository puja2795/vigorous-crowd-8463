let form = document.querySelector("form");
form.addEventListener("submit", signupFunction);

function signupFunction(event) {
    console.log("inside my function");
    event.preventDefault();
    let usersObj = JSON.parse(localStorage.getItem("users")) || {};
    const email = form.querySelector("#email").value;
    console.log(usersObj);
    if (usersObj[email]) {
        alert("Email already exist");
    } else {
        console.log("in else")
        let obj = {
            name: form.querySelector("#name").value,
            password: form.querySelector("#password").value,
        };
        
        usersObj[email] = obj;
        localStorage.setItem("users", JSON.stringify(usersObj));
        location.replace("file:///C:/Users/sahoo/Documents/WEB-21/Project/vigorous-crowd-8463/signin.html")
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