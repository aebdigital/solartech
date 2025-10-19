// Reviews Component
class Reviews {
    constructor() {
        this.reviews = [
            {
                rating: "★★★★★",
                text: "SOLARTECH nám inštaloval fotovoltický systém na strechu rodinného domu. Profesionálny prístup od obhliadky až po konečné zapojenie. Solárne panely fungujú perfektne a úspora na elektrине je výrazná. Maximálna spokojnosť!",
                author: "Ján Kováč",
                location: "Košice"
            },
            {
                rating: "★★★★★",
                text: "Vynikajúca práca! Fotovoltaické panely boli nainštalované rýchlo a kvalitne. Oceňujem odbornú konzultáciu pri výbere vhodného systému a trpezlivé vysvetlenie všetkých detailov. Solárna energia sa nám veľmi oplatila.",
                author: "Peter Novák",
                location: "Prešov"
            },
            {
                rating: "★★★★★",
                text: "S firmou SOLARTECH sme absolútne spokojní. Inštalovali nám solárny systém s trojvalentným zásobníkom. Teplá voda je teraz zadarmo a v lete máme 100% pokrytie. Certifikovaní inštalatéri, ktorým môžete veriť!",
                author: "Mária Horváthová",
                location: "Michalovce"
            }
        ];
        this.init();
    }

    // Generate HTML for a single review
    getReviewHTML(review) {
        const locationHTML = review.location
            ? `<span class="author-location">${review.location}</span>`
            : '';

        return `
            <div class="review-item">
                <div class="review-rating">
                    <div class="stars">${review.rating}</div>
                </div>
                <p class="review-text">${review.text}</p>
                <div class="review-author">
                    <span class="author-name">${review.author}</span>
                    ${locationHTML}
                </div>
            </div>
        `;
    }

    // Main Reviews Section Template
    getReviewsHTML() {
        const reviewsHTML = this.reviews.map(review => this.getReviewHTML(review)).join('');

        return `
        <!-- Reviews Section -->
        <section id="reviews" class="reviews-section">
            <div class="container">
                <div class="reviews-header">
                    <h2 class="reviews-title" data-text="HODNOTENIA">Čo hovoria naši klienti</h2>
                    <p class="reviews-subtitle">Spokojnosť našich zákazníkov je naša priorita</p>
                </div>
                <div class="reviews-grid">
                    ${reviewsHTML}
                </div>
            </div>
        </section>
        `;
    }

    init() {
        const placeholder = document.getElementById('reviews-placeholder');
        if (placeholder) {
            placeholder.innerHTML = this.getReviewsHTML();
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Reviews();
});
