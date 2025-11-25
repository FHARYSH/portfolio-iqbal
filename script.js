// 1. Toggle Menu Navbar (Responsif HP)
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('nav');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

// 2. Efek Sticky pada Header saat Scroll
let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 100);
    
    // Tutup menu otomatis jika discroll
    menuIcon.classList.remove('fa-times');
    navbar.classList.remove('active');
});

// 3. Animasi Mengetik (Typewriter Effect)
const textElement = document.querySelector('.typewriter-text');
const texts = ["Admin Specialist", "IT Graduate", "Document Expert"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) { count = 0; }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    
    textElement.textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Jeda 2 detik setelah kata selesai
    } else {
        setTimeout(type, 100); // Kecepatan mengetik
    }
}());
