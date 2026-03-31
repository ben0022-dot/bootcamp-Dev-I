// 1. Select the form and the span where the story will appear
const libForm = document.getElementById('libform');
const storySpan = document.getElementById('story');
const libButton = document.getElementById('lib-button');

// 2. Create a "Shuffle" button for the Bonus
const shuffleBtn = document.createElement('button');
shuffleBtn.textContent = "Shuffle Story";
shuffleBtn.id = "shuffle-button";
document.body.appendChild(shuffleBtn);

// Global variable to store values so the shuffle button can access them
let userValues = {};

// 3. Function to generate different stories
function getStory(values, index) {
    const stories = [
        `Yesterday, ${values.person} decided to ${values.verb} a very ${values.adjective} ${values.noun} in ${values.place}. It was weird.`,
        `In the middle of ${values.place}, ${values.person} found a ${values.adjective} ${values.noun} and started to ${values.verb} uncontrollably.`,
        `${values.person} loves to ${values.verb} with a ${values.adjective} ${values.noun} whenever they visit ${values.place}!`
    ];
    return stories[index];
}

// 4. Main function to handle the Lib it! click
function libIt(event) {
    event.preventDefault(); // Prevent page refresh

    // Get input values
    const noun = document.getElementById('noun').value.trim();
    const adj = document.getElementById('adjective').value.trim();
    const person = document.getElementById('person').value.trim();
    const verb = document.getElementById('verb').value.trim();
    const place = document.getElementById('place').value.trim();

    // Validation: check if empty
    if (!noun || !adj || !person || !verb || !place) {
        alert("Please fill in all the blanks!");
        return;
    }

    // Store values for later use by shuffle
    userValues = { noun, adjective: adj, person, verb, place };

    // Display the first story
    storySpan.textContent = getStory(userValues, 0);
}

// 5. Shuffle function (Bonus)
function shuffleStory() {
    // Check if we actually have values yet
    if (!userValues.noun) {
        alert("Fill out the form first!");
        return;
    }

    // Pick a random index between 0 and 2
    const randomIndex = Math.floor(Math.random() * 3);
    storySpan.textContent = getStory(userValues, randomIndex);
}

// Event Listeners
libForm.addEventListener('submit', libIt);
shuffleBtn.addEventListener('click', shuffleStory);

