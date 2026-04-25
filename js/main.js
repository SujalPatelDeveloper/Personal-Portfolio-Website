// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Custom Cursor - Clean Minimalist
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
    });
});

// Cursor Hover Effects
const interactive = document.querySelectorAll('a, .work-card, button');
interactive.forEach(el => {
    el.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            scale: 2,
            backgroundColor: "var(--text-dark)",
            borderColor: "var(--text-dark)",
            duration: 0.3
        });
    });
    el.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            scale: 1,
            backgroundColor: "var(--text-dark)",
            borderColor: "var(--text-dark)",
            duration: 0.3
        });
    });
});

// Scroll Progress Tracking
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

// Scroll to Top Logic
const scrollTopBtn = document.getElementById('scroll-top');
if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add hover effect to the new button
    scrollTopBtn.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            scale: 2,
            backgroundColor: "var(--text-dark)",
            borderColor: "var(--text-dark)",
            duration: 0.3
        });
    });
    scrollTopBtn.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            scale: 1,
            backgroundColor: "var(--text-dark)",
            borderColor: "var(--text-dark)",
            duration: 0.3
        });
    });
}

// Initial Page Load Animations
window.addEventListener('load', () => {
    const tl = gsap.timeline();

    tl.from("h1", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.2
    })
        .from(".hero-sub", {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: "power3.out"
        }, "-=0.8")
        .from("nav", {
            y: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        }, "-=1");
});

// Section Revelations
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

// Dark Mode Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved preference
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

    // Hover effect
    themeToggle.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            scale: 2,
            backgroundColor: "var(--text-dark)",
            borderColor: "var(--text-dark)",
            duration: 0.3
        });
    });
    themeToggle.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            scale: 1,
            backgroundColor: "var(--text-dark)",
            borderColor: "var(--text-dark)",
            duration: 0.3
        });
    });
}

// Work Image Parallax
const workImages = document.querySelectorAll('.work-img img');
workImages.forEach(img => {
    gsap.to(img, {
        scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        },
        y: -30,
        ease: "none"
    });
});

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
