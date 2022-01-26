let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let error = document.getElementById("error");
let phnum = document.getElementById("phnnum");
//pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
function validate(){

    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    
    if(regexp.test(email.value)){
        error.innerHTML = "Valid";
        error.style.color = "green";
        return true;
    }
    else{
        error.innerHTML = "Invalid";
        error.style.color = "red";
        return false;
    }
}
function validatePassword(password) {
                
    // Do not show anything when the length of password is zero.
    // if (password.length === 0) {
    //     document.getElementById("msg").innerHTML = "";
    //     return;
    // }
    // Create an array and push all possible values that you want in password
    var matchedCase = new Array();
    matchedCase.push("[$@$!%*#?&]"); // Special Charector
    matchedCase.push("[A-Z]");      // Uppercase Alpabates
    matchedCase.push("[0-9]");      // Numbers
    matchedCase.push("[a-z]");     // Lowercase Alphabates

    // Check the conditions
    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
        if (new RegExp(matchedCase[i]).test(password)) {
            ctr++;
        }
    }
    // Display it
    var color = "";
    var strength = "";
    switch (ctr) {
        case 0:
        case 1:
        case 2:
            strength = "Very Weak";
            color = "red";
            break;
        case 3:
            strength = "Medium";
            color = "orange";
            break;
        case 4:
            strength = "Strong";
            color = "green";
            break;
    }
    document.getElementById("msg").innerHTML = strength;
    document.getElementById("msg").style.color = color;
}

function validatePhnum(){

    let phnnum = /^[0-9]{3}[\.-\s]?[0-9]{3}[\.-\s]?[0-9]{4}$/

    if(phnnum.test(phnum.value)){
        error.innerHTML = "Valid Phone Number";
        error.style.color = "green";
        return true;
    }
    else{
        error.innerHTML = "Invalid Phone Number";
        error.style.color = "red";
        return false;
    }
}
    // if(email.value.trim()=="" || pwd.value.trim()=="" ){
    //     alert("Fielde cannot be empty");
    //     return false;
    // }
    // else{
    //     //alert("Validation is proper");
    //     return true;
    // }



    // if(email.value=="")
    // {
    //     alert("Email cannot be empty");
    //     return false;
    // }
    // else if(pwd.value=="")
    // {
    //     alert("Password cannot be empty");
    //     return false;
    // }
    // else if(pwd.value.length<=5){
    //     alert("PAssword is too short");
    //     pwd.style.border="2px solid red";
    //     return false;
    // }
    // else{
    //     return true;
    // }


  

