// Cursor tracking effect
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

// Play sound on button clicks and interactions
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
document.querySelectorAll('.portfolio-card, .skill-item, .section-header').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(el);
});

// Resume download button functionality
const resumeBtn = document.getElementById('resumeBtn');
if (resumeBtn) {
    resumeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        playClickSound();
        
        alert('🎉 Resume download ready! Please add your resume.pdf file to your repository to enable downloads.');
    });
}

// Form submission with validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        playClickSound();
        
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        if (name && email && message) {
            alert(`✨ Thank you ${name}! Your message has been received. I'll get back to you soon at ${email}!`);
            contactForm.reset();
        } else {
            alert('Please fill out all fields!');
        }
    });
}

// Parallax effect for background
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');
    const blobs = document.querySelectorAll('.blob');
    
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 40px rgba(255, 165, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 8px 32px rgba(255, 165, 0, 0.1)';
    }
    
    blobs.forEach((blob, index) => {
        blob.style.transform = `translateY(${scrollY * (0.3 + index * 0.1)}px)`;
    });
});

// Cursor effect enhancement
document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(0.5)';
    cursorRing.style.transform = 'scale(1.8)';
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

// Window resize handler
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        cursor.style.display = 'none';
        cursorRing.style.display = 'none';
    } else {
        cursor.style.display = 'block';
        cursorRing.style.display = 'block';
    }
});

console.log('✨ Portfolio loaded successfully!');
