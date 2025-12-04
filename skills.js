
document.addEventListener('DOMContentLoaded', function() {
    initSkillsAnimations();
});

function initSkillsAnimations() {
    resetSkillsAnimations();
    
    const skillsSection = document.querySelector('#skills');
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateSkills();
            observer.disconnect();
        }
    });
    observer.observe(skillsSection);
}

function resetSkillsAnimations() {
    const skills = document.querySelectorAll('.skill');
    const personalSkills = document.querySelectorAll('.personal-skill');
    
    skills.forEach(skill => {
        skill.style.opacity = '0';
        skill.style.transform = 'translateX(-30px)';
    });
    
    personalSkills.forEach(skill => {
        skill.style.opacity = '0';
        skill.style.transform = 'translateX(30px)';
    });
}

window.triggerSkillsAnimations = function() {
    resetSkillsAnimations();
    animateSkills();
};

function animateSkills() {
    const skills = document.querySelectorAll('.skill');
    skills.forEach((skill, index) => {
        setTimeout(() => {
            skill.style.opacity = '1';
            skill.style.transform = 'translateX(0)';
            skill.style.transition = 'all 0.6s ease-out';
        }, index * 200);
    });
    

    const personalSkills = document.querySelectorAll('.personal-skill');
    personalSkills.forEach((skill, index) => {
        setTimeout(() => {
            skill.style.opacity = '1';
            skill.style.transform = 'translateX(0)';
            skill.style.transition = 'all 0.6s ease-out';
        }, (index * 200) + 500);
    });
    

    animateSkillPercentages();
}

function animateSkillPercentages() {
    const skillPercentElements = document.querySelectorAll('.skill-percent');
    
    skillPercentElements.forEach(element => {
        const targetPercent = parseInt(element.textContent);
        let currentPercent = 0;
        
        const interval = setInterval(() => {
            if (currentPercent >= targetPercent) {
                clearInterval(interval);
                return;
            }
            
            currentPercent++;
            element.textContent = currentPercent + '%';
            
            const progressBar = element.closest('.skill').querySelector('.bar');
            if (progressBar) {
                progressBar.style.width = currentPercent + '%';
            }
        }, 20);
    });
}