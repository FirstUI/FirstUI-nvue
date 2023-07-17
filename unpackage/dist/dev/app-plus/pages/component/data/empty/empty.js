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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/fui-button.js
  var import_vue2 = __toESM(require_vue());

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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/fui-button.js
  var _style_0 = { "fui-button__wrap": { "": { "position": "relative" } }, "fui-button": { "": { "borderWidth": 0, "borderStyle": "solid", "position": "relative", "paddingLeft": 0, "paddingRight": 0, "borderWidth::after": 0, "borderStyle::after": "solid", "borderColor::after": "#000000" } }, "fui-button__flex-1": { "": { "flex": 1 } }, "fui-button__text": { "": { "textAlign": "center", "flexDirection": "row", "alignItems": "center", "!justifyContent": "center", "!paddingLeft": 0 } }, "fui-button__opacity": { "": { "opacity": 0.5 } }, "fui-text__bold": { "": { "fontWeight": "bold" } }, "fui-button__link": { "": { "!borderColor": "rgba(0,0,0,0)", "!backgroundColor": "rgba(0,0,0,0)" } } };
  var _sfc_main = {
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
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_button = (0, import_vue2.resolveComponent)("button");
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "view",
      {
        class: (0, import_vue2.normalizeClass)(["fui-button__wrap", [!$options.getWidth || $options.getWidth === "100%" || $options.getWidth === true ? "fui-button__flex-1" : "", $props.disabled && !$props.disabledBackground ? "fui-button__opacity" : ""]]),
        style: (0, import_vue2.normalizeStyle)({ width: $options.getWidth, height: $options.getHeight, marginTop: $props.margin[0] || 0, marginRight: $props.margin[1] || 0, marginBottom: $props.margin[2] || $props.margin[0] || 0, marginLeft: $props.margin[3] || $props.margin[1] || 0, borderRadius: $options.getRadius, background: $options.getBackground }),
        onTouchstart: _cache[0] || (_cache[0] = (...args) => $options.handleStart && $options.handleStart(...args)),
        onTouchend: _cache[1] || (_cache[1] = (...args) => $options.handleClick && $options.handleClick(...args)),
        onTouchcancel: _cache[2] || (_cache[2] = (...args) => $options.handleEnd && $options.handleEnd(...args)),
        renderWhole: true
      },
      [
        (0, import_vue2.createVNode)(_component_button, {
          class: (0, import_vue2.normalizeClass)(["fui-button", [
            $props.bold ? "fui-text__bold" : "",
            $data.time && ($props.plain || $props.type === "link") ? "fui-button__opacity" : "",
            !$props.background && !$props.disabledBackground && !$props.plain ? "fui-button__" + $props.type : "",
            !$options.getWidth || $options.getWidth === "100%" || $options.getWidth === true ? "fui-button__flex-1" : "",
            $data.time && !$props.plain && $props.type !== "link" ? "fui-button__active" : "",
            $data.pc && !$props.disabled ? $props.plain || $props.type === "link" ? "fui-button__opacity-pc" : "fui-button__active-pc" : ""
          ]]),
          style: (0, import_vue2.normalizeStyle)({
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
          onClick: (0, import_vue2.withModifiers)($options.handleTap, ["stop"])
        }, {
          default: (0, import_vue2.withCtx)(() => [
            $props.text ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
              "u-text",
              {
                key: 0,
                class: (0, import_vue2.normalizeClass)(["fui-button__text", { "fui-btn__gray-color": !$props.background && !$props.disabledBackground && !$props.plain && $props.type === "gray" && $props.color === "#fff", "fui-text__bold": $props.bold }]),
                style: (0, import_vue2.normalizeStyle)({ fontSize: $options.getSize, lineHeight: $options.getSize, color: $options.getColor })
              },
              (0, import_vue2.toDisplayString)($props.text),
              7
              /* TEXT, CLASS, STYLE */
            )) : (0, import_vue2.createCommentVNode)("v-if", true),
            (0, import_vue2.renderSlot)(_ctx.$slots, "default")
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["class", "style", "loading", "form-type", "open-type", "app-parameter", "onGetuserinfo", "onGetphonenumber", "onContact", "onError", "onOpensetting", "onChooseavatar", "onLaunchapp", "disabled", "scope", "onClick"])
      ],
      38
      /* CLASS, STYLE, HYDRATE_EVENTS */
    );
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-button/fui-button.vue"]]);

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/data/empty/empty.js
  var import_vue3 = __toESM(require_vue());
  var _style_02 = { "fui-empty__wrap": { "": { "flex": 1, "flexDirection": "column", "alignItems": "center", "justifyContent": "center" } }, "fui-empty__fixed": { "": { "position": "fixed", "left": 0, "top": 0, "right": 0, "bottom": 0, "zIndex": 99 } }, "fui-empty__title": { "": { "textAlign": "center", "fontWeight": "500", "paddingTop": "48rpx" } }, "fui-empty__desc": { "": { "textAlign": "center", "fontWeight": "normal", "paddingTop": "8rpx" } } };
  var _sfc_main$1 = {
    name: "fui-empty",
    props: {
      src: {
        type: String,
        default: ""
      },
      width: {
        type: [Number, String],
        default: 576
      },
      height: {
        type: [Number, String],
        default: 318
      },
      title: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 32
      },
      descr: {
        type: String,
        default: ""
      },
      descrColor: {
        type: String,
        default: "#B2B2B2"
      },
      descrSize: {
        type: [Number, String],
        default: 24
      },
      isFixed: {
        type: Boolean,
        default: false
      },
      marginTop: {
        type: [Number, String],
        default: 0
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
      "view",
      {
        class: (0, import_vue3.normalizeClass)(["fui-empty__wrap", { "fui-empty__fixed": $props.isFixed }]),
        style: (0, import_vue3.normalizeStyle)({ marginTop: $props.marginTop + "rpx" }),
        renderWhole: true
      },
      [
        $props.src ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("u-image", {
          key: 0,
          src: $props.src,
          style: (0, import_vue3.normalizeStyle)({ width: $props.width + "rpx", height: $props.height + "rpx" }),
          mode: "widthFix"
        }, null, 12, ["src"])) : (0, import_vue3.createCommentVNode)("v-if", true),
        $props.title ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
          "u-text",
          {
            key: 1,
            class: (0, import_vue3.normalizeClass)(["fui-empty__title", { "fui-empty__title-color": !$props.color }]),
            style: (0, import_vue3.normalizeStyle)({ color: $props.color, fontSize: $props.size + "rpx" })
          },
          (0, import_vue3.toDisplayString)($props.title),
          7
          /* TEXT, CLASS, STYLE */
        )) : (0, import_vue3.createCommentVNode)("v-if", true),
        $props.descr ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
          "u-text",
          {
            key: 2,
            class: (0, import_vue3.normalizeClass)(["fui-empty__desc", { "fui-empty__descr-color": !$props.descrColor }]),
            style: (0, import_vue3.normalizeStyle)({ color: $props.descrColor, fontSize: $props.descrSize + "rpx" })
          },
          (0, import_vue3.toDisplayString)($props.descr),
          7
          /* TEXT, CLASS, STYLE */
        )) : (0, import_vue3.createCommentVNode)("v-if", true),
        (0, import_vue3.renderSlot)(_ctx.$slots, "default")
      ],
      6
      /* CLASS, STYLE */
    );
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_02]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-empty/fui-empty.vue"]]);
  var _sfc_main2 = {
    data() {
      return {
        resUrl: ""
      };
    },
    onLoad() {
      setTimeout(() => {
        this.resUrl = uni.fui.resUrl();
      }, 50);
    },
    methods: {
      goIndex() {
        uni.fui.href("/pages/tabbar/index/index", true);
      }
    }
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_fui_button = resolveEasycom((0, import_vue3.resolveDynamicComponent)("fui-button"), __easycom_0);
    const _component_fui_empty = resolveEasycom((0, import_vue3.resolveDynamicComponent)("fui-empty"), __easycom_1);
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue3.createElementVNode)("view", { class: "fui-wrap" }, [
        (0, import_vue3.createElementVNode)("view", { class: "fui-page__hd" }, [
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-page__title" }, "Empty"),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-page__desc" }, "Empty \u7F3A\u7701\u9875\uFF0C\u9875\u9762\u7684\u4FE1\u606F\u5185\u5BB9\u4E3A\u7A7A\u6216\u4FE1\u606F\u54CD\u5E94\u5F02\u5E38\u7684\u72B6\u6001\u3002")
        ]),
        (0, import_vue3.createElementVNode)("view", { class: "fui-page__bd" }, [
          (0, import_vue3.createVNode)(_component_fui_empty, {
            src: `${$data.resUrl}/component/empty/img_data_3x.png`,
            title: "\u6682\u65E0\u6570\u636E",
            descr: "\u529F\u80FD\u5F00\u53D1\u4E2D\uFF0C\u656C\u8BF7\u671F\u5F85\uFF01"
          }, {
            default: (0, import_vue3.withCtx)(() => [
              (0, import_vue3.createVNode)(_component_fui_button, {
                text: "\u8FD4\u56DE\u9996\u9875",
                size: 28,
                width: "336rpx",
                height: "84rpx",
                radius: "100rpx",
                background: "#fff",
                margin: ["64rpx", "0"],
                borderColor: "#465CFF",
                color: "#465CFF",
                onClick: $options.goIndex
              }, null, 8, ["onClick"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["src"]),
          (0, import_vue3.createVNode)(_component_fui_empty, {
            src: `${$data.resUrl}/component/empty/img_news_3x.png`,
            title: "\u6682\u65E0\u65B0\u6D88\u606F",
            marginTop: "64"
          }, null, 8, ["src"]),
          (0, import_vue3.createVNode)(_component_fui_empty, {
            src: `${$data.resUrl}/component/empty/img_address_3x.png`,
            title: "\u6682\u65E0\u5730\u5740\u4FE1\u606F",
            marginTop: "64"
          }, null, 8, ["src"]),
          (0, import_vue3.createVNode)(_component_fui_empty, {
            src: `${$data.resUrl}/component/empty/img_network_3x.png`,
            title: "\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8BBE\u7F6E\uFF01",
            marginTop: "64"
          }, null, 8, ["src"]),
          (0, import_vue3.createVNode)(_component_fui_empty, {
            src: `${$data.resUrl}/component/empty/img_order_3x.png`,
            title: "\u6682\u65E0\u8BA2\u5355",
            marginTop: "64"
          }, null, 8, ["src"]),
          (0, import_vue3.createVNode)(_component_fui_empty, {
            src: `${$data.resUrl}/component/empty/img_search_3x.png`,
            title: "\u6CA1\u6709\u627E\u5230\u641C\u7D22\u7684\u5185\u5BB9\u989D~",
            marginTop: "64"
          }, null, 8, ["src"])
        ])
      ])
    ]);
  }
  var empty = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/data/empty/empty.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/component/data/empty/empty";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    empty.mpType = "page";
    const app = Vue.createPageApp(empty, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...empty.styles || []]));
    app.mount("#root");
  }
})();
