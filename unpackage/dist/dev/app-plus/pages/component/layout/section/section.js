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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/fui-section.js
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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/fui-section.js
  var _style_0 = { "fui-sections__title": { "": { "position": "relative", "flexDirection": "row", "alignItems": "center" } }, "fui-sections__line": { "": { "position": "absolute", "left": 0 } }, "fui-sections__descr-text": { "": { "fontWeight": "400" } } };
  var _sfc_main = {
    name: "fui-section",
    emits: ["click"],
    props: {
      title: {
        type: String,
        default: ""
      },
      //默认使用全局配置值
      size: {
        type: [Number, String],
        default: 0
      },
      lineHeight: {
        type: [Number, String],
        default: 0
      },
      color: {
        type: String,
        default: ""
      },
      fontWeight: {
        type: [Number, String],
        default: 0
      },
      descr: {
        type: String,
        default: ""
      },
      descrSize: {
        type: [Number, String],
        default: 0
      },
      descrColor: {
        type: String,
        default: ""
      },
      descrTop: {
        type: [Number, String],
        default: 0
      },
      isLine: {
        type: Boolean,
        default: false
      },
      lineWidth: {
        type: String,
        default: "2px"
      },
      lineColor: {
        type: String,
        default: ""
      },
      //square、circle
      lineCap: {
        type: String,
        default: "circle"
      },
      //nvue android端不支持负数
      lineRight: {
        type: [Number, String],
        default: 16
      },
      lineGap: {
        type: [Number, String],
        default: 0
      },
      background: {
        type: String,
        default: "transparent"
      },
      padding: {
        type: Array,
        default() {
          return ["0", "32rpx"];
        }
      },
      marginTop: {
        type: [Number, String],
        default: 0
      },
      marginBottom: {
        type: [Number, String],
        default: 0
      }
    },
    computed: {
      getLineColor() {
        let color = this.lineColor;
        if (!color || color === true) {
          color = uni && uni.$fui && uni.$fui.color.primary || "#465CFF";
        }
        return color;
      },
      getLeft() {
        const left = Number(this.lineRight || 0);
        return `${left > 0 ? 0 : left}rpx`;
      },
      getTitleStyle() {
        const app = uni && uni.$fui && uni.$fui.fuiSection;
        const size = this.size || app && app.size || 32;
        const color = this.color || app && app.color || "#181818";
        const weight = this.fontWeight || app && app.fontWeight || 600;
        const left = Number(this.lineRight || 0);
        let style = `font-size:${size}rpx;color:${color};font-weight:${weight};padding-left:${left <= 0 || !this.isLine ? 0 : left}rpx;`;
        style += `line-height:${this.lineHeight == 0 ? size : this.lineHeight}rpx`;
        return style;
      },
      getDescrStyle() {
        const app = uni && uni.$fui && uni.$fui.fuiSection;
        const size = this.descrSize || app && app.descrSize || 28;
        const color = this.descrColor || app && app.descrColor || "#B2B2B2";
        return `font-size:${size}rpx;color:${color};`;
      },
      getDescrTop() {
        const app = uni && uni.$fui && uni.$fui.fuiSection;
        return "padding-top:" + (this.descrTop || app && app.descrTop || 8) + "rpx;";
      }
    },
    methods: {
      handleClick() {
        this.$emit("click", {
          title: this.title
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "view",
      {
        class: "fui-sections__wrap",
        style: (0, import_vue2.normalizeStyle)({ marginTop: $props.marginTop + "rpx", marginBottom: $props.marginBottom + "rpx", background: $props.background, paddingTop: $props.padding[0] || 0, paddingRight: $props.padding[1] || 0, paddingBottom: $props.padding[2] || $props.padding[0] || 0, paddingLeft: $props.padding[3] || $props.padding[1] || 0 }),
        renderWhole: true
      },
      [
        (0, import_vue2.createElementVNode)("view", {
          class: "fui-sections__title",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick && $options.handleClick(...args))
        }, [
          $props.isLine ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
            "view",
            {
              key: 0,
              class: (0, import_vue2.normalizeClass)(["fui-sections__line", { "fui-sections__line-color": !$options.getLineColor }]),
              style: (0, import_vue2.normalizeStyle)({ background: $options.getLineColor, width: $props.lineWidth, top: $props.lineGap + "rpx", bottom: $props.lineGap + "rpx", borderRadius: $props.lineCap === "circle" ? $props.lineWidth : 0, left: $options.getLeft })
            },
            null,
            6
            /* CLASS, STYLE */
          )) : (0, import_vue2.createCommentVNode)("v-if", true),
          (0, import_vue2.renderSlot)(_ctx.$slots, "default"),
          $props.title ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
            "u-text",
            {
              key: 1,
              class: "fui-sections__title-text",
              style: (0, import_vue2.normalizeStyle)($options.getTitleStyle)
            },
            (0, import_vue2.toDisplayString)($props.title),
            5
            /* TEXT, STYLE */
          )) : (0, import_vue2.createCommentVNode)("v-if", true),
          (0, import_vue2.renderSlot)(_ctx.$slots, "right")
        ]),
        $props.descr ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
          "view",
          {
            key: 0,
            class: "fui-sections__descr",
            style: (0, import_vue2.normalizeStyle)($options.getDescrTop)
          },
          [
            (0, import_vue2.createElementVNode)(
              "u-text",
              {
                class: "fui-sections__descr-text",
                style: (0, import_vue2.normalizeStyle)($options.getDescrStyle)
              },
              (0, import_vue2.toDisplayString)($props.descr),
              5
              /* TEXT, STYLE */
            )
          ],
          4
          /* STYLE */
        )) : (0, import_vue2.createCommentVNode)("v-if", true),
        (0, import_vue2.renderSlot)(_ctx.$slots, "descr")
      ],
      4
      /* STYLE */
    );
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-section/fui-section.vue"]]);

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/layout/section/section.js
  var import_vue3 = __toESM(require_vue());
  var _sfc_main2 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_fui_section = resolveEasycom((0, import_vue3.resolveDynamicComponent)("fui-section"), __easycom_0);
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue3.createElementVNode)("view", { class: "fui-wrap" }, [
        (0, import_vue3.createVNode)(_component_fui_section, {
          title: "Section",
          descr: "Section \u6807\u9898\u680F\uFF0C\u4E3B\u8981\u7528\u4E8E\u6587\u7AE0\u3001\u5217\u8868\u8BE6\u60C5\u7B49\u6807\u9898\u5C55\u793A\u3002",
          "margin-top": 52
        }),
        (0, import_vue3.createElementVNode)("view", { class: "fui-page__bd" }, [
          (0, import_vue3.createVNode)(_component_fui_section, {
            title: "\u88C5\u9970\u7EBF\u6761",
            isLine: "",
            "margin-top": "64"
          }),
          (0, import_vue3.createVNode)(_component_fui_section, {
            title: "\u7EBF\u6761\u5BBD\u5EA6/\u989C\u8272\u8C03\u6574",
            "line-width": "8rpx",
            "line-color": "#FF2B2B",
            isLine: "",
            "margin-top": "96"
          }),
          (0, import_vue3.createVNode)(_component_fui_section, {
            title: "\u6807\u9898/\u65E0\u7EBF\u6761/\u5E26\u63CF\u8FF0",
            descr: "\u6211\u662F\u63CF\u8FF0\u6587\u672C~",
            "margin-top": "96"
          }),
          (0, import_vue3.createVNode)(_component_fui_section, {
            padding: ["32rpx", "32rpx"],
            background: "#fff",
            title: "\u8BBE\u7F6E\u80CC\u666F",
            isLine: "",
            "margin-top": "96"
          }),
          (0, import_vue3.createVNode)(_component_fui_section, {
            title: "\u63D2\u69FD\u4F7F\u7528/\u52A0\u56FE\u6807",
            "margin-top": "64"
          }, {
            right: (0, import_vue3.withCtx)(() => [
              (0, import_vue3.createElementVNode)("u-image", {
                class: "fui-vip__icon",
                src: "/static/images/index/light/icon_member_3x.png"
              })
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue3.createVNode)(_component_fui_section, {
            title: "\u7EBF\u6761\u6E10\u53D8\u8272/\u8C03\u6574\u5B57\u4F53\u5927\u5C0F",
            "line-width": "3px",
            size: "48",
            isLine: "",
            "line-color": "linear-gradient(to bottom , #FFB703, #FF416C)",
            "margin-top": "96"
          })
        ])
      ])
    ]);
  }
  var section = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/layout/section/section.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/component/layout/section/section";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    section.mpType = "page";
    const app = Vue.createPageApp(section, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...section.styles || []]));
    app.mount("#root");
  }
})();
