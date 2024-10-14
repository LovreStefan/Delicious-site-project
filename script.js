
$(document).ready(function(){

    // Slider testimonial

    var $sliderTestimonial = $('.testimonial-section__slider');

    if($sliderTestimonial.length) {
        $sliderTestimonial.slick({
            slidesToScroll: 1,
            slidesToShow: 1,
            autoplay: true,
            infinite: true,
            dots: false, 
            autoplaySpeed: 5000,
            speed: 800,
            fade: true,
            cssEase: 'linear',
            arrows: true,
            prevArrow: $(".testimonial-section__slider-arrow-left"),
            nextArrow: $(".testimonial-section__slider-arrow-right"),
        });
    }






    const hamburger = document.querySelector(".site-header__navbar-hamburger");
    const navbar = document.querySelector(".site-header__navbar");

    hamburger.addEventListener("click", () =>{
        hamburger.classList.toggle("active");
        navbar.classList.toggle("active");
    })

    







});