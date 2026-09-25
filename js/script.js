document.addEventListener('DOMContentLoaded', () => {

    // --- Бургер-меню ---
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('Header-nav--active');
        });

        // Закрытие меню при клике на ссылку
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('Header-nav--active');
            });
        });
    }

    // --- Скрытие шапки при прокрутке ---
    const header = document.getElementById('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 50) {
            header.classList.add('Header--hidden');
        } else {
            header.classList.remove('Header--hidden');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, { passive: true });
});