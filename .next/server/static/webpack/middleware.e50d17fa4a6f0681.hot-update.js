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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\nasync function middleware(request) {\n    const accessToken = request.cookies.get(\"accessToken\")?.value; // if (!accessToken || isTokenExpired(accessToken)) {\n    //  request.text() = {isLoggined:true}\n    // } else {\n    //   NextResponse.data = { isLoggined: false };\n    // }\n    next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rewrite(\"isLoggined\");\n    next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBSU8sZUFBZUMsV0FBV0MsT0FBMUI7SUFDTCxNQUFNQyxjQUFjRCxRQUFRRSxPQUFSLENBQWdCQyxHQUFoQixDQUFvQixnQkFBZ0JDLE9BRXhEO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFFQU4sMEZBQUEsQ0FBcUI7SUFFckJBLHVGQUFBO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZS50cz80MjJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IGlzVG9rZW5FeHBpcmVkIH0gZnJvbSBcIi4vaG9va3MvdXRpbHMvbWFuYWdlLXRva2VuXCI7XG5pbXBvcnQgbmV4dCBmcm9tIFwibmV4dFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWlkZGxld2FyZShyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICBjb25zdCBhY2Nlc3NUb2tlbiA9IHJlcXVlc3QuY29va2llcy5nZXQoXCJhY2Nlc3NUb2tlblwiKT8udmFsdWU7XG5cbiAgLy8gaWYgKCFhY2Nlc3NUb2tlbiB8fCBpc1Rva2VuRXhwaXJlZChhY2Nlc3NUb2tlbikpIHtcbiAgLy8gIHJlcXVlc3QudGV4dCgpID0ge2lzTG9nZ2luZWQ6dHJ1ZX1cbiAgLy8gfSBlbHNlIHtcbiAgLy8gICBOZXh0UmVzcG9uc2UuZGF0YSA9IHsgaXNMb2dnaW5lZDogZmFsc2UgfTtcbiAgLy8gfVxuXG4gIE5leHRSZXNwb25zZS5yZXdyaXRlKFwiaXNMb2dnaW5lZFwiKTtcblxuICBOZXh0UmVzcG9uc2UubmV4dCgpO1xufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIm1pZGRsZXdhcmUiLCJyZXF1ZXN0IiwiYWNjZXNzVG9rZW4iLCJjb29raWVzIiwiZ2V0IiwidmFsdWUiLCJyZXdyaXRlIiwibmV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});