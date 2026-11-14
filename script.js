/*========================================
        VARIABLES PRINCIPALES
=========================================*/

const header = document.querySelector(".header");
const scrollTopBtn = document.querySelector(".scroll-top");
const heroTitle = document.getElementById("changing-text");


/*========================================
        HEADER SCROLL
=========================================*/

window.addEventListener("scroll", () => {
    if (!header) return;
    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


/*========================================
        BOTÓN VOLVER ARRIBA
=========================================*/

window.addEventListener("scroll", () => {
    if (!scrollTopBtn) return;
    if (window.scrollY > 400) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});

if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}


/*========================================
        HERO - TEXTO DINÁMICO
=========================================*/

const words = [
    "Juegos Digitales",
    "Grandes Ofertas",
    "Mejores Precios",
    "Entrega Inmediata",
    "Experiencia Gamer",
    "Juegos Originales"
];

let textIndex = 0;

function changeHeroText() {
    if (!heroTitle) return;
    heroTitle.style.opacity = "0";
    heroTitle.style.transform = "translateY(15px)";

    setTimeout(() => {
        textIndex++;
        if (textIndex >= words.length) textIndex = 0;
        heroTitle.textContent = words[textIndex];
        heroTitle.style.opacity = "1";
        heroTitle.style.transform = "translateY(0)";
    }, 400);
}

setInterval(changeHeroText, 5000);


/*========================================
        HERO - IMÁGENES
=========================================*/

const heroSlides = document.querySelectorAll(".hero-slide");
let heroSlideIndex = 0;

function changeHeroSlide() {
    if (!heroSlides.length) return;
    heroSlides.forEach(slide => slide.classList.remove("active"));
    heroSlideIndex++;
    if (heroSlideIndex >= heroSlides.length) heroSlideIndex = 0;
    heroSlides[heroSlideIndex].classList.add("active");
}

setInterval(changeHeroSlide, 5000);


/*========================================
        CONTADOR
=========================================*/

const counterSection = document.querySelector(".counter");

if (counterSection) {
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const counters = document.querySelectorAll(".number");
            counters.forEach(counter => {
                const target = Number(counter.getAttribute("data-target"));
                let count = 0;
                const speed = target / 100;

                function updateCounter() {
                    if (count < target) {
                        count += speed;
                        counter.innerText = Math.ceil(count);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target.toLocaleString() + "+";
                    }
                }
                updateCounter();
            });

            counterObserver.disconnect();
        });
    }, { threshold: 0.3 });

    counterObserver.observe(counterSection);
}


/*========================================
                FAQ
=========================================*/

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
        const currentItem = question.parentElement;
        faqQuestions.forEach(otherQuestion => {
            if (otherQuestion !== question) {
                otherQuestion.parentElement.classList.remove("active");
            }
        });
        currentItem.classList.toggle("active");
    });
});


/*========================================
        ANIMACIONES AL HACER SCROLL
=========================================*/

const animatedItems = document.querySelectorAll(
    ".game-card, .category-card, .why-card, .offer-card, .counter-card, .review-card, .faq-item, .contact-info, .contact-form"
);

animatedItems.forEach(item => item.classList.add("hidden"));

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
            entry.target.classList.add("show-section");
        }, Number(delay));
        animationObserver.unobserve(entry.target);
    });
}, { threshold: 0.15 });

animatedItems.forEach((item, index) => {
    item.dataset.delay = index * 100;
    animationObserver.observe(item);
});


/*========================================
        MENÚ RESPONSIVE
=========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {
    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("active");
        menuBtn.classList.toggle("active");
    });

    navbar.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
            menuBtn.classList.remove("active");
        });
    });
}


/*========================================
        LOADER
=========================================*/

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    if (!loader) return;
    setTimeout(() => loader.classList.add("hidden"), 500);
});


/*========================================
        FINAL
=========================================*/

console.log("🎮 Elite Store cargado correctamente.");