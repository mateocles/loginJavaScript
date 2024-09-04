const buttonGetIn = document.getElementById("getInButton");
const showPass = document.getElementById("checkbox");


buttonGetIn.addEventListener ("click", 
    function () {
        const inputUserName = document.getElementById("userMail").value;
        const inputPassword = document.getElementById("pass").value;
        
        if (inputUserName 
            === "" || inputPassword === "") {
            alert("Fild the fields");
        } else {
            const userName = inputUserName;
            const passWord = inputPassword;
           alert("Welcome " + userName)
        }
    }
)

showPass.addEventListener ("click", 
    function showPassword () {
      const valuePass = document.getElementById("pass");
       if ( valuePass.type == "password") {
            valuePass.type = "text";
       } else {
        valuePass.type = "password";
       }
        
    }
)