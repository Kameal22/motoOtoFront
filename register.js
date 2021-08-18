const registrationForm = document.querySelector('#registrationForm');

const emailInput = document.querySelector('#email');
const userNameInput = document.querySelector('#userName');
const passwdInput = document.querySelector('#passwd');
const passwdReInput = document.querySelector('#passwdRe');

const mailErr = document.querySelector('.emailP');
const userNameErr = document.querySelector('.usernameP');
const passwdErr = document.querySelector('.passwordP');
const rePasswdErr = document.querySelector('.rePasswordP');

let isValidated = false;

registrationForm.addEventListener('submit', (f) =>{
    checkInputs();
    f.preventDefault();
    let emailReg = registrationForm.elements.emailReg.value.trim();
    let userName = registrationForm.elements.userName.value.trim();
    let passwordReg = registrationForm.elements.passwdReg.value.trim();

    if(isValidated == true){

    axios.post('http://localhost:8080/api/auth/register', {
        username: userName,
        email: emailReg,
        password: passwordReg,
      })
      .then(function (response) {
        console.log(response);
        const token = response.data;
        parseJwt(token);
        window.localStorage.setItem('userToken', token);
        // location.href = "index.html";
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.message);
      });
    }
})

function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  console.log(jsonPayload);

  return JSON.parse(jsonPayload);
};

function checkInputs(){
  let emailReg = registrationForm.elements.emailReg.value.trim();
  let userName = registrationForm.elements.userName.value.trim();
  let passwordReg = registrationForm.elements.passwdReg.value.trim();
  let passwordRegRe = registrationForm.elements.passwdRe.value.trim();

  if(emailReg === "" || emailReg.indexOf('@') === -1){
    emailInput.style.borderColor = "red";
    mailErr.textContent = "Wrong email"
    return false;
  }else{
    emailInput.style.borderColor = "green";
    mailErr.textContent = ""
  }

  if(userName === ""){
    userNameInput.style.borderColor = "red";
    userNameErr.textContent = "Wrong username"
    return false;
  }else{
    userNameInput.style.borderColor = "green";
    userNameErr.textContent = ""
  }

  if(passwdInput.value.length < 8){
    passwdInput.style.borderColor = "red";
    passwdErr.textContent = "Wrong password";
    return false;
  }else{
    passwdInput.style.borderColor = "green";
    passwdErr.textContent = "";
  }

  if(passwordReg !== passwordRegRe){
    passwdReInput.style.borderColor = "red";
    rePasswdErr.textContent = "Passwords doesn't match"
    return false;
  }

  else{
    passwdInput.style.borderColor = "green";
    passwdReInput.style.borderColor = "green";
    passwdErr.textContent = ""
    rePasswdErr.textContent = ""
  }

  isValidated = true;
}