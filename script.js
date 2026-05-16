// Простая интерактивность для лендинга
document.addEventListener('DOMContentLoaded', () => {
    // Плавная прокрутка для навигации
    const navLinks = document.querySelectorAll('nav a, .hero-buttons a, .footer-links a, .tech-info .btn-primary');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const hash = link.getAttribute('href');
            if (hash && hash.startsWith('#')) {
                const targetId = hash.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // Добавим лёгкий эффект при наведении на карточки
    const cards = document.querySelectorAll('.about-card, .feature-item, .team-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.25s ease, box-shadow 0.25s';
        });
    });

    // Консольное приветствие
    console.log('Alba — мессенджер на протоколе RUTP. Команда Альба-кряк приветствует!');

    // Анимация появления при скролле (простая, через Intersection Observer)
    const fadeElements = document.querySelectorAll('.about-card, .feature-item, .team-card, .tech-info, .tech-code');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
});
