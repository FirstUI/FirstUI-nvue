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
        let color2 = this.lineColor;
        if (!color2 || color2 === true) {
          color2 = uni && uni.$fui && uni.$fui.color.primary || "#465CFF";
        }
        return color2;
      },
      getLeft() {
        const left = Number(this.lineRight || 0);
        return `${left > 0 ? 0 : left}rpx`;
      },
      getTitleStyle() {
        const app = uni && uni.$fui && uni.$fui.fuiSection;
        const size = this.size || app && app.size || 32;
        const color2 = this.color || app && app.color || "#181818";
        const weight = this.fontWeight || app && app.fontWeight || 600;
        const left = Number(this.lineRight || 0);
        let style = `font-size:${size}rpx;color:${color2};font-weight:${weight};padding-left:${left <= 0 || !this.isLine ? 0 : left}rpx;`;
        style += `line-height:${this.lineHeight == 0 ? size : this.lineHeight}rpx`;
        return style;
      },
      getDescrStyle() {
        const app = uni && uni.$fui && uni.$fui.fuiSection;
        const size = this.descrSize || app && app.descrSize || 28;
        const color2 = this.descrColor || app && app.descrColor || "#B2B2B2";
        return `font-size:${size}rpx;color:${color2};`;
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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/basics/color/color.js
  var import_vue3 = __toESM(require_vue());
  var colors = [{
    text: "\u4E3B\u8272",
    key: "key_01",
    data: [{
      color: "#FFFFFF",
      text: "\u84DD\u8272",
      value: "#465CFF"
    }]
  }, {
    text: "\u8F85\u52A9\u8272",
    key: "key_02",
    data: [{
      color: "#FFFFFF",
      text: "\u7EA2\u8272",
      value: "#FF2B2B"
    }, {
      color: "#FFFFFF",
      text: "\u9EC4\u8272",
      value: "#FFB703"
    }, {
      color: "#FFFFFF",
      text: "\u7D2B\u8272",
      value: "#6831FF"
    }, {
      color: "#FFFFFF",
      text: "\u7EFF\u8272",
      value: "#09BE4F"
    }]
  }, {
    text: "\u5B57\u4F53\u989C\u8272",
    key: "key_03",
    data: [{
      color: "#FFFFFF",
      text: "\u6DF1\u9ED1\u8272",
      value: "#181818"
    }, {
      color: "#FFFFFF",
      text: "\u6DF1\u7070\u8272",
      value: "#333333"
    }, {
      color: "#FFFFFF",
      text: "\u7070\u8272",
      value: "#B2B2B2"
    }, {
      color: "#FFFFFF",
      text: "\u6D45\u7070\u8272",
      value: "#CCCCCC"
    }, {
      color: "#181818",
      text: "\u767D\u8272",
      value: "#FFFFFF"
    }]
  }, {
    text: "\u80CC\u666F\u8272",
    key: "key_04",
    data: [{
      color: "#181818",
      text: "\u6D45\u84DD",
      value: "#F1F4FA"
    }, {
      color: "#181818",
      text: "\u767D\u8272",
      value: "#FFFFFF"
    }, {
      color: "#181818",
      text: "\u7070\u8272",
      value: "#F8F8F8"
    }, {
      color: "#181818",
      text: "\u7EA2\u8272 5%",
      value: "rgba(255, 43, 43, .05)"
    }, {
      color: "#181818",
      text: "\u9EC4\u8272 10%",
      value: "rgba(255, 183, 3, .1)"
    }, {
      color: "#181818",
      text: "\u7D2B\u8272 5%",
      value: "rgba(104, 49, 255, .05)"
    }, {
      color: "#181818",
      text: "\u7EFF\u8272 5%",
      value: "rgba(9, 190, 79, .05)"
    }, {
      color: "#FFFFFF",
      text: "\u9ED1\u8272 60%",
      value: "rgba(0, 0, 0, 0.6)"
    }, {
      color: "#FFFFFF",
      text: "\u9ED1\u8272 20%",
      value: "rgba(0, 0, 0, 0.2)"
    }]
  }, {
    text: "\u8FB9\u6846\u989C\u8272",
    key: "key_05",
    data: [{
      color: "#181818",
      text: "\u7070\u8272",
      value: "#EEEEEE"
    }]
  }, {
    text: "\u6E10\u53D8\u8272",
    key: "key_06",
    data: [{
      color: "#FFFFFF",
      text: "\u6E10\u53D8\u8272",
      gradual: "linear-gradient(to bottom right,#465CFF,#6831FF)",
      value: "#465CFF  #6831FF"
    }, {
      color: "#FFFFFF",
      text: "\u6E10\u53D8\u8272",
      gradual: "linear-gradient(to bottom right,#FD8C8C,#FF2B2B)",
      value: "#FD8C8C  #FF2B2B"
    }]
  }];
  var _style_02 = { "fui-color__item": { "": { "justifyContent": "space-between", "flexDirection": "row", "alignItems": "center", "height": "84rpx", "borderRadius": 42, "marginBottom": "24rpx", "boxShadow": "0 4rpx 8rpx 0 rgba(2, 4, 38, 0.05)" } }, "fui-text": { "": { "fontSize": "28rpx", "fontWeight": "400", "color": "#ffffff" } } };
  var _sfc_main2 = {
    data() {
      return {
        colors
      };
    },
    methods: {
      getColor(e, color2) {
      }
    }
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
        (0, import_vue3.createElementVNode)("view", { class: "fui-page__hd" }, [
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-page__title" }, "Color"),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-page__desc" }, "Color \u8272\u5F69\uFF0CFirst UI\u7528\u8272\u6307\u5357\u3002")
        ]),
        (0, import_vue3.createElementVNode)("view", { class: "fui-page__bd fui-page__spacing" }, [
          ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
            import_vue3.Fragment,
            null,
            (0, import_vue3.renderList)($data.colors, (item, index) => {
              return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
                import_vue3.Fragment,
                {
                  key: item.key
                },
                [
                  (0, import_vue3.createVNode)(_component_fui_section, {
                    title: item.text,
                    "is-line": "",
                    padding: ["0", "0"],
                    "margin-bottom": "32",
                    "margin-top": index === 0 ? 0 : 64
                  }, null, 8, ["title", "margin-top"]),
                  ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
                    import_vue3.Fragment,
                    null,
                    (0, import_vue3.renderList)(item.data, (model, idx) => {
                      return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
                        onClick: ($event) => $options.getColor($event, model.gradual || model.value),
                        key: idx,
                        class: "fui-color__item fui-page__spacing",
                        style: (0, import_vue3.normalizeStyle)({ background: model.gradual || model.value })
                      }, [
                        (0, import_vue3.createElementVNode)(
                          "u-text",
                          {
                            class: "fui-text",
                            style: (0, import_vue3.normalizeStyle)({ color: model.color })
                          },
                          (0, import_vue3.toDisplayString)(model.text),
                          5
                          /* TEXT, STYLE */
                        ),
                        (0, import_vue3.createElementVNode)(
                          "u-text",
                          {
                            class: "fui-text",
                            style: (0, import_vue3.normalizeStyle)({ color: model.color })
                          },
                          (0, import_vue3.toDisplayString)(model.value),
                          5
                          /* TEXT, STYLE */
                        )
                      ], 12, ["onClick"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ],
                64
                /* STABLE_FRAGMENT */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ])
    ]);
  }
  var color = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/basics/color/color.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/component/basics/color/color";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    color.mpType = "page";
    const app = Vue.createPageApp(color, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...color.styles || []]));
    app.mount("#root");
  }
})();
