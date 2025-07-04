// Wait until the document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the header element
    const header = document.querySelector('.site-header');
    
    // Function to handle scroll events
    function handleScroll() {
        // Add 'scrolled' class if scrolled down more than 50px
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Toggle mobile menu
    const menuToggle = document.querySelector('.menu-toggle');
    const siteNav = document.querySelector('.site-nav');
    
    if (menuToggle && siteNav) {
        menuToggle.addEventListener('click', function() {
            siteNav.classList.toggle('active');
        });
    }
    
    // Improved scroll behavior for navigation links
    const navLinks = document.querySelectorAll('.site-nav a, .logo, a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only process internal links (not external ones)
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    
                    // Close the mobile menu if it's open
                    if (siteNav.classList.contains('active')) {
                        siteNav.classList.remove('active');
                    }
                    
                    // Scroll to the element
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // We don't need to handle form submission manually anymore
    // as Formspree will handle it. This allows the form to work
    // even if JavaScript is disabled in the visitor's browser.
    
    // But we'll add some form validation for better UX
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        // Display loading state when form is submitted
        contactForm.addEventListener('submit', function() {
            const submitButton = this.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.innerHTML = 'Sending...';
                submitButton.disabled = true;
            }
        });
    }
});
