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
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/fui-button.js
  var import_vue2 = __toESM(require_vue());
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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/basics/animation/animation.js
  var import_vue4 = __toESM(require_vue());

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/fui-text.js
  var import_vue3 = __toESM(require_vue());
  var _style_02 = { "fui-text__wrap": { "": { "alignItems": "center", "flexDirection": "row" } }, "fui-text__active": { "": { "opacity:active": 0.5 } }, "fui-text__nvue": { "": { "flex": 1 } }, "fui-text__center": { "": { "justifyContent": "center" } }, "fui-text__right": { "": { "justifyContent": "flex-end" } } };
  var _sfc_main2 = {
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
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
      "view",
      {
        class: (0, import_vue3.normalizeClass)(["fui-text__wrap", [$props.block ? "fui-text__block" : "fui-text__inline", "fui-text__" + $props.align, $props.highlight && !$props.disable ? "fui-text__active" : ""]]),
        style: (0, import_vue3.normalizeStyle)({ textAlign: $props.align, paddingTop: $props.padding[0] || 0, paddingRight: $props.padding[1] || 0, paddingBottom: $props.padding[2] || $props.padding[0] || 0, paddingLeft: $props.padding[3] || $props.padding[1] || 0 }),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.handleTap && $options.handleTap(...args)),
        renderWhole: true
      },
      [
        (0, import_vue3.renderSlot)(_ctx.$slots, "default"),
        (0, import_vue3.createElementVNode)("view", { class: "fui-text__nvue" }, [
          (0, import_vue3.createElementVNode)("u-text", {
            class: (0, import_vue3.normalizeClass)(["fui-text__content", [$props.color ? "" : "fui-text__" + $props.type, $props.unShrink ? "fui-text__unshrink" : ""]]),
            style: (0, import_vue3.normalizeStyle)({ color: $options.getColor, fontSize: $options.getSize, lineHeight: $props.lineHeight ? $options.getSize : "auto", textAlign: $props.align, textDecoration: $props.decoration, fontWeight: $props.fontWeight }),
            userSelect: $props.userSelect,
            decode: $props.decode
          }, (0, import_vue3.toDisplayString)($options.getText($props.text, $props.textType, $props.format)), 15, ["userSelect", "decode"])
        ]),
        (0, import_vue3.renderSlot)(_ctx.$slots, "right")
      ],
      6
      /* CLASS, STYLE */
    );
  }
  var __easycom_02 = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-text/fui-text.vue"]]);

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/basics/animation/animation.js
  var _style_0$1 = { "fui-popup__animation": { "": { "transitionTimingFunction": "ease", "transitionDuration": 300, "transitionProperty": "transform,opacity", "position": "relative", "zIndex": 99 } }, "fui-popup__fade-out": { "": { "opacity": 0 } }, "fui-popup__fade-in": { "": { "opacity": 1 } }, "@TRANSITION": { "fui-popup__animation": { "timingFunction": "ease", "duration": 300, "property": "transform,opacity" } } };
  var animation$1 = requireNativePlugin("animation");
  var _sfc_main$1 = {
    name: "fui-animation",
    emits: ["click", "change"],
    props: {
      //是否显示
      show: {
        type: Boolean,
        default: false
      },
      /*
       过渡动画类型
        ['fade,'slide-top','slide-right','slide-bottom','slide-left','zoom-in','zoom-out']
      */
      animationType: {
        type: Array,
        default() {
          return [];
        }
      },
      duration: {
        type: Number,
        default: 300
      },
      //styles 组件样式，同 css 样式
      styles: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        ani: {
          in: "",
          active: ""
        }
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
    computed: {
      stylesObject() {
        const defStyles = {
          position: "fixed",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          "justify-content": "center",
          "align-items": "center"
        };
        const mergeStyles = Object.assign({}, defStyles, this.styles);
        const styles = __spreadProps(__spreadValues({}, mergeStyles), {
          "transition-duration": this.duration / 1e3 + "s"
        });
        let transfrom = "";
        for (let i in styles) {
          let line = this.toLine(i);
          transfrom += line + ":" + styles[i] + ";";
        }
        return transfrom;
      }
    },
    methods: {
      change() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      open() {
        clearTimeout(this.timer);
        this.isShow = true;
        this.transform = "";
        this.ani.in = "";
        for (let i in this.getTranfrom(false)) {
          if (i === "opacity") {
            this.ani.in = "fui-popup__fade-out";
          } else {
            this.transform += `${this.getTranfrom(false)[i]} `;
          }
        }
        this.$nextTick(() => {
          setTimeout(() => {
            this._animation(true);
          }, 50);
        });
      },
      close(type) {
        clearTimeout(this.timer);
        this._animation(false);
      },
      _animation(type) {
        let styles = this.getTranfrom(type);
        if (!this.$refs["fui_ani"])
          return;
        animation$1.transition(
          this.$refs["fui_ani"].ref,
          {
            styles,
            duration: this.duration,
            //ms
            timingFunction: "ease",
            needLayout: false,
            delay: 0
            //ms
          },
          () => {
            if (!type) {
              this.isShow = false;
            }
            this.$emit("change", {
              detail: this.isShow
            });
          }
        );
      },
      getTranfrom(type) {
        let styles = {
          transform: ""
        };
        this.animationType.forEach((mode) => {
          switch (mode) {
            case "fade":
              styles.opacity = type ? 1 : 0;
              break;
            case "slide-top":
              styles.transform += `translateY(${type ? "0" : "-100%"}) `;
              break;
            case "slide-right":
              styles.transform += `translateX(${type ? "0" : "100%"}) `;
              break;
            case "slide-bottom":
              styles.transform += `translateY(${type ? "0" : "100%"}) `;
              break;
            case "slide-left":
              styles.transform += `translateX(${type ? "0" : "-100%"}) `;
              break;
            case "zoom-in":
              styles.transform += `scale(${type ? 1 : 0.8}) `;
              break;
            case "zoom-out":
              styles.transform += `scale(${type ? 1 : 1.2}) `;
              break;
          }
        });
        return styles;
      },
      toLine(name) {
        return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.isShow ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
      "view",
      {
        key: 0,
        class: (0, import_vue4.normalizeClass)(["fui-popup__animation", [$data.ani.in]]),
        style: (0, import_vue4.normalizeStyle)("transform:" + $data.transform + ";" + $options.stylesObject),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.change && $options.change(...args)),
        ref: "fui_ani",
        renderWhole: true
      },
      [
        (0, import_vue4.renderSlot)(_ctx.$slots, "default")
      ],
      6
      /* CLASS, STYLE */
    )) : (0, import_vue4.createCommentVNode)("v-if", true);
  }
  var __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-animation/fui-animation.vue"]]);
  var _style_03 = { "fui-page__bd": { "": { "alignItems": "center", "justifyContent": "center", "flexDirection": "column" } }, "fui-ani__box": { "": { "width": "240rpx", "height": "240rpx", "backgroundColor": "#6831FF" } } };
  var _sfc_main3 = {
    data() {
      return {
        show: false,
        mode: ["fade"],
        styles: {}
      };
    },
    methods: {
      ani(mode, mask) {
        if (mask) {
          this.$set(this.styles, "backgroundColor", "rgba(0,0,0,0.6)");
        } else {
          this.$set(this.styles, "backgroundColor", "rgba(0,0,0,0)");
        }
        setTimeout(() => {
          this.mode = mode;
          this.show = !this.show;
        }, 80);
      },
      handleClick() {
        this.show = false;
      },
      change(e) {
        formatAppLog("log", "at pages/component/basics/animation/animation.nvue:61", e);
      }
    }
  };
  function _sfc_render3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_fui_button = resolveEasycom((0, import_vue4.resolveDynamicComponent)("fui-button"), __easycom_0);
    const _component_fui_text = resolveEasycom((0, import_vue4.resolveDynamicComponent)("fui-text"), __easycom_02);
    const _component_fui_animation = resolveEasycom((0, import_vue4.resolveDynamicComponent)("fui-animation"), __easycom_2);
    return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue4.createElementVNode)("view", { class: "fui-wrap" }, [
        (0, import_vue4.createElementVNode)("view", { class: "fui-page__hd" }, [
          (0, import_vue4.createElementVNode)("u-text", { class: "fui-page__title" }, "Animation"),
          (0, import_vue4.createElementVNode)("u-text", { class: "fui-page__desc" }, "Animation \u52A8\u753B\uFF0C\u8FC7\u6E21\u6548\u679C\u3002")
        ]),
        (0, import_vue4.createElementVNode)("view", { class: "fui-page__bd fui-page__spacing" }, [
          (0, import_vue4.createVNode)(_component_fui_button, {
            type: "gray",
            "btn-size": "medium",
            text: "Fade",
            bold: "",
            margin: ["24rpx"],
            onClick: _cache[0] || (_cache[0] = ($event) => $options.ani(["fade"], true))
          }),
          (0, import_vue4.createVNode)(_component_fui_button, {
            type: "gray",
            "btn-size": "medium",
            text: "Slide Top",
            bold: "",
            onClick: _cache[1] || (_cache[1] = ($event) => $options.ani(["slide-top"]))
          }),
          (0, import_vue4.createVNode)(_component_fui_button, {
            type: "gray",
            "btn-size": "medium",
            text: "Slide Left",
            bold: "",
            margin: ["24rpx"],
            onClick: _cache[2] || (_cache[2] = ($event) => $options.ani(["slide-left"]))
          }),
          (0, import_vue4.createVNode)(_component_fui_button, {
            type: "gray",
            "btn-size": "medium",
            text: "Slide Right",
            bold: "",
            onClick: _cache[3] || (_cache[3] = ($event) => $options.ani(["slide-right"]))
          }),
          (0, import_vue4.createVNode)(_component_fui_button, {
            type: "gray",
            "btn-size": "medium",
            text: "Slide Bottom",
            bold: "",
            margin: ["24rpx"],
            onClick: _cache[4] || (_cache[4] = ($event) => $options.ani(["slide-bottom"]))
          }),
          (0, import_vue4.createVNode)(_component_fui_button, {
            type: "gray",
            "btn-size": "medium",
            text: "Zoom In",
            bold: "",
            onClick: _cache[5] || (_cache[5] = ($event) => $options.ani(["zoom-in", "fade"]))
          }),
          (0, import_vue4.createVNode)(_component_fui_button, {
            type: "gray",
            "btn-size": "medium",
            text: "Zoom Out",
            bold: "",
            margin: ["24rpx"],
            onClick: _cache[6] || (_cache[6] = ($event) => $options.ani(["zoom-out", "fade"]))
          }),
          (0, import_vue4.createVNode)(_component_fui_button, {
            type: "gray",
            "btn-size": "medium",
            text: "Custom",
            bold: "",
            onClick: _cache[7] || (_cache[7] = ($event) => $options.ani(["slide-left", "slide-top", "fade"]))
          })
        ]),
        (0, import_vue4.createVNode)(_component_fui_animation, {
          duration: 500,
          animationType: $data.mode,
          styles: $data.styles,
          show: $data.show,
          onClick: $options.handleClick,
          onChange: $options.change
        }, {
          default: (0, import_vue4.withCtx)(() => [
            (0, import_vue4.createElementVNode)("view", { class: "fui-ani__box fui-flex__center" }, [
              (0, import_vue4.createVNode)(_component_fui_text, {
                text: "transition",
                color: "#fff"
              })
            ])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["animationType", "styles", "show", "onClick", "onChange"])
      ])
    ]);
  }
  var animation = /* @__PURE__ */ _export_sfc(_sfc_main3, [["render", _sfc_render3], ["styles", [_style_03]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/basics/animation/animation.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/component/basics/animation/animation";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    animation.mpType = "page";
    const app = Vue.createPageApp(animation, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...animation.styles || []]));
    app.mount("#root");
  }
})();
