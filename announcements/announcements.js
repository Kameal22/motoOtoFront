const mainSalesSection = document.querySelector('#mainSalesSection');

const brandsSearchedFor = JSON.parse(window.localStorage.getItem('brands'));

//If user only searched using BRAND then below is what happend: 

brandsSearchedFor.forEach((brand) => {

    const imageName = brand.imageURL
    const brandName = brand.car.brand
    const modelName = brand.car.model
    const productionName = brand.car.productionYear
    const priceName = brand.price

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

});

//Ends here