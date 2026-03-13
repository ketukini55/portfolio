// Custom Cursor JavaScript Interactivity

// Get the click sound audio element
const clickSound = document.getElementById('clickSound');

// Function to play click sound
function playClickSound() {
    if (clickSound) {
        clickSound.currentTime = 0; // Reset sound to start
        clickSound.play().catch(error => console.error('Sound playback error:', error));
    }
}

// Cursor tracking
const cursor = document.createElement('div');
cursor.id = 'customCursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

// Custom cursor scaling on button hover
const buttons = document.querySelectorAll('button, a');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
    });
    button.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
    });
    button.addEventListener('click', playClickSound);
});

// Smooth scroll behavior for anchor links
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// IntersectionObserver for fade-in animations
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
});

cards.forEach(card => observer.observe(card));

// Resume button click handler
const resumeButton = document.getElementById('resumeButton');
if (resumeButton) {
    resumeButton.addEventListener('click', () => {
        playClickSound();
        // Additional resume logic here
    });
}

// Contact form submission validation
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const isValid = /* Your validation logic here */;
        if (isValid) {
            alert('Form submitted successfully!');
            form.reset();
        } else {
            alert('Please fill out all required fields.');
        }
    });
}

// Parallax background effect
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    cursor.style.backgroundPositionY = `${scrollY * 0.5}px`;
});

// Cursor scaling effects on mousedown and mouseup
document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(0.8)';
});
document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
});

// Mobile/tablet detection
if (window.innerWidth < 768) {
    cursor.style.display = 'none';
} else {
    window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
            cursor.style.display = 'none';
        } else {
            cursor.style.display = 'block';
        }
    });
}

console.log('Custom cursor script loaded');