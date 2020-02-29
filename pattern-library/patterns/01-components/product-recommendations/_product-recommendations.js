'use strict';

const slick = require('slick-carousel-browserify');

MF.productRecommendations = {
    init: () => {
        const recProducts = $('.product-recommendations .slider');
        const haveRecProducts = recProducts.length;

        if(haveRecProducts){
            slick(recProducts, {
                dots: false,
                speed: 500,
                prevArrow: '<button class="prev">Previous Slide</button>',
                nextArrow: '<button class="next">Next Slide</button>',
                slidesToShow: 3,
                slidesToScroll: 3,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 375,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            })
        }
    }
};

module.exports = MF.productRecommendations;
