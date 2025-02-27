const localizeDatePublished = () => {
  const elements = document.querySelectorAll('[data-date]');

  elements.forEach((element) => {
    const date = element.getAttribute('data-date');
    if (date === null) return;

    element.textContent = new Date(parseInt(date)).toLocaleDateString(undefined, {
      timeZone: 'UTC',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    element.removeAttribute('data-date');
  });
};

document.addEventListener('astro:page-load', () => localizeDatePublished());
