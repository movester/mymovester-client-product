"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.ts":
/*!***********************!*\
  !*** ./middleware.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\nasync function middleware(request) {\n    const accessToken = request.cookies.get(\"access_token\")?.value;\n    if (!accessToken) {\n        const requestHeaders = new Headers(request.headers);\n        requestHeaders.set(\"x-hello-from-middleware2\", \"false\");\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next({\n            request: {\n                // New request headers\n                headers: requestHeaders\n            }\n        });\n    } else {\n        const requestHeaders = new Headers(request.headers);\n        requestHeaders.set(\"x-hello-from-middleware2\", \"true\");\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next({\n            request: {\n                // New request headers\n                headers: requestHeaders\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBSU8sZUFBZUMsV0FBV0MsT0FBMUI7SUFDTCxNQUFNQyxjQUFjRCxRQUFRRSxPQUFSLENBQWdCQyxHQUFoQixDQUFvQixpQkFBaUJDO0lBRXpELElBQUksQ0FBQ0gsYUFBYTtRQUNoQixNQUFNSSxpQkFBaUIsSUFBSUMsUUFBUU4sUUFBUU8sT0FBcEI7UUFDdkJGLGVBQWVHLEdBQWYsQ0FBbUIsNEJBQTRCO1FBRS9DLE9BQU9WLHVGQUFBLENBQWtCO1lBQ3ZCRSxTQUFTO2dCQUNQO2dCQUNBTyxTQUFTRjtZQUZGO1FBRGM7SUFNMUIsT0FBTTtRQUNMLE1BQU1BLGlCQUFpQixJQUFJQyxRQUFRTixRQUFRTyxPQUFwQjtRQUN2QkYsZUFBZUcsR0FBZixDQUFtQiw0QkFBNEI7UUFDL0MsT0FBT1YsdUZBQUEsQ0FBa0I7WUFDdkJFLFNBQVM7Z0JBQ1A7Z0JBQ0FPLFNBQVNGO1lBRkY7UUFEYztJQU0xQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL21pZGRsZXdhcmUudHM/NDIyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgeyBpc1Rva2VuRXhwaXJlZCB9IGZyb20gXCIuL2hvb2tzL3V0aWxzL21hbmFnZS10b2tlblwiO1xuaW1wb3J0IG5leHQgZnJvbSBcIm5leHRcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcbiAgY29uc3QgYWNjZXNzVG9rZW4gPSByZXF1ZXN0LmNvb2tpZXMuZ2V0KFwiYWNjZXNzX3Rva2VuXCIpPy52YWx1ZTtcblxuICBpZiAoIWFjY2Vzc1Rva2VuKSB7XG4gICAgY29uc3QgcmVxdWVzdEhlYWRlcnMgPSBuZXcgSGVhZGVycyhyZXF1ZXN0LmhlYWRlcnMpO1xuICAgIHJlcXVlc3RIZWFkZXJzLnNldChcIngtaGVsbG8tZnJvbS1taWRkbGV3YXJlMlwiLCBcImZhbHNlXCIpO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KHtcbiAgICAgIHJlcXVlc3Q6IHtcbiAgICAgICAgLy8gTmV3IHJlcXVlc3QgaGVhZGVyc1xuICAgICAgICBoZWFkZXJzOiByZXF1ZXN0SGVhZGVycyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcmVxdWVzdEhlYWRlcnMgPSBuZXcgSGVhZGVycyhyZXF1ZXN0LmhlYWRlcnMpO1xuICAgIHJlcXVlc3RIZWFkZXJzLnNldChcIngtaGVsbG8tZnJvbS1taWRkbGV3YXJlMlwiLCBcInRydWVcIik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KHtcbiAgICAgIHJlcXVlc3Q6IHtcbiAgICAgICAgLy8gTmV3IHJlcXVlc3QgaGVhZGVyc1xuICAgICAgICBoZWFkZXJzOiByZXF1ZXN0SGVhZGVycyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxdWVzdCIsImFjY2Vzc1Rva2VuIiwiY29va2llcyIsImdldCIsInZhbHVlIiwicmVxdWVzdEhlYWRlcnMiLCJIZWFkZXJzIiwiaGVhZGVycyIsInNldCIsIm5leHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});