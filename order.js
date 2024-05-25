let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'WHITE MOCHA ESPRESSO',
        image: '1.webp',
        price: 135
    },
    {
        id: 2,
        name: 'SPANISH LATTE',
        image: '2.webp',
        price: 185
    },
    {
        id: 3,
        name: 'DARK MOCHA',
        image: '3.webp',
        price: 155
    },
    {
        id: 4,
        name: 'SALTED CARAMEL',
        image: '4.webp',
        price: 190
    },
    {
        id: 5,
        name: 'BLACK COFFEE',
        image: '5.webp',
        price: 99
    },
    {
        id: 6,
        name: 'MATCHA LATTE',
        image: '6.jpg',
        price: 125
    },
    {
        id: 7,
        name: 'CARAMEL MACCHIATO',
        image: '7.webp',
        price: 115
    },
    {
        id: 8,
        name: 'MILO DINOSAUR',
        image: '8.jpg',
        price: 110
    },
    {
        id: 9,
        name: 'BELGIAN WAFFLES',
        image: '9.jpg',
        price: 100
    },
    {
        id: 10,
        name: 'CINNAMON BUNS',
        image: '10.jpg',
        price: 110
    },
    {
        id: 11,
        name: 'DOUBLE CHOCO BROWNIES',
        image: '11.jpg',
        price: 110
    },
    {
        id: 12,
        name: 'CINNAMON COFFEE CAKE',
        image: '12.jpg',
        price: 110
    },
    {
        id: 13,
        name: 'ICED LEMON LOAF CAKE',
        image: '13.jpg',
        price: 180
    },
    {
        id: 14,
        name: 'BLUEBERRY MUFFINS',
        image: '14.jpg',
        price: 210
    },
    {
        id: 15,
        name: 'HAM AND SWISS CROSSAINT',
        image: '15.jpg',
        price: 250
    },
    {
        id: 16,
        name: 'VANILLA BEAN CUSTARD DANISH',
        image: '16.jpg',
        price: 250
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">₱${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">ADD TO CART</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){

        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
