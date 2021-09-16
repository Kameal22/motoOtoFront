const mainDiv = document.querySelector('#scdSection');

//Import cars and append them:

axios.get(`http://localhost:8080/api/sale-announcements?brand=bmw`)
    .then(function(response) {
        const importedBmwCars = response.data

        importedBmwCars.forEach((bmwCar) => {
            console.log(bmwCar.car)
            console.log(bmwCar.imageURL)
            console.log(bmwCar.price)

            //main div
            const firstCarLand = document.createElement('div');

            //Child of main div
            const firstCarPhoto = document.createElement('div');

            //And it's children
            const firstPhoto = document.createElement('img');
            firstPhoto.src = bmwCar.imageURL;

            //Child of main div
            const firstCarDescription = document.createElement('div');

            //And it's children
            const firstBMV = document.createElement('h2');
            firstBMV.innerHTML = `${bmwCar.car.brand}, ${bmwCar.car.model}, ${bmwCar.car.generation}`;

            const firstYMF = document.createElement('h2');
            firstYMF.innerHTML = `${bmwCar.car.productionYear}, ${bmwCar.car.carMileage}, ${bmwCar.car.fuelType}`;

            const firstPrice = document.createElement('h2');
            firstPrice.innerHTML = `${bmwCar.price} $`;

            //Adding classes

            //Appending
            firstCarDescription.append(firstBMV, firstYMF, firstPrice);
            firstCarPhoto.append(firstPhoto);
            firstCarLand.append(firstCarPhoto);
            mainDiv.append(firstCarLand);


        })
    })
    .catch(function(error) {
        console.log(error);
    });