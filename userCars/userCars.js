const firstSale = document.querySelector('#firstSale');
const scdSale = document.querySelector('#scdSale');
const thirdSale = document.querySelector('#thirdSale');

const saleInfo = document.querySelector('#annHeading');

//first sale
const imgSale = document.querySelector('#imgSale');
const brandSale = document.querySelector('#brandSale');
const modelSale = document.querySelector('#modelSale');
const mileageSale = document.querySelector('#mileageSale');
const priceSale = document.querySelector('#priceSale');

//scd sale
const scdImgSale = document.querySelector('#scdImgSale');
const scdBrandSale = document.querySelector('#scdBrandSale');
const scdModelSale = document.querySelector('#scdModelSale');
const scdMileageSale = document.querySelector('#scdMileageSale');
const scdPriceSale = document.querySelector('#scdPriceSale');

//third sale
const thirdImgSale = document.querySelector('#thirdImgSale');
const thirdBrandSale = document.querySelector('#thirdBrandSale');
const thirdModelSale = document.querySelector('#thirdModelSale');
const thirdMileageSale = document.querySelector('#thirdMileageSale');
const thirdPriceSale = document.querySelector('#thirdPriceSale');

axios.get('http://localhost:8080/api/users/' + getUsersId(rawToken) + '/sale-announcements')
    .then(function(response) {

        const importedCarPrice = response.data[0].price
        const importedCarImg = response.data[0].imageURL
        const importedCar = response.data[0].car

        if (response.data[0] !== null) {
            saleInfo.style.display = "none";
            firstSale.style.display = "flex";
        }

        const importedBrand = importedCar.brand;
        const importedModel = importedCar.model;
        const importedMileage = importedCar.carMileage;

        imgSale.innerHTML = "IMAGE HERE";
        brandSale.innerHTML = importedBrand;
        modelSale.innerHTML = importedModel;
        mileageSale.innerHTML = `${importedMileage} km`;
        priceSale.innerHTML = `${importedCarPrice} $`;
    })
    .catch(function(error) {
        console.log(error);
    });

axios.get('http://localhost:8080/api/users/' + getUsersId(rawToken) + '/sale-announcements')
    .then(function(response) {

        const scdImportedCarPrice = response.data[1].price
        const scdImportedCarImg = response.data[1].imageURL
        const scdImportedCar = response.data[1].car

        if (response.data[1] !== null) {
            saleInfo.style.display = "none";
            scdSale.style.display = "flex";
        }

        const scdImportedBrand = scdImportedCar.brand;
        const scdImportedModel = scdImportedCar.model;
        const scdImportedMileage = scdImportedCar.carMileage;

        scdImgSale.innerHTML = "IMAGE HERE";
        scdBrandSale.innerHTML = scdImportedBrand;
        scdModelSale.innerHTML = scdImportedModel;
        scdMileageSale.innerHTML = `${scdImportedMileage} km`;
        scdPriceSale.innerHTML = `${scdImportedCarPrice} $`;
    })
    .catch(function(error) {
        console.log(error);
    });

axios.get('http://localhost:8080/api/users/' + getUsersId(rawToken) + '/sale-announcements')
    .then(function(response) {

        const thirdImportedCarPrice = response.data[2].price
        const thirdImportedCarImg = response.data[2].imageURL
        const thirdImportedCar = response.data[2].car

        if (response.data[2] !== null) {
            saleInfo.style.display = "none";
            thirdSale.style.display = "flex";
        }

        const thirdImportedBrand = thirdImportedCar.brand;
        const thirdImportedModel = thirdImportedCar.model;
        const thirdImportedMileage = thirdImportedCar.carMileage;

        thirdImgSale.innerHTML = "IMAGE HERE";
        thirdBrandSale.innerHTML = thirdImportedBrand;
        thirdModelSale.innerHTML = thirdImportedModel;
        thirdMileageSale.innerHTML = `${thirdImportedMileage} km`;
        thirdPriceSale.innerHTML = `${thirdImportedCarPrice} $`;
    })
    .catch(function(error) {
        console.log(error);
    });