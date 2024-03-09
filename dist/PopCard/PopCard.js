"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _PopCardModule = _interopRequireDefault(require("./PopCard.module.css"));

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
}

const PopCard = ({
                     backgroundImage = "/bg.png",
                     titleImage = "/title.png",
                     hoverImage = "/hover.png",
                     link = "https://brev.al",
                     height = 300,
                     width,
                     alt = "Pop Card"
                 }) => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("a", {
    href: link,
    target: "_blank",
    className: _PopCardModule.default.link,
    style: {
        height: height,
        width: width ?? height / 1.5
    },
    "aria-label": alt
}, /*#__PURE__*/_react.default.createElement("div", {
    className: _PopCardModule.default.popCard
}, /*#__PURE__*/_react.default.createElement("div", {
    className: _PopCardModule.default.wrapper
}, /*#__PURE__*/_react.default.createElement("img", {
    src: backgroundImage,
    className: _PopCardModule.default.coverImage,
    alt: `${alt} background`,
    width: width,
    height: height
})), /*#__PURE__*/_react.default.createElement("img", {
    src: titleImage,
    className: _PopCardModule.default.title,
    alt: `${alt} title`,
    width: width,
    height: height
}), /*#__PURE__*/_react.default.createElement("img", {
    src: hoverImage,
    className: _PopCardModule.default.character,
    alt: `${alt} hover`,
    width: width,
    height: height
}))));
var _default = exports.default = PopCard;