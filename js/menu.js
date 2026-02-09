/**
 * Mobile menu: toggle hamburger, close on link click / Escape / outside click.
 */
(function () {
  const header = document.querySelector('.header');
  const menuBtn = document.getElementById('header-menu-btn');
  const nav = document.getElementById('header-nav');
  if (!header || !menuBtn || !nav) return;

  function isOpen() {
    return menuBtn.getAttribute('aria-expanded') === 'true';
  }

  function open() {
    menuBtn.setAttribute('aria-expanded', 'true');
    menuBtn.setAttribute('aria-label', 'Close menu');
    header.classList.add('header--menu-open');
  }

  function close() {
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', 'Open menu');
    header.classList.remove('header--menu-open');
  }

  function toggle() {
    if (isOpen()) close();
    else open();
  }

  menuBtn.addEventListener('click', toggle);

  nav.querySelectorAll('.header__link').forEach(function (link) {
    link.addEventListener('click', function () {
      close();
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen()) close();
  });

  document.addEventListener('click', function (e) {
    if (!isOpen()) return;
    if (header.contains(e.target)) return;
    close();
  });
})();
