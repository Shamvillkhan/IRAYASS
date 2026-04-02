document.addEventListener('DOMContentLoaded', () => {

    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.add('scrolled'); // Force light nav for visual consistency, actually let's toggle properly
            if (window.scrollY === 0) {
                navbar.classList.remove('scrolled');
            }
        }
    });

    // --- Mobile Menu Toggle ---
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        // Toggle hamburger lines to X if needed, basic implementation here:
        hamburger.classList.toggle('active-mode');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // --- Intersection Observer for Scroll Animations ---
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Optional: run only once
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // --- 3D Hover Effect for Collections ---
    const cards3d = document.querySelectorAll('.3d-hover');
    
    cards3d.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xMid = rect.width / 2;
            const yMid = rect.height / 2;
            
            const xWalk = (x - xMid) / 20;
            const yWalk = (yMid - y) / 20;
            
            card.style.transform = `rotateY(${xWalk}deg) rotateX(${yWalk}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `rotateY(0) rotateX(0)`;
        });
    });

    // --- Particles on Cursor ---
    /* Optional: complex particle system can be added here, currently disabled for performance */

});
