const registrationForm = document.querySelector('#registrationForm');

const emailInput = document.querySelector('#email');
const userNameInput = document.querySelector('#userName');
const passwdInput = document.querySelector('#passwd');
const passwdReInput = document.querySelector('#passwdRe');

const formMailDiv = document.querySelector('#formMail');

let isValidated = false;

registrationForm.addEventListener('submit', (f) =>{
    checkInputs();
    f.preventDefault();
    let emailReg = registrationForm.elements.emailReg.value.trim();
    let userName = registrationForm.elements.userName.value.trim();
    let passwordReg = registrationForm.elements.passwdReg.value.trim();
    let passwordRegRe = registrationForm.elements.passwdRe.value.trim();

    if(isValidated == true){

    axios.post('http://localhost:8080/api/auth/register', {
        username: userName,
        email: emailReg,
        password: passwordReg,
      })
      .then(function (response) {
        console.log(response);
    
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.message);
      });
    }
})

function checkInputs(){
  let emailReg = registrationForm.elements.emailReg.value.trim();
  let userName = registrationForm.elements.userName.value.trim();
  let passwordReg = registrationForm.elements.passwdReg.value.trim();
  let passwordRegRe = registrationForm.elements.passwdRe.value.trim();

  if(emailReg === "" || emailReg.indexOf('@') === -1){
    emailInput.style.borderColor = "red";
    emailInput.placeholder = "Wrong email"
  }else{
    emailInput.style.borderColor = "green";
  }

  if(userName === ""){
    userNameInput.style.borderColor = "red";
    userNameInput.placeholder = "Wrong username"
  }else{
    userNameInput.style.borderColor = "green";
  }

  if(passwdInput.value.length < 8 || passwdReInput.value.length < 8){
    passwdInput.style.borderColor = "red";
    passwdReInput.style.borderColor = "red";
    return false;
  }

  else if(passwordReg !== passwordRegRe){
    passwdInput.style.borderColor = "red";
    passwdReInput.style.borderColor = "red";
    return false;
  }
  
  else if(passwordReg === ""){
    passwdInput.style.borderColor = "red";
    passwdReInput.style.borderColor = "red";
    return false;
  }

  else{
    passwdInput.style.borderColor = "green";
    passwdReInput.style.borderColor = "green";
  }

  isValidated = true;
}