const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const burgerIcon = document.getElementById('burger-icon');

burger.addEventListener('click', () => {
    // Toggle navigation menu
    nav.classList.toggle('active');

    // Toggle between hamburger and X icon
    if (nav.classList.contains('active')) {
        burgerIcon.classList.remove('fa-bars');
        burgerIcon.classList.add('fa-times');
    } else {
        burgerIcon.classList.remove('fa-times');
        burgerIcon.classList.add('fa-bars');
    }
});

// Close menu when clicking on a link (mobile)
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burgerIcon.classList.remove('fa-times');
        burgerIcon.classList.add('fa-bars');
    });
});

// Close menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !burger.contains(event.target) && nav.classList.contains('active')) {
        nav.classList.remove('active');
        burgerIcon.classList.remove('fa-times');
        burgerIcon.classList.add('fa-bars');
    }
});
// slider


document.addEventListener("DOMContentLoaded", function () {
    const membershipSection = document.querySelector(".membership-container");

    function handleScroll() {
        const sectionPos = membershipSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
            membershipSection.classList.add("active");
        }
    }

    window.addEventListener("scroll", handleScroll);
});


document.addEventListener("DOMContentLoaded", function () {
    const contactSection = document.querySelector(".contact-container");

    function handleScroll() {
        const sectionPos = contactSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
            contactSection.classList.add("active");
        }
    }

    window.addEventListener("scroll", handleScroll);
});



//     document.addEventListener("DOMContentLoaded", function () {
//     const sections = document.querySelectorAll(".section");
//
//     function checkScroll() {
//     sections.forEach((section, index) => {
//     const sectionPos = section.getBoundingClientRect().top;
//     const screenPos = window.innerHeight / 1.3;
//
//     if (sectionPos < screenPos) {
//     section.classList.add("show");
// }
// });
// }
//
//     window.addEventListener("scroll", checkScroll);
//     checkScroll();
// });



const cursor = document.querySelector('.cursor');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    cursor.style.transform = `translate(${cursorX - 30}px, ${cursorY - 30}px) scale(1.1) rotate(${cursorX * 0.05}deg)`;

    requestAnimationFrame(animateCursor);
}

animateCursor();