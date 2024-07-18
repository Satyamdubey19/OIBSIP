function appendToScreen(value) {
    document.querySelector('.calculator-screen').value += value;
}

function clearScreen() {
    document.querySelector('.calculator-screen').value = '';
}

function deleteLast() {
    let screen = document.querySelector('.calculator-screen');
    screen.value = screen.value.slice(0, -1);
}

function calculate() {
    let screen = document.querySelector('.calculator-screen');
    try {
        screen.value = eval(screen.value);
    } catch (e) {
        screen.value = 'Error';
    }
}
