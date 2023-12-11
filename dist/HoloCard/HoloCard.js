"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _HoloCardModule = _interopRequireDefault(require("./HoloCard.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// Make sure you link the correct CSS file path

const HoloCard = ({
  imageSrc,
  imageShineSrc,
  width,
  height,
  hyp = 0.8,
  o = 0.4,
  radius = 16
}) => {
  const [cardStyle, setCardStyle] = (0, _react.useState)({});
  (0, _react.useEffect)(() => {
    setCardStyle({
      '--width': width,
      '--height': height,
      '--shine': `url(${imageShineSrc})`,
      '--posx': `50%`,
      '--posy': `50%`,
      '--hyp': hyp,
      '--o': o,
      '--radius': `${radius}px`,
      'transform': `rotateY(0deg) rotateX(0deg)`
    });
  }, [width, height, imageShineSrc, hyp, o, radius]);

  // Mettre à jour les positions posX et posY basées sur la position du curseur de la souris
  const handleMouseMove = e => {
    const {
      left,
      top,
      width,
      height
    } = e.target.getBoundingClientRect();
    const posX = (e.clientX - left) / width * 100;
    const posY = (e.clientY - top) / height * 100;
    // console.log(posX, posY);

    // Calculer la rotation basée sur la position de la souris
    const rx = (posY - 50) / 50 * -15; // Réduisez la valeur pour diminuer la déformation
    const ry = (posX - 50) / 50 * 15; // Réduisez la valeur pour diminuer la déformation
    console.log(rx, ry);
    setCardStyle({
      '--shine': `url(${imageShineSrc})`,
      '--posx': `${posX}%`,
      '--posy': `${posY}%`,
      '--hyp': hyp,
      '--o': o,
      '--radius': `${radius}px`,
      'transform': `rotateY(${ry}deg) rotateX(${rx}deg)`
    });
  };
  const handleMouseLeave = () => {
    setCardStyle({
      '--radius': `${radius}px`,
      transform: 'rotateY(0deg) rotateX(0deg)',
      transition: 'transform 0.5s cubic-bezier(0.34, 3.56, 0.64, 1)'
    });
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _HoloCardModule.default.container
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _HoloCardModule.default.card,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: {
      width: width,
      height: height
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _HoloCardModule.default.cardFront,
    style: cardStyle
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: imageSrc,
    alt: "Holo Style"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _HoloCardModule.default.cardShinePlusAfterElement
  }))));
};
var _default = exports.default = HoloCard;