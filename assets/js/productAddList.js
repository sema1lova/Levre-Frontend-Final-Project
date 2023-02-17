let myProductLists;

fetch('./assets/js/product.json')
.then((response) => response.json())
.then((result) => {

    myProductLists = result;

    result.forEach((product, index) => {

        let mainCard = document.createElement('div');
        mainCard.classList.add('col-lg-4');
        mainCard.classList.add('col-6');
        mainCard.classList.add('col-md-6');

        let shopBox = document.createElement('div');
        shopBox.classList.add('shop-box');
        shopBox.setAttribute('id',product.id);

        //Image Box
        let productDetailImg = document.createElement('a');
        productDetailImg.setAttribute('href','product.html');

        let shopImageDiv = document.createElement('div');
        shopImageDiv.classList.add('shop-image');

        let shopImage = document.createElement('img');
        shopImage.setAttribute('src',product.img);

        shopImageDiv.appendChild(shopImage);
        productDetailImg.appendChild(shopImageDiv);
        shopBox.appendChild(productDetailImg)

        //Content Hazirdir
        let shopContent = document.createElement('div');
        shopContent.classList.add('shop-content');

        let porductName = document.createElement('p');
        porductName.classList.add('objectName')
        porductName.textContent = product.name;

        let productPrice = document.createElement('span')
        productPrice.classList.add('objectPrice')
        productPrice.textContent = product.price;

        shopContent.appendChild(porductName);
        shopContent.appendChild(productPrice);
        shopBox.appendChild(shopContent);

        //Icon Box
        let icons = document.createElement('div');
        icons.classList.add('shop-icons-overlay');

        let iconShop = document.createElement('i');
        iconShop.setAttribute('id', index)
        iconShop.classList.add('fa-solid')
        iconShop.classList.add('fa-bag-shopping')
        iconShop.setAttribute('onclick',`addToBasket(${product.id})`);

        let iconView = document.createElement('i');
        iconView.classList.add('fa-regular');
        iconView.classList.add('fa-eye');

        let iconLike = document.createElement('i');
        iconLike.classList.add('fa-regular');
        iconLike.classList.add('fa-heart');

        icons.appendChild(iconShop)
        icons.appendChild(iconView)
        icons.appendChild(iconLike)

        shopBox.appendChild(icons)

        mainCard.appendChild(shopBox)

        document.querySelector('.shop-right').appendChild(mainCard)
    });

})
.catch((error) => {console.error('Error:', error)});

function addToBasket(id) {
    let myBasket = localStorage.getItem('BaskeArray');
    if(myBasket?.length !== 0 && myBasket){
        myBasket = JSON.parse(myBasket);
    }else{
        myBasket = [];
    }

    if(!myBasket.length) {
        myBasket.push({...myProductLists.find(i => i.id === id), count: 1});
        localStorage.setItem("BaskeArray",JSON.stringify(myBasket));
    }
    else {
        let findedElement = myBasket.find(i => i.id === id);

        if(!findedElement) {
            myBasket.push({...myProductLists.find(i => i.id === id), count: 1});
        }else{
            findedElement.count += 1;
        }
        localStorage.setItem("BaskeArray",JSON.stringify(myBasket))
    }
    basketCount();
}

basketCount();

function basketCount() {
    let myBasket = localStorage.getItem('BaskeArray');
    if(myBasket?.length !== 0 && myBasket){
        myBasket = JSON.parse(myBasket);

    }else{
        myBasket = [];
    }
    document.querySelector('.cart-count').textContent = myBasket.length
}