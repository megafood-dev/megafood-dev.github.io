'use strict';

MF.sideNav = {
    init: () => {
        $('.side-nav').each(function(){
            const thisAccordion = $(this);
            const thisTitle = thisAccordion.find('.side-nav-btn');
            const thisContent = thisAccordion.find('nav');
        
            if(matchMedia('(min-width: 57.563em)').matches){//L+
                MF.accordion.removeAccordion(thisAccordion, thisTitle, thisContent);
            } else {//S
                MF.accordion.createAccordion(thisAccordion, thisTitle, thisContent);
            }
        });
    }
};

module.exports = MF.sideNav;
