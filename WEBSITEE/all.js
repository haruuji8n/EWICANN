// navigation.js
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
});

function initNavigation() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; 
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            
            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                scrollToSection(targetSection);
                
                setTimeout(() => {
                    triggerSectionAnimations(targetId);
                }, 400); 
            }
        });
    });
}

function scrollToSection(section) {
    const sectionTop = section.offsetTop - 80; 
    
    window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
    });
}

function triggerSectionAnimations(sectionId) {
    console.log(`Triggering animations for: ${sectionId}`);
    
    switch(sectionId) {
        case '#home':
            if (typeof triggerHomeAnimations === 'function') {
                triggerHomeAnimations();
            }
            break;
        case '#about':
            if (typeof triggerAboutAnimations === 'function') {
                triggerAboutAnimations();
            }
            break;
        case '#skills':
            if (typeof triggerSkillsAnimations === 'function') {
                triggerSkillsAnimations();
            }
            break;
        case '#projects':
            if (typeof triggerProjectsAnimations === 'function') {
                triggerProjectsAnimations();
            }
            break;
        case '#contact':
            if (typeof triggerContactAnimations === 'function') {
                triggerContactAnimations();
            }
            break;
    }
}

// Make navigation functions globally available
window.scrollToSection = scrollToSection;
window.triggerSectionAnimations = triggerSectionAnimations;