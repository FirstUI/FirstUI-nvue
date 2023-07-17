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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/fui-grid.js
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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/fui-grid.js
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
    return $data.width ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "view",
      {
        key: 0,
        style: (0, import_vue2.normalizeStyle)("width:" + $data.width + ";" + ($data.height ? "height:" + $data.height : "")),
        class: "fui-grid__item",
        renderWhole: true
      },
      [
        (0, import_vue2.createElementVNode)(
          "view",
          {
            class: (0, import_vue2.normalizeClass)([{ "fui-grid__item-border": $data.showBorder, "fui-highlight": $props.highlight }, "fui-grid__item-box"]),
            style: (0, import_vue2.normalizeStyle)({ "border-right-color": $data.borderColor, "border-bottom-color": $data.borderColor, "border-top-color": $data.borderColor, backgroundColor: $props.backgroundColor }),
            onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick && $options.handleClick(...args))
          },
          [
            (0, import_vue2.renderSlot)(_ctx.$slots, "default")
          ],
          6
          /* CLASS, STYLE */
        )
      ],
      4
      /* STYLE */
    )) : (0, import_vue2.createCommentVNode)("v-if", true);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-grid-item/fui-grid-item.vue"]]);
  var _style_0 = { "fui-grid__wrap": { "": { "flex": 1, "flexDirection": "column" } }, "fui-grid__wrap-hidden": { "": { "opacity": 0 } }, "fui-grid__wrap-show": { "": { "!opacity": 1 } }, "fui-grid": { "": { "flexDirection": "row", "flexWrap": "wrap" } }, "fui-grid__between": { "": { "justifyContent": "space-between" } }, "fui-grid__border": { "": { "position": "relative", "borderLeftStyle": "solid", "borderLeftWidth": 0.5, "borderTopStyle": "solid", "borderTopWidth": 0.5 } } };
  var dom = requireNativePlugin("dom");
  var _sfc_main = {
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
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "view",
      {
        class: (0, import_vue2.normalizeClass)(["fui-grid__wrap", [$data.isShow ? "fui-grid__wrap-show" : "fui-grid__wrap-hidden"]]),
        renderWhole: true
      },
      [
        (0, import_vue2.createElementVNode)("view", {
          id: $data.elemId,
          ref: "fui_grid",
          class: (0, import_vue2.normalizeClass)(["fui-grid", { "fui-grid__border": $props.showBorder, "fui-grid__between": $props.between }]),
          style: (0, import_vue2.normalizeStyle)({ "border-left-color": $props.borderColor, "border-top-color": $props.borderColor })
        }, [
          (0, import_vue2.renderSlot)(_ctx.$slots, "default"),
          $data.seats.length > 0 && $props.between ? ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
            import_vue2.Fragment,
            { key: 0 },
            (0, import_vue2.renderList)($data.seats, (item, index) => {
              return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
                "view",
                {
                  key: index,
                  style: (0, import_vue2.normalizeStyle)("width:" + $data.width + ";" + ($data.height ? "height:" + $data.height : ""))
                },
                null,
                4
                /* STYLE */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          )) : (0, import_vue2.createCommentVNode)("v-if", true)
        ], 14, ["id"])
      ],
      2
      /* CLASS */
    );
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-grid/fui-grid.vue"]]);

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/layout/grid/grid.js
  var import_vue3 = __toESM(require_vue());
  var _style_02 = { "fui-section__title": { "": { "marginLeft": "32rpx" } }, "fui-grid__cell": { "": { "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "flex": 1, "fontSize": "28rpx", "fontWeight": "400" } }, "fui-padding": { "": { "paddingTop": "36rpx", "paddingRight": 0, "paddingBottom": "36rpx", "paddingLeft": 0 } }, "fui-icon": { "": { "width": "96rpx", "height": "96rpx", "marginBottom": "16rpx" } }, "fui-icon__2x": { "": { "width": "64rpx", "height": "64rpx", "marginBottom": "16rpx" } }, "fui-flex__column": { "": { "flex": 1 } } };
  var _sfc_main2 = {
    data() {
      return {
        //百度小程序循环数字有问题
        nums: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        arrs: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        value: ["\u5E7F\u4E1C\u7701", "\u97F6\u5173\u5E02"],
        options: [{
          name: "\u5317\u4EAC\u5E02",
          id: "100000",
          children: [{
            name: "\u5317\u4EAC\u5E02",
            id: "110000"
          }]
        }, {
          name: "\u5E7F\u4E1C\u7701",
          id: "440000",
          children: [{
            name: "\u5E7F\u5DDE\u5E02",
            id: "440100"
          }, {
            name: "\u97F6\u5173\u5E02",
            id: "440200"
          }, {
            name: "\u6DF1\u5733\u5E02",
            id: "440300"
          }, {
            name: "\u73E0\u6D77\u5E02",
            id: "440400"
          }, {
            name: "\u6C55\u5934\u5E02",
            id: "440500"
          }]
        }]
      };
    },
    onLoad() {
    },
    methods: {}
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_fui_grid_item = resolveEasycom((0, import_vue3.resolveDynamicComponent)("fui-grid-item"), __easycom_0);
    const _component_fui_grid = resolveEasycom((0, import_vue3.resolveDynamicComponent)("fui-grid"), __easycom_1);
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue3.createElementVNode)("view", { class: "fui-wrap" }, [
        (0, import_vue3.createElementVNode)("view", { class: "fui-page__hd" }, [
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-page__title" }, "Grid"),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-page__desc" }, "Grid \u5BAB\u683C\uFF0C\u4E3B\u8981\u4F7F\u7528\u573A\u666F\u5982\uFF1A\u70ED\u95E8\u5185\u5BB9\u7B49\u3002")
        ]),
        (0, import_vue3.createElementVNode)("view", { class: "fui-page__bd" }, [
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title fui-mtop--0" }, "\u4E5D\u5BAB\u683C"),
          (0, import_vue3.createVNode)(_component_fui_grid, null, {
            default: (0, import_vue3.withCtx)(() => [
              ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
                import_vue3.Fragment,
                null,
                (0, import_vue3.renderList)($data.nums, (item, index) => {
                  return (0, import_vue3.openBlock)(), (0, import_vue3.createBlock)(_component_fui_grid_item, {
                    index,
                    key: index
                  }, {
                    default: (0, import_vue3.withCtx)(() => [
                      (0, import_vue3.createElementVNode)("view", { class: "fui-grid__cell" }, [
                        (0, import_vue3.createElementVNode)("u-image", {
                          src: "/static/images/common/icon_tabbar_3x.png",
                          class: "fui-icon",
                          mode: "widthFix"
                        }),
                        (0, import_vue3.createElementVNode)("u-text", { class: "fui-text" }, "Grid")
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
          }),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title" }, "\u9AD8\u5EA6\u81EA\u9002\u5E94"),
          (0, import_vue3.createVNode)(_component_fui_grid, { square: false }, {
            default: (0, import_vue3.withCtx)(() => [
              ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
                import_vue3.Fragment,
                null,
                (0, import_vue3.renderList)($data.nums, (item, index) => {
                  return (0, import_vue3.openBlock)(), (0, import_vue3.createBlock)(
                    _component_fui_grid_item,
                    { key: index },
                    {
                      default: (0, import_vue3.withCtx)(() => [
                        (0, import_vue3.createElementVNode)("view", { class: "fui-grid__cell fui-padding" }, [
                          (0, import_vue3.createElementVNode)("u-image", {
                            src: "/static/images/common/icon_tabbar_2x.png",
                            class: "fui-icon__2x",
                            mode: "widthFix"
                          }),
                          (0, import_vue3.createElementVNode)("u-text", { class: "fui-text" }, "Grid")
                        ])
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
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title" }, "\u6539\u53D8\u5217\u6570\uFF084\u5217\uFF09"),
          (0, import_vue3.createVNode)(_component_fui_grid, { columns: 4 }, {
            default: (0, import_vue3.withCtx)(() => [
              ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
                import_vue3.Fragment,
                null,
                (0, import_vue3.renderList)($data.arrs, (item, index) => {
                  return (0, import_vue3.openBlock)(), (0, import_vue3.createBlock)(
                    _component_fui_grid_item,
                    { key: index },
                    {
                      default: (0, import_vue3.withCtx)(() => [
                        (0, import_vue3.createElementVNode)("view", { class: "fui-grid__cell fui-padding" }, [
                          (0, import_vue3.createElementVNode)("u-image", {
                            src: "/static/images/common/icon_tabbar_2x.png",
                            class: "fui-icon__2x",
                            mode: "widthFix"
                          }),
                          (0, import_vue3.createElementVNode)("u-text", { class: "fui-text" }, "Grid")
                        ])
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
  var grid = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/layout/grid/grid.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/component/layout/grid/grid";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    grid.mpType = "page";
    const app = Vue.createPageApp(grid, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...grid.styles || []]));
    app.mount("#root");
  }
})();
