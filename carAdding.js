const addingForm = document.querySelector('#carAddingForm');

const productionYearSelect = document.querySelector('#productionYear');
const brandAddingSelect = document.querySelector('#brandAdding');
const modelAddingSelect = document.querySelector('#modelAdding');
const generationAddingSelect = document.querySelector('#generationAdding');
const fuelAddingSelect = document.querySelector('#fuelAdding');
const capacityAddingSelect = document.querySelector('#capacityAdding');
const conditionAddingSelect = document.querySelector('#isDamagedAdd');
const originAddingSelect = document.querySelector('#originAdding');

const sendAddFormBtn = document.querySelector('#sendAddForm');

brandAddingSelect.addEventListener('change', (event) => {
    console.log(event.target.value);
});