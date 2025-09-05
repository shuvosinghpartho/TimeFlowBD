document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.main-nav');
    const mainHeader = document.querySelector('.main-header');
    const navLinks = document.querySelectorAll('.main-nav .nav-link');
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

        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
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
            if (link.getAttribute('href').includes(currentActive)) {
                link.classList.add('active');
            }
        });
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            const offsetTop = targetSection.offsetTop - mainHeader.offsetHeight; // Adjust for fixed header

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
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


    const video = document.getElementById('advertisementVideo');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const muteUnmuteBtn = document.getElementById('muteUnmuteBtn');

    if (video) {

        video.play().catch(error => {
            console.log("Autoplay prevented:", error);
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i> Play';
        });
        video.muted = true;
        muteUnmuteBtn.innerHTML = '<i class="fas fa-volume-up"></i> Mute';

        playPauseBtn.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                playPauseBtn.innerHTML = '<i class="fas fa-pause"></i> Pause';
            } else {
                video.pause();
                playPauseBtn.innerHTML = '<i class="fas fa-play"></i> Play';
            }
        });

        muteUnmuteBtn.addEventListener('click', () => {
            video.muted = !video.muted;
            if (video.muted) {
                muteUnmuteBtn.innerHTML = '<i class="fas fa-volume-mute"></i> Unmute';
            } else {
                muteUnmuteBtn.innerHTML = '<i class="fas fa-volume-up"></i> Mute';
            }
        });


        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {

                    if (playPauseBtn.innerHTML.includes('Play')) {

                    } else {
                        video.play();
                    }
                } else {

                    video.pause();
                }
            });
        }, { threshold: 0.5 });

        videoObserver.observe(video);
    }
});