class Cycle {
  constructor(container, childSelector, options={}) {
    this.container = container;
    this.interval = options.interval || 6000;
    this.children = Array.prototype.slice.call(this.container.querySelectorAll(childSelector));
    this.childrenCount = this.children.length;
    this.activeClassname = options.activeClassname || 'active';
    this.index = 1;

    this.children[0].classList.add(this.activeClassname);
  }

  start() {
    window.setInterval(this.loop.bind(this), this.interval);
  }

  loop() {
    if (this.index === this.childrenCount) {
      this.index = 0;
    }

    this.children[this.index].classList.add(this.activeClassname);

    if (this.index === 0) {
      this.children[this.childrenCount - 2].classList.remove(this.activeClassname);
    }

    if (this.index === 1) {
      this.children[this.childrenCount - 1].classList.remove(this.activeClassname);
    }

    if (this.index > 1) {
      this.children[this.index - 2].classList.remove(this.activeClassname);
    }

    this.index++;
  }
}

export default Cycle;
