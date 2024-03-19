"use strict";
(() => {
var exports = {};
exports.id = 754;
exports.ids = [754];
exports.modules = {

/***/ 3577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9026);
/* harmony import */ var _hooks_utils_useIsMobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8995);
/* harmony import */ var movester_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2531);
/* harmony import */ var movester_design_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(movester_design_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5893);





const CategoryButton = props => {
  const {
    labelItems,
    selectedItem,
    setSelectedItem
  } = props;
  const ismobile = (0,_hooks_utils_useIsMobile__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_2__.Box, {
    display: "flex",
    flexDirection: "row",
    gap: 1,
    backgroundColor: _constants_style__WEBPACK_IMPORTED_MODULE_0__/* .colors */ .O.g000,
    border: `1px solid ${_constants_style__WEBPACK_IMPORTED_MODULE_0__/* .colors */ .O.g000}`,
    borderRadius: 8,
    overflow: "hidden",
    width: "fit-content",
    children: labelItems.length > 0 && labelItems.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_2__.Box, {
      width: !ismobile ? 200 : 120,
      height: !ismobile ? 40 : 30,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      boxSahdow: "4px 4px 8px rgba(0, 0, 0, 0.1)",
      backgroundColor: selectedItem.labelId === item.labelId ? _constants_style__WEBPACK_IMPORTED_MODULE_0__/* .colors */ .O.softPrimaryColor : _constants_style__WEBPACK_IMPORTED_MODULE_0__/* .colors */ .O.f000,
      onClick: () => setSelectedItem(item),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_2__.Typography, {
        variants: !ismobile ? "body1" : "body2",
        color: selectedItem.labelId === item.labelId ? _constants_style__WEBPACK_IMPORTED_MODULE_0__/* .colors */ .O.f000 : _constants_style__WEBPACK_IMPORTED_MODULE_0__/* .colors */ .O.vividPrimaryColor,
        children: item.label
      })
    }, `category-box-${item.label}-${item.labelId}`))
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryButton);

/***/ }),

/***/ 2080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9026);
/* harmony import */ var _constants_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6598);
/* harmony import */ var movester_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2531);
/* harmony import */ var movester_design_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(movester_design_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5893);
/* eslint-disable jsx-a11y/alt-text */

/* eslint-disable @next/next/no-img-element */







