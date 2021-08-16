const registrationForm = document.querySelector('#registrationForm');

const emailInput = document.querySelector('#email');
const userNameInput = document.querySelector('#userName');
const passwdInput = document.querySelector('#passwd');
const passwdReInput = document.querySelector('#passwdRe');

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
    return false;
  }else{
    emailInput.style.borderColor = "green";
  }

  if(userName === ""){
    userNameInput.style.borderColor = "red";
    return false;
  }else{
    userNameInput.style.borderColor = "green";
  }

  if(passwordReg === "" || passwordReg !== passwordRegRe){
    passwdInput.style.borderColor = "red";
    passwdReInput.style.borderColor = "red";
    return false;
  }else{
    passwdInput.style.borderColor = "green";
    console.log(passwdInput);
    passwdReInput.style.borderColor = "green";
  }

  isValidated = true;
}