// Keep the professional summary visible while expanding technical details inline.
const experienceToggle = document.querySelector('#dataprev-toggle');
const experienceDetails = document.querySelector('#dataprev-details');
experienceToggle.addEventListener('click', () => {
  const expanded = experienceToggle.getAttribute('aria-expanded') === 'true';
  experienceToggle.setAttribute('aria-expanded', String(!expanded));
  experienceDetails.hidden = expanded;
  experienceToggle.querySelector('.toggle-label').textContent = expanded
    ? 'Ver detalhes da experiência'
    : 'Ocultar detalhes';
});
