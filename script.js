// ============================================
// CURSOR TRACKING EFFECT
// ============================================
const cursor = document.querySelector('.cursor');
const cursorRing = document.querySelector('.cursor-ring');
const clickSound = document.getElementById('clickSound');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 6 + 'px';
    cursor.style.top = e.clientY - 6 + 'px';
    
    cursorRing.style.left = (e.clientX - 18) + 'px';
    cursorRing.style.top = (e.clientY - 18) + 'px';
});

// Hide default cursor and show custom cursor
document.addEventListener('mouseover', () => {
    document.body.style.cursor = 'none';
});

// ============================================
// HAMBURGER MENU FUNCTIONALITY
// ============================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// ============================================
// SOUND EFFECTS
// ============================================
const buttons = document.querySelectorAll('.btn, .nav-link, .portfolio-card, .skill-item, .social-link');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playClickSound();
    });
    
    // Add hover effect
    button.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursorRing.style.transform = 'scale(1.2)';
    });
    
    button.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorRing.style.transform = 'scale(1)';
    });
});

function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play().catch(() => {
        console.log('Sound playback restricted');
    });
}

// ============================================
// SMOOTH SCROLL BEHAVIOR
// ============================================
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

// ============================================
// SCROLL TO TOP FUNCTION
// ============================================
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    playClickSound();
}

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
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

// Add animation to cards on scroll
document.querySelectorAll('.portfolio-card, .skill-item, .certificate-card, .section-header').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(el);
});

// ============================================
// RESUME DOWNLOAD BUTTON FUNCTIONALITY
// ============================================
const resumeBtn = document.getElementById('resumeBtn');
if (resumeBtn) {
    resumeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        playClickSound();
        // Replace 'resume.pdf' with your actual resume file path
        const resumeUrl = 'resume.pdf';
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Ketan_Kini_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

// ============================================
// CONTACT FORM HANDLER
// ============================================
function handleContactForm(event) {
    event.preventDefault();
    playClickSound();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // You can send this to your backend or email service
    console.log('Form submitted:', Object.fromEntries(formData));
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    form.reset();
}

// ============================================
// SCROLL ANIMATIONS FOR NAVBAR
// ============================================
let lastScrollY = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    
    if (lastScrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================
// MOBILE TOUCH SUPPORT
// ============================================
document.addEventListener('touchstart', function() {
    // Touch support for mobile devices
});

// ============================================
// KEYBOARD NAVIGATION
// ============================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});
