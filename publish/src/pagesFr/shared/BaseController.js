"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _controller = _interopRequireDefault(require("react-imvc/controller"));

var sharedActions = _interopRequireWildcard(require("./sharedActions"));

var _antd = require("antd");

var _api = _interopRequireDefault(require("../api"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var querystring = require('querystring');

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "preload", {
      antd: '/css/antd.min.css',
      antdPro: '/css/ant-design-pro.css',
      customize: '/css/customize.css',
      commonFr: '/css/commonFr.css'
    });

    _defineProperty(_assertThisInitialized(_this), "SSR", _this.location.query.ssr != 0);

    _defineProperty(_assertThisInitialized(_this), "getSiderDate", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.resHandler(function () {
                return _this.getApi(_api["default"].getSiderDate, {
                  pageName: _this.pageName
                });
              }, function (res) {
                var siderData = res.siderData;
                console.log('siderData', siderData);

                _this.handleChangeState(res);
              }, function (err) {
                console.log('err', err);
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    return _this;
  }

  _createClass(_default, [{
    key: "getFinalActions",
    value: function getFinalActions(actions) {
      return _objectSpread({}, sharedActions, {}, actions);
    }
  }, {
    key: "getInitialState",
    value: function () {
      var _getInitialState = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(initialState) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _objectSpread({}, initialState, {
                  currentPath: this.location.pathname
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialState(_x) {
        return _getInitialState.apply(this, arguments);
      }

      return getInitialState;
    }()
  }, {
    key: "componentWillCreate",
    value: function () {
      var _componentWillCreate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.getSiderDate();

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function componentWillCreate() {
        return _componentWillCreate.apply(this, arguments);
      }

      return componentWillCreate;
    }() // async componentDidFirstMount() {
    //   console.log('this.pageName', this.pageName);
    // }

  }, {
    key: "postApi",

    /** 对fetch接口封装一次 方便调用*/
    value: function postApi(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      options = _objectSpread({}, options, {
        method: 'POST',
        body: JSON.stringify(data)
      });
      return this.fetch(url, options);
    }
  }, {
    key: "formDataApi",
    value: function formDataApi(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var formData = new FormData();

      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          var element = data[key];
          formData.append(key, element);
        }
      }

      var options = _objectSpread({
        method: 'POST'
      }, option, {
        body: data
      });

      return fetch(url, options);
    }
  }, {
    key: "getApi",
    value: function getApi(url, params) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      options = _objectSpread({
        method: 'GET'
      }, options, {
        credentials: 'omit'
      });
      return this.fetch(url + (params ? "?".concat(querystring.stringify(params)) : ''), options);
    }
  }, {
    key: "handleChangeState",
    value: function handleChangeState(date) {
      var updateMergeState = this.store.actions.updateMergeState;
      updateMergeState(date);
    }
    /**
     * 请求结构处理
     * @method resHandler
     * @param {Function} func : api接口配置
     * @param {Function} success : 成功回调
     * @param {Function} fail : 失败回调
     * @param {Number} options.limit : 请求失败重试开关，调用方可根据实际场景设置失败后重试次数，默认1不重试
     * @param {String} options.name : 自定义埋点名称
     */

  }, {
    key: "resHandler",
    value: function () {
      var _resHandler = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(func, success, fail) {
        var options,
            _options$limit,
            limit,
            _options$name,
            name,
            res,
            ResponseStatus,
            returnStatus,
            data,
            _args4 = arguments;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                options = _args4.length > 3 && _args4[3] !== undefined ? _args4[3] : {};
                _options$limit = options.limit, limit = _options$limit === void 0 ? 1 : _options$limit, _options$name = options.name, name = _options$name === void 0 ? '' : _options$name;

                if (!(limit < 1)) {
                  _context4.next = 5;
                  break;
                }

                // this.recordLog({...options,errcode:3001},{ctripUid});
                _antd.message.error("\u7F51\u7EDC\u51FA\u9519\uFF0C\u8BF7\u518D\u8BD5\u8BD5\u5427\u3002");

                return _context4.abrupt("return");

              case 5:
                _context4.prev = 5;
                _context4.next = 8;
                return func();

              case 8:
                res = _context4.sent;
                ResponseStatus = res.ResponseStatus, returnStatus = res.returnStatus, data = _objectWithoutProperties(res, ["ResponseStatus", "returnStatus"]);

                if (!(ResponseStatus.Ack == 'Success')) {
                  _context4.next = 18;
                  break;
                }

                if (!(returnStatus.isSuccess === true)) {
                  _context4.next = 15;
                  break;
                }

                return _context4.abrupt("return", success(data));

              case 15:
                return _context4.abrupt("return", fail(res.returnStatus));

              case 16:
                _context4.next = 25;
                break;

              case 18:
                if (!(res.ResponseStatus.Errors[0].ErrorCode == 'MobileRequestFilterException')) {
                  _context4.next = 21;
                  break;
                }

                this.login();
                return _context4.abrupt("return");

              case 21:
                if (!(res.ResponseStatus.Errors[0].ErrorCode == '401')) {
                  _context4.next = 24;
                  break;
                }

                redirect(this.context, '/v2/authorized/403');
                return _context4.abrupt("return");

              case 24:
                _antd.message.error("\u7F51\u7EDC\u51FA\u9519\uFF0C\u8BF7\u518D\u8BD5\u8BD5\u5427\u3002");

              case 25:
                _context4.next = 31;
                break;

              case 27:
                _context4.prev = 27;
                _context4.t0 = _context4["catch"](5);
                console.log(name, '***************请求异常****************', _context4.t0.toString()); // this.recordLog(options,{ctripUid});

                this.resHandler(func, success, fail, {
                  limit: limit - 1
                });

              case 31:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[5, 27]]);
      }));

      function resHandler(_x2, _x3, _x4) {
        return _resHandler.apply(this, arguments);
      }

      return resHandler;
    }() // getKeyTranlate(key, options = {}) {
    //   const language = this.store.getState().language || {};
    //   return language[key] ? language[key].replace(/\$\{\s*(\w+)\s*(([\+\-])\s*(\d+)\s*)?\}/g, (text) => options[text.substring(2, text.length - 1)]) : '';
    // }
    // logout() {
    //   let logoutTips = '确定退出系统？';
    //   try {
    //     logoutTips = this.store.getState().language.logoutTips || '确定退出系统？';
    //   } catch (error) {
    //   }
    //   Modal.confirm({ content: logoutTips, onOk: () => super.logout() });
    // }

  }]);

  return _default;
}(_controller["default"]);

exports["default"] = _default;