"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _getTranslation = _interopRequireDefault(require("./getTranslation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default(app) {
  app.use("/shark/getTranslation", _getTranslation["default"]);
}