// Navigation Component
class Navigation {
    constructor() {
        this.navbar = null;
        this.hamburger = null;
        this.navMenu = null;
        this.init();
    }

    // Function to determine if we're on a subpage
    isSubpage() {
        const currentPath = window.location.pathname;
        return currentPath.includes('/subpages/') ||
               currentPath.includes('sluzby.html') ||
               currentPath.includes('certifikaty.html') ||
               currentPath.includes('produkty.html') ||
               currentPath.includes('zeleny-dom.html') ||
               currentPath.includes('referencie.html') ||
               currentPath.includes('kontakt.html');
    }

    // Function to determine if we're on a product detail page (nested deeper)
    isProductDetailPage() {
        const currentPath = window.location.pathname;
        return currentPath.includes('/subpages/produkty/');
    }

    // Main Navigation Template
    getNavigationHTML() {
        return `
        <!-- Scroll Progress Indicator -->
        <div class="scroll-progress">
            <div class="scroll-progress-bar"></div>
        </div>

        <!-- Navigation -->
        <nav class="navbar navbar-main">
            <div class="nav-container">
                <div class="nav-logo">
                    <a href="index.html" class="logo-link">
                        <img src="logo.png" alt="SOLARTECH Logo" class="logo-image">
                    </a>
                </div>
                <ul class="nav-menu">
                    <li><a href="index.html" class="nav-link">Domov</a></li>
                    <li><a href="subpages/sluzby.html" class="nav-link">Služby</a></li>
                    <li><a href="subpages/certifikaty.html" class="nav-link">Certifikáty</a></li>
                    <li><a href="subpages/produkty.html" class="nav-link">Produkty</a></li>
                    <li><a href="subpages/zeleny-dom.html" class="nav-link">Zelený dom</a></li>
                    <li><a href="subpages/referencie.html" class="nav-link">Referencie</a></li>
                    <li><a href="subpages/kontakt.html" class="nav-link">Kontakt</a></li>
                </ul>
                
                <!-- Mobile Navigation Structure -->
                <div class="mobile-nav-sidebar">
                    <div class="mobile-nav-header">
                        <div class="mobile-nav-container">
                            <div class="nav-logo">
                                <a href="index.html" class="logo-link">
                                    <img src="logo.png" alt="SOLARTECH Logo" class="logo-image">
                                </a>
                            </div>
                            <button class="mobile-close-btn" id="mobile-close">&times;</button>
                        </div>
                    </div>
                    <div class="mobile-nav-links">
                        <div class="mobile-nav-container">
                            <div style="display: flex; flex-direction: column; width: 100%;">
                                <a href="index.html" class="nav-link mobile-nav-link">Domov</a>
                                <a href="subpages/sluzby.html" class="nav-link mobile-nav-link">Služby</a>
                                <a href="subpages/certifikaty.html" class="nav-link mobile-nav-link">Certifikáty</a>
                                <a href="subpages/produkty.html" class="nav-link mobile-nav-link">Produkty</a>
                                <a href="subpages/zeleny-dom.html" class="nav-link mobile-nav-link">Zelený dom</a>
                                <a href="subpages/referencie.html" class="nav-link mobile-nav-link">Referencie</a>
                                <a href="subpages/kontakt.html" class="nav-link mobile-nav-link">Kontakt</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>`;
    }

