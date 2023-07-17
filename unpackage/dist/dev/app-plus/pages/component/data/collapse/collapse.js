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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/data/collapse/collapse.js
  var import_vue3 = __toESM(require_vue());

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/fui-list-cell.js
  var import_vue2 = __toESM(require_vue());
  var _style_0 = { "fui-list__cell": { "": { "position": "relative", "flex": 1, "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between" } }, "fui-list__item": { "": { "flex": 1 } }, "fui-cell__arrow": { "": { "height": "40rpx", "width": "40rpx", "borderTopWidth": 3, "borderRightWidth": 3, "borderBottomWidth": 0, "borderLeftWidth": 0, "borderStyle": "solid", "transform": "rotate(45deg) scale(0.5)", "borderTopRightRadius": "3rpx", "transformOrigin": "center center", "marginRight": "-5.8579rpx" } }, "fui-cell__border-top": { "": { "position": "absolute", "top": 0, "height": 0.5, "zIndex": -1 } }, "fui-cell__border-bottom": { "": { "position": "absolute", "bottom": 0, "height": 0.5, "zIndex": -1 } }, "fui-highlight": { "": { "!backgroundColor:active": "rgba(0,0,0,0.2)" } } };
  var _sfc_main = {
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
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "view",
      {
        class: (0, import_vue2.normalizeClass)(["fui-list__cell", { "fui-highlight": $props.highlight, "fui-list__cell-background": !$props.background }]),
        style: (0, import_vue2.normalizeStyle)({ paddingTop: $options.getPadding[0] || 0, paddingRight: $options.getPadding[1] || 0, paddingBottom: $options.getPadding[2] || $options.getPadding[0] || 0, paddingLeft: $options.getPadding[3] || $options.getPadding[1] || 0, background: $props.background, marginTop: $props.marginTop + "rpx", marginBottom: $props.marginBottom + "rpx", borderRadius: $props.radius }),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick && $options.handleClick(...args)),
        renderWhole: true
      },
      [
        $props.topBorder ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
          "view",
          {
            key: 0,
            style: (0, import_vue2.normalizeStyle)({ background: $options.getBorderColor, left: $props.topLeft + "rpx", right: $props.topRight + "rpx" }),
            class: (0, import_vue2.normalizeClass)(["fui-cell__border-top", { "fui-cell__border-color": !$options.getBorderColor }])
          },
          null,
          6
          /* CLASS, STYLE */
        )) : (0, import_vue2.createCommentVNode)("v-if", true),
        (0, import_vue2.renderSlot)(_ctx.$slots, "default"),
        $props.bottomBorder ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
          "view",
          {
            key: 1,
            style: (0, import_vue2.normalizeStyle)({ background: $options.getBorderColor, left: $options.getBottomLeft + "rpx", right: $props.bottomRight + "rpx" }),
            class: (0, import_vue2.normalizeClass)(["fui-cell__border-bottom", { "fui-cell__border-color": !$options.getBorderColor }])
          },
          null,
          6
          /* CLASS, STYLE */
        )) : (0, import_vue2.createCommentVNode)("v-if", true),
        $props.arrow ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
          "view",
          {
            key: 2,
            class: "fui-cell__arrow",
            style: (0, import_vue2.normalizeStyle)({ "border-color": $options.getArrowColor })
          },
          null,
          4
          /* STYLE */
        )) : (0, import_vue2.createCommentVNode)("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  var __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-list-cell/fui-list-cell.vue"]]);

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/data/collapse/collapse.js
  var _style_0$2 = { "fui-collapse-item__title": { "": { "flexDirection": "row", "alignItems": "center", "transitionProperty": "borderBottomColor", "transitionDuration": 300, "position": "relative" } }, "fui-collapse__border": { "": { "position": "absolute", "bottom": 0, "right": 0, "height": 0.5, "zIndex": -1 } }, "fui-collapse__disabled": { "": { "opacity": 0.5 } }, "fui-collapse__title": { "": { "flex": 1, "overflow": "hidden" } }, "fui-collapse__arrow-inner": { "": { "height": "40rpx", "width": "40rpx", "borderTopWidth": 0, "borderRightWidth": 3, "borderBottomWidth": 3, "borderLeftWidth": 0, "borderStyle": "solid", "transform": "rotate(45deg) scale(.5)", "position": "absolute", "top": "-6rpx", "left": 0 } }, "fui-collapse__arrow": { "": { "width": "40rpx", "height": "40rpx", "position": "relative" } }, "fui-collapse__arrow-close": { "": { "transform": "rotate(0deg)" } }, "fui-collapse__arrow-active": { "": { "transform": "rotate(180deg)" } }, "fui-collapse__item-ani": { "": { "transitionProperty": "transform", "transitionDuration": 300, "transitionTimingFunction": "ease" } }, "fui-collapse__content-wrap": { "": { "overflow": "hidden", "position": "relative", "height": 0 } }, "fui-collapse-__content-ani": { "": { "transitionProperty": "height", "transitionDuration": 300 } }, "fui-collapse__content": { "": { "position": "absolute" } }, "fui-collapse__content-open": { "": { "position": "relative" } }, "@TRANSITION": { "fui-collapse-item__title": { "property": "borderBottomColor", "duration": 300 }, "fui-collapse__item-ani": { "property": "transform", "duration": 300, "timingFunction": "ease" }, "fui-collapse-__content-ani": { "property": "height", "duration": 300 } } };
  var dom = weex.requireModule("dom");
  var _sfc_main$2 = {
    name: "fui-collapse-item",
    emits: ["change"],
    props: {
      //item项索引或者唯一标识
      index: {
        type: [Number, String],
        default: 0
      },
      // 是否禁用
      disabled: {
        type: Boolean,
        default: false
      },
      background: {
        type: String,
        default: "#fff"
      },
      //是否显示动画,如果动画卡顿严重建议不开启
      animation: {
        type: Boolean,
        default: true
      },
      // 是否展开
      open: {
        type: Boolean,
        default: false
      },
      isBorder: {
        type: Boolean,
        default: true
      },
      borderColor: {
        type: String,
        default: "#EEEEEE"
      },
      borderLeft: {
        type: [Number, String],
        default: 0
      },
      arrow: {
        type: Boolean,
        default: true
      },
      arrowColor: {
        type: String,
        default: "#B2B2B2"
      },
      arrowRight: {
        type: [Number, String],
        default: 24
      },
      contentBg: {
        type: String,
        default: "#fff"
      }
    },
    data() {
      const elId = `fui_${Math.ceil(Math.random() * 1e6).toString(36)}`;
      return {
        isOpen: false,
        isHeight: null,
        height: 0,
        elId
      };
    },
    watch: {
      open(val) {
        this.isOpen = val;
      }
    },
    updated(e) {
      this.$nextTick(() => {
        setTimeout(() => {
          this.init();
        }, 50);
      });
    },
    created() {
      this.collapse = this.getCollapse();
      if (this.collapse && this.collapse.children.indexOf(this) === -1) {
        this.collapse.children.push(this);
      }
      this.oldHeight = 0;
    },
    // TODO vue3
    beforeUnmount() {
      this.uninstall();
    },
    mounted() {
      this.$nextTick(() => {
        setTimeout(() => {
          this.init();
          this.isOpen = this.open;
        }, 50);
      });
    },
    methods: {
      init() {
        this.getNvueHeight();
      },
      uninstall() {
        if (this.collapse) {
          this.collapse.children.forEach((item, index) => {
            if (item === this) {
              this.collapse.children.splice(index, 1);
            }
          });
        }
      },
      onClick(isOpen) {
        if (this.disabled)
          return;
        this.isOpen = isOpen;
        if (this.collapse) {
          this.collapse.collapseChange(this, isOpen, this.index);
        } else {
          this.$emit("change", {
            index: this.index,
            isOpen
          });
        }
      },
      getCollapseHeight(index = 0) {
        uni.createSelectorQuery().in(this).select(`#${this.elId}`).fields({
          size: true
        }, (data) => {
          if (index >= 10)
            return;
          if (!data) {
            index++;
            this.getCollapseHeight(index);
            return;
          }
          this.height = data.height + 1;
          this.isHeight = true;
        }).exec();
      },
      getNvueHeight() {
        dom.getComponentRect(this.$refs["fui_collapse__el"], (option) => {
          if (option && option.result && option.size) {
            this.height = option.size.height + 1;
            this.isHeight = true;
          }
        });
      },
      getCollapse(name = "fui-collapse") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
      class: "fui-collapse__item",
      renderWhole: true
    }, [
      (0, import_vue3.createElementVNode)(
        "view",
        {
          onClick: _cache[0] || (_cache[0] = (0, import_vue3.withModifiers)(($event) => $options.onClick(!$data.isOpen), ["stop"])),
          class: (0, import_vue3.normalizeClass)(["fui-collapse-item__title", { "fui-collapse__disabled": $props.disabled }]),
          style: (0, import_vue3.normalizeStyle)({ background: $props.background })
        },
        [
          (0, import_vue3.createElementVNode)("view", { class: "fui-collapse__title" }, [
            (0, import_vue3.renderSlot)(_ctx.$slots, "default")
          ]),
          $props.arrow ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
            "view",
            {
              key: 0,
              class: (0, import_vue3.normalizeClass)([{ "fui-collapse__arrow-close": !$data.isOpen, "fui-collapse__arrow-active": $data.isOpen, "fui-collapse__item-ani": $props.animation }, "fui-collapse__arrow"]),
              style: (0, import_vue3.normalizeStyle)({ marginRight: $props.arrowRight + "rpx" })
            },
            [
              (0, import_vue3.createElementVNode)(
                "view",
                {
                  class: "fui-collapse__arrow-inner",
                  style: (0, import_vue3.normalizeStyle)({ borderColor: $props.arrowColor })
                },
                null,
                4
                /* STYLE */
              )
            ],
            6
            /* CLASS, STYLE */
          )) : (0, import_vue3.createCommentVNode)("v-if", true),
          $props.isBorder ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
            "view",
            {
              key: 1,
              style: (0, import_vue3.normalizeStyle)({ background: $props.borderColor, left: $props.borderLeft + "rpx" }),
              class: (0, import_vue3.normalizeClass)(["fui-collapse__border", { "fui-collapse__border-color": !$props.borderColor }])
            },
            null,
            6
            /* CLASS, STYLE */
          )) : (0, import_vue3.createCommentVNode)("v-if", true)
        ],
        6
        /* CLASS, STYLE */
      ),
      (0, import_vue3.createElementVNode)(
        "view",
        {
          class: (0, import_vue3.normalizeClass)(["fui-collapse__content-wrap", { "fui-collapse-__content-ani": $props.animation }]),
          style: (0, import_vue3.normalizeStyle)({ height: ($data.isOpen ? $data.height : 0) + "px", background: $props.contentBg })
        },
        [
          (0, import_vue3.createElementVNode)("view", {
            id: $data.elId,
            ref: "fui_collapse__el",
            class: (0, import_vue3.normalizeClass)(["fui-collapse__content", { "fui-collapse__content-open": $data.isHeight }])
          }, [
            (0, import_vue3.renderSlot)(_ctx.$slots, "content")
          ], 10, ["id"])
        ],
        6
        /* CLASS, STYLE */
      )
    ]);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-collapse-item/fui-collapse-item.vue"]]);
  var _style_0$1 = { "fui-collapse__wrap": { "": { "flex": 1, "flexDirection": "column", "backgroundColor": "#ffffff" } } };
  var _sfc_main$1 = {
    name: "fui-collapse",
    emits: ["change"],
    props: {
      // 是否开启手风琴效果
      accordion: {
        type: Boolean,
        default: false
      }
    },
    created() {
      this.children = [];
    },
    methods: {
      collapseChange(obj, isOpen, idx) {
        if (this.accordion && isOpen) {
          this.children.forEach((item, index) => {
            if (item !== obj) {
              item.isOpen = false;
            }
          });
        }
        this.$emit("change", {
          index: idx,
          isOpen
        });
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
      class: "fui-collapse__wrap",
      renderWhole: true
    }, [
      (0, import_vue3.renderSlot)(_ctx.$slots, "default")
    ]);
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-collapse/fui-collapse.vue"]]);
  var _style_02 = { "fui-wrap": { "": { "paddingBottom": "64rpx" } }, "fui-section__title": { "": { "marginLeft": "32rpx" } }, "fui-item__box": { "": { "paddingTop": "26rpx", "paddingRight": "32rpx", "paddingBottom": "26rpx", "paddingLeft": "32rpx", "flexDirection": "row", "alignItems": "center" } }, "fui-logo": { "": { "width": "48rpx", "height": "48rpx", "marginRight": "24rpx" } }, "fui-descr": { "": { "paddingTop": "32rpx", "paddingRight": "32rpx", "paddingBottom": "32rpx", "paddingLeft": "32rpx", "fontSize": "28rpx", "lineHeight": "52rpx", "color": "#7F7F7F" } }, "fui-text": { "": { "fontSize": "28rpx", "width": "680rpx" } } };
  var _sfc_main2 = {
    data() {
      return {
        items: [{
          src: "/static/images/common/logo.png",
          title: "First UI",
          descr: "First UI \u662F\u4E00\u5957\u57FA\u4E8Euni-app\u5F00\u53D1\u7684\u7EC4\u4EF6\u5316\u3001\u53EF\u590D\u7528\u3001\u6613\u6269\u5C55\u3001\u4F4E\u8026\u5408\u7684\u8DE8\u5E73\u53F0\u79FB\u52A8\u7AEFUI \u7EC4\u4EF6\u5E93\u3002",
          isOpen: true
        }, {
          src: "/static/images/common/icon_tabbar_2x.png",
          title: "\u6807\u9898\u5185\u5BB9",
          descr: "\u81EA\u5B9A\u4E49\u6298\u53E0\u5185\u5BB9\u4E3B\u4F53\uFF0C\u8FD9\u662F\u4E00\u6BB5\u6BD4\u8F83\u957F\u5185\u5BB9\u3002\u9ED8\u8BA4\u6298\u53E0\u4E3B\u8981\u5185\u5BB9\uFF0C\u53EA\u663E\u793A\u5F53\u524D\u9879\u6807\u9898\u3002\u70B9\u51FB\u6807\u9898\u5C55\u5F00\u3002\u518D\u6B21\u70B9\u51FB\u6807\u9898\uFF0C\u6298\u53E0\u5185\u5BB9\u3002"
        }],
        list: [{
          question: "\u6211\u53EA\u60F3\u7528\u67D0\u4E2A\u7EC4\u4EF6\u53EF\u4EE5\u5417\uFF1F",
          answer: "\u53EF\u4EE5\uFF0C\u7EC4\u4EF6\u652F\u6301\u6309\u9700\u5F15\u5165\uFF0C\u8BE6\u89C1 First UI \u6587\u6863 \u201C\u5FEB\u901F\u4E0A\u624B\u201D\uFF0C\u4F7F\u7528\u7EC4\u4EF6\u524D\u8BF7\u5148\u4ED4\u7EC6\u9605\u8BFB\u7EC4\u4EF6\u6587\u6863\u3002"
        }, {
          question: "\u4E3A\u4EC0\u4E48\u6587\u6863\u6216\u793A\u4F8B\u4E2D\u6709\u4E9B\u7EC4\u4EF6\u5728GitHub\u6216npm\u4E0B\u8F7D\u7684\u5305\u4E2D\u65E0\u6CD5\u627E\u5230\uFF1F",
          answer: "First UI \u5206\u4E3A \u201C\u5F00\u6E90\u7248\u201D \u548C \u201C\u5546\u4E1A\u7248\u201D\uFF0C\u6240\u6709\u793A\u4F8B\u6216\u6587\u6863\u4E2D\u52A0 \u201CV\u201D \u7684\u8868\u793A\u9700\u8981\u5F00\u901A\u4F1A\u5458\u624D\u53EF\u83B7\u53D6\u6E90\u7801\u4F7F\u7528\uFF0C\u4F1A\u5458\u5185\u5BB9\u4E0D\u4F1A\u53D1\u5E03\u5230\u4EFB\u4F55\u516C\u5F00\u6E20\u9053\u3002"
        }, {
          question: "\u7EC4\u4EF6\u652F\u6301Nvue\u3001\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F...\u5417\uFF1F",
          answer: "\u652F\u6301\u3002\u7EC4\u4EF6\u652F\u6301\u54EA\u4E9B\u5E73\u53F0\u8BF7\u53C2\u8003\u7EC4\u4EF6\u5177\u4F53\u6587\u6863\uFF0C\u6BCF\u4E2A\u7EC4\u4EF6\u6587\u6863\u4E2D\u90FD\u6709\u652F\u6301\u5E73\u53F0\u7684\u8BF4\u660E\u3002"
        }]
      };
    },
    methods: {
      change(e) {
        formatAppLog("log", "at pages/component/data/collapse/collapse.nvue:115", e);
      }
    }
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_fui_collapse_item = resolveEasycom((0, import_vue3.resolveDynamicComponent)("fui-collapse-item"), __easycom_0);
    const _component_fui_collapse = resolveEasycom((0, import_vue3.resolveDynamicComponent)("fui-collapse"), __easycom_1);
    const _component_fui_list_cell = resolveEasycom((0, import_vue3.resolveDynamicComponent)("fui-list-cell"), __easycom_2);
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue3.createElementVNode)("view", { class: "fui-wrap" }, [
        (0, import_vue3.createElementVNode)("view", { class: "fui-page__hd" }, [
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-page__title" }, "Collapse"),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-page__desc" }, "Collapse \u6298\u53E0\u9762\u677F\uFF0C\u53EF\u4EE5\u6298\u53E0/\u5C55\u5F00\u7684\u5185\u5BB9\u533A\u57DF\u3002")
        ]),
        (0, import_vue3.createElementVNode)("view", { class: "fui-page__bd" }, [
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title fui-mtop--0" }, "\u57FA\u7840\u4F7F\u7528"),
          (0, import_vue3.createCommentVNode)("fui-collapse-item\u53EF\u5355\u72EC\u4F7F\u7528 @change\u4E8B\u4EF6\u4EC5\u65E0\u7236\u7EC4\u4EF6fui-collapse\u65F6\u751F\u6548"),
          (0, import_vue3.createVNode)(_component_fui_collapse_item, { onChange: $options.change }, {
            content: (0, import_vue3.withCtx)(() => [
              (0, import_vue3.createElementVNode)("u-text", { class: "fui-descr" }, "First UI \u662F\u4E00\u5957\u57FA\u4E8Euni-app\u5F00\u53D1\u7684\u7EC4\u4EF6\u5316\u3001\u53EF\u590D\u7528\u3001\u6613\u6269\u5C55\u3001\u4F4E\u8026\u5408\u7684\u8DE8\u5E73\u53F0\u79FB\u52A8\u7AEFUI \u7EC4\u4EF6\u5E93\u3002")
            ]),
            default: (0, import_vue3.withCtx)(() => [
              (0, import_vue3.createElementVNode)("view", { class: "fui-item__box" }, [
                (0, import_vue3.createElementVNode)("u-image", {
                  src: "/static/images/common/logo.png",
                  class: "fui-logo"
                }),
                (0, import_vue3.createElementVNode)("u-text", { class: "fui-text" }, "First UI")
              ])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onChange"]),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title" }, "\u9ED8\u8BA4\u5C55\u5F00"),
          (0, import_vue3.createVNode)(_component_fui_collapse, { onChange: $options.change }, {
            default: (0, import_vue3.withCtx)(() => [
              ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
                import_vue3.Fragment,
                null,
                (0, import_vue3.renderList)($data.items, (item, index) => {
                  return (0, import_vue3.openBlock)(), (0, import_vue3.createBlock)(_component_fui_collapse_item, {
                    index,
                    open: item.isOpen,
                    key: index
                  }, {
                    content: (0, import_vue3.withCtx)(() => [
                      (0, import_vue3.createElementVNode)(
                        "u-text",
                        {
                          class: "fui-descr",
                          style: { "background-color": "rgba(255, 183, 3, .1)" }
                        },
                        (0, import_vue3.toDisplayString)(item.descr),
                        1
                        /* TEXT */
                      )
                    ]),
                    default: (0, import_vue3.withCtx)(() => [
                      (0, import_vue3.createElementVNode)("view", { class: "fui-item__box" }, [
                        (0, import_vue3.createElementVNode)("u-image", {
                          src: item.src,
                          class: "fui-logo"
                        }, null, 8, ["src"]),
                        (0, import_vue3.createElementVNode)(
                          "u-text",
                          { class: "fui-text" },
                          (0, import_vue3.toDisplayString)(item.title),
                          1
                          /* TEXT */
                        )
                      ])
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["index", "open"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onChange"]),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title" }, "\u624B\u98CE\u7434\u6548\u679C"),
          (0, import_vue3.createVNode)(_component_fui_collapse, {
            accordion: "",
            onChange: $options.change
          }, {
            default: (0, import_vue3.withCtx)(() => [
              ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
                import_vue3.Fragment,
                null,
                (0, import_vue3.renderList)($data.items, (item, index) => {
                  return (0, import_vue3.openBlock)(), (0, import_vue3.createBlock)(_component_fui_collapse_item, {
                    index,
                    key: index
                  }, {
                    content: (0, import_vue3.withCtx)(() => [
                      (0, import_vue3.createElementVNode)(
                        "u-text",
                        {
                          class: "fui-descr",
                          style: { "background-color": "rgba(255, 183, 3, .1)" }
                        },
                        (0, import_vue3.toDisplayString)(item.descr),
                        1
                        /* TEXT */
                      )
                    ]),
                    default: (0, import_vue3.withCtx)(() => [
                      (0, import_vue3.createElementVNode)("view", { class: "fui-item__box" }, [
                        (0, import_vue3.createElementVNode)("u-image", {
                          src: item.src,
                          class: "fui-logo"
                        }, null, 8, ["src"]),
                        (0, import_vue3.createElementVNode)(
                          "u-text",
                          { class: "fui-text" },
                          (0, import_vue3.toDisplayString)(item.title),
                          1
                          /* TEXT */
                        )
                      ])
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["index"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onChange"]),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title" }, "\u65E0\u52A8\u753B\u6548\u679C"),
          (0, import_vue3.createVNode)(_component_fui_collapse, { onChange: $options.change }, {
            default: (0, import_vue3.withCtx)(() => [
              ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
                import_vue3.Fragment,
                null,
                (0, import_vue3.renderList)($data.items, (item, index) => {
                  return (0, import_vue3.openBlock)(), (0, import_vue3.createBlock)(_component_fui_collapse_item, {
                    animation: false,
                    arrowColor: "#333",
                    index,
                    key: index
                  }, {
                    content: (0, import_vue3.withCtx)(() => [
                      (0, import_vue3.createElementVNode)(
                        "u-text",
                        {
                          class: "fui-descr",
                          style: { "background-color": "rgba(255, 183, 3, .1)" }
                        },
                        (0, import_vue3.toDisplayString)(item.descr),
                        1
                        /* TEXT */
                      )
                    ]),
                    default: (0, import_vue3.withCtx)(() => [
                      (0, import_vue3.createElementVNode)("view", { class: "fui-item__box" }, [
                        (0, import_vue3.createElementVNode)("u-image", {
                          src: item.src,
                          class: "fui-logo"
                        }, null, 8, ["src"]),
                        (0, import_vue3.createElementVNode)(
                          "u-text",
                          { class: "fui-text" },
                          (0, import_vue3.toDisplayString)(item.title),
                          1
                          /* TEXT */
                        )
                      ])
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["index"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onChange"]),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title" }, "\u7981\u7528\u4E0D\u53EF\u70B9\u51FB"),
          (0, import_vue3.createVNode)(_component_fui_collapse, { onChange: $options.change }, {
            default: (0, import_vue3.withCtx)(() => [
              ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
                import_vue3.Fragment,
                null,
                (0, import_vue3.renderList)($data.items, (item, index) => {
                  return (0, import_vue3.openBlock)(), (0, import_vue3.createBlock)(_component_fui_collapse_item, {
                    disabled: index === 1,
                    arrowColor: "#333",
                    index,
                    key: index
                  }, {
                    content: (0, import_vue3.withCtx)(() => [
                      (0, import_vue3.createElementVNode)(
                        "u-text",
                        {
                          class: "fui-descr",
                          style: { "background-color": "rgba(255, 183, 3, .1)" }
                        },
                        (0, import_vue3.toDisplayString)(item.descr),
                        1
                        /* TEXT */
                      )
                    ]),
                    default: (0, import_vue3.withCtx)(() => [
                      (0, import_vue3.createElementVNode)("view", { class: "fui-item__box" }, [
                        (0, import_vue3.createElementVNode)("u-image", {
                          src: item.src,
                          class: "fui-logo"
                        }, null, 8, ["src"]),
                        (0, import_vue3.createElementVNode)(
                          "u-text",
                          { class: "fui-text" },
                          (0, import_vue3.toDisplayString)(item.title),
                          1
                          /* TEXT */
                        )
                      ])
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["disabled", "index"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onChange"]),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title" }, "\u4E0D\u663E\u793A\u7BAD\u5934"),
          (0, import_vue3.createVNode)(_component_fui_collapse, {
            accordion: "",
            onChange: $options.change
          }, {
            default: (0, import_vue3.withCtx)(() => [
              ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
                import_vue3.Fragment,
                null,
                (0, import_vue3.renderList)($data.list, (item, index) => {
                  return (0, import_vue3.openBlock)(), (0, import_vue3.createBlock)(_component_fui_collapse_item, {
                    arrow: false,
                    index,
                    key: index
                  }, {
                    content: (0, import_vue3.withCtx)(() => [
                      (0, import_vue3.createElementVNode)(
                        "u-text",
                        {
                          class: "fui-descr",
                          style: { "color": "#09BE4F" }
                        },
                        (0, import_vue3.toDisplayString)(item.answer),
                        1
                        /* TEXT */
                      )
                    ]),
                    default: (0, import_vue3.withCtx)(() => [
                      (0, import_vue3.createVNode)(
                        _component_fui_list_cell,
                        { padding: ["0", "0"] },
                        {
                          default: (0, import_vue3.withCtx)(() => [
                            (0, import_vue3.createElementVNode)("view", { class: "fui-item__box" }, [
                              (0, import_vue3.createElementVNode)(
                                "u-text",
                                { class: "fui-text" },
                                (0, import_vue3.toDisplayString)(item.question),
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
                  }, 1032, ["index"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onChange"])
        ])
      ])
    ]);
  }
  var collapse = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/data/collapse/collapse.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/component/data/collapse/collapse";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    collapse.mpType = "page";
    const app = Vue.createPageApp(collapse, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...collapse.styles || []]));
    app.mount("#root");
  }
})();
