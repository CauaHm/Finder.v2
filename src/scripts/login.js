var btnSigninLogin = document.querySelector("#signinLogin");
var btnSignupLogin = document.querySelector("#signupLogin");


var body = document.querySelector("body");


btnSigninLogin.addEventListener("click", function() {
    body.className = "sign-in-js";
}); 

btnSignupLogin.addEventListener("click", function() {
    body.className = "sign-up-js";
});