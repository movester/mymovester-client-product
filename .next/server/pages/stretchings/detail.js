"use strict";
(() => {
var exports = {};
exports.id = 745;
exports.ids = [745];
exports.modules = {

/***/ 5815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9026);
/* harmony import */ var movester_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2531);
/* harmony import */ var movester_design_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(movester_design_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5893);





const sizeProps = {
  sm: {
    height: 32,
    width: 30,
    padding: 8
  },
  md: {
    height: 48,
    width: 44,
    padding: 16
  }
};

const ListTableItem = props => {
  const {
    order,
    size = "md",
    children
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(movester_design_system__WEBPACK_IMPORTED_MODULE_2__.Box, {
    display: "flex",
    flexDirection: "row",
    gap: 1,
    backgroundColor: _constants_style__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .O.g000,
    width: "100%",
    alignItems: "center",
    height: sizeProps[size].height,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_2__.Box, {
      backgroundColor: _constants_style__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .O.f000,
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: sizeProps[size].width,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_2__.Typography, {
        variants: size === "md" ? "body1" : "body2",
        children: order
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_2__.Box, {
      backgroundColor: _constants_style__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .O.f000,
      width: "100%",
      height: "100%",
      alignItems: "center",
      display: "flex",
      padding: sizeProps[size].padding,
      children: children
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListTableItem);

/***/ }),

/***/ 9377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9026);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);




const ShadowBox = props => {
  const {
    children
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(Box, {
    children: children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShadowBox);
const Box = styled_components__WEBPACK_IMPORTED_MODULE_0__.styled.div.withConfig({
  displayName: "ShadowBox__Box",
  componentId: "sc-kj2mf4-0"
})(["background-color:", ";box-shadow:4px 4px 8px rgba(0,0,0,0.1);width:100%;height:auto;border-radius:8px;"], _constants_style__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .O.f000);

/***/ }),

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

/***/ 8110:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useDislikeStretching = props => {
  const {
    id
  } = props;
  return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)({
    mutationFn: token => fetch(`/api/like/stretchings/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }),
    mutationKey: ["dislike", id],
    onSuccess: () => {},
    onError: error => {
      console.log(error);
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDislikeStretching);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4377:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useLikeStretching = props => {
  const {
    id
  } = props;
  return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)({
    mutationFn: token => fetch(`/api/like/stretchings/${id}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }),
    mutationKey: ["like", id],
    onSuccess: () => {},
    onError: error => {
      console.log(error);
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLikeStretching);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5695:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useStretchingDetailInquiry = props => {
  const {
    id,
    token
  } = props;
  const res = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)({
    queryFn: () => fetch(`/api/stretchings/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json()).catch(error => error),
    queryKey: ["stretching", "detail", id],
    onError: error => {
      console.log(error);
    },
    enabled: Boolean(id),
    refetchOnWindowFocus: false
  });
  return res;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStretchingDetailInquiry);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7283:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9026);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_utils_useIsMobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8995);
/* harmony import */ var _views_stretchingDetailMobileView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8821);
/* harmony import */ var _views_stretchingDetailPcView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5645);
/* harmony import */ var _hooks_api_useStretchingDetailInquiry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5695);
/* harmony import */ var _hooks_utils_manage_token__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6975);
/* harmony import */ var _hooks_api_useLikeStretching__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4377);
/* harmony import */ var _hooks_api_useDislikeStretching__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8110);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_views_stretchingDetailPcView__WEBPACK_IMPORTED_MODULE_6__, _hooks_api_useStretchingDetailInquiry__WEBPACK_IMPORTED_MODULE_7__, _hooks_utils_manage_token__WEBPACK_IMPORTED_MODULE_8__, _hooks_api_useLikeStretching__WEBPACK_IMPORTED_MODULE_9__, _hooks_api_useDislikeStretching__WEBPACK_IMPORTED_MODULE_10__]);
([_views_stretchingDetailPcView__WEBPACK_IMPORTED_MODULE_6__, _hooks_api_useStretchingDetailInquiry__WEBPACK_IMPORTED_MODULE_7__, _hooks_utils_manage_token__WEBPACK_IMPORTED_MODULE_8__, _hooks_api_useLikeStretching__WEBPACK_IMPORTED_MODULE_9__, _hooks_api_useDislikeStretching__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const StretchingDetailPage = ({
  isLoggined
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const isMobile = (0,_hooks_utils_useIsMobile__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
  const STRETCHING_ID = router.query.id ? typeof router.query.id == "string" ? router.query.id : router.query.id[0] : undefined;
  const accessToken = (0,_hooks_utils_manage_token__WEBPACK_IMPORTED_MODULE_8__/* .getAccessToken */ .hP)();
  const {
    data,
    refetch
  } = (0,_hooks_api_useStretchingDetailInquiry__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
    id: STRETCHING_ID,
    token: accessToken
  });
  const {
    mutate: handleLikeStretching
  } = (0,_hooks_api_useLikeStretching__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)({
    id: data?.id
  });
  const {
    mutate: handleDisLikeStretching
  } = (0,_hooks_api_useDislikeStretching__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)({
    id: data?.id
  });

  const handleOnClickLikeButton = () => {
    if (data.isLike) {
      handleDisLikeStretching(accessToken);
      refetch();
    } else {
      handleLikeStretching(accessToken);
      refetch();
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(PageWrapper, {
    children: data && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
      children: isMobile ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_views_stretchingDetailMobileView__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        data: data
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_views_stretchingDetailPcView__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        data: data,
        isLoggined: isLoggined === "true" ? true : false,
        handleLikeButton: handleOnClickLikeButton
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StretchingDetailPage);
const PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "detail__PageWrapper",
  componentId: "sc-gth1tb-0"
})(["display:flex;background-color:", ";height:100%;align-items:center;justify-content:center;"], _constants_style__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .O.f000);
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

/***/ 8821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ stretchingDetailMobileView)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
// EXTERNAL MODULE: ./constants/style.ts
var style = __webpack_require__(9026);
;// CONCATENATED MODULE: external "react-slick"
const external_react_slick_namespaceObject = require("react-slick");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_namespaceObject);
// EXTERNAL MODULE: ./constants/text.ts
var constants_text = __webpack_require__(6598);
// EXTERNAL MODULE: ./components/utils/ListTableItem.tsx
var ListTableItem = __webpack_require__(5815);
// EXTERNAL MODULE: ./components/utils/ShadowBox.tsx
var ShadowBox = __webpack_require__(9377);
;// CONCATENATED MODULE: external "react-icons/bi"
const bi_namespaceObject = require("react-icons/bi");
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
;// CONCATENATED MODULE: external "react-icons/lu"
const lu_namespaceObject = require("react-icons/lu");
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "movester-design-system"
var external_movester_design_system_ = __webpack_require__(2531);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./views/stretchingDetailMobileView.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable jsx-a11y/alt-text */

/* eslint-disable @next/next/no-img-element */















const StretchingDetailMobilView = props => {
  const {
    data
  } = props;
  const {
    0: heartClicked,
    1: setHeartClicked
  } = (0,external_react_.useState)(false);
  const router = (0,router_.useRouter)();

  const handleOnClickShareURL = () => {
    navigator.clipboard.writeText(`${router.basePath}${router.asPath}`);
    window.alert("링크가 복사되었습니다!");
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ContentWrapper, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(NavigatorBar, {
      children: [/*#__PURE__*/jsx_runtime.jsx(external_movester_design_system_.Box, {
        width: 32,
        height: 32,
        backgroundColor: style/* colors */.O.f000,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        boxSahdow: "4px 4px 4px rgba(0,0,0,0.1)",
        onClick: () => router.push("/stretchings"),
        children: /*#__PURE__*/jsx_runtime.jsx(bi_namespaceObject.BiChevronLeft, {
          size: 20
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(SocialBoxWrapper, {
        children: [/*#__PURE__*/jsx_runtime.jsx(external_movester_design_system_.Box, {
          width: 32,
          height: 32,
          backgroundColor: style/* colors */.O.f000,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 16,
          boxSahdow: "4px 4px 4px rgba(0,0,0,0.1)",
          onClick: handleOnClickShareURL,
          children: /*#__PURE__*/jsx_runtime.jsx(lu_namespaceObject.LuShare, {
            size: 16
          })
        }), /*#__PURE__*/jsx_runtime.jsx(external_movester_design_system_.Box, {
          width: 32,
          height: 32,
          backgroundColor: style/* colors */.O.f000,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 16,
          boxSahdow: "4px 4px 4px rgba(0,0,0,0.1)",
          onClick: () => setHeartClicked(prev => !prev),
          children: heartClicked ? /*#__PURE__*/jsx_runtime.jsx(ai_.AiFillHeart, {
            size: 16,
            color: style/* colors */.O.r000
          }) : /*#__PURE__*/jsx_runtime.jsx(ai_.AiOutlineHeart, {
            size: 16
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime.jsx(external_movester_design_system_.Box, {
      width: "100%",
      children: /*#__PURE__*/jsx_runtime.jsx((external_react_slick_default()), _objectSpread(_objectSpread({}, settings), {}, {
        vertical: false,
        variableWidth: false,
        children: data.imageList.map((imgLink, index) => /*#__PURE__*/jsx_runtime.jsx(external_movester_design_system_.Box, {
          backgroundColor: style/* colors */.O.f300,
          width: "100%",
          height: "fit-content",
          children: /*#__PURE__*/jsx_runtime.jsx("img", {
            width: "100%",
            src: imgLink
          }, `img-detail-${data.id}-${index}`)
        }, `img-detail-${data.id}-${index}`))
      }))
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(external_movester_design_system_.Box, {
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      width: "100%",
      children: [/*#__PURE__*/jsx_runtime.jsx(external_movester_design_system_.Box, {
        children: /*#__PURE__*/jsx_runtime.jsx(external_movester_design_system_.Typography, {
          variants: "heading2",
          children: data.title
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(external_movester_design_system_.Box, {
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        gap: 8,
        children: [/*#__PURE__*/jsx_runtime.jsx(external_movester_design_system_.Chip, {
          size: "sm",
          children: constants_text/* STRETCHING_SUB_CATEGORY_TEXT */.D_[data.subCategory]
        }), data.effectList.map((item, idx) => /*#__PURE__*/jsx_runtime.jsx(external_movester_design_system_.Chip, {
          size: "sm",
          variants: "secondary",
          children: constants_text/* STRETCHING_EFFECT_TEXT */.iW[item]
        }, `detail-effect-${item}-${idx}`))]
      }), /*#__PURE__*/jsx_runtime.jsx(ShadowBox/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(external_movester_design_system_.Box, {
          backgroundColor: style/* colors */.O.f200,
          padding: 16,
          borderRadius: 8,
          display: "flex",
          flexDirection: "column",
          children: [/*#__PURE__*/jsx_runtime.jsx(external_movester_design_system_.Typography, {
            variants: "heading3",
            children: "\uAD8C\uC7A5 \uD69F\uC218"
          }), /*#__PURE__*/jsx_runtime.jsx(external_movester_design_system_.Typography, {
            variants: "heading3",
            children: `${data.collect}회 X ${data.set}세트`
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(external_movester_design_system_.Box, {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "start",
        gap: 8,
        children: [/*#__PURE__*/jsx_runtime.jsx(external_movester_design_system_.Typography, {
          variants: "heading3",
          children: "\uC2A4\uD2B8\uB808\uCE6D \uBC29\uBC95 \uBC0F \uC21C\uC11C"
        }), /*#__PURE__*/jsx_runtime.jsx(external_movester_design_system_.Box, {
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          border: ` 1px solid ${style/* colors */.O.g000}`,
          borderRadius: 8,
          width: "100%",
          overflow: "hidden",
          flexDirection: "column",
          backgroundColor: style/* colors */.O.g000,
          gap: 1,
          children: data.techniqueList.map((list, index) => /*#__PURE__*/jsx_runtime.jsx(ListTableItem/* default */.Z, {
            order: index + 1,
            size: "sm",
            children: /*#__PURE__*/jsx_runtime.jsx(external_movester_design_system_.Typography, {
              variants: "body3",
              children: list
            })
          }, `technique-list-${list}-${index}`))
        })]
      }), data.precautionList.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)(external_movester_design_system_.Box, {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "start",
        gap: 3,
        borderRadius: 8,
        backgroundColor: style/* colors */.O.f200,
        padding: 16,
        children: [/*#__PURE__*/jsx_runtime.jsx(external_movester_design_system_.Typography, {
          variants: "heading3",
          children: "\uC8FC\uC758 \uC0AC\uD56D"
        }), /*#__PURE__*/jsx_runtime.jsx(external_movester_design_system_.Box, {
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          flexDirection: "column",
          children: data.precautionList.map((list, index) => /*#__PURE__*/jsx_runtime.jsx(external_movester_design_system_.Typography, {
            variants: "body2",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(external_movester_design_system_.Typography, {
              variants: "body3",
              children: [" ", "✔️ " + list]
            })
          }, `technique-list-${list}`))
        })]
      }), data.videoUrl && /*#__PURE__*/(0,jsx_runtime.jsxs)(external_movester_design_system_.Box, {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        gap: 8,
        height: "auto",
        children: [/*#__PURE__*/jsx_runtime.jsx(external_movester_design_system_.Typography, {
          variants: "heading3",
          children: "\uCC38\uACE0\uC601\uC0C1"
        }), /*#__PURE__*/jsx_runtime.jsx(external_movester_design_system_.Box, {
          display: "flex",
          justifyContent: "center",
          width: "100%",
          children: /*#__PURE__*/jsx_runtime.jsx("iframe", {
            width: 550,
            height: 400,
            allowFullScreen: true,
            src: data.videoUrl
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ const stretchingDetailMobileView = (StretchingDetailMobilView);
const ContentWrapper = external_styled_components_.styled.div.withConfig({
  displayName: "stretchingDetailMobileView__ContentWrapper",
  componentId: "sc-1qenlxh-0"
})(["display:flex;flex-direction:column;justify-content:center;align-items:start;max-width:100vw;width:100%;height:100%;overflow-x:scroll;padding-bottom:32px;overflow:hidden;position:relative;"]);
const NavigatorBar = external_styled_components_.styled.div.withConfig({
  displayName: "stretchingDetailMobileView__NavigatorBar",
  componentId: "sc-1qenlxh-1"
})(["position:absolute;top:0;padding:16px;display:flex;justify-content:space-between;align-items:center;z-index:200;width:100%;"]);
const SocialBoxWrapper = external_styled_components_.styled.div.withConfig({
  displayName: "stretchingDetailMobileView__SocialBoxWrapper",
  componentId: "sc-1qenlxh-2"
})(["display:flex;flex-direction:row;justify-content:end;align-items:center;position:relative;gap:16px;"]);

/***/ }),

/***/ 5645:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_utils_Navigator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4937);
/* harmony import */ var _constants_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9026);
/* harmony import */ var _components_utils_ListTableItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5815);
/* harmony import */ var _components_utils_ShadowBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9377);
/* harmony import */ var _constants_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6598);
/* harmony import */ var movester_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2531);
/* harmony import */ var movester_design_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(movester_design_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_utils_Navigator__WEBPACK_IMPORTED_MODULE_1__]);
_components_utils_Navigator__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable jsx-a11y/alt-text */

/* eslint-disable @next/next/no-img-element */












const StretchingDetailPcView = props => {
  const {
    data,
    isLoggined,
    handleLikeButton
  } = props; // const [heartClicked, setHeartClicked] = useState<boolean>(false);

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();

  const handleOnClickShareURL = () => {
    navigator.clipboard.writeText(`${router.basePath}${router.asPath}`);
    window.alert("링크가 복사되었습니다!");
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(PageWrapper, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_utils_Navigator__WEBPACK_IMPORTED_MODULE_1__/* .MemorizedNavigator */ .y, {
      isLoggined: isLoggined
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(ContentWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(SocialBoxWrapper, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(movester_design_system__WEBPACK_IMPORTED_MODULE_6__.Box, {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(IconBox, {
            onClick: handleLikeButton,
            children: data.isLike ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiFillHeart, {
              size: 28,
              color: _constants_style__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .O.r000
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiOutlineHeart, {
              size: 28
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_6__.Typography, {
            variants: "body2"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(movester_design_system__WEBPACK_IMPORTED_MODULE_6__.Box, {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(IconBox, {
            onClick: handleOnClickShareURL,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiOutlineShareAlt, {
              size: 28
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_6__.Typography, {
            variants: "body2"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(movester_design_system__WEBPACK_IMPORTED_MODULE_6__.Box, {
        display: "flex",
        flexDirection: "column",
        gap: 16,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_6__.Box, {
          padding: "72px 0px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_6__.Typography, {
            variants: "title1",
            children: data.title
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(movester_design_system__WEBPACK_IMPORTED_MODULE_6__.Box, {
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: 8,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_6__.Chip, {
            children: _constants_text__WEBPACK_IMPORTED_MODULE_5__/* .STRETCHING_SUB_CATEGORY_TEXT */ .D_[data.subCategory]
          }), data.effectList.map((item, idx) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_6__.Chip, {
            variants: "secondary",
            children: _constants_text__WEBPACK_IMPORTED_MODULE_5__/* .STRETCHING_EFFECT_TEXT */ .iW[item]
          }, `detail-effect-${item}-${idx}`))]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_6__.Divider, {})]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_6__.Box, {
        display: "grid",
        gridTemplateColumns: `repeat(${data.imageList.length > 1 ? 2 : 1},350px)`,
        gap: 8,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: data.imageList.length > 1 ? "none" : _constants_style__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .O.f300,
        children: data.imageList.map((imgLink, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_6__.Box, {
          backgroundColor: _constants_style__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .O.f300,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("img", {
            src: imgLink
          })
        }, `img-detail-${data.id}-${index}`))
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_utils_ShadowBox__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(movester_design_system__WEBPACK_IMPORTED_MODULE_6__.Box, {
          backgroundColor: _constants_style__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .O.f200,
          padding: 32,
          borderRadius: 8,
          display: "flex",
          flexDirection: "column",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_6__.Typography, {
            variants: "heading2",
            children: "\uAD8C\uC7A5 \uD69F\uC218"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_6__.Typography, {
            variants: "heading2",
            children: `${data.collect}회 X ${data.set}세트`
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(movester_design_system__WEBPACK_IMPORTED_MODULE_6__.Box, {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "start",
        gap: 16,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_6__.Typography, {
          variants: "heading2",
          children: "\uC2A4\uD2B8\uB808\uCE6D \uBC29\uBC95 \uBC0F \uC21C\uC11C"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_6__.Box, {
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          border: ` 1px solid ${_constants_style__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .O.g000}`,
          borderRadius: 8,
          width: "100%",
          overflow: "hidden",
          flexDirection: "column",
          backgroundColor: _constants_style__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .O.g000,
          gap: 1,
          children: data.techniqueList.map((list, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_utils_ListTableItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            order: index + 1,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_6__.Typography, {
              variants: "body1",
              children: list
            })
          }, `technique-list-${list}-${index}`))
        })]
      }), data.precautionList.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(movester_design_system__WEBPACK_IMPORTED_MODULE_6__.Box, {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "start",
        borderRadius: 8,
        gap: 16,
        backgroundColor: _constants_style__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .O.f200,
        padding: 32,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_6__.Typography, {
          variants: "heading2",
          children: "\uC8FC\uC758 \uC0AC\uD56D"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_6__.Box, {
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          flexDirection: "column",
          gap: 4,
          children: data.precautionList.map((list, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_6__.Typography, {
            variants: "body1",
            children: "✔️ " + list
          }, `technique-list-${list}`))
        })]
      }), data.videoUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(movester_design_system__WEBPACK_IMPORTED_MODULE_6__.Box, {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "start",
        gap: 16,
        height: "auto",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_6__.Typography, {
          variants: "heading2",
          children: "\uCC38\uACE0\uC601\uC0C1"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_6__.Box, {
          display: "flex",
          justifyContent: "center",
          width: "100%",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("iframe", {
            width: 550,
            height: 400,
            allowFullScreen: true,
            src: data.videoUrl
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StretchingDetailPcView);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.styled.div.withConfig({
  displayName: "stretchingDetailPcView__ContentWrapper",
  componentId: "sc-14ixpi4-0"
})(["max-width:768px;display:flex;flex-direction:column;gap:48px;padding:72px 32px 32px 32px;height:100%;width:100%;position:relative;"]);
const SocialBoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.styled.div.withConfig({
  displayName: "stretchingDetailPcView__SocialBoxWrapper",
  componentId: "sc-14ixpi4-1"
})(["position:fixed;right:calc((100% - 768px - 120px) / 2);top:360px;z-index:300;display:flex;flex-direction:column;gap:32px;"]);
const PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.styled.div.withConfig({
  displayName: "stretchingDetailPcView__PageWrapper",
  componentId: "sc-14ixpi4-2"
})(["width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;overflow-x:scroll;padding-bottom:64px;"]);
const IconBox = styled_components__WEBPACK_IMPORTED_MODULE_0__.styled.div.withConfig({
  displayName: "stretchingDetailPcView__IconBox",
  componentId: "sc-14ixpi4-3"
})(["background-color:", ";width:50px;height:50px;border-radius:25px;display:flex;flex-direction:row;align-items:center;justify-content:center;box-shadow:4px 4px 4px rgba(0,0,0,0.1);:hover{cursor:pointer;}"], _constants_style__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .O.f000);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5071:
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
/* harmony import */ var private_next_pages_stretchings_detail_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7283);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_stretchings_detail_index_tsx__WEBPACK_IMPORTED_MODULE_5__]);
([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_stretchings_detail_index_tsx__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_stretchings_detail_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_stretchings_detail_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_stretchings_detail_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_stretchings_detail_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_stretchings_detail_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_stretchings_detail_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_stretchings_detail_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_stretchings_detail_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_stretchings_detail_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_stretchings_detail_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_stretchings_detail_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/stretchings/detail",
        pathname: "/stretchings/detail",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3__["default"]
    },
    userland: private_next_pages_stretchings_detail_index_tsx__WEBPACK_IMPORTED_MODULE_5__
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

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [37,746,975,937], () => (__webpack_exec__(5071)));
module.exports = __webpack_exports__;

})();