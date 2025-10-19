// Animation Components
class Animations {
    constructor() {
        this.init();
    }

    // Initialize all animations
    init() {
        this.initHeroAnimations();
        this.initScrollAnimations();
        this.initCounterAnimations();
        this.initParallaxEffects();
    }

    // Hero background image cycling and parallax
    initHeroAnimations() {
        const heroImages = document.querySelectorAll('.hero-bg-image');
        let currentImageIndex = 0;
        
        if (heroImages.length > 1) {
            const cycleHeroImages = () => {
                heroImages[currentImageIndex].classList.remove('active');
                currentImageIndex = (currentImageIndex + 1) % heroImages.length;
                heroImages[currentImageIndex].classList.add('active');
            };
            
            // Cycle images every 5 seconds
            setInterval(cycleHeroImages, 5000);
        }

        // Hero parallax effect
        const updateHeroParallax = () => {
            const scrolled = window.pageYOffset;
            const heroHeight = document.querySelector('.hero') ? document.querySelector('.hero').offsetHeight : 0;
            
            if (scrolled <= heroHeight) {
                const parallaxSpeed = scrolled * 0.5;
                heroImages.forEach(img => {
                    img.style.transform = `translateY(${parallaxSpeed}px)`;
                });
            }
        };
        
        window.addEventListener('scroll', updateHeroParallax);
    }

    // Scroll-based animations
    initScrollAnimations() {
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

        // Observe elements for animation
        const animateElements = document.querySelectorAll('.service-item, .portfolio-item, .gallery-item, .stat-item, .review-item');
        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // Counter animations
    initCounterAnimations() {
        // Counter animation for stats
        const animateCounter = (element, target, duration = 2000) => {
            let start = 0;
            const increment = target / (duration / 16);
            
            const updateCounter = () => {
                start += increment;
                if (start < target) {
                    element.textContent = Math.floor(start);
                    requestAnimationFrame(updateCounter);
                } else {
                    element.textContent = target;
                }
            };
            
            updateCounter();
        };

        // Animate counters when hero stats section is visible
        const heroStatsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumbers = entry.target.querySelectorAll('.stat-number');
                    statNumbers.forEach(stat => {
                        const numberElement = stat.childNodes[0];
                        const target = parseInt(numberElement.textContent);
                        if (!isNaN(target)) {
                            animateCounter(numberElement, target);
                        }
                    });
                    heroStatsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        // Animate counters when about stats section is visible
        const aboutStatsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumbers = entry.target.querySelectorAll('.stat-number');
                    statNumbers.forEach(stat => {
                        const target = parseInt(stat.textContent.replace('+', ''));
                        if (!isNaN(target)) {
                            animateCounter(stat, target);
                            // Add back the + sign after animation
                            setTimeout(() => {
                                stat.textContent = stat.textContent + '+';
                            }, 2000);
                        }
                    });
                    aboutStatsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        // Large stat numbers for references page
        const largeStatsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumbers = entry.target.querySelectorAll('.stat-number-large');
                    statNumbers.forEach(stat => {
                        const target = parseInt(stat.textContent.replace(/[^\d]/g, ''));
                        if (!isNaN(target)) {
                            animateCounter(stat, target, 3000);
                            // Add back any suffix after animation
                            setTimeout(() => {
                                const originalText = stat.textContent;
                                if (originalText.includes('+')) {
                                    stat.textContent = stat.textContent + '+';
                                }
                            }, 3000);
                        }
                    });
                    largeStatsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        // Observe different stat sections
        const heroStats = document.querySelector('.hero-stats');
        if (heroStats) {
            heroStatsObserver.observe(heroStats);
        }

        const aboutStats = document.querySelector('.about-stats');
        if (aboutStats) {
            aboutStatsObserver.observe(aboutStats);
        }

        const referencesStats = document.querySelector('.references-stats');
        if (referencesStats) {
            largeStatsObserver.observe(referencesStats);
        }
    }

    // Parallax effects for various sections
    initParallaxEffects() {
        // Advantages section parallax effect
        const updateAdvantagesParallax = () => {
            const advantagesSection = document.querySelector('.advantages');
            const advantagesImage = document.querySelector('.advantages-photo img');
            
            if (advantagesSection && advantagesImage) {
                const rect = advantagesSection.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                // Check if section is in viewport
                if (rect.bottom >= 0 && rect.top <= windowHeight) {
                    // Calculate scroll progress within the section
                    const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
                    const parallaxOffset = scrollProgress * 100; // Adjust multiplier for effect intensity
                    
                    advantagesImage.style.transform = `translateY(${parallaxOffset}px)`;
                }
            }
        };
        
        window.addEventListener('scroll', updateAdvantagesParallax);
    }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const animations = new Animations();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Animations;
}