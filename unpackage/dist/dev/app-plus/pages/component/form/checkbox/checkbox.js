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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/fui-checkbox-group.js
  var import_vue2 = __toESM(require_vue());
  var _style_0 = { "fui-checkbox__input": { "": { "fontSize": 0, "color": "rgba(0,0,0,0)", "width": "40rpx", "height": "40rpx", "borderWidth": 1, "borderStyle": "solid", "borderRadius": "40rpx", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "overflow": "hidden", "position": "relative" } }, "fui-check__mark": { "": { "width": "20rpx", "height": "40rpx", "borderBottomStyle": "solid", "borderBottomWidth": 3, "borderBottomColor": "#FFFFFF", "borderRightStyle": "solid", "borderRightWidth": 3, "borderRightColor": "#FFFFFF", "transform": "rotate(45deg) scale(0.5)", "transformOrigin": "54% 48%" } }, "fui-checkbox__hidden": { "": { "width": "100wx", "height": "100wx", "borderWidth": 0, "position": "absolute", "top": 0, "left": 0, "zIndex": 2 } }, "fui-checkbox__disabled": { "": { "opacity": 0.6 } } };
  var _sfc_main$1 = {
    name: "fui-checkbox",
    emits: ["change"],
    props: {
      value: {
        type: String,
        default: ""
      },
      checked: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      //checkbox选中背景颜色
      color: {
        type: String,
        default: ""
      },
      //checkbox未选中时边框颜色
      borderColor: {
        type: String,
        default: "#ccc"
      },
      borderRadius: {
        type: String,
        default: "40px"
      },
      //是否只展示对号，无边框背景
      isCheckMark: {
        type: Boolean,
        default: false
      },
      //对号颜色
      checkMarkColor: {
        type: String,
        default: "#fff"
      },
      scaleRatio: {
        type: [Number, String],
        default: 1
      }
    },
    created() {
      this.val = this.checked;
      this.group = this.getParent();
      if (this.group) {
        this.group.childrens.push(this);
        if (this.group.value && this.group.value.length > 0) {
          this.val = this.group.value.includes(this.value);
        }
        if (this.group.modelValue && this.group.modelValue.length > 0) {
          this.val = this.group.modelValue.includes(this.value);
        }
      }
      this.label = this.getParent("fui-label");
      if (this.label) {
        this.label.childrens.push(this);
      }
    },
    watch: {
      checked(newVal) {
        this.val = newVal;
      },
      val(newVal) {
        if (this.group) {
          this.group.changeValue(this.val, this);
        }
      }
    },
    computed: {
      getColor() {
        let color = this.color;
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
        val: false,
        isNvue
      };
    },
    methods: {
      getBackgroundColor(val, isCheckMark) {
        let color = val ? this.getColor : "#fff";
        if (isCheckMark) {
          color = "transparent";
        }
        return color;
      },
      getBorderColor(val, isCheckMark) {
        let color = val ? this.getColor : this.borderColor;
        if (isCheckMark) {
          color = "transparent";
        }
        return color;
      },
      checkboxChange(e) {
        if (this.disabled)
          return;
        this.val = !this.val;
        this.$emit("change", {
          checked: this.val,
          value: this.value
        });
      },
      getParent(name = "fui-checkbox-group") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      labelClick() {
        this.checkboxChange();
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_checkbox = (0, import_vue2.resolveComponent)("checkbox");
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "view",
      {
        class: (0, import_vue2.normalizeClass)(["fui-checkbox__input", { "fui-checkbox__disabled": $props.disabled, "fui-checkbox__color": !$options.getColor && $data.val && !$props.isCheckMark }]),
        style: (0, import_vue2.normalizeStyle)({ backgroundColor: $options.getBackgroundColor($data.val, $props.isCheckMark), borderColor: $options.getBorderColor($data.val, $props.isCheckMark), zoom: $data.isNvue ? 1 : $props.scaleRatio, transform: `scale(${$data.isNvue ? $props.scaleRatio : 1})`, borderRadius: $props.borderRadius }),
        onClick: _cache[0] || (_cache[0] = (0, import_vue2.withModifiers)((...args) => $options.checkboxChange && $options.checkboxChange(...args), ["stop"])),
        renderWhole: true
      },
      [
        $data.val ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
          "view",
          {
            key: 0,
            class: "fui-check__mark",
            style: (0, import_vue2.normalizeStyle)({ borderBottomColor: $props.checkMarkColor, borderRightColor: $props.checkMarkColor })
          },
          null,
          4
          /* STYLE */
        )) : (0, import_vue2.createCommentVNode)("v-if", true),
        (0, import_vue2.createVNode)(_component_checkbox, {
          class: "fui-checkbox__hidden",
          style: { "opacity": "0", "position": "absolute" },
          color: $options.getColor,
          disabled: $props.disabled,
          value: $props.value,
          checked: $data.val
        }, null, 8, ["color", "disabled", "value", "checked"])
      ],
      6
      /* CLASS, STYLE */
    );
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-checkbox/fui-checkbox.vue"]]);
  var _sfc_main = {
    name: "fui-checkbox-group",
    emits: ["change", "input", "update:modelValue"],
    props: {
      name: {
        type: String,
        default: ""
      },
      modelValue: {
        type: Array,
        default() {
          return [];
        }
      },
      value: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        vals: ""
      };
    },
    watch: {
      modelValue(vals) {
        this.modelChange(vals);
      },
      value(vals) {
        this.modelChange(vals);
      }
    },
    created() {
      this.childrens = [];
    },
    methods: {
      checkboxChange(e) {
        this.$emit("change", e);
        this.$emit("input", e.detail.value);
        this.$emit("update:modelValue", e.detail.value);
      },
      changeValue(checked, target) {
        let vals = [];
        this.childrens.forEach((item) => {
          if (item.val) {
            vals.push(item.value);
          }
        });
        this.vals = vals;
        let e = {
          detail: {
            value: vals
          }
        };
        this.checkboxChange(e);
      },
      modelChange(vals) {
        this.childrens.forEach((item) => {
          if (vals.includes(item.value)) {
            item.val = true;
          } else {
            item.val = false;
          }
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_checkbox_group = (0, import_vue2.resolveComponent)("checkbox-group");
    return (0, import_vue2.openBlock)(), (0, import_vue2.createBlock)(_component_checkbox_group, { name: $props.name }, {
      default: (0, import_vue2.withCtx)(() => [
        (0, import_vue2.renderSlot)(_ctx.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["name"]);
  }
  var __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-checkbox-group/fui-checkbox-group.vue"]]);

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/form/checkbox/checkbox.js
  var import_vue5 = __toESM(require_vue());

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/fui-label.js
  var import_vue3 = __toESM(require_vue());
  var _style_02 = { "fui-label__full": { "": { "flex": 1 } } };
  var _sfc_main2 = {
    name: "fui-label",
    props: {
      //padding值：['20rpx','32rpx']->[上，右，下，左]
      padding: {
        type: Array,
        default() {
          return [];
        }
      },
      //margin值：[上，右，下，左]
      margin: {
        type: Array,
        default() {
          return [];
        }
      },
      full: {
        type: Boolean,
        default: false
      },
      inline: {
        type: Boolean,
        default: false
      }
    },
    created() {
      this.childrens = [];
    },
    methods: {
      onClick() {
        if (this.childrens && this.childrens.length > 0) {
          for (let child of this.childrens) {
            child.labelClick();
          }
        }
      }
    }
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
      "view",
      {
        class: (0, import_vue3.normalizeClass)(["fui-label__box", { "fui-label__full": $props.full, "fui-label__inline": $props.inline }]),
        style: (0, import_vue3.normalizeStyle)({ paddingTop: $props.padding[0] || 0, paddingRight: $props.padding[1] || 0, paddingBottom: $props.padding[2] || $props.padding[0] || 0, paddingLeft: $props.padding[3] || $props.padding[1] || 0, marginTop: $props.margin[0] || 0, marginRight: $props.margin[1] || 0, marginBottom: $props.margin[2] || $props.margin[0] || 0, marginLeft: $props.margin[3] || $props.margin[1] || 0 }),
        onClick: _cache[0] || (_cache[0] = (0, import_vue3.withModifiers)((...args) => $options.onClick && $options.onClick(...args), ["stop"])),
        renderWhole: true
      },
      [
        (0, import_vue3.renderSlot)(_ctx.$slots, "default")
      ],
      6
      /* CLASS, STYLE */
    );
  }
  var __easycom_22 = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-label/fui-label.vue"]]);

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/fui-list-cell.js
  var import_vue4 = __toESM(require_vue());
  var _style_03 = { "fui-list__cell": { "": { "position": "relative", "flex": 1, "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between" } }, "fui-list__item": { "": { "flex": 1 } }, "fui-cell__arrow": { "": { "height": "40rpx", "width": "40rpx", "borderTopWidth": 3, "borderRightWidth": 3, "borderBottomWidth": 0, "borderLeftWidth": 0, "borderStyle": "solid", "transform": "rotate(45deg) scale(0.5)", "borderTopRightRadius": "3rpx", "transformOrigin": "center center", "marginRight": "-5.8579rpx" } }, "fui-cell__border-top": { "": { "position": "absolute", "top": 0, "height": 0.5, "zIndex": -1 } }, "fui-cell__border-bottom": { "": { "position": "absolute", "bottom": 0, "height": 0.5, "zIndex": -1 } }, "fui-highlight": { "": { "!backgroundColor:active": "rgba(0,0,0,0.2)" } } };
  var _sfc_main3 = {
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
  function _sfc_render3(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
      "view",
      {
        class: (0, import_vue4.normalizeClass)(["fui-list__cell", { "fui-highlight": $props.highlight, "fui-list__cell-background": !$props.background }]),
        style: (0, import_vue4.normalizeStyle)({ paddingTop: $options.getPadding[0] || 0, paddingRight: $options.getPadding[1] || 0, paddingBottom: $options.getPadding[2] || $options.getPadding[0] || 0, paddingLeft: $options.getPadding[3] || $options.getPadding[1] || 0, background: $props.background, marginTop: $props.marginTop + "rpx", marginBottom: $props.marginBottom + "rpx", borderRadius: $props.radius }),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick && $options.handleClick(...args)),
        renderWhole: true
      },
      [
        $props.topBorder ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
          "view",
          {
            key: 0,
            style: (0, import_vue4.normalizeStyle)({ background: $options.getBorderColor, left: $props.topLeft + "rpx", right: $props.topRight + "rpx" }),
            class: (0, import_vue4.normalizeClass)(["fui-cell__border-top", { "fui-cell__border-color": !$options.getBorderColor }])
          },
          null,
          6
          /* CLASS, STYLE */
        )) : (0, import_vue4.createCommentVNode)("v-if", true),
        (0, import_vue4.renderSlot)(_ctx.$slots, "default"),
        $props.bottomBorder ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
          "view",
          {
            key: 1,
            style: (0, import_vue4.normalizeStyle)({ background: $options.getBorderColor, left: $options.getBottomLeft + "rpx", right: $props.bottomRight + "rpx" }),
            class: (0, import_vue4.normalizeClass)(["fui-cell__border-bottom", { "fui-cell__border-color": !$options.getBorderColor }])
          },
          null,
          6
          /* CLASS, STYLE */
        )) : (0, import_vue4.createCommentVNode)("v-if", true),
        $props.arrow ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
          "view",
          {
            key: 2,
            class: "fui-cell__arrow",
            style: (0, import_vue4.normalizeStyle)({ "border-color": $options.getArrowColor })
          },
          null,
          4
          /* STYLE */
        )) : (0, import_vue4.createCommentVNode)("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  var __easycom_23 = /* @__PURE__ */ _export_sfc(_sfc_main3, [["render", _sfc_render3], ["styles", [_style_03]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-list-cell/fui-list-cell.vue"]]);

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/form/checkbox/checkbox.js
  var _style_04 = { "fui-section__title": { "": { "marginLeft": "32rpx" } }, "fui-list__item": { "": { "flex": 1, "flexDirection": "row", "alignItems": "center", "backgroundColor": "#FFFFFF", "paddingTop": "28rpx", "paddingRight": "32rpx", "paddingBottom": "28rpx", "paddingLeft": "32rpx" } }, "fui-text": { "": { "fontSize": "30rpx", "paddingLeft": "16rpx" } }, "fui-list__cell": { "": { "flex": 1, "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between" } } };
  var _sfc_main4 = {
    data() {
      return {
        vals: ["1"],
        checkboxItems: [
          {
            name: "\u7BEE\u7403",
            value: "1",
            checked: true
          },
          {
            name: "\u7FBD\u6BDB\u7403",
            value: "2",
            checked: false
          },
          {
            name: "\u4E52\u4E53\u7403",
            value: "3",
            checked: false
          }
        ]
      };
    },
    methods: {
      change(e) {
        formatAppLog("log", "at pages/component/form/checkbox/checkbox.nvue:105", "change:" + JSON.stringify(e.detail.value));
      }
    }
  };
  function _sfc_render4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_fui_checkbox = resolveEasycom((0, import_vue5.resolveDynamicComponent)("fui-checkbox"), __easycom_0);
    const _component_fui_label = resolveEasycom((0, import_vue5.resolveDynamicComponent)("fui-label"), __easycom_22);
    const _component_fui_checkbox_group = resolveEasycom((0, import_vue5.resolveDynamicComponent)("fui-checkbox-group"), __easycom_2);
    const _component_fui_list_cell = resolveEasycom((0, import_vue5.resolveDynamicComponent)("fui-list-cell"), __easycom_23);
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue5.createElementVNode)("view", { class: "fui-wrap" }, [
        (0, import_vue5.createElementVNode)("view", { class: "fui-page__hd" }, [
          (0, import_vue5.createElementVNode)("u-text", { class: "fui-page__title" }, "Checkbox"),
          (0, import_vue5.createElementVNode)("u-text", { class: "fui-page__desc" }, "Checkbox \u591A\u9879\u9009\u62E9\u5668\u3002")
        ]),
        (0, import_vue5.createElementVNode)("view", { class: "fui-page__bd" }, [
          (0, import_vue5.createElementVNode)("u-text", { class: "fui-section__title fui-mtop--0" }, "\u57FA\u672C\u4F7F\u7528"),
          (0, import_vue5.createVNode)(_component_fui_checkbox_group, {
            name: "checkbox",
            modelValue: $data.vals,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.vals = $event),
            onChange: $options.change
          }, {
            default: (0, import_vue5.withCtx)(() => [
              (0, import_vue5.createElementVNode)("view", { class: "fui-list__item" }, [
                (0, import_vue5.createVNode)(_component_fui_label, null, {
                  default: (0, import_vue5.withCtx)(() => [
                    (0, import_vue5.createElementVNode)("view", { class: "fui-align__center" }, [
                      (0, import_vue5.createVNode)(_component_fui_checkbox, { value: "1" }),
                      (0, import_vue5.createElementVNode)("u-text", { class: "fui-text" }, "\u9009\u4E2D")
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                (0, import_vue5.createVNode)(_component_fui_label, { margin: ["0", "0", "0", "40rpx"] }, {
                  default: (0, import_vue5.withCtx)(() => [
                    (0, import_vue5.createElementVNode)("view", { class: "fui-align__center" }, [
                      (0, import_vue5.createVNode)(_component_fui_checkbox, { value: "2" }),
                      (0, import_vue5.createElementVNode)("u-text", { class: "fui-text" }, "\u672A\u9009\u4E2D")
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue", "onChange"]),
          (0, import_vue5.createElementVNode)("u-text", { class: "fui-section__title" }, "\u63A8\u8350\u5E03\u5C40"),
          (0, import_vue5.createVNode)(_component_fui_checkbox_group, null, {
            default: (0, import_vue5.withCtx)(() => [
              ((0, import_vue5.openBlock)(true), (0, import_vue5.createElementBlock)(
                import_vue5.Fragment,
                null,
                (0, import_vue5.renderList)($data.checkboxItems, (item, index) => {
                  return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(
                    _component_fui_label,
                    { key: index },
                    {
                      default: (0, import_vue5.withCtx)(() => [
                        (0, import_vue5.createVNode)(
                          _component_fui_list_cell,
                          null,
                          {
                            default: (0, import_vue5.withCtx)(() => [
                              (0, import_vue5.createElementVNode)("view", { class: "fui-align__center" }, [
                                (0, import_vue5.createVNode)(_component_fui_checkbox, {
                                  checked: item.checked,
                                  value: item.value,
                                  color: "#FFB703",
                                  borderColor: "#B2B2B2"
                                }, null, 8, ["checked", "value"]),
                                (0, import_vue5.createElementVNode)(
                                  "u-text",
                                  { class: "fui-text" },
                                  (0, import_vue5.toDisplayString)(item.name),
                                  1
                                  /* TEXT */
                                )
                              ])
                            ]),
                            _: 2
                            /* DYNAMIC */
                          },
                          1024
                          /* DYNAMIC_SLOTS */
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
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue5.createElementVNode)("u-text", { class: "fui-section__title" }, "\u63A8\u8350\u5E03\u5C40"),
          (0, import_vue5.createVNode)(_component_fui_checkbox_group, null, {
            default: (0, import_vue5.withCtx)(() => [
              ((0, import_vue5.openBlock)(true), (0, import_vue5.createElementBlock)(
                import_vue5.Fragment,
                null,
                (0, import_vue5.renderList)($data.checkboxItems, (item, index) => {
                  return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(
                    _component_fui_label,
                    { key: index },
                    {
                      default: (0, import_vue5.withCtx)(() => [
                        (0, import_vue5.createVNode)(
                          _component_fui_list_cell,
                          null,
                          {
                            default: (0, import_vue5.withCtx)(() => [
                              (0, import_vue5.createElementVNode)("view", { class: "fui-list__cell" }, [
                                (0, import_vue5.createElementVNode)(
                                  "u-text",
                                  null,
                                  (0, import_vue5.toDisplayString)(item.name),
                                  1
                                  /* TEXT */
                                ),
                                (0, import_vue5.createVNode)(_component_fui_checkbox, {
                                  checked: item.checked,
                                  value: item.value
                                }, null, 8, ["checked", "value"])
                              ])
                            ]),
                            _: 2
                            /* DYNAMIC */
                          },
                          1024
                          /* DYNAMIC_SLOTS */
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
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue5.createElementVNode)("u-text", { class: "fui-section__title" }, "\u63A8\u8350\u5E03\u5C40"),
          (0, import_vue5.createVNode)(_component_fui_checkbox_group, null, {
            default: (0, import_vue5.withCtx)(() => [
              ((0, import_vue5.openBlock)(true), (0, import_vue5.createElementBlock)(
                import_vue5.Fragment,
                null,
                (0, import_vue5.renderList)($data.checkboxItems, (item, index) => {
                  return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(
                    _component_fui_label,
                    { key: index },
                    {
                      default: (0, import_vue5.withCtx)(() => [
                        (0, import_vue5.createVNode)(
                          _component_fui_list_cell,
                          null,
                          {
                            default: (0, import_vue5.withCtx)(() => [
                              (0, import_vue5.createElementVNode)("view", { class: "fui-list__cell" }, [
                                (0, import_vue5.createElementVNode)(
                                  "u-text",
                                  null,
                                  (0, import_vue5.toDisplayString)(item.name),
                                  1
                                  /* TEXT */
                                ),
                                (0, import_vue5.createVNode)(_component_fui_checkbox, {
                                  isCheckMark: "",
                                  checkMarkColor: "#FF2B2B",
                                  scaleRatio: 1.3,
                                  checked: item.checked,
                                  value: item.value
                                }, null, 8, ["scaleRatio", "checked", "value"])
                              ])
                            ]),
                            _: 2
                            /* DYNAMIC */
                          },
                          1024
                          /* DYNAMIC_SLOTS */
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
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue5.createElementVNode)("u-text", { class: "fui-section__title" }, "\u4FEE\u6539\u5706\u89D2\u503C"),
          (0, import_vue5.createVNode)(_component_fui_checkbox_group, null, {
            default: (0, import_vue5.withCtx)(() => [
              ((0, import_vue5.openBlock)(true), (0, import_vue5.createElementBlock)(
                import_vue5.Fragment,
                null,
                (0, import_vue5.renderList)($data.checkboxItems, (item, index) => {
                  return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(
                    _component_fui_label,
                    { key: index },
                    {
                      default: (0, import_vue5.withCtx)(() => [
                        (0, import_vue5.createVNode)(
                          _component_fui_list_cell,
                          null,
                          {
                            default: (0, import_vue5.withCtx)(() => [
                              (0, import_vue5.createElementVNode)("view", { class: "fui-align__center" }, [
                                (0, import_vue5.createVNode)(_component_fui_checkbox, {
                                  checked: item.checked,
                                  value: item.value,
                                  color: "#FFB703",
                                  borderColor: "#B2B2B2",
                                  borderRadius: "8rpx"
                                }, null, 8, ["checked", "value"]),
                                (0, import_vue5.createElementVNode)(
                                  "u-text",
                                  { class: "fui-text" },
                                  (0, import_vue5.toDisplayString)(item.name),
                                  1
                                  /* TEXT */
                                )
                              ])
                            ]),
                            _: 2
                            /* DYNAMIC */
                          },
                          1024
                          /* DYNAMIC_SLOTS */
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
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ])
    ]);
  }
  var checkbox = /* @__PURE__ */ _export_sfc(_sfc_main4, [["render", _sfc_render4], ["styles", [_style_04]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/form/checkbox/checkbox.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/component/form/checkbox/checkbox";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    checkbox.mpType = "page";
    const app = Vue.createPageApp(checkbox, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...checkbox.styles || []]));
    app.mount("#root");
  }
})();
