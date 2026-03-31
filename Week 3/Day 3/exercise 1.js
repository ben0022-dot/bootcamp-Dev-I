// 1. Retrieve the h1 and console.log it
const h1 = document.querySelector('h1');
console.log(h1);

// 2. Remove the last paragraph
const article = document.querySelector('article');
const lastP = article.lastElementChild;
if (lastP.tagName === 'P') {
    lastP.remove();
}

// 3. Change h2 background to red on click
const h2 = document.querySelector('h2');
h2.addEventListener('click', () => {
    h2.style.backgroundColor = 'red';
});

// 4. Hide h3 on click
const h3 = document.querySelector('h3');
h3.addEventListener('click', () => {
    h3.style.display = 'none';
});

// 5. Add button to make paragraphs bold
const btn = document.createElement('button');
btn.textContent = 'Make Bold';
document.body.appendChild(btn);

btn.addEventListener('click', () => {
    const allPs = document.querySelectorAll('p');
    allPs.forEach(p => p.style.fontWeight = 'bold');
});

// BONUS 1: Random font size on h1 hover
h1.addEventListener('mouseover', () => {
    const randomSize = Math.floor(Math.random() * 101);
    h1.style.fontSize = `${randomSize}px`;
});

// BONUS 2: Fade out 2nd paragraph (CSS transition required)
const secondP = document.querySelectorAll('p')[1];
secondP.style.transition = 'opacity 1s';
secondP.addEventListener('mouseover', () => {
    secondP.style.opacity = '0';
});

// 1. Retrieve the form
const form = document.querySelector('form');
console.log(form);

// 2. Retrieve inputs by ID
const fnameInput = document.getElementById('fname');
const lnameInput = document.getElementById('lname');
console.log(fnameInput, lnameInput);

// 3. Retrieve inputs by name attribute
const fnameByName = document.getElementsByName('firstname')[0];
const lnameByName = document.getElementsByName('lastname')[0];
console.log(fnameByName, lnameByName);

// 4. Handle Submit
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = fnameInput.value.trim();
    const lastName = lnameInput.value.trim();
    const ul = document.querySelector('.usersAnswer');

    if (firstName !== "" && lastName !== "") {
        ul.innerHTML = ""; // Clear previous results if any
        const liFirst = document.createElement('li');
        const liLast = document.createElement('li');
        
        liFirst.textContent = firstName;
        liLast.textContent = lastName;
        
        ul.appendChild(liFirst);
        ul.appendChild(liLast);
    }
});

// 1. Global variable
let allBoldItems;

// 2. Get bold items
function getBoldItems() {
    allBoldItems = document.querySelectorAll('strong');
}

// 3. Highlight blue
function highlight() {
    allBoldItems.forEach(item => item.style.color = 'blue');
}

// 4. Return to black
function returnItemsToDefault() {
    allBoldItems.forEach(item => item.style.color = 'black');
}

// 5. Event Listeners
const paragraph = document.querySelector('p');
getBoldItems(); // Initialize the list

paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout', returnItemsToDefault);

const sphereForm = document.getElementById('MyForm');

sphereForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const radius = parseFloat(document.getElementById('radius').value);
    const volumeField = document.getElementById('volume');

    if (!isNaN(radius)) {
        // Calculate volume: (4/3) * PI * r^3
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        volumeField.value = volume.toFixed(2); // Rounding to 2 decimal places
    } else {
        alert("Please enter a valid number for the radius.");
    }
});

