const mainSearchingForm = document.querySelector('#saleSearch');

const brandSearching = document.querySelector('#brandSelection');
const modelSearching = document.querySelector('#modelSelection');
const generationSearching = document.querySelector('#generationSelection');
const fuelSearching = document.querySelector('#fuelSelection');
const capacitySearching = document.querySelector('#capacitySelection');

const carSearchingOptions = {

};

axios.get('http://localhost:8080/api/cars/brands')
    .then(function(response) {
        const brands = response.data

        brands.forEach((brand) => {
            const newBrandOptionLand = document.createElement('option');
            const brandOptionTextLand = document.createTextNode(brand)

            newBrandOptionLand.appendChild(brandOptionTextLand);

            newBrandOptionLand.setAttribute('value', brand);

            brandSearching.appendChild(newBrandOptionLand);
        });

    })
    .catch(function(error) {
        console.log(error);
    });

brandSearching.addEventListener('change', event => {
    const chosenBrandLand = event.target.value

    carSearchingOptions["brand"] = chosenBrandLand;

    // Sale announcements with specified Brand :

    axios.get('http://localhost:8080/api/sale-announcements?brand=' + carSearchingOptions.brand)
        .then(function(response) {

            const brandsResponse = response.data;

            console.log(brandsResponse)

            window.localStorage.setItem('brands', JSON.stringify(brandsResponse));

        })
        .catch(function(error) {
            console.log(error);
        });

    axios.get('http://localhost:8080/api/cars/' + chosenBrandLand + '/models')
        .then(response => {
            modelSearching.innerHTML = ""

            const firstModelOptionLand = document.createElement('option');
            const firstModelOptionTextLand = document.createTextNode('choose model');

            firstModelOptionLand.appendChild(firstModelOptionTextLand);
            firstModelOptionLand.setAttribute('value', 'choose model');

            modelSearching.prepend(firstModelOptionLand);

            const chosenModelsLand = response.data

            chosenModelsLand.forEach((model) => {
                const newModelOptionLand = document.createElement('option');
                const modelOptionTextLand = document.createTextNode(model);

                newModelOptionLand.appendChild(modelOptionTextLand);

                newModelOptionLand.setAttribute('value', model);

                modelSearching.appendChild(newModelOptionLand);
            })

            modelSearching.addEventListener('change', event => {
                const chosenModelLand = event.target.value

                carSearchingOptions["model"] = chosenModelLand;
            })
        })

    .catch(function(error) {
        console.log(error);

    });
});

generationSearching.addEventListener('change', event => {
    const chosenGenerationLand = event.target.value;

    carSearchingOptions["generation"] = chosenGenerationLand
});

fuelSearching.addEventListener('change', event => {
    const chosenFuelLand = event.target.value;

    carSearchingOptions["fuel"] = chosenFuelLand
});

capacitySearching.addEventListener('change', event => {
    const chosenCapacityLand = event.target.value;

    carSearchingOptions["capacity"] = chosenCapacityLand
});

mainSearchingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    location.href = "/motoOto/announcements/announcements.html";
})

// Sale announcements endpoint :

// axios.get('http://localhost:8080/api/sale-announcements')
//     .then(function(response) {
//         console.log(response)

//     })
//     .catch(function(error) {
//         console.log(error);
//     });