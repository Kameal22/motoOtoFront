const mainSearchingForm = document.querySelector('#saleSearch');

const brandSearching = document.querySelector('#brandSelection');
const modelSearching = document.querySelector('#modelSelection');
const generationSearching = document.querySelector('#generationSelection');
const fuelSearching = document.querySelector('#fuelSelection');
const capacitySearching = document.querySelector('#capacitySelection');

// Send whole object at the end of this script and then work with what You got (what user chose to search for);

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

            firstModelOptionLand.disabled = true

            modelSearching.prepend(firstModelOptionLand);

            const chosenModelsLand = response.data

            chosenModelsLand.forEach((model) => {
                const newModelOptionLand = document.createElement('option');
                const modelOptionTextLand = document.createTextNode(model);

                newModelOptionLand.appendChild(modelOptionTextLand);

                newModelOptionLand.setAttribute('value', model);

                modelSearching.appendChild(newModelOptionLand);
            })
        })

    .catch(function(error) {
        console.log(error);

    });
});

let searchParams = `/motoOto/announcements/announcements.html?`

mainSearchingForm.addEventListener('submit', (f) => {
    f.preventDefault();

    searchParams = `/motoOto/announcements/announcements.html?`

    if (!searchParams.includes(brandSearching.value)) {
        searchParams += `&brand=${brandSearching.value}`
    }

    if (!searchParams.includes(modelSearching.value)) {
        searchParams += `&model=${modelSearching.value}`
    }

    if (!searchParams.includes(generationSearching.value)) {
        searchParams += `&generation=${generationSearching.value}`
    }

    if (!searchParams.includes(fuelSearching.value)) {
        searchParams += `&fuel=${fuelSearching.value}`
    }

    if (!searchParams.includes(capacitySearching.value)) {
        searchParams += `&capacity=${capacitySearching.value}`
    }

    searchParams = searchParams.slice(0, 42) + searchParams.slice(43);

    console.log(searchParams)

    // location.href = searchParams;
})