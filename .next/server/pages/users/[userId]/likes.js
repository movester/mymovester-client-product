"use strict";
(() => {
var exports = {};
exports.id = 362;
exports.ids = [362];
exports.modules = {

/***/ 6598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D_: () => (/* binding */ STRETCHING_SUB_CATEGORY_TEXT),
/* harmony export */   fC: () => (/* binding */ STRETCHING_MAIN_CATEGORY_TEXT),
/* harmony export */   iW: () => (/* binding */ STRETCHING_EFFECT_TEXT)
/* harmony export */ });
/* unused harmony export STRETCHING_TOTAL_CATEGORTY_TEXT */
const STRETCHING_MAIN_CATEGORY_TEXT = {
  UPPER_BODY: "상체",
  LOWER_BODY: "하체"
};
const STRETCHING_SUB_CATEGORY_TEXT = {
  NECK: "목/가슴/어깨",
  ARM: "팔/손/손목",
  BACK: "등/몸통",
  HIP_JOINT: "고관절/둔근",
  CALF: "종아리/발목/발",
  KNEE: "무릎/허벅지"
};
const STRETCHING_TOTAL_CATEGORTY_TEXT = {
  UPPER_BODY: "상체 전체",
  NECK: "목/가슴/어깨",
  ARM: "팔/손/손목",
  BACK: "등/몸통",
  LOWER_BODY: "하체 전채",
  HIP_JOINT: "고관절/둔근",
  CALF: "종아리/발목/발",
  KNEE: "무릎/허벅지"
};
const STRETCHING_EFFECT_TEXT = {
  RELIEF_PAIN: "통증완화",
  IMPROVE_POSTURE: "자세개선",
  RELAX_MUSCLE: "근육이완",
  BLOOD_CIRCULATION: "혈액순환",
  RELIEF_TURTLE_NECK: "거북목 완화",
  RELIEF_ROUND_SHOULDER: "라운드숄더 완화"
};

/***/ }),

/***/ 1856:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useStretchingLikeListsInquiry = props => {
  const {
    token
  } = props;
  const res = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)({
    queryFn: () => fetch("/api/like/stretchings", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      return res.json();
    }).catch(error => error),
    queryKey: ["like", "list", token],
    onError: error => {
      console.log(error);
    },
    enabled: Boolean(token),
    refetchOnWindowFocus: false
  });
  return res;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStretchingLikeListsInquiry);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9684:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9026);
