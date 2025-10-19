// Main Application File
class SolarTechApp {
    constructor() {
        this.components = {};
        this.init();
    }

    // Initialize the application
    init() {
        this.loadComponents();
        this.initCarousels();
        this.bindEvents();
    }

    // Load all components (they initialize themselves)
    loadComponents() {
        // Components auto-initialize when their scripts are loaded
        console.log('SOLARTECH App initialized');
    }

    // Initialize carousel/slider functionality
    initCarousels() {
        this.initServicesCarousel();
        this.initGaleriaSlider();
    }

    // Services carousel functionality
    initServicesCarousel() {
        let currentSlide = 0;
        const carousel = document.querySelector('.services-carousel');
        const cards = document.querySelectorAll('.services-carousel .service-card');
        const prevBtn = document.querySelector('.carousel-prev');
        const nextBtn = document.querySelector('.carousel-next');
        
        if (!carousel || cards.length === 0) return;

        const cardWidth = cards[0].offsetWidth + 40; // card width + gap
        const maxSlides = Math.max(0, cards.length - 3); // Show 3 cards at a time, 4th partially visible
        
        const updateCarousel = () => {
            const translateX = -(currentSlide * cardWidth);
            carousel.style.transform = `translateX(${translateX}px)`;
            
            // Update button states
            if (prevBtn) prevBtn.disabled = currentSlide === 0;
            if (nextBtn) nextBtn.disabled = currentSlide >= maxSlides;
        };
        
        const nextSlide = () => {
            if (currentSlide < maxSlides) {
                currentSlide++;
                updateCarousel();
            }
        };
        
        const prevSlide = () => {
            if (currentSlide > 0) {
                currentSlide--;
                updateCarousel();
            }
        };
        
        // Event listeners
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        
        // Initialize carousel
        updateCarousel();
        
        // Handle window resize
        window.addEventListener('resize', () => {
            const newCardWidth = cards[0].offsetWidth + 40;
            if (newCardWidth !== cardWidth) {
                location.reload(); // Simple solution for responsive updates
            }
        });
    }

    // Galeria slider functionality
    initGaleriaSlider() {
        let currentGaleriaSlide = 0;
        const galeriaSlider = document.querySelector('.galeria-slider');
        const galeriaItems = document.querySelectorAll('.galeria-slider .galeria-item');
        const galeriaPrevBtn = document.querySelector('.galeria-prev');
        const galeriaNextBtn = document.querySelector('.galeria-next');
        
        if (!galeriaSlider || galeriaItems.length === 0) return;

        const itemWidth = galeriaItems[0].offsetWidth + 30; // item width + gap
        const maxSlides = Math.max(0, galeriaItems.length - 4); // Show 4 items at once
        
        const updateGaleriaSlider = () => {
            const translateX = -(currentGaleriaSlide * itemWidth);
            galeriaSlider.style.transform = `translateX(${translateX}px)`;
            
            // Update button states
            if (galeriaPrevBtn) galeriaPrevBtn.disabled = currentGaleriaSlide === 0;
            if (galeriaNextBtn) galeriaNextBtn.disabled = currentGaleriaSlide >= maxSlides;
        };
        
        const nextGaleriaSlide = () => {
            if (currentGaleriaSlide < maxSlides) {
                currentGaleriaSlide++;
                updateGaleriaSlider();
            }
        };
        
        const prevGaleriaSlide = () => {
            if (currentGaleriaSlide > 0) {
                currentGaleriaSlide--;
                updateGaleriaSlider();
            }
        };
        
        // Event listeners
        if (galeriaNextBtn) galeriaNextBtn.addEventListener('click', nextGaleriaSlide);
        if (galeriaPrevBtn) galeriaPrevBtn.addEventListener('click', prevGaleriaSlide);
        
        // Initialize slider
        updateGaleriaSlider();
    }

    // Bind global events
    bindEvents() {
        // Gallery filter functionality (if implemented in future)
        this.initGalleryFilters();
        
        // Mobile menu outside click
        document.addEventListener('click', (e) => {
            const navMenu = document.querySelector('.nav-menu');
            const hamburger = document.querySelector('.hamburger');
            const navbar = document.querySelector('.navbar-main');
            
            if (navMenu && hamburger && navMenu.classList.contains('active')) {
                if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                    
                    // Remove scrolled class when closing menu
                    if (navbar && window.scrollY <= (window.innerHeight * 0.3)) {
                        navbar.classList.remove('scrolled');
                    }
                }
            }
        });
    }

    // Gallery filter functionality
    initGalleryFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        if (filterBtns.length === 0 || galleryItems.length === 0) return;

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                const filterValue = btn.getAttribute('data-filter');
                
                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                        // Trigger animation
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 100);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // Utility function to detect mobile devices
    isMobile() {
        return window.innerWidth <= 768;
    }

    // Utility function to detect if element is in viewport
    isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Smooth scroll to element
    scrollToElement(element, offset = 0) {
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }

    // Debounce function for performance optimization
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Throttle function for scroll events
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new SolarTechApp();
    
    // Make app instance globally available if needed
    window.SolarTechApp = app;
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SolarTechApp;
}