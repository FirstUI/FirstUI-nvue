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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/fui-icon.js
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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/fui-icon.js
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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/basics/icon/icon.js
  var import_vue4 = __toESM(require_vue());

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/fui-grid.js
  var import_vue3 = __toESM(require_vue());
  var _style_0$1 = { "fui-grid__item": { "": { "flexDirection": "column" } }, "fui-grid__item-box": { "": { "position": "relative", "flex": 1, "flexDirection": "column" } }, "fui-grid__item-border": { "": { "position": "relative", "borderBottomColor": "#EEEEEE", "borderBottomStyle": "solid", "borderBottomWidth": 0.5, "borderRightColor": "#EEEEEE", "borderRightStyle": "solid", "borderRightWidth": 0.5 } }, "fui-highlight": { "": { "!backgroundColor:active": "rgba(0,0,0,0.2)" } } };
  var _sfc_main$1 = {
    name: "fui-grid-item",
    emits: ["click"],
    inject: ["grid"],
    props: {
      //是否有点击效果
      highlight: {
        type: Boolean,
        default: true
      },
      backgroundColor: {
        type: String,
        default: "transparent"
      },
      //索引
      index: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        columns: 0,
        showBorder: true,
        width: 0,
        height: 0,
        borderColor: "#eaeef1"
      };
    },
    created() {
      this.init();
    },
    beforeUnmount() {
      if (this.grid) {
        this.grid.children.forEach((item, index) => {
          if (item === this) {
            this.grid.children.splice(index, 1);
          }
        });
      }
    },
    methods: {
      init() {
        if (this.grid) {
          this.columns = this.grid.columns;
          this.showBorder = this.grid.showBorder;
          this.borderColor = this.grid.borderColor;
          this.grid.children.push(this);
          this.width = this.grid.width;
          this.height = this.grid.height;
        }
      },
      handleClick() {
        const e = {
          detail: {
            index: this.index
          }
        };
        this.grid && this.grid.handleClick(e);
        this.$emit("click", e);
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.width ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
      "view",
      {
        key: 0,
        style: (0, import_vue3.normalizeStyle)("width:" + $data.width + ";" + ($data.height ? "height:" + $data.height : "")),
        class: "fui-grid__item",
        renderWhole: true
      },
      [
        (0, import_vue3.createElementVNode)(
          "view",
          {
            class: (0, import_vue3.normalizeClass)([{ "fui-grid__item-border": $data.showBorder, "fui-highlight": $props.highlight }, "fui-grid__item-box"]),
            style: (0, import_vue3.normalizeStyle)({ "border-right-color": $data.borderColor, "border-bottom-color": $data.borderColor, "border-top-color": $data.borderColor, backgroundColor: $props.backgroundColor }),
            onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick && $options.handleClick(...args))
          },
          [
            (0, import_vue3.renderSlot)(_ctx.$slots, "default")
          ],
          6
          /* CLASS, STYLE */
        )
      ],
      4
      /* STYLE */
    )) : (0, import_vue3.createCommentVNode)("v-if", true);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-grid-item/fui-grid-item.vue"]]);
  var _style_02 = { "fui-grid__wrap": { "": { "flex": 1, "flexDirection": "column" } }, "fui-grid__wrap-hidden": { "": { "opacity": 0 } }, "fui-grid__wrap-show": { "": { "!opacity": 1 } }, "fui-grid": { "": { "flexDirection": "row", "flexWrap": "wrap" } }, "fui-grid__between": { "": { "justifyContent": "space-between" } }, "fui-grid__border": { "": { "position": "relative", "borderLeftStyle": "solid", "borderLeftWidth": 0.5, "borderTopStyle": "solid", "borderTopWidth": 0.5 } } };
  var dom = requireNativePlugin("dom");
  var _sfc_main2 = {
    name: "fui-grid",
    emits: ["click"],
    props: {
      // 每行显示个数
      columns: {
        type: Number,
        default: 3
      },
      // 是否显示边框
      showBorder: {
        type: Boolean,
        default: true
      },
      // 边框颜色 仅nvue有效
      borderColor: {
        type: String,
        default: "#EEEEEE"
      },
      // 是否正方形显示,默认为 true
      square: {
        type: Boolean,
        default: true
      },
      // item 项是否两端对齐，仅在宽度无法拉满且影响美观时使用，谨慎使用 v2.0.0+
      between: {
        type: Boolean,
        default: false
      },
      //当数据无法铺满时，且设置了between 布局，末尾补足占位元素个数
      //最后一行数据个数+emptyElements 不可大于 columns 值
      emptyElements: {
        type: [Number, String],
        default: 0
      }
    },
    provide() {
      return {
        grid: this
      };
    },
    data() {
      const elemId = `fui_${Math.ceil(Math.random() * 1e6).toString(36)}`;
      return {
        elemId,
        width: 0,
        height: 0,
        isShow: false,
        seats: []
      };
    },
    created() {
      this.children = [];
      let sys = uni.getSystemInfoSync();
      this.width = 100 / this.columns + "%";
      if (this.square) {
        this.height = parseInt((sys.windowWidth - 1) / this.columns * 10) / 10 + "px";
      }
    },
    watch: {
      columns(val) {
        this.$nextTick(() => {
          this.init();
        });
      },
      showBorder(val) {
        this.childChange();
      },
      emptyElements(val) {
        this.createEmptyEl(val);
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.init();
        this.createEmptyEl(this.emptyElements);
      });
    },
    methods: {
      init() {
        setTimeout(() => {
          this.getWidth((width, height) => {
            this.children.forEach((item, index) => {
              item.width = width;
              item.height = height;
            });
            this.isShow = true;
          });
        }, 50);
      },
      createEmptyEl(val) {
        const nums = Number(val);
        let seats = [];
        if (nums && nums > 0) {
          for (let i = 0; i < nums; i++) {
            seats.push(i);
          }
          this.seats = seats;
        } else {
          this.seats = [];
        }
      },
      childChange() {
        this.children.forEach((item, index) => {
          item.showBorder = this.showBorder;
        });
      },
      handleClick(e) {
        this.$emit("click", e);
      },
      getWidth(fn) {
        dom.getComponentRect(this.$refs["fui_grid"], (ret) => {
          let width = (ret.size.width - 1) / this.columns;
          this.width = parseInt(width * 10) / 10 + "px";
          if (this.square) {
            this.height = this.width;
          }
          fn(this.width, this.height);
        });
      }
    }
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
      "view",
      {
        class: (0, import_vue3.normalizeClass)(["fui-grid__wrap", [$data.isShow ? "fui-grid__wrap-show" : "fui-grid__wrap-hidden"]]),
        renderWhole: true
      },
      [
        (0, import_vue3.createElementVNode)("view", {
          id: $data.elemId,
          ref: "fui_grid",
          class: (0, import_vue3.normalizeClass)(["fui-grid", { "fui-grid__border": $props.showBorder, "fui-grid__between": $props.between }]),
          style: (0, import_vue3.normalizeStyle)({ "border-left-color": $props.borderColor, "border-top-color": $props.borderColor })
        }, [
          (0, import_vue3.renderSlot)(_ctx.$slots, "default"),
          $data.seats.length > 0 && $props.between ? ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
            import_vue3.Fragment,
            { key: 0 },
            (0, import_vue3.renderList)($data.seats, (item, index) => {
              return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
                "view",
                {
                  key: index,
                  style: (0, import_vue3.normalizeStyle)("width:" + $data.width + ";" + ($data.height ? "height:" + $data.height : ""))
                },
                null,
                4
                /* STYLE */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          )) : (0, import_vue3.createCommentVNode)("v-if", true)
        ], 14, ["id"])
      ],
      2
      /* CLASS */
    );
  }
  var __easycom_12 = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-grid/fui-grid.vue"]]);

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/basics/icon/icon.js
  var icons2 = [
    "addfriends",
    "addfriends-fill",
    "backspace",
    "backspace-fill",
    "bankcard",
    "bankcard-fill",
    "camera",
    "camera-fill",
    "captcha",
    "captcha-fill",
    "cart",
    "cart-fill",
    "classify",
    "classify-fill",
    "comment",
    "comment-fill",
    "community",
    "community-fill",
    "coupon",
    "coupon-fill",
    "delete",
    "delete-fill",
    "edit",
    "edit-fill",
    "fabulous",
    "fabulous-fill",
    "find",
    "find-fill",
    "help",
    "help-fill",
    "home",
    "home-fill",
    "idcard",
    "idcard-fill",
    "info",
    "info-fill",
    "invite",
    "invite-fill",
    "kefu",
    "kefu-fill",
    "like",
    "like-fill",
    "location",
    "location-fill",
    "lock",
    "lock-fill",
    "mail",
    "mail-fill",
    "message",
    "message-fill",
    "mobile",
    "mobile-fill",
    "more",
    "more-fill",
    "my",
    "my-fill",
    "notice",
    "notice-fill",
    "order",
    "order-fill",
    "picture",
    "picture-fill",
    "setup",
    "setup-fill",
    "share",
    "share-fill",
    "shop",
    "shop-fill",
    "star",
    "starhalf",
    "star-fill",
    "stepon",
    "stepon-fill",
    "wait",
    "wait-fill",
    "warning",
    "warning-fill",
    "plus",
    "plussign",
    "plussign-fill",
    "minus",
    "minussign",
    "minussign-fill",
    "close",
    "clear",
    "clear-fill",
    "checkbox-fill",
    "checkround",
    "checkbox",
    "check",
    "pulldown-fill",
    "pullup",
    "pullup-fill",
    "pulldown",
    "roundright-fill",
    "roundright",
    "arrowright",
    "arrowleft",
    "arrowdown",
    "left",
    "up",
    "right",
    "back",
    "top",
    "dropdown",
    "turningleft",
    "turningup",
    "turningright",
    "turningdown",
    "refresh",
    "loading",
    "search",
    "rotate",
    "screen",
    "signin",
    "calendar",
    "scan",
    "qrcode",
    "wallet",
    "telephone",
    "visible",
    "invisible",
    "menu",
    "operate",
    "slide",
    "list",
    "nonetwork",
    "partake",
    "qa",
    "barchart",
    "piechart",
    "linechart",
    "at",
    "face",
    "redpacket",
    "suspend",
    "link",
    "keyboard",
    "play",
    "video",
    "voice",
    "addressbook",
    "principal",
    "sina",
    "browser",
    "moments",
    "qq",
    "wechat",
    "balance",
    "bankcardpay",
    "wxpay",
    "alipay",
    "payment",
    "receive",
    "sendout",
    "evaluate",
    "aftersale",
    "warehouse",
    "transport",
    "delivery",
    "switch",
    "goods",
    "goods-fill",
    "",
    ""
  ];
  var _style_03 = { "fui-icon__item": { "": { "flex": 1, "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "position": "relative" } }, "fui-icon__name": { "": { "fontSize": "28rpx", "fontWeight": "400", "paddingTop": "16rpx" } } };
  var _sfc_main3 = {
    data() {
      return {
        icons: icons2
      };
    },
    methods: {
      getName(e) {
        this.icons[e.detail.index];
      }
    }
  };
  function _sfc_render3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_fui_icon = resolveEasycom((0, import_vue4.resolveDynamicComponent)("fui-icon"), __easycom_1);
    const _component_fui_grid_item = resolveEasycom((0, import_vue4.resolveDynamicComponent)("fui-grid-item"), __easycom_0);
    const _component_fui_grid = resolveEasycom((0, import_vue4.resolveDynamicComponent)("fui-grid"), __easycom_12);
    return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue4.createElementVNode)("view", { class: "fui-wrap" }, [
        (0, import_vue4.createElementVNode)("view", { class: "fui-page__hd" }, [
          (0, import_vue4.createElementVNode)("u-text", { class: "fui-page__title" }, "Icon"),
          (0, import_vue4.createElementVNode)("u-text", { class: "fui-page__desc" }, "Icon \u56FE\u6807\uFF0CFirst UI\u5B57\u4F53\u56FE\u6807\u5E93\uFF0C\u53EF\u81EA\u884C\u6269\u5C55\u3002")
        ]),
        (0, import_vue4.createElementVNode)("view", { class: "fui-page__bd fui-page__spacing" }, [
          (0, import_vue4.createVNode)(_component_fui_grid, {
            columns: 3,
            onClick: $options.getName
          }, {
            default: (0, import_vue4.withCtx)(() => [
              ((0, import_vue4.openBlock)(true), (0, import_vue4.createElementBlock)(
                import_vue4.Fragment,
                null,
                (0, import_vue4.renderList)($data.icons, (item, index) => {
                  return (0, import_vue4.openBlock)(), (0, import_vue4.createBlock)(_component_fui_grid_item, {
                    highlight: item != "",
                    index,
                    key: index
                  }, {
                    default: (0, import_vue4.withCtx)(() => [
                      (0, import_vue4.createElementVNode)("view", { class: "fui-icon__item" }, [
                        ((0, import_vue4.openBlock)(), (0, import_vue4.createBlock)(_component_fui_icon, {
                          name: item,
                          key: index
                        }, null, 8, ["name"])),
                        (0, import_vue4.createElementVNode)(
                          "u-text",
                          { class: "fui-icon__name" },
                          (0, import_vue4.toDisplayString)(item),
                          1
                          /* TEXT */
                        )
                      ])
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["highlight", "index"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"])
        ])
      ])
    ]);
  }
  var icon = /* @__PURE__ */ _export_sfc(_sfc_main3, [["render", _sfc_render3], ["styles", [_style_03]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/basics/icon/icon.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/component/basics/icon/icon";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    icon.mpType = "page";
    const app = Vue.createPageApp(icon, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...icon.styles || []]));
    app.mount("#root");
  }
})();
