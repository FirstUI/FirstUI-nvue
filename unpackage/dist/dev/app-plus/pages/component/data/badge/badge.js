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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/fui-badge.js
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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/fui-badge.js
  var _style_0 = { "fui-badge__wrap": { "": { "height": "36rpx", "color": "#FFFFFF", "fontSize": "24rpx", "lineHeight": "36rpx", "borderRadius": 100, "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "textAlign": "center", "zIndex": 10 } }, "fui-badge__dot": { "": { "!height": 8, "!width": 8, "borderRadius": 100, "zIndex": 10 } }, "fui-badge__text-color": { "": { "!color": "#FF2B2B" } }, "fui-badge__trans-origin": { "": { "transformOrigin": "center center" } }, "fui-badge__absolute": { "": { "position": "absolute" } } };
  uni.getSystemInfoSync();
  var _sfc_main = {
    name: "fui-badge",
    emits: ["click"],
    props: {
      value: {
        type: [Number, String],
        default: ""
      },
      max: {
        type: [Number, String],
        default: -1
      },
      //类型：primary，success，warning，danger，purple，white
      type: {
        type: String,
        default: "primary"
      },
      //背景色，如果设置背景则type失效
      background: {
        type: String,
        default: ""
      },
      //字体颜色
      color: {
        type: String,
        default: "#FFFFFF"
      },
      //是否显示为圆点
      dot: {
        type: Boolean,
        default: false
      },
      //margin-top值，单位rpx
      marginTop: {
        type: [Number, String],
        default: 0
      },
      //margin-left值，单位rpx
      marginLeft: {
        type: [Number, String],
        default: 0
      },
      //margin-right值，单位rpx
      marginRight: {
        type: [Number, String],
        default: 0
      },
      //是否绝对定位
      absolute: {
        type: Boolean,
        default: false
      },
      top: {
        type: String,
        default: "-8rpx"
      },
      right: {
        type: String,
        default: "-18rpx"
      },
      //缩放比例
      scaleRatio: {
        type: Number,
        default: 1
      }
    },
    data() {
      let isNvue = false;
      isNvue = true;
      return {
        isNvue,
        width: 0,
        showValue: ""
      };
    },
    computed: {
      getBgColor() {
        let color = this.background;
        if (!color && this.type) {
          const app = uni && uni.$fui && uni.$fui.color;
          const colors = {
            primary: app && app.primary || "#465CFF",
            success: app && app.success || "#09BE4F",
            warning: app && app.warning || "#FFB703",
            danger: app && app.danger || "#FF2B2B",
            purple: app && app.purple || "#6831FF",
            white: "#FFFFFF"
          };
          color = colors[this.type] || colors.primary;
        }
        return color;
      }
    },
    watch: {
      value(val) {
        this.getWidth();
      }
    },
    mounted() {
      this.getWidth();
    },
    methods: {
      _getTextWidth(text) {
        let sum = 0;
        for (let i = 0, len = text.length; i < len; i++) {
          if (text.charCodeAt(i) >= 0 && text.charCodeAt(i) <= 255)
            sum = sum + 1;
          else
            sum = sum + 2;
        }
        const px = uni.upx2px(text.length > 1 ? 32 : 24);
        var strCode = text.charCodeAt();
        let multiplier = 12;
        if (strCode >= 65 && strCode <= 90) {
          multiplier = 15;
        }
        return sum / 2 * multiplier + px + "px";
      },
      getWidth() {
        let max = Number(this.max);
        let val = Number(this.value);
        let value = "";
        if (isNaN(val) || max === -1) {
          value = this.value;
        } else {
          value = val > max ? `${max}+` : val;
        }
        this.showValue = value;
        this.width = this.dot ? "8px" : this._getTextWidth(String(value));
      },
      handleClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.showValue || $props.dot ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "u-text",
      {
        key: 0,
        class: (0, import_vue2.normalizeClass)([$props.dot ? "fui-badge__dot" : "fui-badge__wrap", $props.background ? "" : "fui-badge__bg-" + $props.type, $props.absolute ? "fui-badge__absolute" : "", $props.scaleRatio != 1 && $data.isNvue ? "fui-badge__trans-origin" : "", !$props.background && $props.type === "white" ? "fui-badge__text-color" : ""]),
        style: (0, import_vue2.normalizeStyle)({ top: $props.absolute ? $props.top : "auto", right: $props.absolute ? $props.right : "auto", zoom: $props.scaleRatio, transform: $data.isNvue ? `scale(${$props.scaleRatio})` : "scale(1)", marginTop: $props.marginTop + "rpx", marginLeft: $props.marginLeft + "rpx", marginRight: $props.marginRight + "rpx", width: $data.width, color: $props.color, background: $options.getBgColor }),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick && $options.handleClick(...args))
      },
      (0, import_vue2.toDisplayString)($props.dot ? "" : $data.showValue),
      7
      /* TEXT, CLASS, STYLE */
    )) : (0, import_vue2.createCommentVNode)("v-if", true);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-badge/fui-badge.vue"]]);

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/data/badge/badge.js
  var import_vue4 = __toESM(require_vue());

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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/data/badge/badge.js
  var _style_03 = { "fui-section__title": { "": { "marginLeft": "32rpx" } }, "fui-list__item": { "": { "flex": 1, "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between" } }, "fui-item__img-box": { "": { "position": "relative", "marginRight": "24rpx", "paddingTop": "8rpx", "paddingRight": "8rpx", "paddingBottom": "8rpx", "paddingLeft": 0 } }, "fui-item__img": { "": { "width": "96rpx", "height": "96rpx" } } };
  var _sfc_main3 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_fui_badge = resolveEasycom((0, import_vue4.resolveDynamicComponent)("fui-badge"), __easycom_0);
    const _component_fui_list_cell = resolveEasycom((0, import_vue4.resolveDynamicComponent)("fui-list-cell"), __easycom_2);
    return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue4.createElementVNode)("view", { class: "fui-wrap" }, [
        (0, import_vue4.createElementVNode)("view", { class: "fui-page__hd" }, [
          (0, import_vue4.createElementVNode)("u-text", { class: "fui-page__title" }, "Badge"),
          (0, import_vue4.createElementVNode)("u-text", { class: "fui-page__desc" }, "Badge \u5FBD\u7AE0\uFF0C\u53EF\u81EA\u5B9A\u4E49\u989C\u8272\u3002")
        ]),
        (0, import_vue4.createElementVNode)("view", { class: "fui-page__bd" }, [
          (0, import_vue4.createElementVNode)("u-text", { class: "fui-section__title fui-mtop--0" }, "\u57FA\u7840\u4F7F\u7528"),
          (0, import_vue4.createVNode)(_component_fui_list_cell, { highlight: false }, {
            default: (0, import_vue4.withCtx)(() => [
              (0, import_vue4.createVNode)(_component_fui_badge, { value: "1" }),
              (0, import_vue4.createVNode)(_component_fui_badge, {
                type: "success",
                value: "2"
              }),
              (0, import_vue4.createVNode)(_component_fui_badge, {
                type: "warning",
                value: "3"
              }),
              (0, import_vue4.createVNode)(_component_fui_badge, {
                type: "danger",
                value: "4"
              }),
              (0, import_vue4.createVNode)(_component_fui_badge, {
                type: "purple",
                value: "5"
              }),
              (0, import_vue4.createVNode)(_component_fui_badge, {
                value: "6",
                background: "#eee",
                color: "#333"
              }),
              (0, import_vue4.createVNode)(_component_fui_badge, { dot: "" }),
              (0, import_vue4.createVNode)(_component_fui_badge, {
                type: "success",
                dot: ""
              }),
              (0, import_vue4.createVNode)(_component_fui_badge, {
                type: "warning",
                dot: ""
              }),
              (0, import_vue4.createVNode)(_component_fui_badge, {
                type: "danger",
                dot: ""
              }),
              (0, import_vue4.createVNode)(_component_fui_badge, {
                type: "purple",
                dot: ""
              })
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue4.createElementVNode)("u-text", { class: "fui-section__title" }, "\u65B0\u6D88\u606F"),
          (0, import_vue4.createVNode)(_component_fui_list_cell, {
            arrow: "",
            topBorder: ""
          }, {
            default: (0, import_vue4.withCtx)(() => [
              (0, import_vue4.createElementVNode)("view", { class: "fui-list__item" }, [
                (0, import_vue4.createElementVNode)("u-text", { class: "fui-text" }, "\u5355\u884C\u5217\u8868"),
                (0, import_vue4.createVNode)(_component_fui_badge, {
                  value: "1",
                  type: "danger"
                })
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue4.createVNode)(_component_fui_list_cell, { arrow: "" }, {
            default: (0, import_vue4.withCtx)(() => [
              (0, import_vue4.createElementVNode)("view", { class: "fui-list__item" }, [
                (0, import_vue4.createElementVNode)("u-text", { class: "fui-text" }, "\u5355\u884C\u5217\u8868"),
                (0, import_vue4.createVNode)(_component_fui_badge, {
                  dot: "",
                  type: "danger"
                })
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue4.createVNode)(_component_fui_list_cell, { arrow: "" }, {
            default: (0, import_vue4.withCtx)(() => [
              (0, import_vue4.createElementVNode)("view", { class: "fui-align__center" }, [
                (0, import_vue4.createElementVNode)("u-text", { class: "fui-text" }, "\u5355\u884C\u5217\u8868"),
                (0, import_vue4.createVNode)(_component_fui_badge, {
                  type: "danger",
                  marginLeft: 16,
                  value: "8"
                })
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue4.createVNode)(_component_fui_list_cell, {
            arrow: "",
            bottomLeft: 0
          }, {
            default: (0, import_vue4.withCtx)(() => [
              (0, import_vue4.createElementVNode)("view", { class: "fui-align__center" }, [
                (0, import_vue4.createElementVNode)("u-text", { class: "fui-text" }, "\u5355\u884C\u5217\u8868"),
                (0, import_vue4.createVNode)(_component_fui_badge, {
                  type: "danger",
                  marginLeft: 16,
                  value: "new"
                })
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue4.createElementVNode)("u-text", { class: "fui-section__title" }, "\u65B0\u6D88\u606F\u3001\u7EDD\u5BF9\u5B9A\u4F4D"),
          (0, import_vue4.createVNode)(_component_fui_list_cell, {
            topBorder: "",
            padding: ["24rpx", "32rpx"]
          }, {
            default: (0, import_vue4.withCtx)(() => [
              (0, import_vue4.createCommentVNode)(" \u6CE8: nvue android \u7AEF\u5143\u7D20\u9ED8\u8BA4\u8D85\u51FA\u9690\u85CF\uFF0Cbadge\u8BF7\u52FF\u8D85\u51FA\u7236\u7EA7\u5143\u7D20 "),
              (0, import_vue4.createElementVNode)("view", { class: "fui-align__center" }, [
                (0, import_vue4.createElementVNode)("view", { class: "fui-item__img-box" }, [
                  (0, import_vue4.createElementVNode)("u-image", {
                    class: "fui-item__img",
                    src: "/static/images/common/icon_tabbar_3x.png",
                    mode: "widthFix"
                  }),
                  (0, import_vue4.createVNode)(_component_fui_badge, {
                    absolute: "",
                    type: "danger",
                    value: 2,
                    top: "0",
                    right: "0"
                  })
                ]),
                (0, import_vue4.createElementVNode)("view", null, [
                  (0, import_vue4.createElementVNode)("u-text", { class: "fui-text" }, "\u8054\u7CFB\u4EBA\u540D\u79F0"),
                  (0, import_vue4.createElementVNode)("u-text", { class: "fui-page__desc" }, "\u6458\u8981\u4FE1\u606F")
                ])
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue4.createVNode)(_component_fui_list_cell, {
            bottomLeft: 0,
            padding: ["24rpx", "32rpx"]
          }, {
            default: (0, import_vue4.withCtx)(() => [
              (0, import_vue4.createElementVNode)("view", { class: "fui-align__center" }, [
                (0, import_vue4.createElementVNode)("view", { class: "fui-item__img-box" }, [
                  (0, import_vue4.createElementVNode)("u-image", {
                    class: "fui-item__img",
                    src: "/static/images/common/icon_tabbar_3x.png",
                    mode: "widthFix"
                  }),
                  (0, import_vue4.createVNode)(_component_fui_badge, {
                    absolute: "",
                    type: "danger",
                    dot: "",
                    top: "0",
                    right: "0"
                  })
                ]),
                (0, import_vue4.createElementVNode)("view", null, [
                  (0, import_vue4.createElementVNode)("u-text", { class: "fui-text" }, "\u8054\u7CFB\u4EBA\u540D\u79F0"),
                  (0, import_vue4.createElementVNode)("u-text", { class: "fui-page__desc" }, "\u6458\u8981\u4FE1\u606F")
                ])
              ])
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ])
    ]);
  }
  var badge = /* @__PURE__ */ _export_sfc(_sfc_main3, [["render", _sfc_render3], ["styles", [_style_03]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/data/badge/badge.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/component/data/badge/badge";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    badge.mpType = "page";
    const app = Vue.createPageApp(badge, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...badge.styles || []]));
    app.mount("#root");
  }
})();
