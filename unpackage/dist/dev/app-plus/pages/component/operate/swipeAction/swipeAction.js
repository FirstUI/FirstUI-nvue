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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/fui-text.js
  var import_vue2 = __toESM(require_vue());
  var _style_0 = { "fui-text__wrap": { "": { "alignItems": "center", "flexDirection": "row" } }, "fui-text__active": { "": { "opacity:active": 0.5 } }, "fui-text__nvue": { "": { "flex": 1 } }, "fui-text__center": { "": { "justifyContent": "center" } }, "fui-text__right": { "": { "justifyContent": "flex-end" } } };
  var _sfc_main = {
    name: "fui-text",
    emits: ["click"],
    props: {
      //样式类型：primary，success， warning，danger，purple，gray，black
      type: {
        type: String,
        default: "black"
      },
      text: {
        type: [Number, String],
        default: ""
      },
      size: {
        type: [Number, String],
        default: 0
      },
      unit: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: ""
      },
      fontWeight: {
        type: [Number, String],
        default: 400
      },
      //left、center、right
      align: {
        type: String,
        default: "left"
      },
      //none、 underline、line-through 
      decoration: {
        type: String,
        default: "none"
      },
      //是否将行高设置与字体大小一致
      lineHeight: {
        type: Boolean,
        default: false
      },
      padding: {
        type: Array,
        default() {
          return ["0", "0"];
        }
      },
      block: {
        type: Boolean,
        default: false
      },
      //文本类型：text、mobile、amount、name
      textType: {
        type: String,
        default: "text"
      },
      //是否格式化，仅mobile、amount时有效
      format: {
        type: Boolean,
        default: false
      },
      call: {
        type: Boolean,
        default: false
      },
      //文本是否可选：nvue不支持，加此属性导致事件无法冒泡
      selectable: {
        type: Boolean,
        default: false
      },
      //文本是否可选：微信小程序
      userSelect: {
        type: Boolean,
        default: false
      },
      //是否解码：App、H5、微信小程序
      decode: {
        type: Boolean,
        default: false
      },
      //是否有点击效果
      highlight: {
        type: Boolean,
        default: false
      },
      disable: {
        type: Boolean,
        default: false
      },
      unShrink: {
        type: Boolean,
        default: false
      },
      param: {
        type: [Number, String],
        default: ""
      }
    },
    computed: {
      getSize() {
        const size = uni && uni.$fui && uni.$fui.fuiText && uni.$fui.fuiText.size || 32;
        const unit = uni && uni.$fui && uni.$fui.fuiText && uni.$fui.fuiText.unit || "rpx";
        return (this.size || size) + (this.unit || unit);
      },
      getColor() {
        let color = this.color || "";
        if (!color && this.type) {
          const app = uni && uni.$fui && uni.$fui.color;
          const text = uni && uni.$fui && uni.$fui.fuiText;
          color = {
            primary: app && app.primary || "#465CFF",
            success: app && app.success || "#09BE4F",
            warning: app && app.warning || "#FFB703",
            danger: app && app.danger || "#FF2B2B",
            purple: app && app.purple || "#6831FF",
            gray: "#B2B2B2",
            black: text && text.color || "#181818"
          }[this.type];
        }
        return color;
      }
    },
    methods: {
      getText(text, textType, format) {
        let _text = text;
        if (format) {
          if (textType === "mobile") {
            _text = this.numberFormatter(text);
          } else if (textType === "amount") {
            _text = this.moneyFormatter(text);
          } else if (textType === "name") {
            _text = this.nameFormatter(text);
          }
        }
        return _text;
      },
      numberFormatter(num) {
        return num.length === 11 ? num.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2") : num;
      },
      moneyFormatter(money) {
        return parseFloat(money).toFixed(2).toString().split("").reverse().join("").replace(/(\d{3})/g, "$1,").replace(
          /\,$/,
          ""
        ).split("").reverse().join("");
      },
      trimAll(value) {
        return value.toString().replace(/\s+/g, "");
      },
      nameFormatter(name) {
        let _name = this.trimAll(name || "");
        if (_name && _name.length >= 2) {
          const arr = _name.split("");
          _name = arr[0] + "*";
          if (arr.length > 2) {
            _name = _name + arr[arr.length - 1];
          }
        }
        return _name;
      },
      handleTap() {
        if (this.disable)
          return;
        this.$emit("click", {
          text: this.text,
          param: this.param
        });
        if (this.call) {
          uni.makePhoneCall({
            phoneNumber: this.text
          });
        }
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "view",
      {
        class: (0, import_vue2.normalizeClass)(["fui-text__wrap", [$props.block ? "fui-text__block" : "fui-text__inline", "fui-text__" + $props.align, $props.highlight && !$props.disable ? "fui-text__active" : ""]]),
        style: (0, import_vue2.normalizeStyle)({ textAlign: $props.align, paddingTop: $props.padding[0] || 0, paddingRight: $props.padding[1] || 0, paddingBottom: $props.padding[2] || $props.padding[0] || 0, paddingLeft: $props.padding[3] || $props.padding[1] || 0 }),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.handleTap && $options.handleTap(...args)),
        renderWhole: true
      },
      [
        (0, import_vue2.renderSlot)(_ctx.$slots, "default"),
        (0, import_vue2.createElementVNode)("view", { class: "fui-text__nvue" }, [
          (0, import_vue2.createElementVNode)("u-text", {
            class: (0, import_vue2.normalizeClass)(["fui-text__content", [$props.color ? "" : "fui-text__" + $props.type, $props.unShrink ? "fui-text__unshrink" : ""]]),
            style: (0, import_vue2.normalizeStyle)({ color: $options.getColor, fontSize: $options.getSize, lineHeight: $props.lineHeight ? $options.getSize : "auto", textAlign: $props.align, textDecoration: $props.decoration, fontWeight: $props.fontWeight }),
            userSelect: $props.userSelect,
            decode: $props.decode
          }, (0, import_vue2.toDisplayString)($options.getText($props.text, $props.textType, $props.format)), 15, ["userSelect", "decode"])
        ]),
        (0, import_vue2.renderSlot)(_ctx.$slots, "right")
      ],
      6
      /* CLASS, STYLE */
    );
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-text/fui-text.vue"]]);

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/operate/swipeAction/swipeAction.js
  var import_vue5 = __toESM(require_vue());

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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/fui-icon.js
  var import_vue4 = __toESM(require_vue());
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
  var _style_03 = { "fui-icon": { "": { "fontFamily": "fuiFont", "textDecoration": "none", "textAlign": "center" } } };
  var domModule = weex.requireModule("dom");
  domModule.addRule("fontFace", {
    "fontFamily": "fuiFont",
    "src": "url('" + fuiicons + "')"
  });
  var _sfc_main3 = {
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
  function _sfc_render3(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
      "u-text",
      {
        style: (0, import_vue4.normalizeStyle)({ color: $props.primary && (!$props.color || $props.color === true) ? $options.primaryColor : $options.getColor, fontSize: $options.getSize, lineHeight: $options.getSize, fontWeight: $props.fontWeight }),
        class: (0, import_vue4.normalizeClass)(["fui-icon", [$props.customPrefix]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick && $options.handleClick(...args))
      },
      (0, import_vue4.toDisplayString)($props.customPrefix ? $props.name : $data.icons[$props.name]),
      7
      /* TEXT, CLASS, STYLE */
    );
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main3, [["render", _sfc_render3], ["styles", [_style_03]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-icon/fui-icon.vue"]]);

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/operate/swipeAction/swipeAction.js
  var mpwxs = {};
  var mpjs = {};
  var BindingX = requireNativePlugin("bindingx");
  var dom = requireNativePlugin("dom");
  var animation = requireNativePlugin("animation");
  var bindingx = {
    data() {
      return {};
    },
    watch: {
      show(newVal) {
        if (this.stop)
          return;
        this.stop = true;
        if (newVal) {
          this.open(newVal);
        } else {
          this.close();
        }
      },
      buttons(newVal) {
        this.init();
      }
    },
    created() {
      this.group = this.getParent();
      if (this.group.children !== void 0) {
        this.group.children.push(this);
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.box = this.getEl(this.$refs["fui_swipea_wrap"]);
        this.selector = this.getEl(this.$refs["fui_swipea_content"]);
        this.rightButton = this.getEl(this.$refs["fui_swipea_buttons"]);
      });
      this.init();
    },
    methods: {
      init() {
        this.$nextTick(() => {
          this.x = 0;
          this.button = {
            show: false
          };
          setTimeout(() => {
            this.getSelectorQuery();
          }, 200);
        });
      },
      handleClick(e, index, item) {
        e.stopPropagation();
        this.$emit("click", {
          item,
          index,
          param: this.param
        });
      },
      touchstart(e) {
        if (this.disabled)
          return;
        if (this.stop)
          return;
        this.stop = true;
        if (this.autoClose) {
          this.group && this.group.closeAuto(this);
        }
        const rightWidth = this.button.right.width || 0;
        let expression = this.range(this.x, -rightWidth, 0);
        let rightExpression = this.range(this.x + rightWidth, 0, rightWidth);
        this.eventpan = BindingX.bind({
          anchor: this.box,
          eventType: "pan",
          props: [{
            element: this.selector,
            property: "transform.translateX",
            expression
          }, {
            element: this.rightButton,
            property: "transform.translateX",
            expression: rightExpression
          }]
        }, (e2) => {
          if (e2.state === "end") {
            this.x = e2.deltaX + this.x;
            this.isclick = true;
            this.bindTiming(e2.deltaX);
          }
        });
      },
      touchend(e) {
        if (this.isopen && !this.isclick) {
          this.open(false);
        }
      },
      bindTiming(x) {
        const left = this.x;
        this.button.right.width || 0;
        const threshold = Number(this.threshold);
        if (!this.isopen) {
          if (left < -threshold) {
            this.open(true);
          } else {
            this.open(false);
          }
        } else {
          if (x < threshold && x > 0 || x < -threshold) {
            this.open(true);
          } else {
            this.open(false);
          }
        }
      },
      range(num, mix, max) {
        return `min(max(x+${num}, ${mix}), ${max})`;
      },
      open(type) {
        this.animation(type);
      },
      close() {
        this.animation(false);
      },
      animation(type) {
        const rightWidth = this.button.right.width || 0;
        if (this.eventpan && this.eventpan.token) {
          BindingX.unbind({
            token: this.eventpan.token,
            eventType: "pan"
          });
        }
        if (type) {
          Promise.all([
            this.move(this.selector, -rightWidth),
            this.move(this.rightButton, 0)
          ]).then(() => {
            this.setEmit(-rightWidth, type);
          });
        } else {
          Promise.all([
            this.move(this.selector, 0),
            this.move(this.rightButton, rightWidth)
          ]).then(() => {
            this.setEmit(0, type);
          });
        }
      },
      setEmit(x, type) {
        const rightWidth = this.button.right.width;
        this.isopen = this.isopen || false;
        this.stop = false;
        this.isclick = false;
        if (this.isopen !== type && this.x !== x) {
          if (type && rightWidth > 0) {
            this.$emit("change", {
              isOpen: true,
              param: this.param
            });
          }
          if (!type) {
            this.$emit("change", {
              isOpen: false,
              param: this.param
            });
          }
        }
        this.x = x;
        this.isopen = type;
      },
      move(ref, value) {
        return new Promise((resolve, reject) => {
          animation.transition(ref, {
            styles: {
              transform: `translateX(${value})`
            },
            duration: 150,
            //ms
            timingFunction: "linear",
            needLayout: false,
            delay: 0
            //ms
          }, function(res) {
            resolve(res);
          });
        });
      },
      getEl(el) {
        return el.ref;
      },
      getSelectorQuery() {
        Promise.all([
          this.getDom()
        ]).then((data) => {
          this.open(this.show);
        });
      },
      getDom() {
        return new Promise((resolve, reject) => {
          dom.getComponentRect(this.$refs["fui_swipea_buttons"], (data) => {
            if (data) {
              this.button["right"] = data.size;
              resolve(data);
            } else {
              reject();
            }
          });
        });
      }
    }
  };
  var _style_0$1 = { "fui-swipe__action-wrap": { "": { "position": "relative" } }, "fui-swipe__action-inner": { "": { "position": "relative" } }, "fui-swipe__action-left": { "": { "flex": 1 } }, "fui-swipe__action-right": { "": { "flexDirection": "row", "position": "absolute", "top": 0, "bottom": 0, "right": 0, "transform": "translateX(100%)" } }, "fui-swipe__action-btn": { "": { "flex": 1, "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "paddingTop": 0, "paddingRight": "48rpx", "paddingBottom": 0, "paddingLeft": "48rpx" } }, "fui-swipe__action-ani": { "": { "transitionProperty": "transform", "transitionDuration": 300, "transitionTimingFunction": "cubic-bezier(0.165,0.84,0.44,1)" } }, "@TRANSITION": { "fui-swipe__action-ani": { "property": "transform", "duration": 300, "timingFunction": "cubic-bezier(0.165,0.84,0.44,1)" } } };
  var dangerColor = uni && uni.$fui && uni.$fui.color && uni.$fui.color.danger || "#FF2B2B";
  var _sfc_main$2 = {
    name: "fui-swipe-action",
    mixins: [mpwxs, mpjs, bindingx],
    emits: ["click", "change"],
    props: {
      buttons: {
        type: Array,
        default() {
          return [{
            text: "\u5220\u9664",
            background: dangerColor
          }];
        }
      },
      size: {
        type: [Number, String],
        default: 32
      },
      color: {
        type: String,
        default: "#fff"
      },
      show: {
        type: Boolean,
        default: false
      },
      threshold: {
        type: [Number, String],
        default: 30
      },
      disabled: {
        type: Boolean,
        default: false
      },
      autoClose: {
        type: Boolean,
        default: true
      },
      //1.9.9+
      marginTop: {
        type: [Number, String],
        default: 0
      },
      //1.9.9+
      marginBottom: {
        type: [Number, String],
        default: 0
      },
      param: {
        type: [Number, String],
        default: 0
      }
    },
    beforeUnmount() {
      this.__beforeUnmount = true;
      this.unInstall();
    },
    methods: {
      unInstall() {
        if (this.group) {
          this.group.children.forEach((item, index) => {
            if (item === this) {
              this.group.children.splice(index, 1);
            }
          });
        }
      },
      //获取父元素实例
      getParent(name = "fui-swipeaction-group") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
      "view",
      {
        class: "fui-swipe__action-wrap",
        style: (0, import_vue5.normalizeStyle)({ marginTop: $props.marginTop + "rpx", marginBottom: $props.marginBottom + "rpx" }),
        ref: "fui_swipea_wrap",
        onHorizontalpan: _cache[0] || (_cache[0] = (...args) => _ctx.touchstart && _ctx.touchstart(...args)),
        onTouchend: _cache[1] || (_cache[1] = (...args) => _ctx.touchend && _ctx.touchend(...args)),
        renderWhole: true
      },
      [
        (0, import_vue5.createElementVNode)(
          "view",
          {
            class: "fui-swipe__action-right",
            ref: "fui_swipea_buttons"
          },
          [
            (0, import_vue5.renderSlot)(_ctx.$slots, "buttons", {}, () => [
              ((0, import_vue5.openBlock)(true), (0, import_vue5.createElementBlock)(
                import_vue5.Fragment,
                null,
                (0, import_vue5.renderList)($props.buttons, (item, index) => {
                  return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("view", {
                    class: "fui-swipe__action-btn",
                    style: (0, import_vue5.normalizeStyle)({ background: item.background }),
                    key: index,
                    onClick: (0, import_vue5.withModifiers)(($event) => _ctx.handleClick($event, index, item), ["stop"])
                  }, [
                    (0, import_vue5.createElementVNode)(
                      "u-text",
                      {
                        class: "fui-swipe__action-text",
                        style: (0, import_vue5.normalizeStyle)({ fontSize: (item.size || $props.size) + "rpx", color: item.color || $props.color })
                      },
                      (0, import_vue5.toDisplayString)(item.text),
                      5
                      /* TEXT, STYLE */
                    )
                  ], 12, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ],
          512
          /* NEED_PATCH */
        ),
        (0, import_vue5.createElementVNode)(
          "view",
          {
            class: "fui-swipe__action-left",
            ref: "fui_swipea_content"
          },
          [
            (0, import_vue5.renderSlot)(_ctx.$slots, "default")
          ],
          512
          /* NEED_PATCH */
        )
      ],
      36
      /* STYLE, HYDRATE_EVENTS */
    );
  }
  var __easycom_22 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-swipe-action/fui-swipe-action.vue"]]);
  var _sfc_main$1 = {
    name: "fui-swipeaction-group",
    data() {
      return {};
    },
    created() {
      this.children = [];
    },
    methods: {
      reset() {
        this.children.forEach((child) => {
          child.init();
        });
      },
      close() {
        this.children.forEach((child) => {
          child.close();
        });
      },
      closeAuto(child) {
        if (this.openItem && this.openItem !== child) {
          this.openItem.close();
        }
        this.openItem = child;
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("view", { renderWhole: true }, [
      (0, import_vue5.renderSlot)(_ctx.$slots, "default")
    ]);
  }
  var __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-swipeaction-group/fui-swipeaction-group.vue"]]);
  var _style_04 = { "fui-wrap": { "": { "paddingBottom": "64rpx" } }, "fui-section__title": { "": { "marginLeft": "32rpx" } }, "fui-menu__box": { "": { "width": "160rpx", "flexDirection": "row", "alignItems": "center", "justifyContent": "center" } }, "fui-menu__btn": { "": { "width": "88rpx", "height": "88rpx", "backgroundColor": "#ffffff", "borderRadius": "48rpx", "alignItems": "center", "justifyContent": "center" } } };
  var _sfc_main4 = {
    data() {
      return {
        show: false,
        buttons: [{
          text: "\u6807\u4E3A\u672A\u8BFB",
          background: "#465CFF"
        }, {
          text: "\u5220\u9664",
          background: "#FF2B2B"
        }]
      };
    },
    onLoad() {
      setTimeout(() => {
        this.show = true;
      }, 500);
    },
    methods: {
      vip() {
        uni.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
      },
      onClick(e) {
        formatAppLog("log", "at pages/component/operate/swipeAction/swipeAction.nvue:80", e);
        uni.fui.toast(e.item.text);
      },
      change(e) {
        formatAppLog("log", "at pages/component/operate/swipeAction/swipeAction.nvue:84", e);
      }
    }
  };
  function _sfc_render4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_fui_text = resolveEasycom((0, import_vue5.resolveDynamicComponent)("fui-text"), __easycom_0);
    const _component_fui_list_cell = resolveEasycom((0, import_vue5.resolveDynamicComponent)("fui-list-cell"), __easycom_2);
    const _component_fui_swipe_action = resolveEasycom((0, import_vue5.resolveDynamicComponent)("fui-swipe-action"), __easycom_22);
    const _component_fui_icon = resolveEasycom((0, import_vue5.resolveDynamicComponent)("fui-icon"), __easycom_1);
    const _component_fui_swipeaction_group = resolveEasycom((0, import_vue5.resolveDynamicComponent)("fui-swipeaction-group"), __easycom_4);
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue5.createElementVNode)("view", { class: "fui-wrap" }, [
        (0, import_vue5.createElementVNode)("view", { class: "fui-page__hd" }, [
          (0, import_vue5.createElementVNode)("view", {
            class: "fui-page__title fui-align__center",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.vip && $options.vip(...args))
          }, [
            (0, import_vue5.createVNode)(_component_fui_text, {
              "font-weight": "600",
              size: "36",
              text: "SwipeAction"
            }),
            (0, import_vue5.createElementVNode)("u-image", {
              class: "fui-vip__icon",
              src: "/static/images/index/light/icon_member_3x.png"
            })
          ]),
          (0, import_vue5.createElementVNode)("u-text", { class: "fui-page__desc" }, "SwipeAction \u6ED1\u52A8\u83DC\u5355\uFF0C\u7528\u4E8E\u6ED1\u52A8\u64CD\u4F5C\u7684\u7EC4\u4EF6\u3002")
        ]),
        (0, import_vue5.createElementVNode)("view", { class: "fui-page__bd" }, [
          (0, import_vue5.createElementVNode)("u-text", { class: "fui-section__title fui-mtop--0" }, "\u57FA\u7840\u4F7F\u7528"),
          (0, import_vue5.createVNode)(_component_fui_swipeaction_group, null, {
            default: (0, import_vue5.withCtx)(() => [
              (0, import_vue5.createCommentVNode)("\u5FAA\u73AF\u4E2D\u533A\u5206\u53EF\u4F20\u53C2\u7D22\u5F15\u503C\uFF1AonClick($event,index) ,\u4E5F\u53EF\u4F7F\u7528param\u5C5E\u6027\u503C"),
              (0, import_vue5.createVNode)(_component_fui_swipe_action, {
                onClick: $options.onClick,
                onChange: $options.change
              }, {
                default: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.createVNode)(_component_fui_list_cell, {
                    padding: ["36rpx", "32rpx"],
                    highlight: false
                  }, {
                    default: (0, import_vue5.withCtx)(() => [
                      (0, import_vue5.createElementVNode)("u-text", null, "\u9ED8\u8BA4\u83DC\u5355\u6309\u94AE")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onClick", "onChange"]),
              (0, import_vue5.createVNode)(_component_fui_swipe_action, {
                buttons: $data.buttons,
                onClick: $options.onClick,
                onChange: $options.change
              }, {
                default: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.createVNode)(_component_fui_list_cell, {
                    padding: ["36rpx", "32rpx"],
                    highlight: false
                  }, {
                    default: (0, import_vue5.withCtx)(() => [
                      (0, import_vue5.createElementVNode)("u-text", null, "\u81EA\u5B9A\u4E49\u83DC\u5355\u6309\u94AE")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["buttons", "onClick", "onChange"]),
              (0, import_vue5.createVNode)(_component_fui_swipe_action, { buttons: $data.buttons }, {
                buttons: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.createElementVNode)("view", { class: "fui-menu__box" }, [
                    (0, import_vue5.createElementVNode)("view", { class: "fui-menu__btn" }, [
                      (0, import_vue5.createVNode)(_component_fui_icon, {
                        name: "delete",
                        size: 44
                      })
                    ])
                  ])
                ]),
                default: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.createVNode)(_component_fui_list_cell, {
                    padding: ["36rpx", "32rpx"],
                    highlight: false
                  }, {
                    default: (0, import_vue5.withCtx)(() => [
                      (0, import_vue5.createElementVNode)("u-text", null, "\u63D2\u69FD\u83DC\u5355")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["buttons"])
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue5.createElementVNode)("u-text", { class: "fui-section__title" }, "\u7981\u6B62\u6ED1\u52A8"),
          (0, import_vue5.createVNode)(_component_fui_swipeaction_group, null, {
            default: (0, import_vue5.withCtx)(() => [
              (0, import_vue5.createVNode)(_component_fui_swipe_action, { disabled: "" }, {
                default: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.createVNode)(_component_fui_list_cell, {
                    padding: ["36rpx", "32rpx"],
                    highlight: false
                  }, {
                    default: (0, import_vue5.withCtx)(() => [
                      (0, import_vue5.createElementVNode)("u-text", null, "\u4E0D\u53EF\u6ED1\u52A8")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue5.createElementVNode)("u-text", { class: "fui-section__title" }, "\u9ED8\u8BA4\u6253\u5F00"),
          (0, import_vue5.createVNode)(_component_fui_swipeaction_group, null, {
            default: (0, import_vue5.withCtx)(() => [
              (0, import_vue5.createVNode)(_component_fui_swipe_action, { show: $data.show }, {
                default: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.createVNode)(_component_fui_list_cell, {
                    padding: ["36rpx", "32rpx"],
                    highlight: false
                  }, {
                    default: (0, import_vue5.withCtx)(() => [
                      (0, import_vue5.createElementVNode)("u-text", null, "\u9ED8\u8BA4\u6253\u5F00\u72B6\u6001")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["show"])
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue5.createElementVNode)("u-text", { class: "fui-section__title" }, "\u53EF\u72EC\u7ACB\u6253\u5F00\uFF0C\u4E0D\u81EA\u52A8\u5173\u95ED"),
          (0, import_vue5.createVNode)(_component_fui_swipeaction_group, null, {
            default: (0, import_vue5.withCtx)(() => [
              (0, import_vue5.createVNode)(_component_fui_swipe_action, { autoClose: false }, {
                default: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.createVNode)(_component_fui_list_cell, {
                    padding: ["36rpx", "32rpx"],
                    highlight: false
                  }, {
                    default: (0, import_vue5.withCtx)(() => [
                      (0, import_vue5.createElementVNode)("u-text", null, "\u5DE6\u6ED1\u83DC\u5355")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue5.createVNode)(_component_fui_swipe_action, {
                autoClose: false,
                buttons: $data.buttons
              }, {
                default: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.createVNode)(_component_fui_list_cell, {
                    padding: ["36rpx", "32rpx"],
                    highlight: false
                  }, {
                    default: (0, import_vue5.withCtx)(() => [
                      (0, import_vue5.createElementVNode)("u-text", null, "\u81EA\u5B9A\u4E49\u83DC\u5355\u6309\u94AE")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["buttons"])
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ])
    ]);
  }
  var swipeAction = /* @__PURE__ */ _export_sfc(_sfc_main4, [["render", _sfc_render4], ["styles", [_style_04]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/operate/swipeAction/swipeAction.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/component/operate/swipeAction/swipeAction";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    swipeAction.mpType = "page";
    const app = Vue.createPageApp(swipeAction, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...swipeAction.styles || []]));
    app.mount("#root");
  }
})();
