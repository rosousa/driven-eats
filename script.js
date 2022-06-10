let food = false;
let drink = false;
let dessert= false;
let food_price;
let drink_price;
let dessert_price;
let check;

function food_choice(class_name){
    const first_food = document.querySelector('.first-food');
    const second_food = document.querySelector('.second-food');
    const third_food = document.querySelector('.third-food');

    if(class_name.includes('first-food')){
        first_food.classList.add('selected');
        second_food.classList.remove('selected');
        third_food.classList.remove('selected');
        first_food.querySelector('img.check').classList.remove('check-remove');
        second_food.querySelector('img.check').classList.add('check-remove');
        third_food.querySelector('img.check').classList.add('check-remove');
        food_price = document.querySelector('.first-food .food-price').textContent;
        food_price = food_price.replace('R$ ', '').replace(',', '.');
        food_price = parseFloat(food_price);
    } else if (class_name.includes('second-food')){
        second_food.classList.add('selected');
        first_food.classList.remove('selected');
        third_food.classList.remove('selected');
        second_food.querySelector('img.check').classList.remove('check-remove');
        first_food.querySelector('img.check').classList.add('check-remove');
        third_food.querySelector('img.check').classList.add('check-remove');
        food_price = document.querySelector('.second-food .food-price').textContent;
        food_price = food_price.replace('R$ ', '').replace(',', '.');
        food_price = parseFloat(food_price);
    } else if (class_name.includes('third-food')){
        third_food.classList.add('selected');
        first_food.classList.remove('selected');
        second_food.classList.remove('selected');
        third_food.querySelector('img.check').classList.remove('check-remove');
        first_food.querySelector('img.check').classList.add('check-remove');
        second_food.querySelector('img.check').classList.add('check-remove');
        food_price = document.querySelector('.third-food .food-price').textContent;
        food_price = food_price.replace('R$ ', '').replace(',', '.');
        food_price = parseFloat(food_price);
    }
    food = true;
    checkout();
}

function drink_choice(class_name){
    const first_drink = document.querySelector('.first-drink');
    const second_drink = document.querySelector('.second-drink');
    const third_drink = document.querySelector('.third-drink');

    if(class_name.includes('first-drink')){
        first_drink.classList.add('selected');
        second_drink.classList.remove('selected');
        third_drink.classList.remove('selected');
        first_drink.querySelector('img.check').classList.remove('check-remove');
        second_drink.querySelector('img.check').classList.add('check-remove');
        third_drink.querySelector('img.check').classList.add('check-remove');
        drink_price = document.querySelector('.first-drink .drink-price').textContent;
        drink_price = drink_price.replace('R$ ', '').replace(',', '.');
        drink_price = parseFloat(drink_price);
    } else if (class_name.includes('second-drink')){
        second_drink.classList.add('selected');
        first_drink.classList.remove('selected');
        third_drink.classList.remove('selected');
        second_drink.querySelector('img.check').classList.remove('check-remove');
        first_drink.querySelector('img.check').classList.add('check-remove');
        third_drink.querySelector('img.check').classList.add('check-remove');
        drink_price = document.querySelector('.second-drink .drink-price').textContent;
        drink_price = drink_price.replace('R$ ', '').replace(',', '.');
        drink_price = parseFloat(drink_price);
    } else if (class_name.includes('third-drink')){
        third_drink.classList.add('selected');
        first_drink.classList.remove('selected');
        second_drink.classList.remove('selected');
        third_drink.querySelector('img.check').classList.remove('check-remove');
        first_drink.querySelector('img.check').classList.add('check-remove');
        second_drink.querySelector('img.check').classList.add('check-remove');
        drink_price = document.querySelector('.third-drink .drink-price').textContent;
        drink_price = drink_price.replace('R$ ', '').replace(',', '.');
        drink_price = parseFloat(drink_price);
    }
    drink = true;
    checkout();
}

function dessert_choice(class_name){
    const first_dessert = document.querySelector('.first-dessert');
    const second_dessert = document.querySelector('.second-dessert');
    const third_dessert = document.querySelector('.third-dessert');

    if(class_name.includes('first-dessert')){
        first_dessert.classList.add('selected');
        second_dessert.classList.remove('selected');
        third_dessert.classList.remove('selected');
        first_dessert.querySelector('img.check').classList.remove('check-remove');
        second_dessert.querySelector('img.check').classList.add('check-remove');
        third_dessert.querySelector('img.check').classList.add('check-remove');
        dessert_price = document.querySelector('.first-dessert .dessert-price').textContent;
        dessert_price = dessert_price.replace('R$ ', '').replace(',', '.');
        dessert_price = parseFloat(dessert_price);
    } else if (class_name.includes('second-dessert')){
        second_dessert.classList.add('selected');
        first_dessert.classList.remove('selected');
        third_dessert.classList.remove('selected');
        second_dessert.querySelector('img.check').classList.remove('check-remove');
        first_dessert.querySelector('img.check').classList.add('check-remove');
        third_dessert.querySelector('img.check').classList.add('check-remove');
        dessert_price = document.querySelector('.second-dessert .dessert-price').textContent;
        dessert_price = dessert_price.replace('R$ ', '').replace(',', '.');
        dessert_price = parseFloat(dessert_price);
    } else if (class_name.includes('third-dessert')){
        third_dessert.classList.add('selected');
        first_dessert.classList.remove('selected');
        second_dessert.classList.remove('selected');
        third_dessert.querySelector('img.check').classList.remove('check-remove');
        first_dessert.querySelector('img.check').classList.add('check-remove');
        second_dessert.querySelector('img.check').classList.add('check-remove');
        dessert_price = document.querySelector('.third-dessert .dessert-price').textContent;
        dessert_price = dessert_price.replace('R$ ', '').replace(',', '.');
        dessert_price = parseFloat(dessert_price);
    }
    dessert = true;
    checkout();
}

function checkout(){
    const btn = document.querySelector('.order');
    let btn_phrase = document.querySelector('.order > p'); 
    if(food && drink && dessert){
        console.log('Finalizando pedido!');
        console.log((food_price + drink_price + dessert_price).toFixed(2));
        btn_phrase.textContent = 'Fechar pedido';
        btn.classList.add('btn-green');
    }
}

function orderScreen (className){
    const screenOrder = document.querySelector('.finish-order');
    const body = document.querySelector('body');
    if(className.includes('btn-green')){
        screenOrder.classList.toggle('hidden');
        body.classList.toggle('scroll');
    }
}

function cancelOrder(){
    const screenOrder = document.querySelector('.finish-order');
    const body = document.querySelector('body');
    screenOrder.classList.toggle('hidden');
    body.classList.toggle('scroll');
}

function sendOrder(){
    const name = prompt('Qual o seu nome?');
    const address = prompt('Qual o seu endereço?')
    const number = prompt('Qual o seu número?')
    const message = encodeURIComponent(`Olá, gostaria de fazer o pedido:
    - Prato: Frango Yin Yang
    - Bebida: Coquinha Gelada
    - Sobremesa: Pudim
    Total: R$ 27.70
    
    Nome: ${name}
    Endereço: ${address}`);
    window.open(`https://wa.me/${number}?text=${message}`, '_blank');
}