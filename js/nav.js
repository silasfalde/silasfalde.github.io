/**
 * Navigation: active section highlight, scroll indicator, hero-in-view state.
 */
(function () {
  'use strict';

  var NEXT_SECTION = {
    about: 'experience',
    experience: 'education',
    education: 'projects',
    projects: 'skills',
    skills: 'contact',
    contact: 'about',
  };
  var headerOffset = 90;

  function setActiveNavLink() {
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.header__link[href^="#"]');
    var scrollIndicator = document.getElementById('scroll-indicator');
    var activeId = null;
    var viewportTop = window.scrollY + headerOffset;

    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      var id = section.getAttribute('id');
      if (!id) continue;
      var rect = section.getBoundingClientRect();
      var sectionTop = rect.top + window.scrollY;
      var sectionBottom = sectionTop + rect.height;
      if (sectionTop <= viewportTop && sectionBottom > viewportTop) {
        activeId = id;
        break;
      }
      if (sectionTop < viewportTop) activeId = id;
    }

    for (var j = 0; j < navLinks.length; j++) {
      var link = navLinks[j];
      var href = link.getAttribute('href') || '';
      link.classList.toggle('active', href === '#' + activeId);
    }

    if (scrollIndicator) {
      var atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 100;
      if (atBottom) {
        scrollIndicator.href = '#top';
        scrollIndicator.classList.add('scroll-indicator--visible');
        scrollIndicator.classList.remove('scroll-indicator--hero');
      } else if (activeId === 'contact') {
        scrollIndicator.href = '#bottom';
        scrollIndicator.classList.add('scroll-indicator--visible');
        scrollIndicator.classList.remove('scroll-indicator--hero');
      } else if (activeId) {
        scrollIndicator.href = '#' + (NEXT_SECTION[activeId] || 'about');
        scrollIndicator.classList.add('scroll-indicator--visible');
        scrollIndicator.classList.remove('scroll-indicator--hero');
      } else if (window.scrollY < window.innerHeight) {
        scrollIndicator.href = '#about';
        scrollIndicator.classList.add('scroll-indicator--visible', 'scroll-indicator--hero');
      } else {
        scrollIndicator.classList.remove('scroll-indicator--visible', 'scroll-indicator--hero');
      }
    }

    var heroInView = !activeId && window.scrollY < window.innerHeight;
    document.body.classList.toggle('hero-in-view', heroInView);
    var brand = document.querySelector('.header__brand');
    if (brand) brand.classList.toggle('hero-in-view', heroInView);
  }

  setActiveNavLink();
  window.addEventListener('scroll', function () {
    setActiveNavLink();
  }, { passive: true });

  var scrollIndicatorEl = document.getElementById('scroll-indicator');
  if (scrollIndicatorEl) {
    scrollIndicatorEl.addEventListener('click', function () {
      scrollIndicatorEl.classList.remove('scroll-indicator--hero');
    });
  }
})();
