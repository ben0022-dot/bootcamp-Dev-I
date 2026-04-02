// #1 
// Prediction: a = 3
// Explanation: 'a' is initialized to 5. Since 5 > 1, the code enters the if block and reassigns 'a' to 3.
// #1.2: If declared with const, it would throw a TypeError because const variables cannot be reassigned.

// #2
// Prediction: 
// First call: funcThree() -> alerts 0 (the global value).
// Second call: funcTwo() -> changes the global value of 'a' to 5.
// Third call: funcThree() -> alerts 5.
// #2.2: If declared with const, funcTwo would throw a TypeError upon reassignment.

// #3
// Prediction: a = "hello"
// Explanation: funcFour assigns "hello" to the global window object. funcFive accesses that global 'a'.

// #4
// Prediction: a = "test"
// Explanation: Inside funcSix, a new 'a' is declared locally. This "shadows" the global 'a'.
// #4.2: Using const instead of let here would behave the same way (alerting "test").

// #5
// Prediction: 
// Inside block: 5
// Outside block: 2
// Explanation: 'let' is block-scoped. The 'a' inside the {} is a different variable than the 'a' outside.
// #5.2: If declared with const, the behavior remains the same (block scope still applies).

const winBattle = () => true;

let experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints);

const isString = (val) => typeof val === 'string';

console.log(isString('hello')); // true
console.log(isString([1, 2, 4, 0])); // false

const sum = (a, b) => a + b;

// 1. Function Declaration (Hoisted)
function convertToGrams(kg) {
    return kg * 1000;
}
console.log(convertToGrams(2));

// 2. Function Expression (Not Hoisted)
const kgToGrams = function(kg) {
    return kg * 1000;
};
console.log(kgToGrams(5));

// Difference: Function declarations are hoisted (can be called before defined), expressions are not.

// 3. Arrow Function
const kgToGramsArrow = kg => kg * 1000;
console.log(kgToGramsArrow(10));

(function(children, partner, location, job) {
    const p = document.createElement("p");
    p.innerText = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
    document.body.appendChild(p);
})(2, "Sarah", "Tokyo", "Developer");

// HTML: <nav id="navbar"></nav>
(function(userName) {
    const nav = document.getElementById('navbar');
    const div = document.createElement('div');
    div.innerHTML = `
        <span>Welcome, ${userName}</span>
        <img src="https://via.placeholder.com/50" alt="profile">
    `;
    nav.appendChild(div);
})("John");

function makeJuice(size) {
    const ingredients = [];

    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }

    function displayJuice() {
        const text = `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
        const p = document.createElement("p");
        p.innerText = text;
        document.body.appendChild(p);
    }

    // Adding 6 ingredients
    addIngredients("Apple", "Ginger", "Lemon");
    addIngredients("Carrot", "Beetroot", "Orange");
    
    displayJuice();
}

makeJuice("large");