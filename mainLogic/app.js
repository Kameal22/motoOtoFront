const loginSection = document.querySelector('#logIn');
const userNameSection = document.querySelector('#userNameSection');
const userNameText = document.querySelector('#nickName');
const logoutBtn = document.querySelector('#logoutBtn');

if (localStorage.length === 1) {
    const usersNickname = getParsedJwt(rawToken);
    console.log('User is logged in')
    loginSection.style.display = "none";
    userNameSection.style.display = "flex";
    userNameText.textContent = usersNickname.username;
} else {
    loginSection.style.display = "flex";
    userNameSection.style.display = "none";
}

logoutBtn.addEventListener('click', () => {
    window.localStorage.removeItem('userToken');
    location.href = "/motoOto/landingPage/index.html";
})

// Secured endpoint TEST below

// axios.get('http://localhost:8080/api/test', {
//         headers: {
//             Authorization: 'Bearer ' + rawToken
//         }
//     })
//     .then(function(response) {
//         console.log(response)
//     })

// .catch(function(error) {
//     console.log(error);

// });