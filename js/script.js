// Main JavaScript for Philadelphia Dental Offices

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const createMobileNav = () => {
        const nav = document.querySelector('nav ul');
        const header = document.querySelector('header');
        
        // Create mobile menu button
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.classList.add('mobile-menu-btn');
        mobileMenuBtn.innerHTML = '<span></span><span></span><span></span>';
        header.insertBefore(mobileMenuBtn, nav);
        
        // Toggle mobile menu
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.classList.toggle('active');
        });
    };
    
    // Initialize mobile navigation for screens smaller than 768px
    if (window.innerWidth < 768) {
        createMobileNav();
    }
    
    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            let isValid = true;
            let errorMessage = '';
            
            if (!firstName.trim()) {
                errorMessage += 'First name is required.\n';
                isValid = false;
            }
            
            if (!lastName.trim()) {
                errorMessage += 'Last name is required.\n';
                isValid = false;
            }
            
            if (!phone.trim()) {
                errorMessage += 'Phone number is required.\n';
                isValid = false;
            } else if (!/^\d{10}$/.test(phone.replace(/\D/g, ''))) {
                errorMessage += 'Please enter a valid 10-digit phone number.\n';
                isValid = false;
            }
            
            if (!message.trim()) {
                errorMessage += 'Message is required.\n';
                isValid = false;
            }
            
            if (!isValid) {
                alert('Please correct the following errors:\n' + errorMessage);
                return;
            }
            
            // If form is valid, simulate form submission
            alert('Thank you for your message! We will contact you shortly.');
            contactForm.reset();
            
            // In a real implementation, you would send the form data to a server
            // For example:
            // const formData = new FormData(contactForm);
            // fetch('your-endpoint', {
            //     method: 'POST',
            //     body: formData
            // })
            // .then(response => response.json())
            // .then(data => console.log(data))
            // .catch(error => console.error('Error:', error));
        });
    }
    
    // Blog Search Functionality
    const blogSearch = document.getElementById('blogSearch');
    const blogPosts = document.querySelectorAll('.blog-card');
    
    if (blogSearch && blogPosts.length > 0) {
        blogSearch.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            blogPosts.forEach(post => {
                const title = post.querySelector('h3').textContent.toLowerCase();
                const content = post.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || content.includes(searchTerm)) {
                    post.style.display = 'block';
                } else {
                    post.style.display = 'none';
                }
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // FAQ Accordion (for Dental Implants FAQ)
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', function() {
                // Toggle current item
                item.classList.toggle('active');
                
                // Close other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
            });
        });
    }
});
