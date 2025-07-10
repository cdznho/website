// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

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
    });
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Newsletter form submission
function initializeNewsletterForm() {
    const newsletterForm = document.querySelector('.subscription-form');
    if (newsletterForm) {
        console.log('Newsletter form found, initializing...');
        
        newsletterForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            console.log('Newsletter form submitted');
            
            const emailInput = this.querySelector('input[type="email"]');
            const submitButton = this.querySelector('button[type="submit"]');
            const email = emailInput ? emailInput.value.trim() : '';
            
            console.log('Email input value:', email);
            
            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailRegex.test(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Show loading state
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Subscribing...';
            submitButton.disabled = true;
            
            try {
                // For GitHub Pages, store in localStorage and show success
                console.log('Current localStorage before:', localStorage.getItem('newsletter-subscribers'));
                const subscribers = JSON.parse(localStorage.getItem('newsletter-subscribers') || '[]');
                console.log('Parsed subscribers:', subscribers);
                
                const existingSubscriber = subscribers.find(sub => sub.email.toLowerCase() === email.toLowerCase());
                
                if (existingSubscriber) {
                    console.log('Existing subscriber found:', existingSubscriber);
                    showNotification('You are already subscribed to our newsletter.', 'info');
                } else {
                    const newSubscriber = {
                        id: Date.now().toString(),
                        email: email.toLowerCase(),
                        subscribedAt: new Date().toISOString(),
                        status: 'active',
                        source: 'newsletter'
                    };
                    
                    subscribers.push(newSubscriber);
                    
                    // Try to save to localStorage
                    try {
                        localStorage.setItem('newsletter-subscribers', JSON.stringify(subscribers));
                        console.log('Saved to localStorage successfully');
                        console.log('localStorage after save:', localStorage.getItem('newsletter-subscribers'));
                        
                        // Verify it was saved
                        const verification = JSON.parse(localStorage.getItem('newsletter-subscribers') || '[]');
                        console.log('Verification - subscribers count:', verification.length);
                        
                    } catch (storageError) {
                        console.error('LocalStorage save error:', storageError);
                        showNotification('Error saving subscription. Please try again.', 'error');
                        return;
                    }
                    
                    console.log('Newsletter subscriber added:', newSubscriber);
                    showNotification('Thank you for subscribing! You\'ll receive our latest updates soon.', 'success');
                    this.reset();
                }
            } catch (error) {
                console.error('Subscription error:', error);
                showNotification('Something went wrong. Please try again later.', 'error');
            } finally {
                // Reset button state
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
        });
    } else {
        console.warn('Newsletter form not found - retrying in 1 second...');
        setTimeout(initializeNewsletterForm, 1000);
    }
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Get background color based on type
    let backgroundColor;
    switch (type) {
        case 'success':
            backgroundColor = '#10b981';
            break;
        case 'error':
            backgroundColor = '#ef4444';
            break;
        case 'info':
            backgroundColor = '#3b82f6';
            break;
        default:
            backgroundColor = '#2563eb';
    }
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${backgroundColor};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 1001;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 350px;
        font-size: 0.9rem;
        line-height: 1.4;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animations
document.addEventListener('DOMContentLoaded', () => {
    // Set initial styles for animation
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
    
    // Animate cards on scroll
    document.querySelectorAll('.article-card, .course-card, .stat-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Add loading state to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Don't add loading state to anchor links
        if (this.getAttribute('href') && this.getAttribute('href').startsWith('#')) {
            return;
        }
        
        // Add loading state for external links or form submissions
        if (!this.classList.contains('loading')) {
            const originalText = this.textContent;
            this.classList.add('loading');
            this.textContent = 'Loading...';
            this.style.opacity = '0.7';
            this.style.cursor = 'not-allowed';
            
            // Remove loading state after 2 seconds (simulated)
            setTimeout(() => {
                this.classList.remove('loading');
                this.textContent = originalText;
                this.style.opacity = '1';
                this.style.cursor = 'pointer';
            }, 2000);
        }
    });
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect on page load
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 80);
        }, 500);
    }
});

