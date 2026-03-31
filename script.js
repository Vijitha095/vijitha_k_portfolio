// Toggle menu icon and navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    // Sticky Header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Active link highlighting
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
        }
    });

    // Remove toggle icon and navbar when searching/scrolling
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Typed.js for typing animation
const typed = new Typed('.multiple-text', {
    strings: ['Python Fullstack Trainer', 'Django Expert', 'React Developer', 'Tech Enthusiast'],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            // Optional: Remove class to animate again when scrolling up
            // entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.1 // Triggers when 10% of element is visible
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
