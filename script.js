let food = false;
let drink = false;
let dessert= false;

function food_choice(class_name){
    let first_food = document.querySelector('.first-food');
    let second_food = document.querySelector('.second-food');
    let third_food = document.querySelector('.third-food');

    if(class_name.includes('first-food')){
        first_food.classList.add('selected');
        second_food.classList.remove('selected');
        third_food.classList.remove('selected');
    } else if (class_name.includes('second-food')){
        second_food.classList.add('selected');
        first_food.classList.remove('selected');
        third_food.classList.remove('selected');
    } else if (class_name.includes('third-food')){
        third_food.classList.add('selected');
        first_food.classList.remove('selected');
        second_food.classList.remove('selected');
    }
    food = true;
}

function drink_choice(class_name){
    let first_drink = document.querySelector('.first-drink');
    let second_drink = document.querySelector('.second-drink');
    let third_drink = document.querySelector('.third-drink');

    if(class_name.includes('first-drink')){
        first_drink.classList.add('selected');
        second_drink.classList.remove('selected');
        third_drink.classList.remove('selected');
    } else if (class_name.includes('second-drink')){
        second_drink.classList.add('selected');
        first_drink.classList.remove('selected');
        third_drink.classList.remove('selected');
    } else if (class_name.includes('third-drink')){
        third_drink.classList.add('selected');
        first_drink.classList.remove('selected');
        second_drink.classList.remove('selected');
    }
    drink = true;
}