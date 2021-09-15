const mainSalesSection = document.querySelector('#mainSalesSection');

let params = (new URL(document.location)).searchParams;
let brand = params.get('brand');
let model = params.get('model');
let generation = params.get('generation');
let fuel = params.get('fuel');
let capacity = params.get('capacity');

axios.get(`http://localhost:8080/api/sale-announcements?brand=${brand}`)
    .then(function(response) {
        console.log(response)
    })
    .catch(function(error) {
        console.log(error)
    })

// const imageName = brand.imageURL
// const brandName = brand.car.brand
// const modelName = brand.car.model
// const productionName = brand.car.productionYear
// const priceName = brand.price

// // main div
// const newSaleDiv = document.createElement('div');

// // children of main div
// const newImageDiv = document.createElement('div');
// const newBrandDiv = document.createElement('div');
// const newModelDiv = document.createElement('div');
// const newProductionDiv = document.createElement('div');
// const newPriceDiv = document.createElement('div');

// //Inside of main div's child
// const newImageImage = document.createElement('img');
// const newBrandText = document.createElement('h2');
// const newModelText = document.createElement('h2');
// const newProductionText = document.createElement('h2');
// const newPriceText = document.createElement('h2');

// newImageImage.src = imageName;
// newBrandText.innerHTML = brandName;
// newModelText.innerHTML = modelName;
// newProductionText.innerHTML = productionName;
// newPriceText.innerHTML = `${priceName} $`;

// newImageImage.className = ('saleImage');

// newImageDiv.append(newImageImage);
// newBrandDiv.append(newBrandText);
// newModelDiv.append(newModelText);
// newProductionDiv.append(newProductionText);
// newPriceDiv.append(newPriceText);

// newSaleDiv.append(newImageDiv);
// newSaleDiv.append(newBrandDiv);
// newSaleDiv.append(newModelDiv);
// newSaleDiv.append(newProductionDiv);
// newSaleDiv.append(newPriceDiv);

// newSaleDiv.className = ('announcement');

// mainSalesSection.append(newSaleDiv);