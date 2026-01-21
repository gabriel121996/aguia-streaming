// Efeito de rolagem no Navbar
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Animação de Revelação (Scroll Reveal Simplificado)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Aplicando animação em elementos com a classe reveal
document.querySelectorAll('.f-card, .content-block, .price-card').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
});

// Aplicando nas frases do Hero (com delay)
document.querySelectorAll('.reveal').forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = `all 0.8s ease-out ${index * 0.2}s`;
    setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
    }, 100);
});

const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('nav a');

// Abre/Fecha menu ao clicar no hamburguer
mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // Muda o ícone de barras para um "X"
    const icon = mobileMenu.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Fecha o menu ao clicar em qualquer link (para navegar na mesma página)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileMenu.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});