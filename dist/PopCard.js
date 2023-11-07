import React from "react";
import "./PopCard.css";
const PopCard = ({
  backgroundImage = "/bg.png",
  titleImage = "/title.png",
  hoverImage = "/hover.png",
  link = "https://brev.al",
  height = 300,
  width
}) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
  href: link,
  target: "_blank"
}, /*#__PURE__*/React.createElement("div", {
  className: "popCard",
  style: {
    height: height,
    width: width ?? height / 1.5
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "wrapper"
}, /*#__PURE__*/React.createElement("img", {
  src: backgroundImage,
  className: "cover-image",
  "aria-disabled": true
})), /*#__PURE__*/React.createElement("img", {
  src: titleImage,
  className: "title",
  "aria-disabled": true
}), /*#__PURE__*/React.createElement("img", {
  src: hoverImage,
  className: "character",
  "aria-disabled": true
}))));
export default PopCard;