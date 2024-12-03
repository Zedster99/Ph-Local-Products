//for carousel
document.addEventListener('DOMContentLoaded', () => {
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function changeSlide() {
        carouselItems.forEach(item => item.style.display = 'none');
        currentIndex++;
        if (currentIndex > carouselItems.length - 1) {
            currentIndex = 0;
        }
        carouselItems[currentIndex].style.display = 'block';
    }

    changeSlide();
    setInterval(changeSlide, 3500);
});
