const comparisonButtons = [...document.querySelectorAll('[data-view]')];
function showComparison(view) {
  for (const button of comparisonButtons) {
    button.setAttribute('aria-pressed', String(button.dataset.view === view));
  }
  for (const id of ['before', 'after']) {
    document.getElementById(id).hidden = id !== view;
  }
}
for (const button of comparisonButtons) {
  button.addEventListener('click', () => showComparison(button.dataset.view));
}
const observationButton = document.getElementById('toggle-observations');
observationButton.addEventListener('click', () => {
  const show = observationButton.getAttribute('aria-pressed') !== 'true';
  observationButton.setAttribute('aria-pressed', String(show));
  observationButton.textContent = show ? 'Hide observations' : 'Show observations';
  for (const element of document.querySelectorAll('.observation-overlay, .observation-notes')) {
    element.toggleAttribute('hidden', !show);
  }
});
