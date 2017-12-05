import {lory} from "lory.js";

document.addEventListener('DOMContentLoaded', () => {
  const slideshowEl = document.querySelector('.slideshow');
  const accordianTriggers = document.querySelectorAll('[data-accordian-trigger]');

  Array.from(accordianTriggers).forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.currentTarget.classList.toggle('expanded');
      document.querySelector(
        `[data-accordian-target="${e.currentTarget.dataset.accordianTrigger}"]`
      ).classList.toggle('expanded');
    })
  });
  
  setTimeout(() => {
    const slideshow = lory(slideshowEl, {
      infinite: 1
    });

    setInterval(slideshow.next.bind(slideshow), 5000);
  }, 1000);
});
