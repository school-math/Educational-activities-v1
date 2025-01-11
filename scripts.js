// Add this JavaScript to your page
window.onload = function() {
    const header = document.querySelector('.more');
    const originalPosition = header.offsetTop; // Store the header's original position

    window.onscroll = function() {
        if (window.pageYOffset >= originalPosition) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    };
};
