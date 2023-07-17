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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/data/alert/alert.js
  var import_vue3 = __toESM(require_vue());

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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/fui-icon.js
  var import_vue2 = __toESM(require_vue());
  var icons = {
    "addressbook": "\uE80C",
    "addfriends-fill": "\uE80A",
    "addfriends": "\uE80B",
    "backspace-fill": "\uE808",
    "backspace": "\uE809",
    "bankcard-fill": "\uE806",
    "bankcard": "\uE807",
    "camera-fill": "\uE804",
    "camera": "\uE805",
    "captcha-fill": "\uE802",
    "captcha": "\uE803",
    "cart-fill": "\uE800",
    "cart": "\uE801",
    "classify": "\uE7FE",
    "classify-fill": "\uE7FF",
    "comment-fill": "\uE7FC",
    "comment": "\uE7FD",
    "community-fill": "\uE7FA",
    "community": "\uE7FB",
    "coupon-fill": "\uE7F8",
    "coupon": "\uE7F9",
    "delete": "\uE7F6",
    "delete-fill": "\uE7F7",
    "edit": "\uE7F4",
    "edit-fill": "\uE7F5",
    "fabulous-fill": "\uE7F2",
    "fabulous": "\uE7F3",
    "find": "\uE7F0",
    "find-fill": "\uE7F1",
    "help-fill": "\uE7EE",
    "help": "\uE7EF",
    "home-fill": "\uE7EC",
    "home": "\uE7ED",
    "idcard-fill": "\uE7EA",
    "idcard": "\uE7EB",
    "info": "\uE7E8",
    "info-fill": "\uE7E9",
    "invite-fill": "\uE7E6",
    "invite": "\uE7E7",
    "kefu-fill": "\uE7E4",
    "kefu": "\uE7E5",
    "like-fill": "\uE7E2",
    "like": "\uE7E3",
    "location": "\uE7E0",
    "location-fill": "\uE7E1",
    "lock": "\uE7DE",
    "lock-fill": "\uE7DF",
    "mail-fill": "\uE7DC",
    "mail": "\uE7DD",
    "message": "\uE7DA",
    "message-fill": "\uE7DB",
    "mobile-fill": "\uE7D8",
    "mobile": "\uE7D9",
    "more": "\uE7D6",
    "more-fill": "\uE7D7",
    "my-fill": "\uE7D4",
    "my": "\uE7D5",
    "principal": "\uE80D",
    "notice-fill": "\uE7D2",
    "notice": "\uE7D3",
    "order": "\uE7D0",
    "order-fill": "\uE7D1",
    "picture": "\uE7CE",
    "picture-fill": "\uE7CF",
    "setup-fill": "\uE7CC",
    "setup": "\uE7CD",
    "share": "\uE7CA",
    "share-fill": "\uE7CB",
    "shop": "\uE7C8",
    "shop-fill": "\uE7C9",
    "star-fill": "\uE7C5",
    "star": "\uE7C6",
    "starhalf": "\uE7C7",
    "stepon-fill": "\uE7C3",
    "stepon": "\uE7C4",
    "wait-fill": "\uE7C1",
    "wait": "\uE7C2",
    "warning": "\uE7BF",
    "warning-fill": "\uE7C0",
    "plus": "\uE7BC",
    "plussign-fill": "\uE7BD",
    "plussign": "\uE7BE",
    "minus": "\uE7B9",
    "minussign": "\uE7BA",
    "minussign-fill": "\uE7BB",
    "close": "\uE7B8",
    "clear": "\uE7B6",
    "clear-fill": "\uE7B7",
    "checkbox-fill": "\uE7B5",
    "checkround": "\uE7B4",
    "checkbox": "\uE7B3",
    "check": "\uE7B2",
    "pulldown-fill": "\uE7AE",
    "pullup": "\uE7AF",
    "pullup-fill": "\uE7B0",
    "pulldown": "\uE7B1",
    "roundright-fill": "\uE7AC",
    "roundright": "\uE7AD",
    "arrowright": "\uE7A9",
    "arrowleft": "\uE7AA",
    "arrowdown": "\uE7AB",
    "left": "\uE7A6",
    "up": "\uE7A7",
    "right": "\uE7A8",
    "back": "\uE7A3",
    "top": "\uE7A4",
    "dropdown": "\uE7A5",
    "turningleft": "\uE79F",
    "turningup": "\uE7A0",
    "turningright": "\uE7A1",
    "turningdown": "\uE7A2",
    "refresh": "\uE79C",
    "loading": "\uE79D",
    "search": "\uE79E",
    "rotate": "\uE79B",
    "screen": "\uE79A",
    "signin": "\uE799",
    "calendar": "\uE798",
    "scan": "\uE797",
    "qrcode": "\uE796",
    "wallet": "\uE795",
    "telephone": "\uE794",
    "visible": "\uE793",
    "invisible": "\uE792",
    "menu": "\uE78E",
    "operate": "\uE78F",
    "slide": "\uE790",
    "list": "\uE791",
    "nonetwork": "\uE78D",
    "partake": "\uE78C",
    "qa": "\uE78B",
    "barchart": "\uE788",
    "piechart": "\uE789",
    "linechart": "\uE78A",
    "at": "\uE787",
    "face": "\uE77F",
    "redpacket": "\uE780",
    "suspend": "\uE781",
    "link": "\uE782",
    "keyboard": "\uE783",
    "play": "\uE784",
    "video": "\uE785",
    "voice": "\uE786",
    "sina": "\uE77A",
    "browser": "\uE77B",
    "moments": "\uE77C",
    "qq": "\uE77D",
    "wechat": "\uE77E",
    "balance": "\uE779",
    "bankcardpay": "\uE778",
    "wxpay": "\uE777",
    "alipay": "\uE776",
    "payment": "\uE818",
    "receive": "\uE817",
    "sendout": "\uE816",
    "evaluate": "\uE815",
    "aftersale": "\uE814",
    "warehouse": "\uE813",
    "transport": "\uE812",
    "delivery": "\uE811",
    "switch": "\uE810",
    "goods": "\uE80F",
    "goods-fill": "\uE80E"
  };
  var fuiicons = "/assets/fui-icon.2783439a.ttf";
  var _style_0 = { "fui-icon": { "": { "fontFamily": "fuiFont", "textDecoration": "none", "textAlign": "center" } } };
  var domModule = weex.requireModule("dom");
  domModule.addRule("fontFace", {
    "fontFamily": "fuiFont",
    "src": "url('" + fuiicons + "')"
  });
  var _sfc_main = {
    name: "fui-icon",
    emits: ["click"],
    props: {
      name: {
        type: String,
        default: ""
      },
      size: {
        type: [Number, String],
        default: 0
      },
      //rpx | px
      unit: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: ""
      },
      //字重
      fontWeight: {
        type: [Number, String],
        default: "normal"
      },
      //是否禁用点击
      disabled: {
        type: Boolean,
        default: false
      },
      params: {
        type: [Number, String],
        default: 0
      },
      customPrefix: {
        type: String,
        default: ""
      },
      //是否显示为主色调，color为空时有效。【内部使用】
      primary: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      getSize() {
        const size = uni.$fui && uni.$fui.fuiIcon && uni.$fui.fuiIcon.size || 64;
        const unit = uni.$fui && uni.$fui.fuiIcon && uni.$fui.fuiIcon.unit || "rpx";
        return (this.size || size) + (this.unit || unit);
      },
      primaryColor() {
        const app = uni && uni.$fui && uni.$fui.color;
        return app && app.primary || "#465CFF";
      },
      getColor() {
        const app = uni && uni.$fui && uni.$fui.fuiIcon;
        let color = this.color || app && app.color;
        if (!color || color === true) {
          color = "#333333";
        }
        return color;
      }
    },
    data() {
      return {
        icons
      };
    },
    methods: {
      handleClick() {
        if (this.disabled)
          return;
        this.$emit("click", {
          params: this.params
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "u-text",
      {
        style: (0, import_vue2.normalizeStyle)({ color: $props.primary && (!$props.color || $props.color === true) ? $options.primaryColor : $options.getColor, fontSize: $options.getSize, lineHeight: $options.getSize, fontWeight: $props.fontWeight }),
        class: (0, import_vue2.normalizeClass)(["fui-icon", [$props.customPrefix]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick && $options.handleClick(...args))
      },
      (0, import_vue2.toDisplayString)($props.customPrefix ? $props.name : $data.icons[$props.name]),
      7
      /* TEXT, CLASS, STYLE */
    );
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-icon/fui-icon.vue"]]);

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/data/alert/alert.js
  var _style_02 = { "fui-alert__wrap": { "": { "flex": 1, "flexDirection": "row", "alignItems": "center", "position": "relative" } }, "fui-alert__content": { "": { "flex": 1, "flexDirection": "column" } }, "fui-desc__padding": { "": { "paddingTop": 3 } }, "fui-text__p-left": { "": { "paddingLeft": "20rpx" } }, "fui-text__p-right": { "": { "paddingRight": "60rpx" } }, "fui-alert__single": { "": { "lines": 1, "flexDirection": "row", "overflow": "hidden", "textOverflow": "ellipsis" } }, "fui-alert__icon-close": { "": { "position": "absolute", "right": "30rpx", "top": "16rpx" } } };
  var _sfc_main$1 = {
    name: "fui-alert",
    emits: ["leftClick", "click", "close"],
    props: {
      //info, success, warn, waiting,clear
      type: {
        type: String,
        default: ""
      },
      //背景色，如果设置type对应颜色失效
      background: {
        type: String,
        default: ""
      },
      //padding值：[上，右，下，左]
      padding: {
        type: Array,
        default() {
          return ["20rpx", "32rpx"];
        }
      },
      //margin-top值，单位rpx
      marginTop: {
        type: [Number, String],
        default: 0
      },
      //margin-bottom值，单位rpx
      marginBottom: {
        type: [Number, String],
        default: 0
      },
      //圆角
      radius: {
        type: String,
        default: "16rpx"
      },
      //icon颜色
      iconColor: {
        type: String,
        default: "#fff"
      },
      //icon字体大小，px
      iconSize: {
        type: Number,
        default: 22
      },
      closable: {
        type: Boolean,
        default: false
      },
      closeColor: {
        type: String,
        default: "#fff"
      },
      //关闭icon字体大小，px
      closeSize: {
        type: Number,
        default: 22
      },
      //是否自定义左侧内容,默认图标失效
      isLeft: {
        type: Boolean,
        default: false
      },
      //内容是否与图标之间有间隔，isLeft为true时生效
      spacing: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#fff"
      },
      size: {
        type: String,
        default: "14px"
      },
      desc: {
        type: String,
        default: ""
      },
      descColor: {
        type: String,
        default: "#fff"
      },
      descSize: {
        type: String,
        default: "12px"
      },
      //描述文字单行展示，超出隐藏
      single: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      getColor(type) {
        const app = uni && uni.$fui && uni.$fui.color;
        const color = app && app.primary || "#465CFF";
        const colors = {
          "success": app && app.success || "#09BE4F",
          "warn": app && app.warning || "#FFB703",
          "clear": app && app.danger || "#FF2B2B"
        };
        return colors[type] ? colors[type] : color;
      },
      leftClick() {
        this.$emit("leftClick", {});
      },
      onClick() {
        this.$emit("click", {});
      },
      close() {
        this.$emit("close", {});
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_icon = (0, import_vue3.resolveComponent)("icon");
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
      "view",
      {
        class: (0, import_vue3.normalizeClass)(["fui-alert__wrap", [$props.background ? "" : "fui-alert__" + $props.type]]),
        style: (0, import_vue3.normalizeStyle)({ background: $props.background || $options.getColor($props.type), borderRadius: $props.radius, paddingTop: $props.padding[0] || 0, paddingRight: $props.padding[1] || 0, paddingBottom: $props.padding[2] || $props.padding[0] || 0, paddingLeft: $props.padding[3] || $props.padding[1] || 0, marginTop: $props.marginTop + "rpx", marginBottom: $props.marginBottom + "rpx" }),
        renderWhole: true
      },
      [
        (0, import_vue3.createElementVNode)("view", {
          class: "fui-alert__shrink",
          onClick: _cache[0] || (_cache[0] = (0, import_vue3.withModifiers)((...args) => $options.leftClick && $options.leftClick(...args), ["stop"]))
        }, [
          (0, import_vue3.renderSlot)(_ctx.$slots, "default"),
          !$props.isLeft && $props.type && $props.type !== "true" ? ((0, import_vue3.openBlock)(), (0, import_vue3.createBlock)(_component_icon, {
            key: 0,
            type: $props.type,
            size: $props.iconSize,
            color: $props.iconColor
          }, null, 8, ["type", "size", "color"])) : (0, import_vue3.createCommentVNode)("v-if", true)
        ]),
        (0, import_vue3.createElementVNode)(
          "view",
          {
            class: (0, import_vue3.normalizeClass)(["fui-alert__content", { "fui-text__p-left": !$props.isLeft && $props.type && $props.type !== "true" || $props.spacing && $props.isLeft, "fui-text__p-right": $props.closable }]),
            onClick: _cache[1] || (_cache[1] = (0, import_vue3.withModifiers)((...args) => $options.onClick && $options.onClick(...args), ["stop"]))
          },
          [
            $props.title ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
              "u-text",
              {
                key: 0,
                class: "fui-alert__text",
                style: (0, import_vue3.normalizeStyle)({ fontSize: $props.size, color: $props.color })
              },
              (0, import_vue3.toDisplayString)($props.title),
              5
              /* TEXT, STYLE */
            )) : (0, import_vue3.createCommentVNode)("v-if", true),
            $props.desc ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
              "u-text",
              {
                key: 1,
                class: (0, import_vue3.normalizeClass)(["fui-alert__text fui-desc__padding", { "fui-alert__single": $props.single }]),
                style: (0, import_vue3.normalizeStyle)({ fontSize: $props.descSize, color: $props.descColor })
              },
              (0, import_vue3.toDisplayString)($props.desc),
              7
              /* TEXT, CLASS, STYLE */
            )) : (0, import_vue3.createCommentVNode)("v-if", true),
            (0, import_vue3.renderSlot)(_ctx.$slots, "content")
          ],
          2
          /* CLASS */
        ),
        (0, import_vue3.createElementVNode)("view", { class: "fui-alert__shrink" }, [
          (0, import_vue3.renderSlot)(_ctx.$slots, "right")
        ]),
        $props.closable ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
          "view",
          {
            key: 0,
            class: (0, import_vue3.normalizeClass)({ "fui-alert__icon-close": $props.desc })
          },
          [
            (0, import_vue3.createVNode)(_component_icon, {
              onClick: (0, import_vue3.withModifiers)($options.close, ["stop"]),
              type: "cancel",
              size: $props.closeSize,
              color: $props.closeColor
            }, null, 8, ["onClick", "size", "color"])
          ],
          2
          /* CLASS */
        )) : (0, import_vue3.createCommentVNode)("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_02]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-alert/fui-alert.vue"]]);
  var _sfc_main2 = {
    data() {
      return {
        show: true,
        shown: true
      };
    },
    methods: {
      close() {
        this.show = false;
      },
      close2() {
        this.shown = false;
      }
    }
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_fui_alert = resolveEasycom((0, import_vue3.resolveDynamicComponent)("fui-alert"), __easycom_0);
    const _component_fui_icon = resolveEasycom((0, import_vue3.resolveDynamicComponent)("fui-icon"), __easycom_1);
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue3.createElementVNode)("view", { class: "fui-wrap" }, [
        (0, import_vue3.createElementVNode)("view", { class: "fui-page__hd" }, [
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-page__title" }, "Alert"),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-page__desc" }, "Alert \u8B66\u544A\u6846\u3002")
        ]),
        (0, import_vue3.createElementVNode)("view", { class: "fui-page__bd fui-page__spacing" }, [
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title fui-mtop--0" }, "\u57FA\u7840\u4F7F\u7528"),
          (0, import_vue3.createVNode)(_component_fui_alert, { title: "An info alert" }),
          (0, import_vue3.createVNode)(_component_fui_alert, {
            type: "success",
            isLeft: "",
            title: "An success alert",
            marginTop: 24
          }),
          (0, import_vue3.createVNode)(_component_fui_alert, {
            type: "warn",
            isLeft: "",
            title: "An warn alert",
            marginTop: 24
          }),
          (0, import_vue3.createVNode)(_component_fui_alert, {
            type: "clear",
            isLeft: "",
            title: "An error alert",
            marginTop: 24
          }),
          (0, import_vue3.createVNode)(_component_fui_alert, {
            isLeft: "",
            title: "An info alert",
            desc: "Content of alert. Content of alert.",
            marginTop: 24
          }),
          (0, import_vue3.createVNode)(_component_fui_alert, {
            type: "clear",
            isLeft: "",
            title: "An error alert",
            desc: "Content of alert. Content of alert.",
            marginTop: 24
          }),
          (0, import_vue3.createVNode)(_component_fui_alert, {
            type: "warn",
            isLeft: "",
            title: "An warn alert",
            desc: "Content of alert. Content of alert.",
            marginTop: 24
          }),
          (0, import_vue3.createVNode)(_component_fui_alert, {
            type: "success",
            title: "An warn alert",
            desc: "Content of alert. Content of alert.",
            marginTop: 24
          }),
          (0, import_vue3.createVNode)(_component_fui_alert, {
            type: "info",
            title: "An info alert",
            marginTop: 24
          }),
          (0, import_vue3.createVNode)(_component_fui_alert, {
            type: "clear",
            title: "An success alert",
            marginTop: 24
          }),
          (0, import_vue3.createVNode)(_component_fui_alert, {
            type: "warn",
            title: "An warn alert",
            marginTop: 24
          }),
          $data.show || $data.shown ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("u-text", {
            key: 0,
            class: "fui-section__title"
          }, "\u53EF\u5173\u95ED")) : (0, import_vue3.createCommentVNode)("v-if", true),
          $data.show ? ((0, import_vue3.openBlock)(), (0, import_vue3.createBlock)(_component_fui_alert, {
            key: 1,
            closable: "",
            title: "An info alert",
            onClose: $options.close
          }, null, 8, ["onClose"])) : (0, import_vue3.createCommentVNode)("v-if", true),
          $data.shown ? ((0, import_vue3.openBlock)(), (0, import_vue3.createBlock)(_component_fui_alert, {
            key: 2,
            type: "success",
            closable: "",
            title: "An info alert",
            desc: "Content of alert. Content of alert.Content of alert.",
            onClose: $options.close2,
            marginTop: 24
          }, null, 8, ["onClose"])) : (0, import_vue3.createCommentVNode)("v-if", true),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title" }, "\u81EA\u5B9A\u4E49\u56FE\u6807"),
          (0, import_vue3.createVNode)(_component_fui_alert, {
            type: "info",
            isLeft: "",
            spacing: "",
            title: "An info alert",
            size: "28rpx"
          }, {
            default: (0, import_vue3.withCtx)(() => [
              (0, import_vue3.createVNode)(_component_fui_icon, {
                name: "info",
                size: 48,
                color: "#fff"
              })
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue3.createVNode)(_component_fui_alert, {
            type: "success",
            isLeft: "",
            spacing: "",
            title: "An info alert",
            size: "28rpx",
            marginTop: 24
          }, {
            default: (0, import_vue3.withCtx)(() => [
              (0, import_vue3.createVNode)(_component_fui_icon, {
                name: "checkbox",
                size: 48,
                color: "#fff"
              })
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue3.createVNode)(_component_fui_alert, {
            type: "warn",
            isLeft: "",
            spacing: "",
            title: "An info alert",
            size: "28rpx",
            marginTop: 24
          }, {
            default: (0, import_vue3.withCtx)(() => [
              (0, import_vue3.createVNode)(_component_fui_icon, {
                name: "warning",
                size: 48,
                color: "#fff"
              })
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue3.createVNode)(_component_fui_alert, {
            type: "clear",
            isLeft: "",
            spacing: "",
            title: "An info alert",
            size: "28rpx",
            marginTop: 24
          }, {
            default: (0, import_vue3.withCtx)(() => [
              (0, import_vue3.createVNode)(_component_fui_icon, {
                name: "clear",
                size: 48,
                color: "#fff"
              })
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title" }, "\u81EA\u5B9A\u4E49\u989C\u8272"),
          (0, import_vue3.createVNode)(_component_fui_alert, {
            type: "clear",
            iconColor: "#FF2B2B",
            background: "#fff",
            color: "#181818",
            title: "An info alert"
          }),
          (0, import_vue3.createVNode)(_component_fui_alert, {
            type: "success",
            iconColor: "#09BE4F",
            background: "#fff",
            color: "#181818",
            title: "An info alert",
            marginTop: 24
          }),
          (0, import_vue3.createVNode)(_component_fui_alert, {
            type: "warn",
            iconColor: "#FFB703",
            background: "#fff",
            color: "#181818",
            title: "An info alert",
            marginTop: 24
          })
        ])
      ])
    ]);
  }
  var alert = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/data/alert/alert.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/component/data/alert/alert";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    alert.mpType = "page";
    const app = Vue.createPageApp(alert, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...alert.styles || []]));
    app.mount("#root");
  }
})();
