const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;

            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);


document.addEventListener('DOMContentLoaded', function () {
    const imageSets = {
        1: [
            'assests/images/aaari works/a2.jpg',
            'assests/images/aaari works/a4.jpg',
            'assests/images/aaari works/a12.jpg',
            'assests/images/aaari works/a1a.jpg',
            'assests/images/aaari works/a6.jpg',
            'assests/images/aaari works/a7.jpg',
            'assests/images/aaari works/a8.jpg',
            'assests/images/aaari works/a9.jpg',
            'assests/images/aaari works/a10.jpg',
            'assests/images/aaari works/a12.jpg',

        ],
        2: [
            'assests/images/mehandi/m1.JPG',
            'assests/images/mehandi/m2.JPG',
            'assests/images/mehandi/m11.JPG',
            'assests/images/mehandi/m4.JPG',
            'assests/images/mehandi/m5.JPG',
            'assests/images/mehandi/m6.JPG',
            'assests/images/mehandi/m11.JPG',
            'assests/images/mehandi/m8.JPG',
            'assests/images/mehandi/m9.JPG',
            'assests/images/mehandi/m12.JPG',
        ],
        3: [
            'assests/images/clientimages/c1.jpg',
            'assests/images/clientimages/c2.jpg', 
            'assests/images/clientimages/c3.jpg', 
            'assests/images/clientimages/c4.jpg',
            'assests/images/clientimages/c5.jpg',
            'assests/images/clientimages/c6.jpg', 
            'assests/images/clientimages/c7.jpg', 
            'assests/images/clientimages/c8.jpg',
        ],
    };

    const imageList = document.querySelector('.image-list');
    const buttons = document.querySelectorAll('.btn');

    function loadImages(set) {
        imageList.innerHTML = ''; // Clear current images
        imageSets[set].forEach((src) => {
            const img = document.createElement('img');
            img.className = 'image-item';
            img.src = src;
            img.alt = src.split('/').pop();
            imageList.appendChild(img);
        });
    }

    buttons.forEach((button) =>
        button.addEventListener('click', function () {
            const set = this.getAttribute('data-set');
            loadImages(set);
        })
    );

    // Load the first set by default
    loadImages(1);
});