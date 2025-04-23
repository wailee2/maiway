document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('main-header');
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    // Scroll behavior for header
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('hide');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('hide')) {
            // Scrolling down
            header.classList.add('hide');
        } else if (currentScroll < lastScroll && header.classList.contains('hide')) {
            // Scrolling up
            header.classList.remove('hide');
        }
        
        lastScroll = currentScroll;
    });

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('open');
        mobileNav.classList.toggle('open');
    });

});