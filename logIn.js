const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    let email = loginForm.elements.emailLog.value;
    console.log(email);
    let password = loginForm.elements.passwdLog.value;
    console.log(password);
    axios.post('http://localhost:8080/api/auth/login', {
        email: 'test@user.com',
        password: 'qwerty123'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
})