// script.js

document.addEventListener('DOMContentLoaded', () => {

    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-links a');

    function updateActiveLink() {
        let currentSection = null;
        let maxVisible = 0;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calcule combien de pixels de la section sont visibles à l'écran
            const visibleTop = Math.max(rect.top, 0);
            const visibleBottom = Math.min(rect.bottom, windowHeight);
            const visibleHeight = Math.max(0, visibleBottom - visibleTop);

            // La section avec le plus de pixels visibles gagne
            if (visibleHeight > maxVisible) {
                maxVisible = visibleHeight;
                currentSection = section;
            }
        });

        if (currentSection) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`.nav-links a[href="#${currentSection.id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    }

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();

});
