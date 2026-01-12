// Addition de deux nombres
function add(a, b) {
    return a + b;
}
// Soustraction de deux nombres
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

function power(a, b) { return Math.pow(a, b)};

function modulo(a, b) { return a % b;

}
console.log("je suis là");