// Statistics counter animation
function animateCounter(element, target, duration = 2000) {
    const start = parseInt(element.textContent) || 0;
    const increment = (target - start) / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        if (target >= 1000) {
            element.textContent = Math.floor(current / 1000) + 'k+';
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

// Initialize counters when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat h3, .stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.replace(/[^0-9]/g, ''));
                if (number) {
                    animateCounter(stat, number);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Stripe Payment Integration
function initializeStripe() {
    // Note: Replace with your actual Stripe publishable key
    const stripe = Stripe('pk_test_your_publishable_key_here');
    
    // Course pricing
    const coursePrices = {
        'ai-seo': {
            price: 49,
            name: 'AI SEO for Large Enterprises',
            description: 'Transform your SEO strategy with AI-powered techniques'
        }
    };
    
    // Handle course enrollment
    document.querySelectorAll('.course-enroll-btn').forEach(button => {
        button.addEventListener('click', async (e) => {
            e.preventDefault();
            const courseId = button.getAttribute('data-course');
            const course = coursePrices[courseId];
            
            if (!course) {
                showNotification('Course not found. Please try again.', 'error');
                return;
            }
            
            // Show loading state
            button.textContent = 'Processing...';
            button.disabled = true;
            
            try {
                // Create checkout session
                const response = await fetch('/create-checkout-session', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        courseId: courseId,
                        courseName: course.name,
                        price: course.price,
                        description: course.description
                    }),
                });
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                
                const session = await response.json();
                
                // Redirect to Stripe Checkout
                const result = await stripe.redirectToCheckout({
                    sessionId: session.id
                });
                
                if (result.error) {
                    showNotification(result.error.message, 'error');
                }
            } catch (error) {
                console.error('Error:', error);
                showNotification('Payment system temporarily unavailable. Please try again later.', 'error');
            } finally {
                // Reset button state
                button.textContent = 'Enroll Now';
                button.disabled = false;
            }
        });
    });
}

// Email collection modal
function showEmailModal(courseId, courseName, callback) {
    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;
    
    // Create modal content
    const modal = document.createElement('div');
    modal.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 12px;
        max-width: 400px;
        width: 90%;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    `;
    
    modal.innerHTML = `
        <h3 style="margin-bottom: 1rem; color: #1e293b;">Enroll in ${courseName}</h3>
        <p style="margin-bottom: 1.5rem; color: #64748b;">Please enter your email address to proceed with enrollment.</p>
        <form id="email-form">
            <input type="email" id="modal-email" placeholder="Enter your email address" required 
                   style="width: 100%; padding: 0.75rem; border: 2px solid #e2e8f0; border-radius: 8px; margin-bottom: 1rem; font-size: 1rem;">
            <div style="display: flex; gap: 1rem; justify-content: flex-end;">
                <button type="button" id="modal-cancel" style="padding: 0.75rem 1.5rem; border: 2px solid #e2e8f0; background: white; color: #64748b; border-radius: 8px; cursor: pointer;">Cancel</button>
                <button type="submit" id="modal-submit" style="padding: 0.75rem 1.5rem; border: none; background: #2563eb; color: white; border-radius: 8px; cursor: pointer;">Continue to Payment</button>
            </div>
        </form>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    // Focus on email input
    const emailInput = modal.querySelector('#modal-email');
    emailInput.focus();
    
    // Handle form submission
    const form = modal.querySelector('#email-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!email || !emailRegex.test(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Close modal and proceed
        document.body.removeChild(overlay);
        callback(email);
    });
    
    // Handle cancel
    modal.querySelector('#modal-cancel').addEventListener('click', () => {
        document.body.removeChild(overlay);
    });
    
    // Handle overlay click
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
        }
    });
    
    // Handle escape key
    const escapeHandler = (e) => {
        if (e.key === 'Escape') {
            document.body.removeChild(overlay);
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);
}

