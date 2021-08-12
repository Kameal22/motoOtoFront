const registrationForm = document.querySelector('#registrationForm');

registrationForm.addEventListener('submit', (f) =>{
    f.preventDefault();
    checkInputs();
    let emailReg = registrationForm.elements.emailReg.value;
    let userName = registrationForm.elements.userName.value;
    let passwordReg = registrationForm.elements.passwdReg.value;
    let passwordRegRe = registrationForm.elements.passwdRe.value;
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
})

function checkInputs(){
  const emailReg = registrationForm.elements.emailReg.value.trim();
  const userName = registrationForm.elements.userName.value.trim();
  const passwdReg = registrationForm.elements.passwdReg.value.trim();
  const passwdRegRe = registrationForm.elements.passwdRe.value.trim();

  if(emailReg.value === ""){
    
  }else{

  }
}