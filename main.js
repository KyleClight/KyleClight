
const sections = document.querySelectorAll('.section');
const dots = document.querySelectorAll('.dot');

const observerOptions = {
    threshold: 0.6
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Находим индекс текущей секции
            const index = Array.from(sections).indexOf(entry.target);

            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');

            if (window.innerWidth > 1024) {
                if (index === sections.length - 1) {
                    document.body.classList.add('footer-visible');
                } else {
                    document.body.classList.remove('footer-visible');
                }
            }
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sections[index].scrollIntoView({ behavior: 'smooth' });
    });
});