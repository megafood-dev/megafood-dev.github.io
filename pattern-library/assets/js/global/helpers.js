'use strict';

MF.helpers = {
    scrollTo: (target, topPadding) => {
        topPadding = topPadding || 0;

        if(typeof target == 'number'){
            $('html, body').animate({
                scrollTop: target - topPadding
            }, 500);
        } else {
            $('html, body').animate({
                scrollTop: target.offset().top - topPadding
            }, 500);
        }
    },

    widthChanges: () => {//do things only when resize width
        MF.sideNav.init();
    },

    init: () => {
        //resize changes
        let widthTimeout = null,
            windowWidth = window.innerWidth;//check to see if this includes the scrollbar or not and if @media does, they should either both include it or both exclude it so they match

        window.onresize = function(){
            //Timer to keep it from running with every pixel change
            if(widthTimeout !== null) clearTimeout(widthTimeout);

            widthTimeout = setTimeout(function(){

                if(this.innerWidth !== windowWidth){
                    windowWidth = this.innerWidth;

                    MF.helpers.widthChanges();
                }
            }, 500);
        }

        //orientation changes
        window.onorientationchange = function(){
            MF.helpers.widthChanges();
        }
    }
};

module.exports = MF.helpers;