/* harmony import */ var _components_utils_MyPageNavigator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6851);
/* harmony import */ var movester_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2531);
/* harmony import */ var movester_design_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(movester_design_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_utils_Navigator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4937);
/* harmony import */ var _hooks_api_useStretchingLikeListsInquiry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1856);
/* harmony import */ var _hooks_utils_manage_token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6975);
/* harmony import */ var _constants_text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6598);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_utils_Navigator__WEBPACK_IMPORTED_MODULE_5__, _hooks_api_useStretchingLikeListsInquiry__WEBPACK_IMPORTED_MODULE_6__, _hooks_utils_manage_token__WEBPACK_IMPORTED_MODULE_7__]);
([_components_utils_Navigator__WEBPACK_IMPORTED_MODULE_5__, _hooks_api_useStretchingLikeListsInquiry__WEBPACK_IMPORTED_MODULE_6__, _hooks_utils_manage_token__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable jsx-a11y/alt-text */

/* eslint-disable @next/next/no-img-element */













const UserActivitiesLikePage = ({
  isLoggined
}) => {
  const {
    0: currentTab,
    1: _
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("LIKES");
  const accessToken = (0,_hooks_utils_manage_token__WEBPACK_IMPORTED_MODULE_7__/* .getAccessToken */ .hP)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
  const {
    data
  } = (0,_hooks_api_useStretchingLikeListsInquiry__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
    token: accessToken
  });

  const handleOnClickStretchingItem = id => {
    router.push(`/stretchings/detail?id=${id}`);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(PageWrapper, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_utils_Navigator__WEBPACK_IMPORTED_MODULE_5__/* .MemorizedNavigator */ .y, {
      isLoggined: isLoggined === "true" ? true : false
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(ContentWrapper, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_utils_MyPageNavigator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        currentTab: currentTab
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(ContentArea, {
        children: data && data.stretchingList.map(listItem => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(Content, {
          onClick: () => handleOnClickStretchingItem(listItem.id),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("img", {
            src: listItem.imageUrl
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Typography, {
            children: listItem.title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Box, {
            display: "flex",
            justifyContent: "start",
            gap: 4,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Chip, {
              size: "sm",
              children: _constants_text__WEBPACK_IMPORTED_MODULE_8__/* .STRETCHING_MAIN_CATEGORY_TEXT */ .fC[listItem.mainCategory]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Typography, {
              color: _constants_style__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .O.g100,
              children: _constants_text__WEBPACK_IMPORTED_MODULE_8__/* .STRETCHING_SUB_CATEGORY_TEXT */ .D_[listItem.subCategory]
            })]
          })]
        }, `user-likeList-${listItem.id}`))
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserActivitiesLikePage);
const PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.styled.div.withConfig({
  displayName: "likes__PageWrapper",
  componentId: "sc-1tvye4u-0"
})(["display:flex;background-color:", ";height:100%;align-items:center;justify-content:center;flex-direction:column;gap:24px;"], _constants_style__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .O.f000);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.styled.div.withConfig({
  displayName: "likes__ContentWrapper",
  componentId: "sc-1tvye4u-1"
})(["width:100%;padding:0 80px;display:flex;justify-content:center;align-items:start;gap:24px;"]);
const ContentArea = styled_components__WEBPACK_IMPORTED_MODULE_0__.styled.div.withConfig({
  displayName: "likes__ContentArea",
  componentId: "sc-1tvye4u-2"
})(["flex-grow:1;display:grid;grid-template-columns:repeat(3,1fr);gap:16px;:hover{cursor:pointer;}"]);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0__.styled.div.withConfig({
  displayName: "likes__Content",
  componentId: "sc-1tvye4u-3"
})(["border-radius:8px;padding:8px;box-shadow:4px 4px 8px rgba(0,0,0,0.1);"]);
const getServerSideProps = ({
  req
}) => {
  const isLoggined = req.headers["x-loggined"];
  return {
    props: {
      isLoggined
    }
  };
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8520:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),
/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3185);
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5244);
/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7182);
/* harmony import */ var private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5539);
/* harmony import */ var private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3376);
/* harmony import */ var private_next_pages_users_userId_likes_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9684);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_users_userId_likes_tsx__WEBPACK_IMPORTED_MODULE_5__]);
([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_users_userId_likes_tsx__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_users_userId_likes_tsx__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_users_userId_likes_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_users_userId_likes_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_users_userId_likes_tsx__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_users_userId_likes_tsx__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_users_userId_likes_tsx__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_users_userId_likes_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_users_userId_likes_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_users_userId_likes_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_users_userId_likes_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_users_userId_likes_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/users/[userId]/likes",
        pathname: "/users/[userId]/likes",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3__["default"]
    },
    userland: private_next_pages_users_userId_likes_tsx__WEBPACK_IMPORTED_MODULE_5__
});

//# sourceMappingURL=pages.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2531:
/***/ ((module) => {

module.exports = require("movester-design-system");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 6666:
/***/ ((module) => {

module.exports = require("react-responsive");

/***/ }),

/***/ 9755:
/***/ ((module) => {

module.exports = require("recoil");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 9752:
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 2880:
/***/ ((module) => {

module.exports = import("jwt-decode");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [37,746,975,937,851], () => (__webpack_exec__(8520)));
module.exports = __webpack_exports__;

})();