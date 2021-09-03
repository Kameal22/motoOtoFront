const loginForm = document.querySelector('#loginForm');
const loginButton = document.querySelector('#loginBtn');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = loginForm.elements.emailLog.value;
    let password = loginForm.elements.passwdLog.value;

    axios.post('http://localhost:8080/api/auth/login', {
            email: email,
            password: password
        })
        .then(function(response) {
            const token = response.data;
            console.log(token);
            window.localStorage.setItem('userToken', token);
            location.href = "/motoOto/login/userIndex.html";
        })

    .catch(function(error) {
        console.log(error);
        checkLoginInputs();
    });
})

function checkLoginInputs() {
    const loginError = document.querySelector('.passwdLogErr');
    loginError.textContent = "Email or password incorrect"
}