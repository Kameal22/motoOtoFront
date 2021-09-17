const mainDiv = document.querySelector('#scdSection');

//Import cars and append them:

axios.get(`http://localhost:8080/api/sale-announcements?brand=bmw`)
    .then(function(response) {
        const importedBmwCars = response.data

        importedBmwCars.forEach((bmwCar) => {

            //main div
            const firstCarLand = document.createElement('div'); // has classes

            //Child of main div
            const firstCarPhoto = document.createElement('div'); //has a class

            //And it's children
            const firstPhoto = document.createElement('img'); //has prototype class
            firstPhoto.src = bmwCar.imageURL;

            //Child of main div
            const firstCarDescription = document.createElement('div');

            //BMW div
            const divBMV = document.createElement('div');
            const divYMF = document.createElement('div');

            //And it's children
            const firstB = document.createElement('h2');
            const firstM = document.createElement('h2');
            const firstV = document.createElement('h2');
            firstB.innerHTML = bmwCar.car.brand;
            firstM.innerHTML = bmwCar.car.model;
            firstV.innerHTML = bmwCar.car.generation;

            const firstY = document.createElement('h2');
            const firstCM = document.createElement('h2');
            const firstF = document.createElement('h2');
            firstY.innerHTML = bmwCar.car.productionYear;
            firstCM.innerHTML = bmwCar.car.carMileage;
            firstF.innerHTML = bmwCar.car.fuelType;

            const firstPrice = document.createElement('h2');
            firstPrice.innerHTML = `${bmwCar.price} $`;

            //Adding classes
            divBMV.className = ('bmvClass')
            divYMF.className = ('ymfClass')
            firstB.classList.add('landSingleDescription')
            firstM.classList.add('landSingleDescription')
            firstV.classList.add('landSingleDescription')
            firstCarLand.classList.add('landDivs');
            firstCarPhoto.classList.add('landDivs', 'landMainPhoto');
            firstPhoto.className = ('landingImgs');
            firstCarDescription.classList.add('landDivs', 'landMainDescription');

            //Appending
            divYMF.append(firstY, firstCM, firstF)
            divBMV.append(firstB, firstM, firstV)
            firstCarDescription.append(divBMV, divYMF, firstPrice);
            firstCarPhoto.append(firstPhoto);
            firstCarLand.append(firstCarPhoto);
            firstCarLand.append(firstCarDescription);
            mainDiv.append(firstCarLand);

            console.log(firstV)

        })
    })
    .catch(function(error) {
        console.log(error);
    });

axios.get(`http://localhost:8080/api/sale-announcements?brand=audi`)
    .then(function(response) {
        const importedBmwCars = response.data

        importedBmwCars.forEach((audiCar) => {

            //main div
            const firstCarLand = document.createElement('div'); // has classes

            //Child of main div
            const firstCarPhoto = document.createElement('div'); //has a class

            //And it's children
            const firstPhoto = document.createElement('img'); //has prototype class
            firstPhoto.src = audiCar.imageURL;

            //Child of main div
            const firstCarDescription = document.createElement('div');

            //And it's children
            const firstBMV = document.createElement('h2');
            firstBMV.innerHTML = `${audiCar.car.brand}, ${audiCar.car.model}, ${audiCar.car.generation}`;

            const firstYMF = document.createElement('h2');
            firstYMF.innerHTML = `${audiCar.car.productionYear}, ${audiCar.car.carMileage}, ${audiCar.car.fuelType}`;

            const firstPrice = document.createElement('h2');
            firstPrice.innerHTML = `${audiCar.price} $`;

            //Adding classes
            firstCarLand.classList.add('landDivs');
            firstCarPhoto.classList.add('landDivs', 'landMainPhoto');
            firstPhoto.className = ('landingImgs');
            firstCarDescription.classList.add('landDivs', 'landMainDescription');

            //Appending
            firstCarDescription.append(firstBMV, firstYMF, firstPrice);
            firstCarPhoto.append(firstPhoto);
            firstCarLand.append(firstCarPhoto);
            firstCarLand.append(firstCarDescription);
            mainDiv.append(firstCarLand);

        })
    })
    .catch(function(error) {
        console.log(error);
    });