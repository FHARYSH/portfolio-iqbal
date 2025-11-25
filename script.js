/* --- 1. PRELOADER LOGIC --- */
const preloader = document.getElementById('preloader');
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1500); // Waktu loading 1.5 detik
});

/* --- 2. MENU ICON NAVBAR (MOBILE) --- */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Ubah icon
    if(menuIcon.querySelector('i').classList.contains('fa-bars')){
        menuIcon.querySelector('i').classList.replace('fa-bars', 'fa-times');
    } else {
        menuIcon.querySelector('i').classList.replace('fa-times', 'fa-bars');
    }
    navbar.classList.toggle('active');
};

/* --- 3. SCROLL SECTIONS ACTIVE LINK --- */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* --- STICKY NAVBAR --- */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* --- CLOSE NAVBAR ON SCROLL --- */
    menuIcon.querySelector('i').classList.replace('fa-times', 'fa-bars');
    navbar.classList.remove('active');
};

/* --- 4. TYPING TEXT ANIMATION --- */
const typingText = document.querySelector('.typing-text');
const words = ["Staff Administrasi", "Tech Enthusiast", "Data Entry Specialist", "IT Graduate"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    
    typingText.textContent = currentChar;
    
    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50);
    } else {
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1000); // Jeda sebelum ganti kata
    }
};
typeEffect();

/* --- 5. INITIALIZE AOS (ANIMATE ON SCROLL) --- */
AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
});
