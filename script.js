// Cursor tracking effect
const cursor = document.querySelector('.cursor');
const cursorRing = document.querySelector('.cursor-ring');
const clickSound = document.getElementById('clickSound');

document.addEventListener('mousemove', (e) => {
    if (cursor && cursorRing) {
        cursor.style.left = (e.clientX - 6) + 'px';
        cursor.style.top = (e.clientY - 6) + 'px';
        
        cursorRing.style.left = (e.clientX - 18) + 'px';
        cursorRing.style.top = (e.clientY - 18) + 'px';
    }
});

// Hide default cursor and show custom cursor
document.addEventListener('mouseover', () => {
    document.body.style.cursor = 'none';
});

// Play sound on button clicks and interactions
const buttons = document.querySelectorAll('.btn, .nav-link, .portfolio-card, .skill-item, .social-link, .info-item a');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playClickSound();
    });
    
    // Add hover effect
    button.addEventListener('mouseenter', () => {
        if (cursor && cursorRing) {
            cursor.style.transform = 'scale(1.5)';
            cursorRing.style.transform = 'scale(1.2)';
        }
    });
    
    button.addEventListener('mouseleave', () => {
        if (cursor && cursorRing) {
            cursor.style.transform = 'scale(1)';
            cursorRing.style.transform = 'scale(1)';
        }
    });
});

function playClickSound() {
    if (clickSound) {
        clickSound.currentTime = 0;
        clickSound.play().catch(() => {
            console.log('Sound playback restricted');
        });
    }
}

// Scroll to top function (for logo click)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    playClickSound();
}

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            playClickSound();
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
            alert('Please fill in all fields!');
        }
    });
}

// Parallax effect for floating shapes
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const floatingCards = document.querySelectorAll('.floating-card');
    
    floatingCards.forEach((card, index) => {
        card.style.transform = `translateY(${scrollY * (0.5 + index * 0.1)}px)`;
    });
});

// Cursor effect enhancement
document.addEventListener('mousedown', () => {
    if (cursor && cursorRing) {
        cursor.style.transform = 'scale(0.7)';
        cursorRing.style.transform = 'scale(1.5)';
    }
});

document.addEventListener('mouseup', () => {
    if (cursor && cursorRing) {
        cursor.style.transform = 'scale(1)';
        cursorRing.style.transform = 'scale(1)';
    }
});

// Touch support for mobile devices
document.addEventListener('touchstart', () => {
    if (cursor && cursorRing) {
        cursor.style.opacity = '0';
        cursorRing.style.opacity = '0';
    }
});

document.addEventListener('touchend', () => {
    if (cursor && cursorRing) {
        cursor.style.opacity = '0.9';
        cursorRing.style.opacity = '0.6';
    }
});

// Logo click to scroll to top
const logo = document.querySelector('.logo');
if (logo) {
    logo.addEventListener('click', scrollToTop);
}

console.log('✨ Ketan Kini Portfolio Loaded! ✨');
