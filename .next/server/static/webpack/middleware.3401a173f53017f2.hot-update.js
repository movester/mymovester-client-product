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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\nasync function middleware(request) {\n    const accessToken = request.cookies.get(\"accessToken\")?.value;\n    const requestHeaders = new Headers(request.headers);\n    if (!accessToken) {\n        requestHeaders.set(\"x-hello-from-middleware2\", !accessToken ? \"false\" : \"true\");\n    } // You can also set request headers in NextResponse.rewrite\n    const response = next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next({\n        request: {\n            // New request headers\n            headers: requestHeaders\n        }\n    }); // Set a new response header `x-hello-from-middleware2`\n    return response; // NextResponse.next();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBSU8sZUFBZUMsV0FBV0MsT0FBMUI7SUFDTCxNQUFNQyxjQUFjRCxRQUFRRSxPQUFSLENBQWdCQyxHQUFoQixDQUFvQixnQkFBZ0JDO0lBRXhELE1BQU1DLGlCQUFpQixJQUFJQyxRQUFRTixRQUFRTyxPQUFwQjtJQUV2QixJQUFJLENBQUNOLGFBQWE7UUFDaEJJLGVBQWVHLEdBQWYsQ0FDRSw0QkFDQSxDQUFDUCxjQUFjLFVBQVU7SUFFNUIsRUFFRDtJQUNBLE1BQU1RLFdBQVdYLHVGQUFBLENBQWtCO1FBQ2pDRSxTQUFTO1lBQ1A7WUFDQU8sU0FBU0Y7UUFGRjtJQUR3QixJQU9uQztJQUNBLE9BQU9JLFVBRVA7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLnRzPzQyMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IHsgaXNUb2tlbkV4cGlyZWQgfSBmcm9tIFwiLi9ob29rcy91dGlscy9tYW5hZ2UtdG9rZW5cIjtcbmltcG9ydCBuZXh0IGZyb20gXCJuZXh0XCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4gIGNvbnN0IGFjY2Vzc1Rva2VuID0gcmVxdWVzdC5jb29raWVzLmdldChcImFjY2Vzc1Rva2VuXCIpPy52YWx1ZTtcblxuICBjb25zdCByZXF1ZXN0SGVhZGVycyA9IG5ldyBIZWFkZXJzKHJlcXVlc3QuaGVhZGVycyk7XG5cbiAgaWYgKCFhY2Nlc3NUb2tlbikge1xuICAgIHJlcXVlc3RIZWFkZXJzLnNldChcbiAgICAgIFwieC1oZWxsby1mcm9tLW1pZGRsZXdhcmUyXCIsXG4gICAgICAhYWNjZXNzVG9rZW4gPyBcImZhbHNlXCIgOiBcInRydWVcIlxuICAgICk7XG4gIH1cblxuICAvLyBZb3UgY2FuIGFsc28gc2V0IHJlcXVlc3QgaGVhZGVycyBpbiBOZXh0UmVzcG9uc2UucmV3cml0ZVxuICBjb25zdCByZXNwb25zZSA9IE5leHRSZXNwb25zZS5uZXh0KHtcbiAgICByZXF1ZXN0OiB7XG4gICAgICAvLyBOZXcgcmVxdWVzdCBoZWFkZXJzXG4gICAgICBoZWFkZXJzOiByZXF1ZXN0SGVhZGVycyxcbiAgICB9LFxuICB9KTtcblxuICAvLyBTZXQgYSBuZXcgcmVzcG9uc2UgaGVhZGVyIGB4LWhlbGxvLWZyb20tbWlkZGxld2FyZTJgXG4gIHJldHVybiByZXNwb25zZTtcblxuICAvLyBOZXh0UmVzcG9uc2UubmV4dCgpO1xufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIm1pZGRsZXdhcmUiLCJyZXF1ZXN0IiwiYWNjZXNzVG9rZW4iLCJjb29raWVzIiwiZ2V0IiwidmFsdWUiLCJyZXF1ZXN0SGVhZGVycyIsIkhlYWRlcnMiLCJoZWFkZXJzIiwic2V0IiwicmVzcG9uc2UiLCJuZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});