const loginForm = document.querySelector('#loginForm');
const loginButton = document.querySelector('#loginBtn');

isLoggedIn = false;

loginForm.addEventListener('submit', (e) =>{
    checkLoginInputs();
    e.preventDefault();
    let email = loginForm.elements.emailLog.value;
    let password = loginForm.elements.passwdLog.value;

    axios.post('http://localhost:8080/api/auth/login', {
        email: email,
        password: password
      })
      .then(function (response) {
        const token = response.data;
        console.log(token);
        window.localStorage.setItem('userToken', token);
        location.href = "userIndex.html";
      })

      .catch(function (error) {
        console.log(error);
        checkLoginInputs();
      });
})

function checkLoginInputs(){
  const emailLoginText = loginForm.elements.emailLog.value.trim();
  const passwordLoginText = loginForm.elements.passwdLog.value.trim();

  const emailLoginInput = document.querySelector('#emailLog');
  const passwordLoginInput = document.querySelector('#passwdLog')

  const emailLoginError = document.querySelector('.emailLogErr');
  const passwdLoginError = document.querySelector('.passwdLogErr');

  emailLoginError.textContent = "Wrong email"
  emailLoginInput.style.border = "2px solid red";

  passwdLoginError.textContent = "Wrong password";
  passwordLoginInput.style.border = "2px solid red";

  // if(emailLoginText === ""){
  //   emailLoginError.textContent = "Wrong email"
  //   emailLoginInput.style.border = "2px solid red";
  //   return false;
  // }

  // if(passwordLoginText === ""){
  //   passwdLoginError.textContent = "Wrong password";
  //   passwordLoginInput.style.border = "2px solid red";
  //   return false;
  // }

}