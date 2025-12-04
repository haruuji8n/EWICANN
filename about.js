
document.addEventListener('DOMContentLoaded', function() {
    initAboutAnimations();
});

function initAboutAnimations() {
    resetAboutAnimations();
    
    const aboutSection = document.querySelector('#about');
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateAboutSection();
            observer.disconnect();
        }
    });
    observer.observe(aboutSection);
}

function resetAboutAnimations() {
    const aboutContents = document.querySelectorAll('.about-content');
    const divider = document.querySelector('.divider');
    const interests = document.querySelectorAll('.interest');
    const hobbies = document.querySelectorAll('.hobby');
    
    aboutContents.forEach(content => {
        content.style.opacity = '0';
        content.style.transform = 'translateY(30px)';
    });
    
    if (divider) {
        divider.style.opacity = '0';
        divider.style.transform = 'scaleX(0)';
    }
    
    interests.forEach(interest => {
        interest.style.opacity = '0';
        interest.style.transform = 'translateX(-20px)';
    });
    
    hobbies.forEach(hobby => {
        hobby.style.opacity = '0';
        hobby.style.transform = 'scale(0.8)';
    });
}

window.triggerAboutAnimations = function() {
    resetAboutAnimations();
    animateAboutSection();
};

function animateAboutSection() {
    const aboutContents = document.querySelectorAll('.about-content');
    aboutContents.forEach((content, index) => {
        setTimeout(() => {
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';
            content.style.transition = 'all 0.8s ease-out';
        }, index * 300);
    });

    const divider = document.querySelector('.divider');
    if (divider) {
        setTimeout(() => {
            divider.style.opacity = '1';
            divider.style.transform = 'scaleX(1)';
            divider.style.transition = 'all 0.6s ease-out';
        }, 600);
    }

    animateStats();

    const interests = document.querySelectorAll('.interest');
    interests.forEach((interest, index) => {
        setTimeout(() => {
            interest.style.opacity = '1';
            interest.style.transform = 'translateX(0)';
            interest.style.transition = 'all 0.5s ease-out';
        }, 800 + (index * 100));
    });

    const hobbies = document.querySelectorAll('.hobby');
    hobbies.forEach((hobby, index) => {
        setTimeout(() => {
            hobby.style.opacity = '1';
            hobby.style.transform = 'scale(1)';
            hobby.style.transition = 'all 0.5s ease-out';
        }, 1000 + (index * 150));
    });
}

function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        let current = 0;
        
        const interval = setInterval(() => {
            if (current >= target) {
                clearInterval(interval);
                return;
            }
            current++;
            stat.textContent = current;
        }, 100);
    });
}