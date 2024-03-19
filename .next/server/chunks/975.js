"use strict";
exports.id = 975;
exports.ids = [975];
exports.modules = {

/***/ 6975:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M8: () => (/* binding */ setAccessToken),
/* harmony export */   gy: () => (/* binding */ removeToken),
/* harmony export */   hP: () => (/* binding */ getAccessToken),
/* harmony export */   zI: () => (/* binding */ setRefreshToken)
/* harmony export */ });
/* unused harmony exports getRefreshToken, isTokenExpired, isAccessTokenExpired */
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9915);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2880);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__, jwt_decode__WEBPACK_IMPORTED_MODULE_1__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_0__, jwt_decode__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const setAccessToken = token => {
  js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set("access_token", token, {
    secure: true
  });
};
const setRefreshToken = token => {
  js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set("refresh_token", token, {
    secure: true
  });
};
const getAccessToken = () => {
  return js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get("access_token");
};
const getRefreshToken = () => {
  return Cookies.get("refresh_token");
};
const removeToken = () => {
  js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].remove("refresh_token", {
    secure: true
  });
  js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].remove("access_token", {
    secure: true
  });
};
const isTokenExpired = token => {
  const decoded = jwtDecode(token);
  let isExpired = false;

  if (decoded.exp) {
    const buffer = 60000; // eslint-disable-next-line no-magic-numbers

    isExpired = decoded.exp < (Date.now() + buffer) / 1000;
  }

  return isExpired;
};
const isAccessTokenExpired = () => {
  const accessToken = getAccessToken();
  return !accessToken || isTokenExpired(accessToken);
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;