document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav .nav-link, .main-nav .nav-button');
    const mainHeader = document.querySelector('.main-header');
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const faqQuestions = document.querySelectorAll('.faq-question');
    const scrollToTopBtn = document.querySelector('.scroll-to-top');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }

        if (scrollToTopBtn) {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkHref = link.getAttribute('href');
            const currentPath = window.location.pathname;

            if (linkHref.includes(currentPath.substring(currentPath.lastIndexOf('/') + 1))) {
                link.classList.add('active');
            }
        });
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href;
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - mainHeader.offsetHeight;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            clearErrors();
            if (validateForm()) {
                simulateFormSubmission();
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
            contactForm.reset();
        }, 2000);
    }

    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                
                document.querySelectorAll('.faq-answer.active').forEach(activeAnswer => {
                    if (activeAnswer !== answer) {
                        activeAnswer.classList.remove('active');
                        activeAnswer.style.maxHeight = null;
                        activeAnswer.previousElementSibling.classList.remove('active');
                    }
                });
                
                question.classList.toggle('active');
                if (answer.classList.contains('active')) {
                    answer.classList.remove('active');
                    answer.style.maxHeight = null;
                } else {
                    answer.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + "px";
                }
            });
        });
    }

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
