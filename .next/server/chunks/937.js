"use strict";
exports.id = 937;
exports.ids = [937];
exports.modules = {

/***/ 8862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);



const Box = props => {
  const {
    children,
    flexDirection,
    gap = 0,
    justifyContent,
    alignItems,
    padding = 0,
    width,
    height = "100%",
    display,
    overflow,
    backgroundColor,
    border,
    borderRadius = 0,
    onClick,
    onMouseOver,
    gridTemplateColumns,
    ref,
    boxSahdow
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(BoxWrapper, {
    $flexDirection: flexDirection,
    $gap: gap,
    $justifyContent: justifyContent,
    $alignItems: alignItems,
    $padding: padding,
    $width: width,
    $height: height,
    $display: display,
    $overflow: overflow,
    $backgroundColor: backgroundColor,
    $border: border,
    $borderRadius: borderRadius,
    $gridTemplateColumns: gridTemplateColumns,
    $boxSahdow: boxSahdow,
    onClick: onClick,
    onMouseOver: onMouseOver,
    ref: ref,
    children: children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Box);
const BoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.styled.div.withConfig({
  displayName: "Box__BoxWrapper",
  componentId: "sc-uofllt-0"
})(["width:", ";height:", ";display:", ";flex-direction:", ";justify-content:", ";align-items:", ";padding:", ";gap:", ";overflow:", ";background-color:", ";border:", ";border-radius:", ";grid-template-columns:", ";box-shadow:", ";word-break:break-all;"], ({
  $width
}) => typeof $width === "string" ? $width : `${$width}px `, ({
  $height
}) => typeof $height === "string" ? $height : `${$height}px `, ({
  $display
}) => $display, ({
  $flexDirection
}) => $flexDirection, ({
  $justifyContent
}) => $justifyContent, ({
  $alignItems
}) => $alignItems, ({
  $padding
}) => typeof $padding === "string" ? $padding : `${$padding}px `, ({
  $gap
}) => `${$gap}px`, ({
  $overflow
}) => $overflow, ({
  $backgroundColor
}) => $backgroundColor, ({
  $border
}) => $border, ({
  $borderRadius
}) => `${$borderRadius}px`, ({
  $gridTemplateColumns
}) => $gridTemplateColumns, ({
  $boxSahdow
}) => $boxSahdow);

/***/ }),

/***/ 769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const variantsProperties = {
  heading1: {
    fontSize: 24,
    fontWeight: 800
  },
  heading2: {
    fontSize: 16,
    fontWeight: 800
  },
  heading3: {
    fontSize: 12,
    fontWeight: 800
  },
  body1: {
    fontSize: 16,
    fontWeight: 500
  },
  body2: {
    fontSize: 12,
    fontWeight: 500
  },
  body3: {
    fontSize: 8,
    fontWeight: 500
  },
  caption: {
    fontSize: 4,
    fontWeight: 500
  }
};

const Typography = props => {
  const {
    variants = "body2",
    color,
    children
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
    style: {
      fontSize: `${variantsProperties[variants].fontSize}px`,
      fontWeight: `${variantsProperties[variants].fontWeight}`,
      color: `${color}`
    },
    children: children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Typography);

/***/ }),

/***/ 4937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _basic_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(769);
/* harmony import */ var _constants_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9026);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _basic_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8862);
/* harmony import */ var _hooks_utils_useIsMobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8995);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5893);








const Navigator = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const isMobile = (0,_hooks_utils_useIsMobile__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(Wrapper, {
    ismobile: isMobile,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_basic_Box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      flexDirection: "column",
      justifyContent: "start",
      alignItems: "center",
      onClick: () => router.push("/stretchings"),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_basic_Typography__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        variants: "heading2",
        color: _constants_style__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .O.vividPrimaryColor,
        children: isMobile ? "M" : "MOVESTER"
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigator);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.styled.div.withConfig({
  displayName: "Navigator__Wrapper",
  componentId: "sc-1owchbj-0"
})(["background-color:", ";height:auto;padding:", ";width:100%;position:fixed;top:0;box-shadow:4px 4px 8px rgba(0,0,0,0.1);z-index:300;"], _constants_style__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .O.f000, props => props.ismobile ? "8px 16px" : "16px");

/***/ }),

/***/ 9026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ colors)
/* harmony export */ });
const colors = {
  r000: " #f64f59",
  softPrimaryColor: "#6D66AA",
  vividPrimaryColor: "#2A1598",
  f300: "#f7f7f7",
  f200: "#f2f2f2",
  f100: "#fafafa",
  f000: "#ffffff",
  g300: "#888383",
  g200: "#e5e5e5",
  g100: "#615B5B",
  g000: "#C4C4C4"
};

/***/ }),

/***/ 8995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_1__);



const useIsMobile = () => {
  const {
    0: isMobile,
    1: setIsMobile
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const mobile = (0,react_responsive__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)({
    query: "(max-width: 768px)"
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsMobile(mobile);
  }, [mobile]);
  return isMobile;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIsMobile);

/***/ })

};
;