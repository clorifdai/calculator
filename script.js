// index.html

function add(first, second) {
    return first + second;
}

let buttons = document.querySelectorAll(".num");
let ac = document.querySelector(".ac");
let screen = document.querySelector(".screen-my");
let opt = document.querySelectorAll(".operator")

// Detect number button
for (let i = 0 ; i < buttons.length; i++) {
    let button = buttons [i];
    button.addEventListener("click", () => {
        if (screen.textContent === "0") {
            screen.textContent = null;
        };

        appendNumber(button.innerHTML);
        console.log(button.innerHTML);
    });
    // operator()
};
// Pertama memasukkan nomer ke layar
// lalu deteksi angka yang ada di layar ini pakai inner html
// lalu masukkan angka deteksi ke variabel dengan nama depan
// kemudian pencet operator. ini tidak akan mendeteksi angka dilayar
// lalu disini kita hapus angka dilayar lalu layar akan menampilkan tombol yang dipencet
// deteksi angka ini lalu masukkan ke variabel belakang
operator()

let first = null;
let second = null;

function operator() {
    for (let i = 0; i < opt.length; i++) {
        let opt_l = opt[i];
        opt_l.addEventListener("click", () => {
            
            if (opt_l.textContent === "+") {
                console.log("Penjumlahan")
                first = screen.textContent;
                screen.textContent = 0; 
                second = screen.textContent;
            }

        })
console.log(first, second);

        console.log("operator berjalan", opt_l)

    }
}

function appendNumber(num) {
    screen.textContent += num;
}

ac.addEventListener("click", () => {
    screen.textContent = 0
})
