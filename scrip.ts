let operation1: string = "";
let operation2: string = "";
let operate: string;

function insert(event: Event): void {
    const x: string = (event.target as HTMLButtonElement).value;
    // const screem: string = document.getElementById("resultado")?.innerText || "";

    if (parseFloat(x) >= 0 && !operate) {
        operation1 = operation1 + x;
        document.getElementById("resultado")!.innerText = operation1;
    }

    if (operate && parseFloat(x) >= 0) {
        operation2 = operation2 + x;
        document.getElementById("resultado")!.innerText = operation2;
    }

    if (!parseFloat(x) && !operation2 && x !== "0") {
        operate = x;
        document.getElementById("resultado")!.innerText = operation1 + operate;
    }

    console.log("number 1", operation1);
    console.log("number 2", operation2);
    console.log("sign", operate);
}

function show(): void {
    if (operation1 && operate && operation2) {
        document.getElementById("resultado")!.innerText = calc().toString();
    }
    // funcion de multiplicacion por 0
    if (calc() && operate === "/" && operation2 === "0") {
        alert("No es posible ejecutar esta acción");
    }
    // 
    if (calc()) {
        operation1 = calc().toString();
        operation2 = "";
        operate = "";
    }
}
// tomador de valores
function clean(): void {
    operation1 = "";
    operation2 = "";
    operate = "";
    document.getElementById("resultado")!.innerText = "";
}
// funcion de sumar
function add(): number {
    return parseFloat(operation1) + parseFloat(operation2);
}
// funcion de restar
function subtract(): number {
    return parseFloat(operation1) - parseFloat(operation2);
}
// funcion de multiplicar
function multiply(): number {
    return parseFloat(operation1) * parseFloat(operation2);
}
// funcion de divicion
function split(): number {
    return parseFloat(operation1) / parseFloat(operation2);
}

// evaluador de funcion a ejecutar
function calc(): number | undefined {
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