const mainDiv = document.querySelector('#scdSection');

//Import cars and append them:

axios.get(`http://localhost:8080/api/sale-announcements?brand=bmw`)
    .then(function(response) {
        const importedBmwCars = response.data

        console.log(importedBmwCars);

        importedBmwCars.slice(-2).forEach((bmwCar) => {

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
            const divBMYF = document.createElement('div');

            //Smaller description divs children
            const firstB = document.createElement('h2');
            const firstM = document.createElement('h2');
            const firstY = document.createElement('h2');
            const firstF = document.createElement('h2');
            firstB.innerHTML = bmwCar.car.brand;
            firstM.innerHTML = bmwCar.car.model;
            firstY.innerHTML = bmwCar.car.productionYear;
            firstF.innerHTML = bmwCar.car.fuelType.toLowerCase();

            const bmwPrices = document.createElement('h2');
            bmwPrices.innerHTML = `${bmwCar.price} $`;

            //Adding classes
            bmwAnnouncementsDiv.className = ('announcementsMainDiv');
            bmwPhotos.className = ('announcementsPhotoClass');
            divBMYF.className = ('saleDescriptions');
            bmwPrices.className = ('prices');

            //Appending
            divBMYF.append(firstB, firstM, firstY, firstF);
            bmwDescriptions.append(divBMYF, bmwPrices);
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

        importedAudiCars.slice(-2).forEach((audiCar) => {

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
            const divBMYF = document.createElement('div');

            //Smaller description divs children
            const firstB = document.createElement('h2');
            const firstM = document.createElement('h2');
            const firstY = document.createElement('h2');
            const firstF = document.createElement('h2');
            firstB.innerHTML = audiCar.car.brand;
            firstM.innerHTML = audiCar.car.model;
            firstY.innerHTML = audiCar.car.productionYear;
            firstF.innerHTML = audiCar.car.fuelType.toLowerCase();;

            const audiPrices = document.createElement('h2');
            audiPrices.innerHTML = `${audiCar.price} $`;

            //Adding classes
            audiAnnouncementsDiv.className = ('announcementsMainDiv');
            audiPhotos.className = ('announcementsPhotoClass');
            divBMYF.className = ('saleDescriptions');
            audiPrices.className = ('prices');

            //Appending
            divBMYF.append(firstB, firstM, firstY, firstF);
            audiDescriptions.append(divBMYF, audiPrices);
            audiPhotosDiv.append(audiPhotos);
            audiAnnouncementsDiv.append(audiPhotosDiv);
            audiAnnouncementsDiv.append(audiDescriptions);
            mainDiv.append(audiAnnouncementsDiv);

        })
    })
    .catch(function(error) {
        console.log(error);
    });