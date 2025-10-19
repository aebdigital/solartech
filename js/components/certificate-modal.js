// Certificate Modal Functionality
class CertificateModal {
    constructor() {
        this.modal = document.getElementById('certificate-modal');
        this.modalImage = document.getElementById('modal-image');
        this.closeButton = document.getElementById('modal-close');
        this.certificateItems = document.querySelectorAll('.certificate-item');
        
        this.init();
    }

    init() {
        if (!this.modal || !this.modalImage || !this.closeButton) return;
        
        this.bindEvents();
    }

    bindEvents() {
        // Add click event to each certificate
        this.certificateItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const img = item.querySelector('img');
                if (img) {
                    this.openModal(img.src, img.alt);
                }
            });
        });

        // Close modal events
        this.closeButton.addEventListener('click', () => {
            this.closeModal();
        });

        // Close on background click
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.style.display === 'flex') {
                this.closeModal();
            }
        });

        // Prevent scrolling when modal is open
        this.modal.addEventListener('scroll', (e) => {
            e.preventDefault();
        });
    }

    openModal(imageSrc, imageAlt) {
        this.modalImage.src = imageSrc;
        this.modalImage.alt = imageAlt;
        this.modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Focus trap for accessibility
        this.closeButton.focus();
    }

    closeModal() {
        this.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        this.modalImage.src = '';
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CertificateModal();
});