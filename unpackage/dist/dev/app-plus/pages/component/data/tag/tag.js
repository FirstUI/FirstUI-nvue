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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/data/tag/tag.js
  var import_vue3 = __toESM(require_vue());

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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/data/tag/tag.js
  var _style_0$1 = { "fui-tag__wrap": { "": { "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "position": "relative", "borderWidth": 0.5, "borderStyle": "solid", "borderColor": "rgba(0,0,0,0)", "fontWeight": "normal", "overflow": "hidden", "textOverflow": "ellipsis" } }, "fui-tag__no-border": { "": { "borderWidth": 0 } }, "fui-tag__text": { "": { "lines": 1, "overflow": "hidden", "textOverflow": "ellipsis" } }, "fui-tag__origin-left": { "": { "transformOrigin": "0 center" } }, "fui-tag__origin-right": { "": { "transformOrigin": "100% center" } }, "fui-tag__opacity": { "": { "opacity:active": 0.5 } } };
  function hexToRGB(hex) {
    if (hex.length === 4) {
      let text = hex.substring(1, 4);
      hex = "#" + text + text;
    }
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}` : "241,244,250";
  }
  var _sfc_main$1 = {
    name: "fui-tag",
    emits: ["click"],
    props: {
      text: {
        type: String,
        default: ""
      },
      //类型：primary，success，warning，danger，purple
      type: {
        type: String,
        default: "primary"
      },
      //三种主题：dark、light、plain。background为空时生效
      theme: {
        type: String,
        default: "dark"
      },
      //背景色，如果设置背景则type失效
      background: {
        type: String,
        default: ""
      },
      //v2.0.0+ 
      isBorder: {
        type: Boolean,
        default: true
      },
      borderColor: {
        type: String,
        default: ""
      },
      //字体颜色
      color: {
        type: String,
        default: ""
      },
      //字体大小 rpx
      size: {
        type: [Number, String],
        default: 24
      },
      //缩放比例
      scaleRatio: {
        type: Number,
        default: 1
      },
      originLeft: {
        type: Boolean,
        default: false
      },
      originRight: {
        type: Boolean,
        default: false
      },
      //是否有点击效果
      highlight: {
        type: Boolean,
        default: false
      },
      radius: {
        type: [Number, String],
        default: 8
      },
      //padding值，上右下左，同css顺序
      padding: {
        type: Array,
        default() {
          return ["16rpx", "32rpx"];
        }
      },
      //margin-top值 
      marginTop: {
        type: [Number, String],
        default: 0
      },
      marginBottom: {
        type: [Number, String],
        default: 0
      },
      marginLeft: {
        type: [Number, String],
        default: 0
      },
      marginRight: {
        type: [Number, String],
        default: 0
      },
      index: {
        type: Number,
        default: 0
      }
    },
    data() {
      const app = uni && uni.$fui && uni.$fui.color;
      return {
        dark: {
          primary: app && app.primary || "#465CFF",
          success: app && app.success || "#09BE4F",
          warning: app && app.warning || "#FFB703",
          danger: app && app.danger || "#FF2B2B",
          purple: app && app.purple || "#6831FF"
        }
      };
    },
    computed: {
      getBackground() {
        let background = this.background;
        if (!background) {
          switch (this.theme) {
            case "light":
              background = `rgba(${hexToRGB(this.dark[this.type])},.05)`;
              break;
            case "dark":
              background = this.dark[this.type];
              break;
            default:
              background = "rgba(0,0,0,0)";
              break;
          }
        }
        return background;
      },
      getColor() {
        let color = this.color;
        if (!color) {
          if (this.theme === "dark") {
            color = "#fff";
          } else {
            color = this.dark[this.type];
          }
        }
        return color;
      },
      getBorderColor() {
        let borderColor = this.borderColor;
        if (!borderColor) {
          if (this.theme === "light") {
            borderColor = `rgba(${hexToRGB(this.dark[this.type])},.05)`;
          } else {
            borderColor = this.dark[this.type];
          }
        }
        return borderColor;
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
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
      "view",
      {
        class: (0, import_vue3.normalizeClass)(["fui-tag__wrap", [$props.highlight ? "fui-tag__opacity" : "", $props.originLeft ? "fui-tag__origin-left" : "", $props.originRight ? "fui-tag__origin-right" : "", !$props.background ? `fui-tag__${$props.type}-${$props.theme}` : "", $props.background && !$props.borderColor || !$props.isBorder ? "fui-tag__no-border" : ""]]),
        style: (0, import_vue3.normalizeStyle)({ backgroundColor: $options.getBackground, fontSize: $props.size + "rpx", lineHeight: $props.size + "rpx", color: $props.color, borderColor: $options.getBorderColor, transform: `scale(${$props.scaleRatio})`, borderRadius: $props.radius + "rpx", paddingTop: $props.padding[0] || 0, paddingRight: $props.padding[1] || 0, paddingBottom: $props.padding[2] || $props.padding[0] || 0, paddingLeft: $props.padding[3] || $props.padding[1] || 0, marginTop: $props.marginTop + "rpx", marginRight: $props.marginRight + "rpx", marginBottom: $props.marginBottom + "rpx", marginLeft: $props.marginLeft + "rpx" }),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick && $options.handleClick(...args)),
        renderWhole: true
      },
      [
        $props.text ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
          "u-text",
          {
            key: 0,
            class: (0, import_vue3.normalizeClass)(["fui-tag__text", [!$props.background ? `fui-tag_${$props.type}-${$props.theme}` : ""]]),
            style: (0, import_vue3.normalizeStyle)({ fontSize: $props.size + "rpx", lineHeight: $props.size + "rpx", color: $options.getColor })
          },
          (0, import_vue3.toDisplayString)($props.text),
          7
          /* TEXT, CLASS, STYLE */
        )) : (0, import_vue3.createCommentVNode)("v-if", true),
        (0, import_vue3.renderSlot)(_ctx.$slots, "default")
      ],
      6
      /* CLASS, STYLE */
    );
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-tag/fui-tag.vue"]]);
  var _style_02 = { "fui-align__center": { "": { "flexWrap": "wrap" } }, "fui-close__icon": { "": { "flexDirection": "row", "alignItems": "center", "paddingTop": "6rpx", "paddingRight": 0, "paddingBottom": "4rpx", "paddingLeft": "24rpx" } } };
  var _sfc_main2 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_fui_tag = resolveEasycom((0, import_vue3.resolveDynamicComponent)("fui-tag"), __easycom_0);
    const _component_fui_icon = resolveEasycom((0, import_vue3.resolveDynamicComponent)("fui-icon"), __easycom_1);
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue3.createElementVNode)("view", { class: "fui-wrap" }, [
        (0, import_vue3.createElementVNode)("view", { class: "fui-page__hd" }, [
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-page__title" }, "Tag"),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-page__desc" }, "Tag \u6807\u7B7E\uFF0C\u7528\u4E8E\u6807\u8BB0\u6216\u5206\u7C7B\u3002")
        ]),
        (0, import_vue3.createElementVNode)("view", { class: "fui-page__bd fui-page__spacing" }, [
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title fui-mtop--0" }, "\u57FA\u7840\u4F7F\u7528"),
          (0, import_vue3.createElementVNode)("view", { class: "fui-align__center" }, [
            (0, import_vue3.createVNode)(_component_fui_tag, {
              text: "\u6807\u7B7E\u4E00",
              "margin-bottom": "24",
              "margin-right": "24"
            }),
            (0, import_vue3.createVNode)(_component_fui_tag, {
              text: "\u6807\u7B7E\u4E8C",
              type: "danger",
              "margin-bottom": "24",
              "margin-right": "24"
            }),
            (0, import_vue3.createVNode)(_component_fui_tag, {
              text: "\u6807\u7B7E\u4E09",
              type: "success",
              "margin-bottom": "24",
              "margin-right": "24"
            }),
            (0, import_vue3.createVNode)(_component_fui_tag, {
              text: "\u6807\u7B7E\u56DB",
              type: "warning",
              "margin-bottom": "24",
              "margin-right": "24"
            }),
            (0, import_vue3.createVNode)(_component_fui_tag, {
              text: "\u6807\u7B7E\u4E94",
              type: "purple",
              "margin-bottom": "24"
            })
          ]),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title" }, "\u6D45\u8272\u8C03"),
          (0, import_vue3.createElementVNode)("view", { class: "fui-align__center" }, [
            (0, import_vue3.createVNode)(_component_fui_tag, {
              text: "\u6807\u7B7E\u4E00",
              "margin-bottom": "24",
              theme: "light",
              "margin-right": "24"
            }),
            (0, import_vue3.createVNode)(_component_fui_tag, {
              text: "\u6807\u7B7E\u4E8C",
              type: "danger",
              theme: "light",
              "margin-bottom": "24",
              "margin-right": "24"
            }),
            (0, import_vue3.createVNode)(_component_fui_tag, {
              text: "\u6807\u7B7E\u4E09",
              type: "success",
              theme: "light",
              "margin-bottom": "24",
              "margin-right": "24"
            }),
            (0, import_vue3.createVNode)(_component_fui_tag, {
              text: "\u6807\u7B7E\u56DB",
              type: "warning",
              theme: "light",
              "margin-bottom": "24",
              "margin-right": "24"
            }),
            (0, import_vue3.createVNode)(_component_fui_tag, {
              text: "\u6807\u7B7E\u4E94",
              type: "purple",
              theme: "light",
              "margin-bottom": "24",
              "margin-right": "24"
            })
          ]),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title" }, "\u7A7A\u5FC3"),
          (0, import_vue3.createElementVNode)("view", { class: "fui-align__center" }, [
            (0, import_vue3.createVNode)(_component_fui_tag, {
              text: "\u6807\u7B7E\u4E00",
              "margin-bottom": "24",
              theme: "plain",
              "margin-right": "24"
            }),
            (0, import_vue3.createVNode)(_component_fui_tag, {
              text: "\u6807\u7B7E\u4E8C",
              type: "danger",
              theme: "plain",
              "margin-bottom": "24",
              "margin-right": "24"
            }),
            (0, import_vue3.createVNode)(_component_fui_tag, {
              text: "\u6807\u7B7E\u4E09",
              type: "success",
              theme: "plain",
              "margin-bottom": "24",
              "margin-right": "24"
            }),
            (0, import_vue3.createVNode)(_component_fui_tag, {
              text: "\u6807\u7B7E\u56DB",
              type: "warning",
              theme: "plain",
              "margin-bottom": "24",
              "margin-right": "24"
            }),
            (0, import_vue3.createVNode)(_component_fui_tag, {
              text: "\u6807\u7B7E\u4E94",
              type: "purple",
              theme: "plain",
              "margin-bottom": "24"
            })
          ]),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title" }, "\u5E26\u5173\u95ED\u6309\u94AE"),
          (0, import_vue3.createElementVNode)("view", { class: "fui-align__center" }, [
            (0, import_vue3.createVNode)(_component_fui_tag, {
              text: "\u6807\u7B7E\u4E00",
              theme: "light",
              "margin-right": "24",
              padding: ["12rpx", "20rpx"]
            }, {
              default: (0, import_vue3.withCtx)(() => [
                (0, import_vue3.createElementVNode)("view", { class: "fui-close__icon" }, [
                  (0, import_vue3.createVNode)(_component_fui_icon, {
                    name: "close",
                    color: "#465CFF",
                    size: 32
                  })
                ])
              ]),
              _: 1
              /* STABLE */
            }),
            (0, import_vue3.createVNode)(_component_fui_tag, {
              text: "\u6807\u7B7E\u4E8C",
              type: "danger",
              theme: "light",
              "margin-right": "24",
              padding: ["12rpx", "20rpx"]
            }, {
              default: (0, import_vue3.withCtx)(() => [
                (0, import_vue3.createElementVNode)("view", { class: "fui-close__icon" }, [
                  (0, import_vue3.createVNode)(_component_fui_icon, {
                    name: "clear",
                    color: "#FF2B2B",
                    size: 32
                  })
                ])
              ]),
              _: 1
              /* STABLE */
            }),
            (0, import_vue3.createVNode)(_component_fui_tag, {
              text: "\u6807\u7B7E\u4E09",
              type: "success",
              theme: "light",
              "margin-right": "24",
              padding: ["12rpx", "20rpx"]
            }, {
              default: (0, import_vue3.withCtx)(() => [
                (0, import_vue3.createElementVNode)("view", { class: "fui-close__icon" }, [
                  (0, import_vue3.createVNode)(_component_fui_icon, {
                    name: "clear-fill",
                    color: "#09BE4F",
                    size: 32
                  })
                ])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title" }, "\u81EA\u5B9A\u4E49\u989C\u8272\u3001\u5927\u5C0F"),
          (0, import_vue3.createElementVNode)("view", { class: "fui-align__center" }, [
            (0, import_vue3.createVNode)(_component_fui_tag, {
              text: "\u6807\u7B7E\u4E00",
              background: "rgba(255, 43, 43, .05)",
              color: "#333",
              "margin-bottom": "24",
              "margin-right": "24"
            }),
            (0, import_vue3.createVNode)(_component_fui_tag, {
              text: "\u6807\u7B7E\u4E8C",
              background: "#CCCCCC",
              color: "#fff",
              "margin-bottom": "24",
              "margin-right": "24"
            }),
            (0, import_vue3.createVNode)(_component_fui_tag, {
              text: "\u6807\u7B7E\u4E09",
              background: "rgba(255, 183, 3, .1)",
              color: "#FF2B2B",
              "margin-bottom": "24",
              scaleRatio: 0.8,
              "margin-right": "24"
            }, null, 8, ["scaleRatio"]),
            (0, import_vue3.createVNode)(_component_fui_tag, {
              text: "\u6807\u7B7E\u56DB",
              background: "rgba(104, 49, 255, .05)",
              color: "#181818",
              "margin-bottom": "24",
              padding: ["20rpx", "40rpx"],
              "margin-right": "24"
            }),
            (0, import_vue3.createVNode)(_component_fui_tag, {
              text: "\u6807\u7B7E\u4E94",
              background: "rgba(9, 190, 79, .05)",
              color: "#181818",
              "margin-bottom": "24",
              padding: ["12rpx", "24rpx"]
            })
          ])
        ])
      ])
    ]);
  }
  var tag = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/data/tag/tag.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/component/data/tag/tag";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    tag.mpType = "page";
    const app = Vue.createPageApp(tag, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...tag.styles || []]));
    app.mount("#root");
  }
})();
