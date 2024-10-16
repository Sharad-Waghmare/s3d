// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Expandable points
const expandablePoints = document.querySelectorAll('.expandable-point');

expandablePoints.forEach(point => {
    const button = point.querySelector('button');
    const content = point.querySelector('.content');
    const toggle = point.querySelector('.toggle');

    button.addEventListener('click', () => {
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
        toggle.textContent = content.style.display === 'block' ? '▲' : '▼';
    });
});

// Form submission (placeholder)
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted! (This is a placeholder - implement actual form submission logic)');
});