// Enhanced UX/UI Script for AtiendeBot
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize AOS (Animate On Scroll) - Optimized for Performance
    const isMobile = window.innerWidth < 768;
    
    AOS.init({
        duration: isMobile ? 600 : 1000, // Shorter duration on mobile
        easing: 'ease-in-out',
        once: true,
        mirror: false,
        disable: isMobile ? 'phone' : false // Disable on mobile if needed
    });

    // Initialize Particles.js (Optimized for Performance)
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 50, // Reduced from 80 to 50
                density: {
                    enable: true,
                    value_area: 1000 // Increased area for better distribution
                }
            },
            color: {
                value: '#ffffff'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 4, // Reduced from 6 to 4
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('nav a[href^="#"]');

    function highlightNavigation() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // Add scroll-to-top button with better positioning
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
        color: white;
        border: none;
        cursor: pointer;
        font-size: 20px;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 9999;
        box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
    `;
    document.body.appendChild(scrollToTopBtn);

    // Show/hide scroll-to-top button with better visibility
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
            scrollToTopBtn.style.display = 'none';
        }
    });

    // Ensure button is properly positioned on page load
    window.addEventListener('load', function() {
        scrollToTopBtn.style.position = 'fixed';
        scrollToTopBtn.style.bottom = '20px';
        scrollToTopBtn.style.right = '20px';
        scrollToTopBtn.style.zIndex = '9999';
    });

    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add hover effects for scroll-to-top button
    scrollToTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.1)';
        this.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.6)';
    });

    scrollToTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)';
    });

    // Add hover effects to cards
    const cards = document.querySelectorAll('.feature-card, .use-case, .step');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add loading animation
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        opacity: 1;
        transition: opacity 0.5s ease;
    `;
    
    const loadingSpinner = document.createElement('div');
    loadingSpinner.innerHTML = `
        <div style="
            width: 60px;
            height: 60px;
            border: 4px solid rgba(255,255,255,0.3);
            border-top: 4px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        "></div>
        <p style="color: white; margin-top: 20px; font-size: 18px;">Loading AtiendeBot...</p>
    `;
    loadingOverlay.appendChild(loadingSpinner);
    document.body.appendChild(loadingOverlay);

    // Hide loading overlay after page loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            loadingOverlay.style.opacity = '0';
            setTimeout(() => {
                loadingOverlay.remove();
            }, 500);
        }, 1000);
    });

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .feature-card, .use-case, .step {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        nav a.active {
            color: #25D366 !important;
            font-weight: 600;
        }
        
        .scroll-to-top:hover {
            background: #128C7E !important;
            transform: translateY(-2px);
        }
    `;
    document.head.appendChild(style);

    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    const animatedElements = document.querySelectorAll('section, .feature-card, .use-case, .step');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add mobile menu toggle
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.style.cssText = `
        display: none;
        background: none;
        border: none;
        font-size: 24px;
        color: #333;
        cursor: pointer;
        padding: 10px;
    `;

    const nav = document.querySelector('nav');
    nav.appendChild(mobileMenuBtn);

    // Mobile menu functionality
    function toggleMobileMenu() {
        const navUl = document.querySelector('nav ul');
        if (navUl) {
            navUl.classList.toggle('mobile-open');
        }
    }

    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navUl = document.querySelector('nav ul');
            if (navUl) {
                navUl.classList.remove('mobile-open');
            }
        });
    });

    // Advanced Typing Animation with Cursor
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.innerHTML = '<span class="typing-text"></span><span class="typing-cursor">|</span>';
        const typingText = heroTitle.querySelector('.typing-text');
        const typingCursor = heroTitle.querySelector('.typing-cursor');
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                typingText.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                    typingCursor.style.display = 'none';
                }, 1000);
            }
        };
        
        // Start typing animation
        setTimeout(typeWriter, 1000);
        
        // Add blinking cursor animation
        typingCursor.style.animation = 'blink 1s infinite';
    }

    // Add Mouse Follower Effect
    const mouseFollower = document.createElement('div');
    mouseFollower.className = 'mouse-follower';
    mouseFollower.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: rgba(37, 211, 102, 0.3);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        mix-blend-mode: difference;
    `;
    document.body.appendChild(mouseFollower);

    document.addEventListener('mousemove', (e) => {
        mouseFollower.style.left = e.clientX - 10 + 'px';
        mouseFollower.style.top = e.clientY - 10 + 'px';
    });

    // Add Ripple Effect to Buttons
    function createRipple(event) {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Add ripple effect to all buttons
    const buttons = document.querySelectorAll('button, .cta-button, .pricing-btn');
    buttons.forEach(button => {
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.addEventListener('click', createRipple);
    });

    // Add CSS for ripple animation
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);

    // Optimized Parallax Scrolling Effect with Throttling
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        // Remove pricing-card from parallax to fix the random movement issue
        const parallaxElements = document.querySelectorAll('.feature-card, .use-case');
        
        // Only animate elements that are in viewport
        parallaxElements.forEach((element, index) => {
            const rect = element.getBoundingClientRect();
            const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isInViewport) {
                const speed = 0.1 + (index * 0.05); // Reduced speed for better performance
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            }
        });
        
        ticking = false;
    }
    
    function requestParallaxUpdate() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestParallaxUpdate, { passive: true });

    // Fix pricing cards position - ensure they stay in place
    function resetPricingCards() {
        const pricingCards = document.querySelectorAll('.pricing-card');
        pricingCards.forEach(card => {
            card.style.transform = 'none';
        });
    }

    // Reset pricing cards on scroll to prevent random movement
    window.addEventListener('scroll', resetPricingCards, { passive: true });

    // Optimized Magnetic Effect to Cards (Reduced for Performance)
    // Remove pricing-card from magnetic effect to prevent random movement
    const magneticCards = document.querySelectorAll('.feature-card, .testimonial-card');
    
    magneticCards.forEach(card => {
        let mouseMoveTimeout;
        
        card.addEventListener('mousemove', (e) => {
            // Throttle mousemove events
            if (mouseMoveTimeout) return;
            
            mouseMoveTimeout = setTimeout(() => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                // Reduced movement for better performance
                card.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
                mouseMoveTimeout = null;
            }, 16); // ~60fps
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translate(0, 0)';
            if (mouseMoveTimeout) {
                clearTimeout(mouseMoveTimeout);
                mouseMoveTimeout = null;
            }
        });
    });

    // Optimized Text Reveal Animation (Reduced for Performance)
    const textElements = document.querySelectorAll('h2, h3');
    textElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.4s ease';
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 50); // Reduced delay
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(element);
    });

    // Add Loading Animation for Images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transform = 'scale(0.8)';
        img.style.transition = 'all 0.5s ease';
        
        img.onload = () => {
            img.style.opacity = '1';
            img.style.transform = 'scale(1)';
        };
    });

    // Add Hover Sound Effect (Visual Feedback)
    const interactiveElements = document.querySelectorAll('.feature-card, .pricing-card, .cta-button');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.filter = 'brightness(1.1) saturate(1.2)';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.filter = 'brightness(1) saturate(1)';
        });
    });

    // Optimized Scroll Progress Indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #25D366, #128C7E);
        z-index: 10000;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    let progressTicking = false;
    
    function updateProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
        progressTicking = false;
    }
    
    function requestProgressUpdate() {
        if (!progressTicking) {
            requestAnimationFrame(updateProgress);
            progressTicking = true;
        }
    }
    
    window.addEventListener('scroll', requestProgressUpdate, { passive: true });

    // Reduced Floating Elements for Better Performance
    const floatingElements = document.createElement('div');
    floatingElements.className = 'floating-elements';
    floatingElements.innerHTML = `
        <div class="floating-shape shape-1"></div>
        <div class="floating-shape shape-2"></div>
    `;
    document.body.appendChild(floatingElements);

    const floatingStyle = document.createElement('style');
    floatingStyle.textContent = `
        .floating-elements {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        }
        
        .floating-shape {
            position: absolute;
            border-radius: 50%;
            background: rgba(37, 211, 102, 0.08);
            animation: float 8s ease-in-out infinite;
            will-change: transform;
        }
        
        .shape-1 {
            width: 80px;
            height: 80px;
            top: 20%;
            left: 10%;
            animation-delay: 0s;
        }
        
        .shape-2 {
            width: 60px;
            height: 60px;
            top: 60%;
            right: 15%;
            animation-delay: 4s;
        }
    `;
    document.head.appendChild(floatingStyle);

    // Simple hover effects for journey steps
    const journeySteps = document.querySelectorAll('.step');
    journeySteps.forEach(step => {
        step.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        step.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Contact form validation and submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear previous errors
            clearErrors();
            
            // Validate form
            if (validateForm()) {
                submitForm();
            }
        });

        // Real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateField(this);
                }
            });
        });
    }

    function validateForm() {
        let isValid = true;
        const requiredFields = contactForm.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });
        
        return isValid;
    }

    function validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        let isValid = true;
        let errorMessage = '';

        // Remove previous error state
        field.parentElement.classList.remove('error');
        const errorSpan = field.parentElement.querySelector('.error-message');
        errorSpan.textContent = '';

        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
        }

        // Email validation
        if (fieldName === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }

        // Phone validation (if provided)
        if (fieldName === 'phone' && value) {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
                isValid = false;
                errorMessage = 'Please enter a valid phone number';
            }
        }

        // Message length validation
        if (fieldName === 'message' && value && value.length < 10) {
            isValid = false;
            errorMessage = 'Message must be at least 10 characters long';
        }

        if (!isValid) {
            field.parentElement.classList.add('error');
            errorSpan.textContent = errorMessage;
        }

        return isValid;
    }

    function clearErrors() {
        const errorElements = contactForm.querySelectorAll('.error');
        errorElements.forEach(element => {
            element.classList.remove('error');
        });
        
        const errorMessages = contactForm.querySelectorAll('.error-message');
        errorMessages.forEach(message => {
            message.textContent = '';
        });
    }

    function submitForm() {
        const submitBtn = contactForm.querySelector('.submit-btn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        const formSuccess = contactForm.querySelector('.form-success');

        // Show loading state
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Hide form and show success message
            contactForm.style.display = 'none';
            formSuccess.style.display = 'block';
            
            // Scroll to success message
            formSuccess.scrollIntoView({ behavior: 'smooth' });
            
            // Reset form after 5 seconds
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.display = 'block';
                formSuccess.style.display = 'none';
                btnText.style.display = 'inline';
                btnLoading.style.display = 'none';
                submitBtn.disabled = false;
            }, 5000);
        }, 2000);
    }

    // Testimonials carousel
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonialCards.forEach(card => card.classList.remove('active'));
        testimonialDots.forEach(dot => dot.classList.remove('active'));
        
        testimonialCards[index].classList.add('active');
        testimonialDots[index].classList.add('active');
    }

    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentTestimonial = index;
            showTestimonial(index);
        });
    });

    // Auto-rotate testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        showTestimonial(currentTestimonial);
    }, 5000);

    // FAQ accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Pricing card interactions
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (this.classList.contains('featured')) {
                this.style.transform = 'scale(1.05)';
            } else {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });

    // Add parallax effect to hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Add counter animation for statistics (if you want to add stats)
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        updateCounter();
    }

    // Add intersection observer for counter animations
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.counter');
                counters.forEach(counter => {
                    const target = parseInt(counter.dataset.target);
                    animateCounter(counter, target);
                });
                counterObserver.unobserve(entry.target);
            }
        });
    });

    // Add mobile menu styles
    const mobileMenuStyles = `
        @media (max-width: 768px) {
            .mobile-menu-btn {
                display: block !important;
            }
            
            nav ul {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                flex-direction: column;
                padding: 1rem;
                box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                transform: translateY(-100%);
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }
            
            nav ul.mobile-open {
                transform: translateY(0);
                opacity: 1;
                visibility: visible;
            }
            
            nav ul li {
                margin: 0.5rem 0;
            }
            
            .testimonials-container {
                padding: 0 1rem;
            }
            
            .pricing-grid {
                grid-template-columns: 1fr;
                gap: 1rem;
            }
            
            .pricing-card.featured {
                transform: none;
            }
        }
    `;
    
    const mobileStyleSheet = document.createElement('style');
    mobileStyleSheet.textContent = mobileMenuStyles;
    document.head.appendChild(mobileStyleSheet);

    // Add smooth reveal animations for sections
    const revealElements = document.querySelectorAll('.testimonials, .pricing, .faq');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        revealObserver.observe(element);
    });
});

// ===== MOBILE MENU FUNCTIONS =====

// Mobile Menu Functions
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const overlay = document.querySelector('.mobile-menu-overlay');
    
    if (navMenu && mobileMenuBtn && overlay) {
        navMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
}

function closeMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const overlay = document.querySelector('.mobile-menu-overlay');
    
    if (navMenu && mobileMenuBtn && overlay) {
        navMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navMenu = document.querySelector('.nav-menu');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    if (navMenu && navMenu.classList.contains('active')) {
        if (!navMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
            closeMobileMenu();
        }
    }
});

// Close mobile menu on escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeMobileMenu();
    }
});

// Close mobile menu on window resize (if resized to desktop)
window.addEventListener('resize', function() {
    if (window.innerWidth > 900) {
        closeMobileMenu();
    }
});
