const mainDiv = document.querySelector('#scdSection');

const salesAppendingLimit = 4;

//RANDOMIZE appended cars

axios.get(`http://localhost:8080/api/sale-announcements`)
    .then(function(response) {
        const salesAmmount = response.data.length

        const randomSaleNumber = Math.floor(Math.random() * salesAmmount) + 1

        const importedSales = response.data

        console.log(importedSales[randomSaleNumber])

        importedSales.slice(-salesAppendingLimit).forEach((sale) => {

            const mainAnnouncementsDiv = document.createElement('div');

            const mainPhotosDiv = document.createElement('div');

            const mainPhotos = document.createElement('img');
            mainPhotos.src = sale.imageURL;

            const mainDescriptions = document.createElement('div');

            const divBMYF = document.createElement('div');

            const firstB = document.createElement('h2');
            const firstM = document.createElement('h2');
            const firstY = document.createElement('h2');
            const firstF = document.createElement('h2');
            firstB.innerHTML = sale.car.brand;
            firstM.innerHTML = sale.car.model;
            firstY.innerHTML = sale.car.productionYear;
            firstF.innerHTML = sale.car.fuelType.toLowerCase();

            const mainPrices = document.createElement('h2');
            mainPrices.innerHTML = `${sale.price} $`;

            mainAnnouncementsDiv.className = ('announcementsMainDiv');
            mainPhotos.className = ('announcementsPhotoClass');
            divBMYF.className = ('saleDescriptions');
            mainPrices.className = ('prices');

            divBMYF.append(firstB, firstM, firstY, firstF);
            mainDescriptions.append(divBMYF, mainPrices);
            mainPhotosDiv.append(mainPhotos);
            mainAnnouncementsDiv.append(mainPhotosDiv);
            mainAnnouncementsDiv.append(mainDescriptions);
            mainDiv.append(mainAnnouncementsDiv);

        })
    })
    .catch(error => {
        console.log(error);
    });