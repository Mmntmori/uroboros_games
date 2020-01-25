'use strict'

$(document).ready(function() {
  const $popupPrivacy = $(document).find('#privacy'),
        $popupPrivacyLink = $(document).find('#privacy-link'),
        $privacyCloseBtn = $(document).find('#privacy-close-btn'),
        $popupConfident = $(document).find('#confident'),
        $popupConfidentLink = $(document).find('#confident-link'),
        $confidentCloseBtn = $(document).find('#confident-close-btn');

  function openClosePopup(popup, link, closeBtn) {
    link.on('click', function() {
      popup.css('visibility', 'visible')
      popup.animate({
        opacity: '1'
      }, 400)
    })

    closeBtn.on('click', function() {
      popup.animate({
        opacity: '0'
      }, 400)
      setTimeout(function() {
        popup.css('visibility', 'hidden')
      }, 400)
    })
  }

  openClosePopup($popupPrivacy, $popupPrivacyLink, $privacyCloseBtn);

  openClosePopup($popupConfident, $popupConfidentLink, $confidentCloseBtn);
})