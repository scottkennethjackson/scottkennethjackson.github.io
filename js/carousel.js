export function carouselLogic() {
    // Center the carousel on page load
    const carousel = document.getElementById("carousel");
    carousel.scrollLeft = carousel.scrollWidth / 2 - carousel.clientWidth / 2;

    // For touch devices, toggle the overlay on tap instead of hover
    const prefersTouch = window.matchMedia('(pointer: coarse)').matches;
    const projects = document.querySelectorAll('[data-project]');
    
    if (prefersTouch) {
        projects.forEach((project) => {
            project.addEventListener('click', (e) => {
                const isActive = project.classList.contains('is-active');

                if (!isActive) {
                    e.preventDefault();
    
                    // Hide overlays on all other projects
                    projects.forEach((p) => p.classList.remove('is-active'));
                    project.classList.add('is-active');
                };
            });
        });
    }

    // Keyboard accessibility: toggle overlay on Enter or Space key press
    projects.forEach((project) => {
        project.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                project.classList.toggle('is-active');
            }
        });
    });

    // Click outside to hide all overlays
    document.addEventListener('click', (e) => {
        if (!e.target.closest('[data-project]')) {
            projects.forEach((p) => p.classList.remove('is-active'));
        }
    });
}
