// get submit button and apply event handler
document.getElementById("submit_btn").addEventListener("click", function () {
    // console.log("clicked");

    // get email input field 
    const emailInputField = document.getElementById("email_input");
    const userEmail = emailInputField.value;
    // console.log(userEmail);

    //get password input field
    const passwordInputField = document.getElementById("password_input");
    const userPassword = passwordInputField.value;
    // console.log(userPassword);

    // page redirect to another page 
    if(userEmail == "abc@gmail.com" && userPassword == "secret"){
        window.location.href = "banking.html";
    }
})