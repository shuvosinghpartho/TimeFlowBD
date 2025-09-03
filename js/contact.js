document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.main-nav');
    // Include nav-button for comprehensive coverage of all header links
    const navLinks = document.querySelectorAll('.main-nav .nav-link, .main-nav .nav-button');
    const mainHeader = document.querySelector('.main-header');
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const faqQuestions = document.querySelectorAll('.faq-question');
    const scrollToTopBtn = document.querySelector('.scroll-to-top'); // If you add one to contact page

    // --- Mobile Navigation Toggle ---
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });

        // Close nav when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
    }

    // --- Header Scroll Effect & Active Nav Link ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }

        // Show/hide scroll to top button (if added)
        if (scrollToTopBtn) {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        }

        // Set active navigation link based on current page path
        // This is more reliable for multi-page nav
        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkHref = link.getAttribute('href');
            const currentPath = window.location.pathname;

            if (linkHref.includes(currentPath.substring(currentPath.lastIndexOf('/') + 1))) {
                link.classList.add('active');
            }
            // Special handling for the contact link if it's an anchor on index page
            // (though for contact.html, 'contact.html' itself makes it active)
            // If the "Contact" in header points to index.html#contact, you'd need more complex logic.
            // For now, assuming direct link to contact.html
        });
    });

    // --- Smooth Scrolling for Navigation Links ---
    // This is primarily for internal page anchors.
    // External links will perform default navigation.
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Check if it's an internal anchor link on the current page
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href;
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - mainHeader.offsetHeight; // Adjust for fixed header
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
            // For links like 'index.html#contact', let default navigation happen
        });
    });

    // --- Scroll to Top Button (if added to contact.html) ---
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --- Form Validation and Submission ---
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            clearErrors(); // Reset previous errors
            
            if (validateForm()) {
                simulateFormSubmission(); // Simulate form submission
            }
        });
    }

    function validateForm() {
        let isValid = true;
        
        const name = document.getElementById('name');
        if (!name.value.trim()) {
            showError('nameError', 'Please enter your name.');
            isValid = false;
        }
        
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            showError('emailError', 'Please enter your email address.');
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            showError('emailError', 'Please enter a valid email address.');
            isValid = false;
        }
        
        const subject = document.getElementById('subject');
        if (!subject.value.trim()) {
            showError('subjectError', 'Please enter a subject.');
            isValid = false;
        }
        
        const message = document.getElementById('message');
        if (!message.value.trim()) {
            showError('messageError', 'Please enter your message.');
            isValid = false;
        } else if (message.value.trim().length < 10) {
            showError('messageError', 'Message should be at least 10 characters long.');
            isValid = false;
        }
        
        return isValid;
    }

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
    }

    function clearErrors() {
        document.querySelectorAll('.error-message').forEach(element => {
            element.textContent = '';
        });
    }

    function simulateFormSubmission() {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            contactForm.style.display = 'none';
            formSuccess.style.display = 'flex';
            
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            contactForm.reset(); // Clear form fields
        }, 2000);
    }

    // --- FAQ Accordion Functionality ---
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                
                // Close other open FAQs
                document.querySelectorAll('.faq-answer.active').forEach(activeAnswer => {
                    if (activeAnswer !== answer) {
                        activeAnswer.classList.remove('active');
                        activeAnswer.style.maxHeight = null; // Reset height
                        activeAnswer.previousElementSibling.classList.remove('active');
                    }
                });
                
                // Toggle current FAQ
                question.classList.toggle('active');
                if (answer.classList.contains('active')) {
                    answer.classList.remove('active');
                    answer.style.maxHeight = null; // Collapse
                } else {
                    answer.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + "px"; // Expand to content height
                }
            });
        });
    }

    // --- Intersection Observer for Scroll Animations ---
    const animateElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('fade-in-up')) {
                    entry.target.style.animation = `fadeInSlideUp 0.8s ease-out forwards ${entry.target.dataset.delay || '0s'}`;
                } else if (entry.target.classList.contains('fade-in-left')) {
                    entry.target.style.animation = `fadeInSlideLeft 0.8s ease-out forwards ${entry.target.dataset.delay || '0s'}`;
                } else if (entry.target.classList.contains('fade-in-right')) {
                    entry.target.style.animation = `fadeInSlideRight 0.8s ease-out forwards ${entry.target.dataset.delay || '0s'}`;
                }
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animateElements.forEach(el => {
        const delay = el.classList.value.match(/delay-(\d+)/);
        if (delay) {
            el.dataset.delay = `${parseInt(delay[1]) * 0.2}s`;
        } else {
              el.dataset.delay = '0s';
 }
observer.observe(el);
});
});