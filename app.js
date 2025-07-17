// Event for save dates in the local storage
document.getElementById('save_Button').addEventListener('click', () => {
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');

    if (!nameInput || !ageInput) {
        console.error('The formulary elements not exist');
        return;
    }
    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value);

    if (name && !isNaN(age)) {
        localStorage.setItem('userName', name);
        localStorage.setItem('userAge', age);
        displayData();
    } else {
        alert('Please, enter a valid name and numeric age');
    }
});

// Function to show localStorage data
function displayData() {
    const name = localStorage.getItem('userName');
    const age = localStorage.getItem('userAge');
    const outputDiv = document.getElementById('output');
    if (name && age) {
        outputDiv.textContent = `Hello ${name}, you have ${age}, years old`;
    } else {
        outputDiv.textContent = `Not found dates...`;
    }
}

// Function to display interaction counter
function displayCounter() {
    const count = sessionStorage.getItem('interactionCount') || 0;
    document.getElementById('counter').textContent = `Session interactions: ${count}`;
}

// Load data and counter on page load
window.onload = function () {
    displayData();
    displayCounter();
};

// Initialize count of interactions in session storage
if (!sessionStorage.getItem('interactionCount')) {
    sessionStorage.setItem('interactionCount', 0);
}

// Update the count of interactions
function updateInteractionsCount() {
    let count = parseInt(sessionStorage.getItem('interactionCount'));
    count++;
    sessionStorage.setItem('interactionCount', count);
    console.log('Interactions in this session: ', count);

    // Show in the page
    document.getElementById('counter').textContent = `Session interactions: ${count}`;
}

// Assign events to count
document.getElementById('save_Button').addEventListener('click', updateInteractionsCount);
document.getElementById('clear_Button').addEventListener('click', updateInteractionsCount);

// Event to clear the dates on local storage
document.getElementById('clear_Button').addEventListener('click', () => {
    localStorage.clear();
    displayData();
});
