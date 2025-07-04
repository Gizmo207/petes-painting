// ========== Website JavaScript ==========
// This file controls interactive behavior on the website

// Wait until the document (webpage) is fully loaded before running any code
// This ensures all HTML elements exist before we try to work with them
document.addEventListener('DOMContentLoaded', function() {
    // HEADER COLOR CHANGE ON SCROLL
    // This makes the header change appearance when you scroll down the page
    
    // Find the header element on the page
    const header = document.querySelector('.site-header');
    
    // This function runs whenever the page is scrolled
    function handleScroll() {
        // Check if we've scrolled down more than 50 pixels
        if (window.scrollY > 50) {
            // If scrolled down, add the 'scrolled' class to change header appearance
            header.classList.add('scrolled');
        } else {
            // If at the top, remove the 'scrolled' class to restore original appearance
            header.classList.remove('scrolled');
        }
    }
    
    // Tell the browser to run our function whenever scrolling happens
    window.addEventListener('scroll', handleScroll);
    
    // MOBILE MENU FUNCTIONALITY
    // This makes the hamburger menu work on small screens
    
    // Find the menu button (hamburger icon) and navigation menu
    const menuToggle = document.querySelector('.menu-toggle');
    const siteNav = document.querySelector('.site-nav');
    
    // Set up the menu button to show/hide the menu when clicked
    if (menuToggle && siteNav) {
        menuToggle.addEventListener('click', function() {
            // Toggle the 'active' class which shows/hides the menu
            siteNav.classList.toggle('active');
        });
    }
    
    // SMOOTH SCROLLING FOR NAVIGATION
    // This makes clicking on navigation links scroll smoothly instead of jumping
    
    // Find all navigation links (in the menu, logo, and any link that points to a section with #)
    const navLinks = document.querySelectorAll('.site-nav a, .logo, a[href^="#"]');
    
    // For each navigation link we found, add special behavior
    navLinks.forEach(link => {
        // When someone clicks on a navigation link
        link.addEventListener('click', function(e) {
            // Check if this is a link to a section on the same page (starts with #)
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                // Get the ID of the section we want to scroll to (remove the # symbol)
                const targetId = href.substring(1);
                
                // Find the section with that ID
                const targetElement = document.getElementById(targetId);
                
                // Only proceed if we found a matching section
                if (targetElement) {
                    // Prevent the default jump-to-section behavior
                    e.preventDefault();
                    
                    // If the mobile menu is open, close it after clicking
                    if (siteNav.classList.contains('active')) {
                        siteNav.classList.remove('active');
                    }
                    
                    // Scroll smoothly to the section
                    // The -100 gives some space at the top so the section isn't hidden behind the header
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'  // Makes the scrolling smooth instead of instant
                    });
                }
            }
        });
    });
    
    // CONTACT FORM ENHANCEMENTS
    // This adds a loading state to the form button when submitted
    
    // We don't need to handle form submission manually anymore
    // as Formspree will handle sending the form data for us
    // This approach ensures the form works even if JavaScript is disabled in the visitor's browser
    
    // Find the contact form on the page
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        // When the form is submitted
        contactForm.addEventListener('submit', function() {
            // Find the submit button
            const submitButton = this.querySelector('button[type="submit"]');
            
            if (submitButton) {
                // Change the button text to "Sending..." to show something is happening
                submitButton.innerHTML = 'Sending...';
                
                // Disable the button to prevent multiple submissions
                submitButton.disabled = true;
            }
        });
    }
});
