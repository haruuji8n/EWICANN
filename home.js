// home.js
document.addEventListener('DOMContentLoaded', function() {
    initHomeAnimations();
    createParticles();
});

function initHomeAnimations() {
    // Initial setup - hide animated elements
    resetHomeAnimations();
    
    // Typewriter effect for home text
    const homeText = document.querySelector('.home .text p');
    if (homeText && !homeText.dataset.animated) {
        const originalText = homeText.textContent;
        homeText.textContent = '';
        homeText.dataset.animated = 'true';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                homeText.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 20);
            }
        };
        
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                typeWriter();
                animateHomeContent();
                observer.disconnect();
            }
        });
        observer.observe(document.querySelector('#home'));
    }
}

// Reset home animations
function resetHomeAnimations() {
    const slideElements = document.querySelectorAll('.home .slide-in-left');
    const homeButtons = document.querySelectorAll('.home-buttons button');
    const flipCard = document.querySelector('.flip-card');
    
    slideElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateX(-50px)';
    });
    
    homeButtons.forEach(button => {
        button.style.opacity = '0';
        button.style.transform = 'translateY(20px)';
    });
    
    if (flipCard) {
        flipCard.style.opacity = '0';
        flipCard.style.transform = 'scale(0.8) rotate(10deg)';
    }
}

// Trigger function for navigation clicks
window.triggerHomeAnimations = function() {
    resetHomeAnimations();
    animateHomeContent();
};

function animateHomeContent() {
    // Animate text elements
    const slideElements = document.querySelectorAll('.home .slide-in-left');
    slideElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
            element.style.transition = 'all 0.8s ease-out';
        }, index * 300);
    });
    
    // Animate buttons
    const homeButtons = document.querySelectorAll('.home-buttons button');
    homeButtons.forEach((button, index) => {
        setTimeout(() => {
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
            button.style.transition = 'all 0.6s ease-out';
        }, 600 + (index * 200));
    });
    
    // Animate flip card
    const flipCard = document.querySelector('.flip-card');
    if (flipCard) {
        setTimeout(() => {
            flipCard.style.opacity = '1';
            flipCard.style.transform = 'scale(1) rotate(0deg)';
            flipCard.style.transition = 'all 0.8s ease-out';
        }, 800);
    }
}

// Particles function
function createParticles() {
    if (document.querySelector('.home-particles')) return;
    
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'home-particles';

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 1;
        const left = Math.random() * 100;
        const animationDelay = Math.random() * 20;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}%`;
        particle.style.animationDelay = `${animationDelay}s`;
        
        particlesContainer.appendChild(particle);
    }

    document.querySelector('.home').appendChild(particlesContainer);
}