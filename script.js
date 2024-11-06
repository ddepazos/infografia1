document.addEventListener('DOMContentLoaded', function() {
    const meters = document.querySelectorAll('.skill-meter');
    meters.forEach(meter => {
        meter.style.width = '85%';
    });

    // Animación al hacer scroll
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Animación suave para los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});