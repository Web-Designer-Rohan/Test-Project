document.addEventListener('DOMContentLoaded', function() {
    // Animation control for profile image
    const profileImg = document.querySelector('.profile-img');
    
    function toggleAnimation() {
        if (window.innerWidth < 768) {
            profileImg.style.animation = 'none';
        } else {
            profileImg.style.animation = 'float 3s ease-in-out infinite';
        }
    }
    
    // Initial check
    toggleAnimation();
    
    // Check on resize
    window.addEventListener('resize', toggleAnimation);
    
    // Add click effect to social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
    });
});
