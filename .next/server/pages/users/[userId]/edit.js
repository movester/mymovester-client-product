"use strict";
(() => {
var exports = {};
exports.id = 859;
exports.ids = [859];
exports.modules = {

/***/ 9369:
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
/* harmony import */ var _components_utils_Navigator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4937);
/* harmony import */ var movester_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2531);
/* harmony import */ var movester_design_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(movester_design_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_utils_MyPageNavigator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6851);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _recoil_user_atom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6613);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_utils_Navigator__WEBPACK_IMPORTED_MODULE_2__]);
_components_utils_Navigator__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const UserMyPage = ({
  isLoggined
}) => {
  const [recoilUserProfileState, setRecoilUserProfileState] = (0,recoil__WEBPACK_IMPORTED_MODULE_7__.useRecoilState)(_recoil_user_atom__WEBPACK_IMPORTED_MODULE_8__/* .userProfile */ .D);
  const {
    0: currentTab,
    1: _
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("EDIT");
  const {
    0: userName,
    1: setUserName
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(recoilUserProfileState?.nickName);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)(); // console.log(recoilUserProfileState);

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    setUserName(recoilUserProfileState?.nickName);
  }, [recoilUserProfileState?.nickName]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(PageWrapper, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_utils_Navigator__WEBPACK_IMPORTED_MODULE_2__/* .MemorizedNavigator */ .y, {
      isLoggined: isLoggined === "true" ? true : false
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(ContentWrapper, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_utils_MyPageNavigator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        currentTab: currentTab
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(ContentArea, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Box, {
          border: `1px solid ${_constants_style__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .O.g000}`,
          borderRadius: 8,
          padding: 24,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          justifyContent: "center",
          alignItems: "start",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Box, {
            display: "flex",
            flexDirection: "column",
            gap: 4,
            justifyContent: "center",
            alignItems: "center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Typography, {
              variants: "heading2",
              children: "\uD68C\uC6D0\uC815\uBCF4 \uC218\uC815"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Box, {
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            gap: 16,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Box, {
              width: 80,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                variants: "body2",
                children: "\uD504\uB85C\uD544 \uC774\uBBF8\uC9C0"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Box, {
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: _constants_style__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .O.g000
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Box, {
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: 32,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Box, {
              width: 80,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                variants: "body2",
                children: "\uC774\uB984"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Input, {
              value: userName,
              setValue: e => setUserName(e.target.value)
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Box, {
            width: "100%",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(WithdrawalButton, {
              onClick: () => router.push("/withdrawal"),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                variants: "body2",
                color: _constants_style__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .O.r000,
                children: "\uD0C8\uD1F4\uD558\uAE30"
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Box, {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Box, {
              width: 240,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Button, {
                variants: "primary",
                size: "xs",
                disabled: true,
                children: "\uD68C\uC6D0\uC815\uBCF4 \uC218\uC815"
              })
            })
          })]
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserMyPage);
const PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.styled.div.withConfig({
  displayName: "edit__PageWrapper",
  componentId: "sc-flc5ak-0"
})(["display:flex;background-color:", ";height:100%;align-items:center;justify-content:center;flex-direction:column;gap:24px;"], _constants_style__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .O.f000);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.styled.div.withConfig({
  displayName: "edit__ContentWrapper",
  componentId: "sc-flc5ak-1"
})(["width:100%;padding:0 80px;display:flex;justify-content:center;align-items:start;gap:24px;"]);
const ContentArea = styled_components__WEBPACK_IMPORTED_MODULE_0__.styled.div.withConfig({
  displayName: "edit__ContentArea",
  componentId: "sc-flc5ak-2"
})(["flex-grow:1;display:block;width:300px;"]);
const WithdrawalButton = styled_components__WEBPACK_IMPORTED_MODULE_0__.styled.div.withConfig({
  displayName: "edit__WithdrawalButton",
  componentId: "sc-flc5ak-3"
})(["border-bottom:1px solid ", ";display:flex;gap:0;:hover{cursor:pointer;}"], _constants_style__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .O.r000);
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

/***/ 1392:
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
/* harmony import */ var private_next_pages_users_userId_edit_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9369);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_users_userId_edit_tsx__WEBPACK_IMPORTED_MODULE_5__]);
([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_users_userId_edit_tsx__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_users_userId_edit_tsx__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_users_userId_edit_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_users_userId_edit_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_users_userId_edit_tsx__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_users_userId_edit_tsx__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_users_userId_edit_tsx__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_users_userId_edit_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_users_userId_edit_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_users_userId_edit_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_users_userId_edit_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_users_userId_edit_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/users/[userId]/edit",
        pathname: "/users/[userId]/edit",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3__["default"]
    },
    userland: private_next_pages_users_userId_edit_tsx__WEBPACK_IMPORTED_MODULE_5__
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
var __webpack_exports__ = __webpack_require__.X(0, [37,746,975,937,851], () => (__webpack_exec__(1392)));
module.exports = __webpack_exports__;

})();