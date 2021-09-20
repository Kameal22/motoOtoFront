const mainDiv = document.querySelector('#scdSection');

//Import cars and append them:

axios.get(`http://localhost:8080/api/sale-announcements?brand=bmw`)
    .then(function(response) {
        const importedBmwCars = response.data

        importedBmwCars.forEach((bmwCar) => {

            //Creates two bmw cars div - main div
            const bmwAnnouncementsDiv = document.createElement('div');

            //Child of main div with photo
            const bmwPhotosDiv = document.createElement('div');

            //Actual photo inside photo's div
            const bmwPhotos = document.createElement('img');
            //Photo's source
            bmwPhotos.src = bmwCar.imageURL;

            //Child of main div with announcement descriptions
            const bmwDescriptions = document.createElement('div');

            //Two description smaller divs
            const divBMV = document.createElement('div');
            const divYMF = document.createElement('div');

            //Smaller description divs children
            const firstB = document.createElement('h2');
            const firstM = document.createElement('h2');
            const firstV = document.createElement('h2');
            firstB.innerHTML = bmwCar.car.brand;
            firstM.innerHTML = bmwCar.car.model;
            firstV.innerHTML = bmwCar.car.generation;
            if (bmwCar.car.generation === null) {
                firstV.innerHTML = "no generation added"
            }
            const firstY = document.createElement('h2');
            const firstCM = document.createElement('h2');
            const firstF = document.createElement('h2');
            firstY.innerHTML = bmwCar.car.productionYear;
            firstCM.innerHTML = bmwCar.car.carMileage;
            firstF.innerHTML = bmwCar.car.fuelType;

            const bmwPrices = document.createElement('h2');
            bmwPrices.innerHTML = `${bmwCar.price} $`;

            //Adding classes
            bmwAnnouncementsDiv.className = ('announcementsMainDiv');
            bmwPhotos.className = ('announcementsPhotoClass');
            divBMV.className = ('saleDescriptions')
            divYMF.className = ('saleDescriptions')

            //Appending
            divYMF.append(firstY, firstCM, firstF)
            divBMV.append(firstB, firstM, firstV)
            bmwDescriptions.append(divBMV, divYMF, bmwPrices);
            bmwPhotosDiv.append(bmwPhotos);
            bmwAnnouncementsDiv.append(bmwPhotosDiv);
            bmwAnnouncementsDiv.append(bmwDescriptions);
            mainDiv.append(bmwAnnouncementsDiv);

        })
    })
    .catch(function(error) {
        console.log(error);
    });

//A U D I

axios.get(`http://localhost:8080/api/sale-announcements?brand=audi`)
    .then(function(response) {
        const importedAudiCars = response.data

        importedAudiCars.forEach((audiCar) => {

            //Creates two bmw cars div - main div
            const audiAnnouncementsDiv = document.createElement('div');

            //Child of main div with photo
            const audiPhotosDiv = document.createElement('div');

            //Actual photo inside photo's div
            const audiPhotos = document.createElement('img');
            //Photo's source
            audiPhotos.src = audiCar.imageURL;

            //Child of main div with announcement descriptions
            const audiDescriptions = document.createElement('div');

            //Two description smaller divs
            const divBMV = document.createElement('div');
            const divYMF = document.createElement('div');

            //Smaller description divs children
            const firstB = document.createElement('h2');
            const firstM = document.createElement('h2');
            const firstV = document.createElement('h2');
            firstB.innerHTML = audiCar.car.brand;
            firstM.innerHTML = audiCar.car.model;
            firstV.innerHTML = audiCar.car.generation;
            if (audiCar.car.generation === null) {
                firstV.innerHTML = "no generation added"
            }
            const firstY = document.createElement('h2');
            const firstCM = document.createElement('h2');
            const firstF = document.createElement('h2');
            firstY.innerHTML = audiCar.car.productionYear;
            firstCM.innerHTML = audiCar.car.carMileage;
            firstF.innerHTML = audiCar.car.fuelType;

            const audiPrices = document.createElement('h2');
            audiPrices.innerHTML = `${audiCar.price} $`;

            //Adding classes
            audiAnnouncementsDiv.className = ('announcementsMainDiv');
            audiPhotos.className = ('announcementsPhotoClass');
            divBMV.className = ('saleDescriptions')
            divYMF.className = ('saleDescriptions')

            //Appending
            divYMF.append(firstY, firstCM, firstF)
            divBMV.append(firstB, firstM, firstV)
            audiDescriptions.append(divBMV, divYMF, audiPrices);
            audiPhotosDiv.append(audiPhotos);
            audiAnnouncementsDiv.append(audiPhotosDiv);
            audiAnnouncementsDiv.append(audiDescriptions);
            mainDiv.append(audiAnnouncementsDiv);

        })
    })
    .catch(function(error) {
        console.log(error);
    });