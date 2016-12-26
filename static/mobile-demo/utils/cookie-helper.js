'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pluses = /\+/g;

var helper = {
  default: {},

  writeCookie: function writeCookie(key, value, options) {
    var days, t;
    options = ext(this.default, options);
    if (typeof options.expires === 'number') {
      days = options.expires;
      t = options.expires = new Date();
      t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
    }
    return document.cookie = [encode(key), '=', stringifyCookieValue(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join('');
  },

  readCookie: function readCookie(key, value) {
    var result = key ? undefined : {};

    var cookies = document.cookie ? document.cookie.split('; ') : [];
    var i = 0;
    var l = cookies.length;
    var parts;
    var name;
    var cookie;
    for (; i < l; i++) {
      parts = cookies[i].split('=');
      name = decode(parts.shift());
      cookie = parts.join('=');
      if (key === name) {
        result = read(cookie, value);
        break;
      }

      if (!key && (cookie = read(cookie)) !== undefined) {
        result[name] = cookie;
      }
    }
    return result;
  },

  removeCookie: function removeCookie(key, options) {
    this.writeCookie(key, '', ext(options, { expires: -1 }));
    return !this.readCookie(key);
  }
};

function encode(s) {
  return helper.raw ? s : encodeURIComponent(s);
}
function decode(s) {
  return helper.raw ? s : decodeURIComponent(s);
}
function stringifyCookieValue(value) {
  return encode(helper.json ? (0, _stringify2.default)(value) : String(value));
}
function parseCookieValue(s) {
  if (s.indexOf('"') === 0) {
    s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
  }
  try {
    s = decodeURIComponent(s.replace(pluses, ' '));
    return helper.json ? JSON.parse(s) : s;
  } catch (e) {}
}
function read(s, converter) {
  var value = helper.raw ? s : parseCookieValue(s);
  return typeof converter === 'function' ? converter(value) : value;
}

function ext(target, source) {
  var k;
  var obj = {};
  if ((typeof target === 'undefined' ? 'undefined' : (0, _typeof3.default)(target)) === 'object') {
    for (k in target) {
      obj[k] = target[k];
    }
  }
  if ((typeof source === 'undefined' ? 'undefined' : (0, _typeof3.default)(source)) === 'object') {
    for (k in source) {
      obj[k] = source[k];
    }
  }
  return obj;
}
exports.default = helper;