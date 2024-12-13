// if else condition to check if environment is production

let userName:string = "khizar";
let pw:string = "123" ;
let code:string = "456"

if(userName == "Zayan" && pw == "123") { 
    console.log("Moblie code verification successfully");
    if(code == "456"){
        console.log("welcome to production environment" + " " + userName);
    }
    else{
        console.log("Invalid code entered for moblie verification code please try again")
    }
}
else if(userName == "wahaj" && pw == "9015") { 
    console.log("Moblie code verification successfully");
    if(code == "0231"){
        console.log("welcome to production environment" + " " + userName);
    }
    else{
        console.log("Invalid code entered for moblie verification code please try again")
    }
}

else{
    console.log("invalid user to development environment");
}