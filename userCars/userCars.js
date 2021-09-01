const firstSale = document.querySelector('#firstSale');

const imgSale = document.querySelector('#imgSale');
const brandSale = document.querySelector('#brandSale');
const modelSale = document.querySelector('#modelSale');
const mileageSale = document.querySelector('#mileageSale');
const priceSale = document.querySelector('#priceSale');

axios.get('http://localhost:8080/api/users/' + getUsersId(rawToken) + '/sale-announcements')
    .then(function(response) {

        const importedCarPrice = response.data[0].price
        const importedCarImg = response.data[0].imageURL
        const importedCar = response.data[0].car

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