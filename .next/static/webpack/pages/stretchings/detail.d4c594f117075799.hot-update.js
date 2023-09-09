"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/stretchings/detail",{

/***/ "./components/basic/Chip.tsx":
/*!***********************************!*\
  !*** ./components/basic/Chip.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Box */ \"./components/basic/Box.tsx\");\n/* harmony import */ var _constants_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/style */ \"./constants/style.ts\");\n/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Typography */ \"./components/basic/Typography.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/kimheejin/Documents/mymovester-projects/mymovester-client-product/components/basic/Chip.tsx\",\n    _this = undefined;\n\n\n\n\n\nvar variantsProps = {\n  primary: {\n    backgroundColor: _constants_style__WEBPACK_IMPORTED_MODULE_1__.colors.softPrimaryColor,\n    color: _constants_style__WEBPACK_IMPORTED_MODULE_1__.colors.f000,\n    border: \"none\"\n  },\n  secondary: {\n    backgroundColor: _constants_style__WEBPACK_IMPORTED_MODULE_1__.colors.f000,\n    color: _constants_style__WEBPACK_IMPORTED_MODULE_1__.colors.vividPrimaryColor,\n    border: \"1px solid \".concat(_constants_style__WEBPACK_IMPORTED_MODULE_1__.colors.vividPrimaryColor)\n  }\n};\n\nvar Chip = function Chip(props) {\n  var children = props.children,\n      _props$variants = props.variants,\n      variants = _props$variants === void 0 ? \"primary\" : _props$variants;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Box__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    backgroundColor: variantsProps[variants].backgroundColor,\n    border: variantsProps[variants].border,\n    width: \"fit-content\",\n    height: 30,\n    borderRadius: 15,\n    padding: \"0px 16px\",\n    display: \"flex\",\n    alignItems: \"center\",\n    justifyContent: \"center\",\n    boxSahdow: \"4px 4px 4px rgba(0,0,0,0.1)\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Typography__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      variants: \"heading3\",\n      color: variantsProps[variants].color,\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Chip;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chip);\n\nvar _c;\n\n$RefreshReg$(_c, \"Chip\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Jhc2ljL0NoaXAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFNQSxJQUFNRyxhQUFhLEdBQUc7RUFDcEJDLE9BQU8sRUFBRTtJQUNQQyxlQUFlLEVBQUVKLG9EQUFNLENBQUNLLGdCQURqQjtJQUVQQyxLQUFLLEVBQUVOLG9EQUFNLENBQUNPLElBRlA7SUFHUEMsTUFBTSxFQUFFO0VBSEQsQ0FEVztFQU1wQkMsU0FBUyxFQUFFO0lBQ1RMLGVBQWUsRUFBRUosb0RBQU0sQ0FBQ08sSUFEZjtJQUVURCxLQUFLLEVBQUVOLG9EQUFNLENBQUNVLGlCQUZMO0lBR1RGLE1BQU0sc0JBQWVSLG9EQUFNLENBQUNVLGlCQUF0QjtFQUhHO0FBTlMsQ0FBdEI7O0FBYUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFzQztFQUNqRCxJQUFRQyxRQUFSLEdBQTJDRCxLQUEzQyxDQUFRQyxRQUFSO0VBQUEsc0JBQTJDRCxLQUEzQyxDQUFrQkUsUUFBbEI7RUFBQSxJQUFrQkEsUUFBbEIsZ0NBQTZCLFNBQTdCO0VBQ0Esb0JBQ0UsOERBQUMsNENBQUQ7SUFDRSxlQUFlLEVBQUVaLGFBQWEsQ0FBQ1ksUUFBRCxDQUFiLENBQXdCVixlQUQzQztJQUVFLE1BQU0sRUFBRUYsYUFBYSxDQUFDWSxRQUFELENBQWIsQ0FBd0JOLE1BRmxDO0lBR0UsS0FBSyxFQUFFLGFBSFQ7SUFJRSxNQUFNLEVBQUUsRUFKVjtJQUtFLFlBQVksRUFBRSxFQUxoQjtJQU1FLE9BQU8sRUFBRSxVQU5YO0lBT0UsT0FBTyxFQUFDLE1BUFY7SUFRRSxVQUFVLEVBQUMsUUFSYjtJQVNFLGNBQWMsRUFBQyxRQVRqQjtJQVVFLFNBQVMsRUFBQyw2QkFWWjtJQUFBLHVCQVlFLDhEQUFDLG1EQUFEO01BQVksUUFBUSxFQUFDLFVBQXJCO01BQWdDLEtBQUssRUFBRU4sYUFBYSxDQUFDWSxRQUFELENBQWIsQ0FBd0JSLEtBQS9EO01BQUEsVUFDR087SUFESDtNQUFBO01BQUE7TUFBQTtJQUFBO0VBWkY7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBa0JELENBcEJEOztLQUFNRjtBQXNCTiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Jhc2ljL0NoaXAudHN4PzNmMTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCb3ggZnJvbSBcIi4vQm94XCI7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL3N0eWxlXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiLi9UeXBvZ3JhcGh5XCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICB2YXJpYW50cz86IFwicHJpbWFyeVwiIHwgXCJzZWNvbmRhcnlcIjtcbn1cblxuY29uc3QgdmFyaWFudHNQcm9wcyA9IHtcbiAgcHJpbWFyeToge1xuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLnNvZnRQcmltYXJ5Q29sb3IsXG4gICAgY29sb3I6IGNvbG9ycy5mMDAwLFxuICAgIGJvcmRlcjogXCJub25lXCIsXG4gIH0sXG4gIHNlY29uZGFyeToge1xuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmYwMDAsXG4gICAgY29sb3I6IGNvbG9ycy52aXZpZFByaW1hcnlDb2xvcixcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHtjb2xvcnMudml2aWRQcmltYXJ5Q29sb3J9YCxcbiAgfSxcbn07XG5cbmNvbnN0IENoaXAgPSAocHJvcHM6IFByb3BzV2l0aENoaWxkcmVuPElQcm9wcz4pID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgdmFyaWFudHMgPSBcInByaW1hcnlcIiB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgYmFja2dyb3VuZENvbG9yPXt2YXJpYW50c1Byb3BzW3ZhcmlhbnRzXS5iYWNrZ3JvdW5kQ29sb3J9XG4gICAgICBib3JkZXI9e3ZhcmlhbnRzUHJvcHNbdmFyaWFudHNdLmJvcmRlcn1cbiAgICAgIHdpZHRoPXtcImZpdC1jb250ZW50XCJ9XG4gICAgICBoZWlnaHQ9ezMwfVxuICAgICAgYm9yZGVyUmFkaXVzPXsxNX1cbiAgICAgIHBhZGRpbmc9e1wiMHB4IDE2cHhcIn1cbiAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgYm94U2FoZG93PVwiNHB4IDRweCA0cHggcmdiYSgwLDAsMCwwLjEpXCJcbiAgICA+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50cz1cImhlYWRpbmczXCIgY29sb3I9e3ZhcmlhbnRzUHJvcHNbdmFyaWFudHNdLmNvbG9yfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hpcDtcbiJdLCJuYW1lcyI6WyJCb3giLCJjb2xvcnMiLCJUeXBvZ3JhcGh5IiwidmFyaWFudHNQcm9wcyIsInByaW1hcnkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzb2Z0UHJpbWFyeUNvbG9yIiwiY29sb3IiLCJmMDAwIiwiYm9yZGVyIiwic2Vjb25kYXJ5Iiwidml2aWRQcmltYXJ5Q29sb3IiLCJDaGlwIiwicHJvcHMiLCJjaGlsZHJlbiIsInZhcmlhbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/basic/Chip.tsx\n"));

/***/ })

});