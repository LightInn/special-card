"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _PopCardModule = _interopRequireDefault(require("./PopCard.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const PopCard = ({
  backgroundImage = "/bg.png",
  titleImage = "/title.png",
  hoverImage = "/hover.png",
  link = "https://brev.al",
  height = 300,
  width
}) => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("a", {
  href: link,
  target: "_blank"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: _PopCardModule.default.popCard,
  style: {
    height: height,
    width: width ?? height / 1.5
  }
}, /*#__PURE__*/_react.default.createElement("div", {
  className: _PopCardModule.default.wrapper
}, /*#__PURE__*/_react.default.createElement("img", {
  src: backgroundImage,
  className: _PopCardModule.default.coverImage,
  "aria-disabled": true
})), /*#__PURE__*/_react.default.createElement("img", {
  src: titleImage,
  className: _PopCardModule.default.title,
  "aria-disabled": true
}), /*#__PURE__*/_react.default.createElement("img", {
  src: hoverImage,
  className: _PopCardModule.default.character,
  "aria-disabled": true
}))));
var _default = exports.default = PopCard;