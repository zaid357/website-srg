// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log('Inquiry Submitted:', { name, email, message });

        alert('Thank you! Your inquiry has been submitted.');

        contactForm.reset();
    });
}

// Navbar Hover Zoom Out Effect
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(0.9)';
    });

    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
    });
});

//Hamburger Functional
const toggler = document.querySelector('.custom-toggler');
const nav = document.getElementById('navbarNav');

toggler.addEventListener('click', () => {
    toggler.classList.toggle('active');
});



document.querySelectorAll('.dropdown-submenu > a').forEach(function (el) {
    el.addEventListener('click', function (e) {
        let nextEl = el.nextElementSibling;
        if (nextEl) {
            e.preventDefault();
            nextEl.classList.toggle('show');
        }
    });
});