const DetailThumnailItem = props => {
  const {
    stretchingItem,
    onClick
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Wrapper, {
    onClick: () => onClick(stretchingItem.id),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Box, {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      justifyContent: "start",
      width: "100%",
      gap: 8,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Box, {
        width: "100%",
        backgroundColor: _constants_style__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .O.f300,
        borderRadius: 8,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
          src: stretchingItem.imageUrl
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Box, {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "start",
        gap: 4,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Typography, {
          variants: "heading2",
          children: stretchingItem.title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Box, {
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "start",
          gap: 0,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Box, {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            height: "fit-content",
            gap: 4,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Typography, {
              variants: "heading3",
              color: _constants_style__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .O.g100,
              children: _constants_text__WEBPACK_IMPORTED_MODULE_2__/* .STRETCHING_MAIN_CATEGORY_TEXT */ .fC[stretchingItem.mainCategory]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Typography, {
              variants: "heading3",
              color: _constants_style__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .O.g100,
              children: "|"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Typography, {
              variants: "body2",
              color: _constants_style__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .O.g100,
              children: _constants_text__WEBPACK_IMPORTED_MODULE_2__/* .STRETCHING_SUB_CATEGORY_TEXT */ .D_[stretchingItem.subCategory]
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_3__.Typography, {
            variants: "body2",
            color: _constants_style__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .O.g100,
            children: _constants_text__WEBPACK_IMPORTED_MODULE_2__/* .STRETCHING_EFFECT_TEXT */ .iW[stretchingItem.effect]
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailThumnailItem);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.styled.div.withConfig({
  displayName: "DetailThumnailItem__Wrapper",
  componentId: "sc-h81sbx-0"
})(["width:100%;:hover{cursor:pointer;}"]);

/***/ }),

/***/ 7940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9026);
/* harmony import */ var _hooks_utils_useIsMobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8995);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var movester_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2531);
/* harmony import */ var movester_design_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(movester_design_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5893);
/* eslint-disable jsx-a11y/alt-text */

/* eslint-disable @next/next/no-img-element */








const StretchingCategoryMenu = props => {
  const {
    menuItem,
    isSelected,
    setSelectedItem
  } = props;
  const isMobile = (0,_hooks_utils_useIsMobile__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(Wrapper, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(movester_design_system__WEBPACK_IMPORTED_MODULE_4__.Box, {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: !isMobile ? 80 : 70,
      gap: 4,
      onClick: () => setSelectedItem(menuItem),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_4__.Box, {
        backgroundColor: isSelected ? "#A6A0D2" : _constants_style__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .O.f300,
        borderRadius: 30,
        width: !isMobile ? 60 : 50,
        height: !isMobile ? 60 : 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSahdow: "4px 4px 8px rgba(0, 0, 0, 0.1)",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
          src: menuItem.img,
          width: !isMobile ? 50 : 40,
          height: !isMobile ? 50 : 40,
          alt: ""
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_4__.Typography, {
        variants: isSelected ? "heading3" : "body2",
        children: menuItem.name
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StretchingCategoryMenu);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.styled.div.withConfig({
  displayName: "StretchingCategoryMenu__Wrapper",
  componentId: "sc-t79vnp-0"
})([":hover{cursor:pointer;}"]);

/***/ }),

/***/ 6036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a9: () => (/* binding */ LIST_ORDER_CATEGORY),
/* harmony export */   h7: () => (/* binding */ STRETCHING_TOTAL_CATEGORY),
/* harmony export */   sA: () => (/* binding */ EFFECT_CATEGORY)
/* harmony export */ });
/* unused harmony exports STRETCHING_MAIN_CATEGORY, UPPER_BODY_CATEGORY, LOWER_BODY_CATEGORY, STRETCHING_MAIN_SEARCH_CATEGORY, UPPER_BODY_SEARCH_CATEGORY, LOWER_BODY_SEARCH_CATEGORY */
const STRETCHING_TOTAL_CATEGORY = [{
  name: "상체 전체",
  id: "UPPER_BODY",
  img: "https://mymovester-product.s3.ap-northeast-2.amazonaws.com/icons/category_upperBody.PNG"
}, {
  name: "목/가슴/어께",
  id: "NECK",
  img: "https://mymovester-product.s3.ap-northeast-2.amazonaws.com/icons/category_neck.png"
}, {
  name: "팔/손/손목",
  id: "ARM",
  img: "https://mymovester-product.s3.ap-northeast-2.amazonaws.com/icons/category_arm.PNG"
}, {
  name: "등/몸통",
  id: "BACK",
  img: "https://mymovester-product.s3.ap-northeast-2.amazonaws.com/icons/category_back.PNG"
}, {
  name: "하체 전체",
  id: "LOWER_BODY",
  img: "https://mymovester-product.s3.ap-northeast-2.amazonaws.com/icons/category_lowerBody.PNG"
}, {
  name: "고관절/둔근",
  id: "HIP_JOINT",
  img: "https://mymovester-product.s3.ap-northeast-2.amazonaws.com/icons/category_hipJoint.PNG"
}, {
  name: "종아리/발목/발",
  id: "CALF",
  img: "https://mymovester-product.s3.ap-northeast-2.amazonaws.com/icons/category_calf.PNG"
}, {
  name: "무릎/허벅지",
  id: "KNEE",
  img: "https://mymovester-product.s3.ap-northeast-2.amazonaws.com/icons/category_knee.PNG"
}];
const STRETCHING_MAIN_CATEGORY = [{
  name: "상체",
  id: "UPPER_BODY"
}, {
  name: "하체",
  id: "LOWER_BODY"
}];
const UPPER_BODY_CATEGORY = [{
  name: "목/가슴/어께",
  id: "NECK"
}, {
  name: "팔/손/손목",
  id: "ARM"
}, {
  name: "등/몸통",
  id: "BACK"
}];
const LOWER_BODY_CATEGORY = [{
  name: "고관절/둔근",
  id: "HIP_JOINT"
}, {
  name: "종아리/발목/발",
  id: "CALF"
}, {
  name: "무릎/허벅지",
  id: "KNEE"
}];
const EFFECT_CATEGORY = [{
  name: "통증완화",
  id: "RELIEF_PAIN",
  img: "https://mymovester-product.s3.ap-northeast-2.amazonaws.com/icons/effect_reliefPain.PNG"
}, {
  name: "자세개선",
  id: "IMPROVE_POSTURE",
  img: "https://mymovester-product.s3.ap-northeast-2.amazonaws.com/icons/effect_improvePosture.PNG"
}, {
  name: "근육이완",
  id: "RELAX_MUSCLE",
  img: "https://mymovester-product.s3.ap-northeast-2.amazonaws.com/icons/effect_relaxMuscle.PNG"
}, {
  name: "혈액순환",
  id: "BLOOD_CIRCULATION",
  img: "https://mymovester-product.s3.ap-northeast-2.amazonaws.com/icons/effect_bloodCirculation.PNG"
}, {
  name: "거북목 완화",
  id: "RELIEF_TURTLE_NECK",
  img: "https://mymovester-product.s3.ap-northeast-2.amazonaws.com/icons/effect_turtleNeck.PNG"
}, {
  name: "라운드숄더 완화",
  id: "RELIEF_ROUND_SHOULDER",
  img: "https://mymovester-product.s3.ap-northeast-2.amazonaws.com/icons/effect_roundShoulder.PNG"
}];
const LIST_ORDER_CATEGORY = [{
  name: "최신순",
  id: "RECENT"
}, {
  name: "조회순",
  id: "VIEW"
}];
const STRETCHING_MAIN_SEARCH_CATEGORY = [{
  name: "전체",
  id: "total"
}, ...STRETCHING_MAIN_CATEGORY];
const UPPER_BODY_SEARCH_CATEGORY = [{
  name: "전체",
  id: "total"
}, ...UPPER_BODY_CATEGORY];
const LOWER_BODY_SEARCH_CATEGORY = [{
  name: "전체",
  id: "total"
}, ...LOWER_BODY_CATEGORY];

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

/***/ 2803:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const getFetchItems = async (pageParam, size, mainCategory, subCategory, effect, orderFilter) => {
  const formatSearchQuery = (catergory, keyword) => {
    if (keyword) {
      return `${catergory}=${keyword}`;
    }

    return `${catergory}`;
  };

  const mainCategorySearchQuery = formatSearchQuery("mainCategory", mainCategory);
  const subCategorySearchQuery = formatSearchQuery("subCategory", subCategory);
  const effectSearchQuery = formatSearchQuery("effect", effect);
  const res = await fetch(`/api/stretchings?page=${pageParam}&size=${size}&${mainCategorySearchQuery}&${subCategorySearchQuery}&${effectSearchQuery}&orderFilter=${orderFilter}`).then(res => res.json()).catch(error => error);
  return {
    data: [...res.stretchingList],
    total: res.total,
    pagePrams: pageParam
  };
};

const useStretchingInquiry = props => {
  const {
    size,
    mainCategory,
    subCategory,
    orderFilter,
    effect
  } = props;
  const res = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useInfiniteQuery)({
    queryKey: ["stretching", "list", size, mainCategory, subCategory, effect, orderFilter],
    queryFn: ({
      pageParam = 1
    }) => getFetchItems(pageParam, size, mainCategory, subCategory, effect, orderFilter),
    getNextPageParam: lastPage => {
      if (lastPage === undefined) return false;

      if (lastPage.pagePrams + 1 <= Math.ceil(lastPage.total / 10)) {
        return lastPage.pagePrams + 1;
      }

      return false;
    },
    onError: error => {
      console.log(error);
    },
    refetchOnWindowFocus: false
  });
  return res;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStretchingInquiry);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5403:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_utils_Navigator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4937);
/* harmony import */ var _constants_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9026);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6036);
/* harmony import */ var _components_utils_CategoryButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3577);
/* harmony import */ var _hooks_utils_useIsMobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8995);
/* harmony import */ var _components_utils_StretchingCategoryMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7940);
/* harmony import */ var _hooks_api_useStretchingInquiry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2803);
/* harmony import */ var _components_utils_DetailThumnailItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2080);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4336);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var movester_design_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2531);
/* harmony import */ var movester_design_system__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(movester_design_system__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_utils_Navigator__WEBPACK_IMPORTED_MODULE_1__, _hooks_api_useStretchingInquiry__WEBPACK_IMPORTED_MODULE_8__]);
([_components_utils_Navigator__WEBPACK_IMPORTED_MODULE_1__, _hooks_api_useStretchingInquiry__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const PAGE_SIZE = 10;

const StrechingPage = ({
  isLoggined
}) => {
  const labelItems = [{
    label: "타겟 부위",
    labelId: "sections"
  }, {
    label: "효과",
    labelId: "effects"
  }];
  const ismobile = (0,_hooks_utils_useIsMobile__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
  const {
    0: selectedCategoryButtonItem,
    1: setSelectedCategoryButtonItem
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(labelItems[0]);
  const {
    0: listOrder,
    1: setListOreder
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_constants__WEBPACK_IMPORTED_MODULE_4__/* .LIST_ORDER_CATEGORY */ .a9[0]);
  const {
    0: selectedCategoryItem,
    1: setSelectedCategoryItem
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const {
    0: seletedEffectItem,
    1: setSeletedEffectItem
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const {
    data,
    fetchNextPage,
    hasNextPage
  } = (0,_hooks_api_useStretchingInquiry__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({
    size: PAGE_SIZE,
    orderFilter: listOrder.id,
    effect: seletedEffectItem?.id,
    mainCategory: selectedCategoryItem?.id === "UPPER_BODY" || selectedCategoryItem?.id === "LOWER_BODY" ? selectedCategoryItem?.id : null,
    subCategory: selectedCategoryItem?.id !== "UPPER_BODY" && selectedCategoryItem?.id !== "LOWER_BODY" ? selectedCategoryItem?.id : null
  });

  const handleOnClickStretchingItem = stretchingId => {
    router.push({
      pathname: "stretchings/detail",
      query: {
        id: stretchingId
      }
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    setSelectedCategoryItem(null);
    setSeletedEffectItem(null);
  }, [selectedCategoryButtonItem]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(PageWrapper, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_components_utils_Navigator__WEBPACK_IMPORTED_MODULE_1__/* .MemorizedNavigator */ .y, {
      isLoggined: isLoggined === "true" ? true : false
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(ContentWrapper, {
      $ismobile: ismobile,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(movester_design_system__WEBPACK_IMPORTED_MODULE_12__.Box, {
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        gap: 32,
        width: "100%",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_components_utils_CategoryButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          labelItems: labelItems,
          selectedItem: selectedCategoryButtonItem,
          setSelectedItem: setSelectedCategoryButtonItem
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_12__.Box, {
          display: "flex",
          flexDirection: "row",
          justifyContent: !ismobile ? "center" : "start",
          alignItems: "start",
          width: "100vw",
          overflow: "scroll",
          children: selectedCategoryButtonItem.labelId === "sections" ? _constants__WEBPACK_IMPORTED_MODULE_4__/* .STRETCHING_TOTAL_CATEGORY */ .h7.map(categoryItem => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_components_utils_StretchingCategoryMenu__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            menuItem: categoryItem,
            isSelected: categoryItem.id === selectedCategoryItem?.id,
            setSelectedItem: setSelectedCategoryItem
          }, `category-item-id-${categoryItem.id}`)) : _constants__WEBPACK_IMPORTED_MODULE_4__/* .EFFECT_CATEGORY */ .sA.map(categoryItem => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_components_utils_StretchingCategoryMenu__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            menuItem: categoryItem,
            isSelected: categoryItem.id === seletedEffectItem?.id,
            setSelectedItem: setSeletedEffectItem
          }, `category-item-id-${categoryItem.id}`))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(movester_design_system__WEBPACK_IMPORTED_MODULE_12__.Box, {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_12__.Box, {
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
          width: "100%",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_12__.ComboBox, {
            size: "xs",
            list: _constants__WEBPACK_IMPORTED_MODULE_4__/* .LIST_ORDER_CATEGORY */ .a9,
            value: listOrder,
            setValue: setListOreder
          })
        }), data && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10___default()), {
          dataLength: data.pages[0].data.length,
          next: () => fetchNextPage(),
          hasMore: hasNextPage,
          loader: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
            children: "\uB85C\uB529\uC911"
          }),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(ItemGrid, {
            children: data.pages.map(queryItem => queryItem?.data.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_components_utils_DetailThumnailItem__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
              stretchingItem: item,
              onClick: handleOnClickStretchingItem
            }, `${item.id}-thumnail-list`)))
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StrechingPage);
const PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.styled.div.withConfig({
  displayName: "stretchings__PageWrapper",
  componentId: "sc-1c9h49u-0"
})(["display:flex;background-color:", ";flex-direction:column;justify-content:center;align-items:center;"], _constants_style__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .O.f000);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.styled.div.withConfig({
  displayName: "stretchings__ContentWrapper",
  componentId: "sc-1c9h49u-1"
})(["padding-top:", ";width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:72px;height:100%;overflow-x:scroll;max-width:2560px;padding-left:", ";padding-right:", ";padding-bottom:64px;"], props => props.$ismobile ? "40px" : "80px", props => props.$ismobile ? "16px" : "64px", props => props.$ismobile ? "16px" : "64px");
const ItemGrid = styled_components__WEBPACK_IMPORTED_MODULE_0__.styled.div.withConfig({
  displayName: "stretchings__ItemGrid",
  componentId: "sc-1c9h49u-2"
})(["display:grid;grid-template-columns:repeat(5,1fr);gap:16px;@media screen and (max-width:900px){grid-template-columns:repeat(3,1fr);}@media screen and (max-width:768px){grid-template-columns:repeat(1,1fr);}"]);
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

/***/ 9538:
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
/* harmony import */ var private_next_pages_stretchings_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5403);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_stretchings_index_tsx__WEBPACK_IMPORTED_MODULE_5__]);
([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_stretchings_index_tsx__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_stretchings_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_stretchings_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_stretchings_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_stretchings_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_stretchings_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_stretchings_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_stretchings_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_stretchings_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_stretchings_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_stretchings_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_stretchings_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/stretchings",
        pathname: "/stretchings",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3__["default"]
    },
    userland: private_next_pages_stretchings_index_tsx__WEBPACK_IMPORTED_MODULE_5__
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

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 5132:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/get-img-props.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

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

/***/ 4336:
/***/ ((module) => {

module.exports = require("react-infinite-scroll-component");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [37,597,675,746,975,937], () => (__webpack_exec__(9538)));
module.exports = __webpack_exports__;

})();