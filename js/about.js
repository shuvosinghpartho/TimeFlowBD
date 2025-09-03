document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.main-nav');
    const mainHeader = document.querySelector('.main-header');
    const navLinks = document.querySelectorAll('.main-nav .nav-link, .main-nav .nav-button'); // Include nav-button
    const sections = document.querySelectorAll('section'); // For active nav links
    const scrollToTopBtn = document.querySelector('.scroll-to-top'); // If you add one to about page

    // --- Mobile Navigation Toggle ---
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            document.body.classList.toggle('no-scroll'); // Prevent scrolling when nav is open
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

    // --- Header Scroll Effect ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }

        // Show/hide scroll to top button (if added to about.html)
        if (scrollToTopBtn) {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        }


        // Active navigation link on scroll - adjusted for about page
        let currentActive = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - mainHeader.offsetHeight;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                currentActive = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            // Special handling for the contact link which points to index.html#contact
            if (link.getAttribute('href').includes('contact') && currentActive === 'contact') {
                 link.classList.add('active');
            } else if (link.getAttribute('href').includes(currentActive) && currentActive !== '') {
                link.classList.add('active');
            } else if (link.getAttribute('href').includes('about.html') && currentActive === 'about-us-top') {
                link.classList.add('active'); // Keep About Us active when at the top of about page
            }
            // For general nav-buttons like 'Home', 'Shop' on about page, they are active only on their respective pages
            // If on about.html, 'About Us' should be active.
            if (window.location.pathname.includes('about.html') && link.getAttribute('href').includes('about.html')) {
                link.classList.add('active');
            }
        });
    });

    // --- Smooth Scrolling for Navigation Links ---
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if the link is an internal anchor on the same page
            const href = this.getAttribute('href');
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
            } else if (href.includes('index.html#contact') && window.location.pathname.includes('about.html')) {
                 // For the contact link pointing back to index.html, let default behavior happen
                 // unless we want to smooth scroll directly to it from the about page without full reload
                 // For now, let it navigate normally to index.html#contact
            }
        });
    });

    // --- Scroll to Top Button (if added to about.html) ---
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --- Intersection Observer for Scroll Animations ---
    const animateElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add specific animation classes based on data attributes or class names
                if (entry.target.classList.contains('fade-in-up')) {
                    entry.target.style.animation = `fadeInSlideUp 0.8s ease-out forwards ${entry.target.dataset.delay || '0s'}`;
                } else if (entry.target.classList.contains('fade-in-scale')) {
                    entry.target.style.animation = `fadeInScale 0.8s ease-out forwards ${entry.target.dataset.delay || '0s'}`;
                } else if (entry.target.classList.contains('fade-in-left')) {
                    entry.target.style.animation = `fadeInSlideLeft 0.8s ease-out forwards ${entry.target.dataset.delay || '0s'}`;
                } else if (entry.target.classList.contains('fade-in-right')) {
                    entry.target.style.animation = `fadeInSlideRight 0.8s ease-out forwards ${entry.target.dataset.delay || '0s'}`;
                } else if (entry.target.classList.contains('fade-in')) {
                     entry.target.style.animation = `fadeIn 0.8s ease-out forwards ${entry.target.dataset.delay || '0s'}`;
                }

                // For elements that only need a visible class (e.g., section titles)
                if (entry.target.classList.contains('section-title')) {
                    entry.target.classList.add('is-visible');
                } else if (entry.target.classList.contains('product-card')) {
                    entry.target.classList.add('is-visible');
                } else if (entry.target.classList.contains('about-content')) { // Re-check if this is used on about page
                    entry.target.classList.add('is-visible');
                } else if (entry.target.classList.contains('about-image')) { // Re-check if this is used on about page
                    entry.target.classList.add('is-visible');
                } else if (entry.target.classList.contains('call-to-action') && entry.target.querySelector('h3')) {
                    entry.target.querySelector('h3').classList.add('is-visible');
                    entry.target.querySelector('p').classList.add('is-visible');
                    entry.target.querySelector('form').classList.add('is-visible');
                }
                // Add specific classes for about page elements if needed
                else if (entry.target.classList.contains('value-card')) {
                    entry.target.classList.add('is-visible');
                }


                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Slightly reduce viewport for triggering
    });

    // Attach custom delays from HTML data attributes
    animateElements.forEach(el => {
        const delay = el.classList.value.match(/delay-(\d+)/);
        if (delay) {
            el.dataset.delay = `${parseInt(delay[1]) * 0.2}s`; // Convert delay-1 to 0.2s, delay-2 to 0.4s, etc.
        } else {
            el.dataset.delay = '0s';
        }
        observer.observe(el);
    });

    // Add fadeIn and slide animations to CSS if they are not already there
    // These animations should be defined in style.css, but including them here as a reminder/fallback
    const styleSheet = document.styleSheets[0];
    const addKeyframes = (name, rules) => {
        if (![...styleSheet.cssRules].some(rule => rule.name === name)) {
            styleSheet.insertRule(`@keyframes ${name} { ${rules} }`, styleSheet.cssRules.length);
        }
    };

    // Ensure these are defined either here or in index.css (recommended)
    addKeyframes('fadeInSlideLeft', 'from{opacity:0;transform:translateX(-50px);}to{opacity:1;transform:translateX(0);}');
    addKeyframes('fadeInSlideRight', 'from{opacity:0;transform:translateX(50px);}to{opacity:1;transform:translateX(0);}');
    addKeyframes('fadeIn', 'from{opacity:0;}to{opacity:1;}');
    addKeyframes('fadeInSlideUp', 'from{opacity:0;transform:translateY(50px);}to{opacity:1;transform:translateY(0);}');
    addKeyframes('fadeInScale', 'from{opacity:0;transform:scale(0.9);}to{opacity:1;transform:scale(1);}');

    // Manually trigger scroll event once to apply header styles and active link for initial load
    window.dispatchEvent(new Event('scroll'));
});