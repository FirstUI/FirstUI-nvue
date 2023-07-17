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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/data/divider/divider.js
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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/data/divider/divider.js
  var _style_0$1 = { "fui-divider__wrap": { "": { "position": "relative", "textAlign": "center", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "overflow": "hidden" } }, "fui-divider__line": { "": { "position": "absolute", "height": 0.5 } }, "fui-divider__text-box": { "": { "position": "relative", "textAlign": "center", "paddingTop": 0, "paddingRight": "6rpx", "paddingBottom": 0, "paddingLeft": "6rpx", "zIndex": 1, "flexDirection": "row", "alignItems": "center", "justifyContent": "center" } }, "fui-divider__text": { "": { "paddingTop": 0, "paddingRight": "12rpx", "paddingBottom": 0, "paddingLeft": "12rpx" } } };
  var _sfc_main$1 = {
    name: "fui-divider",
    props: {
      text: {
        type: String,
        default: ""
      },
      //divider占据高度，单位rpx
      height: {
        type: [Number, String],
        default: 100
      },
      //divider宽度
      width: {
        type: String,
        default: "400rpx"
      },
      //divider颜色
      dividerColor: {
        type: String,
        default: "#CCCCCC"
      },
      //文字颜色
      color: {
        type: String,
        default: "#B2B2B2"
      },
      //文字大小 rpx
      size: {
        type: [Number, String],
        default: 24
      },
      fontWeight: {
        type: [Number, String],
        default: 400
      },
      //背景颜色，和当前页面背景色保持一致
      backgroundColor: {
        type: String,
        default: "#F1F4FA"
      }
    },
    computed: {
      getTop() {
        return Number(this.height) / 2 + "rpx";
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
      "view",
      {
        class: "fui-divider__wrap",
        style: (0, import_vue3.normalizeStyle)({ height: $props.height + "rpx" }),
        renderWhole: true
      },
      [
        (0, import_vue3.createElementVNode)(
          "view",
          {
            class: "fui-divider__line",
            style: (0, import_vue3.normalizeStyle)({ width: $props.width, background: $props.dividerColor, top: $options.getTop })
          },
          null,
          4
          /* STYLE */
        ),
        (0, import_vue3.createElementVNode)(
          "view",
          {
            class: "fui-divider__text-box",
            style: (0, import_vue3.normalizeStyle)({ backgroundColor: $props.backgroundColor })
          },
          [
            (0, import_vue3.renderSlot)(_ctx.$slots, "default"),
            $props.text ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
              "u-text",
              {
                key: 0,
                class: "fui-divider__text",
                style: (0, import_vue3.normalizeStyle)({ fontWeight: $props.fontWeight, color: $props.color, fontSize: $props.size + "rpx", lineHeight: $props.size + "rpx" })
              },
              (0, import_vue3.toDisplayString)($props.text),
              5
              /* TEXT, STYLE */
            )) : (0, import_vue3.createCommentVNode)("v-if", true)
          ],
          4
          /* STYLE */
        )
      ],
      4
      /* STYLE */
    );
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-divider/fui-divider.vue"]]);
  var _style_02 = { "fui-text": { "": { "fontSize": "24rpx", "paddingLeft": "8rpx" } } };
  var _sfc_main2 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_fui_divider = resolveEasycom((0, import_vue3.resolveDynamicComponent)("fui-divider"), __easycom_0);
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
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-page__title" }, "Divider"),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-page__desc" }, "Divider \u5206\u5272\u7EBF\uFF0C\u53EF\u81EA\u5B9A\u4E49\u7EBF\u6761\u5BBD\u5EA6\u3001\u989C\u8272\u7B49\u3002")
        ]),
        (0, import_vue3.createElementVNode)("view", { class: "fui-page__bd" }, [
          (0, import_vue3.createVNode)(_component_fui_divider, { text: "\u6CA1\u6709\u66F4\u591A\u4E86" }),
          (0, import_vue3.createVNode)(_component_fui_divider, {
            dividerColor: "#465CFF",
            text: "\u6CA1\u6709\u66F4\u591A\u4E86"
          }),
          (0, import_vue3.createVNode)(_component_fui_divider, {
            dividerColor: "#FFB703",
            color: "#FFB703",
            text: "\u6CA1\u6709\u66F4\u591A\u4E86"
          }),
          (0, import_vue3.createVNode)(_component_fui_divider, {
            dividerColor: "#09BE4F",
            color: "#09BE4F",
            width: "750rpx",
            text: "\u6CA1\u6709\u66F4\u591A\u4E86"
          }),
          (0, import_vue3.createVNode)(_component_fui_divider, {
            dividerColor: "linear-gradient(to top,#eee,#ccc)",
            text: "\u6CA1\u6709\u66F4\u591A\u4E86"
          }),
          (0, import_vue3.createVNode)(_component_fui_divider, { text: "\u5DF2\u52A0\u8F7D\u5B8C\u5168\u90E8\u6570\u636E" }),
          (0, import_vue3.createVNode)(_component_fui_divider, null, {
            default: (0, import_vue3.withCtx)(() => [
              (0, import_vue3.createElementVNode)("view", { class: "fui-flex__center" }, [
                (0, import_vue3.createVNode)(_component_fui_icon, {
                  name: "like",
                  color: "#FF2B2B",
                  size: 40
                }),
                (0, import_vue3.createElementVNode)("u-text", { class: "fui-text" }, "\u731C\u4F60\u559C\u6B22")
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue3.createVNode)(_component_fui_divider, null, {
            default: (0, import_vue3.withCtx)(() => [
              (0, import_vue3.createElementVNode)("view", { class: "fui-flex__center" }, [
                (0, import_vue3.createVNode)(_component_fui_icon, {
                  name: "fabulous",
                  color: "#FFB703",
                  size: 40
                }),
                (0, import_vue3.createElementVNode)("u-text", { class: "fui-text" }, "\u597D\u7269\u63A8\u8350")
              ])
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ])
    ]);
  }
  var divider = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/data/divider/divider.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/component/data/divider/divider";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    divider.mpType = "page";
    const app = Vue.createPageApp(divider, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...divider.styles || []]));
    app.mount("#root");
  }
})();
