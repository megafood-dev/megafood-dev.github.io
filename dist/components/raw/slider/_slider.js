'use strict';

const slick = require('slick-carousel-browserify');

PL.slider = {
    init: () => {
        const haveSlider = $('.pl-slider').length;

        if(haveSlider){
            console.log('haveSlider');

            slick($('.pl-slider'), {
                dots: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: '<button class="prev">Previous Slide</button>',
                nextArrow: '<button class="next">Next Slide</button>'
            });
        }
    }
};

module.exports = PL.slider;
