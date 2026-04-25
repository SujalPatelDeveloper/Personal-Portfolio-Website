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
            backgroundColor: "rgba(230, 57, 70, 0.1)",
            borderColor: "var(--accent-red)",
            duration: 0.3
        });
    });
    el.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            scale: 1,
            backgroundColor: "transparent",
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
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});

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
