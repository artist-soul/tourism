let email = document.getElementById("email");
//let pwd = document.getElementById("pwd");
let error = document.getElementById("error");

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

    if(email.value.trim()=="" || pwd.value.trim()=="" ){
        alert("Fielde cannot be empty");
        return false;
    }
    else{
        //alert("Validation is proper");
        return true;
    }



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


  
}
