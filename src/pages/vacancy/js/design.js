'use strict'
document.addEventListener('DOMContentLoaded', function(){
    const vacancyItem = $(document).find('.vacancy-item');
    const moreBtn = vacancyItem.find('.js-hide-open');
    const moreInfo = vacancyItem.find('.js-more-info');


    vacancyItem.each(function(i, el) {
        $(el).on('click', function() {
            if (moreBtn.hasClass('open')) {
                $(this).removeClass('open');
            } else {
                $(this).addClass('open');
            }
    
            moreInfo.slideToggle('slow');
        })
    })
})

