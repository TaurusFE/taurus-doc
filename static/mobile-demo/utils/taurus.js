'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TRadio = exports.TTabItem = exports.TTabContainerItem = exports.TTabContainer = exports.TTabbar = exports.TSwitch = exports.TSwipeItem = exports.TSwipe = exports.TSpinner = exports.TSearch = exports.TRange = exports.TProgress = exports.TPopup = exports.TPicker = exports.TPaletteButton = exports.Toast = exports.TNavbar = exports.TLoadMore = exports.TIndexSection = exports.TIndexList = exports.THeader = exports.TField = exports.TDatetimePicker = exports.TChecklist = exports.TCellSwipe = exports.TCell = exports.TButton = exports.TBadge = exports.taurus = exports.TActionSheet = exports.MessageBox = exports.Indicator = exports.cookieHelper = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueI18n = require('vue-i18n');

var _vueI18n2 = _interopRequireDefault(_vueI18n);

var _vueLazyload = require('vue-lazyload');

var _vueLazyload2 = _interopRequireDefault(_vueLazyload);

var _loadingSpin = require('../assets/loading-spin.svg');

var _loadingSpin2 = _interopRequireDefault(_loadingSpin);

var _cn = require('../i18n/cn.json');

var _cn2 = _interopRequireDefault(_cn);

var _en = require('../i18n/en.json');

var _en2 = _interopRequireDefault(_en);

var _bus = require('../utils/bus');

var _bus2 = _interopRequireDefault(_bus);

var _indicator = require('../components/indicator/indicator.js');

var _indicator2 = _interopRequireDefault(_indicator);

var _messageBox = require('../components/message-box/message-box.js');

var _messageBox2 = _interopRequireDefault(_messageBox);

var _actionSheet = require('../components/action-sheet/action-sheet.vue');

var _actionSheet2 = _interopRequireDefault(_actionSheet);

var _badge = require('../components/badge/badge.vue');

var _badge2 = _interopRequireDefault(_badge);

var _button = require('../components/button/button.vue');

var _button2 = _interopRequireDefault(_button);

var _cell = require('../components/cell/cell.vue');

var _cell2 = _interopRequireDefault(_cell);

var _cellSwipe = require('../components/cell-swipe/cell-swipe.vue');

var _cellSwipe2 = _interopRequireDefault(_cellSwipe);

var _checklist = require('../components/checklist/checklist.vue');

var _checklist2 = _interopRequireDefault(_checklist);

var _datetimePicker = require('../components/datetime-picker/datetime-picker.vue');

var _datetimePicker2 = _interopRequireDefault(_datetimePicker);

var _field = require('../components/field/field.vue');

var _field2 = _interopRequireDefault(_field);

var _header = require('../components/header/header.vue');

var _header2 = _interopRequireDefault(_header);

var _indexList = require('../components/index-list/index-list.vue');

var _indexList2 = _interopRequireDefault(_indexList);

var _indexSection = require('../components/index-section/index-section.vue');

var _indexSection2 = _interopRequireDefault(_indexSection);

var _loadMore = require('../components/load-more/load-more.vue');

var _loadMore2 = _interopRequireDefault(_loadMore);

var _navbar = require('../components/navbar/navbar.vue');

var _navbar2 = _interopRequireDefault(_navbar);

var _toast = require('../components/toast/toast.js');

var _toast2 = _interopRequireDefault(_toast);

var _paletteButton = require('../components/palette-button/palette-button.vue');

var _paletteButton2 = _interopRequireDefault(_paletteButton);

var _picker = require('../components/picker/picker.vue');

var _picker2 = _interopRequireDefault(_picker);

var _popup = require('../components/popup/popup.vue');

var _popup2 = _interopRequireDefault(_popup);

var _progress = require('../components/progress/progress.vue');

var _progress2 = _interopRequireDefault(_progress);

var _range = require('../components/range/range.vue');

var _range2 = _interopRequireDefault(_range);

var _search = require('../components/search/search.vue');

var _search2 = _interopRequireDefault(_search);

var _spinner = require('../components/spinner/spinner.vue');

var _spinner2 = _interopRequireDefault(_spinner);

var _swipe = require('../components/swipe/swipe.vue');

var _swipe2 = _interopRequireDefault(_swipe);

var _swipeItem = require('../components/swipe/swipe-item.vue');

var _swipeItem2 = _interopRequireDefault(_swipeItem);

var _switch = require('../components/switch/switch.vue');

var _switch2 = _interopRequireDefault(_switch);

var _tabbar = require('../components/tabbar/tabbar.vue');

var _tabbar2 = _interopRequireDefault(_tabbar);

var _tabContainer = require('../components/tab-container/tab-container.vue');

var _tabContainer2 = _interopRequireDefault(_tabContainer);

var _tabContainerItem = require('../components/tab-container/tab-container-item.vue');

var _tabContainerItem2 = _interopRequireDefault(_tabContainerItem);

var _tabItem = require('../components/tab-item/tab-item.vue');

var _tabItem2 = _interopRequireDefault(_tabItem);

var _radio = require('../components/radio/radio.vue');

var _radio2 = _interopRequireDefault(_radio);

var _clickoutside = require('../directives/clickoutside/clickoutside.js');

var _clickoutside2 = _interopRequireDefault(_clickoutside);

var _infiniteScroll = require('../directives/infinite-scroll/infinite-scroll.js');

var _infiniteScroll2 = _interopRequireDefault(_infiniteScroll);

var _cookieHelper = require('../utils/cookie-helper');

var _cookieHelper2 = _interopRequireDefault(_cookieHelper);

