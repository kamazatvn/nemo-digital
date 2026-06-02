document.addEventListener('DOMContentLoaded', () => {
    

    
    // 1. Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Triggers when 15% of the section is visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove the translate and 0-opacity classes
                entry.target.classList.remove('opacity-0', 'translate-y-8');
                // Add full opacity and reset translation
                entry.target.classList.add('opacity-100', 'translate-y-0');
                
                // Stop observing once the animation has triggered
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Grab all sections with the fade-in class
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // 2. Newsletter Form Submission Handling
    const form = document.getElementById('newsletterForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = 'Đã đăng ký thành công &check;';
            btn.classList.replace('bg-nemo-orange', 'bg-nemo-beige');
            
            form.reset();

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.classList.replace('bg-nemo-beige', 'bg-nemo-orange');
            }, 3000);
        });
    }
    
});