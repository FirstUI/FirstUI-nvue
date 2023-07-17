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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/layout/card/card.js
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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/layout/card/card.js
  var _style_0$1 = { "fui-card__border": { "": { "position": "relative", "!boxShadow": "none", "borderWidth": 0.5, "borderStyle": "solid" } }, "fui-card__header": { "": { "flex": 1, "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between", "position": "relative" } }, "fui-card__header-left": { "": { "flexDirection": "row", "alignItems": "center" } }, "fui-card__header-line": { "": { "position": "relative", "borderBottomWidth": 0.5, "borderBottomStyle": "solid", "borderBottomColor": "#EEEEEE" } }, "fui-card__header-thumb": { "": { "marginRight": "20rpx" } }, "fui-card__header-title": { "": { "lines": 1 } }, "fui-card__header-right": { "": { "textAlign": "right" } }, "fui-card__body": { "": { "flex": 1 } }, "fui-card__footer": { "": { "flex": 1 } } };
  var _sfc_main$1 = {
    name: "fui-card",
    emits: ["click"],
    props: {
      //card margin值：[上、右、下、左]
      margin: {
        type: Array,
        default() {
          return ["0", "32rpx"];
        }
      },
      //是否通栏，为true时margin-left，margin-right失效
      full: {
        type: Boolean,
        default: false
      },
      //card 背景色
      background: {
        type: String,
        default: "#fff"
      },
      //card 圆角，非nvue下showBorder为false时生效
      radius: {
        type: String,
        default: "16rpx"
      },
      //阴影：nvue下，android无效
      shadow: {
        type: String,
        default: "0 2rpx 4rpx 0 rgba(2, 4, 38, 0.05)"
      },
      //仅android且nvue下有效，box-shadow失效
      elevation: {
        type: String,
        default: "5px"
      },
      //是否显示card 边框，为true时box-shadow失效
      showBorder: {
        type: Boolean,
        default: false
      },
      //边框颜色，仅nvue下生效
      borderColor: {
        type: String,
        default: "#EEEEEE"
      },
      headerBackground: {
        type: String,
        default: "#fff"
      },
      //是否需要header底部线条
      headerLine: {
        type: Boolean,
        default: true
      },
      //是否需要内容与footer之间线条
      footerLine: {
        type: Boolean,
        default: false
      },
      //header 底部线条颜色，仅nvue有效，非nvue改变颜色使用css变量
      lineColor: {
        type: String,
        default: "#EEEEEE"
      },
      //header padding值：[上、右、下、左]
      padding: {
        type: Array,
        default() {
          return ["20rpx", "20rpx"];
        }
      },
      //头像，图标图片地址
      src: {
        type: String,
        default: ""
      },
      //图片宽度，单位rpx
      width: {
        type: [Number, String],
        default: 64
      },
      //图片高度，单位rpx
      height: {
        type: [Number, String],
        default: 64
      },
      //图片圆角
      imageRadius: {
        type: String,
        default: "8rpx"
      },
      title: {
        type: String,
        default: ""
      },
      size: {
        type: [Number, String],
        default: 30
      },
      color: {
        type: String,
        default: "#7F7F7F"
      },
      tag: {
        type: String,
        default: ""
      },
      tagSize: {
        type: [Number, String],
        default: 24
      },
      tagColor: {
        type: String,
        default: "#b2b2b2"
      },
      index: {
        type: Number,
        default: 0
      }
    },
    data() {
      let isNvue = false;
      isNvue = true;
      return {
        isNvue
      };
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
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "view",
      {
        class: (0, import_vue2.normalizeClass)(["fui-card__wrap", { "fui-card__full": $props.full, "fui-card__border": $props.showBorder, "fui-card__border-radius": $props.showBorder && !$data.isNvue && !$props.full }]),
        style: (0, import_vue2.normalizeStyle)({ marginTop: $props.margin[0] || 0, marginRight: $props.full ? 0 : $props.margin[1] || 0, marginBottom: $props.margin[2] || $props.margin[0] || 0, marginLeft: $props.full ? 0 : $props.margin[3] || $props.margin[1] || 0, background: $props.background, borderRadius: $props.full ? 0 : $props.radius, "box-shadow": $props.showBorder ? "none" : $props.shadow, borderColor: $data.isNvue ? $props.borderColor : "transparent" }),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick && $options.handleClick(...args)),
        renderWhole: true
      },
      [
        $props.tag || $props.title || $props.src ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
          "view",
          {
            key: 0,
            class: (0, import_vue2.normalizeClass)(["fui-card__header", { "fui-card__header-line": $props.headerLine }]),
            style: (0, import_vue2.normalizeStyle)({ "border-top-left-radius": $props.full ? 0 : $props.radius, "border-top-right-radius": $props.full ? 0 : $props.radius, "border-bottom-color": $data.isNvue && $props.headerLine ? $props.lineColor : "transparent", paddingTop: $props.padding[0] || 0, paddingRight: $props.padding[1] || 0, paddingBottom: $props.padding[2] || $props.padding[0] || 0, paddingLeft: $props.padding[3] || $props.padding[1] || 0 })
          },
          [
            (0, import_vue2.createElementVNode)("view", { class: "fui-card__header-left" }, [
              $props.src ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("u-image", {
                key: 0,
                src: $props.src,
                class: "fui-card__header-thumb",
                style: (0, import_vue2.normalizeStyle)({ height: $props.height + "rpx", width: $props.width + "rpx", borderRadius: $props.imageRadius })
              }, null, 12, ["src"])) : (0, import_vue2.createCommentVNode)("v-if", true),
              $props.title ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
                "u-text",
                {
                  key: 1,
                  class: "fui-card__header-title",
                  style: (0, import_vue2.normalizeStyle)({ fontSize: $props.size + "rpx", color: $props.color })
                },
                (0, import_vue2.toDisplayString)($props.title),
                5
                /* TEXT, STYLE */
              )) : (0, import_vue2.createCommentVNode)("v-if", true)
            ]),
            $props.tag ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
              key: 0,
              class: "fui-card__header-right"
            }, [
              (0, import_vue2.createElementVNode)(
                "u-text",
                {
                  style: (0, import_vue2.normalizeStyle)({ fontSize: $props.tagSize + "rpx", color: $props.tagColor })
                },
                (0, import_vue2.toDisplayString)($props.tag),
                5
                /* TEXT, STYLE */
              )
            ])) : (0, import_vue2.createCommentVNode)("v-if", true)
          ],
          6
          /* CLASS, STYLE */
        )) : (0, import_vue2.createCommentVNode)("v-if", true),
        (0, import_vue2.createElementVNode)(
          "view",
          {
            class: (0, import_vue2.normalizeClass)(["fui-card__body", { "fui-card__header-line": $props.footerLine }])
          },
          [
            (0, import_vue2.renderSlot)(_ctx.$slots, "default")
          ],
          2
          /* CLASS */
        ),
        (0, import_vue2.createElementVNode)(
          "view",
          {
            class: "fui-card__footer",
            style: (0, import_vue2.normalizeStyle)({ "border-bottom-left-radius": $props.full ? 0 : $props.radius, "border-bottom-right-radius": $props.full ? 0 : $props.radius })
          },
          [
            (0, import_vue2.renderSlot)(_ctx.$slots, "footer")
          ],
          4
          /* STYLE */
        )
      ],
      6
      /* CLASS, STYLE */
    );
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-card/fui-card.vue"]]);
  var _style_0 = { "fui-section__title": { "": { "marginLeft": "32rpx" } }, "fui-card__content": { "": { "fontSize": "28rpx", "paddingTop": "32rpx", "paddingRight": "20rpx", "paddingBottom": "32rpx", "paddingLeft": "20rpx" } }, "fui-padding": { "": { "paddingLeft": "32rpx", "paddingRight": "32rpx" } }, "fui-list__item": { "": { "height": "385rpx", "position": "relative", "backgroundColor": "#eeeeee" } }, "fui-cover": { "": { "height": "385rpx" } }, "fui-cover__bottom-radius": { "": { "borderBottomLeftRadius": "16rpx", "borderBottomRightRadius": "16rpx" } }, "fui-cover__top-radius": { "": { "borderTopLeftRadius": "16rpx", "borderTopRightRadius": "16rpx" } }, "fui-list__title": { "": { "position": "absolute", "left": 0, "right": 0, "bottom": 0, "color": "#ffffff", "fontWeight": "500", "paddingTop": "24rpx", "paddingRight": "20rpx", "paddingBottom": "24rpx", "paddingLeft": "20rpx", "backgroundImage": "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.6))" } }, "fui-card__title": { "": { "paddingTop": "32rpx", "paddingRight": "32rpx", "paddingBottom": "32rpx", "paddingLeft": "32rpx", "fontWeight": "500" } } };
  var _sfc_main = {
    data() {
      return {
        resUrl: uni.fui.resUrl(),
        src: "/static/images/common/icon_tabbar_3x.png",
        src2: "/static/images/common/img_logo.png"
      };
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_fui_card = resolveEasycom((0, import_vue2.resolveDynamicComponent)("fui-card"), __easycom_0);
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue2.createElementVNode)("view", { class: "fui-wrap" }, [
        (0, import_vue2.createElementVNode)("view", { class: "fui-page__hd" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-page__title" }, "Card"),
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-page__desc" }, "Card \u5361\u7247\uFF0C\u5E38\u7528\u7684\u5E03\u5C40\u7EC4\u4EF6\u3002")
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "fui-page__bd" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-section__title fui-mtop--0" }, "\u57FA\u7840\u4F7F\u7528"),
          (0, import_vue2.createVNode)(_component_fui_card, {
            src: $data.src,
            title: "\u6807\u9898\u6587\u5B57",
            tag: "\u989D\u5916\u4FE1\u606F"
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createElementVNode)("u-text", { class: "fui-card__content" }, "\u8FD9\u662F\u4E00\u4E2A\u57FA\u7840\u5361\u7247\u7684\u793A\u4F8B\uFF0C\u6B64\u5904\u4E3A\u81EA\u5B9A\u4E49\u5185\u5BB9\u533A\u57DF\uFF0C\u81EA\u884C\u63A7\u5236\u5185\u5BB9\u6837\u5F0F\u3002")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["src"]),
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-section__title" }, "\u901A\u680F\u5C55\u793A"),
          (0, import_vue2.createVNode)(_component_fui_card, {
            padding: ["20rpx", "32rpx"],
            full: "",
            src: $data.src,
            title: "\u6807\u9898\u6587\u5B57",
            tag: "\u989D\u5916\u4FE1\u606F"
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createElementVNode)("u-text", { class: "fui-card__content fui-padding" }, "\u8FD9\u662F\u4E00\u4E2A\u57FA\u7840\u5361\u7247\u7684\u793A\u4F8B\uFF0C\u6B64\u5904\u4E3A\u81EA\u5B9A\u4E49\u5185\u5BB9\u533A\u57DF\uFF0C\u81EA\u884C\u63A7\u5236\u5185\u5BB9\u6837\u5F0F\u3002")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["src"]),
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-section__title" }, "\u63A8\u8350\u5E03\u5C40"),
          (0, import_vue2.createVNode)(_component_fui_card, {
            src: $data.src2,
            imageRadius: "20px",
            title: "First UI",
            color: "#465CFF",
            tag: "23\u5C0F\u65F6\u524D",
            headerLine: false,
            showBorder: ""
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createElementVNode)("view", { class: "fui-list__item" }, [
                (0, import_vue2.createElementVNode)("u-image", {
                  class: "fui-cover fui-cover__bottom-radius",
                  src: `${$data.resUrl}/cooperate/light/img_banner_3x.png`,
                  mode: "widthFix"
                }, null, 8, ["src"]),
                (0, import_vue2.createElementVNode)("u-text", { class: "fui-list__title fui-cover__bottom-radius" }, "First UI\u91CD\u78C5\u4E0A\u7EBF\uFF0C\u4E00\u6B3E\u8F7B\u91CF\u3001\u5168\u9762\u3001\u53EF\u9760\u7684\u79FB\u52A8\u7AEF\u7EC4\u4EF6\u5E93\u3002")
              ])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["src"]),
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-section__title" }, "\u63A8\u8350\u5E03\u5C40"),
          (0, import_vue2.createVNode)(_component_fui_card, null, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createElementVNode)("view", { class: "fui-list__item" }, [
                (0, import_vue2.createElementVNode)("u-image", {
                  class: "fui-cover fui-cover__top-radius",
                  src: `${$data.resUrl}/cooperate/dark/img_banner_3x.png`,
                  mode: "widthFix"
                }, null, 8, ["src"])
              ]),
              (0, import_vue2.createElementVNode)("u-text", { class: "fui-card__title" }, "First UI\u91CD\u78C5\u4E0A\u7EBF\uFF0C\u4E00\u6B3E\u8F7B\u91CF\u3001\u5168\u9762\u3001\u53EF\u9760\u7684\u79FB\u52A8\u7AEF\u7EC4\u4EF6\u5E93\u3002")
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ])
    ]);
  }
  var card = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/layout/card/card.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/component/layout/card/card";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    card.mpType = "page";
    const app = Vue.createPageApp(card, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...card.styles || []]));
    app.mount("#root");
  }
})();
