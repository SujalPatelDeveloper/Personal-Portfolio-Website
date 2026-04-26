// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// --- Custom Cursor Logic ---
const cursor = document.getElementById('cursor');

// Optimized Cursor Movement
const xSetter = gsap.quickSetter(cursor, "x", "px");
const ySetter = gsap.quickSetter(cursor, "y", "px");

document.addEventListener('mousemove', (e) => {
    xSetter(e.clientX);
    ySetter(e.clientY);
});

// Cursor Hover Effects (Generic)
const interactive = document.querySelectorAll('a, button, .magnetic-target');
interactive.forEach(el => {
    el.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            scale: 2.5,
            backgroundColor: "transparent",
            border: "1px solid var(--text-dark)",
            duration: 0.15
        });
    });
    el.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            scale: 1,
            backgroundColor: "var(--text-dark)",
            border: "none",
            duration: 0.15
        });
    });
});

// Cursor "VIEW" Mode for Projects
const projectCards = document.querySelectorAll('.preview-card, .work-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        cursor.classList.add('view-mode');
        cursor.innerText = "VIEW";
        gsap.to(cursor, {
            backgroundColor: "var(--accent-red)",
            borderColor: "var(--accent-red)",
            color: "#fff",
            duration: 0.15
        });
    });
    card.addEventListener('mouseleave', () => {
        cursor.classList.remove('view-mode');
        cursor.innerText = "";
        gsap.to(cursor, {
            backgroundColor: "var(--text-dark)",
            borderColor: "var(--text-dark)",
            duration: 0.15
        });
    });
});

// --- Magnetic Effect ---
const magneticElements = document.querySelectorAll('.magnetic-target, .resume-btn, .theme-toggle');
magneticElements.forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(item, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.5,
            ease: "power2.out"
        });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)"
        });
    });
});

// --- Scroll Progress Bar ---
gsap.to("#scroll-progress", {
    width: "100%",
    ease: "none",
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.1
    }
});

// --- Text Split & Reveal Animations ---
function initTextAnimations() {
    // Hero Title Reveal
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const text = heroTitle.innerText;
        heroTitle.innerHTML = text.split('').map(char => `<span class="char">${char}</span>`).join('');
        
        gsap.from(".char", {
            opacity: 0,
            y: 50,
            filter: "blur(10px)",
            stagger: 0.05,
            duration: 1,
            ease: "power4.out",
            delay: 0.5
        });
    }

    // Section Titles Reveal
    const sectionTitles = document.querySelectorAll('section h2, #work-hero h1, #about-hero h1, #contact h1');
    sectionTitles.forEach(title => {
        const text = title.innerText;
        // Check if it's the main PROJECTS title
        // Check if it's the main page headings
        if (title.tagName === 'H1' && (title.closest('#work-hero') || title.closest('#about-hero') || title.closest('#contact'))) {
             const text = title.innerText;
             const isWorkPage = title.closest('#work-hero');
             const accentColor = isWorkPage ? 'var(--accent-lime)' : 'var(--accent-red)';
             
             title.innerHTML = text.split('').map(char => {
                 const isDot = char === '.';
                 // Re-apply accent to dots or specific parts if needed
                 const style = isDot ? `color: ${accentColor};` : '';
                 return `<span class="char" style="${style}">${char === ' ' ? '&nbsp;' : char}</span>`;
             }).join('');
             gsap.from(title.querySelectorAll('.char'), {
                opacity: 0,
                y: 100,
                filter: "blur(20px)",
                stagger: 0.05,
                duration: 1.5,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: title,
                    start: "top 90%"
                }
             });

             // Add hover effect that doesn't move the container
             title.addEventListener('mouseenter', () => {
                 gsap.to(title.querySelectorAll('.char'), {
                     y: -10,
                     stagger: 0.02,
                     duration: 0.3,
                     ease: "power2.out"
                 });
             });
             title.addEventListener('mouseleave', () => {
                 gsap.to(title.querySelectorAll('.char'), {
                     y: 0,
                     stagger: 0.01,
                     duration: 0.3,
                     ease: "power2.in"
                 });
             });
        } else {
            gsap.from(title, {
                scrollTrigger: {
                    trigger: title,
                    start: "top 90%",
                },
                y: 30,
                opacity: 0,
                filter: "blur(5px)",
                duration: 1.2,
                ease: "power3.out"
            });
        }
    });
}

// --- Scroll to Top Logic ---
const scrollTopBtn = document.getElementById('scroll-top');
if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// --- Page Load Sequence ---
window.addEventListener('load', () => {
    initTextAnimations();
    initWorkHoverAnimations(); // New: Cinematic reveal for work page

    const tl = gsap.timeline();
    tl.from(".hero-sub", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out"
    }, "+=0.2")
    .from("nav", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=0.5");
});

// --- Section Revelations ---
const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach(el => {
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
    });
});

// --- Dark Mode Toggle ---
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    if (themeToggle) themeToggle.innerHTML = '🌞';
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        themeToggle.innerHTML = isDark ? '🌞' : '🌙';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

// --- Work Image Parallax (Fixed Selectors) ---
const workImages = document.querySelectorAll('.preview-img img, .work-img img');
workImages.forEach(img => {
    gsap.to(img, {
        scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        },
        y: -50,
        scale: 1.1,
        ease: "none"
    });
});

// --- Cinematic Text Reveal for Work Projects ---
function initWorkHoverAnimations() {
    const projectHeadings = document.querySelectorAll('.work-card h3');
    
    projectHeadings.forEach(heading => {
        const text = heading.innerText;
        heading.innerHTML = text.split('').map(char => `<span class="work-char" style="display:inline-block;">${char === ' ' ? '&nbsp;' : char}</span>`).join('');
        
        const chars = heading.querySelectorAll('.work-char');
        const card = heading.closest('.work-card');

        card.addEventListener('mouseenter', () => {
            gsap.to(chars, {
                y: -5,
                opacity: 0.5,
                stagger: 0.02,
                duration: 0.2,
                ease: "power2.in",
                onComplete: () => {
                    gsap.set(chars, { y: 15 });
                    gsap.to(chars, {
                        y: 0,
                        opacity: 1,
                        stagger: 0.02,
                        duration: 0.4,
                        ease: "power4.out"
                    });
                }
            });
        });
    });
}

// --- Live Clock ---
function updateClock() {
    const clockEl = document.getElementById('local-time');
    if (!clockEl) return;

    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    clockEl.textContent = `${timeStr} GMT+5:30`;
}

if (document.getElementById('local-time')) {
    updateClock();
    setInterval(updateClock, 1000);
}
