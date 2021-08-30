const addingForm = document.querySelector('#carAddingForm');

const productionYearSelect = document.querySelector('#productionYear');
const brandAddingSelect = document.querySelector('#brandAdding');
const modelAddingSelect = document.querySelector('#modelAdding');
const generationAddingSelect = document.querySelector('#generationAdding');
const fuelAddingSelect = document.querySelector('#fuelAdding');
const capacityAddingSelect = document.querySelector('#capacityAdding');
const mileageInput = document.querySelector('#mileageInput');
const priceInput = document.querySelector('#priceInput');

const sendAddFormBtn = document.querySelector('#sendAddForm');

addingForm.addEventListener('submit', (e) => {
    e.preventDefault();
})

const actualYear = new Date().getFullYear();
let options = "";

for (let y = actualYear; y >= 1980; y--) {
    options += "<option>" + y + "</option>"
}

productionYearSelect.innerHTML = options

axios.get('http://localhost:8080/api/cars/brands', )
    .then(function(response) {
        const brands = response.data

        brands.forEach((brand) => {
            const newBrandOption = document.createElement('option');
            const brandOptionText = document.createTextNode(brand)

            newBrandOption.appendChild(brandOptionText);

            newBrandOption.setAttribute('value', brand);

            brandAddingSelect.appendChild(newBrandOption);
        });

    })

.catch(function(error) {
    console.log(error);

});



brandAddingSelect.addEventListener('change', (event) => {
    const chosenBrand = event.target.value

    carAddedOptions["brand"] = chosenBrand;

    axios.get('http://localhost:8080/api/cars/' + chosenBrand + '/models', )
        .then(function(response) {

            modelAddingSelect.innerHTML = "";

            const chosenModels = response.data

            chosenModels.forEach((model) => {
                const newModelOption = document.createElement('option');
                const modelOptionText = document.createTextNode(model);

                newModelOption.appendChild(modelOptionText);

                newModelOption.setAttribute('value', model);

                modelAddingSelect.appendChild(newModelOption);
            })

            modelAddingSelect.addEventListener('change', (event) => {
                const selectedModel = event.target.value
                carAddedOptions["model"] = selectedModel
            })

        })

    .catch(function(error) {
        console.log(error);

    });
});

productionYearSelect.addEventListener('change', (event) => {
    const selectedYear = event.target.value;
    carAddedOptions["productionYear"] = selectedYear;
})

generationAddingSelect.addEventListener('change', (event) => {
    const selectedGeneration = event.target.value;
    carAddedOptions["generation"] = selectedGeneration;
})

fuelAddingSelect.addEventListener('change', (event) => {
    const selectedFuel = event.target.value;
    carAddedOptions["fuelType"] = selectedFuel;
})

mileageInput.addEventListener('input', (event) => {
    const carMileage = parseInt(event.target.value);
    carAddedOptions["carMileage"] = carMileage;
})

priceInput.addEventListener('input', (event) => {
    const carPrice = parseInt(event.target.value);
    carAddedOptions["price"] = `${carPrice} $`;
})

// Chosen car adding options :

carAddedOptions = {

}