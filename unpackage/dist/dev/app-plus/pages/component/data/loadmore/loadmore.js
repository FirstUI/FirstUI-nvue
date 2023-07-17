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
  function resolveEasycom(component, easycom) {
    return isString(component) ? easycom : component;
  }

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/data/loadmore/loadmore.js
  var import_vue2 = __toESM(require_vue());
  var _style_0$1 = { "fui-loadmore__wrap": { "": { "alignItems": "center", "justifyContent": "center" } }, "fui-loadmore__col": { "": { "flexDirection": "column" } }, "fui-loadmore__row": { "": { "flexDirection": "row" } }, "fui-loadmore__icon": { "": { "marginTop": 0, "marginRight": 6, "marginBottom": 0, "marginLeft": 6, "borderWidth": 2, "borderStyle": "solid", "borderRadius": 100 } }, "fui-loadmore__icon-ani": { "": { "marginTop": 0, "marginRight": 6, "marginBottom": 0, "marginLeft": 6 } }, "fui-loadmore__text": { "": { "paddingTop": "16rpx" } } };
  var animation = requireNativePlugin("animation");
  var _sfc_main$1 = {
    name: "fui-loadmore",
    props: {
      //占据高度，单位rx
      height: {
        type: [Number, String],
        default: 100
      },
      //1-上拉加载 2-正在加载... 3-没有更多了
      state: {
        type: [Number, String],
        default: 2
      },
      initText: {
        type: String,
        default: "\u4E0A\u62C9\u52A0\u8F7D"
      },
      //提示文字
      text: {
        type: String,
        default: "\u6B63\u5728\u52A0\u8F7D..."
      },
      noneText: {
        type: String,
        default: "\u6CA1\u6709\u66F4\u591A\u4E86"
      },
      //文字颜色
      color: {
        type: String,
        default: "#7F7F7F"
      },
      //文字大小，单位rpx
      size: {
        type: [Number, String],
        default: 24
      },
      //loading图标背景色
      iconColor: {
        type: String,
        default: "#B2B2B2"
      },
      //loading图标高亮部分颜色
      activeColor: {
        type: String,
        default: ""
      },
      //loading 图标的宽度，单位rpx
      iconWidth: {
        type: [Number, String],
        default: 32
      },
      //自定义loading图标image路径，若自定义图标则iconColor、activeColor属性失效
      src: {
        type: String,
        default: ""
      },
      //loading图标和文字排列方向，可取值：col，row
      direction: {
        type: String,
        default: "row"
      }
    },
    watch: {
      state(newValue, oldValue) {
        this.$nextTick(() => {
          if (newValue == 2) {
            this.stop = false;
            setTimeout(() => {
              this._animation();
            }, 50);
          } else {
            this.stop = true;
          }
        });
      }
    },
    computed: {
      getActiveColor() {
        let color = this.activeColor;
        if (!color || color === true) {
          const app = uni && uni.$fui && uni.$fui.color;
          color = app && app.primary || "#465CFF";
        }
        return color;
      }
    },
    data() {
      let isNvue = false;
      isNvue = true;
      return {
        isNvue,
        deg: 0,
        stop: false
      };
    },
    mounted() {
      this.$nextTick(() => {
        setTimeout(() => {
          this.deg += 360;
          this._animation();
        }, 50);
      });
    },
    beforeUnmount() {
      this.deg = 0;
      this.stop = true;
    },
    methods: {
      getStateText(state) {
        state = Number(state);
        return [this.initText, this.text, this.noneText][state - 1];
      },
      _animation() {
        if (!this.$refs["fui_loadmore"] || this.stop)
          return;
        animation.transition(
          this.$refs["fui_loadmore"].ref,
          {
            styles: {
              transform: `rotate(${this.deg}deg)`
            },
            duration: 700,
            //ms
            timingFunction: "linear",
            iterationCount: "infinite",
            needLayout: false,
            delay: 0
            //ms
          },
          () => {
            this.deg += 360;
            this._animation();
          }
        );
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "view",
      {
        class: (0, import_vue2.normalizeClass)(["fui-loadmore__wrap", ["fui-loadmore__" + $props.direction]]),
        style: (0, import_vue2.normalizeStyle)({ height: $props.height + "rpx" }),
        renderWhole: true
      },
      [
        !$props.src && $props.state == 2 ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
          "view",
          {
            key: 0,
            class: (0, import_vue2.normalizeClass)(["fui-loadmore__icon", { "fui-loadmore__border-left": !$data.isNvue && !$props.activeColor }]),
            ref: "fui_loadmore",
            style: (0, import_vue2.normalizeStyle)({ width: $props.iconWidth + "rpx", height: $props.iconWidth + "rpx", "border-left-color": $options.getActiveColor, "border-right-color": $props.iconColor, "border-top-color": $props.iconColor, "border-bottom-color": $props.iconColor })
          },
          null,
          6
          /* CLASS, STYLE */
        )) : (0, import_vue2.createCommentVNode)("v-if", true),
        $props.src && $props.state == 2 ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("u-image", {
          key: 1,
          class: "fui-loadmore__icon-ani",
          ref: "fui_loadmore",
          src: $props.src,
          style: (0, import_vue2.normalizeStyle)({ width: $props.iconWidth + "rpx", height: $props.iconWidth + "rpx" })
        }, null, 12, ["src"])) : (0, import_vue2.createCommentVNode)("v-if", true),
        (0, import_vue2.createElementVNode)(
          "u-text",
          {
            class: (0, import_vue2.normalizeClass)({ "fui-loadmore__text": $props.direction === "col" }),
            style: (0, import_vue2.normalizeStyle)({ color: $props.color, "font-size": $props.size + "rpx", "line-height": $props.size + "rpx" })
          },
          (0, import_vue2.toDisplayString)($options.getStateText($props.state)),
          7
          /* TEXT, CLASS, STYLE */
        )
      ],
      6
      /* CLASS, STYLE */
    );
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-loadmore/fui-loadmore.vue"]]);
  var _style_0 = { "fui-section__title": { "": { "marginLeft": "32rpx" } } };
  var _sfc_main = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_fui_loadmore = resolveEasycom((0, import_vue2.resolveDynamicComponent)("fui-loadmore"), __easycom_0);
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue2.createElementVNode)("view", { class: "fui-wrap" }, [
        (0, import_vue2.createElementVNode)("view", { class: "fui-page__hd" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-page__title" }, "LoadMore"),
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-page__desc" }, "LoadMore \u52A0\u8F7D\u66F4\u591A\uFF0C\u4E3B\u8981\u4F7F\u7528\u573A\u666F\u5982\uFF1A\u4E0A\u62C9\u52A0\u8F7D\u7B49\u3002")
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "fui-page__bd" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-section__title fui-mtop--0" }, "\u57FA\u672C\u4F7F\u7528"),
          (0, import_vue2.createVNode)(_component_fui_loadmore),
          (0, import_vue2.createVNode)(_component_fui_loadmore, { activeColor: "#FFB703" }),
          (0, import_vue2.createVNode)(_component_fui_loadmore, {
            iconColor: "rgba(255, 183, 3, .2)",
            activeColor: "#FFB703",
            color: "#FFB703"
          }),
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-section__title" }, "direction:col"),
          (0, import_vue2.createVNode)(_component_fui_loadmore, {
            direction: "col",
            text: "\u52A0\u8F7D\u4E2D",
            color: "#465CFF"
          }),
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-section__title" }, "\u81EA\u5B9A\u4E49\u56FE\u6807"),
          (0, import_vue2.createVNode)(_component_fui_loadmore, {
            src: "/static/images/component/loading_gray.png",
            iconWidth: 36,
            text: "\u52A0\u8F7D\u4E2D..."
          })
        ])
      ])
    ]);
  }
  var loadmore = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/data/loadmore/loadmore.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/component/data/loadmore/loadmore";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    loadmore.mpType = "page";
    const app = Vue.createPageApp(loadmore, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...loadmore.styles || []]));
    app.mount("#root");
  }
})();
