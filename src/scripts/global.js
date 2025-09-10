// Secondary carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (track && prevBtn && nextBtn) {
        let currentPosition = 0;
        const slideWidth = 300 + 16; // slide width + margin
        
        nextBtn.addEventListener('click', () => {
            const maxScroll = track.scrollWidth - track.parentElement.clientWidth;
            if (currentPosition < maxScroll) {
                currentPosition += slideWidth;
                track.style.transform = `translateX(-${currentPosition}px)`;
            }
        });
        
        prevBtn.addEventListener('click', () => {
            if (currentPosition > 0) {
                currentPosition -= slideWidth;
                track.style.transform = `translateX(-${currentPosition}px)`;
            }
        });
    }
});