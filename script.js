let food = false;
let drink = false;
let dessert= false;
let food_price;
let drink_price;
let dessert_price;

function food_choice(class_name){
    let first_food = document.querySelector('.first-food');
    let second_food = document.querySelector('.second-food');
    let third_food = document.querySelector('.third-food');

    if(class_name.includes('first-food')){
        first_food.classList.add('selected');
        second_food.classList.remove('selected');
        third_food.classList.remove('selected');
        food_price = document.querySelector('.first-food .food-price').textContent;
        food_price = food_price.replace('R$ ', '').replace(',', '.');
        food_price = parseFloat(food_price);
    } else if (class_name.includes('second-food')){
        second_food.classList.add('selected');
        first_food.classList.remove('selected');
        third_food.classList.remove('selected');
        food_price = document.querySelector('.second-food .food-price').textContent;
        food_price = food_price.replace('R$ ', '').replace(',', '.');
        food_price = parseFloat(food_price);
    } else if (class_name.includes('third-food')){
        third_food.classList.add('selected');
        first_food.classList.remove('selected');
        second_food.classList.remove('selected');
        food_price = document.querySelector('.third-food .food-price').textContent;
        food_price = food_price.replace('R$ ', '').replace(',', '.');
        food_price = parseFloat(food_price);
    }
    food = true;
    checkout();
}

function drink_choice(class_name){
    let first_drink = document.querySelector('.first-drink');
    let second_drink = document.querySelector('.second-drink');
    let third_drink = document.querySelector('.third-drink');

    if(class_name.includes('first-drink')){
        first_drink.classList.add('selected');
        second_drink.classList.remove('selected');
        third_drink.classList.remove('selected');
        drink_price = document.querySelector('.first-drink .drink-price').textContent;
        drink_price = drink_price.replace('R$ ', '').replace(',', '.');
        drink_price = parseFloat(drink_price);
    } else if (class_name.includes('second-drink')){
        second_drink.classList.add('selected');
        first_drink.classList.remove('selected');
        third_drink.classList.remove('selected');
        drink_price = document.querySelector('.second-drink .drink-price').textContent;
        drink_price = drink_price.replace('R$ ', '').replace(',', '.');
        drink_price = parseFloat(drink_price);
    } else if (class_name.includes('third-drink')){
        third_drink.classList.add('selected');
        first_drink.classList.remove('selected');
        second_drink.classList.remove('selected');
        drink_price = document.querySelector('.third-drink .drink-price').textContent;
        drink_price = drink_price.replace('R$ ', '').replace(',', '.');
        drink_price = parseFloat(drink_price);
    }
    drink = true;
    checkout();
}

function dessert_choice(class_name){
    let first_dessert = document.querySelector('.first-dessert');
    let second_dessert = document.querySelector('.second-dessert');
    let third_dessert = document.querySelector('.third-dessert');

    if(class_name.includes('first-dessert')){
        first_dessert.classList.add('selected');
        second_dessert.classList.remove('selected');
        third_dessert.classList.remove('selected');
        dessert_price = document.querySelector('.first-dessert .dessert-price').textContent;
        dessert_price = dessert_price.replace('R$ ', '').replace(',', '.');
        dessert_price = parseFloat(dessert_price);
    } else if (class_name.includes('second-dessert')){
        second_dessert.classList.add('selected');
        first_dessert.classList.remove('selected');
        third_dessert.classList.remove('selected');
        dessert_price = document.querySelector('.second-dessert .dessert-price').textContent;
        dessert_price = dessert_price.replace('R$ ', '').replace(',', '.');
        dessert_price = parseFloat(dessert_price);
    } else if (class_name.includes('third-dessert')){
        third_dessert.classList.add('selected');
        first_dessert.classList.remove('selected');
        second_dessert.classList.remove('selected');
        dessert_price = document.querySelector('.third-dessert .dessert-price').textContent;
        dessert_price = dessert_price.replace('R$ ', '').replace(',', '.');
        dessert_price = parseFloat(dessert_price);
    }
    dessert = true;
    checkout();
}

function checkout(){
    if(food && drink && dessert){
        console.log('Finalizando pedido!');
        console.log((food_price + drink_price + dessert_price).toFixed(2));
    }
}