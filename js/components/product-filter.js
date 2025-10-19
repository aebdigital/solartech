// Product Filter Functionality
class ProductFilter {
    constructor() {
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.mobileSelect = document.getElementById('mobile-filter');
        this.productItems = document.querySelectorAll('.product-item');
        this.init();
    }

    init() {
        if (this.productItems.length === 0) return;
        
        this.bindEvents();
        this.showInitialProducts();
    }

    bindEvents() {
        // Desktop filter buttons
        this.filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const filter = button.getAttribute('data-filter');
                const isCurrentlyActive = button.classList.contains('active');
                
                if (isCurrentlyActive) {
                    // If clicking on active button, show all products
                    this.filterProducts('all');
                    this.clearActiveButton();
                } else {
                    // Normal filtering
                    this.filterProducts(filter);
                    this.updateActiveButton(button);
                }
            });
        });

        // Mobile dropdown
        if (this.mobileSelect) {
            this.mobileSelect.addEventListener('change', (e) => {
                const filter = e.target.value || 'all';
                this.filterProducts(filter);
                this.clearActiveButton(); // Clear desktop button states
            });
        }
    }

    filterProducts(filter) {
        // First hide all items
        this.productItems.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('show');
        });

        // Then show matching items with animation
        setTimeout(() => {
            this.productItems.forEach((item, index) => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    this.showProduct(item, index);
                }
            });
        }, 100);
    }

    showProduct(item, index) {
        // Show the item without animation
        item.style.display = 'block';
    }

    hideProduct(item) {
        item.style.display = 'none';
        item.classList.remove('show');
    }

    updateActiveButton(activeButton) {
        this.filterButtons.forEach(button => {
            button.classList.remove('active');
        });
        activeButton.classList.add('active');
    }

    clearActiveButton() {
        this.filterButtons.forEach(button => {
            button.classList.remove('active');
        });
    }

    showInitialProducts() {
        // Show all products initially without animation
        this.productItems.forEach((item) => {
            item.style.display = 'block';
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProductFilter();
});