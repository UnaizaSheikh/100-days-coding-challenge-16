"use strict";
//make the index of "banana" in an array
function replaceBanana(fruit) {
    let index = fruits.indexOf("Banana");
    fruits[index] = "Grapes";
}
let fruits = ["Apple", "Orange", "Banana", "Cherry"];
//console.log(fruits);
replaceBanana(fruits);
console.log(fruits);
