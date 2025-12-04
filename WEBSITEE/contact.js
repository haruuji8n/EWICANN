
document.addEventListener('DOMContentLoaded', function() {
    initContactAnimations();
    initFormHandler();
});

function initContactAnimations() {
    resetContactAnimations();
    
    const contactSection = document.querySelector('#contact');
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateContactSection();
            observer.disconnect();
        }
    });
    observer.observe(contactSection);
}

function resetContactAnimations() {
    const contactInfo = document.querySelector('.contact-info');
    const contactForm = document.querySelector('.contact-form');
    const contactItems = document.querySelectorAll('.contact-item');
    const socialLinks = document.querySelectorAll('.social-links a');
    
    if (contactInfo) {
        contactInfo.style.opacity = '0';
        contactInfo.style.transform = 'translateX(-50px)';
    }
    
    if (contactForm) {
        contactForm.style.opacity = '0';
        contactForm.style.transform = 'translateX(50px)';
    }
    
    contactItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
    });
    
    socialLinks.forEach(link => {
        link.style.opacity = '0';
        link.style.transform = 'scale(0)';
    });
}

window.triggerContactAnimations = function() {
    resetContactAnimations();
    animateContactSection();
};

function animateContactSection() {
    const contactInfo = document.querySelector('.contact-info');
    const contactForm = document.querySelector('.contact-form');
    
    if (contactInfo) {
        setTimeout(() => {
            contactInfo.style.opacity = '1';
            contactInfo.style.transform = 'translateX(0)';
            contactInfo.style.transition = 'all 0.8s ease-out';
        }, 300);
    }
    
    if (contactForm) {
        setTimeout(() => {
            contactForm.style.opacity = '1';
            contactForm.style.transform = 'translateX(0)';
            contactForm.style.transition = 'all 0.8s ease-out';
        }, 600);
    }
    
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
            item.style.transition = 'all 0.5s ease-out';
        }, 900 + (index * 100));
    });
    
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach((link, index) => {
        setTimeout(() => {
            link.style.opacity = '1';
            link.style.transform = 'scale(1)';
            link.style.transition = 'all 0.4s ease-out';
        }, 1200 + (index * 100));
    });
}

function initFormHandler() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const inputs = this.querySelectorAll('input, textarea');
            
            inputs.forEach(input => {
                if (input.required && !input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#ff4444';
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (isValid) {
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    submitBtn.textContent = 'Message Sent!';
                    submitBtn.style.background = '#4CAF50';
                    
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                        submitBtn.style.background = '';
                        contactForm.reset();
                    }, 2000);
                }, 1500);
            }
        });
    }
}