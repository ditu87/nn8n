document.addEventListener('DOMContentLoaded', function() {
    // Ensure hero section is visible by default and not affected by general section animations
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        heroSection.style.opacity = 1;
        heroSection.style.transform = 'translateY(0)';
    }

    // Select all <section> elements within <main> but exclude the one with id="hero"
    const sectionsToAnimate = document.querySelectorAll('main > section:not(#hero)');

    const observerOptions = {
        root: null, // relative to document viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the item is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                // Optional: unobserve the element after animation to save resources
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sectionsToAnimate.forEach(section => {
        // Prepare sections for animation
        section.style.opacity = 0;
        section.style.transform = 'translateY(30px)'; // Increased slide-in
        section.style.transition = 'opacity 0.7s ease-in-out, transform 0.7s ease-in-out'; // Smoother and slightly longer transition
        observer.observe(section);
    });
});
