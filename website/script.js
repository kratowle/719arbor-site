// Toggle mobile menu
function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('active');
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        document.querySelector('.nav-menu').classList.remove('active');
    });
});

// Form submission handler (demo)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your quote request has been sent. We\'ll contact you soon.');
    this.reset();
});

// Lightbox for project images
document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('click', function() {
        const imgSrc = this.querySelector('img').src;
        const modal = document.createElement('div');
        modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;z-index:2000;cursor:pointer;';
        modal.innerHTML = `
            <img src="${imgSrc}" style="max-width:90%;max-height:90%;border-radius:8px;">
            <button onclick="this.parentElement.remove()" style="position:absolute;top:20px;right:20px;color:white;font-size:2rem;background:none;border:none;cursor:pointer;">&times;</button>
        `;
        document.body.appendChild(modal);
        modal.addEventListener('click', () => modal.remove());
    });
});
