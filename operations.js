function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Erreur: division par zéro";
    }
    return a / b;
}

function power(a, b) { return Math.pow(a, b);
}