// script.js

// Tombol WhatsApp
const btnWA = document.getElementById('btn-wa');
btnWA.addEventListener('click', () => {
    const phone = '628579884222';
    const message = encodeURIComponent('Halo, saya tertarik dengan properti Okian Property.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
});

// Smooth scroll untuk menu navigasi
const navLinks = document.querySelectorAll('header nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if(targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Animasi fade-in properti saat scroll
const propertyCards = document.querySelectorAll('.property-card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

propertyCards.forEach(card => observer.observe(card));
