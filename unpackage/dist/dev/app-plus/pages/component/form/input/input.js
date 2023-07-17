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
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/form/input/input.js
  var import_vue4 = __toESM(require_vue());

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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/fui-button.js
  var import_vue3 = __toESM(require_vue());
  var _style_02 = { "fui-button__wrap": { "": { "position": "relative" } }, "fui-button": { "": { "borderWidth": 0, "borderStyle": "solid", "position": "relative", "paddingLeft": 0, "paddingRight": 0, "borderWidth::after": 0, "borderStyle::after": "solid", "borderColor::after": "#000000" } }, "fui-button__flex-1": { "": { "flex": 1 } }, "fui-button__text": { "": { "textAlign": "center", "flexDirection": "row", "alignItems": "center", "!justifyContent": "center", "!paddingLeft": 0 } }, "fui-button__opacity": { "": { "opacity": 0.5 } }, "fui-text__bold": { "": { "fontWeight": "bold" } }, "fui-button__link": { "": { "!borderColor": "rgba(0,0,0,0)", "!backgroundColor": "rgba(0,0,0,0)" } } };
  var _sfc_main2 = {
    name: "fui-button",
    emits: ["click", "getuserinfo", "contact", "getphonenumber", "error", "opensetting"],
    props: {
      //样式类型：primary，success， warning，danger，link，purple，gray
      type: {
        type: String,
        default: "primary"
      },
      //按钮背景色，当传入值时type失效
      background: {
        type: String,
        default: ""
      },
      //按钮显示文本
      text: {
        type: String,
        default: ""
      },
      //按钮字体颜色
      color: {
        type: String,
        default: ""
      },
      //按钮禁用背景色
      disabledBackground: {
        type: String,
        default: ""
      },
      //按钮禁用字体颜色
      disabledColor: {
        type: String,
        default: ""
      },
      borderWidth: {
        type: String,
        default: "0.5px"
      },
      borderColor: {
        type: String,
        default: ""
      },
      //V1.9.8+ 按钮大小，优先级高于width和height，medium、small、mini
      btnSize: {
        type: String,
        default: ""
      },
      //宽度
      width: {
        type: String,
        default: "100%"
      },
      //高度
      height: {
        type: String,
        default: ""
      },
      //字体大小，单位rpx
      size: {
        type: [Number, String],
        default: 0
      },
      bold: {
        type: Boolean,
        default: false
      },
      //['20rpx','30rpx','20rpx','30rpx']->[上，右，下，左]
      margin: {
        type: Array,
        default() {
          return ["0", "0"];
        }
      },
      //圆角
      radius: {
        type: String,
        default: ""
      },
      plain: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      formType: {
        type: String,
        default: ""
      },
      openType: {
        type: String,
        default: ""
      },
      //支付宝小程序 
      //当 open-type 为 getAuthorize 时，可以设置 scope 为：phoneNumber、userInfo
      scope: {
        type: String,
        default: ""
      },
      appParameter: {
        type: String,
        default: ""
      },
      index: {
        type: [Number, String],
        default: 0
      }
    },
    computed: {
      getTypeColor() {
        const app = uni && uni.$fui && uni.$fui.color;
        let colors = {
          primary: app && app.primary || "#465CFF",
          success: app && app.success || "#09BE4F",
          warning: app && app.warning || "#FFB703",
          danger: app && app.danger || "#FF2B2B",
          link: "transparent",
          purple: app && app.purple || "#6831FF",
          gray: "#F8F8F8"
        };
        return colors[this.type] || "transparent";
      },
      getBackground() {
        let color = this.getTypeColor;
        if (this.disabled || this.plain) {
          color = "transparent";
        }
        if (!this.disabled && !this.plain && this.background) {
          color = this.background;
        }
        return color;
      },
      getColor() {
        let color = "#fff";
        if (this.color) {
          color = this.disabled && this.disabledBackground ? this.disabledColor : this.color;
        } else {
          if (this.disabled && this.disabledBackground) {
            color = this.disabledColor || "#FFFFFF";
          } else {
            const app = uni && uni.$fui && uni.$fui.color;
            const primary = app && app.primary || "#465CFF";
            color = this.type === "gray" ? primary : "#FFFFFF";
          }
        }
        return color;
      },
      getSize() {
        let size = this.size || uni && uni.$fui && uni.$fui.fuiButton && uni.$fui.fuiButton.size || 32;
        if (this.btnSize === "small") {
          size = size > 28 ? 28 : size;
        } else if (this.btnSize === "mini") {
          size = size > 28 ? 24 : size;
        }
        return `${size}rpx`;
      },
      getWidth() {
        let width = this.width;
        if (this.btnSize && this.btnSize !== true) {
          width = {
            "medium": "400rpx",
            "small": "200rpx",
            "mini": "120rpx"
          }[this.btnSize] || width;
        }
        return width;
      },
      getHeight() {
        let height = this.height || uni && uni.$fui && uni.$fui.fuiButton && uni.$fui.fuiButton.height || "96rpx";
        if (this.btnSize && this.btnSize !== true) {
          height = {
            "medium": "84rpx",
            "small": "72rpx",
            "mini": "64rpx"
          }[this.btnSize] || height;
        }
        return height;
      },
      getRadius() {
        const radius = uni && uni.$fui && uni.$fui.fuiButton && uni.$fui.fuiButton.radius || "16rpx";
        return this.radius || radius;
      }
    },
    data() {
      let isNvue = false;
      isNvue = true;
      return {
        isNvue,
        time: 0,
        trigger: false,
        pc: false
      };
    },
    created() {
    },
    methods: {
      handleStart(e) {
      },
      handleClick() {
        if (this.disabled || !this.trigger)
          return;
        this.time = 0;
      },
      handleTap() {
        if (this.disabled)
          return;
        this.$emit("click", {
          index: Number(this.index)
        });
      },
      handleEnd(e) {
      },
      bindgetuserinfo({
        detail = {}
      } = {}) {
        this.$emit("getuserinfo", detail);
      },
      bindcontact({
        detail = {}
      } = {}) {
        this.$emit("contact", detail);
      },
      bindgetphonenumber({
        detail = {}
      } = {}) {
        this.$emit("getphonenumber", detail);
      },
      binderror({
        detail = {}
      } = {}) {
        this.$emit("error", detail);
      },
      bindopensetting({
        detail = {}
      } = {}) {
        this.$emit("opensetting", detail);
      },
      bindchooseavatar({
        detail = {}
      } = {}) {
        this.$emit("chooseavatar", detail);
      },
      bindlaunchapp({
        detail = {}
      } = {}) {
        this.$emit("launchapp", detail);
      }
    }
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_button = (0, import_vue3.resolveComponent)("button");
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
      "view",
      {
        class: (0, import_vue3.normalizeClass)(["fui-button__wrap", [!$options.getWidth || $options.getWidth === "100%" || $options.getWidth === true ? "fui-button__flex-1" : "", $props.disabled && !$props.disabledBackground ? "fui-button__opacity" : ""]]),
        style: (0, import_vue3.normalizeStyle)({ width: $options.getWidth, height: $options.getHeight, marginTop: $props.margin[0] || 0, marginRight: $props.margin[1] || 0, marginBottom: $props.margin[2] || $props.margin[0] || 0, marginLeft: $props.margin[3] || $props.margin[1] || 0, borderRadius: $options.getRadius, background: $options.getBackground }),
        onTouchstart: _cache[0] || (_cache[0] = (...args) => $options.handleStart && $options.handleStart(...args)),
        onTouchend: _cache[1] || (_cache[1] = (...args) => $options.handleClick && $options.handleClick(...args)),
        onTouchcancel: _cache[2] || (_cache[2] = (...args) => $options.handleEnd && $options.handleEnd(...args)),
        renderWhole: true
      },
      [
        (0, import_vue3.createVNode)(_component_button, {
          class: (0, import_vue3.normalizeClass)(["fui-button", [
            $props.bold ? "fui-text__bold" : "",
            $data.time && ($props.plain || $props.type === "link") ? "fui-button__opacity" : "",
            !$props.background && !$props.disabledBackground && !$props.plain ? "fui-button__" + $props.type : "",
            !$options.getWidth || $options.getWidth === "100%" || $options.getWidth === true ? "fui-button__flex-1" : "",
            $data.time && !$props.plain && $props.type !== "link" ? "fui-button__active" : "",
            $data.pc && !$props.disabled ? $props.plain || $props.type === "link" ? "fui-button__opacity-pc" : "fui-button__active-pc" : ""
          ]]),
          style: (0, import_vue3.normalizeStyle)({
            width: $options.getWidth,
            height: $options.getHeight,
            lineHeight: $options.getHeight,
            background: $props.disabled ? $props.disabledBackground || $options.getTypeColor : $props.plain ? "transparent" : $options.getBackground,
            borderWidth: !$props.borderColor || !$data.isNvue ? "0" : $props.borderWidth,
            borderColor: $props.borderColor ? $props.borderColor : $props.disabled && $props.disabledBackground ? $props.disabledBackground : $props.background || "transparent",
            borderRadius: $options.getRadius,
            fontSize: $options.getSize,
            color: $options.getColor
          }),
          loading: $props.loading,
          "form-type": $props.formType,
          "open-type": $props.openType,
          "app-parameter": $props.appParameter,
          onGetuserinfo: $options.bindgetuserinfo,
          onGetphonenumber: $options.bindgetphonenumber,
          onContact: $options.bindcontact,
          onError: $options.binderror,
          onOpensetting: $options.bindopensetting,
          onChooseavatar: $options.bindchooseavatar,
          onLaunchapp: $options.bindlaunchapp,
          disabled: $props.disabled,
          scope: $props.scope,
          onClick: (0, import_vue3.withModifiers)($options.handleTap, ["stop"])
        }, {
          default: (0, import_vue3.withCtx)(() => [
            $props.text ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
              "u-text",
              {
                key: 0,
                class: (0, import_vue3.normalizeClass)(["fui-button__text", { "fui-btn__gray-color": !$props.background && !$props.disabledBackground && !$props.plain && $props.type === "gray" && $props.color === "#fff", "fui-text__bold": $props.bold }]),
                style: (0, import_vue3.normalizeStyle)({ fontSize: $options.getSize, lineHeight: $options.getSize, color: $options.getColor })
              },
              (0, import_vue3.toDisplayString)($props.text),
              7
              /* TEXT, CLASS, STYLE */
            )) : (0, import_vue3.createCommentVNode)("v-if", true),
            (0, import_vue3.renderSlot)(_ctx.$slots, "default")
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["class", "style", "loading", "form-type", "open-type", "app-parameter", "onGetuserinfo", "onGetphonenumber", "onContact", "onError", "onOpensetting", "onChooseavatar", "onLaunchapp", "disabled", "scope", "onClick"])
      ],
      38
      /* CLASS, STYLE, HYDRATE_EVENTS */
    );
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-button/fui-button.vue"]]);

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/form/input/input.js
  var _style_0$1 = { "fui-input__wrap": { "": { "flexDirection": "row", "flex": 1, "alignItems": "center", "position": "relative", "borderWidth": 0 } }, "fui-input__border-top": { "": { "position": "absolute", "top": 0, "height": 0.5, "zIndex": -1 } }, "fui-input__border-bottom": { "": { "position": "absolute", "bottom": 0, "height": 0.5, "zIndex": -1 } }, "fui-input__required": { "": { "position": "absolute", "left": "12rpx", "top": "28rpx", "bottom": "28rpx", "alignItems": "center", "justifyContent": "center" } }, "fui-form__asterisk-text": { "": { "fontSize": "32rpx", "height": "32rpx" } }, "fui-input__label": { "": { "paddingRight": "12rpx" } }, "fui-input__self-wrap": { "": { "flex": 1, "flexDirection": "row", "position": "relative" } }, "fui-input__cover": { "": { "position": "absolute", "left": 0, "right": 0, "top": 0, "bottom": 0 } }, "fui-input__self": { "": { "flex": 1, "paddingRight": "12rpx", "backgroundColor": "rgba(0,0,0,0)" } }, "fui-input__clear-wrap": { "": { "width": "32rpx", "height": "32rpx", "transform": "rotate(45deg) scale(1.1)", "position": "relative", "borderRadius": "32rpx" } }, "fui-input__clear": { "": { "width": "32rpx", "height": "32rpx", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "position": "absolute", "left": 0, "top": 0, "transform": "scale(0.5) translateZ(0)" } }, "fui-input__clear-a": { "": { "width": "32rpx", "borderWidth": "2rpx", "borderStyle": "solid", "borderColor": "#ffffff", "backgroundColor": "#ffffff" } }, "fui-input__clear-b": { "": { "height": "32rpx", "borderWidth": "2rpx", "borderStyle": "solid", "borderColor": "#ffffff", "backgroundColor": "#ffffff" } }, "fui-input__placeholder": { "": { "color": "#cccccc", "fontSize": "32rpx" } }, "fui-input__border-nvue": { "": { "borderWidth": 0.5, "borderStyle": "solid" } }, "fui-input__text-right": { "": { "textAlign": "right" } } };
  var _sfc_main$1 = {
    name: "fui-input",
    emits: ["input", "update:modelValue", "focus", "blur", "confirm", "click", "keyboardheightchange"],
    props: {
      //是否为必填项
      required: {
        type: Boolean,
        default: false
      },
      requiredColor: {
        type: String,
        default: ""
      },
      //左侧标题
      label: {
        type: String,
        default: ""
      },
      //标题字体大小
      labelSize: {
        type: [Number, String],
        default: 0
      },
      labelColor: {
        type: String,
        default: "#333"
      },
      //label 最小宽度 rpx
      labelWidth: {
        type: [Number, String],
        default: 140
      },
      clearable: {
        type: Boolean,
        default: false
      },
      clearColor: {
        type: String,
        default: "#CCCCCC"
      },
      //获取焦点
      focus: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: ""
      },
      placeholderStyle: {
        type: String,
        default: ""
      },
      //输入框名称
      name: {
        type: String,
        default: ""
      },
      //输入框值 vue2
      value: {
        type: [Number, String],
        default: ""
      },
      //输入框值
      modelValue: {
        type: [Number, String],
        default: ""
      },
      //vue3
      modelModifiers: {
        default: () => ({})
      },
      //兼容写法，type为text时也做Number处理，NaN时返回原值
      number: {
        type: Boolean,
        default: false
      },
      //与官方input type属性一致
      type: {
        type: String,
        default: "text"
      },
      password: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: [Number, String],
        default: 140
      },
      min: {
        type: [Number, String],
        default: "NaN"
      },
      max: {
        type: [Number, String],
        default: "NaN"
      },
      cursorSpacing: {
        type: Number,
        default: 0
      },
      confirmType: {
        type: String,
        default: "done"
      },
      confirmHold: {
        type: Boolean,
        default: false
      },
      cursor: {
        type: Number,
        default: -1
      },
      selectionStart: {
        type: Number,
        default: -1
      },
      selectionEnd: {
        type: Number,
        default: -1
      },
      adjustPosition: {
        type: Boolean,
        default: true
      },
      holdKeyboard: {
        type: Boolean,
        default: false
      },
      autoBlur: {
        type: Boolean,
        default: false
      },
      alwaysEmbed: {
        type: Boolean,
        default: false
      },
      size: {
        type: [Number, String],
        default: 0
      },
      color: {
        type: String,
        default: "#333"
      },
      inputBorder: {
        type: Boolean,
        default: false
      },
      isFillet: {
        type: Boolean,
        default: false
      },
      radius: {
        type: [Number, String],
        default: 8
      },
      borderTop: {
        type: Boolean,
        default: false
      },
      topLeft: {
        type: [Number, String],
        default: 0
      },
      topRight: {
        type: [Number, String],
        default: 0
      },
      borderBottom: {
        type: Boolean,
        default: true
      },
      bottomLeft: {
        type: [Number, String],
        default: 32
      },
      bottomRight: {
        type: [Number, String],
        default: 0
      },
      borderColor: {
        type: String,
        default: "#EEEEEE"
      },
      trim: {
        type: Boolean,
        default: true
      },
      textRight: {
        type: Boolean,
        default: false
      },
      padding: {
        type: Array,
        default() {
          return ["28rpx", "32rpx"];
        }
      },
      backgroundColor: {
        type: String,
        default: "#FFFFFF"
      },
      marginTop: {
        type: [Number, String],
        default: 0
      }
    },
    data() {
      return {
        placeholderStyl: "",
        focused: false,
        val: ""
      };
    },
    computed: {
      getRadius() {
        let radius = this.radius + "rpx";
        if (this.isFillet) {
          radius = "120px";
        }
        return radius;
      },
      getBorderRadius() {
        let radius = Number(this.radius) * 2 + "rpx";
        if (this.isFillet) {
          radius = "240px";
        }
        return radius;
      },
      getSize() {
        const size = uni.$fui && uni.$fui.fuiInput && uni.$fui.fuiInput.size || 32;
        return `${this.size || size}rpx`;
      },
      getLabelSize() {
        const labelSize = uni.$fui && uni.$fui.fuiInput && uni.$fui.fuiInput.labelSize || 32;
        return `${this.labelSize || labelSize}rpx`;
      },
      dangerColor() {
        const app = uni && uni.$fui && uni.$fui.color;
        return app && app.danger || "#FF2B2B";
      }
    },
    watch: {
      focus(val) {
        this.$nextTick(() => {
          setTimeout(() => {
            this.focused = val;
          }, 20);
        });
      },
      focused(val) {
        if (!this.$refs.fuiInput)
          return;
        this.$nextTick(() => {
          setTimeout(() => {
            if (val) {
              this.$refs.fuiInput.focus();
            } else {
              this.$refs.fuiInput.blur();
            }
          }, 50);
        });
      },
      placeholderStyle() {
        this.fieldPlaceholderStyle();
      },
      modelValue(newVal) {
        this.val = newVal;
      },
      value(newVal) {
        this.val = newVal;
      }
    },
    created() {
      if (this.value && !this.modelValue) {
        this.val = this.value;
      } else {
        this.val = this.modelValue;
      }
      this.fieldPlaceholderStyle();
    },
    mounted() {
      this.$nextTick(() => {
        setTimeout(() => {
          this.focused = this.focus;
        }, 300);
      });
    },
    methods: {
      fieldPlaceholderStyle() {
        if (this.placeholderStyle) {
          this.placeholderStyl = this.placeholderStyle;
        } else {
          const _size = uni.$fui && uni.$fui.fuiInput && uni.$fui.fuiInput.size || 32;
          const size = uni.upx2px(this.size || _size);
          this.placeholderStyl = `fontSize:${size}px;`;
        }
      },
      onInput(event) {
        let value = event.detail.value;
        if (this.trim)
          value = this.trimStr(value);
        this.val = value;
        const currentVal = Number(value);
        if ((this.modelModifiers.number || this.number || this.type === "digit" || this.type === "number") && !isNaN(currentVal) && Number.isSafeInteger(currentVal)) {
          let eVal = this.type === "digit" ? value : currentVal;
          if (typeof currentVal === "number") {
            const min = Number(this.min);
            const max = Number(this.max);
            if (typeof min === "number" && currentVal < min) {
              eVal = min;
            } else if (typeof max === "number" && max < currentVal) {
              eVal = max;
            }
          }
          value = isNaN(eVal) ? value : eVal;
        }
        this.$nextTick(() => {
          event.detail.value !== "" && (this.val = String(value));
        });
        const inputValue = event.detail.value !== "" ? value : "";
        this.$emit("input", inputValue);
        this.$emit("update:modelValue", inputValue);
      },
      onFocus(event) {
        this.$emit("focus", event);
      },
      onBlur(event) {
        this.$emit("blur", event);
      },
      onConfirm(e) {
        this.$emit("confirm", e);
      },
      onClear(event) {
        if (this.disabled && !this.readonly)
          return;
        uni.hideKeyboard();
        this.val = "";
        this.$emit("input", "");
        this.$emit("update:modelValue", "");
      },
      fieldClick() {
        this.$emit("click", {
          name: this.name,
          target: "wrap"
        });
      },
      /**
       * 在安卓nvue上，事件无法冒泡 
       * 外层容器点击事件无法触发，需要单独处理
       */
      fieldClickAndroid(e) {
      },
      getParent(name = "fui-form-item") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      onKeyboardheightchange(e) {
        this.$emit("keyboardheightchange", e.detail);
      },
      trimStr(str) {
        return str.replace(/^\s+|\s+$/g, "");
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
      "view",
      {
        class: (0, import_vue4.normalizeClass)(["fui-input__wrap", { "fui-input__border-nvue": $props.inputBorder }]),
        style: (0, import_vue4.normalizeStyle)({ paddingTop: $props.padding[0] || 0, paddingRight: $props.padding[1] || 0, paddingBottom: $props.padding[2] || $props.padding[0] || 0, paddingLeft: $props.padding[3] || $props.padding[1] || 0, background: $props.backgroundColor, marginTop: $props.marginTop + "rpx", borderRadius: $options.getRadius, borderColor: $props.borderColor }),
        onClick: _cache[7] || (_cache[7] = (...args) => $options.fieldClick && $options.fieldClick(...args)),
        renderWhole: true
      },
      [
        $props.borderTop && !$props.inputBorder ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
          "view",
          {
            key: 0,
            style: (0, import_vue4.normalizeStyle)({ background: $props.borderColor, left: $props.topLeft + "rpx", right: $props.topRight + "rpx" }),
            class: (0, import_vue4.normalizeClass)(["fui-input__border-top", { "fui-input__background": !$props.borderColor }])
          },
          null,
          6
          /* CLASS, STYLE */
        )) : (0, import_vue4.createCommentVNode)("v-if", true),
        $props.required ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("view", {
          key: 1,
          class: "fui-input__required"
        }, [
          (0, import_vue4.createElementVNode)(
            "u-text",
            {
              style: (0, import_vue4.normalizeStyle)({ color: $props.requiredColor || $options.dangerColor }),
              class: "fui-form__asterisk-text"
            },
            "*",
            4
            /* STYLE */
          )
        ])) : (0, import_vue4.createCommentVNode)("v-if", true),
        $props.label ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
          "view",
          {
            key: 2,
            class: "fui-input__label",
            style: (0, import_vue4.normalizeStyle)({ minWidth: $props.labelWidth + "rpx" })
          },
          [
            (0, import_vue4.createElementVNode)(
              "u-text",
              {
                style: (0, import_vue4.normalizeStyle)({ fontSize: $options.getLabelSize, color: $props.labelColor })
              },
              (0, import_vue4.toDisplayString)($props.label),
              5
              /* TEXT, STYLE */
            )
          ],
          4
          /* STYLE */
        )) : (0, import_vue4.createCommentVNode)("v-if", true),
        (0, import_vue4.renderSlot)(_ctx.$slots, "left"),
        (0, import_vue4.createElementVNode)("view", { class: "fui-input__self-wrap" }, [
          (0, import_vue4.createElementVNode)("u-input", {
            ref: "fuiInput",
            class: (0, import_vue4.normalizeClass)(["fui-input__self", { "fui-input__text-right": $props.textRight }]),
            style: (0, import_vue4.normalizeStyle)({ fontSize: $options.getSize, color: $props.color }),
            placeholderClass: "fui-input__placeholder",
            type: $props.type,
            name: $props.name,
            value: $data.val,
            placeholder: $props.placeholder,
            password: $props.password || $props.type === "password",
            placeholderStyle: $data.placeholderStyl,
            disabled: $props.disabled || $props.readonly,
            cursorSpacing: $props.cursorSpacing,
            maxlength: $props.maxlength,
            focus: $data.focused,
            confirmType: $props.confirmType,
            confirmHold: $props.confirmHold,
            cursor: $props.cursor,
            selectionStart: $props.selectionStart,
            selectionEnd: $props.selectionEnd,
            adjustPosition: $props.adjustPosition,
            holdKeyboard: $props.holdKeyboard,
            autoBlur: $props.autoBlur,
            enableNative: false,
            alwaysEmbed: $props.alwaysEmbed,
            onFocus: _cache[0] || (_cache[0] = (...args) => $options.onFocus && $options.onFocus(...args)),
            onBlur: _cache[1] || (_cache[1] = (...args) => $options.onBlur && $options.onBlur(...args)),
            onInput: _cache[2] || (_cache[2] = (...args) => $options.onInput && $options.onInput(...args)),
            onConfirm: _cache[3] || (_cache[3] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
            onKeyboardheightchange: _cache[4] || (_cache[4] = (...args) => $options.onKeyboardheightchange && $options.onKeyboardheightchange(...args))
          }, null, 46, ["type", "name", "value", "placeholder", "password", "placeholderStyle", "disabled", "cursorSpacing", "maxlength", "focus", "confirmType", "confirmHold", "cursor", "selectionStart", "selectionEnd", "adjustPosition", "holdKeyboard", "autoBlur", "alwaysEmbed"]),
          $props.disabled || $props.readonly ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("view", {
            key: 0,
            class: "fui-input__cover",
            onClick: _cache[5] || (_cache[5] = (...args) => $options.fieldClickAndroid && $options.fieldClickAndroid(...args))
          })) : (0, import_vue4.createCommentVNode)("v-if", true)
        ]),
        $props.clearable && $data.val != "" ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
          "view",
          {
            key: 3,
            class: "fui-input__clear-wrap",
            style: (0, import_vue4.normalizeStyle)({ background: $props.clearColor }),
            onClick: _cache[6] || (_cache[6] = (0, import_vue4.withModifiers)((...args) => $options.onClear && $options.onClear(...args), ["stop"]))
          },
          [
            (0, import_vue4.createElementVNode)("view", { class: "fui-input__clear" }, [
              (0, import_vue4.createElementVNode)("view", { class: "fui-input__clear-a" })
            ]),
            (0, import_vue4.createElementVNode)("view", { class: "fui-input__clear" }, [
              (0, import_vue4.createElementVNode)("view", { class: "fui-input__clear-b" })
            ])
          ],
          4
          /* STYLE */
        )) : (0, import_vue4.createCommentVNode)("v-if", true),
        (0, import_vue4.renderSlot)(_ctx.$slots, "default"),
        $props.borderBottom && !$props.inputBorder ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
          "view",
          {
            key: 4,
            style: (0, import_vue4.normalizeStyle)({ background: $props.borderColor, left: $props.bottomLeft + "rpx", right: $props.bottomRight + "rpx" }),
            class: (0, import_vue4.normalizeClass)(["fui-input__border-bottom", { "fui-input__background": !$props.borderColor }])
          },
          null,
          6
          /* CLASS, STYLE */
        )) : (0, import_vue4.createCommentVNode)("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  var __easycom_02 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-input/fui-input.vue"]]);
  var _style_03 = { "fui-section__title": { "": { "marginLeft": "32rpx" } }, "fui-left__icon": { "": { "paddingRight": "24rpx" } } };
  var _sfc_main3 = {
    data() {
      return {
        text: "",
        password: true
      };
    },
    watch: {
      text(val) {
        formatAppLog("log", "at pages/component/form/input/input.nvue:72", val);
      }
    },
    methods: {
      input(e) {
        formatAppLog("log", "at pages/component/form/input/input.nvue:77", e);
      },
      change() {
        this.password = !this.password;
      }
    }
  };
  function _sfc_render3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_fui_input = resolveEasycom((0, import_vue4.resolveDynamicComponent)("fui-input"), __easycom_02);
    const _component_fui_icon = resolveEasycom((0, import_vue4.resolveDynamicComponent)("fui-icon"), __easycom_1);
    const _component_fui_button = resolveEasycom((0, import_vue4.resolveDynamicComponent)("fui-button"), __easycom_0);
    return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue4.createElementVNode)("view", { class: "fui-wrap" }, [
        (0, import_vue4.createElementVNode)("view", { class: "fui-page__hd" }, [
          (0, import_vue4.createElementVNode)("u-text", { class: "fui-page__title" }, "Input"),
          (0, import_vue4.createElementVNode)("u-text", { class: "fui-page__desc" }, "Input \u8F93\u5165\u6846\uFF0C\u8BE5\u7EC4\u4EF6\u662F\u5BF9\u539F\u751Finput\u7EC4\u4EF6\u7684\u589E\u5F3A\uFF0C\u5185\u7F6E\u4E86\u5E38\u7528\u5E03\u5C40\u6837\u5F0F\uFF0C\u540C\u65F6\u5305\u542B input \u6240\u6709\u529F\u80FD\u3002")
        ]),
        (0, import_vue4.createElementVNode)("view", { class: "fui-page__bd" }, [
          (0, import_vue4.createElementVNode)("u-text", { class: "fui-section__title fui-mtop--0" }, "\u57FA\u672C\u4F7F\u7528"),
          (0, import_vue4.createVNode)(_component_fui_input, {
            borderTop: "",
            placeholder: "\u8BF7\u8F93\u5165\u7528\u6237\u540D",
            onInput: $options.input
          }, null, 8, ["onInput"]),
          (0, import_vue4.createVNode)(_component_fui_input, {
            bottomLeft: 0,
            placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801",
            maxlength: "11"
          }),
          (0, import_vue4.createElementVNode)("u-text", { class: "fui-section__title" }, "\u5E26\u6807\u9898"),
          (0, import_vue4.createVNode)(_component_fui_input, {
            label: "\u6807\u9898",
            borderTop: "",
            placeholder: "\u8FD9\u662F\u4E00\u4E2A\u8F93\u5165\u6846"
          }),
          (0, import_vue4.createVNode)(_component_fui_input, {
            label: "\u6807\u9898\u6587\u5B57",
            bottomLeft: 0,
            placeholder: "\u8BF7\u8F93\u5165\u6587\u672C"
          }),
          (0, import_vue4.createElementVNode)("u-text", { class: "fui-section__title" }, "\u5BC6\u7801\u6846"),
          (0, import_vue4.createVNode)(_component_fui_input, {
            borderTop: "",
            padding: ["20rpx", "32rpx"],
            placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801",
            password: $data.password,
            onInput: $options.input
          }, {
            default: (0, import_vue4.withCtx)(() => [
              (0, import_vue4.createVNode)(_component_fui_icon, {
                name: $data.password ? "invisible" : "visible",
                color: "#B2B2B2",
                size: 50,
                onClick: $options.change
              }, null, 8, ["name", "onClick"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["password", "onInput"]),
          (0, import_vue4.createElementVNode)("u-text", { class: "fui-section__title" }, "\u5E26\u6E05\u9664\u6309\u94AE\u3001\u53CC\u5411\u7ED1\u5B9A"),
          (0, import_vue4.createVNode)(_component_fui_input, {
            label: "\u6807\u9898",
            bottomLeft: 0,
            borderTop: "",
            placeholder: "\u8BF7\u8F93\u5165\u6587\u672C",
            clearable: "",
            modelValue: $data.text,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.text = $event)
          }, null, 8, ["modelValue"]),
          (0, import_vue4.createElementVNode)("u-text", { class: "fui-section__title" }, "\u663E\u793A\u8FB9\u6846/\u8BBE\u7F6E\u5706\u89D2"),
          (0, import_vue4.createElementVNode)("view", { class: "fui-page__spacing" }, [
            (0, import_vue4.createVNode)(_component_fui_input, {
              label: "\u6807\u9898",
              inputBorder: "",
              placeholder: "\u8BF7\u8F93\u5165\u6587\u672C"
            }),
            (0, import_vue4.createVNode)(_component_fui_input, {
              marginTop: 24,
              isFillet: "",
              inputBorder: "",
              placeholder: "\u8BF7\u8F93\u5165\u6587\u672C"
            }),
            (0, import_vue4.createVNode)(_component_fui_input, {
              marginTop: 24,
              radius: 24,
              "border-color": "#FFB703",
              inputBorder: "",
              placeholder: "\u8BF7\u8F93\u5165\u6587\u672C"
            })
          ]),
          (0, import_vue4.createElementVNode)("u-text", { class: "fui-section__title" }, "\u5FC5\u586B\u9879"),
          (0, import_vue4.createVNode)(_component_fui_input, {
            required: "",
            label: "\u6807\u9898",
            borderTop: "",
            placeholder: "\u8BF7\u8F93\u5165\u6587\u672C"
          }),
          (0, import_vue4.createVNode)(_component_fui_input, {
            required: "",
            label: "\u6807\u9898\u6587\u5B57",
            bottomLeft: 0,
            placeholder: "\u8BF7\u8F93\u5165\u6587\u672C\u5185\u5BB9"
          }),
          (0, import_vue4.createElementVNode)("u-text", { class: "fui-section__title" }, "\u8F93\u5165\u6587\u672C\u53F3\u5BF9\u9F50"),
          (0, import_vue4.createVNode)(_component_fui_input, {
            textRight: "",
            label: "\u8EAB\u9AD8",
            borderTop: "",
            placeholder: "\u8BF7\u8F93\u5165\u8EAB\u9AD8"
          }, {
            default: (0, import_vue4.withCtx)(() => [
              (0, import_vue4.createElementVNode)("u-text", null, "cm")
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue4.createVNode)(_component_fui_input, {
            textRight: "",
            label: "\u4F53\u91CD",
            bottomLeft: 0,
            placeholder: "\u8BF7\u8F93\u5165\u4F53\u91CD"
          }, {
            default: (0, import_vue4.withCtx)(() => [
              (0, import_vue4.createElementVNode)("u-text", null, "kg")
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue4.createElementVNode)("u-text", { class: "fui-section__title" }, "\u7981\u7528\u72B6\u6001"),
          (0, import_vue4.createVNode)(_component_fui_input, {
            label: "\u6807\u9898",
            bottomLeft: 0,
            borderTop: "",
            placeholder: "\u8FD9\u662F\u4E00\u4E2A\u88AB\u7981\u7528\u7684\u8F93\u5165\u6846",
            disabled: ""
          }),
          (0, import_vue4.createElementVNode)("u-text", { class: "fui-section__title" }, "\u53F3\u4FA7\u52A0\u6309\u94AE"),
          (0, import_vue4.createVNode)(_component_fui_input, {
            padding: ["20rpx", "32rpx"],
            label: "\u9A8C\u8BC1\u7801",
            bottomLeft: 0,
            placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u9A8C\u8BC1\u7801"
          }, {
            default: (0, import_vue4.withCtx)(() => [
              (0, import_vue4.createVNode)(_component_fui_button, {
                type: "gray",
                bold: "",
                width: "200rpx",
                height: "64rpx",
                size: 28,
                text: "\u83B7\u53D6\u9A8C\u8BC1\u7801"
              })
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue4.createElementVNode)("u-text", { class: "fui-section__title" }, "\u5DE6\u4FA7\u52A0\u56FE\u6807"),
          (0, import_vue4.createVNode)(_component_fui_input, { placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7" }, {
            left: (0, import_vue4.withCtx)(() => [
              (0, import_vue4.createElementVNode)("view", { class: "fui-left__icon" }, [
                (0, import_vue4.createVNode)(_component_fui_icon, {
                  name: "mobile",
                  color: "#333",
                  size: 48
                })
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue4.createVNode)(_component_fui_input, {
            padding: ["20rpx", "32rpx"],
            placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
            bottomLeft: 0
          }, {
            left: (0, import_vue4.withCtx)(() => [
              (0, import_vue4.createElementVNode)("view", { class: "fui-left__icon" }, [
                (0, import_vue4.createVNode)(_component_fui_icon, {
                  name: "captcha",
                  size: 48
                })
              ])
            ]),
            default: (0, import_vue4.withCtx)(() => [
              (0, import_vue4.createVNode)(_component_fui_button, {
                type: "gray",
                bold: "",
                width: "200rpx",
                height: "64rpx",
                size: 28,
                text: "\u83B7\u53D6\u9A8C\u8BC1\u7801"
              })
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ])
    ]);
  }
  var input = /* @__PURE__ */ _export_sfc(_sfc_main3, [["render", _sfc_render3], ["styles", [_style_03]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/form/input/input.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/component/form/input/input";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    input.mpType = "page";
    const app = Vue.createPageApp(input, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...input.styles || []]));
    app.mount("#root");
  }
})();
