import { _ as _export_sfc, f as formatAppLog, r as resolveEasycom } from "../../../../uni-app.es.js";
import { openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, Fragment, renderList, createCommentVNode, toDisplayString, resolveDynamicComponent, createVNode } from "vue";
const _style_0$1 = { "fui-tabs__scrollbox": { "": { "flex": 1, "flexDirection": "row", "overflow": "hidden" } }, "fui-tabs__fixed": { "": { "position": "fixed", "left": 0, "right": 0 } }, "fui-tabs__sticky": { "": { "position": "sticky", "left": 0, "right": 0 } }, "fui-scroll__view": { "": { "flexDirection": "row", "alignItems": "center" } }, "fui-tabs__item": { "": { "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "paddingLeft": "32rpx", "paddingRight": "32rpx", "position": "relative" } }, "fui-tabs__full": { "": { "flex": 1 } }, "fui-tabs__text-wrap": { "": { "position": "relative", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "zIndex": 3 } }, "fui-tabs__wrap-disabled": { "": { "opacity": 0.5 } }, "fui-tabs__icon": { "": { "width": "40rpx", "height": "40rpx", "marginRight": "12rpx" } }, "fui-tabs__item-column": { "": { "!flexDirection": "column" } }, "fui-tabs__icon-column": { "": { "!marginRight": 0, "marginBottom": "8rpx" } }, "fui-tabs__text": { "": { "flexWrap": "nowrap", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "position": "relative" } }, "fui-tabs__text-nvue": { "": { "position": "absolute", "left": 0, "right": 0, "top": 0, "bottom": 0, "textAlign": "center" } }, "fui-tabs__badge": { "": { "height": "36rpx", "paddingTop": 0, "paddingRight": "12rpx", "paddingBottom": 0, "paddingLeft": "12rpx", "color": "#FFFFFF", "fontSize": "24rpx", "lineHeight": "36rpx", "borderRadius": 100, "position": "absolute", "right": 0, "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "transform": "scale(0.9)" } }, "fui-tabs__badge-dot": { "": { "!height": 8, "!width": 8, "borderRadius": 100, "position": "absolute", "right": 0 } }, "fui-tabs__line-wrap": { "": { "position": "absolute", "borderRadius": 2, "zIndex": 2, "flex": 1, "flexDirection": "row" } }, "fui-tabs__line-center": { "": { "justifyContent": "center", "left": 0 } }, "fui-tabs__ac-line": { "": { "transitionProperty": "transform", "transitionDuration": 200, "transitionTimingFunction": "linear" } }, "fui-tabs__line-short": { "": { "!width": "45rpx" } }, "@TRANSITION": { "fui-tabs__ac-line": { "property": "transform", "duration": 200, "timingFunction": "linear" } } };
const _sfc_main$1 = {
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
      const item = {
        ...this.vals[index]
      };
      if (this.tabIndex === index || item.disabled)
        return;
      this.tabIndex = index;
      let scrollIndex = index - 1 < 0 ? 0 : index - 1;
      this.scrollInto = this.vals[scrollIndex].fui_s_id;
      delete item.fui_s_id;
      this.$emit("change", {
        index,
        ...item
      });
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("scroll-view", {
    class: normalizeClass(["fui-tabs__scrollbox", { "fui-tabs__fixed": $props.isFixed && !$props.isSticky, "fui-tabs__sticky": $props.isSticky }]),
    scrollWithAnimation: true,
    scrollX: $props.scroll,
    showScrollbar: false,
    scrollIntoView: $data.scrollInto,
    style: normalizeStyle({ background: $props.background, zIndex: $props.isFixed || $props.isSticky ? $props.zIndex : 1, top: $props.isFixed || $props.isSticky ? $props.top + "px" : "auto" }),
    renderWhole: true
  }, [
    createElementVNode(
      "view",
      {
        class: normalizeClass(["fui-scroll__view", { "fui-tabs__full": !$props.alignLeft }])
      },
      [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList($data.vals, (tab, index) => {
            return openBlock(), createElementBlock("view", {
              key: index,
              class: normalizeClass(["fui-tabs__item", { "fui-tabs__full": !$props.alignLeft }]),
              id: tab.fui_s_id,
              onClick: ($event) => $options.switchTab(index)
            }, [
              createElementVNode(
                "view",
                {
                  class: normalizeClass(["fui-tabs__text-wrap", { "fui-tabs__wrap-disabled": tab.disabled, "fui-tabs__item-column": $props.direction === "column" && tab.icon }]),
                  style: normalizeStyle({ height: $props.height + "rpx" })
                },
                [
                  $props.isSlider ? (openBlock(), createElementBlock(
                    "view",
                    {
                      key: 0,
                      class: normalizeClass(["fui-tabs__line-wrap", { "fui-tabs__line-center": $props.center }]),
                      style: normalizeStyle({ bottom: $props.bottom + "rpx", left: `-${$props.padding}rpx`, right: `-${$props.padding}rpx` })
                    },
                    [
                      createElementVNode(
                        "view",
                        {
                          class: normalizeClass(["fui-tabs__ac-line", { "fui-tabs__line-short": $props.short, "fui-tabs__full": !$props.short, "fui-tabs__slider-color": !$options.getSliderBgColor }]),
                          style: normalizeStyle({ height: $props.sliderHeight + "rpx", background: $options.getSliderBgColor, borderRadius: $props.sliderRadius == -1 ? $props.sliderHeight + "rpx" : $props.sliderRadius + "rpx", transform: `scale(${$data.tabIndex === index ? $data.isNvue ? 1 : $props.scale : $data.isNvue ? 1e-5 : 0})` })
                        },
                        null,
                        6
                        /* CLASS, STYLE */
                      )
                    ],
                    6
                    /* CLASS, STYLE */
                  )) : createCommentVNode("v-if", true),
                  tab.icon ? (openBlock(), createElementBlock("u-image", {
                    key: 1,
                    class: normalizeClass(["fui-tabs__icon", { "fui-tabs__icon-column": $props.direction === "column" }]),
                    src: $data.tabIndex === index && tab.selectedIcon ? tab.selectedIcon : tab.icon
                  }, null, 10, ["src"])) : createCommentVNode("v-if", true),
                  createElementVNode("view", { class: "fui-tabs__text" }, [
                    createElementVNode(
                      "u-text",
                      {
                        style: normalizeStyle([{ fontSize: $props.selectedSize + "rpx", fontWeight: $data.tabIndex === index ? $props.selectedFontWeight : $props.fontWeight, height: $props.height + "rpx", lineHeight: $props.height + "rpx" }, { "opacity": "0" }])
                      },
                      toDisplayString(tab.name),
                      5
                      /* TEXT, STYLE */
                    ),
                    createElementVNode(
                      "u-text",
                      {
                        class: normalizeClass(["fui-tabs__text-nvue", { "fui-tabs__selected-color": !$options.getSelectedColor && $data.tabIndex === index, "fui-tabs__text-color": !$props.color && $data.tabIndex !== index }]),
                        style: normalizeStyle({ fontSize: ($data.tabIndex === index && $data.isNvue ? $props.selectedSize : $props.size) + "rpx", color: $data.tabIndex === index ? $options.getSelectedColor : $props.color, fontWeight: $data.tabIndex === index ? $props.selectedFontWeight : $props.fontWeight, height: $props.height + "rpx", lineHeight: $props.height + "rpx" })
                      },
                      toDisplayString(tab.name),
                      7
                      /* TEXT, CLASS, STYLE */
                    ),
                    tab.badge ? (openBlock(), createElementBlock(
                      "u-text",
                      {
                        key: 0,
                        class: normalizeClass({ "fui-tabs__badge-color": !$options.getBadgeBgColor, "fui-tabs__badge-dot": $props.isDot, "fui-tabs__badge": !$props.isDot }),
                        style: normalizeStyle({ color: $props.badgeColor, background: $options.getBadgeBgColor, top: $options.getTop + "rpx" })
                      },
                      toDisplayString($props.isDot ? "" : tab.badge),
                      7
                      /* TEXT, CLASS, STYLE */
                    )) : createCommentVNode("v-if", true)
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
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-tabs/fui-tabs.vue"]]);
const _style_0 = { "fui-wrap": { "": { "paddingBottom": "64rpx" } }, "fui-section__title": { "": { "marginLeft": "32rpx" } } };
const _sfc_main = {
  data() {
    return {
      //数据格式一
      tabs: ["热门推荐", "新时代", "懂球帝"],
      //数据格式二：name（必选）、badge（可选）、disabled（可选）为约定属性，其他属性可自行定义
      tabs2: [{
        name: "标签一"
      }, {
        name: "标签二"
      }, {
        name: "标签三",
        badge: 1
      }, {
        name: "标签四"
      }, {
        name: "标签五"
      }, {
        name: "标签六"
      }, {
        name: "标签七"
      }, {
        name: "标签八",
        disabled: true
      }, {
        name: "标签九"
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
  const _component_fui_tabs = resolveEasycom(resolveDynamicComponent("fui-tabs"), __easycom_0);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("u-text", { class: "fui-page__title" }, "Tabs"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "Tabs 标签页，分隔内容上有关联但属于不同类别的数据集合。")
      ]),
      createElementVNode("view", { class: "fui-page__bd" }, [
        createElementVNode("u-text", { class: "fui-section__title fui-mtop--0" }, "基础使用"),
        createVNode(_component_fui_tabs, {
          tabs: $data.tabs,
          onChange: $options.change
        }, null, 8, ["tabs", "onChange"]),
        createElementVNode("u-text", { class: "fui-section__title" }, "滑块居中显示"),
        createVNode(_component_fui_tabs, {
          tabs: $data.tabs,
          center: "",
          onChange: $options.change
        }, null, 8, ["tabs", "onChange"]),
        createElementVNode("u-text", { class: "fui-section__title" }, "改变颜色"),
        createVNode(_component_fui_tabs, {
          tabs: $data.tabs,
          selectedColor: "#FFB703",
          sliderBackground: "#FFB703"
        }, null, 8, ["tabs"]),
        createElementVNode("u-text", { class: "fui-section__title" }, "滑块与内容同宽"),
        createVNode(_component_fui_tabs, {
          tabs: $data.tabs,
          short: false
        }, null, 8, ["tabs"]),
        createElementVNode("u-text", { class: "fui-section__title" }, "超出一屏，禁用（标签八）"),
        createCommentVNode("nvue端，超出一屏滚动时scroll和alignLeft必须同为true"),
        createVNode(_component_fui_tabs, {
          tabs: $data.tabs2,
          isDot: "",
          scroll: "",
          alignLeft: ""
        }, null, 8, ["tabs"])
      ])
    ])
  ]);
}
const tabs = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/nav/tabs/tabs.nvue"]]);
export {
  tabs as default
};
