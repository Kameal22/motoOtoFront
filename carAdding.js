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

// Getting car brand from API below

axios.get('http://localhost:8080/api/cars/brands', )
    .then(function(response) {
        const brands = response.data
        const audiBrand = response.data[0]
        console.log(audiBrand);
        axios.get('http://localhost:8080/api/cars/' + audiBrand + '/models', )
            .then(function(response) {
                console.log(response)
            })

        .catch(function(error) {
            console.log(error);

        });
    })

.catch(function(error) {
    console.log(error);

});

//Getting car model based on selected brand below