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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/basics/footer/footer.js
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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/basics/footer/footer.js
  var _style_0 = { "fui-footer": { "": { "flex": 1, "overflow": "hidden", "paddingTop": "32rpx", "paddingBottom": "32rpx", "paddingLeft": "32rpx", "paddingRight": "32rpx" } }, "fui-footer__fixed-bottom": { "": { "position": "fixed", "zIndex": 99, "bottom": 0, "left": 0, "right": 0 } }, "fui-footer__link": { "": { "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "fontSize": "28rpx" } }, "fui-link__item": { "": { "position": "relative", "lineHeight": 1 } }, "fui-link__text": { "": { "paddingTop": 0, "paddingRight": "18rpx", "paddingBottom": 0, "paddingLeft": "18rpx", "borderRightWidth": 0.5, "borderRightStyle": "solid", "fontWeight": "400" } }, "fui-link__text-border": { "": { "borderRightWidth": 0 } }, "fui-link-hover": { "": { "opacity": 0.5 } }, "fui-footer__text": { "": { "flex": 1, "flexDirection": "row", "justifyContent": "center", "flexWrap": "wrap", "lineHeight": 1, "textAlign": "center", "paddingTop": "8rpx", "fontWeight": "400" } }, "fui-as__safe-weex": { "": { "paddingBottom": 34 } } };
  var _sfc_main$1 = {
    name: "fui-footer",
    props: {
      //url，openType，delta ，text，color，size
      //链接设置  object数据格式对应上面注释的属性值
      navigate: {
        type: Array,
        default: function() {
          return [];
        }
      },
      //底部文本
      text: {
        type: String,
        default: ""
      },
      //文本字体颜色
      color: {
        type: String,
        default: "#B2B2B2"
      },
      //文本字体大小
      size: {
        type: [Number, String],
        default: 24
      },
      //footer背景颜色
      background: {
        type: String,
        default: "transparent"
      },
      //分隔线颜色，仅nvue生效
      borderColor: {
        type: String,
        default: "#B2B2B2"
      },
      //是否固定在底部
      isFixed: {
        type: Boolean,
        default: false
      },
      //是否适配底部安全区
      safeArea: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      linkColor() {
        const app = uni && uni.$fui && uni.$fui.color;
        return app && app.link || "#465CFF";
      }
    },
    data() {
      return {
        iphoneX: false
      };
    },
    created() {
      this.iphoneX = this.isPhoneX();
    },
    methods: {
      isPhoneX() {
        if (!this.safeArea)
          return false;
        const res = uni.getSystemInfoSync();
        let iphonex = false;
        let models = [
          "iphonex",
          "iphonexr",
          "iphonexsmax",
          "iphone11",
          "iphone11pro",
          "iphone11promax",
          "iphone12",
          "iphone12mini",
          "iphone12pro",
          "iphone12promax",
          "iphone13",
          "iphone13mini",
          "iphone13pro",
          "iphone13promax",
          "iphone14",
          "iphone14mini",
          "iphone14pro",
          "iphone14promax",
          "iphone15"
        ];
        const model = res.model.replace(/\s/g, "").toLowerCase();
        const newModel = model.split("<")[0];
        if (models.includes(model) || models.includes(newModel) || res.safeAreaInsets && res.safeAreaInsets.bottom > 0) {
          iphonex = true;
        }
        return iphonex;
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_navigator = (0, import_vue2.resolveComponent)("navigator");
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "view",
      {
        class: (0, import_vue2.normalizeClass)(["fui-footer", [$props.isFixed ? "fui-footer__fixed-bottom" : ""]]),
        style: (0, import_vue2.normalizeStyle)({ background: $props.background }),
        renderWhole: true
      },
      [
        $props.navigate.length > 0 ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
          key: 0,
          class: "fui-footer__link"
        }, [
          ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
            import_vue2.Fragment,
            null,
            (0, import_vue2.renderList)($props.navigate, (item, index) => {
              return (0, import_vue2.openBlock)(), (0, import_vue2.createBlock)(_component_navigator, {
                key: index,
                class: "fui-link__item",
                "hover-class": "fui-link-hover",
                "hover-stop-propagation": "",
                "open-type": item.openType || "navigate",
                url: item.url,
                delta: item.delta
              }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)(
                    "u-text",
                    {
                      class: (0, import_vue2.normalizeClass)(["fui-link__text", { "fui-link__color": !item.color, "fui-link__text-border": index === $props.navigate.length - 1 }]),
                      style: (0, import_vue2.normalizeStyle)({ color: item.color || $options.linkColor, fontSize: (item.size || 28) + "rpx", borderColor: $props.borderColor, lineHeight: (item.size || 28) + "rpx" })
                    },
                    (0, import_vue2.toDisplayString)(item.text),
                    7
                    /* TEXT, CLASS, STYLE */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["open-type", "url", "delta"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])) : (0, import_vue2.createCommentVNode)("v-if", true),
        (0, import_vue2.createElementVNode)(
          "view",
          {
            class: (0, import_vue2.normalizeClass)(["fui-footer__text", { "fui-as__safe-weex": $data.iphoneX && $props.safeArea }])
          },
          [
            (0, import_vue2.createElementVNode)(
              "u-text",
              {
                style: (0, import_vue2.normalizeStyle)({ color: $props.color, fontSize: $props.size + "rpx" })
              },
              (0, import_vue2.toDisplayString)($props.text),
              5
              /* TEXT, STYLE */
            )
          ],
          2
          /* CLASS */
        )
      ],
      6
      /* CLASS, STYLE */
    );
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-footer/fui-footer.vue"]]);
  var _sfc_main = {
    data() {
      return {
        navigate: [{
          text: "\u5E95\u90E8\u94FE\u63A5",
          openType: "navigateBack"
        }],
        navigate2: [{
          text: "\u5E95\u90E8\u94FE\u63A5",
          openType: "navigateBack"
        }, {
          text: "\u5E95\u90E8\u94FE\u63A5",
          openType: "navigateBack"
        }]
      };
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_fui_footer = resolveEasycom((0, import_vue2.resolveDynamicComponent)("fui-footer"), __easycom_0);
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue2.createElementVNode)("view", { class: "fui-wrap" }, [
        (0, import_vue2.createElementVNode)("view", { class: "fui-page__hd" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-page__title" }, "Footer"),
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-page__desc" }, "Footer \u9875\u811A\u3002")
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "fui-page__bd" }, [
          (0, import_vue2.createVNode)(_component_fui_footer, { text: "Copyright \xA9 2021 firstui.cn" }),
          (0, import_vue2.createVNode)(_component_fui_footer, {
            navigate: $data.navigate,
            text: "Copyright \xA9 2021 firstui.cn"
          }, null, 8, ["navigate"]),
          (0, import_vue2.createVNode)(_component_fui_footer, {
            navigate: $data.navigate2,
            text: "Copyright \xA9 2021 firstui.cn"
          }, null, 8, ["navigate"]),
          (0, import_vue2.createVNode)(_component_fui_footer, {
            isFixed: "",
            navigate: $data.navigate,
            text: "Copyright \xA9 2021 firstui.cn"
          }, null, 8, ["navigate"])
        ])
      ])
    ]);
  }
  var footer = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/basics/footer/footer.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/component/basics/footer/footer";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    footer.mpType = "page";
    const app = Vue.createPageApp(footer, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...footer.styles || []]));
    app.mount("#root");
  }
})();
