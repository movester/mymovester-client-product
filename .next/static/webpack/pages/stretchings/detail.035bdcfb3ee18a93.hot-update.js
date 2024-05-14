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

/***/ "./pages/stretchings/detail/index.tsx":
/*!********************************************!*\
  !*** ./pages/stretchings/detail/index.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/style */ \"./constants/style.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_utils_useIsMobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/utils/useIsMobile */ \"./hooks/utils/useIsMobile.ts\");\n/* harmony import */ var _views_stretchingDetailMobileView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../views/stretchingDetailMobileView */ \"./views/stretchingDetailMobileView.tsx\");\n/* harmony import */ var _views_stretchingDetailPcView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../views/stretchingDetailPcView */ \"./views/stretchingDetailPcView.tsx\");\n/* harmony import */ var _hooks_api_useStretchingDetailInquiry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/api/useStretchingDetailInquiry */ \"./hooks/api/useStretchingDetailInquiry.tsx\");\n/* harmony import */ var _hooks_utils_manage_token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hooks/utils/manage-token */ \"./hooks/utils/manage-token.ts\");\n/* harmony import */ var _hooks_api_useLikeStretching__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks/api/useLikeStretching */ \"./hooks/api/useLikeStretching.tsx\");\n/* harmony import */ var _hooks_api_useDislikeStretching__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hooks/api/useDislikeStretching */ \"./hooks/api/useDislikeStretching.tsx\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);\nvar _jsxFileName = \"/Users/kimheejin/Documents/mymovester-projects/mymovester-client-product/pages/stretchings/detail/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar StretchingDetailPage = function StretchingDetailPage(_ref) {\n  _s();\n\n  var isLoggined = _ref.isLoggined;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  var isMobile = (0,_hooks_utils_useIsMobile__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  var STRETCHING_ID = router.query.id ? typeof router.query.id == \"string\" ? router.query.id : router.query.id[0] : undefined;\n  var accessToken = (0,_hooks_utils_manage_token__WEBPACK_IMPORTED_MODULE_7__.getAccessToken)();\n\n  var _useStretchingDetailI = (0,_hooks_api_useStretchingDetailInquiry__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n    id: STRETCHING_ID,\n    token: accessToken\n  }),\n      data = _useStretchingDetailI.data,\n      refetch = _useStretchingDetailI.refetch;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data === null || data === void 0 ? void 0 : data.isLike),\n      likeButtonClicked = _useState[0],\n      setLikeButtonClicked = _useState[1];\n\n  var _useLikeStretching = (0,_hooks_api_useLikeStretching__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\n    id: data === null || data === void 0 ? void 0 : data.id\n  }),\n      handleLikeStretching = _useLikeStretching.mutate;\n\n  var _useDislikeStretching = (0,_hooks_api_useDislikeStretching__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({\n    id: data === null || data === void 0 ? void 0 : data.id\n  }),\n      handleDisLikeStretching = _useDislikeStretching.mutate;\n\n  var likeDebounce = (0,lodash__WEBPACK_IMPORTED_MODULE_10__.debounce)(function () {\n    if (likeButtonClicked) {\n      handleDisLikeStretching(accessToken);\n    } else {\n      handleLikeStretching(accessToken);\n    }\n  }, 1000);\n\n  var handleOnClickLikeButton = function handleOnClickLikeButton() {\n    if (isLoggined) {\n      setLikeButtonClicked(function (prev) {\n        return !prev;\n      });\n      likeDebounce();\n    } else {\n      var isConfirm = window.confirm(\"로그인이 필요한 기능 입니다.로그인 페이지로 이동하시겠습니까?\");\n\n      if (isConfirm) {\n        router.push(\"/login\");\n      }\n    }\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (data.isLike !== likeButtonClicked) setLikeButtonClicked(data.isLike); // eslint-disable-next-line react-hooks/exhaustive-deps\n  }, [data]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(PageWrapper, {\n    children: data && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {\n      children: isMobile ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_views_stretchingDetailMobileView__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        data: data\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 13\n      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_views_stretchingDetailPcView__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        data: data,\n        isLiked: likeButtonClicked,\n        isLoggined: isLoggined,\n        handleLikeButton: handleOnClickLikeButton\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 70,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(StretchingDetailPage, \"hR8aDM46xFDbdq3W7Va7013+7sk=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter, _hooks_utils_useIsMobile__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _hooks_api_useStretchingDetailInquiry__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _hooks_api_useLikeStretching__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _hooks_api_useDislikeStretching__WEBPACK_IMPORTED_MODULE_9__[\"default\"]];\n});\n\n_c = StretchingDetailPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StretchingDetailPage);\nvar PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"detail__PageWrapper\",\n  componentId: \"sc-gth1tb-0\"\n})([\"display:flex;background-color:\", \";height:100%;align-items:center;justify-content:center;\"], _constants_style__WEBPACK_IMPORTED_MODULE_1__.colors.f000);\n_c2 = PageWrapper;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"StretchingDetailPage\");\n$RefreshReg$(_c2, \"PageWrapper\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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K0RBQUMscUVBQUQ7UUFDRSxJQUFJLEVBQUVBLElBRFI7UUFFRSxPQUFPLEVBQUVHLGlCQUZYO1FBR0UsVUFBVSxFQUFFWixVQUhkO1FBSUUsZ0JBQWdCLEVBQUVrQjtNQUpwQjtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBSko7RUFGSjtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUFrQkQsQ0F4RUQ7O0dBQU1uQjtVQUNXVCxvREFFRUMsa0VBVVNHLCtFQVNlRSxzRUFDR0M7OztLQXZCeENFOztBQTBFTiwrREFBZUEsb0JBQWY7QUFFQSxJQUFNeUIsV0FBVyxHQUFHcEMsOERBQUg7RUFBQTtFQUFBO0FBQUEsa0dBRUtDLG9EQUFNLENBQUNxQyxJQUZaLENBQWpCO01BQU1GIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3N0cmV0Y2hpbmdzL2RldGFpbC9pbmRleC50c3g/N2E5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvc3R5bGVcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHVzZUlzTW9iaWxlIGZyb20gXCIuLi8uLi8uLi9ob29rcy91dGlscy91c2VJc01vYmlsZVwiO1xuaW1wb3J0IFN0cmV0Y2hpbmdEZXRhaWxNb2JpbFZpZXcgZnJvbSBcIi4uLy4uLy4uL3ZpZXdzL3N0cmV0Y2hpbmdEZXRhaWxNb2JpbGVWaWV3XCI7XG5pbXBvcnQgU3RyZXRjaGluZ0RldGFpbFBjVmlldyBmcm9tIFwiLi4vLi4vLi4vdmlld3Mvc3RyZXRjaGluZ0RldGFpbFBjVmlld1wiO1xuaW1wb3J0IHVzZVN0cmV0Y2hpbmdEZXRhaWxJbnF1aXJ5IGZyb20gXCIuLi8uLi8uLi9ob29rcy9hcGkvdXNlU3RyZXRjaGluZ0RldGFpbElucXVpcnlcIjtcbmltcG9ydCB7IE5leHRQYWdlQ29udGV4dCB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBnZXRBY2Nlc3NUb2tlbiB9IGZyb20gXCIuLi8uLi8uLi9ob29rcy91dGlscy9tYW5hZ2UtdG9rZW5cIjtcbmltcG9ydCB1c2VMaWtlU3RyZXRjaGluZyBmcm9tIFwiLi4vLi4vLi4vaG9va3MvYXBpL3VzZUxpa2VTdHJldGNoaW5nXCI7XG5pbXBvcnQgdXNlRGlzbGlrZVN0cmV0Y2hpbmcgZnJvbSBcIi4uLy4uLy4uL2hvb2tzL2FwaS91c2VEaXNsaWtlU3RyZXRjaGluZ1wiO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwibG9kYXNoXCI7XG5cbmNvbnN0IFN0cmV0Y2hpbmdEZXRhaWxQYWdlID0gKHsgaXNMb2dnaW5lZCB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlSXNNb2JpbGUoKTtcblxuICBjb25zdCBTVFJFVENISU5HX0lEID0gcm91dGVyLnF1ZXJ5LmlkXG4gICAgPyB0eXBlb2Ygcm91dGVyLnF1ZXJ5LmlkID09IFwic3RyaW5nXCJcbiAgICAgID8gcm91dGVyLnF1ZXJ5LmlkXG4gICAgICA6IHJvdXRlci5xdWVyeS5pZFswXVxuICAgIDogdW5kZWZpbmVkO1xuXG4gIGNvbnN0IGFjY2Vzc1Rva2VuID0gZ2V0QWNjZXNzVG9rZW4oKTtcblxuICBjb25zdCB7IGRhdGEsIHJlZmV0Y2ggfSA9IHVzZVN0cmV0Y2hpbmdEZXRhaWxJbnF1aXJ5KHtcbiAgICBpZDogU1RSRVRDSElOR19JRCxcbiAgICB0b2tlbjogYWNjZXNzVG9rZW4sXG4gIH0pO1xuXG4gIGNvbnN0IFtsaWtlQnV0dG9uQ2xpY2tlZCwgc2V0TGlrZUJ1dHRvbkNsaWNrZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oXG4gICAgZGF0YT8uaXNMaWtlXG4gICk7XG5cbiAgY29uc3QgeyBtdXRhdGU6IGhhbmRsZUxpa2VTdHJldGNoaW5nIH0gPSB1c2VMaWtlU3RyZXRjaGluZyh7IGlkOiBkYXRhPy5pZCB9KTtcbiAgY29uc3QgeyBtdXRhdGU6IGhhbmRsZURpc0xpa2VTdHJldGNoaW5nIH0gPSB1c2VEaXNsaWtlU3RyZXRjaGluZyh7XG4gICAgaWQ6IGRhdGE/LmlkLFxuICB9KTtcblxuICBjb25zdCBsaWtlRGVib3VuY2UgPSBkZWJvdW5jZSgoKSA9PiB7XG4gICAgaWYgKGxpa2VCdXR0b25DbGlja2VkKSB7XG4gICAgICBoYW5kbGVEaXNMaWtlU3RyZXRjaGluZyhhY2Nlc3NUb2tlbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhhbmRsZUxpa2VTdHJldGNoaW5nKGFjY2Vzc1Rva2VuKTtcbiAgICB9XG4gIH0sIDEwMDApO1xuXG4gIGNvbnN0IGhhbmRsZU9uQ2xpY2tMaWtlQnV0dG9uID0gKCkgPT4ge1xuICAgIGlmIChpc0xvZ2dpbmVkKSB7XG4gICAgICBzZXRMaWtlQnV0dG9uQ2xpY2tlZCgocHJldikgPT4gIXByZXYpO1xuICAgICAgbGlrZURlYm91bmNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlzQ29uZmlybSA9IHdpbmRvdy5jb25maXJtKFxuICAgICAgICBcIuuhnOq3uOyduOydtCDtlYTsmpTtlZwg6riw64qlIOyeheuLiOuLpC7roZzqt7jsnbgg7Y6Y7J207KeA66GcIOydtOuPme2VmOyLnOqyoOyKteuLiOq5jD9cIlxuICAgICAgKTtcbiAgICAgIGlmIChpc0NvbmZpcm0pIHtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEuaXNMaWtlICE9PSBsaWtlQnV0dG9uQ2xpY2tlZCkgc2V0TGlrZUJ1dHRvbkNsaWNrZWQoZGF0YS5pc0xpa2UpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW2RhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlV3JhcHBlcj5cbiAgICAgIHtkYXRhICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICB7aXNNb2JpbGUgPyAoXG4gICAgICAgICAgICA8U3RyZXRjaGluZ0RldGFpbE1vYmlsVmlldyBkYXRhPXtkYXRhfT48L1N0cmV0Y2hpbmdEZXRhaWxNb2JpbFZpZXc+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxTdHJldGNoaW5nRGV0YWlsUGNWaWV3XG4gICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgIGlzTGlrZWQ9e2xpa2VCdXR0b25DbGlja2VkfVxuICAgICAgICAgICAgICBpc0xvZ2dpbmVkPXtpc0xvZ2dpbmVkfVxuICAgICAgICAgICAgICBoYW5kbGVMaWtlQnV0dG9uPXtoYW5kbGVPbkNsaWNrTGlrZUJ1dHRvbn1cbiAgICAgICAgICAgID48L1N0cmV0Y2hpbmdEZXRhaWxQY1ZpZXc+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvUGFnZVdyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdHJldGNoaW5nRGV0YWlsUGFnZTtcblxuY29uc3QgUGFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5mMDAwfTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSAoeyByZXEgfTogTmV4dFBhZ2VDb250ZXh0KSA9PiB7XG4gIGNvbnN0IGlzTG9nZ2luZWQgPSByZXEuaGVhZGVyc1tcIngtbG9nZ2luZWRcIl0gPT09IFwidHJ1ZVwiID8gdHJ1ZSA6IGZhbHNlO1xuXG4gIHJldHVybiB7IHByb3BzOiB7IGlzTG9nZ2luZWQgfSB9O1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwiY29sb3JzIiwidXNlUm91dGVyIiwidXNlSXNNb2JpbGUiLCJTdHJldGNoaW5nRGV0YWlsTW9iaWxWaWV3IiwiU3RyZXRjaGluZ0RldGFpbFBjVmlldyIsInVzZVN0cmV0Y2hpbmdEZXRhaWxJbnF1aXJ5IiwiZ2V0QWNjZXNzVG9rZW4iLCJ1c2VMaWtlU3RyZXRjaGluZyIsInVzZURpc2xpa2VTdHJldGNoaW5nIiwiZGVib3VuY2UiLCJTdHJldGNoaW5nRGV0YWlsUGFnZSIsImlzTG9nZ2luZWQiLCJyb3V0ZXIiLCJpc01vYmlsZSIsIlNUUkVUQ0hJTkdfSUQiLCJxdWVyeSIsImlkIiwidW5kZWZpbmVkIiwiYWNjZXNzVG9rZW4iLCJ0b2tlbiIsImRhdGEiLCJyZWZldGNoIiwiaXNMaWtlIiwibGlrZUJ1dHRvbkNsaWNrZWQiLCJzZXRMaWtlQnV0dG9uQ2xpY2tlZCIsImhhbmRsZUxpa2VTdHJldGNoaW5nIiwibXV0YXRlIiwiaGFuZGxlRGlzTGlrZVN0cmV0Y2hpbmciLCJsaWtlRGVib3VuY2UiLCJoYW5kbGVPbkNsaWNrTGlrZUJ1dHRvbiIsInByZXYiLCJpc0NvbmZpcm0iLCJ3aW5kb3ciLCJjb25maXJtIiwicHVzaCIsIlBhZ2VXcmFwcGVyIiwiZGl2IiwiZjAwMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/stretchings/detail/index.tsx\n"));

/***/ })

});