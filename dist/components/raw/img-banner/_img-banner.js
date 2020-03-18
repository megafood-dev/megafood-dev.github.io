'use strict';

MF.imgBanner = {
    init: () => {
        const imgBannerLink = $('.img-banner a');
        const haveImgBannerLink = imgBannerLink.length;

        if(haveImgBannerLink){
            imgBannerLink.click(function(e){
                e.preventDefault();
            
                const thisHref = $(this).attr('href');
                
                MF.helpers.scrollTo($(thisHref));
            });
        }
    }
};

module.exports = MF.imgBanner;
