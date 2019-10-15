'use strict'
document.addEventListener('DOMContentLoaded', function(){
    const vacancyItem = $(document).find('.vacancy-item');

// 


    vacancyItem.each(function(i, el) {
        let moreBtn = $(el).find('.js-hide-open');
        let moreInfo = $(el).find('.js-more-info');
    
        moreBtn.on('click', function() {
            if (moreBtn.hasClass('open')) {
                $(this).removeClass('open');
            } else {
                $(this).addClass('open');
            }
    
            moreInfo.slideToggle('slow');
        })
    })
})

