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
    // console.log(event.target.value);
});

// Getting car brand and model from API below

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

        axios.get('http://localhost:8080/api/cars/' + audiBrand + '/models', )
            .then(function(response) {
                const audiModels = response.data
                for (let i = 0; i < audiModels.length; i++) {
                    const model = audiModels[i]
                }
            })

        .catch(function(error) {
            console.log(error);

        });

        axios.get('http://localhost:8080/api/cars/' + bmwBrand + '/models', )
            .then(function(response) {
                const bmwModels = response.data
                    // console.log(bmwModels);
            })

        .catch(function(error) {
            console.log(error);

        });
    })

.catch(function(error) {
    console.log(error);

});