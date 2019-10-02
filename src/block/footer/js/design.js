'use strict'

    $('.js-side-menu-btn').on('click', function() {
        console.log('ku-ku');
        if ($('.side-menu').hasClass('_open')) {
          $('.side-menu').removeClass('_open')
        } else {
          $('.side-menu').addClass('_open')
        }
        
          if ($('.overlay').hasClass('_open')) {
          $('.overlay').removeClass('_open')
        } else {
          $('.overlay').addClass('_open')
        }
      })
      
      $('._overlay').on('click', function() {
        if ($('.side-menu').hasClass('_open')) {
          $('.side-menu').removeClass('_open')
        } else {
          $('.side-menu').addClass('_open')
        }
        
          if ($('._overlay').hasClass('_open')) {
          $('._overlay').removeClass('_open')
        } else {
          $('._overlay').addClass('_open')
        }
      })
