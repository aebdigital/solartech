// Footer Component
class Footer {
    constructor() {
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

    // Function to determine if we're on a product detail page (two levels deep)
    isProductPage() {
        const currentPath = window.location.pathname;
        return currentPath.includes('/subpages/produkty/') && !currentPath.endsWith('produkty.html');
    }

    // Main Footer Template
    getFooterHTML() {
        return `
        <!-- Footer -->
        <footer id="footer" class="footer animated-footer">
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-item footer-logo">
                        <img src="logo.png" alt="SOLARTECH Logo" class="footer-logo-image" style="height: 50px;">
                    </div>
                    
                    <div class="footer-item footer-pages">
                        <a href="index.html">Domov</a>
                        <a href="subpages/sluzby.html">Služby</a>
                        <a href="subpages/certifikaty.html">Certifikáty</a>
                        <a href="subpages/produkty.html">Produkty</a>
                        <a href="subpages/zeleny-dom.html">Zelený dom</a>
                        <a href="subpages/referencie.html">Referencie</a>
                        <a href="subpages/kontakt.html">Kontakt</a>
                    </div>
                    
                    <div class="footer-item footer-contact">
                        <div class="footer-contact-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2"/>
                                <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2"/>
                            </svg>
                            <span>solartech@azet.sk</span>
                        </div>
                        <div class="footer-contact-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" stroke-width="2"/>
                            </svg>
                            <span>+421 918 583 499</span>
                        </div>
                        <div class="footer-contact-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2"/>
                                <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2"/>
                            </svg>
                            <span>peterbobala@gmail.com</span>
                        </div>
                    </div>
                    
                    <div class="footer-item footer-social">
                        <a href="https://www.facebook.com/solartech.sk" target="_blank" rel="noopener noreferrer" class="social-link">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/solartech_sro/" target="_blank" rel="noopener noreferrer" class="social-link">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" stroke-width="2"/>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" stroke-width="2"/>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" stroke-width="2"/>
                            </svg>
                        </a>
                    </div>
                    
                    <div class="footer-item footer-copyright">
                        <p>&copy; 2024 SOLARTECH, s.r.o. Všetky práva vyhradené.</p>
                    </div>
                    
                    <div class="footer-item footer-policy">
                        <a href="#" id="privacy-policy-link">Ochrana osobných údajov</a>
                    </div>
                </div>
            </div>
        </footer>`;
    }

    // Subpage Footer Template with relative paths
    getSubpageFooterHTML() {
        return `
        <!-- Footer -->
        <footer id="footer" class="footer animated-footer">
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-item footer-logo">
                        <img src="../logo.png" alt="SOLARTECH Logo" class="footer-logo-image" style="height: 50px;">
                    </div>

                    <div class="footer-item footer-pages">
                        <a href="../index.html">Domov</a>
                        <a href="sluzby.html">Služby</a>
                        <a href="certifikaty.html">Certifikáty</a>
                        <a href="produkty.html">Produkty</a>
                        <a href="zeleny-dom.html">Zelený dom</a>
                        <a href="referencie.html">Referencie</a>
                        <a href="kontakt.html">Kontakt</a>
                    </div>
                    
                    <div class="footer-item footer-contact">
                        <div class="footer-contact-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2"/>
                                <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2"/>
                            </svg>
                            <span>solartech@azet.sk</span>
                        </div>
                        <div class="footer-contact-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" stroke-width="2"/>
                            </svg>
                            <span>+421 918 583 499</span>
                        </div>
                        <div class="footer-contact-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2"/>
                                <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2"/>
                            </svg>
                            <span>solartech@azet.sk</span>
                        </div>
                    </div>
                    
                    <div class="footer-item footer-social">
                        <a href="https://www.facebook.com/solartech.sk" target="_blank" rel="noopener noreferrer" class="social-link">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/solartech_sro/" target="_blank" rel="noopener noreferrer" class="social-link">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" stroke-width="2"/>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" stroke-width="2"/>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" stroke-width="2"/>
                            </svg>
                        </a>
                    </div>
                    
                    <div class="footer-item footer-copyright">
                        <p>&copy; 2024 SOLARTECH, s.r.o. Všetky práva vyhradené.</p>
                    </div>
                    
                    <div class="footer-item footer-policy">
                        <a href="#" id="privacy-policy-link">Ochrana osobných údajov</a>
                    </div>
                </div>
            </div>
        </footer>`;
    }

    // Product Page Footer Template with relative paths (two levels deep)
    getProductPageFooterHTML() {
        return `
        <!-- Footer -->
        <footer id="footer" class="footer animated-footer">
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-item footer-logo">
                        <img src="../../logo.png" alt="SOLARTECH Logo" class="footer-logo-image" style="height: 50px;">
                    </div>

                    <div class="footer-item footer-pages">
                        <a href="../../index.html">Domov</a>
                        <a href="../sluzby.html">Služby</a>
                        <a href="../certifikaty.html">Certifikáty</a>
                        <a href="../produkty.html">Produkty</a>
                        <a href="../zeleny-dom.html">Zelený dom</a>
                        <a href="../referencie.html">Referencie</a>
                        <a href="../kontakt.html">Kontakt</a>
                    </div>

                    <div class="footer-item footer-contact">
                        <div class="footer-contact-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2"/>
                                <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2"/>
                            </svg>
                            <span>solartech@azet.sk</span>
                        </div>
                        <div class="footer-contact-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" stroke-width="2"/>
                            </svg>
                            <span>+421 918 583 499</span>
                        </div>
                        <div class="footer-contact-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2"/>
                                <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2"/>
                            </svg>
                            <span>solartech@azet.sk</span>
                        </div>
                    </div>

                    <div class="footer-item footer-social">
                        <a href="https://www.facebook.com/solartech.sk" target="_blank" rel="noopener noreferrer" class="social-link">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/solartech_sro/" target="_blank" rel="noopener noreferrer" class="social-link">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" stroke-width="2"/>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" stroke-width="2"/>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" stroke-width="2"/>
                            </svg>
                        </a>
                    </div>

                    <div class="footer-item footer-copyright">
                        <p>&copy; 2024 SOLARTECH, s.r.o. Všetky práva vyhradené.</p>
                    </div>

                    <div class="footer-item footer-policy">
                        <a href="#" id="privacy-policy-link">Ochrana osobných údajov</a>
                    </div>
                </div>
            </div>
        </footer>`;
    }

    // Initialize footer
    init() {
        this.injectFooter();
        this.initAnimatedFooters();
    }

    // Inject footer into placeholder
    injectFooter() {
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            if (this.isProductPage()) {
                footerPlaceholder.innerHTML = this.getProductPageFooterHTML();
            } else if (this.isSubpage()) {
                footerPlaceholder.innerHTML = this.getSubpageFooterHTML();
            } else {
                footerPlaceholder.innerHTML = this.getFooterHTML();
            }
        }
    }

    // Reusable Animated Footer System
    initAnimatedFooters() {
        const footerItemObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { 
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });

        // Find all footer items (both with animated-footer class and standalone)
        const footerItems = document.querySelectorAll('.footer-item, .animated-footer .footer-item');
        
        footerItems.forEach((item, index) => {
            // Add staggered delay for smoother animation
            item.style.transitionDelay = `${index * 0.1}s`;
            footerItemObserver.observe(item);
        });

        return footerItemObserver;
    }
}

// Initialize footer when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const footer = new Footer();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Footer;
}