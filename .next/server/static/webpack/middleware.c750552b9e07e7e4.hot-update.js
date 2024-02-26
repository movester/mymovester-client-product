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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\nasync function middleware(request) {\n    const accessToken = request.cookies.get(\"accessToken\")?.value; // if (!accessToken || isTokenExpired(accessToken)) {\n    // }\n    const requestHeaders = new Headers(request.headers);\n    requestHeaders.set(\"x-hello-from-middleware1\", \"hello\"); // You can also set request headers in NextResponse.rewrite\n    const response = next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next({\n        request: {\n            // New request headers\n            headers: requestHeaders\n        }\n    }); // Set a new response header `x-hello-from-middleware2`\n    return response; // NextResponse.next();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBSU8sZUFBZUMsV0FBV0MsT0FBMUI7SUFDTCxNQUFNQyxjQUFjRCxRQUFRRSxPQUFSLENBQWdCQyxHQUFoQixDQUFvQixnQkFBZ0JDLE9BRXhEO0lBRUE7SUFFQSxNQUFNQyxpQkFBaUIsSUFBSUMsUUFBUU4sUUFBUU8sT0FBcEI7SUFDdkJGLGVBQWVHLEdBQWYsQ0FBbUIsNEJBQTRCLFVBRS9DO0lBQ0EsTUFBTUMsV0FBV1gsdUZBQUEsQ0FBa0I7UUFDakNFLFNBQVM7WUFDUDtZQUNBTyxTQUFTRjtRQUZGO0lBRHdCLElBT25DO0lBQ0EsT0FBT0ksVUFFUDtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL21pZGRsZXdhcmUudHM/NDIyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgeyBpc1Rva2VuRXhwaXJlZCB9IGZyb20gXCIuL2hvb2tzL3V0aWxzL21hbmFnZS10b2tlblwiO1xuaW1wb3J0IG5leHQgZnJvbSBcIm5leHRcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcbiAgY29uc3QgYWNjZXNzVG9rZW4gPSByZXF1ZXN0LmNvb2tpZXMuZ2V0KFwiYWNjZXNzVG9rZW5cIik/LnZhbHVlO1xuXG4gIC8vIGlmICghYWNjZXNzVG9rZW4gfHwgaXNUb2tlbkV4cGlyZWQoYWNjZXNzVG9rZW4pKSB7XG5cbiAgLy8gfVxuXG4gIGNvbnN0IHJlcXVlc3RIZWFkZXJzID0gbmV3IEhlYWRlcnMocmVxdWVzdC5oZWFkZXJzKTtcbiAgcmVxdWVzdEhlYWRlcnMuc2V0KFwieC1oZWxsby1mcm9tLW1pZGRsZXdhcmUxXCIsIFwiaGVsbG9cIik7XG5cbiAgLy8gWW91IGNhbiBhbHNvIHNldCByZXF1ZXN0IGhlYWRlcnMgaW4gTmV4dFJlc3BvbnNlLnJld3JpdGVcbiAgY29uc3QgcmVzcG9uc2UgPSBOZXh0UmVzcG9uc2UubmV4dCh7XG4gICAgcmVxdWVzdDoge1xuICAgICAgLy8gTmV3IHJlcXVlc3QgaGVhZGVyc1xuICAgICAgaGVhZGVyczogcmVxdWVzdEhlYWRlcnMsXG4gICAgfSxcbiAgfSk7XG5cbiAgLy8gU2V0IGEgbmV3IHJlc3BvbnNlIGhlYWRlciBgeC1oZWxsby1mcm9tLW1pZGRsZXdhcmUyYFxuICByZXR1cm4gcmVzcG9uc2U7XG5cbiAgLy8gTmV4dFJlc3BvbnNlLm5leHQoKTtcbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxdWVzdCIsImFjY2Vzc1Rva2VuIiwiY29va2llcyIsImdldCIsInZhbHVlIiwicmVxdWVzdEhlYWRlcnMiLCJIZWFkZXJzIiwiaGVhZGVycyIsInNldCIsInJlc3BvbnNlIiwibmV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});