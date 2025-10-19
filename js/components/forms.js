// Form Components
class Forms {
    constructor() {
        this.init();
    }

    // Initialize all form functionality
    init() {
        this.initContactForm();
        this.initNewsletterForm();
    }

    // Contact form functionality
    initContactForm() {
        const contactForm = document.getElementById('contact-form');
        if (!contactForm) return;

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('.contact-submit-btn');
            const formData = new FormData(contactForm);
            
            // Disable button and show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Odosielanie...';

            fetch('../send-mail.php', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                // Log response for debugging
                console.log('Server response status:', response.status);
                return response.json();
            })
            .then(data => {
                if (data.success) {
                    // Show success message
                    this.showMessage(data.message, 'success', contactForm);
                    // Reset form
                    contactForm.reset();
                } else {
                    // Show error message with debug info if available
                    let errorMessage = data.message;
                    if (data.debug) {
                        errorMessage += '\n\nDebug: ' + data.debug;
                        console.log('SMTP Debug:', data.debug);
                    }
                    this.showMessage(errorMessage, 'error', contactForm);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                this.showMessage('Nastala chyba pri odosielaní správy. Skúste to prosím znovu.', 'error', contactForm);
            })
            .finally(() => {
                // Re-enable button
                submitBtn.disabled = false;
                submitBtn.textContent = 'Odoslať správu';
            });
        });
    }

    // Newsletter form functionality
    initNewsletterForm() {
        const newsletterForm = document.querySelector('.newsletter-form');
        if (!newsletterForm) return;

        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            
            // Simple validation
            if (email) {
                this.showMessage('Ďakujeme za prihlásenie k odberu!', 'success', newsletterForm);
                newsletterForm.reset();
            } else {
                this.showMessage('Prosím, zadajte váš email.', 'error', newsletterForm);
            }
        });
    }

    // Function to show success/error messages
    showMessage(message, type, formElement) {
        // Remove existing message if any
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = message;
        
        // Insert message after form
        formElement.insertAdjacentElement('afterend', messageDiv);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            if (messageDiv && messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 5000);
    }

    // Form validation helpers
    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    validatePhone(phone) {
        const phoneRegex = /^(\+421|0)[0-9]{9}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    }

    validateRequired(value) {
        return value && value.trim().length > 0;
    }

    // Add real-time validation to forms
    addRealTimeValidation(form) {
        const inputs = form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });

            input.addEventListener('input', () => {
                // Remove error styling on input
                if (input.classList.contains('error')) {
                    input.classList.remove('error');
                    const errorMsg = input.parentNode.querySelector('.error-message');
                    if (errorMsg) {
                        errorMsg.remove();
                    }
                }
            });
        });
    }

    validateField(field) {
        const value = field.value.trim();
        const fieldType = field.type;
        const isRequired = field.hasAttribute('required');
        let isValid = true;
        let errorMessage = '';

        // Remove previous error styling
        field.classList.remove('error');
        const existingError = field.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        // Required field validation
        if (isRequired && !this.validateRequired(value)) {
            isValid = false;
            errorMessage = 'Toto pole je povinné';
        }
        // Email validation
        else if (fieldType === 'email' && value && !this.validateEmail(value)) {
            isValid = false;
            errorMessage = 'Neplatný email formát';
        }
        // Phone validation
        else if (fieldType === 'tel' && value && !this.validatePhone(value)) {
            isValid = false;
            errorMessage = 'Neplatný telefón formát';
        }

        if (!isValid) {
            field.classList.add('error');
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.textContent = errorMessage;
            field.parentNode.appendChild(errorDiv);
        }

        return isValid;
    }
}

// Initialize forms when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const forms = new Forms();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Forms;
}