    // Subpage Navigation Template with relative paths
    getSubpageNavigationHTML() {
        return `
        <!-- Scroll Progress Indicator -->
        <div class="scroll-progress">
            <div class="scroll-progress-bar"></div>
        </div>

        <!-- Navigation -->
        <nav class="navbar navbar-main">
            <div class="nav-container">
                <div class="nav-logo">
                    <a href="../index.html" class="logo-link">
                        <img src="../logo.png" alt="SOLARTECH Logo" class="logo-image">
                    </a>
                </div>
                <ul class="nav-menu">
                    <li><a href="../index.html" class="nav-link">Domov</a></li>
                    <li><a href="sluzby.html" class="nav-link">Služby</a></li>
                    <li><a href="certifikaty.html" class="nav-link">Certifikáty</a></li>
                    <li><a href="produkty.html" class="nav-link">Produkty</a></li>
                    <li><a href="zeleny-dom.html" class="nav-link">Zelený dom</a></li>
                    <li><a href="referencie.html" class="nav-link">Referencie</a></li>
                    <li><a href="kontakt.html" class="nav-link">Kontakt</a></li>
                </ul>
                
                <!-- Mobile Navigation Structure -->
                <div class="mobile-nav-sidebar">
                    <div class="mobile-nav-header">
                        <div class="mobile-nav-container">
                            <div class="nav-logo">
                                <a href="../index.html" class="logo-link">
                                    <img src="../logo.png" alt="SOLARTECH Logo" class="logo-image">
                                </a>
                            </div>
                            <button class="mobile-close-btn" id="mobile-close">&times;</button>
                        </div>
                    </div>
                    <div class="mobile-nav-links">
                        <div class="mobile-nav-container">
                            <div style="display: flex; flex-direction: column; width: 100%;">
                                <a href="../index.html" class="nav-link mobile-nav-link">Domov</a>
                                <a href="sluzby.html" class="nav-link mobile-nav-link">Služby</a>
                                <a href="certifikaty.html" class="nav-link mobile-nav-link">Certifikáty</a>
                                <a href="produkty.html" class="nav-link mobile-nav-link">Produkty</a>
                                <a href="zeleny-dom.html" class="nav-link mobile-nav-link">Zelený dom</a>
                                <a href="referencie.html" class="nav-link mobile-nav-link">Referencie</a>
                                <a href="kontakt.html" class="nav-link mobile-nav-link">Kontakt</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>`;
    }

    // Product Detail Page Navigation Template (nested deeper - needs ../../)
    getProductDetailNavigationHTML() {
        return `
        <!-- Scroll Progress Indicator -->
        <div class="scroll-progress">
            <div class="scroll-progress-bar"></div>
        </div>

        <!-- Navigation -->
        <nav class="navbar navbar-main">
            <div class="nav-container">
                <div class="nav-logo">
                    <a href="../../index.html" class="logo-link">
                        <img src="../../logo.png" alt="SOLARTECH Logo" class="logo-image">
                    </a>
                </div>
                <ul class="nav-menu">
                    <li><a href="../../index.html" class="nav-link">Domov</a></li>
                    <li><a href="../sluzby.html" class="nav-link">Služby</a></li>
                    <li><a href="../certifikaty.html" class="nav-link">Certifikáty</a></li>
                    <li><a href="../produkty.html" class="nav-link">Produkty</a></li>
                    <li><a href="../zeleny-dom.html" class="nav-link">Zelený dom</a></li>
                    <li><a href="../referencie.html" class="nav-link">Referencie</a></li>
                    <li><a href="../kontakt.html" class="nav-link">Kontakt</a></li>
                </ul>

                <!-- Mobile Navigation Structure -->
                <div class="mobile-nav-sidebar">
                    <div class="mobile-nav-header">
                        <div class="mobile-nav-container">
                            <div class="nav-logo">
                                <a href="../../index.html" class="logo-link">
                                    <img src="../../logo.png" alt="SOLARTECH Logo" class="logo-image">
                                </a>
                            </div>
                            <button class="mobile-close-btn" id="mobile-close">&times;</button>
                        </div>
                    </div>
                    <div class="mobile-nav-links">
                        <div class="mobile-nav-container">
                            <div style="display: flex; flex-direction: column; width: 100%;">
                                <a href="../../index.html" class="nav-link mobile-nav-link">Domov</a>
                                <a href="../sluzby.html" class="nav-link mobile-nav-link">Služby</a>
                                <a href="../certifikaty.html" class="nav-link mobile-nav-link">Certifikáty</a>
                                <a href="../produkty.html" class="nav-link mobile-nav-link">Produkty</a>
                                <a href="../zeleny-dom.html" class="nav-link mobile-nav-link">Zelený dom</a>
                                <a href="../referencie.html" class="nav-link mobile-nav-link">Referencie</a>
                                <a href="../kontakt.html" class="nav-link mobile-nav-link">Kontakt</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>`;
    }

