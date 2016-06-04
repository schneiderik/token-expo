import Cycle from './cycle';

const slideshowElements = Array.prototype.slice.call(document.querySelectorAll('.slideshow'));

slideshowElements.forEach(function (slideshowEl) {
  let cycle = new Cycle(slideshowEl, 'img');
  cycle.start();
});

window.addEventListener('resize', function () {
  slideshowElements.forEach(function (slideshowEl) {
    let containerWidth = parseInt(window.getComputedStyle(slideshowEl.parentNode).getPropertyValue('width'));

    let elements = Array.prototype.slice.call(slideshowEl.querySelectorAll('img'));

    if (parseInt(containerWidth) < 600) {
      let height = containerWidth * 0.666;

      slideshowEl.style.height = height + 'px';

      elements.forEach(function (el) {
        el.style.height = height + 'px';
        el.style.width = containerWidth + 'px';
        el.style.marginLeft = containerWidth / 2 * -1 + 'px';
        el.style.marginTop = height / 2 * -1 + 'px';
      });
    } else {
      slideshowEl.style.height = null;

      elements.forEach(function (el) {
        el.style.height = '400px';
        el.style.width = '600px';
        el.style.marginLeft = '-300px';
        el.style.marginTop = '-200px';
      });
    }
  });
});
