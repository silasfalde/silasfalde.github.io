/**
 * Header logo: set yellow line width to match "Silas Falde" text.
 */
(function () {
  'use strict';

  function setLogoLineWidth() {
    var textEl = document.querySelector('.header__brand #logo-name');
    var lineEl = document.querySelector('.header__brand .header__logo-line');
    if (textEl && lineEl && typeof textEl.getComputedTextLength === 'function') {
      lineEl.setAttribute('x2', String(textEl.getComputedTextLength()));
    }
  }

  setLogoLineWidth();
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(setLogoLineWidth);
  }
})();
