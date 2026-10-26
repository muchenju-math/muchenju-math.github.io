document.querySelectorAll('details').forEach(detail => {
  detail.addEventListener('toggle', () => {
    if (detail.open && window.MathJax && typeof MathJax.typesetPromise === 'function') {
      MathJax.typesetPromise([detail]).catch(() => {});
    }
  });
});
