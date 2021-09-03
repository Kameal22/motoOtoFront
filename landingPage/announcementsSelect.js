const brandSearching = document.querySelector('#brandSelection');
const modelSearching = document.querySelector('#modelSelection');
const generationSearching = document.querySelector('#generationSelection');
const fuelSearching = document.querySelector('#fuelSelection');
const capacitySearching = document.querySelector('#capacitySelection');

// Figure out a mileage search with widełki.

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
                const selectedModel = event.target.value
            })
        })

    .catch(function(error) {
        console.log(error);

    });
});