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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/layout/layout/layout.js
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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/layout/layout/layout.js
  var _style_0$2 = {};
  var _sfc_main$2 = {
    name: "fui-col",
    props: {
      //栅格占据的列数
      span: {
        type: Number,
        default: 24
      },
      //栅格左侧的间隔格数
      offset: {
        type: Number,
        default: 0
      },
      //栅格向右移动格数
      pushLeft: {
        type: Number,
        default: -1
      },
      //栅格向左移动格数
      pullRight: {
        type: Number,
        default: -1
      },
      //max-width:767px 响应式栅格数或者栅格属性对象
      //Number时表示在此屏幕宽度下，栅格占据的列数。Object时可配置多个描述{span: 4, offset: 4}
      xs: {
        type: [Number, Object],
        default: -1
      },
      //max-width:768px 响应式栅格数或者栅格属性对象
      sm: {
        type: [Number, Object],
        default: -1
      },
      //max-width:992px 响应式栅格数或者栅格属性对象
      md: {
        type: [Number, Object],
        default: -1
      },
      //max-width:1200px 响应式栅格数或者栅格属性对象
      lg: {
        type: [Number, Object],
        default: -1
      },
      //max-width:1920px 响应式栅格数或者栅格属性对象
      xl: {
        type: [Number, Object],
        default: -1
      }
    },
    data() {
      return {
        classList: "fui-col",
        gutter: 0,
        sizeClass: "",
        parentWidth: 0,
        nvueWidth: 0,
        marginLeft: 0,
        right: 0,
        left: 0
      };
    },
    created() {
      let parent = this.$parent;
      while (parent && parent.$options.componentName !== "fuiRow") {
        parent = parent.$parent;
      }
      this.updateGutter(parent.gutter);
      parent.$watch("gutter", (gutter) => {
        this.updateGutter(gutter);
      });
      this.updateNvueWidth(parent.width);
      parent.$watch("width", (width) => {
        this.updateNvueWidth(width);
      });
    },
    computed: {
      sizeChange() {
        let {
          span,
          offset,
          pullRight,
          pushLeft
        } = this;
        return `${span}-${offset}-${pullRight}-${pushLeft}`;
      }
    },
    watch: {
      sizeChange: {
        immediate: true,
        handler(newVal) {
          this.updateNvueWidth(this.parentWidth);
        }
      }
    },
    methods: {
      updateGutter(parentGutter) {
        parentGutter = Number(parentGutter);
        if (!isNaN(parentGutter)) {
          this.gutter = parentGutter / 2;
        }
      },
      updateNvueWidth(width) {
        this.parentWidth = width;
        ["span", "offset", "pull", "push"].forEach((size) => {
          const curSize = this[size];
          if ((curSize || curSize === 0) && curSize !== -1) {
            let RPX = 1 / 24 * curSize * width;
            RPX = Number(RPX);
            switch (size) {
              case "span":
                this.nvueWidth = RPX;
                break;
              case "offset":
                this.marginLeft = RPX;
                break;
              case "pull":
                this.right = RPX;
                break;
              case "push":
                this.left = RPX;
                break;
            }
          }
        });
      },
      updateCol() {
        let classList = ["fui-col"];
        classList.push("fui-col-" + this.span);
        classList.push("fui-col-offset-" + this.offset);
        if (this.pushLeft !== -1) {
          this.pushLeft && classList.push("fui-col-push-" + this.pushLeft);
        }
        if (this.pullRight !== -1) {
          this.pullRight && classList.push("fui-col-pull-" + this.pullRight);
        }
        this.screenSizeSet("xs", classList);
        this.screenSizeSet("sm", classList);
        this.screenSizeSet("md", classList);
        this.screenSizeSet("lg", classList);
        this.screenSizeSet("xl", classList);
        this.classList = classList;
      },
      screenSizeSet(screen, classList) {
        if (typeof this[screen] === "number" && this[screen] !== -1) {
          classList.push("fui-col-" + screen + "-" + this[screen]);
        } else if (typeof this[screen] === "object") {
          typeof this[screen].offset === "number" && classList.push("fui-col-" + screen + "-offset-" + this[screen].offset);
          typeof this[screen].pushLeft === "number" && classList.push("fui-col-" + screen + "-push-" + this[screen].pushLeft);
          typeof this[screen].pullRight === "number" && classList.push("fui-col-" + screen + "-pull-" + this[screen].pullRight);
          typeof this[screen].span === "number" && classList.push("fui-col-" + screen + "-" + this[screen].span);
        }
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "view",
      {
        style: (0, import_vue2.normalizeStyle)({
          paddingLeft: `${Number($data.gutter)}rpx`,
          paddingRight: `${Number($data.gutter)}rpx`,
          width: `${$data.nvueWidth}rpx`,
          position: "relative",
          marginLeft: `${$data.marginLeft}rpx`,
          left: `${$data.right === 0 ? $data.left : -$data.right}rpx`
        }),
        renderWhole: true
      },
      [
        (0, import_vue2.renderSlot)(_ctx.$slots, "default")
      ],
      4
      /* STYLE */
    );
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-col/fui-col.vue"]]);
  var _style_0$1 = { "fui-row__box": { "": { "flex": 1, "position": "relative", "flexDirection": "row" } }, "fui-row__flex": { "": { "flexDirection": "row" } }, "fui-row__middle": { "": { "alignItems": "center" } }, "fui-row__bottom": { "": { "alignItems": "flex-end" } }, "fui-row__end": { "": { "justifyContent": "flex-end" } }, "fui-row__center": { "": { "justifyContent": "center" } }, "fui-row__space-around": { "": { "justifyContent": "space-around" } }, "fui-row__space-between": { "": { "justifyContent": "space-between" } } };
  var _sfc_main$1 = {
    name: "fui-row",
    componentName: "fuiRow",
    props: {
      //是否为flex布局
      isFlex: {
        type: Boolean,
        default: false
      },
      //flex 布局下的水平排列方式 start/end/center/space-around/space-between
      justify: {
        type: String,
        default: "start"
      },
      //flex 布局下的垂直排列方式	top/middle/bottom
      align: {
        type: String,
        default: "top"
      },
      marginTop: {
        type: String,
        default: "0"
      },
      marginBottom: {
        type: String,
        default: "0"
      },
      //栅格间隔
      gutter: {
        type: Number,
        default: 0
      },
      // nvue如果使用span等属性，需要配置宽度
      width: {
        type: [String, Number],
        default: 750
      }
    },
    data() {
      return {
        flex: false
      };
    },
    watch: {
      isFlex(val) {
      }
    },
    created() {
      this.flex = true;
    },
    computed: {
      marginValue() {
        return 0;
      },
      justifyClass() {
        return this.justify !== "start" ? `fui-row__${this.justify}` : "";
      },
      alignClass() {
        return this.align !== "top" ? `fui-row__${this.align}` : "";
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "view",
      {
        class: (0, import_vue2.normalizeClass)(["fui-row__box", [$data.flex ? "fui-row__flex" : "", $options.justifyClass, $options.alignClass]]),
        style: (0, import_vue2.normalizeStyle)({
          marginTop: $props.marginTop,
          marginBottom: $props.marginBottom,
          marginLeft: `-${$options.marginValue}rpx`,
          marginRight: `-${$options.marginValue}rpx`
        }),
        renderWhole: true
      },
      [
        (0, import_vue2.renderSlot)(_ctx.$slots, "default")
      ],
      6
      /* CLASS, STYLE */
    );
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-row/fui-row.vue"]]);
  var _style_0 = { "fui-section__title": { "": { "marginLeft": "32rpx" } }, "fui-col__item": { "": { "height": "84rpx", "borderRadius": "16rpx" } }, "fui-color__black": { "": { "backgroundColor": "#333333" } }, "fui-color__yellow": { "": { "backgroundColor": "#FFB703" } } };
  var _sfc_main = {
    data() {
      return {
        gutter: 0
      };
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_fui_col = resolveEasycom((0, import_vue2.resolveDynamicComponent)("fui-col"), __easycom_0);
    const _component_fui_row = resolveEasycom((0, import_vue2.resolveDynamicComponent)("fui-row"), __easycom_1);
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue2.createElementVNode)("view", { class: "fui-wrap" }, [
        (0, import_vue2.createElementVNode)("view", { class: "fui-page__hd" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-page__title" }, "Layout"),
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-page__desc" }, "Layout \u6805\u683C\u5E03\u5C40\uFF0C\u5C06\u6574\u4E2A\u5C4F\u5E55\u5BBD\u5EA6\u5206\u4E3A 24 \u5355\u4F4D\uFF0C\u6BCF\u4E2A\u5355\u4F4D\u7684\u5927\u5C0F\uFF0C\u7531\u5F53\u524D\u5C4F\u5E55\u5C3A\u5BF8\u51B3\u5B9A\u3002")
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "fui-page__bd" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-section__title fui-mtop--0" }, "\u57FA\u7840\u5E03\u5C40"),
          (0, import_vue2.createVNode)(_component_fui_row, { "margin-bottom": "24rpx" }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createVNode)(_component_fui_col, null, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)("view", { class: "fui-col__item fui-color__black" })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue2.createVNode)(_component_fui_row, { "margin-bottom": "24rpx" }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createVNode)(_component_fui_col, { span: 12 }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)("view", { class: "fui-col__item fui-color__black" })
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue2.createVNode)(_component_fui_col, { span: 12 }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)("view", { class: "fui-col__item fui-color__yellow" })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue2.createVNode)(_component_fui_row, { marginBottom: "24rpx" }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createVNode)(_component_fui_col, { span: 8 }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)("view", { class: "fui-col__item fui-color__black" })
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue2.createVNode)(_component_fui_col, { span: 8 }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)("view", { class: "fui-col__item fui-color__yellow" })
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue2.createVNode)(_component_fui_col, { span: 8 }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)("view", { class: "fui-col__item fui-color__black" })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue2.createVNode)(_component_fui_row, { marginBottom: "24rpx" }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createVNode)(_component_fui_col, { span: 6 }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)("view", { class: "fui-col__item fui-color__black" })
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue2.createVNode)(_component_fui_col, { span: 6 }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)("view", { class: "fui-col__item fui-color__yellow" })
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue2.createVNode)(_component_fui_col, { span: 6 }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)("view", { class: "fui-col__item fui-color__black" })
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue2.createVNode)(_component_fui_col, { span: 6 }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)("view", { class: "fui-col__item fui-color__yellow" })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue2.createVNode)(_component_fui_row, { marginBottom: "24rpx" }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createVNode)(_component_fui_col, { span: 4 }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)("view", { class: "fui-col__item fui-color__black" })
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue2.createVNode)(_component_fui_col, { span: 4 }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)("view", { class: "fui-col__item fui-color__yellow" })
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue2.createVNode)(_component_fui_col, { span: 4 }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)("view", { class: "fui-col__item fui-color__black" })
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue2.createVNode)(_component_fui_col, { span: 4 }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)("view", { class: "fui-col__item fui-color__yellow" })
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue2.createVNode)(_component_fui_col, { span: 4 }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)("view", { class: "fui-col__item fui-color__black" })
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue2.createVNode)(_component_fui_col, { span: 4 }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)("view", { class: "fui-col__item fui-color__yellow" })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-section__title" }, "\u6DF7\u5408\u5E03\u5C40"),
          (0, import_vue2.createVNode)(_component_fui_row, {
            marginBottom: "24rpx",
            gutter: $data.gutter
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createVNode)(_component_fui_col, { span: 8 }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)("view", { class: "fui-col__item fui-color__black" })
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue2.createVNode)(_component_fui_col, { span: 8 }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)("view", { class: "fui-col__item fui-color__yellow" })
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue2.createVNode)(_component_fui_col, { span: 4 }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)("view", { class: "fui-col__item fui-color__black" })
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue2.createVNode)(_component_fui_col, { span: 4 }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)("view", { class: "fui-col__item fui-color__yellow" })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["gutter"]),
          (0, import_vue2.createVNode)(_component_fui_row, {
            marginBottom: "24rpx",
            gutter: $data.gutter
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createVNode)(_component_fui_col, { span: 4 }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)("view", { class: "fui-col__item fui-color__black" })
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue2.createVNode)(_component_fui_col, { span: 16 }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)("view", { class: "fui-col__item fui-color__yellow" })
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue2.createVNode)(_component_fui_col, { span: 4 }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)("view", { class: "fui-col__item fui-color__black" })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["gutter"]),
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-section__title" }, "\u5206\u680F\u504F\u79FB"),
          (0, import_vue2.createVNode)(_component_fui_row, {
            marginBottom: "10px",
            gutter: $data.gutter
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createVNode)(_component_fui_col, { span: 8 }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)("view", { class: "fui-col__item fui-color__black" })
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue2.createVNode)(_component_fui_col, {
                span: 8,
                offset: 6
              }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)("view", { class: "fui-col__item fui-color__yellow" })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["gutter"]),
          (0, import_vue2.createVNode)(_component_fui_row, {
            marginBottom: "10px",
            gutter: $data.gutter
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createVNode)(_component_fui_col, {
                span: 6,
                offset: 6
              }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)("view", { class: "fui-col__item fui-color__black" })
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue2.createVNode)(_component_fui_col, {
                span: 6,
                offset: 6
              }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)("view", { class: "fui-col__item fui-color__yellow" })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["gutter"]),
          (0, import_vue2.createVNode)(_component_fui_row, {
            marginBottom: "10px",
            gutter: $data.gutter
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createVNode)(_component_fui_col, {
                span: 12,
                pullRight: 0
              }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)("view", { class: "fui-col__item fui-color__black" })
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue2.createVNode)(_component_fui_col, {
                span: 6,
                pushLeft: 6
              }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)("view", { class: "fui-col__item fui-color__yellow" })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["gutter"]),
          (0, import_vue2.createVNode)(_component_fui_row, {
            marginBottom: "24rpx",
            gutter: $data.gutter
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createVNode)(_component_fui_col, {
                span: 12,
                offset: 6
              }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)("view", { class: "fui-col__item fui-color__black" })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["gutter"])
        ])
      ])
    ]);
  }
  var layout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/layout/layout/layout.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/component/layout/layout/layout";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    layout.mpType = "page";
    const app = Vue.createPageApp(layout, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...layout.styles || []]));
    app.mount("#root");
  }
})();
