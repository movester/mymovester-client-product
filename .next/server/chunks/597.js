exports.id = 597;
exports.ids = [597];
exports.modules = {

/***/ 1597:
/***/ ((module, exports, __webpack_require__) => {

"use client";
"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
0 && (0);

function _export(target, all) {
  for (var name in all) Object.defineProperty(target, name, {
    enumerable: true,
    get: all[name]
  });
}

_export(exports, {
  defaultHead: function () {
    return defaultHead;
  },
  default: function () {
    return _default;
  }
});

const _interop_require_default = __webpack_require__(167);

const _interop_require_wildcard = __webpack_require__(8760);

const _react = /*#__PURE__*/_interop_require_wildcard._(__webpack_require__(6689));

const _sideeffect = /*#__PURE__*/_interop_require_default._(__webpack_require__(2470));

const _ampcontext = __webpack_require__(3918);

const _headmanagercontext = __webpack_require__(2796);

const _ampmode = __webpack_require__(5732);

const _warnonce = __webpack_require__(618);

function defaultHead(inAmpMode) {
  if (inAmpMode === void 0) inAmpMode = false;
  const head = [/*#__PURE__*/_react.default.createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === "string" || typeof child === "number") {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react.default.Fragment) {
    return list.concat( // @ts-expect-error @types/react does not remove fragments but this could also return ReactPortal[]
    _react.default.Children.toArray(child.props.children).reduce( // @ts-expect-error @types/react does not remove fragments but this could also return ReactPortal[]
    (fragmentList, fragmentChild) => {
      if (typeof fragmentChild === "string" || typeof fragmentChild === "number") {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

const METATYPES = ["name", "httpEquiv", "charSet", "itemProp"];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  const keys = new Set();
  const tags = new Set();
  const metaTypes = new Set();
  const metaCategories = {};
  return h => {
    let isUnique = true;
    let hasKey = false;

    if (h.key && typeof h.key !== "number" && h.key.indexOf("$") > 0) {
      hasKey = true;
      const key = h.key.slice(h.key.indexOf("$") + 1);

      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case "title":
      case "base":
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case "meta":
        for (let i = 0, len = METATYPES.length; i < len; i++) {
          const metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === "charSet") {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            const category = h.props[metatype];
            const categories = metaCategories[metatype] || new Set();

            if ((metatype !== "name" || !hasKey) && categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return isUnique;
  };
}
/**
 *
 * @param headChildrenElements List of children of <Head>
 */


function reduceComponents(headChildrenElements, props) {
  const {
    inAmpMode
  } = props;
  return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead(inAmpMode).reverse()).filter(unique()).reverse().map((c, i) => {
    const key = c.key || i;

    if ( true && !inAmpMode) {
      if (c.type === "link" && c.props["href"] && // TODO(prateekbh@): Replace this with const from `constants` when the tree shaking works.
      ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(url => c.props["href"].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps["data-href"] = newProps["href"];
        newProps["href"] = undefined; // Add this attribute to make it easy to identify optimized tags

        newProps["data-optimized-fonts"] = true;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      }
    }

    if (false) {}

    return /*#__PURE__*/_react.default.cloneElement(c, {
      key
    });
  });
}
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */


function Head(param) {
  let {
    children
  } = param;
  const ampState = (0, _react.useContext)(_ampcontext.AmpStateContext);
  const headManager = (0, _react.useContext)(_headmanagercontext.HeadManagerContext);
  return /*#__PURE__*/_react.default.createElement(_sideeffect.default, {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _ampmode.isInAmpMode)(ampState)
  }, children);
}

const _default = Head;

if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

/***/ })

};
;