const mainUserSalesDiv = document.querySelector('#userSalesSection');

const saleInfo = document.querySelector('#annHeading');

axios.get('http://localhost:8080/api/users/' + getUsersId(rawToken) + '/sale-announcements')
    .then(response => {

        const userSales = response.data

        userSales.slice(-3).forEach((sale) => {

            const saleDiv = document.createElement('div');

            const salePrice = sale.price
            const saleImg = sale.imageURL
            const saleCar = sale.car

            if (sale !== null) {
                saleInfo.style.display = "none";
                saleDiv.style.display = "flex";
            }

            const saleBrand = saleCar.brand
            const saleModel = saleCar.model
            const saleMileage = saleCar.carMileage

            const saleImgDiv = document.createElement('div');
            const saleBrandDiv = document.createElement('div');
            const saleModelDiv = document.createElement('div');
            const saleMileageDiv = document.createElement('div');
            const salePriceDiv = document.createElement('div');

            saleImgDiv.className = ('userSaleDiv');
            saleBrandDiv.className = ('userSaleDiv');
            saleModelDiv.className = ('userSaleDiv');
            saleMileageDiv.className = ('userSaleDiv');
            salePriceDiv.className = ('userSaleDiv');

            saleDiv.className = ('userSale');

            saleImgDiv.innerHTML = "Image here";
            saleBrandDiv.innerHTML = saleBrand;
            saleModelDiv.innerHTML = saleModel;
            saleMileageDiv.innerHTML = `${saleMileage} km`;
            salePriceDiv.innerHTML = `${salePrice}$`;

            const deleteBtn = document.createElement('h3');

            const editBtn = document.createElement('h3');

            editBtn.innerHTML = "o";

            deleteBtn.innerHTML = "x";

            deleteBtn.className = ('userSaleDelete');

            editBtn.className = ('userSaleEdit');

            deleteBtn.addEventListener('mouseover', () => {
                deleteBtn.textContent = "delete";
                editBtn.style.right = "4.5em";
            })

            deleteBtn.addEventListener('mouseleave', () => {
                deleteBtn.textContent = "x";
                editBtn.style.right = "2em";
            })

            editBtn.addEventListener('mouseover', () => {
                editBtn.textContent = "edit";
            })

            editBtn.addEventListener('mouseleave', () => {
                editBtn.textContent = "o";
            })

            saleDiv.append(saleImgDiv, saleBrandDiv, saleModelDiv, saleMileageDiv, salePriceDiv, editBtn, deleteBtn);

            mainUserSalesDiv.append(saleDiv)

        })
    })
    .catch(error => {
        console.log(error);
    });