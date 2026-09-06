/* =========================================================
   THUSO MASITENG — PORTFOLIO INTERACTIONS
   ========================================================= */


/* ================= MOBILE NAVIGATION ================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );
});


/* Close navigation after selecting a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation"
        );

    });

});


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-main, .terminal-card, .expertise-card, .project-feature, .timeline-item, .cta-content, .contact-item"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});


const observer = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {
    observer.observe(element);
});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");

const navObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                document
                    .querySelectorAll(".nav-links a")
                    .forEach(link => {

                        link.classList.remove("current");

                        if (
                            link.getAttribute("href") ===
                            `#${entry.target.id}`
                        ) {
                            link.classList.add("current");
                        }

                    });

            }

        });

    },
    {
        rootMargin: "-35% 0px -60% 0px"
    }
);


sections.forEach(section => {
    navObserver.observe(section);
});


/* ================= SUBTLE MOUSE EFFECT ================= */

const hero = document.querySelector(".hero");
const heroGrid = document.querySelector(".hero-grid");

if (hero && heroGrid) {

    hero.addEventListener("mousemove", event => {

        const x = (event.clientX / window.innerWidth - 0.5) * 10;
        const y = (event.clientY / window.innerHeight - 0.5) * 10;

        heroGrid.style.transform =
            `translate(${x}px, ${y}px)`;

    });

}
