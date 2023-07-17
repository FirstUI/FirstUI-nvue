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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/form/inputNumber/inputNumber.js
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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/form/inputNumber/inputNumber.js
  var _style_02 = { "fui-input__number": { "": { "flexDirection": "row", "alignItems": "center" } }, "fui-number__minus": { "": { "position": "relative", "flexDirection": "column", "alignItems": "center", "justifyContent": "center" } }, "fui-minus__sign": { "": { "height": 2, "borderRadius": 2 } }, "fui-number__plus": { "": { "position": "relative", "flexDirection": "row", "alignItems": "center", "justifyContent": "center" } }, "fui-plus__sign-col": { "": { "position": "absolute", "top": 0, "transform": "translateX(-1px)", "width": 2, "borderRadius": 2 } }, "fui-plus__sign-row": { "": { "height": 2, "borderRadius": 2 } }, "fui-number__input": { "": { "textAlign": "center", "fontWeight": "500", "borderWidth": 0 } }, "fui-number__disabled": { "": { "opacity": 0.6 } } };
  var _sfc_main$1 = {
    name: "fui-input-number",
    emits: ["change", "update:modelValue", "input", "blur"],
    props: {
      modelValue: {
        type: [Number, String],
        default: 1
      },
      //number、text（主要用与输入负号）
      type: {
        type: String,
        default: "number"
      },
      //最小值
      min: {
        type: Number,
        default: 1
      },
      //最大值
      max: {
        type: Number,
        default: 99
      },
      //每次点击改变的间隔大小
      step: {
        type: Number,
        default: 1
      },
      //是否禁用操作
      disabled: {
        type: Boolean,
        default: false
      },
      //加减号宽度，单位rpx
      signWidth: {
        type: [Number, String],
        default: 24
      },
      //加减号颜色
      signColor: {
        type: String,
        default: "#181818"
      },
      //input高度，单位rpx
      height: {
        type: [Number, String],
        default: 40
      },
      //input宽度，单位rpx
      width: {
        type: [Number, String],
        default: 80
      },
      //input圆角，单位rpx
      radius: {
        type: [Number, String],
        default: 8
      },
      size: {
        type: Number,
        default: 26
      },
      //input 背景颜色
      backgroundColor: {
        type: String,
        default: "#EEEEEE"
      },
      //input 字体颜色
      color: {
        type: String,
        default: "#181818"
      },
      //输入框margin-left，margin-right值
      margin: {
        type: [Number, String],
        default: 16
      },
      //是否自定义加减号，为true则去除默认加减号，使用插槽自定义
      custom: {
        type: Boolean,
        default: false
      },
      //索引值，列表中使用
      index: {
        type: [Number, String],
        default: 0
      },
      //自定义参数
      params: {
        type: [Number, String],
        default: 0
      }
    },
    created() {
      this.inputValue = this.getValue(this.modelValue);
    },
    computed: {
      getMinHeight() {
        return Number(this.height) - 8 + "rpx";
      }
    },
    data() {
      let isNvue = false;
      isNvue = true;
      return {
        inputValue: 0,
        oldValue: 0,
        isNvue
      };
    },
    watch: {
      modelValue(val) {
        this.inputValue = this.getValue(val);
      },
      inputValue(newVal, oldVal) {
        if (!isNaN(Number(newVal)) && Number(newVal) !== Number(oldVal)) {
          const val = this.getValue(+newVal);
          this.oldValue = val;
          this.$emit("change", {
            value: val,
            index: this.index,
            params: this.params
          });
          this.$emit("input", val);
          this.$emit("update:modelValue", +val);
        }
      }
    },
    methods: {
      getScale(val, step) {
        let scale = 1;
        let scaleVal = 1;
        if (!Number.isInteger(step)) {
          scale = Math.pow(10, (step + "").split(".")[1].length);
        }
        if (!Number.isInteger(val)) {
          scaleVal = Math.pow(10, (val + "").split(".")[1].length);
        }
        return Math.max(scale, scaleVal);
      },
      getValue(val) {
        val = Number(val);
        if (val < this.min) {
          val = this.min;
        } else if (val > this.max) {
          val = this.max;
        }
        return val;
      },
      calcNum: function(type) {
        if (this.disabled || this.inputValue == this.min && type === "reduce" || this.inputValue == this.max && type === "plus")
          return;
        const scale = this.getScale(Number(this.inputValue), Number(this.step));
        let num = Number(this.inputValue) * scale;
        let step = this.step * scale;
        if (type === "reduce") {
          num -= step;
        } else if (type === "plus") {
          num += step;
        }
        let value = Number((num / scale).toFixed(String(scale).length - 1));
        if (value < this.min) {
          value = this.min;
        } else if (value > this.max) {
          value = this.max;
        }
        this.inputValue = String(value);
      },
      plus: function() {
        this.calcNum("plus");
      },
      minus: function() {
        this.calcNum("reduce");
      },
      blur: function(e) {
        let value = e.detail.value;
        if (value && !isNaN(Number(value))) {
          if (~value.indexOf(".") && Number.isInteger(this.step) && Number.isInteger(Number(value))) {
            value = value.split(".")[0];
          }
          value = this.getValue(value);
        } else {
          value = this.oldValue;
        }
        setTimeout(() => {
          e.detail.value = value;
          this.$emit("blur", e);
          this.inputValue = value;
        }, this.type === "text" ? 100 : 0);
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
      class: "fui-input__number",
      renderWhole: true
    }, [
      (0, import_vue3.createElementVNode)(
        "view",
        {
          class: (0, import_vue3.normalizeClass)(["fui-number__minus", [$props.disabled || $props.min >= $data.inputValue ? "fui-number__disabled" : ""]]),
          onClick: _cache[0] || (_cache[0] = (...args) => $options.minus && $options.minus(...args)),
          style: (0, import_vue3.normalizeStyle)({ minHeight: $options.getMinHeight })
        },
        [
          !$props.custom ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
            "view",
            {
              key: 0,
              class: "fui-minus__sign",
              style: (0, import_vue3.normalizeStyle)({ backgroundColor: $props.signColor, width: $props.signWidth + "rpx" })
            },
            null,
            4
            /* STYLE */
          )) : (0, import_vue3.createCommentVNode)("v-if", true),
          (0, import_vue3.renderSlot)(_ctx.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      ),
      (0, import_vue3.createElementVNode)("u-input", {
        type: $props.type,
        modelValue: $data.inputValue,
        onInput: _cache[1] || (_cache[1] = ($event) => $data.inputValue = $event.detail.value),
        disabled: $props.disabled,
        onBlur: _cache[2] || (_cache[2] = (...args) => $options.blur && $options.blur(...args)),
        class: "fui-number__input",
        style: (0, import_vue3.normalizeStyle)({ color: $props.color, fontSize: $props.size + "rpx", backgroundColor: $props.backgroundColor, height: $props.height + "rpx", minHeight: $props.height + "rpx", width: $props.width + "rpx", borderRadius: $props.radius + "rpx", marginLeft: $props.margin + "rpx", marginRight: $props.margin + "rpx" })
      }, null, 44, ["type", "modelValue", "disabled"]),
      (0, import_vue3.createElementVNode)(
        "view",
        {
          class: (0, import_vue3.normalizeClass)(["fui-number__plus", [$props.disabled || $data.inputValue >= $props.max ? "fui-number__disabled" : ""]]),
          style: (0, import_vue3.normalizeStyle)({ minWidth: $props.signWidth + "rpx", minHeight: $props.signWidth + "rpx" }),
          onClick: _cache[3] || (_cache[3] = (...args) => $options.plus && $options.plus(...args))
        },
        [
          !$props.custom ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
            "view",
            {
              key: 0,
              class: "fui-plus__sign-col",
              style: (0, import_vue3.normalizeStyle)({ height: $props.signWidth + "rpx", backgroundColor: $props.signColor, left: $data.isNvue ? $props.signWidth / 2 + "rpx" : "50%" })
            },
            null,
            4
            /* STYLE */
          )) : (0, import_vue3.createCommentVNode)("v-if", true),
          !$props.custom ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
            "view",
            {
              key: 1,
              class: "fui-plus__sign-row",
              style: (0, import_vue3.normalizeStyle)({ width: $props.signWidth + "rpx", backgroundColor: $props.signColor })
            },
            null,
            4
            /* STYLE */
          )) : (0, import_vue3.createCommentVNode)("v-if", true),
          (0, import_vue3.renderSlot)(_ctx.$slots, "plus")
        ],
        6
        /* CLASS, STYLE */
      )
    ]);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_02]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-input-number/fui-input-number.vue"]]);
  var _sfc_main2 = {
    data() {
      return {
        val: 1,
        inputVal: ""
      };
    },
    methods: {
      change(e) {
        this.inputVal = e.value;
      }
    }
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_fui_input_number = resolveEasycom((0, import_vue3.resolveDynamicComponent)("fui-input-number"), __easycom_0);
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
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-page__title" }, "InputNumber"),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-page__desc" }, "InputNumber \u6570\u5B57\u8F93\u5165\u6846\uFF0C\u8BE5\u7EC4\u4EF6\u591A\u7528\u4E8E\u8D2D\u7269\u8F66\u52A0\u51CF\u5546\u54C1\u7B49\u573A\u666F\u3002")
        ]),
        (0, import_vue3.createElementVNode)("view", { class: "fui-page__bd fui-page__spacing" }, [
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title fui-mtop--0" }, "\u57FA\u672C\u4F7F\u7528"),
          (0, import_vue3.createVNode)(_component_fui_input_number),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title" }, "\u6539\u53D8\u52A0\u51CF\u53F7\u989C\u8272"),
          (0, import_vue3.createVNode)(_component_fui_input_number, {
            signColor: "#FFB703",
            value: "1.1",
            modelValue: "1.1"
          }),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title" }, "\u6539\u53D8\u6570\u5B57\u6846\u80CC\u666F\u8272"),
          (0, import_vue3.createVNode)(_component_fui_input_number, { backgroundColor: "#F1F4FA" }),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title" }, "\u81EA\u5B9A\u4E49\u52A0\u51CF\u53F7"),
          (0, import_vue3.createVNode)(_component_fui_input_number, {
            custom: "",
            backgroundColor: "#FFF",
            size: 30,
            width: 60,
            margin: "0"
          }, {
            plus: (0, import_vue3.withCtx)(() => [
              (0, import_vue3.createVNode)(_component_fui_icon, {
                name: "plussign-fill",
                size: 48,
                color: "#FFB703"
              })
            ]),
            default: (0, import_vue3.withCtx)(() => [
              (0, import_vue3.createVNode)(_component_fui_icon, {
                name: "minussign",
                size: 48,
                color: "#FFB703"
              })
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue3.createElementVNode)(
            "u-text",
            { class: "fui-section__title" },
            "\u4F7F\u7528v-model\uFF1A" + (0, import_vue3.toDisplayString)($data.val),
            1
            /* TEXT */
          ),
          (0, import_vue3.createVNode)(_component_fui_input_number, {
            modelValue: $data.val,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.val = $event)
          }, null, 8, ["modelValue"]),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title" }, "\u8BBE\u7F6E\u6700\u5C0F\u503C\u548C\u6700\u5927\u503C"),
          (0, import_vue3.createVNode)(_component_fui_input_number, {
            min: -9,
            max: 9
          }),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title" }, "\u8BBE\u7F6E\u6B65\u957F\uFF08\u6B65\u957F0.1)"),
          (0, import_vue3.createVNode)(_component_fui_input_number, { step: 0.1 }, null, 8, ["step"]),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title" }, "\u7981\u7528\u72B6\u6001"),
          (0, import_vue3.createVNode)(_component_fui_input_number, { disabled: "" }),
          (0, import_vue3.createElementVNode)(
            "u-text",
            { class: "fui-section__title" },
            "\u4E8B\u4EF6\u83B7\u53D6\u6570\u5B57\u6846\u7684\u503C: " + (0, import_vue3.toDisplayString)($data.inputVal),
            1
            /* TEXT */
          ),
          (0, import_vue3.createVNode)(_component_fui_input_number, { onChange: $options.change }, null, 8, ["onChange"]),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title" }, "\u652F\u6301\u8F93\u5165\u8D1F\u53F7"),
          (0, import_vue3.createVNode)(_component_fui_input_number, {
            type: "text",
            min: -99
          })
        ])
      ])
    ]);
  }
  var inputNumber = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/form/inputNumber/inputNumber.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/component/form/inputNumber/inputNumber";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    inputNumber.mpType = "page";
    const app = Vue.createPageApp(inputNumber, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...inputNumber.styles || []]));
    app.mount("#root");
  }
})();
