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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/operate/actionsheet/actionsheet.js
  var import_vue3 = __toESM(require_vue());
  var _style_0$1 = { "fui-actionsheet__wrap": { "": { "position": "fixed", "left": 0, "right": 0, "bottom": 0, "transform": "translateY(100%)", "transformOrigin": "center center" } }, "fui-as__bg-light": { "": { "backgroundColor": "#F8F8F8" } }, "fui-as__bg-dark": { "": { "backgroundColor": "#111111" } }, "fui-actionsheet__radius": { "": { "borderTopLeftRadius": "24rpx", "borderTopRightRadius": "24rpx" } }, "fui-actionsheet__tips": { "": { "flex": 1, "paddingTop": "40rpx", "paddingRight": "60rpx", "paddingBottom": "40rpx", "paddingLeft": "60rpx", "textAlign": "center", "alignItems": "center", "justifyContent": "center", "fontWeight": "normal" } }, "fui-as__btn-light": { "": { "backgroundColor": "#FFFFFF" } }, "fui-as__btn-dark": { "": { "backgroundColor": "#222222" } }, "fui-actionsheet__operate-box": { "": { "paddingBottom": "12rpx" } }, "fui-actionsheet__btn": { "": { "height": "100rpx", "lineHeight": "100rpx", "flex": 1, "alignItems": "center", "justifyContent": "center", "textAlign": "center", "fontWeight": "normal", "position": "relative", "backgroundColor:active": "rgba(0,0,0,0.2)" } }, "fui-as__divider-light": { "": { "borderTopWidth": 0.5, "borderTopStyle": "solid", "borderTopColor": "#EEEEEE" } }, "fui-as__divider-dark": { "": { "borderTopWidth": 0.5, "borderTopStyle": "solid", "borderTopColor": "#333333" } }, "fui-as__safe-weex": { "": { "paddingBottom": 34 } }, "fui-actionsheet__mask": { "": { "position": "fixed", "top": 0, "left": 0, "right": 0, "bottom": 0, "backgroundColor": "rgba(0,0,0,0.6)" } } };
  var animation = requireNativePlugin("animation");
  var _sfc_main$1 = {
    name: "fui-actionsheet",
    emits: ["click", "cancel"],
    props: {
      //是否显示操作菜单
      show: {
        type: Boolean,
        default: false
      },
      //菜单按钮数组，可自定义文本颜色
      itemList: {
        type: Array,
        default() {
          return [];
        }
      },
      //菜单按钮字体大小 rpx
      itemSize: {
        type: [Number, String],
        default: 32
      },
      //提示信息
      tips: {
        type: String,
        default: ""
      },
      //提示信息文本颜色
      color: {
        type: String,
        default: "#7F7F7F"
      },
      //提示文字大小 rpx
      size: {
        type: [Number, String],
        default: 26
      },
      //是否需要圆角
      radius: {
        type: Boolean,
        default: true
      },
      //是否需要取消按钮
      isCancel: {
        type: Boolean,
        default: true
      },
      //light/dark
      theme: {
        type: String,
        default: "light"
      },
      //点击遮罩 是否可关闭
      maskClosable: {
        type: Boolean,
        default: false
      },
      zIndex: {
        type: [Number, String],
        default: 996
      },
      //是否适配底部安全区
      safeArea: {
        type: Boolean,
        default: true
      }
    },
    data() {
      let isNvue = false;
      isNvue = true;
      return {
        iphoneX: false,
        vals: [],
        isNvue,
        isShow: false
      };
    },
    computed: {
      getStyle() {
        return `z-index:${Number(this.zIndex) - 10};`;
      }
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
      },
      itemList(newVal) {
        this.initData(newVal);
      }
    },
    created() {
      this.iphoneX = this.isPhoneX();
      this.initData(this.itemList);
    },
    methods: {
      initData(vals) {
        if (vals && vals.length > 0) {
          if (typeof vals[0] !== "object") {
            vals = vals.map((item) => {
              return {
                text: item
              };
            });
          }
          this.vals = vals;
        }
      },
      handleClickMask() {
        if (!this.maskClosable)
          return;
        this.handleClickCancel();
      },
      handleClickItem(index) {
        if (!this.show)
          return;
        this.$emit("click", __spreadValues({
          index
        }, this.vals[index]));
      },
      handleClickCancel() {
        this.$emit("cancel");
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
        if (!this.$refs["fui_asm_ani"] || !this.$refs["fui_as_ani"])
          return;
        let styles = {
          transform: `translateY(${type ? "0" : "100%"})`
        };
        animation.transition(
          this.$refs["fui_asm_ani"].ref,
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
          }
        );
        animation.transition(
          this.$refs["fui_as_ani"].ref,
          {
            styles,
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
      },
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
          "iphone15",
          "iphone15mini",
          "iphone15pro",
          "iphone15promax"
        ];
        const model = res.model.replace(/\s/g, "").toLowerCase();
        const newModel = model.split("<")[0];
        if (models.includes(model) || models.includes(newModel) || res.safeAreaInsets && res.safeAreaInsets.bottom > 0) {
          iphonex = true;
        }
        return iphonex;
      },
      stop() {
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.isShow || !$data.isNvue ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
      "view",
      {
        key: 0,
        onTouchmove: _cache[2] || (_cache[2] = (0, import_vue3.withModifiers)((...args) => $options.stop && $options.stop(...args), ["stop", "prevent"])),
        renderWhole: true
      },
      [
        (0, import_vue3.createElementVNode)(
          "view",
          {
            class: (0, import_vue3.normalizeClass)(["fui-actionsheet__mask", { "fui-actionsheet__mask-show": $props.show }]),
            ref: "fui_asm_ani",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClickMask && $options.handleClickMask(...args)),
            style: (0, import_vue3.normalizeStyle)($options.getStyle)
          },
          null,
          6
          /* CLASS, STYLE */
        ),
        (0, import_vue3.createElementVNode)(
          "view",
          {
            class: (0, import_vue3.normalizeClass)(["fui-actionsheet__wrap", { "fui-actionsheet__show": $props.show, "fui-actionsheet__radius": $props.radius, "fui-as__bg-light": $props.theme === "light", "fui-as__bg-dark": $props.theme === "dark" }]),
            ref: "fui_as_ani",
            style: (0, import_vue3.normalizeStyle)({ zIndex: $props.zIndex })
          },
          [
            $props.tips ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
              "u-text",
              {
                key: 0,
                class: (0, import_vue3.normalizeClass)(["fui-actionsheet__tips", { "fui-actionsheet__radius": $props.radius, "fui-as__btn-light": $props.theme === "light", "fui-as__btn-dark": $props.theme === "dark" }]),
                style: (0, import_vue3.normalizeStyle)({ fontSize: $props.size + "rpx", color: $props.color })
              },
              (0, import_vue3.toDisplayString)($props.tips),
              7
              /* TEXT, CLASS, STYLE */
            )) : (0, import_vue3.createCommentVNode)("v-if", true),
            (0, import_vue3.createElementVNode)(
              "view",
              {
                class: (0, import_vue3.normalizeClass)({ "fui-actionsheet__operate-box": $props.isCancel })
              },
              [
                ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
                  import_vue3.Fragment,
                  null,
                  (0, import_vue3.renderList)($data.vals, (item, index) => {
                    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("u-text", {
                      class: (0, import_vue3.normalizeClass)(["fui-actionsheet__btn", { "fui-actionsheet__btn-last": !$props.isCancel && index == $data.vals.length - 1, "fui-as__safe-weex": !$props.isCancel && index == $data.vals.length - 1 && $data.iphoneX && $props.safeArea, "fui-actionsheet__radius": $props.radius && !$props.tips && index === 0, "fui-as__divider-light": (index !== 0 || $props.tips) && $props.theme === "light", "fui-as__divider-dark": (index !== 0 || $props.tips) && $props.theme === "dark", "fui-as__btn-light": $props.theme === "light", "fui-as__btn-dark": $props.theme === "dark" }]),
                      style: (0, import_vue3.normalizeStyle)({ color: $props.theme === "dark" ? item.darkColor || "#D1D1D1" : item.color || "#181818", fontSize: $props.itemSize + "rpx" }),
                      key: index,
                      onClick: ($event) => $options.handleClickItem(index)
                    }, (0, import_vue3.toDisplayString)(item.text), 15, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ],
              2
              /* CLASS */
            ),
            $props.isCancel ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
              "u-text",
              {
                key: 1,
                style: (0, import_vue3.normalizeStyle)({ color: $props.theme === "dark" ? "#D1D1D1" : "#181818", fontSize: $props.itemSize + "rpx" }),
                class: (0, import_vue3.normalizeClass)(["fui-actionsheet__btn fui-actionsheet__cancel", { "fui-as__safe-weex": $data.iphoneX && $props.safeArea, "fui-as__btn-light": $props.theme === "light", "fui-as__btn-dark": $props.theme === "dark" }]),
                onClick: _cache[1] || (_cache[1] = (...args) => $options.handleClickCancel && $options.handleClickCancel(...args))
              },
              "\u53D6\u6D88",
              6
              /* CLASS, STYLE */
            )) : (0, import_vue3.createCommentVNode)("v-if", true)
          ],
          6
          /* CLASS, STYLE */
        )
      ],
      32
      /* HYDRATE_EVENTS */
    )) : (0, import_vue3.createCommentVNode)("v-if", true);
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-actionsheet/fui-actionsheet.vue"]]);
  var _style_02 = { "fui-page__bd": { "": { "alignItems": "center", "justifyContent": "center", "flexDirection": "column" } } };
  var _sfc_main2 = {
    data() {
      return {
        show: false,
        tips: "",
        itemList: [],
        isCancel: true,
        theme: "light"
      };
    },
    methods: {
      showActionSheet(type) {
        this.tips = "";
        this.isCancel = true;
        this.theme = "light";
        switch (type) {
          case 1:
            this.tips = "\u9000\u51FA\u540E\u4E0D\u4F1A\u5220\u9664\u4EFB\u4F55\u5386\u53F2\u6570\u636E\uFF0C\u4E0B\u6B21\u767B\u5F55\u4F9D\u7136\u53EF\u4EE5\u4F7F\u7528\u672C\u8D26\u53F7\u3002";
            this.itemList = [{
              text: "\u9000\u51FA\u767B\u5F55",
              color: "#FF2B2B"
            }];
            break;
          case 2:
            this.itemList = ["\u70B9\u8D5E", "\u8BC4\u8BBA", "\u6536\u85CF"];
            break;
          case 3:
            this.itemList = ["\u70B9\u8D5E", "\u8BC4\u8BBA", "\u6536\u85CF"];
            this.theme = "dark";
            break;
          case 4:
            this.tips = "\u8BF7\u9009\u62E9\u6027\u522B";
            this.itemList = ["\u7537", "\u5973", "\u672A\u77E5"];
            this.isCancel = false;
            break;
        }
        setTimeout(() => {
          this.show = true;
        }, 50);
      },
      itemClick(e) {
        formatAppLog("log", "at pages/component/operate/actionsheet/actionsheet.nvue:67", e);
        uni.fui.toast(e.text);
        this.cancel();
      },
      cancel() {
        this.show = false;
      }
    }
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_fui_button = resolveEasycom((0, import_vue3.resolveDynamicComponent)("fui-button"), __easycom_0);
    const _component_fui_actionsheet = resolveEasycom((0, import_vue3.resolveDynamicComponent)("fui-actionsheet"), __easycom_1);
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue3.createElementVNode)("view", { class: "fui-wrap" }, [
        (0, import_vue3.createElementVNode)("view", { class: "fui-page__hd" }, [
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-page__title" }, "ActionSheet"),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-page__desc" }, "ActionSheet \u4E0A\u62C9\u83DC\u5355\uFF0C\u4ECE\u5E95\u90E8\u5F39\u51FA\u7684\u6A21\u6001\u6846\uFF0C\u63D0\u4F9B\u548C\u5F53\u524D\u573A\u666F\u76F8\u5173\u7684\u64CD\u4F5C\u83DC\u5355\u3002")
        ]),
        (0, import_vue3.createElementVNode)("view", { class: "fui-page__bd fui-page__spacing" }, [
          (0, import_vue3.createVNode)(_component_fui_button, {
            type: "gray",
            "btn-size": "medium",
            text: "\u5E26\u63D0\u793A",
            bold: "",
            margin: ["24rpx"],
            onClick: _cache[0] || (_cache[0] = ($event) => $options.showActionSheet(1))
          }),
          (0, import_vue3.createVNode)(_component_fui_button, {
            type: "gray",
            "btn-size": "medium",
            text: "\u65E0\u63D0\u793A\u64CD\u4F5C",
            bold: "",
            onClick: _cache[1] || (_cache[1] = ($event) => $options.showActionSheet(2))
          }),
          (0, import_vue3.createVNode)(_component_fui_button, {
            type: "gray",
            "btn-size": "medium",
            text: "\u6697\u9ED1\u6A21\u5F0F",
            margin: ["24rpx"],
            bold: "",
            onClick: _cache[2] || (_cache[2] = ($event) => $options.showActionSheet(3))
          }),
          (0, import_vue3.createVNode)(_component_fui_button, {
            type: "gray",
            "btn-size": "medium",
            text: "\u65E0\u53D6\u6D88\u6309\u94AE",
            bold: "",
            onClick: _cache[3] || (_cache[3] = ($event) => $options.showActionSheet(4))
          })
        ]),
        (0, import_vue3.createVNode)(_component_fui_actionsheet, {
          show: $data.show,
          tips: $data.tips,
          itemList: $data.itemList,
          isCancel: $data.isCancel,
          theme: $data.theme,
          onClick: $options.itemClick,
          onCancel: $options.cancel
        }, null, 8, ["show", "tips", "itemList", "isCancel", "theme", "onClick", "onCancel"])
      ])
    ]);
  }
  var actionsheet = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/operate/actionsheet/actionsheet.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/component/operate/actionsheet/actionsheet";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    actionsheet.mpType = "page";
    const app = Vue.createPageApp(actionsheet, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...actionsheet.styles || []]));
    app.mount("#root");
  }
})();
