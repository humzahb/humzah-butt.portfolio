// ===============================
// Navigation & Scroll Effects
// ===============================

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}); 

// Close mobile menu when clicking nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active navigation link based on scroll position
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===============================
// Smooth Scroll
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===============================
// Skills Animation on Scroll
// ===============================
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    skillObserver.observe(skillsSection);
}

// ===============================
// Fade In Animation on Scroll
// ===============================
const fadeElements = document.querySelectorAll('.project-card, .timeline-item, .education-card, .certifications-card');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(30px)';
            entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);

            fadeObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeElements.forEach(el => fadeObserver.observe(el));

// ===============================
// Contact Form Handling
// ===============================
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // You can integrate with email services like EmailJS, Formspree, or backend
    // For now, we'll show a success message

    // Example: Using EmailJS (you'll need to set up an account)
    // emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    //     from_name: name,
    //     from_email: email,
    //     subject: subject,
    //     message: message
    // }).then(() => {
    //     alert('Message sent successfully!');
    //     contactForm.reset();
    // });

    // Simple alert for demonstration
    alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon at ${email}.`);
    contactForm.reset();
});

// ===============================
// Dynamic Year in Footer
// ===============================
const yearElements = document.querySelectorAll('.footer p');
yearElements.forEach(el => {
    if (el.textContent.includes('2025')) {
        el.textContent = el.textContent.replace('2025', new Date().getFullYear());
    }
});

// ===============================
// Typing Effect for Hero Section (Optional Enhancement)
// ===============================
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const originalText = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < originalText.length) {
            heroSubtitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    // Start typing effect after page loads
    window.addEventListener('load', () => {
        setTimeout(typeWriter, 500);
    });
}

// ===============================
// Stats Counter Animation
// ===============================
const stats = document.querySelectorAll('.stat h3');
const statsSection = document.querySelector('.hero-stats');

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            stats.forEach(stat => {
                const target = parseInt(stat.textContent);
                let count = 0;
                const increment = target / 50;

                const updateCount = () => {
                    if (count < target) {
                        count += increment;
                        stat.textContent = Math.ceil(count) + (stat.textContent.includes('+') ? '+' : '') + (stat.textContent.includes('%') ? '%' : '');
                        requestAnimationFrame(updateCount);
                    } else {
                        stat.textContent = target + (stat.textContent.includes('+') ? '+' : '') + (stat.textContent.includes('%') ? '%' : '');
                    }
                };

                updateCount();
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

if (statsSection) {
    statsObserver.observe(statsSection);
}

// ===============================
// Page Load Animation
// ===============================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===============================
// Prevent FOUC (Flash of Unstyled Content)
// ===============================
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.visibility = 'visible';
});

// ===============================
// Console Welcome Message
// ===============================
console.log('%c👋 Welcome to My Portfolio!', 'color: #00a8e8; font-size: 20px; font-weight: bold;');
console.log('%cLooking to hire an IT Support Specialist? Let\'s connect!', 'color: #718096; font-size: 14px;');
console.log('%cEmail: your.email@example.com', 'color: #0066cc; font-size: 12px;');