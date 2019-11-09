const 
    $blogItem = $('.article-item'),
    $itemWrap = '<div class="article-3-wrap"></div>';

    function patternItem() {
        if ($(window).outerWidth(true) < 768) {
            for (let i = 0; i < $blogItem.length; i+=7) {
                $($blogItem[i+4]).add($($blogItem[i+4]).next().add($($blogItem[i+4]).next().next())).wrapAll($itemWrap)
            }

        } else if ( $(window).outerWidth(true) < 1170) {

            for (let i = 0; i < $blogItem.length; i+=12) {
                $($blogItem[i]).addClass('wide-item');
                $($blogItem[i+11]).addClass('wide-item');
                $($blogItem[i+5]).add($($blogItem[i+5]).next().add($($blogItem[i+5]).next().next())).wrapAll($itemWrap)
            }

        } else {
            for (let i = 0; i < $blogItem.length; i+=12) {
                $($blogItem[i+1]).addClass('wide-item');
                $($blogItem[i+5]).addClass('wide-item');
                $($blogItem[i+9]).add($($blogItem[i+9]).next().add($($blogItem[i+9]).next().next())).wrapAll($itemWrap)
            }
        }
    }

    patternItem();


