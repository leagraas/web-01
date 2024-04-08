"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.get-prototype-of.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.reflect.construct.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardComponent = void 0;
require("core-js/modules/es.object.set-prototype-of.js");
var _component = require("../../../scripts/component");
require("./card.component.css");
var _cardComponent2 = _interopRequireDefault(require("./card.component.html"));
var _back = _interopRequireDefault(require("./assets/back.png"));
var _card = _interopRequireDefault(require("./assets/card-0.png"));
var _card2 = _interopRequireDefault(require("./assets/card-1.png"));
var _card3 = _interopRequireDefault(require("./assets/card-2.png"));
var _card4 = _interopRequireDefault(require("./assets/card-3.png"));
var _card5 = _interopRequireDefault(require("./assets/card-4.png"));
var _card6 = _interopRequireDefault(require("./assets/card-5.png"));
var _card7 = _interopRequireDefault(require("./assets/card-6.png"));
var _card8 = _interopRequireDefault(require("./assets/card-7.png"));
var _card9 = _interopRequireDefault(require("./assets/card-8.png"));
var _card10 = _interopRequireDefault(require("./assets/card-9.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var CARDS_IMAGE = [_back.default, _card.default, _card2.default, _card3.default, _card4.default, _card5.default, _card6.default, _card7.default, _card8.default, _card9.default, _card10.default];

// TODO #class: use the ES6 class keyword
// TODO #extends: extends Component
/* class CardComponent constructor */
var CardComponent = exports.CardComponent = /*#__PURE__*/function (_Component) {
  function CardComponent(id) {
    var _this;
    _classCallCheck(this, CardComponent);
    //super(CARD_TEMPLATE);
    _this = _callSuper(this, CardComponent, [_cardComponent2.default]);
    // is this card flipped?
    _this._flipped = false;
    //this.template = CARD_TEMPLATE;

    // has the matching card has been discovered already?
    _this.matched = false;
    _this._elt = document.createElement("div");
    _this._elt.innerHTML = _this.template;
    _this._elt = _this._elt.firstElementChild;
    _this._id = id;
    _this._imageElt = _this.getElement().querySelector(".card-wrapper");
    _this._imageElt.querySelector("img.front-face").src = CARDS_IMAGE[_this._id + 1];
    _this._imageElt.querySelector("img.back-face").src = CARDS_IMAGE[0];
    return _this;
  }

  /* method CardComponent.getElement */
  _inherits(CardComponent, _Component);
  return _createClass(CardComponent, [{
    key: "getElement",
    value: function getElement() {
      return this._elt;
    }
  }, {
    key: "flip",
    value: /* method CardComponent.flip */
    function flip() {
      this._imageElt.classList.toggle("flip");
      this._flipped = !this._flipped;
    }
  }, {
    key: "equals",
    value: /* method CardComponent.equals */
    function equals(card) {
      return card._id === this._id;
    }
  }, {
    key: "flipped",
    get: /* CardComponent.get flipped() */
    function get() {
      return this._flipped;
    }
  }]);
}(_component.Component);