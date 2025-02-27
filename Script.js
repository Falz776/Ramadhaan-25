const messages = [
    "Marhaban Ya Ramadhan",
    "Kami Afrizal sekeluarga mengucapkan",
    "Selamat menunaikan ibadah puasa",
    "Mohon maaf lahir dan batin"
];

let index = 0;
const textElement = document.getElementById("animatedText");
const button = document.getElementById("changeTextButton");

function changeText() {
    let direction = Math.random() > 0.5 ? "slide-up" : "slide-down"; // Acak naik atau turun
    textElement.classList.remove("visible");
    textElement.classList.add(direction); // Tambahkan efek naik/turun

    setTimeout(() => {
        textElement.textContent = messages[index]; // Ganti teks
        textElement.classList.remove(direction);
        textElement.classList.add("visible"); // Munculkan teks baru dengan efek transisi

        index = (index + 1) % messages.length;
    }, 800); // Waktu transisi animasi
}

button.addEventListener("click", changeText);
