 // Smooth scroll for navbar links
    document.querySelectorAll('ul li a').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Contact button animation
    document.querySelector('.button').addEventListener('click', function() {
        this.classList.add('clicked');
        setTimeout(() => this.classList.remove('clicked'), 300);
    });

    // Blog filter
    document.getElementById('blog-filter').addEventListener('change', function() {
        const topic = this.value;
        document.querySelectorAll('.blog-post').forEach(post => {
            if (topic === 'all' || post.dataset.topic === topic) {
                post.style.display = '';
            } else {
                post.style.display = 'none';
            }
        });
    });