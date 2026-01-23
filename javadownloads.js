// Controle do Menu Mobile
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = mobileMenu.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Animação de Surgimento (Reveal) ao Rolar
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

// Seleciona todos os elementos que devem "revelar"
document.querySelectorAll('.reveal, .dl-card, .t-card').forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
    revealObserver.observe(el);
});

// Efeito de Transparência no Navbar ao rolar
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.style.background = "rgba(0,0,0,0.95)";
        nav.style.padding = "15px 5%";
    } else {
        nav.style.background = "rgba(0,0,0,0.9)";
        nav.style.padding = "20px 5%";
    }
});