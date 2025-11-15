
        // Typing Animation
        document.addEventListener('DOMContentLoaded', function() {
            const typingText = document.getElementById('typing-text');
            const texts = [
                "Crafting Digital Futures",
                "Building Immersive Experiences",
                "Pushing Technological Boundaries",
                "Transforming Visions to Reality"
            ];
            let textIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            let typingSpeed = 100;
            
            function type() {
                const currentText = texts[textIndex];
                
                if (isDeleting) {
                    typingText.textContent = currentText.substring(0, charIndex - 1);
                    charIndex--;
                    typingSpeed = 50;
                } else {
                    typingText.textContent = currentText.substring(0, charIndex + 1);
                    charIndex++;
                    typingSpeed = 100;
                }
                
                if (!isDeleting && charIndex === currentText.length) {
                    isDeleting = true;
                    typingSpeed = 1000;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                    typingSpeed = 500;
                }
                
                setTimeout(type, typingSpeed);
            }
            
            // Start typing animation
            setTimeout(type, 1000);
            
            // Animate skill bars when they come into view
            const skillBars = document.querySelectorAll('.skill-progress');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const width = entry.target.getAttribute('data-width');
                        entry.target.style.width = width + '%';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            skillBars.forEach(bar => {
                observer.observe(bar);
            });
            
            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
            
            // Theme toggle functionality
            const themeToggle = document.getElementById('theme-toggle');
            if (themeToggle) {
                themeToggle.addEventListener('click', () => {
                    document.documentElement.classList.toggle('dark');
                    const icon = themeToggle.querySelector('i');
                    if (document.documentElement.classList.contains('dark')) {
                        icon.classList.remove('fa-sun');
                        icon.classList.add('fa-moon');
                    } else {
                        icon.classList.remove('fa-moon');
                        icon.classList.add('fa-sun');
                    }
                });
            }
            
            // Mobile menu toggle
            const menuToggle = document.getElementById('menu-toggle');
            const navLinks = document.querySelector('.hidden.md\\:flex');
            
            if (menuToggle && navLinks) {
                menuToggle.addEventListener('click', () => {
                    navLinks.classList.toggle('hidden');
                    navLinks.classList.toggle('flex');
                    navLinks.classList.toggle('flex-col');
                    navLinks.classList.toggle('absolute');
                    navLinks.classList.toggle('top-16');
                    navLinks.classList.toggle('left-0');
                    navLinks.classList.toggle('w-full');
                    navLinks.classList.toggle('bg-gray-900');
                    navLinks.classList.toggle('p-4');
                    navLinks.classList.toggle('space-y-4');
                });
            }
        });
  