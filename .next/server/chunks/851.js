"use strict";
exports.id = 851;
exports.ids = [851];
exports.modules = {

/***/ 6851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var movester_design_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2531);
/* harmony import */ var movester_design_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(movester_design_system__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9026);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5893);






const myPageTabNavigatorInfo = {
  PROFILE: " ",
  LIKES: "likes",
  EDIT: "edit"
};

const MyPageNavigator = props => {
  const {
    currentTab
  } = props;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  const handleOnClickTabItem = tabId => {
    const userId = router.query.userId;
    router.push(`/users/${userId}/${myPageTabNavigatorInfo[tabId]}`);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(SubNavigator, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(SubNavigatorSectionBox, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_0__.Typography, {
        variants: "body2",
        color: _constants_style__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .O.g000,
        children: "\uACC4\uC815 \uC124\uC815"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(SubNavigatorListItem, {
        isclicked: currentTab === "PROFILE",
        onClick: () => handleOnClickTabItem("PROFILE"),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_0__.Typography, {
          variants: "body2",
          children: "\uB098\uC758 \uD504\uB85C\uD544"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(SubNavigatorListItem, {
        isclicked: currentTab === "EDIT",
        onClick: () => handleOnClickTabItem("EDIT"),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_0__.Typography, {
          variants: "body2",
          children: "\uD68C\uC6D0\uC815\uBCF4 \uC218\uC815"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(SubNavigatorSectionBox, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_0__.Typography, {
        variants: "body2",
        color: _constants_style__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .O.g000,
        children: "\uD65C\uB3D9"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(SubNavigatorListItem, {
        isclicked: currentTab === "LIKES",
        onClick: () => handleOnClickTabItem("LIKES"),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_0__.Typography, {
          variants: "body2",
          children: "\uC88B\uC544\uC694"
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyPageNavigator);
const SubNavigator = styled_components__WEBPACK_IMPORTED_MODULE_1__.styled.div.withConfig({
  displayName: "MyPageNavigator__SubNavigator",
  componentId: "sc-1cmvrrq-0"
})(["display:flex;flex-direction:column;width:100%;min-width:100px;max-width:200px;word-break:keep-all;"]);
const SubNavigatorSectionBox = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.styled)(movester_design_system__WEBPACK_IMPORTED_MODULE_0__.Box).withConfig({
  displayName: "MyPageNavigator__SubNavigatorSectionBox",
  componentId: "sc-1cmvrrq-1"
})(["display:flex;flex-direction:column;gap:4px;width:100%;"]);
const SubNavigatorListItem = styled_components__WEBPACK_IMPORTED_MODULE_1__.styled.button.withConfig({
  displayName: "MyPageNavigator__SubNavigatorListItem",
  componentId: "sc-1cmvrrq-2"
})(["display:flex;flex-direction:row;justify-content:start;align-items:center;padding:8px;border-radius:4px;outline:none;border:0;background-color:", ";width:100%;&:hover{cursor:pointer;}"], ({
  isclicked
}) => isclicked ? " rgba(0, 0, 0, 0.1)" : "transparent");

/***/ })

};
;