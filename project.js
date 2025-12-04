
document.addEventListener('DOMContentLoaded', function() {
    initProjectsAnimations();
    initProjectModals();
});

function initProjectsAnimations() {
    resetProjectsAnimations();
    
    const projectsSection = document.querySelector('#projects');
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateProjects();
            observer.disconnect();
        }
    });
    observer.observe(projectsSection);
}

function resetProjectsAnimations() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px) rotate(5deg)';
    });
}

window.triggerProjectsAnimations = function() {
    resetProjectsAnimations();
    animateProjects();
};

function animateProjects() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) rotate(0deg)';
            card.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        }, index * 200);
    });
}

function initProjectModals() {
    const cards = document.querySelectorAll(".card");
    const modal = document.querySelector(".project-modal");
    const modalImg = document.querySelector(".modal-image img");
    const modalTitle = document.querySelector(".modal-info h2");
    const modalDesc = document.querySelector(".modal-info p");
    const modalClose = document.querySelector(".modal-close");

    const projectData = [
        {
            title: "GALLERY",
            description: "A beautiful image gallery showcasing curated collections with smooth transitions and fullscreen preview.",
            img: "img/galary.PNG",
            demo: "http://127.0.0.1:5501/galary.html"
        },
        {
            title: "RESUME",
            description: "A dynamic resume builder app with custom themes, live preview, and downloadable PDF export.",
            img: "img/resumeee.PNG",
            demo: "http://127.0.0.1:5501/resume.html"
        },
        {
            title: "PORTFOLIO WEBSITE",
            description: "A personal portfolio that blends creativity with interactivity — featuring smooth animations and clean layout.",
            img: "img/portfoliioo.PNG",
            demo: "http://127.0.0.1:5500/home.html#projects"
        },
        {
            title: "SCHEDULE",
            description: "An intelligent scheduler with reminders, task grouping, and progress tracking using local storage.",
            img: "img/sched.PNG",
            demo: "http://127.0.0.1:5501/schedule.html"
        },
        {
            title: "MULTI MEDIA",
            description: "A multimedia dashboard for bloggers and creators to manage posts, images, and analytics in real-time.",
            img: "img/media.PNG",
            demo: "http://127.0.0.1:5501/media.html"
        },
    ];

    const modalDemo = document.querySelector(".live-demo");

    cards.forEach((card, index) => {
        card.addEventListener("click", () => {
            const data = projectData[index];
            modalImg.src = data.img;
            modalTitle.textContent = data.title;
            modalDesc.textContent = data.description;
            modalDemo.href = data.demo;
            modal.classList.add("active");
        });
    });

    modalClose.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    modal.addEventListener("click", e => {
        if (e.target === modal) modal.classList.remove("active");
    });
}