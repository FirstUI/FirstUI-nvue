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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/basics/button/button.js
  var import_vue5 = __toESM(require_vue());

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/fui-button.js
  var import_vue3 = __toESM(require_vue());
  var _style_02 = { "fui-button__wrap": { "": { "position": "relative" } }, "fui-button": { "": { "borderWidth": 0, "borderStyle": "solid", "position": "relative", "paddingLeft": 0, "paddingRight": 0, "borderWidth::after": 0, "borderStyle::after": "solid", "borderColor::after": "#000000" } }, "fui-button__flex-1": { "": { "flex": 1 } }, "fui-button__text": { "": { "textAlign": "center", "flexDirection": "row", "alignItems": "center", "!justifyContent": "center", "!paddingLeft": 0 } }, "fui-button__opacity": { "": { "opacity": 0.5 } }, "fui-text__bold": { "": { "fontWeight": "bold" } }, "fui-button__link": { "": { "!borderColor": "rgba(0,0,0,0)", "!backgroundColor": "rgba(0,0,0,0)" } } };
  var _sfc_main2 = {
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
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_button = (0, import_vue3.resolveComponent)("button");
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
      "view",
      {
        class: (0, import_vue3.normalizeClass)(["fui-button__wrap", [!$options.getWidth || $options.getWidth === "100%" || $options.getWidth === true ? "fui-button__flex-1" : "", $props.disabled && !$props.disabledBackground ? "fui-button__opacity" : ""]]),
        style: (0, import_vue3.normalizeStyle)({ width: $options.getWidth, height: $options.getHeight, marginTop: $props.margin[0] || 0, marginRight: $props.margin[1] || 0, marginBottom: $props.margin[2] || $props.margin[0] || 0, marginLeft: $props.margin[3] || $props.margin[1] || 0, borderRadius: $options.getRadius, background: $options.getBackground }),
        onTouchstart: _cache[0] || (_cache[0] = (...args) => $options.handleStart && $options.handleStart(...args)),
        onTouchend: _cache[1] || (_cache[1] = (...args) => $options.handleClick && $options.handleClick(...args)),
        onTouchcancel: _cache[2] || (_cache[2] = (...args) => $options.handleEnd && $options.handleEnd(...args)),
        renderWhole: true
      },
      [
        (0, import_vue3.createVNode)(_component_button, {
          class: (0, import_vue3.normalizeClass)(["fui-button", [
            $props.bold ? "fui-text__bold" : "",
            $data.time && ($props.plain || $props.type === "link") ? "fui-button__opacity" : "",
            !$props.background && !$props.disabledBackground && !$props.plain ? "fui-button__" + $props.type : "",
            !$options.getWidth || $options.getWidth === "100%" || $options.getWidth === true ? "fui-button__flex-1" : "",
            $data.time && !$props.plain && $props.type !== "link" ? "fui-button__active" : "",
            $data.pc && !$props.disabled ? $props.plain || $props.type === "link" ? "fui-button__opacity-pc" : "fui-button__active-pc" : ""
          ]]),
          style: (0, import_vue3.normalizeStyle)({
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
          onClick: (0, import_vue3.withModifiers)($options.handleTap, ["stop"])
        }, {
          default: (0, import_vue3.withCtx)(() => [
            $props.text ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
              "u-text",
              {
                key: 0,
                class: (0, import_vue3.normalizeClass)(["fui-button__text", { "fui-btn__gray-color": !$props.background && !$props.disabledBackground && !$props.plain && $props.type === "gray" && $props.color === "#fff", "fui-text__bold": $props.bold }]),
                style: (0, import_vue3.normalizeStyle)({ fontSize: $options.getSize, lineHeight: $options.getSize, color: $options.getColor })
              },
              (0, import_vue3.toDisplayString)($props.text),
              7
              /* TEXT, CLASS, STYLE */
            )) : (0, import_vue3.createCommentVNode)("v-if", true),
            (0, import_vue3.renderSlot)(_ctx.$slots, "default")
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["class", "style", "loading", "form-type", "open-type", "app-parameter", "onGetuserinfo", "onGetphonenumber", "onContact", "onError", "onOpensetting", "onChooseavatar", "onLaunchapp", "disabled", "scope", "onClick"])
      ],
      38
      /* CLASS, STYLE, HYDRATE_EVENTS */
    );
  }
  var __easycom_02 = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-button/fui-button.vue"]]);

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/fui-text.js
  var import_vue4 = __toESM(require_vue());
  var _style_03 = { "fui-text__wrap": { "": { "alignItems": "center", "flexDirection": "row" } }, "fui-text__active": { "": { "opacity:active": 0.5 } }, "fui-text__nvue": { "": { "flex": 1 } }, "fui-text__center": { "": { "justifyContent": "center" } }, "fui-text__right": { "": { "justifyContent": "flex-end" } } };
  var _sfc_main3 = {
    name: "fui-text",
    emits: ["click"],
    props: {
      //样式类型：primary，success， warning，danger，purple，gray，black
      type: {
        type: String,
        default: "black"
      },
      text: {
        type: [Number, String],
        default: ""
      },
      size: {
        type: [Number, String],
        default: 0
      },
      unit: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: ""
      },
      fontWeight: {
        type: [Number, String],
        default: 400
      },
      //left、center、right
      align: {
        type: String,
        default: "left"
      },
      //none、 underline、line-through 
      decoration: {
        type: String,
        default: "none"
      },
      //是否将行高设置与字体大小一致
      lineHeight: {
        type: Boolean,
        default: false
      },
      padding: {
        type: Array,
        default() {
          return ["0", "0"];
        }
      },
      block: {
        type: Boolean,
        default: false
      },
      //文本类型：text、mobile、amount、name
      textType: {
        type: String,
        default: "text"
      },
      //是否格式化，仅mobile、amount时有效
      format: {
        type: Boolean,
        default: false
      },
      call: {
        type: Boolean,
        default: false
      },
      //文本是否可选：nvue不支持，加此属性导致事件无法冒泡
      selectable: {
        type: Boolean,
        default: false
      },
      //文本是否可选：微信小程序
      userSelect: {
        type: Boolean,
        default: false
      },
      //是否解码：App、H5、微信小程序
      decode: {
        type: Boolean,
        default: false
      },
      //是否有点击效果
      highlight: {
        type: Boolean,
        default: false
      },
      disable: {
        type: Boolean,
        default: false
      },
      unShrink: {
        type: Boolean,
        default: false
      },
      param: {
        type: [Number, String],
        default: ""
      }
    },
    computed: {
      getSize() {
        const size = uni && uni.$fui && uni.$fui.fuiText && uni.$fui.fuiText.size || 32;
        const unit = uni && uni.$fui && uni.$fui.fuiText && uni.$fui.fuiText.unit || "rpx";
        return (this.size || size) + (this.unit || unit);
      },
      getColor() {
        let color = this.color || "";
        if (!color && this.type) {
          const app = uni && uni.$fui && uni.$fui.color;
          const text = uni && uni.$fui && uni.$fui.fuiText;
          color = {
            primary: app && app.primary || "#465CFF",
            success: app && app.success || "#09BE4F",
            warning: app && app.warning || "#FFB703",
            danger: app && app.danger || "#FF2B2B",
            purple: app && app.purple || "#6831FF",
            gray: "#B2B2B2",
            black: text && text.color || "#181818"
          }[this.type];
        }
        return color;
      }
    },
    methods: {
      getText(text, textType, format) {
        let _text = text;
        if (format) {
          if (textType === "mobile") {
            _text = this.numberFormatter(text);
          } else if (textType === "amount") {
            _text = this.moneyFormatter(text);
          } else if (textType === "name") {
            _text = this.nameFormatter(text);
          }
        }
        return _text;
      },
      numberFormatter(num) {
        return num.length === 11 ? num.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2") : num;
      },
      moneyFormatter(money) {
        return parseFloat(money).toFixed(2).toString().split("").reverse().join("").replace(/(\d{3})/g, "$1,").replace(
          /\,$/,
          ""
        ).split("").reverse().join("");
      },
      trimAll(value) {
        return value.toString().replace(/\s+/g, "");
      },
      nameFormatter(name) {
        let _name = this.trimAll(name || "");
        if (_name && _name.length >= 2) {
          const arr = _name.split("");
          _name = arr[0] + "*";
          if (arr.length > 2) {
            _name = _name + arr[arr.length - 1];
          }
        }
        return _name;
      },
      handleTap() {
        if (this.disable)
          return;
        this.$emit("click", {
          text: this.text,
          param: this.param
        });
        if (this.call) {
          uni.makePhoneCall({
            phoneNumber: this.text
          });
        }
      }
    }
  };
  function _sfc_render3(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
      "view",
      {
        class: (0, import_vue4.normalizeClass)(["fui-text__wrap", [$props.block ? "fui-text__block" : "fui-text__inline", "fui-text__" + $props.align, $props.highlight && !$props.disable ? "fui-text__active" : ""]]),
        style: (0, import_vue4.normalizeStyle)({ textAlign: $props.align, paddingTop: $props.padding[0] || 0, paddingRight: $props.padding[1] || 0, paddingBottom: $props.padding[2] || $props.padding[0] || 0, paddingLeft: $props.padding[3] || $props.padding[1] || 0 }),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.handleTap && $options.handleTap(...args)),
        renderWhole: true
      },
      [
        (0, import_vue4.renderSlot)(_ctx.$slots, "default"),
        (0, import_vue4.createElementVNode)("view", { class: "fui-text__nvue" }, [
          (0, import_vue4.createElementVNode)("u-text", {
            class: (0, import_vue4.normalizeClass)(["fui-text__content", [$props.color ? "" : "fui-text__" + $props.type, $props.unShrink ? "fui-text__unshrink" : ""]]),
            style: (0, import_vue4.normalizeStyle)({ color: $options.getColor, fontSize: $options.getSize, lineHeight: $props.lineHeight ? $options.getSize : "auto", textAlign: $props.align, textDecoration: $props.decoration, fontWeight: $props.fontWeight }),
            userSelect: $props.userSelect,
            decode: $props.decode
          }, (0, import_vue4.toDisplayString)($options.getText($props.text, $props.textType, $props.format)), 15, ["userSelect", "decode"])
        ]),
        (0, import_vue4.renderSlot)(_ctx.$slots, "right")
      ],
      6
      /* CLASS, STYLE */
    );
  }
  var __easycom_03 = /* @__PURE__ */ _export_sfc(_sfc_main3, [["render", _sfc_render3], ["styles", [_style_03]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-text/fui-text.vue"]]);

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/basics/button/button.js
  var _style_04 = { "fui-color__white": { "": { "color": "#FFFFFF", "fontSize": "32rpx" } } };
  var _sfc_main4 = {
    data() {
      return {};
    },
    methods: {
      btnClick() {
        uni.$fui.toast("click~");
      }
    }
  };
  function _sfc_render4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_fui_section = resolveEasycom((0, import_vue5.resolveDynamicComponent)("fui-section"), __easycom_0);
    const _component_fui_button = resolveEasycom((0, import_vue5.resolveDynamicComponent)("fui-button"), __easycom_02);
    const _component_fui_text = resolveEasycom((0, import_vue5.resolveDynamicComponent)("fui-text"), __easycom_03);
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue5.createElementVNode)("view", { class: "fui-wrap" }, [
        (0, import_vue5.createElementVNode)("view", { class: "fui-page__hd" }, [
          (0, import_vue5.createElementVNode)("u-text", { class: "fui-page__title" }, "Button"),
          (0, import_vue5.createElementVNode)("u-text", { class: "fui-page__desc" }, "Button \u6309\u94AE\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u5927\u5C0F\u3001\u989C\u8272\u7B49\u3002")
        ]),
        (0, import_vue5.createElementVNode)("view", { class: "fui-page__bd fui-page__spacing" }, [
          (0, import_vue5.createVNode)(_component_fui_section, {
            title: "\u6309\u94AE\u7C7B\u578B",
            padding: ["0", "0"],
            "margin-bottom": "32",
            "is-line": ""
          }),
          (0, import_vue5.createVNode)(_component_fui_button, {
            text: "\u9ED8\u8BA4\u6309\u94AE",
            onClick: $options.btnClick
          }, null, 8, ["onClick"]),
          (0, import_vue5.createCommentVNode)(" \u6CE8\uFF1Anvue\u7AEF\u4F7F\u7528\u63D2\u69FD\u6587\u672C\u6837\u5F0F\u9700\u81EA\u884C\u5B9A\u4E49\uFF0C\u4E14\u9700text \u6807\u7B7E \u5305\u88F9 "),
          (0, import_vue5.createVNode)(_component_fui_button, {
            margin: ["24rpx"],
            type: "success"
          }, {
            default: (0, import_vue5.withCtx)(() => [
              (0, import_vue5.createVNode)(_component_fui_text, {
                color: "#fff",
                text: "success"
              })
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue5.createVNode)(_component_fui_button, { type: "warning" }, {
            default: (0, import_vue5.withCtx)(() => [
              (0, import_vue5.createElementVNode)("u-text", { class: "fui-color__white" }, "warning")
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue5.createVNode)(_component_fui_button, {
            margin: ["24rpx"],
            type: "danger",
            text: "danger"
          }),
          (0, import_vue5.createVNode)(_component_fui_button, {
            type: "purple",
            text: "purple"
          }),
          (0, import_vue5.createVNode)(_component_fui_button, {
            margin: ["24rpx"],
            type: "link",
            color: "#465CFF",
            text: "\u94FE\u63A5 link"
          }),
          (0, import_vue5.createVNode)(_component_fui_section, {
            title: "\u7981\u7528\u72B6\u6001",
            padding: ["0", "0"],
            "margin-bottom": "32",
            "margin-top": "96"
          }),
          (0, import_vue5.createVNode)(_component_fui_button, {
            disabled: "",
            text: "\u7981\u7528\u6309\u94AE"
          }),
          (0, import_vue5.createVNode)(_component_fui_button, {
            margin: ["24rpx"],
            disabled: "",
            loading: "",
            text: "\u7981\u7528\u6309\u94AE"
          }),
          (0, import_vue5.createVNode)(_component_fui_button, {
            disabled: "",
            disabledBackground: "#F8F8F8",
            disabledColor: "#CCCCCC",
            text: "\u7981\u7528\u6309\u94AE"
          }),
          (0, import_vue5.createVNode)(_component_fui_section, {
            title: "\u6309\u94AE\u5F62\u72B6",
            padding: ["0", "0"],
            "margin-bottom": "32",
            "margin-top": "96",
            "is-line": ""
          }),
          (0, import_vue5.createVNode)(_component_fui_button, {
            radius: "0",
            text: "\u65B9\u5F62\u6309\u94AE"
          }),
          (0, import_vue5.createVNode)(_component_fui_button, {
            radius: "96rpx",
            margin: ["24rpx"],
            text: "\u5706\u5F62\u6309\u94AE"
          }),
          (0, import_vue5.createVNode)(_component_fui_section, {
            title: "\u6309\u94AE\u5927\u5C0F",
            padding: ["0", "0"],
            "margin-bottom": "32",
            "margin-top": "96",
            "is-line": ""
          }),
          (0, import_vue5.createVNode)(_component_fui_button, {
            "btn-size": "medium",
            text: "medium"
          }),
          (0, import_vue5.createVNode)(_component_fui_button, {
            type: "warning",
            margin: ["24rpx"],
            "btn-size": "small",
            text: "small"
          }),
          (0, import_vue5.createVNode)(_component_fui_button, {
            type: "danger",
            "btn-size": "mini",
            text: "mini"
          }),
          (0, import_vue5.createVNode)(_component_fui_section, {
            title: "\u81EA\u5B9A\u4E49\u6309\u94AE\u5927\u5C0F",
            padding: ["0", "0"],
            "margin-bottom": "32",
            "margin-top": "96",
            "is-line": ""
          }),
          (0, import_vue5.createVNode)(_component_fui_button, {
            plain: "",
            color: "#465CFF",
            borderColor: "#465CFF",
            text: "\u9ED8\u8BA4\u5927\u5C0F"
          }),
          (0, import_vue5.createVNode)(_component_fui_button, {
            type: "purple",
            margin: ["24rpx"],
            width: "224rpx",
            height: "84rpx",
            size: 28,
            text: "\u5C0F\u578B\u6309\u94AE"
          }),
          (0, import_vue5.createVNode)(_component_fui_button, {
            type: "danger",
            width: "200rpx",
            height: "72rpx",
            size: 28,
            text: "\u5C0F\u578B\u6309\u94AE"
          }),
          (0, import_vue5.createVNode)(_component_fui_section, {
            title: "\u81EA\u5B9A\u4E49\u989C\u8272",
            padding: ["0", "0"],
            "margin-bottom": "32",
            "margin-top": "96",
            "is-line": ""
          }),
          (0, import_vue5.createVNode)(_component_fui_button, {
            background: "#fff",
            color: "#465CFF",
            borderColor: "#465CFF",
            text: "\u6734\u7D20\u6309\u94AE"
          }),
          (0, import_vue5.createVNode)(_component_fui_button, {
            margin: ["24rpx"],
            background: "#fff",
            color: "#6831FF",
            borderColor: "#6831FF",
            text: "\u6734\u7D20\u6309\u94AE"
          }),
          (0, import_vue5.createVNode)(_component_fui_button, {
            background: "linear-gradient(to bottom right, #6831FF, #465CFF)",
            "border-width": "0",
            text: "\u6E10\u53D8\u6309\u94AE"
          }),
          (0, import_vue5.createVNode)(_component_fui_button, {
            margin: ["24rpx"],
            background: "linear-gradient(to bottom right, #FF416C, #FF2B2B)",
            "border-width": "0",
            text: "\u6E10\u53D8\u6309\u94AE"
          })
        ])
      ])
    ]);
  }
  var button = /* @__PURE__ */ _export_sfc(_sfc_main4, [["render", _sfc_render4], ["styles", [_style_04]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/basics/button/button.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/component/basics/button/button";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    button.mpType = "page";
    const app = Vue.createPageApp(button, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...button.styles || []]));
    app.mount("#root");
  }
})();
