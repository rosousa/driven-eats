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