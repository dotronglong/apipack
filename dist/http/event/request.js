'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _event = require('../../event/event');

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RequestEvent = function (_Event) {
  _inherits(RequestEvent, _Event);

  function RequestEvent() {
    var connection = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
    var server = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    _classCallCheck(this, RequestEvent);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RequestEvent).call(this, 'http.incoming_request', false));

    _this.connection = connection;
    _this.server = server;
    return _this;
  }

  return RequestEvent;
}(_event2.default);

exports.default = RequestEvent;