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

// Function to send form data to WhatsApp
function sendToWhatsApp() {
    // 1. Get values from the form inputs
    const parentName = document.getElementById('parent-name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const studentClass = document.getElementById('student-class').value.trim();
    const city = document.getElementById('city').value;
    const area = document.getElementById('area').value.trim();
    const tutorPref = document.getElementById('tutor-preference').value;

    // 2. Validate if fields are not empty before sending
    if (!parentName || !phone || !studentClass || !city || !area || !tutorPref) {
        alert("Please fill out all fields before sending via WhatsApp.");
        return;
    }

    // 3. Format the message
    const message = `*New Demo Registration - Spectrum Home Tutor*%0A%0A` +
                    `*Parent's Name:* ${parentName}%0A` +
                    `*Phone/WhatsApp:* ${phone}%0A` +
                    `*Child's Class:* ${studentClass}%0A` +
                    `*City:* ${city}%0A` +
                    `*Area/Location:* ${area}%0A` +
                    `*Tutor Preference:* ${tutorPref}`;

    // 4. Your WhatsApp Number (Country code + number without plus sign)
    const whatsappNumber = "923127343373";

    // 5. Create WhatsApp URL and open it
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
}
