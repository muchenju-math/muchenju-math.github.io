(() => {
  const storageKey = 'academic-website-theme';
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const root = document.documentElement;
  let preference = null;
  let toggle;

  try {
    const saved = localStorage.getItem(storageKey);
    if (saved === 'light' || saved === 'dark') preference = saved;
  } catch (_) {
    // The toggle still works when browser storage is unavailable.
  }

  function applyTheme() {
    const theme = preference || (systemTheme.matches ? 'dark' : 'light');
    root.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content', theme === 'dark' ? '#19212b' : '#f4f8fd'
    );

    if (toggle) {
      const nextMode = theme === 'dark' ? 'Day mode' : 'Night mode';
      toggle.querySelector('.theme-label').textContent = nextMode;
      toggle.setAttribute('aria-label', `Switch to ${nextMode.toLowerCase()}`);
      toggle.hidden = false;
    }
  }

  // Run in the head so the chosen palette is applied before the first paint.
  applyTheme();

  document.addEventListener('DOMContentLoaded', () => {
    toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', () => {
      preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(storageKey, preference);
      } catch (_) {
        // Keep the current page usable even without persistent storage.
      }
      applyTheme();
    });
    applyTheme();
  });

  systemTheme.addEventListener('change', () => {
    if (!preference) applyTheme();
  });

  window.addEventListener('storage', event => {
    if (event.key !== storageKey && event.key !== null) return;
    preference = event.newValue === 'light' || event.newValue === 'dark'
      ? event.newValue : null;
    applyTheme();
  });
})();