    // Initialize navigation
    init() {
        this.injectNavigation();
        this.bindEvents();
        this.updateActiveNavLink();
    }

    // Inject navigation into placeholder
    injectNavigation() {
        const navPlaceholder = document.getElementById('nav-placeholder');
        if (navPlaceholder) {
            if (this.isProductDetailPage()) {
                navPlaceholder.innerHTML = this.getProductDetailNavigationHTML();
            } else if (this.isSubpage()) {
                navPlaceholder.innerHTML = this.getSubpageNavigationHTML();
            } else {
                navPlaceholder.innerHTML = this.getNavigationHTML();
            }
            
            // Cache references after injection
            this.navbar = document.querySelector('.navbar-main');
            this.hamburger = document.querySelector('.hamburger');
            this.navMenu = document.querySelector('.nav-menu');
            this.mobileNavSidebar = document.querySelector('.mobile-nav-sidebar');
        }
    }

    // Bind event listeners
    bindEvents() {
        // Mobile Navigation
        if (this.hamburger && this.navMenu) {
            this.hamburger.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        });

        // Close mobile menu when clicking close button
        document.addEventListener('click', (e) => {
            if (e.target && e.target.id === 'mobile-close') {
                this.closeMobileMenu();
            }
        });

        // Navbar scroll behavior
        window.addEventListener('scroll', () => {
            this.updateNavbar();
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Toggle mobile menu
    toggleMobileMenu() {
        if (!this.mobileNavSidebar || !this.hamburger) return;
        
        this.mobileNavSidebar.classList.toggle('active');
        this.hamburger.classList.toggle('active');
        
        // Make navbar white when hamburger is clicked (only if it's not already scrolled/white)
        if (this.navbar && this.mobileNavSidebar.classList.contains('active')) {
            // Menu is opening - make navbar white if it's not already
            if (!this.navbar.classList.contains('scrolled')) {
                this.navbar.classList.add('scrolled');
                this.navbar.setAttribute('data-hamburger-forced', 'true');
            }
        } else if (this.navbar && this.navbar.getAttribute('data-hamburger-forced') === 'true') {
            // Menu is closing - only remove white background if it was forced by hamburger
            this.navbar.classList.remove('scrolled');
            this.navbar.removeAttribute('data-hamburger-forced');
        }
    }

    // Close mobile menu
    closeMobileMenu() {
        if (!this.mobileNavSidebar || !this.hamburger) return;
        
        this.mobileNavSidebar.classList.remove('active');
        this.hamburger.classList.remove('active');
        
        // Remove scrolled class when closing menu
        if (this.navbar && window.scrollY <= (window.innerHeight * 0.3)) {
            this.navbar.classList.remove('scrolled');
        }
    }

    // Update navbar on scroll
    updateNavbar() {
        const scrollPosition = window.scrollY;
        const currentPage = window.location.pathname;
        const fileName = currentPage.split('/').pop() || 'index.html';
        const isHomepage = fileName === 'index.html' || currentPage === '/' || currentPage === '';
        let triggerPoint;
        
        if (isHomepage) {
            triggerPoint = window.innerHeight * 0.3; // 30vh for homepage
        } else {
            triggerPoint = window.innerHeight * 0.05; // 5vh for subpages
        }
        
        if (this.navbar) {
            if (scrollPosition > triggerPoint) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
        }
    }

    // Update active navigation link based on current page
    updateActiveNavLink() {
        const currentPath = window.location.pathname;
        const fileName = currentPath.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkHref = link.getAttribute('href');
            const linkFileName = linkHref.split('/').pop();
            
            if (linkFileName === fileName || 
                (fileName === '' && linkFileName === 'index.html') ||
                (currentPath === '/' && linkFileName === 'index.html')) {
                link.classList.add('active');
            }
        });
    }

    // Scroll progress indicator
    initScrollProgress() {
        const scrollProgress = document.querySelector('.scroll-progress-bar');
        
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
            
            if (scrollProgress) {
                const scrollPercentage = (scrollPosition / documentHeight) * 100;
                scrollProgress.style.height = `${scrollPercentage}%`;
            }
        });
    }
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const navigation = new Navigation();
    navigation.initScrollProgress();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Navigation;
}