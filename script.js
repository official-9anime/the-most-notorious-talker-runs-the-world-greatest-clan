// Poster Modal Logic
const poster = document.getElementById('poster');
const posterModal = document.getElementById('poster-modal');
const modalImg = document.getElementById('modal-img');
const closeButtons = document.querySelectorAll('.close');

// Show enlarged poster on click
poster.onclick = function() {
    posterModal.style.display = 'block';
    modalImg.src = this.src;
}

// Trailer Modal Logic
const watchTrailerBtn = document.getElementById('watch-trailer');
const trailerModal = document.getElementById('trailer-modal');

// Open trailer modal on click
watchTrailerBtn.onclick = function() {
    trailerModal.style.display = 'block';
}

// Close modals on clicking 'x' (close button)
closeButtons.forEach(btn => {
    btn.onclick = function() {
        posterModal.style.display = 'none';
        trailerModal.style.display = 'none';
    }
});

// Close modal if user clicks outside the modal content
window.onclick = function(event) {
    if (event.target === posterModal) {
        posterModal.style.display = 'none';
    }
    if (event.target === trailerModal) {
        trailerModal.style.display = 'none';
    }
}
