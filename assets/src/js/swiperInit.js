import Swiper from 'swiper';


const mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 1, // Number of slides per view
    spaceBetween: 20, // Space between slides
    loop: true, // Enable looping

    // If you want navigation buttons
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // If you want pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Clickable pagination bullets
    },
});

export default mySwiper;