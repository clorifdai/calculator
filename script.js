// index.html

let buttons = document.querySelectorAll(".num");
let ac = document.querySelector(".ac");
let screen = document.querySelector(".screen-my");
let opt = document.querySelectorAll(".operator");
let equal = document.querySelector("#equal"); 
let decimal = document.querySelector("#decimal");

let numCurrent = "";
let first = null;
let second = null;
let optVar = null;
let optVarEqual = null;
let resetScreen = false;
let numCurrentSecond = '';

// Detect number button
function buttonNum () {
    for (let i = 0 ; i < buttons.length; i++) {
        let button = buttons [i];
        button.addEventListener("click", () => {
            if (screen.textContent === "0") {
                screen.textContent = null;
                numCurrent = null;
                resetScreen = false;
            };
            
            appendNumber(button.innerHTML);
            numCurrent += button.textContent
            if (first !== null) {
                console.log("buttonNun second")
                numCurrentSecond += button.innerHTML;
                screen.textContent = numCurrentSecond
            }
        });

    };
}

function decimalButton () {
    decimal.addEventListener("click", () => {
        if (!screen.textContent.includes(".")){
            appendNumber(decimal.textContent)
            numCurrent += decimal.textContent
            if (first !== null) {
                numCurrentSecond += decimal.innerHTML;
                screen.textContent = numCurrentSecond
            }                
        }

    });
};


function operatorButton() {
    for (let i = 0; i < opt.length; i++) {
        let opt_l = opt[i];     
        opt_l.addEventListener("click", () => {
            let value = screen.textContent;
            console.log("ada operatorButton")

            if (first == null) {
                first = Number(value);
                operator = opt_l.textContent;
                resetScreen = true;
                console.log("first", first);
            } else if (first !== null && second == null) {
                second = Number(value);
                console.log("second", second);
                resetScreen = true;
            } else if (first !== null && second !== null) {
                screen.textContent = "";
                second = Number(value);
                let result = calculate(first, second, optVar);
                first = result;
                second = null;
                screen.textContent = result;
                resetScreen = true;
                console.log("Result:", result);
            }      


            if (opt_l.textContent !== "="){
                optVar = opt_l.textContent
                console.log("optVar:", optVar)
            } else if (opt_l.textContent === '=') {
                if (first !== null && second !== null) {
                    let result = calculate(first, second, optVar);
                    screen.textContent = result;
                    first = null;
                    second= null;
                    optVar = null;
                }

            }
        })
    }
}

function calculate(first, second, operator) {
    let result;
    if (operator === "+") {
        result = first + second;
    } else if (operator === "-") {
        result = first - second;
    } else if (operator === "x") {
        result = first * second;
    } else if (operator === ":") {
        result = (second === 0) ? 0 : first /second;
    }
    return result.toFixed(2);
}


function add(first, second) {
    let result = first + second;
    let resultLimitDecimal = result.toFixed(2);
    screen.textContent = resultLimitDecimal;
    console.log("fungsi add terpanggil")
}

function subtract(first, second) {
    let result = first - second;
    let resultLimitDecimal = result.toFixed(2);
    screen.textContent = resultLimitDecimal;
    console.log("fungsi subract terpanggil")
}

function multiply(first, second) {
    let result = first * second;
    let resultLimitDecimal = result.toFixed(2);
    screen.textContent = resultLimitDecimal;
    console.log("fungsi multiply terpanggil")
}

function divide(first, second) {
    let result;
    if (first === 0 || second === 0) {
        result = 0
    } else {
        result = first / second
    }
    let resultLimitDecimal = result.toFixed(2);
    screen.textContent = resultLimitDecimal;
    console.log("fungsi divide terpanggil")
}


function appendNumber(num) {
    screen.textContent += num;
}

ac.addEventListener("click", () => {
    screen.textContent = "0";
    first = null;
    second = null;
    resetScreen = false;
    numCurrentSecond = '';
})

buttonNum()
decimalButton()
operatorButton()