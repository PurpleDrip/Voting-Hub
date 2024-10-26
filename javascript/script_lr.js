let i=0;
let isNew=true;

let login_info=document.querySelector("#login-form");
let register_info=document.querySelector("#registration-form"); 

let username=document.getElementById("username");
let password=document.getElementById("password");
let uname=document.getElementById("uname");
let dob=document.getElementById("dob");
let pword=document.getElementById("pword");
let cpword=document.getElementById("cpassword");

let l_btn=document.querySelector(".l-btn");
let r_btn=document.querySelector(".r-btn");

let login_data=login_info.querySelectorAll("*");
let register_data=register_info.querySelectorAll("*");


//FUNCTIONS

function checkifnew(){
  //if the account already exists
  //change isNew=false;
}

function calculateAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }

  return age;
}

function validate_login(username, password) {
  if (username.value === "" || password.value === "") {
    console.log("Username or password field is empty");
    return 1;
  }else {
      //checking data with  database here
      //if the data matches return 0 or else 1
  }
}

function validate_register(uname,dob,pword,cpword){
  checkifnew();
  if(isNew){
  if (uname.value === "" || pword.value === "" || cpword.value===""||dob.value=="") {
    console.log("Please fill all the fields!");
    return 1;}
    else  if (pword.value !== cpword.value) {
      console.log('Password does not match the confirm password');
      return 1;
    }
    else{
        let age=calculateAge(dob.value);

        if(isNaN(age)){
          console.log("Invalid date entry");
          return 1;
        }else if(age < 18){
          console.log("You are not eligible to vote.");
          return 2;
        }else{
          return 0;
        }
          }}else{
              //3 is returned if account already exists.
            return 3;
               
}
}


//OPERATIONS

l_btn.addEventListener("mouseover",() => {
    i=validate_login(username,password);
    if(i===1){
      console.log("Please check the information entered");
    }
    else{
      alert("Login suucessfull");
      window.location.href="/html/home.html";
    }
});

r_btn.addEventListener("mouseover",() => {
    i=validate_register(uname,dob,pword,cpword);
    if(i===1){
      console.log("Please check the information entered");
    }else if(i===2){
      alert("You are not eligible to vote");
    }                                                            //return 1 for  error and break otherwise
    else if(i===3){                                             //return 2 if minor
      alert("User already exists.");                            // return 3 if  user already registered
    }
    else{
      //push data to sql
      alert("Registration Successful")
      window.location.href="/html/home.html";
    }
});
