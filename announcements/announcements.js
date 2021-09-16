const mainSalesSection = document.querySelector('#mainSalesSection');

let params = (new URL(document.location)).searchParams;
let brand = params.get('brand');
let model = params.get('model');
let generation = params.get('generation');
let fuel = params.get('fuel');
let capacity = params.get('capacity');

console.log(brand, model, generation, fuel, capacity)

let axiosDefault = `http://localhost:8080/api/sale-announcements?`

if (brand !== null) {
    axiosDefault += `&brand=${brand}`
}

if (model !== null) {
    axiosDefault += `&model=${model}`
}

if (generation !== null) {
    axiosDefault += `&generation=${generation}`
}

if (fuel !== null) {
    axiosDefault += `&fuel=${fuel}`
}

if (capacity !== null) {
    axiosDefault += `&capacity=${capacity}`
}

axios.get(axiosDefault)
    .then(function(response) {
        const carsResponse = response.data

        carsResponse.forEach((car) => {

            const imageName = car.imageURL
            const brandName = car.car.brand
            const modelName = car.car.model
            const productionName = car.car.productionYear
            const priceName = car.price

            // main div
            const newSaleDiv = document.createElement('div');

            // children of main div
            const newImageDiv = document.createElement('div');
            const newBrandDiv = document.createElement('div');
            const newModelDiv = document.createElement('div');
            const newProductionDiv = document.createElement('div');
            const newPriceDiv = document.createElement('div');

            //Inside of main div's child
            const newImageImage = document.createElement('img');
            const newBrandText = document.createElement('h2');
            const newModelText = document.createElement('h2');
            const newProductionText = document.createElement('h2');
            const newPriceText = document.createElement('h2');

            newImageImage.src = imageName;
            newBrandText.innerHTML = brandName;
            newModelText.innerHTML = modelName;
            newProductionText.innerHTML = productionName;
            newPriceText.innerHTML = `${priceName} $`;

            newImageImage.className = ('saleImage');

            newImageDiv.append(newImageImage);
            newBrandDiv.append(newBrandText);
            newModelDiv.append(newModelText);
            newProductionDiv.append(newProductionText);
            newPriceDiv.append(newPriceText);

            newSaleDiv.append(newImageDiv);
            newSaleDiv.append(newBrandDiv);
            newSaleDiv.append(newModelDiv);
            newSaleDiv.append(newProductionDiv);
            newSaleDiv.append(newPriceDiv);

            newSaleDiv.className = ('announcement');

            mainSalesSection.append(newSaleDiv);

        })
    })
    .catch(function(error) {
        console.log(error)
    })