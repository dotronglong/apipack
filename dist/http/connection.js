"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A connection which is generated by the server when processes the incoming request
 */
var Connection =
/**
 * Constructor
 * @param {?Request} [request=null] An object which is an instance of http/Request
 * @param {?Response} [response=null] An object which is an instance of http/Response
 * @param {?Server} [server=null] An instance of http/Server
 */
function Connection() {
  var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var response = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var server = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  _classCallCheck(this, Connection);

  /**
   * @type {Request}
   */
  this.request = request;

  /**
   * @type {Response}
   */
  this.response = response;

  /**
   * @type {Server}
   */
  this.server = server;
};

exports.default = Connection;