// Controle do Menu Mobile
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = mobileMenu.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Animação de entrada dos cards ao rolar
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.dl-card, .reveal').forEach((el, index) => {
    el.style.transition = `all 0.6s ease-out ${index * 0.15}s`;
    observer.observe(el);
});