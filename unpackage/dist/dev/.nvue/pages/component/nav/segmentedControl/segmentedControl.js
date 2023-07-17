import { _ as _export_sfc, f as formatAppLog, r as resolveEasycom } from "../../../../uni-app.es.js";
import { openBlock, createElementBlock, normalizeClass, normalizeStyle, Fragment, renderList, createElementVNode, toDisplayString, createCommentVNode, resolveDynamicComponent, createVNode } from "vue";
const _style_0 = { "fui-segmented__control": { "": { "flex": 1, "flexDirection": "row", "overflow": "hidden" } }, "fui-segmented__item": { "": { "flex": 1, "justifyContent": "center", "alignItems": "center", "borderStyle": "solid", "borderTopWidth": 0, "borderBottomWidth": 0, "borderRightWidth": 0, "borderLeftWidth": 0, "position": "relative" } }, "fui-segmented__item-border": { "": { "borderTopWidth": 0.5, "borderBottomWidth": 0.5, "borderRightWidth": 0.5 } }, "fui-segmented__item-line": { "": { "position": "absolute", "left": 0, "right": 0, "bottom": 0, "height": 2 } }, "fui-segmented__disabled": { "": { "opacity": 0.5 } }, "fui-segmented__first": { "": { "borderLeftStyle": "solid", "borderLeftWidth": 0.5 } } };
const _sfc_main$1 = {
  name: "fui-segmented-control",
  emits: ["click"],
  props: {
    values: {
      type: Array,
      default() {
        return [];
      }
    },
    current: {
      type: Number,
      default: 0
    },
    //button、text
    type: {
      type: String,
      default: "button"
    },
    color: {
      type: String,
      default: ""
    },
    activeColor: {
      type: String,
      default: "#fff"
    },
    bold: {
      type: Boolean,
      default: false
    },
    height: {
      type: [Number, String],
      default: 64
    },
    size: {
      type: [Number, String],
      default: 28
    },
    radius: {
      type: [Number, String],
      default: 8
    },
    disabled: {
      type: Boolean,
      default: false
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
    return {
      currentIndex: 0,
      vals: []
    };
  },
  watch: {
    current(val) {
      if (val !== this.currentIndex) {
        this.currentIndex = val;
      }
    },
    values(vals) {
      this.initData(vals);
    }
  },
  created() {
    this.currentIndex = this.current;
    this.initData(this.values);
  },
  methods: {
    initData(vals) {
      if (vals && vals.length > 0) {
        if (typeof vals[0] === "object") {
          this.vals = vals;
        } else {
          this.vals = vals.map((item) => {
            return {
              name: item
            };
          });
        }
      }
    },
    handleClick(index) {
      let vals = this.vals[index];
      if (this.currentIndex !== index && !this.disabled && !vals.disabled) {
        this.currentIndex = index;
        this.$emit("click", {
          index,
          ...vals
        });
      }
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["fui-segmented__control", { "fui-segmented__disabled": $props.disabled }]),
      style: normalizeStyle({ marginTop: $props.marginTop + "rpx", marginBottom: $props.marginBottom + "rpx" }),
      renderWhole: true
    },
    [
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($data.vals, (item, index) => {
          return openBlock(), createElementBlock("view", {
            class: normalizeClass(["fui-segmented__item", { "fui-segmented__first": index === 0 && $props.type === "button", "fui-seg__item-bg": $data.currentIndex === index && !$props.color && $props.type === "button", "fui-seg__item-border": !$props.color && $props.type === "button", "fui-segmented__item-border": $props.type === "button" }]),
            key: index,
            style: normalizeStyle({ borderTopLeftRadius: index === 0 ? $props.radius + "rpx" : "0", borderBottomLeftRadius: index === 0 ? $props.radius + "rpx" : "0", borderTopRightRadius: index === $props.values.length - 1 ? $props.radius + "rpx" : "0", borderBottomRightRadius: index === $props.values.length - 1 ? $props.radius + "rpx" : "0", borderColor: $props.type === "button" ? $options.getColor : "transparent", background: $data.currentIndex === index && $props.type === "button" ? $options.getColor : "transparent", height: $props.height + "rpx" }),
            onClick: ($event) => $options.handleClick(index)
          }, [
            createElementVNode(
              "u-text",
              {
                style: normalizeStyle({ fontSize: $props.size + "rpx", color: $data.currentIndex === index ? $props.activeColor : $options.getColor, fontWeight: $props.bold && $data.currentIndex === index ? 600 : 400 }),
                class: normalizeClass({ "fui-segmented__disabled": item.disabled, "fui-seg__text-color": !$props.color && $data.currentIndex !== index })
              },
              toDisplayString(item.name),
              7
              /* TEXT, CLASS, STYLE */
            ),
            $data.currentIndex === index && $props.type === "text" ? (openBlock(), createElementBlock(
              "view",
              {
                key: 0,
                class: "fui-segmented__item-line",
                style: normalizeStyle({ background: $props.activeColor })
              },
              null,
              4
              /* STYLE */
            )) : createCommentVNode("v-if", true)
          ], 14, ["onClick"]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-segmented-control/fui-segmented-control.vue"]]);
const _sfc_main = {
  data() {
    return {
      values: ["segmented1", "segmented2"],
      //name为约定属性，其他可自定义
      values2: [{
        id: 1,
        name: "segmented1"
      }, {
        id: 2,
        name: "segmented2"
      }, {
        id: 3,
        name: "segmented3"
      }],
      values3: [{
        name: "segmented1"
      }, {
        name: "segmented2",
        disabled: true
      }, {
        name: "segmented3"
      }]
    };
  },
  methods: {
    itemClick(e) {
      formatAppLog("log", "at pages/component/nav/segmentedControl/segmentedControl.nvue:60", e);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_segmented_control = resolveEasycom(resolveDynamicComponent("fui-segmented-control"), __easycom_0);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("u-text", { class: "fui-page__title" }, "SegmentedControl"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "SegmentedControl 分段器。")
      ]),
      createElementVNode("view", { class: "fui-page__bd fui-page__spacing" }, [
        createElementVNode("u-text", { class: "fui-section__title fui-mtop--0" }, "基础使用"),
        createVNode(_component_fui_segmented_control, {
          values: $data.values,
          onClick: $options.itemClick
        }, null, 8, ["values", "onClick"]),
        createElementVNode("u-text", { class: "fui-section__title" }, "自定义颜色"),
        createVNode(_component_fui_segmented_control, {
          values: $data.values,
          marginTop: "24",
          color: "#FF2B2B"
        }, null, 8, ["values"]),
        createVNode(_component_fui_segmented_control, {
          values: $data.values,
          marginTop: "24",
          color: "#FFB703"
        }, null, 8, ["values"]),
        createVNode(_component_fui_segmented_control, {
          values: $data.values,
          marginTop: "24",
          color: "#09BE4F"
        }, null, 8, ["values"]),
        createVNode(_component_fui_segmented_control, {
          values: $data.values,
          marginTop: "24",
          color: "#6831FF"
        }, null, 8, ["values"]),
        createVNode(_component_fui_segmented_control, {
          values: $data.values,
          marginTop: "24",
          color: "#333333"
        }, null, 8, ["values"]),
        createElementVNode("u-text", { class: "fui-section__title" }, "text类型"),
        createVNode(_component_fui_segmented_control, {
          values: $data.values,
          marginTop: "24",
          color: "#333",
          activeColor: "#FFB703",
          type: "text",
          height: "100",
          size: "32"
        }, null, 8, ["values"]),
        createElementVNode("u-text", { class: "fui-section__title" }, "不同数据格式"),
        createVNode(_component_fui_segmented_control, {
          values: $data.values2,
          onClick: $options.itemClick
        }, null, 8, ["values", "onClick"]),
        createElementVNode("u-text", { class: "fui-section__title" }, "禁用状态"),
        createVNode(_component_fui_segmented_control, {
          values: $data.values2,
          disabled: ""
        }, null, 8, ["values"]),
        createElementVNode("u-text", { class: "fui-section__title" }, "默认选中"),
        createVNode(_component_fui_segmented_control, {
          values: $data.values2,
          current: 1
        }, null, 8, ["values"]),
        createElementVNode("u-text", { class: "fui-section__title" }, "改变圆角值"),
        createVNode(_component_fui_segmented_control, {
          values: $data.values2,
          radius: 100
        }, null, 8, ["values"]),
        createElementVNode("u-text", { class: "fui-section__title" }, "单项禁用"),
        createVNode(_component_fui_segmented_control, { values: $data.values3 }, null, 8, ["values"])
      ])
    ])
  ]);
}
const segmentedControl = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/nav/segmentedControl/segmentedControl.nvue"]]);
export {
  segmentedControl as default
};
