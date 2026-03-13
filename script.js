// Cursor tracking effect
const cursor = document.querySelector('.cursor');
const cursorRing = document.querySelector('.cursor-ring');
const clickSound = document.getElementById('clickSound');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
cursorRing.style.left = (e.clientX - 20) + 'px';
    cursorRing.style.top = (e.clientY - 20) + 'px';
});

// Hide default cursor and show custom cursor
document.addEventListener('mouseover', () => {
    document.body.style.cursor = 'none';
});

// Play sound on button clicks
const buttons = document.querySelectorAll('.btn, .nav-link, .portfolio-card');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        clickSound.currentTime = 0;
        clickSound.play().catch(() => {
            console.log('Sound playback restricted');
        });
    });
});

// Smooth scroll behavior
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
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.portfolio-card, .section-header').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Resume download button functionality
const resumeBtn = document.getElementById('resumeBtn');
if (resumeBtn) {
    resumeBtn.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = '#';
        link.download = 'Ketan_Kini_Resume.pdf';
        alert('Resume download feature ready. Add your resume file to the repository.');
    });
}

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        clickSound.play().catch(() => console.log('Sound playback restricted'));
        
        const formData = new FormData(contactForm);
        
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Parallax effect for floating shapes
window.addEventListener('scroll', () => {
    const shapes = document.querySelectorAll('.shape');
    const scrollY = window.scrollY;
    
    shapes.forEach((shape, index) => {
        shape.style.transform = `translateY(${scrollY * (0.5 + index * 0.1)}px)`;
    });
});

// Cursor effect enhancement
document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(0.7)';
    cursorRing.style.transform = 'scale(1.5)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
    cursorRing.style.transform = 'scale(1)';
});

// Touch support for mobile devices
if (window.innerWidth <= 768) {
    document.body.style.cursor = 'auto';
    cursor.style.display = 'none';
    cursorRing.style.display = 'none';
}

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    }
});

console.log('Portfolio website loaded successfully!');