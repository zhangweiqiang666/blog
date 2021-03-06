"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _component = require("react-imvc/component");

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default(_ref) {
  var children = _ref.children;
  var canvasRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    canvasRef.current && window.addEventListener('resize', _lodash["default"].throttle(function () {
      draw();
    }, 400));
    return draw();
  }, []);

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      widthHeight = _useState2[0],
      setWidthHeight = _useState2[1];

  console.log('widthHeight', widthHeight);

  var draw = function draw() {
    var canvas = canvasRef.current;
    var ctx = canvas && canvas.getContext('2d');

    if (ctx) {
      var colorValue = function colorValue(min) {
        return Math.floor(Math.random() * 255 + min);
      };

      var createColorStyle = function createColorStyle(r, g, b) {
        return 'rgba(' + r + ',' + g + ',' + b + ', 0.8)';
      }; // function mixComponents(comp1, weight1, comp2, weight2) {
      //   return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2);
      // }
      // function averageColorStyles(dot1, dot2) {
      //   let color1 = dot1.color,
      //     color2 = dot2.color;
      //   let r = mixComponents(color1.r, dot1.radius, color2.r, dot2.radius),
      //     g = mixComponents(color1.g, dot1.radius, color2.g, dot2.radius),
      //     b = mixComponents(color1.b, dot1.radius, color2.b, dot2.radius);
      //   return createColorStyle(Math.floor(r), Math.floor(g), Math.floor(b));
      // }


      var Color = function Color(min) {
        min = min || 0;
        this.r = colorValue(min);
        this.g = colorValue(min);
        this.b = colorValue(min);
        this.style = createColorStyle(this.r, this.g, this.b);
      };

      var Dot = function Dot() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = -0.5 + Math.random();
        this.vy = -0.5 + Math.random();
        this.radius = Math.random() * 2;
        this.color = new Color(); // console.log(this);
      };

      var createDots = function createDots() {
        for (var i = 0; i < dots.nb; i++) {
          dots.array.push(new Dot());
        }
      };

      var moveDots = function moveDots() {
        dots.array.forEach(function (dot) {
          if (dot.y < 0 || dot.y > canvas.height) {
            dot.vx = dot.vx;
            dot.vy = -dot.vy;
          } else if (dot.x < 0 || dot.x > canvas.width) {
            dot.vx = -dot.vx;
            dot.vy = dot.vy;
          }

          dot.x += dot.vx;
          dot.y += dot.vy;
        });
      }; // function connectDots() {
      //   dots.array.forEach(i_dot => {
      //     dots.array.forEach(j_dot => {
      //       if (
      //         i_dot.x - j_dot.x < dots.distance &&
      //         i_dot.y - j_dot.y < dots.distance &&
      //         i_dot.x - j_dot.x > -dots.distance &&
      //         i_dot.y - j_dot.y > -dots.distance
      //       ) {
      //         if (
      //           i_dot.x - mousePosition.x < dots.d_radius &&
      //           i_dot.y - mousePosition.y < dots.d_radius &&
      //           i_dot.x - mousePosition.x > -dots.d_radius &&
      //           i_dot.y - mousePosition.y > -dots.d_radius
      //         ) {
      //           ctx.beginPath();
      //           ctx.strokeStyle = averageColorStyles(i_dot, j_dot);
      //           ctx.moveTo(i_dot.x, i_dot.y);
      //           ctx.lineTo(j_dot.x, j_dot.y);
      //           ctx.stroke();
      //           ctx.closePath();
      //         }
      //       }
      //     });
      //   });
      // }


      var drawDots = function drawDots() {
        dots.array.forEach(function (item) {
          return item.draw();
        });
      };

      var animateDots = function animateDots() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        moveDots(); // connectDots();

        drawDots();
        requestAnimationFrame(animateDots);
      }; // onmousemove = e => {
      //   mousePosition.x = e.clientX;
      //   mousePosition.y = e.clientY;
      // };
      // onmouseleave = () => {
      //   mousePosition.x = canvas.width / 2;
      //   mousePosition.y = canvas.height / 2;
      // };


      // implement draw on ctx here
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.lineWidth = 0.3;
      ctx.strokeStyle = new Color(250).style; // let mousePosition = {
      //   x: (30 * canvas.width) / 100,
      //   y: (30 * canvas.height) / 100
      // };

      var dots = {
        nb: canvas.height / 3,
        distance: canvas.height / 10,
        d_radius: canvas.height / 6,
        array: []
      };
      Dot.prototype = {
        draw: function draw() {
          ctx.beginPath();
          ctx.fillStyle = this.color.style;
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
          ctx.fill();
        }
      };
      createDots();
      requestAnimationFrame(animateDots);
    }
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_component.Style, {
    name: "antd"
  }), /*#__PURE__*/_react["default"].createElement(_component.Style, {
    name: "antdPro"
  }), /*#__PURE__*/_react["default"].createElement(_component.Style, {
    name: "customize"
  }), /*#__PURE__*/_react["default"].createElement(_component.Style, {
    name: "commonFr"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "fr-bg"
  }, /*#__PURE__*/_react["default"].createElement("canvas", {
    style: {
      position: 'fixed',
      width: '100vw',
      height: '100vh',
      // background: themeColor.starBgColor,
      zIndex: '-1'
    },
    ref: canvasRef
  }), children));
};

exports["default"] = _default;