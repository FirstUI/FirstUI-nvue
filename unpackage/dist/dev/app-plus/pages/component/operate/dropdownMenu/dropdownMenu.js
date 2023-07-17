"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/uni-app.es.js
  var import_vue = __toESM(require_vue());
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  var isString = (val) => typeof val === "string";
  function requireNativePlugin(name) {
    return weex.requireModule(name);
  }
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return isString(component) ? easycom : component;
  }

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/fui-icon.js
  var import_vue2 = __toESM(require_vue());
  var icons = {
    "addressbook": "\uE80C",
    "addfriends-fill": "\uE80A",
    "addfriends": "\uE80B",
    "backspace-fill": "\uE808",
    "backspace": "\uE809",
    "bankcard-fill": "\uE806",
    "bankcard": "\uE807",
    "camera-fill": "\uE804",
    "camera": "\uE805",
    "captcha-fill": "\uE802",
    "captcha": "\uE803",
    "cart-fill": "\uE800",
    "cart": "\uE801",
    "classify": "\uE7FE",
    "classify-fill": "\uE7FF",
    "comment-fill": "\uE7FC",
    "comment": "\uE7FD",
    "community-fill": "\uE7FA",
    "community": "\uE7FB",
    "coupon-fill": "\uE7F8",
    "coupon": "\uE7F9",
    "delete": "\uE7F6",
    "delete-fill": "\uE7F7",
    "edit": "\uE7F4",
    "edit-fill": "\uE7F5",
    "fabulous-fill": "\uE7F2",
    "fabulous": "\uE7F3",
    "find": "\uE7F0",
    "find-fill": "\uE7F1",
    "help-fill": "\uE7EE",
    "help": "\uE7EF",
    "home-fill": "\uE7EC",
    "home": "\uE7ED",
    "idcard-fill": "\uE7EA",
    "idcard": "\uE7EB",
    "info": "\uE7E8",
    "info-fill": "\uE7E9",
    "invite-fill": "\uE7E6",
    "invite": "\uE7E7",
    "kefu-fill": "\uE7E4",
    "kefu": "\uE7E5",
    "like-fill": "\uE7E2",
    "like": "\uE7E3",
    "location": "\uE7E0",
    "location-fill": "\uE7E1",
    "lock": "\uE7DE",
    "lock-fill": "\uE7DF",
    "mail-fill": "\uE7DC",
    "mail": "\uE7DD",
    "message": "\uE7DA",
    "message-fill": "\uE7DB",
    "mobile-fill": "\uE7D8",
    "mobile": "\uE7D9",
    "more": "\uE7D6",
    "more-fill": "\uE7D7",
    "my-fill": "\uE7D4",
    "my": "\uE7D5",
    "principal": "\uE80D",
    "notice-fill": "\uE7D2",
    "notice": "\uE7D3",
    "order": "\uE7D0",
    "order-fill": "\uE7D1",
    "picture": "\uE7CE",
    "picture-fill": "\uE7CF",
    "setup-fill": "\uE7CC",
    "setup": "\uE7CD",
    "share": "\uE7CA",
    "share-fill": "\uE7CB",
    "shop": "\uE7C8",
    "shop-fill": "\uE7C9",
    "star-fill": "\uE7C5",
    "star": "\uE7C6",
    "starhalf": "\uE7C7",
    "stepon-fill": "\uE7C3",
    "stepon": "\uE7C4",
    "wait-fill": "\uE7C1",
    "wait": "\uE7C2",
    "warning": "\uE7BF",
    "warning-fill": "\uE7C0",
    "plus": "\uE7BC",
    "plussign-fill": "\uE7BD",
    "plussign": "\uE7BE",
    "minus": "\uE7B9",
    "minussign": "\uE7BA",
    "minussign-fill": "\uE7BB",
    "close": "\uE7B8",
    "clear": "\uE7B6",
    "clear-fill": "\uE7B7",
    "checkbox-fill": "\uE7B5",
    "checkround": "\uE7B4",
    "checkbox": "\uE7B3",
    "check": "\uE7B2",
    "pulldown-fill": "\uE7AE",
    "pullup": "\uE7AF",
    "pullup-fill": "\uE7B0",
    "pulldown": "\uE7B1",
    "roundright-fill": "\uE7AC",
    "roundright": "\uE7AD",
    "arrowright": "\uE7A9",
    "arrowleft": "\uE7AA",
    "arrowdown": "\uE7AB",
    "left": "\uE7A6",
    "up": "\uE7A7",
    "right": "\uE7A8",
    "back": "\uE7A3",
    "top": "\uE7A4",
    "dropdown": "\uE7A5",
    "turningleft": "\uE79F",
    "turningup": "\uE7A0",
    "turningright": "\uE7A1",
    "turningdown": "\uE7A2",
    "refresh": "\uE79C",
    "loading": "\uE79D",
    "search": "\uE79E",
    "rotate": "\uE79B",
    "screen": "\uE79A",
    "signin": "\uE799",
    "calendar": "\uE798",
    "scan": "\uE797",
    "qrcode": "\uE796",
    "wallet": "\uE795",
    "telephone": "\uE794",
    "visible": "\uE793",
    "invisible": "\uE792",
    "menu": "\uE78E",
    "operate": "\uE78F",
    "slide": "\uE790",
    "list": "\uE791",
    "nonetwork": "\uE78D",
    "partake": "\uE78C",
    "qa": "\uE78B",
    "barchart": "\uE788",
    "piechart": "\uE789",
    "linechart": "\uE78A",
    "at": "\uE787",
    "face": "\uE77F",
    "redpacket": "\uE780",
    "suspend": "\uE781",
    "link": "\uE782",
    "keyboard": "\uE783",
    "play": "\uE784",
    "video": "\uE785",
    "voice": "\uE786",
    "sina": "\uE77A",
    "browser": "\uE77B",
    "moments": "\uE77C",
    "qq": "\uE77D",
    "wechat": "\uE77E",
    "balance": "\uE779",
    "bankcardpay": "\uE778",
    "wxpay": "\uE777",
    "alipay": "\uE776",
    "payment": "\uE818",
    "receive": "\uE817",
    "sendout": "\uE816",
    "evaluate": "\uE815",
    "aftersale": "\uE814",
    "warehouse": "\uE813",
    "transport": "\uE812",
    "delivery": "\uE811",
    "switch": "\uE810",
    "goods": "\uE80F",
    "goods-fill": "\uE80E"
  };
  var fuiicons = "/assets/fui-icon.2783439a.ttf";
  var _style_0 = { "fui-icon": { "": { "fontFamily": "fuiFont", "textDecoration": "none", "textAlign": "center" } } };
  var domModule = weex.requireModule("dom");
  domModule.addRule("fontFace", {
    "fontFamily": "fuiFont",
    "src": "url('" + fuiicons + "')"
  });
  var _sfc_main = {
    name: "fui-icon",
    emits: ["click"],
    props: {
      name: {
        type: String,
        default: ""
      },
      size: {
        type: [Number, String],
        default: 0
      },
      //rpx | px
      unit: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: ""
      },
      //字重
      fontWeight: {
        type: [Number, String],
        default: "normal"
      },
      //是否禁用点击
      disabled: {
        type: Boolean,
        default: false
      },
      params: {
        type: [Number, String],
        default: 0
      },
      customPrefix: {
        type: String,
        default: ""
      },
      //是否显示为主色调，color为空时有效。【内部使用】
      primary: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      getSize() {
        const size = uni.$fui && uni.$fui.fuiIcon && uni.$fui.fuiIcon.size || 64;
        const unit = uni.$fui && uni.$fui.fuiIcon && uni.$fui.fuiIcon.unit || "rpx";
        return (this.size || size) + (this.unit || unit);
      },
      primaryColor() {
        const app = uni && uni.$fui && uni.$fui.color;
        return app && app.primary || "#465CFF";
      },
      getColor() {
        const app = uni && uni.$fui && uni.$fui.fuiIcon;
        let color = this.color || app && app.color;
        if (!color || color === true) {
          color = "#333333";
        }
        return color;
      }
    },
    data() {
      return {
        icons
      };
    },
    methods: {
      handleClick() {
        if (this.disabled)
          return;
        this.$emit("click", {
          params: this.params
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "u-text",
      {
        style: (0, import_vue2.normalizeStyle)({ color: $props.primary && (!$props.color || $props.color === true) ? $options.primaryColor : $options.getColor, fontSize: $options.getSize, lineHeight: $options.getSize, fontWeight: $props.fontWeight }),
        class: (0, import_vue2.normalizeClass)(["fui-icon", [$props.customPrefix]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick && $options.handleClick(...args))
      },
      (0, import_vue2.toDisplayString)($props.customPrefix ? $props.name : $data.icons[$props.name]),
      7
      /* TEXT, CLASS, STYLE */
    );
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-icon/fui-icon.vue"]]);

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/operate/dropdownMenu/dropdownMenu.js
  var import_vue4 = __toESM(require_vue());

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/fui-list-cell.js
  var import_vue3 = __toESM(require_vue());
  var _style_02 = { "fui-list__cell": { "": { "position": "relative", "flex": 1, "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between" } }, "fui-list__item": { "": { "flex": 1 } }, "fui-cell__arrow": { "": { "height": "40rpx", "width": "40rpx", "borderTopWidth": 3, "borderRightWidth": 3, "borderBottomWidth": 0, "borderLeftWidth": 0, "borderStyle": "solid", "transform": "rotate(45deg) scale(0.5)", "borderTopRightRadius": "3rpx", "transformOrigin": "center center", "marginRight": "-5.8579rpx" } }, "fui-cell__border-top": { "": { "position": "absolute", "top": 0, "height": 0.5, "zIndex": -1 } }, "fui-cell__border-bottom": { "": { "position": "absolute", "bottom": 0, "height": 0.5, "zIndex": -1 } }, "fui-highlight": { "": { "!backgroundColor:active": "rgba(0,0,0,0.2)" } } };
  var _sfc_main2 = {
    name: "fui-list-cell",
    emits: ["click"],
    props: {
      //padding值，上、右、下、左,nvue下padding-right(右)无效
      padding: {
        type: Array,
        default() {
          return [];
        }
      },
      //margin-top 单位rpx
      marginTop: {
        type: [Number, String],
        default: 0
      },
      //margin-bottom 单位rpx
      marginBottom: {
        type: [Number, String],
        default: 0
      },
      //背景颜色
      background: {
        type: String,
        default: "#fff"
      },
      //是否有点击效果
      highlight: {
        type: Boolean,
        default: true
      },
      //是否需要右侧箭头
      arrow: {
        type: Boolean,
        default: false
      },
      arrowColor: {
        type: String,
        default: ""
      },
      //是否显示上边框
      topBorder: {
        type: Boolean,
        default: false
      },
      //是否显示下边框
      bottomBorder: {
        type: Boolean,
        default: true
      },
      //边框颜色，非nvue下传值则全局默认样式失效
      borderColor: {
        type: String,
        default: ""
      },
      //上边框left值，单位rpx
      topLeft: {
        type: [Number, String],
        default: 0
      },
      //上边框right值，单位rpx
      topRight: {
        type: [Number, String],
        default: 0
      },
      //下边框left值，单位rpx
      bottomLeft: {
        type: [Number, String],
        default: -1
      },
      //下边框right值，单位rpx
      bottomRight: {
        type: [Number, String],
        default: 0
      },
      //border-radius圆角值
      radius: {
        type: String,
        default: "0"
      },
      index: {
        type: Number,
        default: 0
      }
    },
    computed: {
      getPadding() {
        let padding = this.padding;
        if (Array.isArray(padding) && padding.length === 0) {
          const app = uni && uni.$fui && uni.$fui.fuiListCell;
          padding = app && app.padding;
          if (!padding || Array.isArray(padding) && padding.length === 0) {
            padding = ["32rpx", "32rpx"];
          }
        }
        return padding;
      },
      getArrowColor() {
        const app = uni && uni.$fui && uni.$fui.fuiListCell;
        return this.arrowColor || app && app.arrowColor || "#B2B2B2";
      },
      getBorderColor() {
        let color = this.borderColor;
        if (!color || color === true) {
          const app = uni && uni.$fui && uni.$fui.fuiListCell;
          color = app && app.borderColor || "#EEEEEE";
        }
        return color;
      },
      getBottomLeft() {
        const app = uni && uni.$fui && uni.$fui.fuiListCell;
        let left = this.bottomLeft;
        const c_left = app && app.bottomLeft;
        if (left === -1) {
          left = c_left === void 0 || c_left === null ? 32 : c_left;
        }
        return left;
      }
    },
    methods: {
      handleClick() {
        this.$emit("click", {
          index: this.index
        });
      }
    }
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
      "view",
      {
        class: (0, import_vue3.normalizeClass)(["fui-list__cell", { "fui-highlight": $props.highlight, "fui-list__cell-background": !$props.background }]),
        style: (0, import_vue3.normalizeStyle)({ paddingTop: $options.getPadding[0] || 0, paddingRight: $options.getPadding[1] || 0, paddingBottom: $options.getPadding[2] || $options.getPadding[0] || 0, paddingLeft: $options.getPadding[3] || $options.getPadding[1] || 0, background: $props.background, marginTop: $props.marginTop + "rpx", marginBottom: $props.marginBottom + "rpx", borderRadius: $props.radius }),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick && $options.handleClick(...args)),
        renderWhole: true
      },
      [
        $props.topBorder ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
          "view",
          {
            key: 0,
            style: (0, import_vue3.normalizeStyle)({ background: $options.getBorderColor, left: $props.topLeft + "rpx", right: $props.topRight + "rpx" }),
            class: (0, import_vue3.normalizeClass)(["fui-cell__border-top", { "fui-cell__border-color": !$options.getBorderColor }])
          },
          null,
          6
          /* CLASS, STYLE */
        )) : (0, import_vue3.createCommentVNode)("v-if", true),
        (0, import_vue3.renderSlot)(_ctx.$slots, "default"),
        $props.bottomBorder ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
          "view",
          {
            key: 1,
            style: (0, import_vue3.normalizeStyle)({ background: $options.getBorderColor, left: $options.getBottomLeft + "rpx", right: $props.bottomRight + "rpx" }),
            class: (0, import_vue3.normalizeClass)(["fui-cell__border-bottom", { "fui-cell__border-color": !$options.getBorderColor }])
          },
          null,
          6
          /* CLASS, STYLE */
        )) : (0, import_vue3.createCommentVNode)("v-if", true),
        $props.arrow ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
          "view",
          {
            key: 2,
            class: "fui-cell__arrow",
            style: (0, import_vue3.normalizeStyle)({ "border-color": $options.getArrowColor })
          },
          null,
          4
          /* STYLE */
        )) : (0, import_vue3.createCommentVNode)("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  var __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-list-cell/fui-list-cell.vue"]]);

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/operate/dropdownMenu/dropdownMenu.js
  var _style_0$1 = { "fui-dropdown__menu": { "": { "flex": 1, "position": "relative" } }, "fui-ddm__scroll": { "": { "flex": 1 } }, "fui-dropdown__menu-list": { "": { "boxShadow": "0 0 10rpx rgba(2, 4, 38, 0.05)", "opacity": 0, "position": "fixed", "flexDirection": "row", "transitionProperty": "opacity", "transitionDuration": 300, "transitionTimingFunction": "ease-in-out" } }, "fui-ddm__down": { "": { "transformOrigin": "0 0" } }, "fui-ddm__up": { "": { "transformOrigin": "0 100%", "transform": "translate(0, -100%)" } }, "fui-ddm__mask": { "": { "position": "fixed", "top": 0, "left": 0, "right": 0, "bottom": 0, "zIndex": 990 } }, "fui-dropdown__menu-item": { "": { "flexDirection": "row", "alignItems": "center", "backgroundColor": "#FFFFFF", "position": "relative", "!backgroundColor:active": "rgba(0,0,0,0.2)" } }, "fui-ddm__flex": { "": { "flex": 1, "flexDirection": "row", "alignItems": "center" } }, "fui-ddm__item-line": { "": { "position": "relative", "borderBottomWidth": 0.5, "borderBottomStyle": "solid", "borderBottomColor": "#EEEEEE" } }, "fui-ddm__reverse": { "": { "justifyContent": "space-between", "flexDirection": "row-reverse" } }, "fui-ddm__checkbox": { "": { "fontSize": 0, "color": "rgba(0,0,0,0)", "width": "40rpx", "height": "40rpx", "borderWidth": 1, "borderStyle": "solid", "borderRadius": "40rpx", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "overflow": "hidden", "position": "relative" } }, "fui-is__checkmark": { "": { "!borderWidth": 0, "!backgroundColor": "rgba(0,0,0,0)" } }, "fui-ddm__checkmark": { "": { "width": "20rpx", "height": "40rpx", "borderBottomStyle": "solid", "borderBottomWidth": 3, "borderBottomColor": "#FFFFFF", "borderRightStyle": "solid", "borderRightWidth": 3, "borderRightColor": "#FFFFFF", "transform": "rotate(45deg) scale(0.5)", "transformOrigin": "54% 48%" } }, "fui-ddm__item-text": { "": { "fontWeight": "normal" } }, "fui-ddm__text-pl": { "": { "paddingLeft": "24rpx" } }, "fui-ddm__text-pr": { "": { "paddingRight": "24rpx" } }, "fui-ddm__icon-box": { "": { "overflow": "hidden", "backgroundColor": "#F1F4FA" } }, "fui-ddm__icon-ml": { "": { "marginLeft": "24rpx" } }, "fui-ddm__icon-mr": { "": { "marginRight": "24rpx" } }, "@TRANSITION": { "fui-dropdown__menu-list": { "property": "opacity", "duration": 300, "timingFunction": "ease-in-out" } } };
  var dom = weex.requireModule("dom");
  var animation = requireNativePlugin("animation");
  var _sfc_main$1 = {
    name: "fui-dropdown-menu",
    emits: ["click", "close"],
    props: {
      options: {
        type: Array,
        default() {
          return [];
        }
      },
      maxHeight: {
        type: [Number, String],
        default: 400
      },
      minWidth: {
        type: [Number, String],
        default: 0
      },
      left: {
        type: [Number, String],
        default: 0
      },
      //right大于等于0时生效，left失效
      right: {
        type: [Number, String],
        default: -1
      },
      background: {
        type: String,
        default: "#fff"
      },
      radius: {
        type: [Number, String],
        default: 0
      },
      padding: {
        type: String,
        default: "32rpx"
      },
      isCheckbox: {
        type: Boolean,
        default: true
      },
      //选择框选中后颜色
      checkboxColor: {
        type: String,
        default: ""
      },
      //选择框未选中时边框颜色
      borderColor: {
        type: String,
        default: "#ccc"
      },
      //是否只展示对号，无边框背景
      isCheckMark: {
        type: Boolean,
        default: false
      },
      //对号颜色
      checkmarkColor: {
        type: String,
        default: "#fff"
      },
      //选择框与内容是否颠倒排列
      isReverse: {
        type: Boolean,
        default: false
      },
      //是否需要分割线条
      splitLine: {
        type: Boolean,
        default: false
      },
      lineColor: {
        type: String,
        default: "#eee"
      },
      iconWidth: {
        type: [Number, String],
        default: 48
      },
      size: {
        type: [Number, String],
        default: 32
      },
      color: {
        type: String,
        default: "#181818"
      },
      selectedColor: {
        type: String,
        default: ""
      },
      isMask: {
        type: Boolean,
        default: true
      },
      maskBackground: {
        type: String,
        default: "transparent"
      },
      //down/up
      direction: {
        type: String,
        default: "down"
      }
    },
    watch: {
      isShow(val) {
        if (val) {
          this.isNvueShow = true;
          this.$nextTick(() => {
            setTimeout(() => {
              this._animationFn(true);
            }, 50);
          });
        } else {
          this._animationFn(false);
        }
      },
      options(newVal) {
        this.initData(newVal);
      }
    },
    data() {
      let isNvue = false;
      isNvue = true;
      return {
        isNvue,
        isNvueShow: false,
        n_left: 0,
        n_top: 20,
        itemList: [],
        isShow: false
      };
    },
    computed: {
      getStyles() {
        let styles = `border-radius:${this.radius}rpx;background:${this.background};`;
        let right = Number(this.right || 0);
        if (right >= 0) {
          styles += "right:0;";
        }
        styles += `left:${this.n_left}px;top:${this.n_top}px;height:${this.maxHeight}rpx;`;
        return styles;
      },
      getChkColor() {
        let color = this.checkboxColor;
        if (!color || color === true) {
          const app = uni && uni.$fui && uni.$fui.color;
          color = app && app.primary || "#465CFF";
        }
        return color;
      }
    },
    created() {
      this.initData(this.options);
    },
    mounted() {
      this.$nextTick(() => {
        setTimeout(() => {
          this.resetCalc();
        }, 100);
      });
    },
    methods: {
      resetCalc(callback, height) {
        if (!this.$refs["fui_dm_wrap"])
          return;
        dom.getComponentRect(this.$refs["fui_dm_wrap"], (option) => {
          if (option && option.result && option.size) {
            let cbk = callback && typeof callback === "function";
            let height2 = option.size.height;
            if (cbk && height2) {
              height2 = height2;
            }
            let top = option.size.top;
            this.n_left = option.size.left;
            this.n_top = this.direction === "down" ? height2 + top : top;
            if (cbk) {
              callback(true);
            }
          }
        });
      },
      _animationFn(type) {
        if (!this.$refs["fui_ddm_list"])
          return;
        let styles = {
          opacity: type ? 1 : 0
        };
        if (this.direction === "up") {
          styles.transform = `translate(0, -100%)`;
        }
        animation.transition(
          this.$refs["fui_ddm_list"].ref,
          {
            styles,
            duration: 300,
            //ms
            timingFunction: "ease",
            needLayout: false,
            delay: 0
            //ms
          },
          () => {
            if (!type) {
              this.isNvueShow = false;
            }
          }
        );
      },
      initData(vals) {
        if (vals && vals.length > 0) {
          if (typeof vals[0] !== "object") {
            vals = vals.map((item) => {
              return {
                text: item,
                checked: false
              };
            });
          } else {
            vals.map((item) => {
              item.checked = item.checked || false;
            });
          }
          this.itemList = vals;
        }
      },
      itemClick(index) {
        let item = this.itemList[index];
        let vals = [...this.itemList];
        vals.forEach((item2, idx) => {
          if (index === idx) {
            item2.checked = true;
          } else {
            item2.checked = false;
          }
        });
        this.itemList = vals;
        this.$emit("click", __spreadValues({
          index
        }, item));
        this.close(2);
      },
      close(type) {
        this.isShow = false;
        if (type === 1) {
          this.$emit("close", {});
        }
      },
      show() {
        this.isShow = true;
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
      "view",
      {
        class: "fui-dropdown__menu",
        ref: "fui_dm_wrap",
        onClick: _cache[1] || (_cache[1] = (...args) => $options.resetCalc && $options.resetCalc(...args)),
        renderWhole: true
      },
      [
        (0, import_vue4.renderSlot)(_ctx.$slots, "default"),
        $data.isShow && $props.isMask ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
          "view",
          {
            key: 0,
            class: "fui-ddm__mask",
            style: (0, import_vue4.normalizeStyle)({ background: $props.maskBackground }),
            onClick: _cache[0] || (_cache[0] = ($event) => $options.close(1))
          },
          null,
          4
          /* STYLE */
        )) : (0, import_vue4.createCommentVNode)("v-if", true),
        $data.isNvueShow || !$data.isNvue ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
          "view",
          {
            key: 1,
            class: (0, import_vue4.normalizeClass)(["fui-dropdown__menu-list", { "fui-ddm__down": $props.direction !== "up", "fui-ddm__up": $props.direction === "up", "fui-ddm__down-show": $data.isShow && $props.direction !== "up", "fui-ddm__up-show": $data.isShow && $props.direction === "up" }]),
            style: (0, import_vue4.normalizeStyle)($options.getStyles),
            ref: "fui_ddm_list"
          },
          [
            (0, import_vue4.createElementVNode)(
              "scroll-view",
              {
                showScrollbar: false,
                class: "fui-ddm__scroll",
                scrollY: "",
                style: (0, import_vue4.normalizeStyle)({ height: $data.isNvue ? $props.maxHeight + "rpx" : "auto", maxHeight: $props.maxHeight + "rpx", minWidth: $props.minWidth + "rpx" })
              },
              [
                (0, import_vue4.createElementVNode)("view", null, [
                  ((0, import_vue4.openBlock)(true), (0, import_vue4.createElementBlock)(
                    import_vue4.Fragment,
                    null,
                    (0, import_vue4.renderList)($data.itemList, (model, index) => {
                      return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("view", {
                        class: (0, import_vue4.normalizeClass)(["fui-dropdown__menu-item", { "fui-ddm__reverse": $props.isReverse, "fui-ddm__item-line": $props.splitLine && $data.itemList.length - 1 !== index }]),
                        style: (0, import_vue4.normalizeStyle)({ background: $props.background, padding: $props.padding, borderBottomColor: $props.splitLine && $data.isNvue ? $props.lineColor : "transparent" }),
                        key: index,
                        onClick: (0, import_vue4.withModifiers)(($event) => $options.itemClick(index), ["stop"])
                      }, [
                        $props.isCheckbox ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
                          "view",
                          {
                            key: 0,
                            class: (0, import_vue4.normalizeClass)(["fui-ddm__checkbox", { "fui-is__checkmark": $props.isCheckMark, "fui-ddm__checkbox-color": (!$props.checkboxColor || $props.checkboxColor === true) && model.checked && !$props.isCheckMark }]),
                            style: (0, import_vue4.normalizeStyle)({ background: model.checked && !$props.isCheckMark ? $options.getChkColor : "transparent", borderColor: model.checked && !$props.isCheckMark ? $options.getChkColor : $props.borderColor })
                          },
                          [
                            model.checked ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
                              "view",
                              {
                                key: 0,
                                class: "fui-ddm__checkmark",
                                style: (0, import_vue4.normalizeStyle)({ borderBottomColor: $props.checkmarkColor, borderRightColor: $props.checkmarkColor })
                              },
                              null,
                              4
                              /* STYLE */
                            )) : (0, import_vue4.createCommentVNode)("v-if", true)
                          ],
                          6
                          /* CLASS, STYLE */
                        )) : (0, import_vue4.createCommentVNode)("v-if", true),
                        (0, import_vue4.createElementVNode)("view", { class: "fui-ddm__flex" }, [
                          model.src ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
                            "view",
                            {
                              key: 0,
                              class: (0, import_vue4.normalizeClass)(["fui-ddm__icon-box", { "fui-ddm__icon-ml": !$props.isReverse && $props.isCheckbox, "fui-ddm__icon-mr": $props.isReverse }]),
                              style: (0, import_vue4.normalizeStyle)({ width: $props.iconWidth + "rpx", height: $props.iconWidth + "rpx" })
                            },
                            [
                              (0, import_vue4.createElementVNode)("u-image", {
                                src: model.src,
                                style: (0, import_vue4.normalizeStyle)({ width: $props.iconWidth + "rpx", height: $props.iconWidth + "rpx" })
                              }, null, 12, ["src"])
                            ],
                            6
                            /* CLASS, STYLE */
                          )) : (0, import_vue4.createCommentVNode)("v-if", true),
                          (0, import_vue4.createElementVNode)(
                            "u-text",
                            {
                              class: (0, import_vue4.normalizeClass)(["fui-ddm__item-text", { "fui-ddm__text-pl": !$props.isReverse && ($props.isCheckbox || model.src), "fui-ddm__text-pr": $props.isReverse && ($props.isCheckbox || model.src) }]),
                              style: (0, import_vue4.normalizeStyle)({ fontSize: $props.size + "rpx", color: $props.selectedColor && model.checked ? $props.selectedColor : $props.color })
                            },
                            (0, import_vue4.toDisplayString)(model.text),
                            7
                            /* TEXT, CLASS, STYLE */
                          )
                        ])
                      ], 14, ["onClick"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ],
              4
              /* STYLE */
            )
          ],
          6
          /* CLASS, STYLE */
        )) : (0, import_vue4.createCommentVNode)("v-if", true)
      ],
      512
      /* NEED_PATCH */
    );
  }
  var __easycom_12 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-dropdown-menu/fui-dropdown-menu.vue"]]);
  var _style_03 = { "fui-wrap": { "": { "paddingBottom": "120rpx" } }, "fui-section__title": { "": { "marginLeft": "32rpx" } }, "fui-flex__center": { "": { "flexDirection": "row", "alignItems": "center" } }, "fui-filter__bar": { "": { "height": "88rpx", "flexDirection": "row", "alignItems": "center", "backgroundColor": "#ffffff", "marginBottom": "40rpx" } }, "fui-filter__item": { "": { "height": "88rpx", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "fontSize": "30rpx" } }, "fui-filter__icon": { "": { "transitionProperty": "transform", "transitionDuration": 150, "transitionTimingFunction": "linear", "transform": "rotate(0deg)" } }, "fui-icon__ani": { "": { "transform": "rotate(180deg)" } }, "fui-list__cell": { "": { "flex": 1 } }, "fui-flex__1": { "": { "flex": 1 } }, "fui-select": { "": { "height": "80rpx", "paddingTop": "32rpx", "paddingRight": "32rpx", "paddingBottom": "32rpx", "paddingLeft": "32rpx", "flex": 1, "position": "relative", "flexDirection": "row", "alignItems": "center", "borderWidth": 0.5, "borderStyle": "solid", "borderColor": "#eeeeee" } }, "fui-input": { "": { "fontSize": "32rpx", "flex": 1, "paddingRight": "8rpx", "color": "#181818" } }, "@TRANSITION": { "fui-filter__icon": { "property": "transform", "duration": 150, "timingFunction": "linear" } } };
  var _sfc_main3 = {
    data() {
      return {
        options: [{
          text: "\u7EFC\u5408\u63A8\u8350",
          value: 1,
          checked: true
        }, {
          text: "\u65B0\u54C1\u4F18\u5148",
          value: 2
        }, {
          text: "\u8BC4\u8BBA\u6570\u4ECE\u9AD8\u5230\u4F4E",
          value: 3
        }],
        options1: [{
          text: "\u9ED8\u8BA4\u6392\u5E8F",
          value: 11,
          checked: true
        }, {
          text: "\u9500\u91CF\u6392\u5E8F",
          value: 12
        }, {
          text: "\u4EF7\u683C\u6392\u5E8F",
          value: 13
        }],
        range: "\u7EFC\u5408\u63A8\u8350",
        rangeShow: false,
        sort: "\u9ED8\u8BA4\u6392\u5E8F",
        sortShow: false,
        //数据格式二
        options2: ["\u6CE8\u518C\u6FC0\u6D3B", "\u7AD9\u957F\u5DE5\u5177", "\u6295\u9012\u6587\u7AE0", "\u5A92\u4F53\u5408\u4F5C", "\u7D20\u6750\u76F8\u5173", "\u62A5\u544A\u9519\u8BEF", "\u8BBA\u575B\u4E8B\u52A1", "\u53D1\u5E03\u8F6F\u4EF6", "\u7F51\u7AD9\u6392\u884C\u699C", "\u5176\u4ED6\u4E8B\u52A1"],
        question: "",
        quesShow: false,
        options3: ["\u6700\u65B0\u8F66\u8BAF", "\u964D\u4EF7\u6392\u884C", "SUV", "\u8FDD\u7AE0\u7F5A\u5355", "\u63D0\u8F66\u8BD5\u9A7E", "\u6D4B\u8BC4\u4F53\u9A8C", "\u9009\u8F66\u6307\u5357", "\u7F8E\u5973\u8F66\u6A21", "\u52A0\u6CB9\u4F18\u60E0\u5361", "\u7EF4\u4FEE\u4FDD\u517B"],
        tag: "",
        tagShow: false
      };
    },
    methods: {
      filterTap(type) {
        if (type === 1) {
          this.$refs.ddmRange.show();
          this.rangeShow = true;
        } else {
          this.$refs.ddmSort.show();
          this.sortShow = true;
        }
      },
      rangeItemClick(e) {
        formatAppLog("log", "at pages/component/operate/dropdownMenu/dropdownMenu.nvue:123", e);
        this.range = e.text;
        this.rangeClose();
      },
      rangeClose() {
        this.rangeShow = false;
      },
      sortItemClick(e) {
        formatAppLog("log", "at pages/component/operate/dropdownMenu/dropdownMenu.nvue:131", e);
        this.sort = e.text;
        this.sortClose();
      },
      sortClose() {
        this.sortShow = false;
      },
      quesTap() {
        this.$refs.ddmQues.show();
        this.quesShow = true;
      },
      quesItemClick(e) {
        formatAppLog("log", "at pages/component/operate/dropdownMenu/dropdownMenu.nvue:143", e);
        this.question = e.text;
        this.quesClose();
      },
      quesClose() {
        this.quesShow = false;
      },
      tagTap() {
        this.$refs.ddmTag.show();
        this.tagShow = true;
      },
      tagItemClick(e) {
        formatAppLog("log", "at pages/component/operate/dropdownMenu/dropdownMenu.nvue:155", e);
        this.tag = e.text;
        this.tagClose();
      },
      tagClose() {
        this.tagShow = false;
      },
      empty() {
      }
    }
  };
  function _sfc_render3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_fui_icon = resolveEasycom((0, import_vue4.resolveDynamicComponent)("fui-icon"), __easycom_1);
    const _component_fui_dropdown_menu = resolveEasycom((0, import_vue4.resolveDynamicComponent)("fui-dropdown-menu"), __easycom_12);
    const _component_fui_list_cell = resolveEasycom((0, import_vue4.resolveDynamicComponent)("fui-list-cell"), __easycom_2);
    return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue4.createElementVNode)("view", { class: "fui-wrap" }, [
        (0, import_vue4.createElementVNode)("view", { class: "fui-page__hd" }, [
          (0, import_vue4.createElementVNode)("u-text", { class: "fui-page__title" }, "DropdownMenu"),
          (0, import_vue4.createElementVNode)("u-text", { class: "fui-page__desc" }, "DropdownMenu \u4E0B\u62C9\u83DC\u5355\uFF0C\u7528\u4E8E\u5F39\u51FA\u4E00\u4E2A\u4E0B\u62C9\u83DC\u5355\u7ED9\u7528\u6237\u9009\u62E9\u64CD\u4F5C\u3002")
        ]),
        (0, import_vue4.createElementVNode)("view", { class: "fui-page__bd" }, [
          (0, import_vue4.createElementVNode)("u-text", { class: "fui-section__title" }, "\u9009\u62E9\u6846\u4F4D\u7F6E\u3001\u6837\u5F0F\u6539\u53D8"),
          (0, import_vue4.createElementVNode)("view", { class: "fui-filter__bar" }, [
            (0, import_vue4.createElementVNode)("view", { class: "fui-flex__1" }, [
              (0, import_vue4.createVNode)(_component_fui_dropdown_menu, {
                maxHeight: "324",
                size: 28,
                selectedColor: "#465CFF",
                options: $data.options,
                onClick: $options.rangeItemClick,
                onClose: $options.rangeClose,
                ref: "ddmRange"
              }, {
                default: (0, import_vue4.withCtx)(() => [
                  (0, import_vue4.createElementVNode)("view", {
                    class: "fui-filter__item",
                    onClick: _cache[0] || (_cache[0] = ($event) => $options.filterTap(1))
                  }, [
                    (0, import_vue4.createElementVNode)(
                      "u-text",
                      { class: "fui-text" },
                      (0, import_vue4.toDisplayString)($data.range),
                      1
                      /* TEXT */
                    ),
                    (0, import_vue4.createElementVNode)(
                      "view",
                      {
                        class: (0, import_vue4.normalizeClass)(["fui-filter__icon", { "fui-icon__ani": $data.rangeShow }])
                      },
                      [
                        (0, import_vue4.createVNode)(_component_fui_icon, {
                          name: "turningdown",
                          size: 32
                        })
                      ],
                      2
                      /* CLASS */
                    )
                  ])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["options", "onClick", "onClose"])
            ]),
            (0, import_vue4.createElementVNode)("view", { class: "fui-flex__1" }, [
              (0, import_vue4.createVNode)(_component_fui_dropdown_menu, {
                maxHeight: "324",
                minWidth: 300,
                right: "0",
                size: 28,
                selectedColor: "#465CFF",
                isCheckMark: "",
                checkmarkColor: "#465CFF",
                isReverse: "",
                options: $data.options1,
                onClick: $options.sortItemClick,
                onClose: $options.sortClose,
                ref: "ddmSort"
              }, {
                default: (0, import_vue4.withCtx)(() => [
                  (0, import_vue4.createElementVNode)("view", {
                    class: "fui-filter__item",
                    onClick: _cache[1] || (_cache[1] = ($event) => $options.filterTap(2))
                  }, [
                    (0, import_vue4.createElementVNode)(
                      "u-text",
                      { class: "fui-text" },
                      (0, import_vue4.toDisplayString)($data.sort),
                      1
                      /* TEXT */
                    ),
                    (0, import_vue4.createElementVNode)(
                      "view",
                      {
                        class: (0, import_vue4.normalizeClass)(["fui-filter__icon", { "fui-icon__ani": $data.sortShow }])
                      },
                      [
                        (0, import_vue4.createVNode)(_component_fui_icon, {
                          name: "turningdown",
                          size: 32
                        })
                      ],
                      2
                      /* CLASS */
                    )
                  ])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["options", "onClick", "onClose"])
            ])
          ]),
          (0, import_vue4.createElementVNode)("u-text", { class: "fui-section__title" }, "\u53EF\u6EDA\u52A8\u3001\u6539\u53D8\u9009\u62E9\u6846\u989C\u8272"),
          (0, import_vue4.createVNode)(_component_fui_list_cell, { highlight: false }, {
            default: (0, import_vue4.withCtx)(() => [
              (0, import_vue4.createElementVNode)("view", { class: "fui-list__cell fui-flex__center" }, [
                (0, import_vue4.createElementVNode)("u-text", { class: "fui-text" }, "\u95EE\u9898\u5206\u7C7B\uFF1A"),
                (0, import_vue4.createElementVNode)("view", { class: "fui-flex__1" }, [
                  (0, import_vue4.createVNode)(_component_fui_dropdown_menu, {
                    checkboxColor: "#FFB703",
                    minWidth: 400,
                    splitLine: "",
                    options: $data.options2,
                    ref: "ddmQues",
                    onClick: $options.quesItemClick,
                    onClose: $options.quesClose
                  }, {
                    default: (0, import_vue4.withCtx)(() => [
                      (0, import_vue4.createElementVNode)("view", {
                        class: "fui-select fui-flex__between",
                        onClick: _cache[3] || (_cache[3] = (...args) => $options.quesTap && $options.quesTap(...args))
                      }, [
                        (0, import_vue4.createElementVNode)("u-input", {
                          placeholder: "\u8BF7\u9009\u62E9",
                          value: $data.question,
                          class: "fui-input",
                          disabled: true,
                          onClick: _cache[2] || (_cache[2] = (...args) => $options.empty && $options.empty(...args))
                        }, null, 8, ["value"]),
                        (0, import_vue4.createElementVNode)(
                          "view",
                          {
                            class: (0, import_vue4.normalizeClass)(["fui-filter__icon", { "fui-icon__ani": $data.quesShow }])
                          },
                          [
                            (0, import_vue4.createVNode)(_component_fui_icon, {
                              name: "turningdown",
                              size: 32
                            })
                          ],
                          2
                          /* CLASS */
                        )
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["options", "onClick", "onClose"])
                ])
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue4.createElementVNode)("u-text", { class: "fui-section__title" }, "\u5411\u4E0A\u5C55\u5F00\u3001\u4E0D\u663E\u793A\u9009\u62E9\u6846"),
          (0, import_vue4.createVNode)(_component_fui_list_cell, { highlight: false }, {
            default: (0, import_vue4.withCtx)(() => [
              (0, import_vue4.createElementVNode)("view", { class: "fui-list__cell fui-flex__center" }, [
                (0, import_vue4.createElementVNode)("u-text", { class: "fui-text" }, "\u9009\u62E9\u6807\u7B7E\uFF1A"),
                (0, import_vue4.createElementVNode)("view", { class: "fui-flex__1" }, [
                  (0, import_vue4.createVNode)(_component_fui_dropdown_menu, {
                    isCheckbox: false,
                    selectedColor: "#FF2B2B",
                    splitLine: "",
                    options: $data.options3,
                    ref: "ddmTag",
                    direction: "up",
                    onClick: $options.tagItemClick,
                    onClose: $options.tagClose
                  }, {
                    default: (0, import_vue4.withCtx)(() => [
                      (0, import_vue4.createElementVNode)("view", {
                        class: "fui-select fui-flex__between",
                        onClick: _cache[5] || (_cache[5] = (...args) => $options.tagTap && $options.tagTap(...args))
                      }, [
                        (0, import_vue4.createElementVNode)("u-input", {
                          placeholder: "\u8BF7\u9009\u62E9",
                          value: $data.tag,
                          class: "fui-input",
                          disabled: true,
                          onClick: _cache[4] || (_cache[4] = (...args) => $options.empty && $options.empty(...args))
                        }, null, 8, ["value"]),
                        (0, import_vue4.createElementVNode)(
                          "view",
                          {
                            class: (0, import_vue4.normalizeClass)(["fui-filter__icon", { "fui-icon__ani": $data.tagShow }])
                          },
                          [
                            (0, import_vue4.createVNode)(_component_fui_icon, {
                              name: "turningdown",
                              size: 32
                            })
                          ],
                          2
                          /* CLASS */
                        )
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["options", "onClick", "onClose"])
                ])
              ])
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ])
    ]);
  }
  var dropdownMenu = /* @__PURE__ */ _export_sfc(_sfc_main3, [["render", _sfc_render3], ["styles", [_style_03]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/operate/dropdownMenu/dropdownMenu.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/component/operate/dropdownMenu/dropdownMenu";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    dropdownMenu.mpType = "page";
    const app = Vue.createPageApp(dropdownMenu, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...dropdownMenu.styles || []]));
    app.mount("#root");
  }
})();
