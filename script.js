// Initialize Lucide icons
document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
});

// Form submission placeholder
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;

    // Simple visual feedback
    btn.innerHTML = 'Message Sent! <i data-lucide="check"></i>';
    btn.style.backgroundColor = '#22c55e'; // Green success color
    lucide.createIcons(); // Re-initialize new icon

    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.backgroundColor = '';
        e.target.reset();
        lucide.createIcons();
    }, 3000);
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Add offset for the fixed navbar
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});
