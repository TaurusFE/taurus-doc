'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _indicator = require('./indicator.vue');

var _indicator2 = _interopRequireDefault(_indicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Indicator = _vue2.default.extend(_indicator2.default);
var instance = void 0;
var timer = void 0;

module.exports = {
  open: function open() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!instance) {
      instance = new Indicator({
        el: document.createElement('div')
      });
    }
    if (instance.visible) return;
    instance.text = typeof options === 'string' ? options : options.text || '';
    instance.spinnerType = options.spinnerType || 'snake';
    document.body.appendChild(instance.$el);
    if (timer) {
      clearTimeout(timer);
    }

    _vue2.default.nextTick(function () {
      instance.visible = true;
    });
  },
  close: function close() {
    if (instance) {
      instance.visible = false;
      timer = setTimeout(function () {
        if (instance.$el) {
          instance.$el.style.display = 'none';
        }
      }, 400);
    }
  }
};