const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        // Remove the 'active' class from all links
        navLinks.forEach(link => link.classList.remove('active'));

        // Add the 'active' class to the clicked link
        this.classList.add('active');
    });
});

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Function to handle mobile restriction
function handleMobileRestriction() {
    if (isMobileDevice()) {
        // Redirect mobile users to a different page
        window.location.href = '/Stellarweb/mobile'; // Replace with your desired URL
    }
}
// Run the mobile restriction check when the page loads
handleMobileRestriction();