var _es6Promise = require('es6-promise');

var _es6Promise2 = _interopRequireDefault(_es6Promise);

require('whatwg-fetch');

var _constant = require('./constant');

var _constant2 = _interopRequireDefault(_constant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.directive('InfiniteScroll', _infiniteScroll2.default);
_vue2.default.directive('Clickoutside', _clickoutside2.default);

window.Vue = _vue2.default;
window.Promise = _es6Promise2.default.Promise;

_vue2.default.use(_vueI18n2.default);
_vue2.default.use(_vueLazyload2.default, {
  loading: _loadingSpin2.default,
  try: 3
});

var Taurus = function () {
  function Taurus() {
    (0, _classCallCheck3.default)(this, Taurus);

    this._error = '';
    this._loadedRes = {};
  }

  (0, _createClass3.default)(Taurus, [{
    key: 'getMetaBizCode',
    value: function getMetaBizCode() {
      var meta = document.head.querySelectorAll('meta[name="biz-code"]');
      if (meta.length > 0) {
        return meta[0].getAttribute('content');
      }
      return '';
    }
  }, {
    key: 'loadLang',
    value: function loadLang(bizCode, newLang) {
      var lang, res;
      var self = this;
      if (!bizCode) {
        return;
      }
      lang = newLang || _vue2.default.config.lang;
      res = '/i18n/' + bizCode + '/' + lang + '.json';
      if (!(res in this._loadedRes)) {
        fetch(res, {
          method: 'get',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(function (res) {
          return res.json();
        }).then(function (json) {
          if ((0, _keys2.default)(json).length === 0) {
            return _es6Promise2.default.reject(new Error('locale [' + newLang + '] empty !!'));
          } else {
            _vue2.default.config.lang = _constant2.default.DEFAULT_EMPTY_LANG;
            _vue2.default.config.fallbackLang = _constant2.default.DEFAULT_EMPTY_LANG;
            var locale = _vue2.default.locale(newLang);
            locale = (0, _assign2.default)(locale, json);
            _vue2.default.locale(newLang, locale);
            _vue2.default.config.lang = newLang;
            _vue2.default.config.fallbackLang = 'en';
            _bus2.default.$emit('i18n-res-loaded', bizCode, newLang);
            return _es6Promise2.default.resolve(json);
          }
        }).catch(function (error) {
          self._error = error.message;
          return _es6Promise2.default.reject();
        });
      }
    }
  }, {
    key: 'setBizInfo',
    value: function setBizInfo(key, value) {
      _cookieHelper2.default.writeCookie(key, value, _constant2.default.BIZINFOOPTION);
    }
  }, {
    key: 'getBizInfo',
    value: function getBizInfo(key) {
      return _cookieHelper2.default.readCookie(key, _constant2.default.BIZINFOOPTION);
    }
  }, {
    key: 'removeBizInfo',
    value: function removeBizInfo(key) {
      _cookieHelper2.default.removeCookie(key, _constant2.default.BIZINFOOPTION);
    }
  }, {
    key: 'lastError',
    get: function get() {
      return this._error;
    }
  }, {
    key: 'lang',
    get: function get() {
      return _vue2.default.config.lang;
    },
    set: function set(newLang) {
      _vue2.default.config.lang = newLang;
      this.loadLang(this.getMetaBizCode(), newLang);
    }
  }]);
  return Taurus;
}();

;

_vue2.default.config.lang = _constant2.default.DEFAULT_EMPTY_LANG;
_vue2.default.config.fallbackLang = _constant2.default.DEFAULT_EMPTY_LANG;
_vue2.default.locale('en', _en2.default);
_vue2.default.locale('cn', _cn2.default);
_vue2.default.config.lang = 'en';
_vue2.default.config.fallbackLang = 'en';

_vue2.default.mixin({
  created: function created() {
    var self = this;
    if (typeof this.$options.i18n === 'function') {
      _bus2.default.$on('i18n-res-loaded', function (bizCode, newLang) {
        self.$options.i18n.apply(self, [bizCode, newLang]);
      });
    }
  }
});

var taurus = new Taurus();

taurus.lang = 'en';

exports.cookieHelper = _cookieHelper2.default;
exports.Indicator = _indicator2.default;
exports.MessageBox = _messageBox2.default;
exports.TActionSheet = _actionSheet2.default;
exports.taurus = taurus;
exports.TBadge = _badge2.default;
exports.TButton = _button2.default;
exports.TCell = _cell2.default;
exports.TCellSwipe = _cellSwipe2.default;
exports.TChecklist = _checklist2.default;
exports.TDatetimePicker = _datetimePicker2.default;
exports.TField = _field2.default;
exports.THeader = _header2.default;
exports.TIndexList = _indexList2.default;
exports.TIndexSection = _indexSection2.default;
exports.TLoadMore = _loadMore2.default;
exports.TNavbar = _navbar2.default;
exports.Toast = _toast2.default;
exports.TPaletteButton = _paletteButton2.default;
exports.TPicker = _picker2.default;
exports.TPopup = _popup2.default;
exports.TProgress = _progress2.default;
exports.TRange = _range2.default;
exports.TSearch = _search2.default;
exports.TSpinner = _spinner2.default;
exports.TSwipe = _swipe2.default;
exports.TSwipeItem = _swipeItem2.default;
exports.TSwitch = _switch2.default;
exports.TTabbar = _tabbar2.default;
exports.TTabContainer = _tabContainer2.default;
exports.TTabContainerItem = _tabContainerItem2.default;
exports.TTabItem = _tabItem2.default;
exports.TRadio = _radio2.default;