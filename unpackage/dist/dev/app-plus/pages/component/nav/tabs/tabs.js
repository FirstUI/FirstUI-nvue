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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/nav/tabs/tabs.js
  var import_vue2 = __toESM(require_vue());
  var _style_0$1 = { "fui-tabs__scrollbox": { "": { "flex": 1, "flexDirection": "row", "overflow": "hidden" } }, "fui-tabs__fixed": { "": { "position": "fixed", "left": 0, "right": 0 } }, "fui-tabs__sticky": { "": { "position": "sticky", "left": 0, "right": 0 } }, "fui-scroll__view": { "": { "flexDirection": "row", "alignItems": "center" } }, "fui-tabs__item": { "": { "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "paddingLeft": "32rpx", "paddingRight": "32rpx", "position": "relative" } }, "fui-tabs__full": { "": { "flex": 1 } }, "fui-tabs__text-wrap": { "": { "position": "relative", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "zIndex": 3 } }, "fui-tabs__wrap-disabled": { "": { "opacity": 0.5 } }, "fui-tabs__icon": { "": { "width": "40rpx", "height": "40rpx", "marginRight": "12rpx" } }, "fui-tabs__item-column": { "": { "!flexDirection": "column" } }, "fui-tabs__icon-column": { "": { "!marginRight": 0, "marginBottom": "8rpx" } }, "fui-tabs__text": { "": { "flexWrap": "nowrap", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "position": "relative" } }, "fui-tabs__text-nvue": { "": { "position": "absolute", "left": 0, "right": 0, "top": 0, "bottom": 0, "textAlign": "center" } }, "fui-tabs__badge": { "": { "height": "36rpx", "paddingTop": 0, "paddingRight": "12rpx", "paddingBottom": 0, "paddingLeft": "12rpx", "color": "#FFFFFF", "fontSize": "24rpx", "lineHeight": "36rpx", "borderRadius": 100, "position": "absolute", "right": 0, "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "transform": "scale(0.9)" } }, "fui-tabs__badge-dot": { "": { "!height": 8, "!width": 8, "borderRadius": 100, "position": "absolute", "right": 0 } }, "fui-tabs__line-wrap": { "": { "position": "absolute", "borderRadius": 2, "zIndex": 2, "flex": 1, "flexDirection": "row" } }, "fui-tabs__line-center": { "": { "justifyContent": "center", "left": 0 } }, "fui-tabs__ac-line": { "": { "transitionProperty": "transform", "transitionDuration": 200, "transitionTimingFunction": "linear" } }, "fui-tabs__line-short": { "": { "!width": "45rpx" } }, "@TRANSITION": { "fui-tabs__ac-line": { "property": "transform", "duration": 200, "timingFunction": "linear" } } };
  var _sfc_main$1 = {
    name: "fui-tabs",
    emits: ["change"],
    props: {
      // 标签页数据源
      tabs: {
        type: Array,
        default() {
          return [];
        }
      },
      // 当前选项卡
      current: {
        type: Number,
        default: 0
      },
      // 是否可以滚动
      scroll: {
        type: Boolean,
        default: false
      },
      // tab高度 rpx
      height: {
        type: [Number, String],
        default: 96
      },
      background: {
        type: String,
        default: "#fff"
      },
      //字体大小
      size: {
        type: [Number, String],
        default: 28
      },
      //字体颜色
      color: {
        type: String,
        default: "#7F7F7F"
      },
      //选中前字重
      fontWeight: {
        type: [Number, String],
        default: "normal"
      },
      //仅Nvue端生效，代替scale属性
      selectedSize: {
        type: [Number, String],
        default: 32
      },
      //选中后字体颜色
      selectedColor: {
        type: String,
        default: ""
      },
      //选中后字重 
      selectedFontWeight: {
        type: [Number, String],
        default: 500
      },
      //选中后字体缩放倍数
      //Nvue端 Android 暂不支持设置overflow:visible，放大后文字超出部分被隐藏
      scale: {
        type: [Number, String],
        default: 1.2
      },
      badgeColor: {
        type: String,
        default: "#fff"
      },
      badgeBackground: {
        type: String,
        default: ""
      },
      isDot: {
        type: Boolean,
        default: false
      },
      isSlider: {
        type: Boolean,
        default: true
      },
      //滑块高度
      sliderHeight: {
        type: [Number, String],
        default: 5
      },
      //滑块背景颜
      sliderBackground: {
        type: String,
        default: ""
      },
      //滑块 radius
      sliderRadius: {
        type: [Number, String],
        default: -1
      },
      //滑块左右padding值
      padding: {
        type: [Number, String],
        default: 0
      },
      //滑块bottom
      bottom: {
        type: [Number, String],
        default: 0
      },
      //滑块是否固定为较短的长度45rpx
      short: {
        type: Boolean,
        default: true
      },
      //滑块是否居中显示
      center: {
        type: Boolean,
        default: false
      },
      //是否固定
      isFixed: {
        type: Boolean,
        default: false
      },
      //吸顶效果，为true时isFixed失效
      isSticky: {
        type: Boolean,
        default: false
      },
      //isFixed或isSticky为true时，tabs top值 px
      top: {
        type: [Number, String],
        default: 0
      },
      //当数据不满一屏时，item项是否靠左对齐，默认均分铺满
      alignLeft: {
        type: Boolean,
        default: false
      },
      //tabs item项排列方式：row、column
      direction: {
        type: String,
        default: "row"
      },
      zIndex: {
        type: [Number, String],
        default: 996
      }
    },
    watch: {
      tabs(vals) {
        this.initData(vals);
      },
      current(newVal, oldVal) {
        this.switchTab(newVal);
      }
    },
    created() {
      this.initData(this.tabs);
    },
    computed: {
      getTop() {
        const height = Number(this.height) - Number(this.selectedSize);
        return height / 2;
      },
      getSelectedColor() {
        let color = this.selectedColor;
        if (!color || color === true) {
          const app = uni && uni.$fui && uni.$fui.color;
          color = app && app.primary || "#465CFF";
        }
        return color;
      },
      getSliderBgColor() {
        let color = this.sliderBackground;
        if (!color || color === true) {
          const app = uni && uni.$fui && uni.$fui.color;
          color = app && app.primary || "#465CFF";
        }
        return color;
      },
      getBadgeBgColor() {
        let color = this.badgeBackground;
        if (!color || color === true) {
          const app = uni && uni.$fui && uni.$fui.color;
          color = app && app.danger || "#FF2B2B";
        }
        return color;
      }
    },
    data() {
      let isNvue = false;
      isNvue = true;
      return {
        vals: [],
        scrollInto: "",
        tabIndex: 0,
        isNvue
      };
    },
    methods: {
      getId() {
        return `fui_${Math.ceil(Math.random() * 1e6).toString(36)}`;
      },
      initData(vals) {
        if (vals && vals.length > 0) {
          if (typeof vals[0] === "object") {
            vals.map((item) => {
              const scrollId = this.getId();
              item.fui_s_id = scrollId;
            });
          } else {
            vals = vals.map((item) => {
              const scrollId = this.getId();
              return {
                name: item,
                fui_s_id: scrollId
              };
            });
          }
          this.vals = vals;
          this.$nextTick(() => {
            setTimeout(() => {
              this.switchTab(this.current);
            }, 50);
          });
        }
      },
      switchTab(index) {
        const item = __spreadValues({}, this.vals[index]);
        if (this.tabIndex === index || item.disabled)
          return;
        this.tabIndex = index;
        let scrollIndex = index - 1 < 0 ? 0 : index - 1;
        this.scrollInto = this.vals[scrollIndex].fui_s_id;
        delete item.fui_s_id;
        this.$emit("change", __spreadValues({
          index
        }, item));
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
      class: (0, import_vue2.normalizeClass)(["fui-tabs__scrollbox", { "fui-tabs__fixed": $props.isFixed && !$props.isSticky, "fui-tabs__sticky": $props.isSticky }]),
      scrollWithAnimation: true,
      scrollX: $props.scroll,
      showScrollbar: false,
      scrollIntoView: $data.scrollInto,
      style: (0, import_vue2.normalizeStyle)({ background: $props.background, zIndex: $props.isFixed || $props.isSticky ? $props.zIndex : 1, top: $props.isFixed || $props.isSticky ? $props.top + "px" : "auto" }),
      renderWhole: true
    }, [
      (0, import_vue2.createElementVNode)(
        "view",
        {
          class: (0, import_vue2.normalizeClass)(["fui-scroll__view", { "fui-tabs__full": !$props.alignLeft }])
        },
        [
          ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
            import_vue2.Fragment,
            null,
            (0, import_vue2.renderList)($data.vals, (tab, index) => {
              return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                key: index,
                class: (0, import_vue2.normalizeClass)(["fui-tabs__item", { "fui-tabs__full": !$props.alignLeft }]),
                id: tab.fui_s_id,
                onClick: ($event) => $options.switchTab(index)
              }, [
                (0, import_vue2.createElementVNode)(
                  "view",
                  {
                    class: (0, import_vue2.normalizeClass)(["fui-tabs__text-wrap", { "fui-tabs__wrap-disabled": tab.disabled, "fui-tabs__item-column": $props.direction === "column" && tab.icon }]),
                    style: (0, import_vue2.normalizeStyle)({ height: $props.height + "rpx" })
                  },
                  [
                    $props.isSlider ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
                      "view",
                      {
                        key: 0,
                        class: (0, import_vue2.normalizeClass)(["fui-tabs__line-wrap", { "fui-tabs__line-center": $props.center }]),
                        style: (0, import_vue2.normalizeStyle)({ bottom: $props.bottom + "rpx", left: `-${$props.padding}rpx`, right: `-${$props.padding}rpx` })
                      },
                      [
                        (0, import_vue2.createElementVNode)(
                          "view",
                          {
                            class: (0, import_vue2.normalizeClass)(["fui-tabs__ac-line", { "fui-tabs__line-short": $props.short, "fui-tabs__full": !$props.short, "fui-tabs__slider-color": !$options.getSliderBgColor }]),
                            style: (0, import_vue2.normalizeStyle)({ height: $props.sliderHeight + "rpx", background: $options.getSliderBgColor, borderRadius: $props.sliderRadius == -1 ? $props.sliderHeight + "rpx" : $props.sliderRadius + "rpx", transform: `scale(${$data.tabIndex === index ? $data.isNvue ? 1 : $props.scale : $data.isNvue ? 1e-5 : 0})` })
                          },
                          null,
                          6
                          /* CLASS, STYLE */
                        )
                      ],
                      6
                      /* CLASS, STYLE */
                    )) : (0, import_vue2.createCommentVNode)("v-if", true),
                    tab.icon ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("u-image", {
                      key: 1,
                      class: (0, import_vue2.normalizeClass)(["fui-tabs__icon", { "fui-tabs__icon-column": $props.direction === "column" }]),
                      src: $data.tabIndex === index && tab.selectedIcon ? tab.selectedIcon : tab.icon
                    }, null, 10, ["src"])) : (0, import_vue2.createCommentVNode)("v-if", true),
                    (0, import_vue2.createElementVNode)("view", { class: "fui-tabs__text" }, [
                      (0, import_vue2.createElementVNode)(
                        "u-text",
                        {
                          style: (0, import_vue2.normalizeStyle)([{ fontSize: $props.selectedSize + "rpx", fontWeight: $data.tabIndex === index ? $props.selectedFontWeight : $props.fontWeight, height: $props.height + "rpx", lineHeight: $props.height + "rpx" }, { "opacity": "0" }])
                        },
                        (0, import_vue2.toDisplayString)(tab.name),
                        5
                        /* TEXT, STYLE */
                      ),
                      (0, import_vue2.createElementVNode)(
                        "u-text",
                        {
                          class: (0, import_vue2.normalizeClass)(["fui-tabs__text-nvue", { "fui-tabs__selected-color": !$options.getSelectedColor && $data.tabIndex === index, "fui-tabs__text-color": !$props.color && $data.tabIndex !== index }]),
                          style: (0, import_vue2.normalizeStyle)({ fontSize: ($data.tabIndex === index && $data.isNvue ? $props.selectedSize : $props.size) + "rpx", color: $data.tabIndex === index ? $options.getSelectedColor : $props.color, fontWeight: $data.tabIndex === index ? $props.selectedFontWeight : $props.fontWeight, height: $props.height + "rpx", lineHeight: $props.height + "rpx" })
                        },
                        (0, import_vue2.toDisplayString)(tab.name),
                        7
                        /* TEXT, CLASS, STYLE */
                      ),
                      tab.badge ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
                        "u-text",
                        {
                          key: 0,
                          class: (0, import_vue2.normalizeClass)({ "fui-tabs__badge-color": !$options.getBadgeBgColor, "fui-tabs__badge-dot": $props.isDot, "fui-tabs__badge": !$props.isDot }),
                          style: (0, import_vue2.normalizeStyle)({ color: $props.badgeColor, background: $options.getBadgeBgColor, top: $options.getTop + "rpx" })
                        },
                        (0, import_vue2.toDisplayString)($props.isDot ? "" : tab.badge),
                        7
                        /* TEXT, CLASS, STYLE */
                      )) : (0, import_vue2.createCommentVNode)("v-if", true)
                    ])
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ], 10, ["id", "onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      )
    ], 14, ["scrollX", "scrollIntoView"]);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-tabs/fui-tabs.vue"]]);
  var _style_0 = { "fui-wrap": { "": { "paddingBottom": "64rpx" } }, "fui-section__title": { "": { "marginLeft": "32rpx" } } };
  var _sfc_main = {
    data() {
      return {
        //数据格式一
        tabs: ["\u70ED\u95E8\u63A8\u8350", "\u65B0\u65F6\u4EE3", "\u61C2\u7403\u5E1D"],
        //数据格式二：name（必选）、badge（可选）、disabled（可选）为约定属性，其他属性可自行定义
        tabs2: [{
          name: "\u6807\u7B7E\u4E00"
        }, {
          name: "\u6807\u7B7E\u4E8C"
        }, {
          name: "\u6807\u7B7E\u4E09",
          badge: 1
        }, {
          name: "\u6807\u7B7E\u56DB"
        }, {
          name: "\u6807\u7B7E\u4E94"
        }, {
          name: "\u6807\u7B7E\u516D"
        }, {
          name: "\u6807\u7B7E\u4E03"
        }, {
          name: "\u6807\u7B7E\u516B",
          disabled: true
        }, {
          name: "\u6807\u7B7E\u4E5D"
        }]
      };
    },
    onLoad() {
    },
    methods: {
      change(e) {
        formatAppLog("log", "at pages/component/nav/tabs/tabs.nvue:58", e);
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_fui_tabs = resolveEasycom((0, import_vue2.resolveDynamicComponent)("fui-tabs"), __easycom_0);
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue2.createElementVNode)("view", { class: "fui-wrap" }, [
        (0, import_vue2.createElementVNode)("view", { class: "fui-page__hd" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-page__title" }, "Tabs"),
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-page__desc" }, "Tabs \u6807\u7B7E\u9875\uFF0C\u5206\u9694\u5185\u5BB9\u4E0A\u6709\u5173\u8054\u4F46\u5C5E\u4E8E\u4E0D\u540C\u7C7B\u522B\u7684\u6570\u636E\u96C6\u5408\u3002")
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "fui-page__bd" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-section__title fui-mtop--0" }, "\u57FA\u7840\u4F7F\u7528"),
          (0, import_vue2.createVNode)(_component_fui_tabs, {
            tabs: $data.tabs,
            onChange: $options.change
          }, null, 8, ["tabs", "onChange"]),
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-section__title" }, "\u6ED1\u5757\u5C45\u4E2D\u663E\u793A"),
          (0, import_vue2.createVNode)(_component_fui_tabs, {
            tabs: $data.tabs,
            center: "",
            onChange: $options.change
          }, null, 8, ["tabs", "onChange"]),
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-section__title" }, "\u6539\u53D8\u989C\u8272"),
          (0, import_vue2.createVNode)(_component_fui_tabs, {
            tabs: $data.tabs,
            selectedColor: "#FFB703",
            sliderBackground: "#FFB703"
          }, null, 8, ["tabs"]),
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-section__title" }, "\u6ED1\u5757\u4E0E\u5185\u5BB9\u540C\u5BBD"),
          (0, import_vue2.createVNode)(_component_fui_tabs, {
            tabs: $data.tabs,
            short: false
          }, null, 8, ["tabs"]),
          (0, import_vue2.createElementVNode)("u-text", { class: "fui-section__title" }, "\u8D85\u51FA\u4E00\u5C4F\uFF0C\u7981\u7528\uFF08\u6807\u7B7E\u516B\uFF09"),
          (0, import_vue2.createCommentVNode)("nvue\u7AEF\uFF0C\u8D85\u51FA\u4E00\u5C4F\u6EDA\u52A8\u65F6scroll\u548CalignLeft\u5FC5\u987B\u540C\u4E3Atrue"),
          (0, import_vue2.createVNode)(_component_fui_tabs, {
            tabs: $data.tabs2,
            isDot: "",
            scroll: "",
            alignLeft: ""
          }, null, 8, ["tabs"])
        ])
      ])
    ]);
  }
  var tabs = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/nav/tabs/tabs.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/component/nav/tabs/tabs";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    tabs.mpType = "page";
    const app = Vue.createPageApp(tabs, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...tabs.styles || []]));
    app.mount("#root");
  }
})();
