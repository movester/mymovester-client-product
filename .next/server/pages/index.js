"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 835:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var _components_utils_Navigator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4937);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9026);
/* harmony import */ var movester_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2531);
/* harmony import */ var movester_design_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(movester_design_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4009);
/* harmony import */ var _hooks_utils_useIsMobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8995);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_utils_Navigator__WEBPACK_IMPORTED_MODULE_0__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__]);
([_components_utils_Navigator__WEBPACK_IMPORTED_MODULE_0__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable jsx-a11y/alt-text */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable react-hooks/rules-of-hooks */









const ROUTER_PAGE_STRETCHINGS = "/stretchings";
const ROUTER_PAGE_ROUTINES = "/routines";
const ROUTER_LINK_KAKAOOPENCHATTING = "https://open.kakao.com/o/gtZLyR0c";

const mainPage = ({
  isLoggined
}) => {
  const [ref1, inView1] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView)({
    threshold: 0.5,
    triggerOnce: false
  });
  const [ref2, inView2] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView)({
    threshold: 0.5,
    triggerOnce: false
  });
  const [ref3, inView3] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView)({
    threshold: 0.5,
    triggerOnce: false
  });
  const [ref4, inView4] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView)({
    threshold: 0.5,
    triggerOnce: false
  });
  const isMobile = (0,_hooks_utils_useIsMobile__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(PageWrapper, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_utils_Navigator__WEBPACK_IMPORTED_MODULE_0__/* .MemorizedNavigator */ .y, {
      isLoggined: isLoggined,
      pageID: "HOME"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ContentWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(MainBanner, {
        ref: ref1,
        $visible: inView1,
        $isMobile: isMobile,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Box, {
          display: "flex",
          alignItems: "start",
          justifyContent: "start",
          flexDirection: "column",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(HeadingTypo, {
            $isMobile: isMobile,
            children: "바쁜 일상 속\n나를 위한 작은 움직임"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(SubHeadingTypo, {
            $isMobile: isMobile,
            children: "잠깐 이면 돼요."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(MainBannerImageWrapper, {
          $isMobile: isMobile,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("img", {
            src: "/mainpage_banner1_1.png",
            width: isMobile ? "100%" : 400
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("img", {
            src: "/mainpage_banner1_2.png",
            width: isMobile ? "100%" : 400
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(MainBanner, {
        ref: ref2,
        $visible: inView2,
        $isMobile: isMobile,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Box, {
          display: "flex",
          alignItems: "start",
          justifyContent: "start",
          flexDirection: "column",
          gap: isMobile ? 64 : 0,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            style: {
              paddingBottom: "8px"
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(HeadingTypo, {
              $isMobile: isMobile,
              children: "모든 스트레칭을 한 곳에"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(SubHeadingTypo, {
              $isMobile: isMobile,
              children: "스트레칭 부위, 효과별로\n원하는 스트레칭을 찾아보세요."
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Box, {
            width: isMobile ? "100%" : 300,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Button, {
              size: "md",
              onClick: () => router.push(ROUTER_PAGE_STRETCHINGS),
              children: "스트레칭 구경가기"
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(ImageMobile, {
          $isMobile: isMobile,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("img", {
            src: "/mainpage1.png",
            width: isMobile ? "100%" : 200
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(ImageDesktop, {
          $isMobile: isMobile,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("img", {
            src: "/mainpage2.png",
            width: 500
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(MainBanner, {
        ref: ref3,
        $visible: inView3,
        $isMobile: isMobile,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Box, {
          display: "flex",
          alignItems: "start",
          justifyContent: "space-between",
          flexDirection: "column",
          width: "100%",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Box, {
            display: "flex",
            alignItems: "start",
            justifyContent: "start",
            flexDirection: "column",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(HeadingTypo, {
              $isMobile: isMobile,
              children: "즐겁고 간단하게\n스트레칭 습관 형성하기"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(SubHeadingTypo, {
              $isMobile: isMobile,
              children: "나에게 필요한 스트레칭만 담아\n나만의 루틴을 만들어보세요."
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(ImageFolder, {
            $isMobile: isMobile,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("img", {
              src: "/mainpage_banner3_1.png",
              width: isMobile ? "100%" : 380
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Box, {
            width: isMobile ? "100%" : 300,
            height: 60,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Button, {
              size: "md",
              onClick: () => router.push(ROUTER_PAGE_STRETCHINGS) // disabled={true}
              ,
              children: "나만의 루틴 만들기"
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(MainBanner, {
        ref: ref4,
        $visible: inView4,
        $isMobile: isMobile,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Box, {
          display: "flex",
          alignItems: "start",
          justifyContent: "space-between",
          flexDirection: "column",
          gap: isMobile ? 64 : 0,
          width: "100%",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            style: {
              paddingBottom: "8px"
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(HeadingTypo, {
              $isMobile: isMobile,
              children: "함께 하는 즐거움\n스트레칭 알림"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(SubHeadingTypo, {
              $isMobile: isMobile,
              children: "카카오 오픈 채팅방을 통해\n스트레칭 알림 메세지를 받아보세요."
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(KakaoButton, {
            $isMobile: isMobile,
            onClick: () => router.push(ROUTER_LINK_KAKAOOPENCHATTING),
            children: "스트레칭 알림 받기"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(KakaoImage, {
            $isMobile: isMobile,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("img", {
              src: "/mainpage_banner4_2.png",
              width: isMobile ? "100%" : 300
            })
          })]
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainPage);
const PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__.styled.div.withConfig({
  displayName: "pages__PageWrapper",
  componentId: "sc-1ay3gq1-0"
})(["display:flex;background-color:", ";flex-direction:column;justify-content:center;align-items:center;"], _constants_style__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .O.f000);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__.styled.div.withConfig({
  displayName: "pages__ContentWrapper",
  componentId: "sc-1ay3gq1-1"
})(["width:100%;scroll-snap-type:y mandatory;overflow:scroll;height:calc(100vh - 70px);"]);
const MainBanner = styled_components__WEBPACK_IMPORTED_MODULE_1__.styled.div.withConfig({
  displayName: "pages__MainBanner",
  componentId: "sc-1ay3gq1-2"
})(["margin:auto;overflow:hidden;position:relative;width:100%;max-width:800px;height:", ";padding:", ";display:flex;flex-direction:", ";scroll-snap-align:start;div{opacity:0;transform:translateY(20px);transition:opacity 0.5s ease-out,transform 0.5s ease-out;", "}"], props => props.$isMobile ? "100%" : "inherit", props => props.$isMobile ? "32px" : "64px", props => props.$isMobile ? "column" : "row", props => props.$visible ? `
      opacity: 1;
      transform: translateY(0);
    ` : "");
const HeadingTypo = styled_components__WEBPACK_IMPORTED_MODULE_1__.styled.div.withConfig({
  displayName: "pages__HeadingTypo",
  componentId: "sc-1ay3gq1-3"
})(["font-size:", ";font-weight:700;white-space:pre-wrap;line-height:110%;word-spacing:4px;"], props => props.$isMobile ? "28px" : "32px");
const SubHeadingTypo = styled_components__WEBPACK_IMPORTED_MODULE_1__.styled.div.withConfig({
  displayName: "pages__SubHeadingTypo",
  componentId: "sc-1ay3gq1-4"
})(["font-size:", ";font-weight:500;white-space:pre-wrap;line-height:110%;color:", ";word-spacing:2px;"], props => props.$isMobile ? "18px" : "22px", _constants_style__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .O.g000);
const MainBannerImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__.styled.div.withConfig({
  displayName: "pages__MainBannerImageWrapper",
  componentId: "sc-1ay3gq1-5"
})(["align-items:end;justify-content:center;z-index:30;", ""], props => props.$isMobile ? `display:block` : ` 
        display:flex;
        position: absolute;
        bottom: 0;
        right: 0;`);
const ImageDesktop = styled_components__WEBPACK_IMPORTED_MODULE_1__.styled.div.withConfig({
  displayName: "pages__ImageDesktop",
  componentId: "sc-1ay3gq1-6"
})(["z-index:30;", ""], props => props.$isMobile ? `  display:none;` : ` position: absolute;
  bottom: 0;
  right: 0;

  `);
const ImageMobile = styled_components__WEBPACK_IMPORTED_MODULE_1__.styled.div.withConfig({
  displayName: "pages__ImageMobile",
  componentId: "sc-1ay3gq1-7"
})(["z-index:50;", ""], props => props.$isMobile ? `
      width:100%;
      display:flex;
      justify-content:center;
      padding-top:30px;
      ` : ` position: absolute;
  bottom: -100px;
  right: 400px;
  `);
const ImageFolder = styled_components__WEBPACK_IMPORTED_MODULE_1__.styled.div.withConfig({
  displayName: "pages__ImageFolder",
  componentId: "sc-1ay3gq1-8"
})(["", ""], props => props.$isMobile ? `display:block
        padding-bottom:32px;
      ` : ` 
        position: absolute;
        bottom: 0;
        right: 0;`);
const vibration = styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes`
0%{
  transform: rotate(1deg);
}
4%{
  transform: rotate(-1deg);
}
8%{
  transform: rotate(1deg);
}
12%{

  transform: rotate(-1deg);
}
16%{
  transform: rotate(1deg);
}
20%{
  transform: rotate(-1deg);
}
24%{
  transform: rotate(1deg);
}
28%{
  transform: rotate(-1deg);
}
100%{
  transform: rotate(0);
}


`;
const KakaoImage = styled_components__WEBPACK_IMPORTED_MODULE_1__.styled.div.withConfig({
  displayName: "pages__KakaoImage",
  componentId: "sc-1ay3gq1-9"
})(["animation:", " 1.5s infinite;", ""], vibration, props => props.$isMobile ? `` : ` 
        display:flex;
        position: absolute;
        bottom: -160px;
        right: 0;`);
const KakaoButton = styled_components__WEBPACK_IMPORTED_MODULE_1__.styled.button.withConfig({
  displayName: "pages__KakaoButton",
  componentId: "sc-1ay3gq1-10"
})(["background-color:#fee500;color:#181600;&:hover{cursor:pointer;}border-radius:8px;justify-content:center;align-items:center;text-align:center;display:flex;font-weight:bold;outline:none;box-sizing:border-box;width:", ";height:60px;font-size:24px;border:none;outline:none;padding:", ";"], props => props.$isMobile ? "100%" : "300px", props => props.$isMobile ? "32px 0" : 0);
const getServerSideProps = ({
  req
}) => {
  const isLoggined = req.headers["x-loggined"] === "true" ? true : false;
  return {
    props: {
      isLoggined
    }
  };
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1496:
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
/* harmony import */ var private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(835);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__]);
([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/index",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3__["default"]
    },
    userland: private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__
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

/***/ }),

/***/ 4009:
/***/ ((module) => {

module.exports = import("react-intersection-observer");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [37,746,975,937], () => (__webpack_exec__(1496)));
module.exports = __webpack_exports__;

})();