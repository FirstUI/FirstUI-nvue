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
  function requireNativePlugin(name) {
    return weex.requireModule(name);
  }
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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/nav/drawer/drawer.js
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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/nav/drawer/drawer.js
  var _style_0$1 = { "fui-drawer__popup-wrap": { "": { "position": "fixed", "left": 0, "right": 0, "top": 0, "bottom": 0, "zIndex": 1001, "flexDirection": "column", "opacity": 0, "overflow": "hidden" } }, "fui-drawer__popup": { "": { "flex": 1, "flexDirection": "column", "overflow": "hidden" } }, "fui-drawer_left": { "": { "transform": "translateX(-100%)" } }, "fui-drawer_right": { "": { "transform": "translateX(100%)" } } };
  var dom = weex.requireModule("dom");
  var animation = requireNativePlugin("animation");
  var _sfc_main$1 = {
    name: "fui-drawer",
    emits: ["close"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      //left/right
      direction: {
        type: String,
        default: "right"
      },
      //背景颜色
      background: {
        type: String,
        default: "#fff"
      },
      zIndex: {
        type: [Number, String],
        default: 996
      },
      //点击遮罩 是否可关闭
      maskClosable: {
        type: Boolean,
        default: true
      },
      maskBackground: {
        type: String,
        default: "rgba(0,0,0,.6)"
      },
      //圆角值，左侧打开时为右侧圆角，右侧打开时为左侧圆角
      radius: {
        type: [Number, String],
        default: 0
      }
    },
    data() {
      let isNvue = false;
      isNvue = true;
      return {
        isNvue,
        isShow: false,
        width: 0,
        isMounted: false
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            this.close();
          }
        },
        immediate: true
      }
    },
    mounted() {
      this.isMounted = true;
      this.$nextTick(() => {
        setTimeout(() => {
          this._getSize((width) => {
            this.width = width;
          });
        }, 100);
      });
    },
    methods: {
      _getSize(callback) {
        dom.getComponentRect(this.$refs["fui_dwr_ani"], (ret) => {
          const size = ret.size;
          if (size) {
            callback && callback(size.width);
          }
        });
      },
      handleClose(e) {
        if (!this.maskClosable)
          return;
        this.$emit("close", {});
      },
      open() {
        this.isShow = true;
        this.$nextTick(() => {
          setTimeout(() => {
            this._animation(true);
          }, 50);
        });
      },
      close() {
        this._animation(false);
      },
      _animation(type) {
        if (!this.$refs["fui_dwr_ani"] || !this.$refs["fui_dwr_mk_ani"])
          return;
        animation.transition(
          this.$refs["fui_dwr_mk_ani"].ref,
          {
            styles: {
              opacity: type ? 1 : 0
            },
            duration: 250,
            timingFunction: "ease-in-out",
            needLayout: false,
            delay: 0
            //ms
          },
          () => {
            if (!type) {
              this.isShow = false;
            }
          }
        );
        let translateX = this.direction === "left" ? "-100%" : "100%";
        animation.transition(
          this.$refs["fui_dwr_ani"].ref,
          {
            styles: {
              transform: `translateX(${type ? "0" : translateX})`
            },
            duration: 250,
            timingFunction: "ease-in-out",
            needLayout: false,
            delay: 0
            //ms
          },
          () => {
          }
        );
      },
      stop(e, tap) {
        tap && e.stopPropagation();
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.isShow || !$data.isNvue ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
      "view",
      {
        key: 0,
        class: (0, import_vue4.normalizeClass)(["fui-drawer__popup-wrap", { "fui-drawer__wrap-show": $props.show }]),
        style: (0, import_vue4.normalizeStyle)({ zIndex: $props.zIndex, background: $props.maskBackground, alignItems: $props.direction === "left" ? "flex-start" : "flex-end" }),
        onClick: _cache[1] || (_cache[1] = (0, import_vue4.withModifiers)((...args) => $options.handleClose && $options.handleClose(...args), ["stop"])),
        onTouchmove: _cache[2] || (_cache[2] = (0, import_vue4.withModifiers)((...args) => $options.stop && $options.stop(...args), ["stop", "prevent"])),
        ref: "fui_dwr_mk_ani",
        renderWhole: true
      },
      [
        (0, import_vue4.createElementVNode)(
          "view",
          {
            ref: "fui_dwr_ani",
            class: (0, import_vue4.normalizeClass)(["fui-drawer__popup", ["fui-drawer_" + $props.direction, $props.show ? "fui-drawer__show" : ""]]),
            style: (0, import_vue4.normalizeStyle)({ background: $props.background, borderTopLeftRadius: ($props.direction === "right" ? $props.radius : 0) + "rpx", borderBottomLeftRadius: ($props.direction === "right" ? $props.radius : 0) + "rpx", borderTopRightRadius: ($props.direction === "left" ? $props.radius : 0) + "rpx", borderBottomRightRadius: ($props.direction === "left" ? $props.radius : 0) + "rpx" }),
            onClick: _cache[0] || (_cache[0] = (0, import_vue4.withModifiers)(($event) => $options.stop($event, true), ["stop"]))
          },
          [
            (0, import_vue4.renderSlot)(_ctx.$slots, "default")
          ],
          6
          /* CLASS, STYLE */
        )
      ],
      38
      /* CLASS, STYLE, HYDRATE_EVENTS */
    )) : (0, import_vue4.createCommentVNode)("v-if", true);
  }
  var __easycom_22 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-drawer/fui-drawer.vue"]]);
  var _style_03 = { "fui-page__bd": { "": { "alignItems": "center", "justifyContent": "center", "flexDirection": "column" } }, "fui-scroll__view": { "": { "width": "520rpx", "flex": 1, "overflow": "hidden" } }, "fui-title": { "": { "paddingTop": "64rpx", "paddingRight": "32rpx", "paddingBottom": "32rpx", "paddingLeft": "32rpx", "fontWeight": "bold" } }, "fui-btn__box": { "": { "paddingTop": "40rpx", "paddingRight": 0, "paddingBottom": "40rpx", "paddingLeft": 0, "flexDirection": "row", "justifyContent": "center" } } };
  var _sfc_main3 = {
    data() {
      return {
        show: false,
        show2: false,
        itemList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
      };
    },
    methods: {
      showDrawer(type) {
        if (type === 1) {
          this.show = true;
        } else {
          this.show2 = true;
        }
      },
      closeDrawer(type) {
        if (type === 1) {
          this.show = false;
        } else {
          this.show2 = false;
        }
      }
    }
  };
  function _sfc_render3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_fui_button = resolveEasycom((0, import_vue4.resolveDynamicComponent)("fui-button"), __easycom_0);
    const _component_fui_list_cell = resolveEasycom((0, import_vue4.resolveDynamicComponent)("fui-list-cell"), __easycom_2);
    const _component_fui_drawer = resolveEasycom((0, import_vue4.resolveDynamicComponent)("fui-drawer"), __easycom_22);
    return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue4.createElementVNode)("view", { class: "fui-wrap" }, [
        (0, import_vue4.createElementVNode)("view", { class: "fui-page__hd" }, [
          (0, import_vue4.createElementVNode)("u-text", { class: "fui-page__title" }, "Drawer"),
          (0, import_vue4.createElementVNode)("u-text", { class: "fui-page__desc" }, "Drawer \u62BD\u5C49\uFF0C\u62BD\u5C49\u5F0F\u5BFC\u822A\uFF0C\u7528\u4E8E\u5C55\u793A\u4FA7\u6ED1\u83DC\u5355\uFF0C\u4FA7\u6ED1\u5BFC\u822A\u3002")
        ]),
        (0, import_vue4.createElementVNode)("view", { class: "fui-page__bd" }, [
          (0, import_vue4.createVNode)(_component_fui_button, {
            type: "gray",
            "btn-size": "medium",
            text: "\u4ECE\u53F3\u5F80\u5DE6\u5F00",
            bold: "",
            margin: ["24rpx"],
            onClick: _cache[0] || (_cache[0] = ($event) => $options.showDrawer(1))
          }),
          (0, import_vue4.createVNode)(_component_fui_button, {
            type: "gray",
            "btn-size": "medium",
            text: "\u4ECE\u5DE6\u5F80\u53F3\u5F00",
            bold: "",
            onClick: _cache[1] || (_cache[1] = ($event) => $options.showDrawer(2))
          })
        ]),
        (0, import_vue4.createVNode)(_component_fui_drawer, {
          show: $data.show,
          onClose: _cache[2] || (_cache[2] = ($event) => $options.closeDrawer(1))
        }, {
          default: (0, import_vue4.withCtx)(() => [
            (0, import_vue4.createElementVNode)("scroll-view", {
              scrollY: "",
              class: "fui-scroll__view"
            }, [
              (0, import_vue4.createElementVNode)("view", null, [
                ((0, import_vue4.openBlock)(true), (0, import_vue4.createElementBlock)(
                  import_vue4.Fragment,
                  null,
                  (0, import_vue4.renderList)($data.itemList, (item, index) => {
                    return (0, import_vue4.openBlock)(), (0, import_vue4.createBlock)(
                      _component_fui_list_cell,
                      {
                        arrow: "",
                        key: index
                      },
                      {
                        default: (0, import_vue4.withCtx)(() => [
                          (0, import_vue4.createElementVNode)(
                            "u-text",
                            { class: "fui-text" },
                            "item" + (0, import_vue4.toDisplayString)(index + 1),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["show"]),
        (0, import_vue4.createVNode)(_component_fui_drawer, {
          show: $data.show2,
          direction: "left",
          radius: 24,
          maskClosable: false
        }, {
          default: (0, import_vue4.withCtx)(() => [
            (0, import_vue4.createElementVNode)("view", { class: "fui-scroll__view" }, [
              (0, import_vue4.createElementVNode)("view", { class: "fui-title" }, [
                (0, import_vue4.createElementVNode)("u-text", null, "\u5DE6\u4FA7\u83DC\u5355\u680F")
              ]),
              (0, import_vue4.createElementVNode)("scroll-view", {
                scrollY: "",
                style: { "height": "720rpx" }
              }, [
                (0, import_vue4.createElementVNode)("view", null, [
                  ((0, import_vue4.openBlock)(true), (0, import_vue4.createElementBlock)(
                    import_vue4.Fragment,
                    null,
                    (0, import_vue4.renderList)($data.itemList, (item, index) => {
                      return (0, import_vue4.openBlock)(), (0, import_vue4.createBlock)(
                        _component_fui_list_cell,
                        { key: index },
                        {
                          default: (0, import_vue4.withCtx)(() => [
                            (0, import_vue4.createElementVNode)(
                              "u-text",
                              { class: "fui-text" },
                              "item" + (0, import_vue4.toDisplayString)(index + 1),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 2
                          /* DYNAMIC */
                        },
                        1024
                        /* DYNAMIC_SLOTS */
                      );
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ]),
              (0, import_vue4.createElementVNode)("view", { class: "fui-btn__box" }, [
                (0, import_vue4.createVNode)(_component_fui_button, {
                  type: "warning",
                  "btn-size": "medium",
                  text: "\u5173\u95ED\u83DC\u5355\u680F",
                  bold: "",
                  onClick: _cache[3] || (_cache[3] = ($event) => $options.closeDrawer(2))
                })
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["show"])
      ])
    ]);
  }
  var drawer = /* @__PURE__ */ _export_sfc(_sfc_main3, [["render", _sfc_render3], ["styles", [_style_03]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/nav/drawer/drawer.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/component/nav/drawer/drawer";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    drawer.mpType = "page";
    const app = Vue.createPageApp(drawer, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...drawer.styles || []]));
    app.mount("#root");
  }
})();
