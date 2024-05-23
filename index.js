$(document).ready(function () {
    $('.room-slider').owlCarousel({
        loop: true,
        margin: 30,
        // autoplay: true,
        // autoplayTimeout: 3000,
        smartSpeed: 450,
        nav: true,
        Infinity: true,
        navText: ['<span class="custom-prev">&lt;</span>', '<span class="custom-next">&gt;</span>'], // Custom navigation icons
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            991: {
                items: 3
            },
            1200: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    });

    $('.custom-next').click(function () {
        $('.room-slider').trigger('next.owl.carousel');
    });

    $('.custom-prev').click(function () {
        $('.room-slider').trigger('prev.owl.carousel');
    });


});

const scrollbar = document.getElementById('swiper-scrollbar-1716482138826');
const scrollProgress = scrollbar.querySelector('.scroll-progress');

function updateScrollProgress() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    const progress = scrollTop / (scrollHeight - clientHeight);
    scrollProgress.style.width = `${progress * 100}%`;
}

scrollbar.addEventListener('scroll', updateScrollProgress);
window.addEventListener('scroll', updateScrollProgress);

updateScrollProgress(); // Initial update
