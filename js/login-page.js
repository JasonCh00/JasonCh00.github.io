const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "jasonch" && password === "123&abc") {
        alert("You have successfully logged in.");
        
        window.location.replace("service.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
