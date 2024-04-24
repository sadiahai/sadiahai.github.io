document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const carouselInner = carousel.querySelector(".carousel-inner");
    const carouselItems = carousel.querySelectorAll(".carousel-item");
    const prevButton = carousel.querySelector(".prev");
    const nextButton = carousel.querySelector(".next");
    var currentIndex = 0;

    function showSlide(index) {
        carouselInner.style.transform = `translateX(-${index * 100}%)`;
    }

    function goToPrev() {
        currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
        showSlide(currentIndex);
    }

    function goToNext() {
        currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    }

    prevButton.addEventListener("click", goToPrev);
    nextButton.addEventListener("click", goToNext);

    // Keyboard accessibility
    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
            goToPrev();
        } else if (event.key === "ArrowRight") {
            goToNext();
        }
    });
});