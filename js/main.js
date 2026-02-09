/**
 * Main entry: footer year and init order.
 * Load first; other scripts may depend on DOM being ready.
 */
(function () {
  'use strict';

  var yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
