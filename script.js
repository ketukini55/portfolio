/* ============================================
   CUSTOM CURSOR
   ============================================ */
const cursor = document.querySelector('.cursor');
const cursorRing = document.querySelector('.cursor-ring');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorRing.style.left = e.clientX - 18 + 'px';
    cursorRing.style.top = e.clientY - 18 + 'px';
});

document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    cursorRing.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    cursorRing.style.opacity = '0';
});

/* ============================================
   HAMBURGER MENU TOGGLE
   ============================================ */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

/* ============================================
   NAVBAR SCROLL EFFECT
   ============================================ */
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

/* ============================================
   SCROLL TO TOP
   ============================================ */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/* ============================================
   CONTACT FORM HANDLER
   ============================================ */
function handleContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;
    
    // Validate form
    if (!name || !email || !message) {
        alert('Please fill all fields');
        return;
    }
    
    // Create mailto link
    const mailtoLink = `mailto:ketankini0708@gmail.com?subject=New Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Reset form
    form.reset();
}

/* ============================================
   RESUME DOWNLOAD
   ============================================ */
document.getElementById('resumeBtn').addEventListener('click', function() {
    // Replace 'your-resume.pdf' with your actual resume file
    const resumeUrl = 'resume.pdf'; // Place your resume.pdf in the root folder
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Ketan_Kini_Resume.pdf';
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

/* ============================================
   BUTTON CLICK SOUND EFFECT
   ============================================ */
const clickSound = document.getElementById('clickSound');

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        // Play sound effect
        if (clickSound) {
            clickSound.currentTime = 0;
            clickSound.play().catch(err => console.log('Sound play failed:', err));
        }
    });
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        // Play sound effect
        if (clickSound) {
            clickSound.currentTime = 0;
            clickSound.play().catch(err => console.log('Sound play failed:', err));
        }
    });
});

/* ============================================
   SCROLL REVEAL ANIMATION
   ============================================ */
const revealElements = document.querySelectorAll('.portfolio-card, .skill-item, .certificate-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

revealElements.forEach(element => {
    observer.observe(element);
});

/* ============================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ============================================
   PAGE LOAD ANIMATION
   ============================================ */
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

/* ============================================
   DARK MODE TOGGLE (Optional)
   ============================================ */
// Uncomment if you want to add dark mode functionality
/*
const darkModeToggle = document.createElement('button');
darkModeToggle.innerHTML = '🌙';
darkModeToggle.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 999;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
`;

darkModeToggle.addEventListener('mouseover', () => {
    darkModeToggle.style.transform = 'scale(1.1)';
});

darkModeToggle.addEventListener('mouseout', () => {
    darkModeToggle.style.transform = 'scale(1)';
});

document.body.appendChild(darkModeToggle);
*/
