// JavaScript for Filtering Reviews by City Dynamically
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const reviewCards = document.querySelectorAll('.review-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            this.classList.add('active');

            const selectedCity = this.getAttribute('data-city');

            reviewCards.forEach(card => {
                const cardCity = card.getAttribute('data-city');

                if (selectedCity === 'all' || selectedCity === cardCity) {
                    // Show matching cards smoothly
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    // Hide non-matching cards smoothly
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});
