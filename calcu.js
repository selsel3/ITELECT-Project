const display = document.getElementById('display');
const historyContainer = document.getElementById('history-container');
let history = [];

function appendToDisplay(value) {
    display.value += value;
}


function clearDisplay() {
    display.value = '';
}

function calculate() {
    let expression = display.value.replace(/x/g, '*'); 
    try {
        let result = eval(expression);
        display.value = result;

     
        let historyEntry = `${expression.replace(/\*/g, 'x')} = ${result}`;
        history.push(historyEntry);
        updateHistory();
    } catch (error) {
        display.value = 'Error';
    }
}

function updateHistory() {
    if (history.length === 0) {
        historyContainer.innerHTML = "There is no history yet...";
        return;
    }

    historyContainer.innerHTML = '<ul class="list-group">';
    history.forEach(entry => {
        historyContainer.innerHTML += `<li class="list-group-item">${entry}</li>`;
    });
    historyContainer.innerHTML += '</ul>';
}