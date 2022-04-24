/*==================== SHOW MENU ====================*/
const primaryNav = document.getElementById('primary-navigation'),
  navToggle = document.getElementById('js-nav-toggle'),
  navIcon = document.getElementById('js-nav-icon');

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible');

  console.log(visibility);
  if (visibility == 'false') {
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('data-pressed', true);
    navToggle.setAttribute('aria-label', 'Close primary navigation');
    navIcon.classList = 'bi bi-x';
  } else if (visibility == 'true') {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('data-pressed', false);
    navToggle.setAttribute('aria-label', 'Open primary navigation');
    navIcon.classList = 'bi bi-list';
  }
});
