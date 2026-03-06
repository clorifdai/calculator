// index.html

function add(first, second) {
    return first + second;
}

let buttons = document.querySelectorAll(".num");
let ac = document.querySelector(".ac");
let screen = document.querySelector(".screen-my");

// Detect number button
for (let i = 0 ; i < buttons.length; i++) {
    let button = buttons [i];
    button.addEventListener("click", () => {
        if (screen.innerHTML === "0") {
            screen.innerHTML = null;
        }
        screen.innerHTML += button.innerHTML});
};
console.log(buttons.length)

ac.addEventListener("click", () => {
    screen.innerHTML = 0
})
