const toggleBtn = document.querySelector('.toggleNav');
const scdToggleBtn = document.querySelector('.toggleNavTwo');
const loginCreate = document.querySelector('#logIn');

const footerDescription = document.querySelector('#footerDescription');
const footerBasednIn = document.querySelector('#footerBasednIn');
const footerDeisgned = document.querySelector('#footerDeisgned');
const footerCreators = document.querySelector('#footerCreators');

toggleBtn.addEventListener('click', () => {
    loginCreate.classList.toggle('active');
})