"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LIMIT_NONE = null;
var LIMIT_ONCE = 1;
var LIMIT_TWICE = 2;

var PRIORITY_LOW = 1;
var PRIORITY_NORMAL = 5;
var PRIORITY_HIGH = 10;

/**
 * Event Listener
 *
 * Process event when it is emitted by the EventManager
 */

var Listener = function () {
  /**
   * Constructor
   * @param {!function} runner Callback function to process event, it would receive an event as input
   * @param {?number} [priority=5] Determine the order of listener in running queue
   * @param {?number} [limit=null] Define if this listen could only run at a specific times
   */
  function Listener(runner) {
    var priority = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PRIORITY_NORMAL;
    var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : LIMIT_NONE;

    _classCallCheck(this, Listener);

    /**
     * @access protected
     * @type {function}
     */
    this.runner = runner;

    /**
     * @access protected
     * @type {number}
     */
    this.priority = priority;

    /**
     * @access protected
     * @type {number}
     */
    this.limit = limit;

    /**
     * @access private
     * @type {function}
     */
    this.cbDone = null;

    /**
     * @access private
     * @type {function}
     */
    this.cbError = null;
  }

  /**
   * Callback function to be called right after event is fired and stopped completely
   * @param {!function} callback
   * @returns {Listener} The current listener object
   */


  _createClass(Listener, [{
    key: "done",
    value: function done(callback) {
      this.cbDone = callback;
      return this;
    }

    /**
     * Callback function to be run if there is an error when processing event
     * @param {!function} callback
     * @returns {Listener} The current listener object
     */

  }, {
    key: "error",
    value: function error(callback) {
      this.cbError = callback;
      return this;
    }
  }]);

  return Listener;
}();

exports.default = Listener;

Listener.LIMIT_NONE = LIMIT_NONE;
Listener.LIMIT_ONCE = LIMIT_ONCE;
Listener.LIMIT_TWICE = LIMIT_TWICE;

Listener.PRIORITY_LOW = PRIORITY_LOW;
Listener.PRIORITY_NORMAL = PRIORITY_NORMAL;
Listener.PRIORITY_HIGH = PRIORITY_HIGH;