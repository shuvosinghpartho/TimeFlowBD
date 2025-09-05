document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.main-nav');
    const mainHeader = document.querySelector('.main-header');
    const navLinks = document.querySelectorAll('.main-nav .nav-link, .main-nav .nav-button');
    const sections = document.querySelectorAll('section');
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
            if (link.getAttribute('href').includes('contact') && currentActive === 'contact') {
                link.classList.add('active');
            } else if (link.getAttribute('href').includes(currentActive) && currentActive !== '') {
                link.classList.add('active');
            } else if (link.getAttribute('href').includes('about.html') && currentActive === 'about-us-top') {
                link.classList.add('active');
            }
            if (window.location.pathname.includes('about.html') && link.getAttribute('href').includes('about.html')) {
                link.classList.add('active');
            }
        });
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
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

    const animateElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
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

                if (entry.target.classList.contains('section-title')) {
                    entry.target.classList.add('is-visible');
                } else if (entry.target.classList.contains('product-card')) {
                    entry.target.classList.add('is-visible');
                } else if (entry.target.classList.contains('about-content')) {
                    entry.target.classList.add('is-visible');
                } else if (entry.target.classList.contains('about-image')) {
                    entry.target.classList.add('is-visible');
                } else if (entry.target.classList.contains('call-to-action') && entry.target.querySelector('h3')) {
                    entry.target.querySelector('h3').classList.add('is-visible');
                    entry.target.querySelector('p').classList.add('is-visible');
                    entry.target.querySelector('form').classList.add('is-visible');
                } else if (entry.target.classList.contains('value-card')) {
                    entry.target.classList.add('is-visible');
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

    const styleSheet = document.styleSheets[0];
    const addKeyframes = (name, rules) => {
        if (![...styleSheet.cssRules].some(rule => rule.name === name)) {
            styleSheet.insertRule(`@keyframes ${name} { ${rules} }`, styleSheet.cssRules.length);
        }
    };

    addKeyframes('fadeInSlideLeft', 'from{opacity:0;transform:translateX(-50px);}to{opacity:1;transform:translateX(0);}');
    addKeyframes('fadeInSlideRight', 'from{opacity:0;transform:translateX(50px);}to{opacity:1;transform:translateX(0);}');
    addKeyframes('fadeIn', 'from{opacity:0;}to{opacity:1;}');
    addKeyframes('fadeInSlideUp', 'from{opacity:0;transform:translateY(50px);}to{opacity:1;transform:translateY(0);}');
    addKeyframes('fadeInScale', 'from{opacity:0;transform:scale(0.9);}to{opacity:1;transform:scale(1);}');

    window.dispatchEvent(new Event('scroll'));
});
