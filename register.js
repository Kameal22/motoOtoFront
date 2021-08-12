const registrationForm = document.querySelector('#registrationForm');

registrationForm.addEventListener('submit', (f) =>{
    f.preventDefault();
    let emailReg = registrationForm.elements.emailReg.value;
    let userName = registrationForm.elements.userName.value;
    let passwordReg = registrationForm.elements.passwdReg.value;
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