
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120; 
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
    link.addEventListener("click", function() {
        navLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});


function createParticles() {
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


document.addEventListener('DOMContentLoaded', createParticles);



