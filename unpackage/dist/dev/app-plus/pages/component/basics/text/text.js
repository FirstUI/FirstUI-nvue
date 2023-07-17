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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/fui-section.js
  var import_vue2 = __toESM(require_vue());
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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/basics/text/text.js
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
          const text2 = uni && uni.$fui && uni.$fui.fuiText;
          color = {
            primary: app && app.primary || "#465CFF",
            success: app && app.success || "#09BE4F",
            warning: app && app.warning || "#FFB703",
            danger: app && app.danger || "#FF2B2B",
            purple: app && app.purple || "#6831FF",
            gray: "#B2B2B2",
            black: text2 && text2.color || "#181818"
          }[this.type];
        }
        return color;
      }
    },
    methods: {
      getText(text2, textType, format) {
        let _text = text2;
        if (format) {
          if (textType === "mobile") {
            _text = this.numberFormatter(text2);
          } else if (textType === "amount") {
            _text = this.moneyFormatter(text2);
          } else if (textType === "name") {
            _text = this.nameFormatter(text2);
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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/basics/text/text.js
  var _style_03 = { "fui-wrap": { "": { "paddingBottom": "96rpx" } } };
  var _sfc_main3 = {
    data() {
      return {
        text: "First UI\u662F\u4E00\u5957\u8D85\u9AD8\u6027\u80FD\u3001\u8D85\u9AD8\u989C\u503C\u7684\u79FB\u52A8\u7AEFUI\u7EFC\u5408\u89E3\u51B3\u65B9\u6848\uFF0C\u5305\u542B\u4E1A\u5185\u9876\u5C16\u7684\u7EC4\u4EF6\u5E93\u3001\u5F3A\u5927\u7684\u529F\u80FD\u5E93\u3001\u4E30\u5BCC\u7CBE\u7F8E\u7684\u6A21\u677F\u5E93\uFF0C\u63D0\u4F9Buni-app(\u5B8C\u7F8E\u652F\u6301nvue)\u3001\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u3001\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F\u7B49\u7248\u672C\uFF0C\u517C\u987E\u9AD8\u6548\u7387\u4E0E\u9AD8\u6027\u80FD\uFF0C\u8BA9\u60A8\u7684\u5F00\u53D1\u83B7\u5F97\u767E\u500D\u63D0\u8D28\u63D0\u901F\uFF01"
      };
    },
    methods: {
      handleClick(e) {
        formatAppLog("log", "at pages/component/basics/text/text.nvue:46", e);
        uni.$fui.toast("\u70B9\u51FB\u4E86~");
      }
    }
  };
  function _sfc_render3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_fui_section = resolveEasycom((0, import_vue4.resolveDynamicComponent)("fui-section"), __easycom_0);
    const _component_fui_text = resolveEasycom((0, import_vue4.resolveDynamicComponent)("fui-text"), __easycom_02);
    return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue4.createElementVNode)("view", { class: "fui-wrap" }, [
        (0, import_vue4.createElementVNode)("view", { class: "fui-page__hd" }, [
          (0, import_vue4.createElementVNode)("u-text", { class: "fui-page__title" }, "Text"),
          (0, import_vue4.createElementVNode)("u-text", { class: "fui-page__desc" }, "Text \u6587\u672C\uFF0C\u7528\u4E8E\u5305\u88F9\u6587\u672C\u5185\u5BB9\u3002")
        ]),
        (0, import_vue4.createElementVNode)("view", { class: "fui-page__bd fui-page__spacing" }, [
          (0, import_vue4.createVNode)(_component_fui_section, {
            title: "\u57FA\u672C\u4F7F\u7528",
            "is-line": "",
            padding: ["0", "0"],
            "margin-bottom": "32"
          }),
          (0, import_vue4.createVNode)(_component_fui_text, {
            text: $data.text,
            size: 28
          }, null, 8, ["text"]),
          (0, import_vue4.createVNode)(_component_fui_section, {
            title: "\u4E0D\u540C\u6837\u5F0F\u7C7B\u578B",
            "is-line": "",
            padding: ["0", "0"],
            "margin-top": "96",
            marginBottom: "32"
          }),
          (0, import_vue4.createCommentVNode)(" \u6CE8\uFF1Anvue \u7AEF \u9ED8\u8BA4 flex-direction:column "),
          (0, import_vue4.createElementVNode)("view", { class: "fui-row" }, [
            (0, import_vue4.createVNode)(_component_fui_text, {
              text: "primary",
              type: "primary"
            }),
            (0, import_vue4.createVNode)(_component_fui_text, {
              text: "success",
              type: "success"
            }),
            (0, import_vue4.createVNode)(_component_fui_text, {
              text: "warning",
              type: "warning"
            }),
            (0, import_vue4.createVNode)(_component_fui_text, {
              text: "danger",
              type: "danger"
            }),
            (0, import_vue4.createVNode)(_component_fui_text, {
              text: "purple",
              type: "purple"
            }),
            (0, import_vue4.createVNode)(_component_fui_text, {
              text: "gray",
              type: "gray"
            }),
            (0, import_vue4.createVNode)(_component_fui_text, {
              text: "black",
              type: "black"
            })
          ]),
          (0, import_vue4.createVNode)(_component_fui_section, {
            title: "\u5757\u72B6 / \u81EA\u5B9A\u4E49\u989C\u8272",
            "is-line": "",
            padding: ["0", "0"],
            "margin-top": "96",
            marginBottom: "32"
          }),
          (0, import_vue4.createVNode)(_component_fui_text, {
            text: "block",
            color: "brown",
            block: ""
          }),
          (0, import_vue4.createVNode)(_component_fui_text, {
            text: "yellow",
            color: "yellow",
            block: ""
          }),
          (0, import_vue4.createVNode)(_component_fui_section, {
            title: "\u6570\u636E\u8131\u654F-\u59D3\u540D",
            "is-line": "",
            padding: ["0", "0"],
            "margin-top": "96",
            marginBottom: "32"
          }),
          (0, import_vue4.createVNode)(_component_fui_text, {
            text: "\u5F20\u4E09",
            "text-type": "name",
            format: "",
            block: ""
          }),
          (0, import_vue4.createVNode)(_component_fui_text, {
            text: "\u738B\u5C0F\u4ED9",
            "text-type": "name",
            format: "",
            block: ""
          }),
          (0, import_vue4.createVNode)(_component_fui_section, {
            title: "\u6570\u636E\u8131\u654F-\u624B\u673A\u53F7",
            "is-line": "",
            padding: ["0", "0"],
            "margin-top": "96",
            marginBottom: "32"
          }),
          (0, import_vue4.createVNode)(_component_fui_text, {
            text: "13544339908",
            "text-type": "mobile",
            format: ""
          }),
          (0, import_vue4.createVNode)(_component_fui_section, {
            title: "\u91D1\u989D\u683C\u5F0F\u5316",
            "is-line": "",
            padding: ["0", "0"],
            "margin-top": "96",
            marginBottom: "32"
          }),
          (0, import_vue4.createVNode)(_component_fui_text, {
            text: "20000",
            "text-type": "amount",
            format: ""
          }, {
            default: (0, import_vue4.withCtx)(() => [
              (0, import_vue4.createElementVNode)("u-text", null, "\uFFE5")
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue4.createVNode)(_component_fui_section, {
            title: "\u70B9\u51FB\u6548\u679C",
            "is-line": "",
            padding: ["0", "0"],
            "margin-top": "96",
            marginBottom: "32"
          }),
          (0, import_vue4.createVNode)(_component_fui_text, {
            text: "https://firstui.cn",
            highlight: "",
            onClick: $options.handleClick
          }, null, 8, ["onClick"])
        ])
      ])
    ]);
  }
  var text = /* @__PURE__ */ _export_sfc(_sfc_main3, [["render", _sfc_render3], ["styles", [_style_03]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/basics/text/text.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/component/basics/text/text";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    text.mpType = "page";
    const app = Vue.createPageApp(text, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...text.styles || []]));
    app.mount("#root");
  }
})();
