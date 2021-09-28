const toggleBtn = document.querySelector('.toggleNav');
const account = document.querySelector('#account');
const login = document.querySelector('#login');
const nav = document.querySelector('nav');

toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('biggerNav');
})