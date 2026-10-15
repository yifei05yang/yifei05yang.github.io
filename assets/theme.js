(function () {
  'use strict';

  var storageKey = 'yifei-homepage-theme';
  var root = document.documentElement;
  var meta = document.querySelector('meta[name="theme-color"]');
  var media = typeof window.matchMedia === 'function'
    ? window.matchMedia('(prefers-color-scheme: dark)')
    : null;
  var button = null;
  var preference = null;

  function validTheme(value) {
    return value === 'light' || value === 'dark';
  }

  try {
    var saved = window.localStorage.getItem(storageKey);
    if (validTheme(saved)) preference = saved;
  } catch (error) {
    // The toggle still works when browser storage is unavailable.
  }

  function applyTheme(theme) {
    var dark = theme === 'dark';
    root.dataset.theme = theme;
    if (meta) meta.setAttribute('content', dark ? '#111820' : '#f7f8fa');
    if (button) {
      button.setAttribute('aria-pressed', String(dark));
      button.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
    }
  }

  function applyPreference() {
    applyTheme(preference || (media && media.matches ? 'dark' : 'light'));
  }

  // Run before page styles/content are painted to avoid a light-theme flash.
  applyPreference();

  function initializeButton() {
    button = document.getElementById('theme-toggle');
    if (!button) return;
    button.hidden = false;
    button.addEventListener('click', function () {
      preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try {
        window.localStorage.setItem(storageKey, preference);
      } catch (error) {
        // Retain the choice for this page even if it cannot be persisted.
      }
      applyPreference();
    });
    applyPreference();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeButton, { once: true });
  } else {
    initializeButton();
  }

  if (media) {
    var onSystemThemeChange = function () {
      if (!preference) applyPreference();
    };
    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', onSystemThemeChange);
    } else if (typeof media.addListener === 'function') {
      media.addListener(onSystemThemeChange);
    }
  }

  window.addEventListener('storage', function (event) {
    if (event.key !== storageKey && event.key !== null) return;
    preference = event.key !== null && validTheme(event.newValue) ? event.newValue : null;
    applyPreference();
  });
}());
