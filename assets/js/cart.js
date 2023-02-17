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

let myBasket = localStorage.getItem('BaskeArray');
    
if(myBasket?.length !== 0 && myBasket){
    myBasket = JSON.parse(myBasket);

}else{
    myBasket = [];
}
cartAdd(myBasket)

function cartAdd(myBasket) {
    document.querySelector('.cart-center').innerHTML=''
    if(myBasket.length > 0){
        myBasket.forEach(basketElement => {
    
                if(basketElement != null){
                    let ads = `
                    <div style="user-select:none;" id="${basketElement.id}" class=" col-lg-7 d-flex justify-content-center align-items-center mt-3 mb-3">
                        <div class="col-lg-2">
                            <div class="productimg">
                                <img width="50%" src="${basketElement.img}" alt="">
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="productname">
                                <h5>Facial Cleanser</h5>
                            </div>
                        </div>    
                        <div class="col-lg-2">
                            <div class="productprice">
                                <h5 id="price">$${basketElement.price}</h5>
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div class="quanity">
                                <span style="cursor:pointer;user-select:none;" onclick="countMinus(this)" id="minus"><i class="fa-solid fa-minus"></i></span>
                                <span style="user-select:none;" id="count">${basketElement.count}</span>
                                <span style="cursor:pointer;user-select:none;" onclick="countPlus(this)" id="plus"><i class="fa-solid fa-plus"></i></span>
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div class="subtotalproduct">
                                <h5 id="subtotal">$${basketElement.count * basketElement.price}</h5>
                            </div>
                        </div>
                        <div class="col-lg-1">
                            <div onclick="removeCart(this)" class="removeicon">
                                <i id="removeicon(this)" class="fa-solid fa-x"></i>
                            </div>
                        </div>
                </div>
            `
            document.querySelector('.cart-center').innerHTML+=ads;
            }
        });
    }else{
        document.querySelector('.cart-center').textContent = "Empty Card"
    }
}

function countMinus(dsada) {
    let myBasket = localStorage.getItem('BaskeArray');
    if(myBasket?.length !== 0 && myBasket){
        myBasket = JSON.parse(myBasket);
    }else{
        myBasket = [];
    }
    
    let id = dsada.parentElement.parentElement.parentElement.getAttribute('id');

    myBasket.find(i => {
        if(i.id == id){
            if(i.count > 1){
                i.count--;
            }
        }
    });

    localStorage.setItem("BaskeArray",JSON.stringify(myBasket))
    myBasket = localStorage.getItem('BaskeArray');
    if(myBasket?.length !== 0 && myBasket){
        myBasket = JSON.parse(myBasket);

    }else{
        myBasket = [];
    }
    cartAdd(myBasket);
}

function countPlus(dsada) {

    let myBasket = localStorage.getItem('BaskeArray');
            
    if(myBasket?.length !== 0 && myBasket){
        myBasket = JSON.parse(myBasket);

    }else{
        myBasket = [];
    }
    let id = dsada.parentElement.parentElement.parentElement.getAttribute('id');

    myBasket.find(i => {
        if(i.id == id){
            i.count++;
        }
    });

    localStorage.setItem("BaskeArray",JSON.stringify(myBasket))

    myBasket = localStorage.getItem('BaskeArray');

    if(myBasket?.length !== 0 && myBasket){
        myBasket = JSON.parse(myBasket);

    }else{
        myBasket = [];
    }

    cartAdd(myBasket);
}


function removeCart(dsada) {

    let myBasket = localStorage.getItem('BaskeArray');

            
    if(myBasket?.length !== 0 && myBasket){
        myBasket = JSON.parse(myBasket);

    }else{
        myBasket = [];
    }
    
    let id = dsada.parentElement.parentElement.getAttribute('id');

    myBasket.forEach((element,index) => {
        if(element.id == id){
            myBasket.splice(index,1)
            console.log(myBasket);
        }
    });

    localStorage.setItem("BaskeArray",JSON.stringify(myBasket))
    myBasket = localStorage.getItem('BaskeArray');

    if(myBasket?.length !== 0 && myBasket){
        myBasket = JSON.parse(myBasket);
    }else{
        myBasket = [];
    }

    cartAdd(myBasket);
}