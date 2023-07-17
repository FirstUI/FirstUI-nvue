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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/nav/segmentedControl/segmentedControl.js
  var import_vue2 = __toESM(require_vue());
  var _style_0 = { "fui-segmented__control": { "": { "flex": 1, "flexDirection": "row", "overflow": "hidden" } }, "fui-segmented__item": { "": { "flex": 1, "justifyContent": "center", "alignItems": "center", "borderStyle": "solid", "borderTopWidth": 0, "borderBottomWidth": 0, "borderRightWidth": 0, "borderLeftWidth": 0, "position": "relative" } }, "fui-segmented__item-border": { "": { "borderTopWidth": 0.5, "borderBottomWidth": 0.5, "borderRightWidth": 0.5 } }, "fui-segmented__item-line": { "": { "position": "absolute", "left": 0, "right": 0, "bottom": 0, "height": 2 } }, "fui-segmented__disabled": { "": { "opacity": 0.5 } }, "fui-segmented__first": { "": { "borderLeftStyle": "solid", "borderLeftWidth": 0.5 } } };
  var _sfc_main$1 = {
    name: "fui-segmented-control",
    emits: ["click"],
    props: {
      values: {
        type: Array,
        default() {
          return [];
        }
      },
      current: {
        type: Number,
        default: 0
      },
      //button、text
      type: {
        type: String,
        default: "button"
      },
      color: {
        type: String,
        default: ""
      },
      activeColor: {
        type: String,
        default: "#fff"
      },
      bold: {
        type: Boolean,
        default: false
      },
      height: {
        type: [Number, String],
        default: 64
      },
      size: {
        type: [Number, String],
        default: 28
      },
      radius: {
        type: [Number, String],
        default: 8
      },
      disabled: {
        type: Boolean,
        default: false
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
      getColor() {
        let color = this.color;
        if (!color || color === true) {
          const app = uni && uni.$fui && uni.$fui.color;
          color = app && app.primary || "#465CFF";
        }
        return color;
      }
    },
    data() {
      return {
        currentIndex: 0,
        vals: []
      };
    },
    watch: {
      current(val) {
        if (val !== this.currentIndex) {
          this.currentIndex = val;
        }
      },
      values(vals) {
        this.initData(vals);
      }
    },
    created() {
      this.currentIndex = this.current;
      this.initData(this.values);
    },
    methods: {
      initData(vals) {
        if (vals && vals.length > 0) {
          if (typeof vals[0] === "object") {
            this.vals = vals;
          } else {
            this.vals = vals.map((item) => {
              return {
                name: item
              };
            });
          }
        }
      },
      handleClick(index) {
        let vals = this.vals[index];
        if (this.currentIndex !== index && !this.disabled && !vals.disabled) {
          this.currentIndex = index;
          this.$emit("click", __spreadValues({
            index
          }, vals));
        }
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "view",
      {
        class: (0, import_vue2.normalizeClass)(["fui-segmented__control", { "fui-segmented__disabled": $props.disabled }]),
        style: (0, import_vue2.normalizeStyle)({ marginTop: $props.marginTop + "rpx", marginBottom: $props.marginBottom + "rpx" }),
        renderWhole: true
      },
      [
        ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
          import_vue2.Fragment,
          null,
          (0, import_vue2.renderList)($data.vals, (item, index) => {
            return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
              class: (0, import_vue2.normalizeClass)(["fui-segmented__item", { "fui-segmented__first": index === 0 && $props.type === "button", "fui-seg__item-bg": $data.currentIndex === index && !$props.color && $props.type === "button", "fui-seg__item-border": !$props.color && $props.type === "button", "fui-segmented__item-border": $props.type === "button" }]),
              key: index,
              style: (0, import_vue2.normalizeStyle)({ borderTopLeftRadius: index === 0 ? $props.radius + "rpx" : "0", borderBottomLeftRadius: index === 0 ? $props.radius + "rpx" : "0", borderTopRightRadius: index === $props.values.length - 1 ? $props.radius + "rpx" : "0", borderBottomRightRadius: index === $props.values.length - 1 ? $props.radius + "rpx" : "0", borderColor: $props.type === "button" ? $options.getColor : "transparent", background: $data.currentIndex === index && $props.type === "button" ? $options.getColor : "transparent", height: $props.height + "rpx" }),
              onClick: ($event) => $options.handleClick(index)
            }, [
              (0, import_vue2.createElementVNode)(
                "u-text",
                {
                  style: (0, import_vue2.normalizeStyle)({ fontSize: $props.size + "rpx", color: $data.currentIndex === index ? $props.activeColor : $options.getColor, fontWeight: $props.bold && $data.currentIndex === index ? 600 : 400 }),
                  class: (0, import_vue2.normalizeClass)({ "fui-segmented__disabled": item.disabled, "fui-seg__text-color": !$props.color && $data.currentIndex !== index })
                },
                (0, import_vue2.toDisplayString)(item.name),
                7
                /* TEXT, CLASS, STYLE */
              ),
              $data.currentIndex === index && $props.type === "text" ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
                "view",
                {
                  key: 0,
                  class: "fui-segmented__item-line",
                  style: (0, import_vue2.normalizeStyle)({ background: $props.activeColor })
                },
                null,
                4
                /* STYLE */
              )) : (0, import_vue2.createCommentVNode)("v-if", true)
            ], 14, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      6
      /* CLASS, STYLE */
    );
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-segmented-control/fui-segmented-control.vue"]]);
  var _sfc_main = {
    data() {
      return {
        values: ["segmented1", "segmented2"],
        //name为约定属性，其他可自定义
        values2: [{
          id: 1,
          name: "segmented1"
        }, {
          id: 2,
          name: "segmented2"
        }, {
          id: 3,
          name: "segmented3"
        }],
        values3: [{
          name: "segmented1"
        }, {
          name: "segmented2",
          disabled: true
        }, {
          name: "segmented3"
        }]
      };
    },
    methods: {
      itemClick(e) {
        formatAppLog("log", "at pages/component/nav/segmentedControl/segmentedControl.nvue:60", e);
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_fui_segmented_control = resolveEasycom((0, import_vue2.resolveDynamicComponent)("fui-segmented-control"), __easycom_0);
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue2.createElementVNode)("view", { class: "fui-wrap" }, [
        (0, import_vue2.createElementVNode)("view", { class: "fui-page__hd" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-page__title" }, "SegmentedControl"),
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-page__desc" }, "SegmentedControl \u5206\u6BB5\u5668\u3002")
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "fui-page__bd fui-page__spacing" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-section__title fui-mtop--0" }, "\u57FA\u7840\u4F7F\u7528"),
          (0, import_vue2.createVNode)(_component_fui_segmented_control, {
            values: $data.values,
            onClick: $options.itemClick
          }, null, 8, ["values", "onClick"]),
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-section__title" }, "\u81EA\u5B9A\u4E49\u989C\u8272"),
          (0, import_vue2.createVNode)(_component_fui_segmented_control, {
            values: $data.values,
            marginTop: "24",
            color: "#FF2B2B"
          }, null, 8, ["values"]),
          (0, import_vue2.createVNode)(_component_fui_segmented_control, {
            values: $data.values,
            marginTop: "24",
            color: "#FFB703"
          }, null, 8, ["values"]),
          (0, import_vue2.createVNode)(_component_fui_segmented_control, {
            values: $data.values,
            marginTop: "24",
            color: "#09BE4F"
          }, null, 8, ["values"]),
          (0, import_vue2.createVNode)(_component_fui_segmented_control, {
            values: $data.values,
            marginTop: "24",
            color: "#6831FF"
          }, null, 8, ["values"]),
          (0, import_vue2.createVNode)(_component_fui_segmented_control, {
            values: $data.values,
            marginTop: "24",
            color: "#333333"
          }, null, 8, ["values"]),
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-section__title" }, "text\u7C7B\u578B"),
          (0, import_vue2.createVNode)(_component_fui_segmented_control, {
            values: $data.values,
            marginTop: "24",
            color: "#333",
            activeColor: "#FFB703",
            type: "text",
            height: "100",
            size: "32"
          }, null, 8, ["values"]),
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-section__title" }, "\u4E0D\u540C\u6570\u636E\u683C\u5F0F"),
          (0, import_vue2.createVNode)(_component_fui_segmented_control, {
            values: $data.values2,
            onClick: $options.itemClick
          }, null, 8, ["values", "onClick"]),
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-section__title" }, "\u7981\u7528\u72B6\u6001"),
          (0, import_vue2.createVNode)(_component_fui_segmented_control, {
            values: $data.values2,
            disabled: ""
          }, null, 8, ["values"]),
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-section__title" }, "\u9ED8\u8BA4\u9009\u4E2D"),
          (0, import_vue2.createVNode)(_component_fui_segmented_control, {
            values: $data.values2,
            current: 1
          }, null, 8, ["values"]),
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-section__title" }, "\u6539\u53D8\u5706\u89D2\u503C"),
          (0, import_vue2.createVNode)(_component_fui_segmented_control, {
            values: $data.values2,
            radius: 100
          }, null, 8, ["values"]),
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-section__title" }, "\u5355\u9879\u7981\u7528"),
          (0, import_vue2.createVNode)(_component_fui_segmented_control, { values: $data.values3 }, null, 8, ["values"])
        ])
      ])
    ]);
  }
  var segmentedControl = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/nav/segmentedControl/segmentedControl.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/component/nav/segmentedControl/segmentedControl";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    segmentedControl.mpType = "page";
    const app = Vue.createPageApp(segmentedControl, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...segmentedControl.styles || []]));
    app.mount("#root");
  }
})();
