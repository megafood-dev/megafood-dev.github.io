'use strict';

const $ = require('jquery');

MF.accordion = {
    createAccordion: (container, title, content) => {
        //on load, show/hide
        if(container.hasClass('open')) {
            content.show();
            title.attr('aria-expanded', true);
        } else {
            content.hide();
            title.attr('aria-expanded', false);
        }

        title.off('click.accordionTitle');
        
        title.on('click.accordionTitle', function(e){
            const thisContainer = $(this).closest(container);
            const thisContent = thisContainer.find(content);

            if(thisContainer.hasClass('open')){
                MF.accordion.closeAccordion(thisContainer, $(this), thisContent);
            } else {
                MF.accordion.openAccordion(thisContainer, $(this), thisContent);
            }
        });
    },

    openAccordion: (container, title, content) => {
        container.addClass('open');
        title.attr('aria-expanded', true);
        content.show();
    },

    closeAccordion: (container, title,  content) => {
        container.removeClass('open');
        title.attr('aria-expanded', false);
        content.hide();
    },

    removeAccordion: (container, title, content) => {
        if(container.hasClass('open')) container.removeClass('open');

        content.show();
        title.unbind('.accordionTitle');
    },

    init: () => {
    }
};

module.exports = MF.accordion;
