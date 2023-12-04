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

/***/ "./components/utils/Navigator.tsx":
/*!****************************************!*\
  !*** ./components/utils/Navigator.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/style */ \"./constants/style.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_utils_useIsMobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/utils/useIsMobile */ \"./hooks/utils/useIsMobile.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var movester_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! movester-design-system */ \"./node_modules/movester-design-system/dist/lib/index.js\");\n/* harmony import */ var movester_design_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(movester_design_system__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Modal */ \"./components/utils/Modal.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/Users/kimheejin/Documents/mymovester-projects/mymovester-client-product/components/utils/Navigator.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar USERID = \"123\";\n\nvar Navigator = function Navigator() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var isMobile = (0,_hooks_utils_useIsMobile__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true),\n      isLoggined = _useState[0],\n      setIsLoggined = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),\n      isModalOpened = _useState2[0],\n      setIsModalOpened = _useState2[1];\n\n  var modalRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);\n\n  var modalOutSideClick = function modalOutSideClick(e) {\n    if (modalRef.current === e.target) {\n      setIsModalOpened(false);\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n    children: [isModalOpened && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      modalRef: modalRef,\n      modalOutsideClick: modalOutSideClick,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(MyPageModal, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(movester_design_system__WEBPACK_IMPORTED_MODULE_4__.Box, {\n          display: \"flex\",\n          flexDirection: \"row\",\n          alignItems: \"center\",\n          justifyContent: \"center\",\n          padding: 8,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(movester_design_system__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n            variants: \"body3\",\n            children: \"movcoco\\uB2D8\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(MyPageModalListItem, {\n          onClick: function onClick() {\n            return router.push(\"/users/\".concat(USERID));\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(movester_design_system__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n            variants: \"body3\",\n            children: \"\\uB9C8\\uC774\\uD398\\uC774\\uC9C0\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(MyPageModalListItem, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(movester_design_system__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n            variants: \"body3\",\n            children: \"\\uB85C\\uADF8\\uC544\\uC6C3\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Wrapper, {\n      ismobile: isMobile,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(movester_design_system__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        flexDirection: \"row\",\n        justifyContent: \"start\",\n        alignItems: \"center\",\n        onClick: function onClick() {\n          return router.push(\"/stretchings\");\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n          src: isMobile ? \"/favicon.ico\" : \"/logo.png\",\n          width: isMobile ? 16 : 120,\n          height: isMobile ? 16 : 32,\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(AccountWrapper, {\n        children: isLoggined ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(movester_design_system__WEBPACK_IMPORTED_MODULE_4__.Box, {\n            width: 30,\n            height: 30,\n            borderRadius: 15,\n            backgroundColor: _constants_style__WEBPACK_IMPORTED_MODULE_0__.colors.g000,\n            border: isModalOpened ? \"1px solid \".concat(_constants_style__WEBPACK_IMPORTED_MODULE_0__.colors.vividPrimaryColor) : \"none\",\n            onClick: function onClick() {\n              return setIsModalOpened(function (prev) {\n                return !prev;\n              });\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(movester_design_system__WEBPACK_IMPORTED_MODULE_4__.Box, {\n          onClick: function onClick() {\n            return router.push(\"/login\");\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(movester_design_system__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n            variants: \"body2\",\n            children: \"\\uB85C\\uADF8\\uC778 | \\uD68C\\uC6D0\\uAC00\\uC785\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Navigator, \"nsw3fGn/pNj4svghDUNFHpU0yqA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, _hooks_utils_useIsMobile__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = Navigator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigator);\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__.styled.div.withConfig({\n  displayName: \"Navigator__Wrapper\",\n  componentId: \"sc-1owchbj-0\"\n})([\"background-color:\", \";height:auto;padding:\", \";width:100%;position:sticky;top:0;box-shadow:4px 4px 8px rgba(0,0,0,0.1);z-index:300;display:flex;justify-content:space-between;:hover{cursor:pointer;}\"], _constants_style__WEBPACK_IMPORTED_MODULE_0__.colors.f000, function (props) {\n  return props.ismobile ? \"8px 16px\" : \"16px\";\n});\n_c2 = Wrapper;\nvar AccountWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__.styled.div.withConfig({\n  displayName: \"Navigator__AccountWrapper\",\n  componentId: \"sc-1owchbj-1\"\n})([\"padding-right:32px;\"]);\n_c3 = AccountWrapper;\nvar MyPageModal = styled_components__WEBPACK_IMPORTED_MODULE_8__.styled.div.withConfig({\n  displayName: \"Navigator__MyPageModal\",\n  componentId: \"sc-1owchbj-2\"\n})([\"position:absolute;right:32px;top:48px;background-color:\", \";border:1px solid \", \";box-shadow:4px 4px 4px rgba(0,0,0,0.1);border-radius:8px;width:180px;height:auto;display:flex;flex-direction:column;padding:8px;gap:4px;\"], _constants_style__WEBPACK_IMPORTED_MODULE_0__.colors.f000, _constants_style__WEBPACK_IMPORTED_MODULE_0__.colors.g200);\n_c4 = MyPageModal;\nvar MyPageModalListItem = styled_components__WEBPACK_IMPORTED_MODULE_8__.styled.button.withConfig({\n  displayName: \"Navigator__MyPageModalListItem\",\n  componentId: \"sc-1owchbj-3\"\n})([\"display:flex;flex-direction:row;justify-content:start;align-items:center;padding:8px;border-radius:4px;outline:none;border:0;background-color:transparent;&:hover{background-color:rgba(0,0,0,0.1);cursor:pointer;}\"]);\n_c5 = MyPageModalListItem;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Navigator\");\n$RefreshReg$(_c2, \"Wrapper\");\n$RefreshReg$(_c3, \"AccountWrapper\");\n$RefreshReg$(_c4, \"MyPageModal\");\n$RefreshReg$(_c5, \"MyPageModalListItem\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBTSxDQUFDNEIsSUFKWixFQUtLNUIsb0RBQU0sQ0FBQ2lDLElBTFosQ0FBakI7TUFBTUQ7QUFnQk4sSUFBTUUsbUJBQW1CLEdBQUduQyxxREFBTSxDQUFDb0MsTUFBVjtFQUFBO0VBQUE7QUFBQSwyTkFBekI7TUFBTUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91dGlscy9OYXZpZ2F0b3IudHN4P2ZmYzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL3N0eWxlXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB1c2VJc01vYmlsZSBmcm9tIFwiLi4vLi4vaG9va3MvdXRpbHMvdXNlSXNNb2JpbGVcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgQm94LCBUeXBvZ3JhcGh5IH0gZnJvbSBcIm1vdmVzdGVyLWRlc2lnbi1zeXN0ZW1cIjtcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi9Nb2RhbFwiO1xuXG5pbnRlcmZhY2UgSVN0eWxlZFByb3BzIHtcbiAgaXNtb2JpbGU6IGJvb2xlYW47XG59XG5cbmNvbnN0IFVTRVJJRCA9IFwiMTIzXCI7XG5cbmNvbnN0IE5hdmlnYXRvciA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlSXNNb2JpbGUoKTtcbiAgY29uc3QgW2lzTG9nZ2luZWQsIHNldElzTG9nZ2luZWRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtpc01vZGFsT3BlbmVkLCBzZXRJc01vZGFsT3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgbW9kYWxSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IG1vZGFsT3V0U2lkZUNsaWNrID0gKGU6IGFueSkgPT4ge1xuICAgIGlmIChtb2RhbFJlZi5jdXJyZW50ID09PSBlLnRhcmdldCkge1xuICAgICAgc2V0SXNNb2RhbE9wZW5lZChmYWxzZSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aXNNb2RhbE9wZW5lZCAmJiAoXG4gICAgICAgIDxNb2RhbCBtb2RhbFJlZj17bW9kYWxSZWZ9IG1vZGFsT3V0c2lkZUNsaWNrPXttb2RhbE91dFNpZGVDbGlja30+XG4gICAgICAgICAgPE15UGFnZU1vZGFsPlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBwYWRkaW5nPXs4fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50cz1cImJvZHkzXCI+bW92Y29jb+uLmDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPE15UGFnZU1vZGFsTGlzdEl0ZW1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC91c2Vycy8ke1VTRVJJRH1gKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudHM9XCJib2R5M1wiPuuniOydtO2OmOydtOyngDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvTXlQYWdlTW9kYWxMaXN0SXRlbT5cbiAgICAgICAgICAgIDxNeVBhZ2VNb2RhbExpc3RJdGVtPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50cz1cImJvZHkzXCI+66Gc6re47JWE7JuDPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9NeVBhZ2VNb2RhbExpc3RJdGVtPlxuICAgICAgICAgIDwvTXlQYWdlTW9kYWw+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICApfVxuICAgICAgPFdyYXBwZXIgaXNtb2JpbGU9e2lzTW9iaWxlfT5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3RhcnRcIlxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL3N0cmV0Y2hpbmdzXCIpfVxuICAgICAgICA+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e2lzTW9iaWxlID8gXCIvZmF2aWNvbi5pY29cIiA6IFwiL2xvZ28ucG5nXCJ9XG4gICAgICAgICAgICB3aWR0aD17aXNNb2JpbGUgPyAxNiA6IDEyMH1cbiAgICAgICAgICAgIGhlaWdodD17aXNNb2JpbGUgPyAxNiA6IDMyfVxuICAgICAgICAgICAgYWx0PXtcIlwifVxuICAgICAgICAgID48L0ltYWdlPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEFjY291bnRXcmFwcGVyPlxuICAgICAgICAgIHtpc0xvZ2dpbmVkID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIHdpZHRoPXszMH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwfVxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz17MTV9XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPXtjb2xvcnMuZzAwMH1cbiAgICAgICAgICAgICAgICBib3JkZXI9e1xuICAgICAgICAgICAgICAgICAgaXNNb2RhbE9wZW5lZFxuICAgICAgICAgICAgICAgICAgICA/IGAxcHggc29saWQgJHtjb2xvcnMudml2aWRQcmltYXJ5Q29sb3J9YFxuICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTW9kYWxPcGVuZWQoKHByZXYpID0+ICFwcmV2KX1cbiAgICAgICAgICAgICAgPjwvQm94PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxCb3ggb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvbG9naW5cIil9PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50cz1cImJvZHkyXCI+66Gc6re47J24IHwg7ZqM7JuQ6rCA7J6FPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9BY2NvdW50V3JhcHBlcj5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRvcjtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXY8SVN0eWxlZFByb3BzPmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuZjAwMH07XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogJHsocHJvcHMpID0+IChwcm9wcy5pc21vYmlsZSA/IFwiOHB4IDE2cHhcIiA6IFwiMTZweFwiKX07XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgei1pbmRleDogMzAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuY29uc3QgQWNjb3VudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG4gIHBhZGRpbmctcmlnaHQ6IDMycHg7XG5gO1xuXG5jb25zdCBNeVBhZ2VNb2RhbCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDMycHg7XG4gIHRvcDogNDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuZjAwMH07XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3JzLmcyMDB9O1xuICBib3gtc2hhZG93OiA0cHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDhweDtcbiAgZ2FwOiA0cHg7XG5gO1xuXG5jb25zdCBNeVBhZ2VNb2RhbExpc3RJdGVtID0gc3R5bGVkLmJ1dHRvbmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiY29sb3JzIiwidXNlUm91dGVyIiwidXNlSXNNb2JpbGUiLCJJbWFnZSIsIkJveCIsIlR5cG9ncmFwaHkiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIk1vZGFsIiwiVVNFUklEIiwiTmF2aWdhdG9yIiwicm91dGVyIiwiaXNNb2JpbGUiLCJpc0xvZ2dpbmVkIiwic2V0SXNMb2dnaW5lZCIsImlzTW9kYWxPcGVuZWQiLCJzZXRJc01vZGFsT3BlbmVkIiwibW9kYWxSZWYiLCJtb2RhbE91dFNpZGVDbGljayIsImUiLCJjdXJyZW50IiwidGFyZ2V0IiwicHVzaCIsImcwMDAiLCJ2aXZpZFByaW1hcnlDb2xvciIsInByZXYiLCJXcmFwcGVyIiwiZGl2IiwiZjAwMCIsInByb3BzIiwiaXNtb2JpbGUiLCJBY2NvdW50V3JhcHBlciIsIk15UGFnZU1vZGFsIiwiZzIwMCIsIk15UGFnZU1vZGFsTGlzdEl0ZW0iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/utils/Navigator.tsx\n"));

/***/ })

});