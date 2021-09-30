const toggleBtn = document.querySelector('.toggleNav');
const scdToggleBtn = document.querySelector('.toggleNavTwo');
const loginCreate = document.querySelector('#logIn');



toggleBtn.addEventListener('click', () => {
    loginCreate.classList.toggle('active');
})