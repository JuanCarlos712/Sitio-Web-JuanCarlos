// Navbar functionality
const navbar = document.getElementById('navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Change navbar style on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.padding = '0.5rem 0';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.padding = '1rem 0';
        navbar.style.boxShadow = 'none';
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm && window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener los valores del formulario
            const name = contactForm.querySelector('input[name="name"]').value;
            const email = contactForm.querySelector('input[name="_replyto"]').value;
            const message = contactForm.querySelector('textarea[name="message"]').value;
            
            // Validar campos
            if (!name || !email || !message) {
                alert('Por favor, completa todos los campos.');
                return;
            }
            
            // Simular envío
            console.log('Simulando envío de formulario:');
            console.log('Nombre:', name);
            console.log('Email:', email);
            console.log('Mensaje:', message);
            
            // Mostrar mensaje de éxito
            alert('¡Mensaje enviado con éxito! (Simulación)\n\nCuando publiques tu sitio, los mensajes llegarán a tu correo electrónico.');
            
            // Limpiar formulario
            contactForm.reset();
        });
    }
});

// Animation on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.skill-category, .project-card, .subject-item');
    
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

// Simple typing effect for hero text (optional)
function initTypingEffect() {
    const heroText = document.querySelector('.hero-text p');
    if (heroText) {
        const originalText = heroText.textContent;
        heroText.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                heroText.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 1000);
    }
}

// Initialize typing effect when page loads
window.addEventListener('load', initTypingEffect);