// Email instruction modal for course enrollment
function showEmailInstructionModal() {
    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;
    
    // Create modal content
    const modal = document.createElement('div');
    modal.style.cssText = `
        background: white;
        padding: 2.5rem;
        border-radius: 12px;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        text-align: center;
    `;
    
    modal.innerHTML = `
        <h3 style="margin-bottom: 1rem; color: #1e293b; font-size: 1.5rem;">AI SEO for Large Enterprises</h3>
        <p style="margin-bottom: 1.5rem; color: #64748b; line-height: 1.6;">To enroll in this course, please send an email to:</p>
        
        <div style="background: #f8fafc; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem; border: 2px solid #e2e8f0;">
            <p style="margin: 0 0 0.5rem 0; color: #1e293b; font-weight: 600;">Email:</p>
            <p style="margin: 0 0 1rem 0; color: #2563eb; font-size: 1.1rem; font-weight: 600;">cedric@agenticautomates.com</p>
            
            <p style="margin: 0 0 0.5rem 0; color: #1e293b; font-weight: 600;">Subject Line:</p>
            <p style="margin: 0; color: #2563eb; font-size: 1.1rem; font-weight: 600;">AI SEO course for Large Enterprises</p>
        </div>
        
        <p style="margin-bottom: 1.5rem; color: #64748b; font-size: 0.9rem; line-height: 1.5;">
            Include your name and any specific questions about the course. You'll receive enrollment details and payment instructions within 24 hours.
        </p>
        
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <button id="copy-email" style="padding: 0.75rem 1.5rem; border: 2px solid #2563eb; background: white; color: #2563eb; border-radius: 8px; cursor: pointer; font-weight: 600;">Copy Email</button>
            <button id="copy-subject" style="padding: 0.75rem 1.5rem; border: 2px solid #2563eb; background: white; color: #2563eb; border-radius: 8px; cursor: pointer; font-weight: 600;">Copy Subject</button>
            <button id="modal-close" style="padding: 0.75rem 1.5rem; border: none; background: #2563eb; color: white; border-radius: 8px; cursor: pointer; font-weight: 600;">Close</button>
        </div>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    // Handle copy email button
    modal.querySelector('#copy-email').addEventListener('click', () => {
        navigator.clipboard.writeText('cedric@agenticautomates.com').then(() => {
            showNotification('Email address copied to clipboard!', 'success');
        }).catch(() => {
            showNotification('Could not copy email. Please copy manually.', 'error');
        });
    });
    
    // Handle copy subject button
    modal.querySelector('#copy-subject').addEventListener('click', () => {
        navigator.clipboard.writeText('AI SEO course for Large Enterprises').then(() => {
            showNotification('Subject line copied to clipboard!', 'success');
        }).catch(() => {
            showNotification('Could not copy subject. Please copy manually.', 'error');
        });
    });
    
    // Handle close button
    modal.querySelector('#modal-close').addEventListener('click', () => {
        document.body.removeChild(overlay);
    });
    
    // Handle overlay click
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
        }
    });
    
    // Handle escape key
    const escapeHandler = (e) => {
        if (e.key === 'Escape') {
            document.body.removeChild(overlay);
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);
}

// Enhanced payment handler with direct link
function handlePaymentWithEmail() {
    document.querySelectorAll('.course-enroll-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const courseId = button.getAttribute('data-course');
            
            if (courseId === 'ai-seo') {
                // Redirect to AI SEO course page
                window.open('https://ai-seo-future-grab.lovable.app/', '_blank');
            } else {
                showNotification('Course enrollment available soon!', 'info');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing components...');
    
    const aboutSection = document.querySelector('#about');
    const communitySection = document.querySelector('#community');
    
    if (aboutSection) statsObserver.observe(aboutSection);
    if (communitySection) statsObserver.observe(communitySection);
    
    // Initialize newsletter form
    initializeNewsletterForm();
    
    // Initialize payment handling with email collection
    handlePaymentWithEmail();
    
    // Uncomment when Stripe is configured:
    // initializeStripe();
});