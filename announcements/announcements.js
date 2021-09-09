const mainSalesSection = document.querySelector('#mainSalesSection');

const brandsSearchedFor = JSON.parse(window.localStorage.getItem('brands'));

brandsSearchedFor.forEach((brand) => {

    const brandName = brand.car.brand

    // main div
    const newSaleDiv = document.createElement('div');

    // children of main div
    const newBrandDiv = document.createElement('div');

    //Inside of main div's child
    const newBrandText = document.createElement('h2');

    newBrandText.innerHTML = brandName;

    newBrandDiv.append(newBrandText);

    newSaleDiv.append(newBrandDiv);

    newSaleDiv.className = ('announcement');

    mainSalesSection.append(newSaleDiv);

});