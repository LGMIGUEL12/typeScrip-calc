var operation1 = "";
var operation2 = "";
var operate;
function insert(event) {
    var x = event.target.value;
    // const screem: string = document.getElementById("resultado")?.innerText || "";
    if (parseFloat(x) >= 0 && !operate) {
        operation1 = operation1 + x;
        document.getElementById("resultado").innerText = operation1;
    }
    if (operate && parseFloat(x) >= 0) {
        operation2 = operation2 + x;
        document.getElementById("resultado").innerText = operation2;
    }
    if (!parseFloat(x) && !operation2 && x !== "0") {
        operate = x;
        document.getElementById("resultado").innerText = operation1 + operate;
    }
    console.log("number 1", operation1);
    console.log("number 2", operation2);
    console.log("sign", operate);
}
function show() {
    if (operation1 && operate && operation2) {
        document.getElementById("resultado").innerText = calc().toString();
    }
    if (calc() && operate === "/" && operation2 === "0") {
        alert("No es posible ejecutar esta acción");
    }
    if (calc()) {
        operation1 = calc().toString();
        operation2 = "";
        operate = "";
    }
}
function clean() {
    operation1 = "";
    operation2 = "";
    operate = "";
    document.getElementById("resultado").innerText = "";
}
function add() {
    return parseFloat(operation1) + parseFloat(operation2);
}
function subtract() {
    return parseFloat(operation1) - parseFloat(operation2);
}
function multiply() {
    return parseFloat(operation1) * parseFloat(operation2);
}
function split() {
    return parseFloat(operation1) / parseFloat(operation2);
}
function calc() {
    switch (operate) {
        case "+":
            return add();
        case "-":
            return subtract();
        case "*":
            return multiply();
        case "/":
            return split();
        default:
            return undefined;
    }
}
