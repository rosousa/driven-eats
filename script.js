let food = false;
let drink = false;
let dessert= false;
let food_name;
let drink_name;
let dessert_name;
let food_price;
let drink_price;
let dessert_price;
let total;
let check;


function food_choice(class_name){
    const food_selected = document.querySelector('.food-selected');
    if(food_selected !== null){
        food_selected.classList.remove('food-selected');
    }
    class_name.classList.add('food-selected');
    food_name = class_name.querySelector('div > h6');
    food_price = class_name.querySelector('.food-price');
    food_price = Number(food_price.textContent.replace('R$ ', '').replace(',', '.'));
    food = true;
    checkout();
}

function drink_choice(class_name){
    const drink_selected = document.querySelector('.drink-selected');
    if(drink_selected !== null){
        drink_selected.classList.remove('drink-selected');
    }
    class_name.classList.add('drink-selected');
    drink_name = class_name.querySelector('div > h6');
    drink_price = class_name.querySelector('.drink-price');
    drink_price = Number(drink_price.textContent.replace('R$ ', '').replace(',', '.'));
    drink = true;
    checkout();
}

function dessert_choice(class_name){
    const dessert_selected = document.querySelector('.dessert-selected');
    if(dessert_selected !== null){
        dessert_selected.classList.remove('dessert-selected');
    }
    class_name.classList.add('dessert-selected');
    dessert_name = class_name.querySelector('div > h6');
    dessert_price = class_name.querySelector('.dessert-price');
    dessert_price = Number(dessert_price.textContent.replace('R$ ', '').replace(',', '.'));
    dessert = true;
    checkout();
}

function checkout(){
    const btn = document.querySelector('.order');
    let btn_phrase = document.querySelector('.order > p'); 
    if(food && drink && dessert){
        console.log('Finalizando pedido!');
        total = (food_price + drink_price + dessert_price).toFixed(2);
        btn_phrase.textContent = 'Fechar pedido';
        btn.classList.add('btn-green');
    }
}

function orderScreen (className){
    const screenOrder = document.querySelector('.finish-order');
    const body = document.querySelector('body');
    const items = document.querySelector('.items');
    const prices = document.querySelector('.prices');
    if(className.includes('btn-green')){
        screenOrder.classList.toggle('hidden');
        body.classList.toggle('scroll');
    }
    items.querySelector('div > p:nth-child(1)').innerHTML = food_name.textContent;
    items.querySelector('div > p:nth-child(2)').innerHTML = drink_name.textContent;
    items.querySelector('div > p:nth-child(3)').innerHTML = dessert_name.textContent;
    prices.querySelector('div > p:nth-child(1)').innerHTML = food_price.toFixed(2);
    prices.querySelector('div > p:nth-child(2)').innerHTML = drink_price.toFixed(2);
    prices.querySelector('div > p:nth-child(3)').innerHTML = dessert_price.toFixed(2);
    prices.querySelector('div > h6').innerHTML = total;
}

function cancelOrder(){
    const screenOrder = document.querySelector('.finish-order');
    const body = document.querySelector('body');
    screenOrder.classList.toggle('hidden');
    body.classList.toggle('scroll');
}

function sendOrder(){
    const name = prompt('Qual o seu nome?');
    const address = prompt('Qual o seu endereço?');
    const number = 5121989065765;
    const message = encodeURIComponent(`Olá, gostaria de fazer o pedido:
    - Prato: ${food_name.textContent}
    - Bebida: ${drink_name.textContent}
    - Sobremesa: ${dessert_name.textContent}
    Total: R$ ${total}
    
    Nome: ${name}
    Endereço: ${address}`);
    window.open(`https://wa.me/${number}?text=${message}`, '_blank');
}