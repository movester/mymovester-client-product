"use strict";
exports.id = 937;
exports.ids = [937];
exports.modules = {

/***/ 2691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);



const Modal = props => {
  const {
    children,
    modalOutsideClick,
    modalRef
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Wrapper, {
    ref: modalRef,
    onClick: e => modalOutsideClick(e),
    children: children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Modal__Wrapper",
  componentId: "sc-64nbua-0"
})(["position:fixed;width:100vw;height:100vh;top:0;left:0;background-color:transparent;z-index:800;"]);

/***/ }),

/***/ 4937:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ MemorizedNavigator)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9026);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_utils_useIsMobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8995);
/* harmony import */ var movester_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2531);
/* harmony import */ var movester_design_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(movester_design_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2691);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _recoil_user_atom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6613);
/* harmony import */ var _hooks_utils_manage_token__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6975);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _hooks_api_useUserInfoInquiry__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8293);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_utils_manage_token__WEBPACK_IMPORTED_MODULE_9__, _hooks_api_useUserInfoInquiry__WEBPACK_IMPORTED_MODULE_11__]);
([_hooks_utils_manage_token__WEBPACK_IMPORTED_MODULE_9__, _hooks_api_useUserInfoInquiry__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable @next/next/no-img-element */

















const Navigator = props => {
  const {
    isLoggined
  } = props;
  const [userProfileState, setUserProfileState] = (0,recoil__WEBPACK_IMPORTED_MODULE_7__.useRecoilState)(_recoil_user_atom__WEBPACK_IMPORTED_MODULE_8__/* .userProfile */ .D);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const ismobile = (0,_hooks_utils_useIsMobile__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
  const {
    0: isModalOpened,
    1: setIsModalOpened
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  const {
    0: USERID,
    1: setUSERID
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
  const {
    0: accessToken,
    1: setAccessToken
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
  const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);

  const modalOutSideClick = e => {
    if (modalRef.current === e.target) {
      setIsModalOpened(false);
    }
  };

  const handleKakaoLogout = () => {
    (0,_hooks_utils_manage_token__WEBPACK_IMPORTED_MODULE_9__/* .removeToken */ .gy)();
    router.replace("/stretchings");
  };

  const {
    data
  } = (0,_hooks_api_useUserInfoInquiry__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)({
    token: accessToken
  });
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    if (isLoggined && !userProfileState) {
      const accessToken = (0,_hooks_utils_manage_token__WEBPACK_IMPORTED_MODULE_9__/* .getAccessToken */ .hP)();
      setAccessToken(accessToken);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [isLoggined, userProfileState]);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    setUserProfileState(data);
  }, [data, setUserProfileState]);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    if (isLoggined && userProfileState) {
      setUSERID(userProfileState.id);
    }
  }, [isLoggined, userProfileState]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [isModalOpened && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Modal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      modalRef: modalRef,
      modalOutsideClick: modalOutSideClick,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(MyPageModal, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_4__.Box, {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: 8,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_4__.Typography, {
            variants: "body2",
            children: userProfileState?.nickName + "님"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(MyPageModalListItem, {
          onClick: () => router.push(`/users/${USERID}`),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_4__.Typography, {
            variants: "body2",
            children: "\uB9C8\uC774\uD398\uC774\uC9C0"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(MyPageModalListItem, {
          onClick: handleKakaoLogout,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_4__.Typography, {
            variants: "body2",
            children: "\uB85C\uADF8\uC544\uC6C3"
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(Wrapper, {
      ismobile: ismobile,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_4__.Box, {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        onClick: () => router.push("/stretchings"),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("img", {
          src: ismobile ? "/favicon.ico" : "/logo.png",
          width: ismobile ? 16 : 120,
          height: ismobile ? 16 : 32,
          alt: ""
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(AccountWrapper, {
        children: isLoggined ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(ProfileWrapper, {
            ismobile: ismobile,
            onClick: () => setIsModalOpened(prev => !prev),
            children: userProfileState?.profileUrl ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("img", {
              width: "100%",
              height: "100%",
              src: userProfileState.profileUrl,
              alt: ""
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__.FaUser, {
              color: "white"
            })
          })
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_4__.Box, {
          onClick: () => router.push("/login"),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(movester_design_system__WEBPACK_IMPORTED_MODULE_4__.Typography, {
            variants: "body2",
            children: "\uB85C\uADF8\uC778 | \uD68C\uC6D0\uAC00\uC785"
          })
        })
      })]
    })]
  });
};

const MemorizedNavigator = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().memo(Navigator);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.styled.div.withConfig({
  displayName: "Navigator__Wrapper",
  componentId: "sc-1owchbj-0"
})(["background-color:", ";height:auto;padding:", ";width:100%;height:", ";position:sticky;top:0;box-shadow:4px 4px 8px rgba(0,0,0,0.1);z-index:300;display:flex;justify-content:space-between;align-items:center;:hover{cursor:pointer;}"], _constants_style__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .O.f000, props => props.ismobile ? "8px 16px" : "16px", props => props.ismobile ? "50px" : "70px");
const AccountWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.styled.div.withConfig({
  displayName: "Navigator__AccountWrapper",
  componentId: "sc-1owchbj-1"
})([""]);
const MyPageModal = styled_components__WEBPACK_IMPORTED_MODULE_0__.styled.div.withConfig({
  displayName: "Navigator__MyPageModal",
  componentId: "sc-1owchbj-2"
})(["position:absolute;right:32px;top:60px;background-color:", ";border:1px solid ", ";box-shadow:4px 4px 4px rgba(0,0,0,0.1);border-radius:8px;width:180px;height:auto;display:flex;flex-direction:column;padding:8px;gap:4px;"], _constants_style__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .O.f000, _constants_style__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .O.g200);
const MyPageModalListItem = styled_components__WEBPACK_IMPORTED_MODULE_0__.styled.button.withConfig({
  displayName: "Navigator__MyPageModalListItem",
  componentId: "sc-1owchbj-3"
})(["display:flex;flex-direction:row;justify-content:start;align-items:center;padding:8px;border-radius:4px;outline:none;border:0;background-color:transparent;&:hover{background-color:rgba(0,0,0,0.1);cursor:pointer;}"]);
const ProfileWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.styled.div.withConfig({
  displayName: "Navigator__ProfileWrapper",
  componentId: "sc-1owchbj-4"
})(["width:", ";height:", ";border-radius:50%;overflow:hidden;display:flex;justify-content:center;align-items:center;background-color:", ";"], props => props.ismobile ? "30px" : "40px", props => props.ismobile ? "30px" : "40px", _constants_style__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .O.g200);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ colors)
/* harmony export */ });
const colors = {
  r000: " #f64f59",
  softPrimaryColor: "#6D66AA",
  vividPrimaryColor: "#2A1598",
  f300: "#f7f7f7",
  f200: "#f2f2f2",
  f100: "#fafafa",
  f000: "#ffffff",
  g300: "#888383",
  g200: "#e5e5e5",
  g100: "#615B5B",
  g000: "#C4C4C4"
};

/***/ }),

/***/ 8293:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useUserInfoInquiry = props => {
  const {
    token
  } = props;
  const res = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)({
    queryFn: () => fetch("/api/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      console.log("call!");
      return res.json();
    }).catch(error => error),
    queryKey: ["user", "info", token],
    onError: error => {
      console.log(error);
    },
    enabled: Boolean(token),
    refetchOnWindowFocus: false
  });
  return res;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUserInfoInquiry);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_1__);



const useIsMobile = () => {
  const {
    0: isMobile,
    1: setIsMobile
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const mobile = (0,react_responsive__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)({
    query: "(max-width: 768px)"
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsMobile(Boolean(mobile));
  }, [mobile]);
  return isMobile;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIsMobile);

/***/ }),

/***/ 6613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ userProfile)
/* harmony export */ });
/* unused harmony export LogginedAtom */
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const userProfile = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: "userProfile",
  default: null
});
const LogginedAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: "logginedCheckAtom",
  default: false
});

/***/ })

};
;