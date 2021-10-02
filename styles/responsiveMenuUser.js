const userToggleBtn = document.querySelector('.toggleNavTwo');
const usersMenu = document.querySelector('#userNameSection');

const nickName = document.querySelector('#nickName');
const logout = document.querySelector('#logoutBtn');
const sellCar = document.querySelector('#carSell');
const yourSales = document.querySelector('#userSales');


userToggleBtn.addEventListener('click', () => {
    usersMenu.classList.toggle('active');
    nickName.classList.toggle('active');
    logout.classList.toggle('active');
    sellCar.classList.toggle('active');
    yourSales.classList.toggle('active');
})