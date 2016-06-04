(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.EasyApp = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Cycle = (function () {
  function Cycle(container, childSelector) {
    var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    _classCallCheck(this, Cycle);

    this.container = container;
    this.interval = options.interval || 6000;
    this.children = Array.prototype.slice.call(this.container.querySelectorAll(childSelector));
    this.childrenCount = this.children.length;
    this.activeClassname = options.activeClassname || 'active';
    this.index = 1;

    this.children[0].classList.add(this.activeClassname);
  }

  _createClass(Cycle, [{
    key: 'start',
    value: function start() {
      window.setInterval(this.loop.bind(this), this.interval);
    }
  }, {
    key: 'loop',
    value: function loop() {
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
  }]);

  return Cycle;
})();

exports['default'] = Cycle;
module.exports = exports['default'];

},{}],2:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _cycle = require('./cycle');

var _cycle2 = _interopRequireDefault(_cycle);

var slideshowElements = Array.prototype.slice.call(document.querySelectorAll('.slideshow'));

slideshowElements.forEach(function (slideshowEl) {
  var cycle = new _cycle2['default'](slideshowEl, 'img');
  cycle.start();
});

function resizeSlideshows() {
  slideshowElements.forEach(resizeSlideshow);
}

function resizeSlideshow(slideshowEl) {
  var containerWidth = parseInt(window.getComputedStyle(slideshowEl.parentNode).getPropertyValue('width'));

  var elements = Array.prototype.slice.call(slideshowEl.querySelectorAll('img'));

  if (parseInt(containerWidth) < 600) {
    (function () {
      var height = containerWidth * 0.666;

      slideshowEl.style.height = height + 'px';

      elements.forEach(function (el) {
        el.style.height = height + 'px';
        el.style.width = containerWidth + 'px';
        el.style.marginLeft = containerWidth / 2 * -1 + 'px';
        el.style.marginTop = height / 2 * -1 + 'px';
      });
    })();
  } else {
    slideshowEl.style.height = null;

    elements.forEach(function (el) {
      el.style.height = '400px';
      el.style.width = '600px';
      el.style.marginLeft = '-300px';
      el.style.marginTop = '-200px';
    });
  }
}

window.addEventListener('resize', resizeSlideshows);
resizeSlideshows();

},{"./cycle":1}]},{},[2])(2)
});