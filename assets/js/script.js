

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000, // Adjust the delay time between slides
            disableOnInteraction: false,
        },
    });
});



// JavaScript for Lightbox Functionality
const cards = document.querySelectorAll('.testimonial-card');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const close = document.querySelector('.lightbox .close');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentIndex = 0;

// Open lightbox
cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        currentIndex = index;
        showImage(index);
        lightbox.style.display = 'flex';
    });
});

// Close lightbox
close.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Show image based on index
function showImage(index) {
    const card = cards[index];
    const imgSrc = card.querySelector('img').src;
    const name = card.getAttribute('data-name');
    const treatment = card.getAttribute('data-treatment');

    lightboxImage.src = imgSrc;
    lightboxCaption.innerHTML = `${name} <span>${treatment}</span>`;
}

// Navigate lightbox images
prev.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : cards.length - 1;
    showImage(currentIndex);
});

next.addEventListener('click', () => {
    currentIndex = (currentIndex < cards.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
});

const swiper = new Swiper('.custom-swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.custom-swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    }
});