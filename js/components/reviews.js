// Reviews Component
class Reviews {
    constructor() {
        this.reviews = [
            {
                rating: "★★★★★",
                text: "Firmu hodnotím veľmi pozitívne a s jej službami som nadmieru spokojný. Určite sa na ňu v budúcnosti znova obrátim.",
                author: "František",
                location: "Trnava"
            },
            {
                rating: "★★★★☆",
                text: "S firmou som spolupracoval na väčšom projekte a veľmi oceňujem ich zmysel pre kvalitu a komplexnosť ponúkaných služieb.",
                author: "Tomáš",
                location: "Zvončín"
            },
            {
                rating: "★★★★★",
                text: "Firma mi robila elektroinštaláciu v novopostavenom dome. Aj vďaka ich radám som upravila projekt a vôbec neľutujem, práve naopak. Som veľmi vďačná.",
                author: "Veronika",
                location: null
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
