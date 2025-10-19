// Privacy Policy Popup Component
class PrivacyPopup {
    constructor() {
        this.popup = null;
        this.init();
    }

    // Create Privacy Policy Popup
    createPrivacyPolicyPopup() {
        const popup = document.createElement('div');
        popup.id = 'privacy-policy-popup';
        popup.innerHTML = `
            <div class="privacy-popup-overlay">
                <div class="privacy-popup-content">
                    <div class="privacy-popup-header">
                        <h2>Ochrana osobných údajov</h2>
                        <button class="privacy-popup-close">&times;</button>
                    </div>
                    <div class="privacy-popup-body">
                        <p><strong>SOLARTECH, s.r.o.</strong><br>
                        Vranovská 5/2327, 040 11 Košice, Slovenská republika<br>
                        IČO: 36656925, DIČ: 2022222994<br>
                        IČ DPH: SK2022222994<br>
                        E-mail: solartech@azet.sk<br>
                        Tel.: +421 918 583 499<br>
                        <em>SME DRŽITELIA CERTIFIKÁTU INŠTALATÉR MALÉHO ZDROJA</em></p>

                        <p>Tieto Zásady ochrany osobných údajov (ďalej len „Zásady") popisujú, aké osobné údaje spracúvame v súvislosti s používaním našej webovej stránky a kontaktných formulárov.</p>

                        <hr>

                        <h3>I. Kontaktný formulár</h3>
                        <p>Na stránke solartech.sk prevádzkujeme kontaktný formulár, ktorého účelom je umožniť vám:</p>
                        <ul>
                            <li>Položiť otázku k našim produktom a službám</li>
                            <li>Požiadať o cenovú ponuku</li>
                        </ul>
                        
                        <p><strong>Rozsah spracúvaných údajov:</strong></p>
                        <ul>
                            <li>Meno a priezvisko</li>
                            <li>E-mailová adresa</li>
                            <li>Telefónne číslo</li>
                        </ul>
                        
                        <p><strong>Účel spracovania:</strong><br>
                        Spracúvame uvedené údaje, aby sme vás mohli kontaktovať a reagovať na váš dopyt.</p>
                        
                        <p><strong>Právny základ:</strong><br>
                        Článok 6 ods. 1 písm. b) GDPR – plnenie opatrení pred uzavretím zmluvy na žiadosť dotknutej osoby.</p>
                        
                        <p><strong>Doba uchovávania:</strong><br>
                        Osobné údaje budeme uchovávať maximálne 10 rokov od odozvy na váš dopyt, pokiaľ nevznikne ďalší zmluvný vzťah.</p>

                        <hr>

                        <h3>II. Súbory cookies</h3>
                        <p>Na našej webovej stránke používame cookies výlučne na nasledujúce účely:</p>
                        <ul>
                            <li><strong>Nevyhnutné cookies</strong> – zabezpečujú základnú funkčnosť stránky (napr. ukladanie relácie, nastavení prehliadača).</li>
                            <li><strong>Štatistické (analytické) cookies</strong> – pomáhajú nám pochopiť, ako návštevníci stránku používajú (nasadzujeme ich len so súhlasom používateľa).</li>
                        </ul>
                        
                        <p><strong>Správa súhlasov:</strong><br>
                        Používateľ môže kedykoľvek odvolať súhlas s využívaním štatistických cookies prostredníctvom nastavení cookie lišty alebo priamo v prehliadači.</p>

                        <hr>

                        <h3>III. Práva dotknutej osoby</h3>
                        <p>Podľa nariadenia GDPR máte nasledujúce práva:</p>
                        <ul>
                            <li>Prístup k osobným údajom, ktoré spracúvame</li>
                            <li>Oprava nepresných alebo neúplných údajov</li>
                            <li>Vymazanie („právo zabudnutia"), ak na spracovanie už nie je právny základ</li>
                            <li>Obmedzenie spracovania</li>
                            <li>Prenosnosť údajov</li>
                            <li>Odvolanie súhlasu – stane sa účinným dňom odvolania</li>
                            <li>Podanie sťažnosti u Úradu na ochranu osobných údajov SR (Hraničná 12, 820 07 Bratislava, www.dataprotection.gov.sk)</li>
                        </ul>
                        
                        <p>V prípade otázok alebo uplatnenia Vašich práv nás môžete kontaktovať na solartech@azet.sk, prípadne telefónnom čísle +421 918 583 499.</p>

                        <hr>

                        <p>Tieto Zásady nadobúdajú účinnosť dňom 25. 4. 2025.</p>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(popup);
        return popup;
    }

    // Initialize privacy policy functionality
    init() {
        // Wait for DOM to be fully loaded and footer to be injected
        setTimeout(() => {
            this.bindEvents();
        }, 100);
    }

    // Bind event listeners
    bindEvents() {
        // Add event listener for privacy policy link
        document.addEventListener('click', (e) => {
            if (e.target && e.target.id === 'privacy-policy-link') {
                e.preventDefault();
                this.showPopup();
            }
        });

        // Close popup functionality
        document.addEventListener('click', (e) => {
            const popup = document.getElementById('privacy-policy-popup');
            if (popup && (e.target.classList.contains('privacy-popup-overlay') || e.target.classList.contains('privacy-popup-close'))) {
                this.hidePopup();
            }
        });

        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const popup = document.getElementById('privacy-policy-popup');
                if (popup && popup.style.display === 'block') {
                    this.hidePopup();
                }
            }
        });
    }

    // Show popup
    showPopup() {
        // Create popup if it doesn't exist
        let popup = document.getElementById('privacy-policy-popup');
        if (!popup) {
            popup = this.createPrivacyPolicyPopup();
        }
        
        // Show popup
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // Hide popup
    hidePopup() {
        const popup = document.getElementById('privacy-policy-popup');
        if (popup) {
            popup.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
}

// Initialize privacy popup when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const privacyPopup = new PrivacyPopup();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PrivacyPopup;
}