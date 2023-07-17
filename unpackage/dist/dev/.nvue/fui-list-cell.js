import { openBlock, createElementBlock, normalizeClass, normalizeStyle, createCommentVNode, renderSlot } from "vue";
import { _ as _export_sfc } from "./uni-app.es.js";
const _style_0 = { "fui-list__cell": { "": { "position": "relative", "flex": 1, "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between" } }, "fui-list__item": { "": { "flex": 1 } }, "fui-cell__arrow": { "": { "height": "40rpx", "width": "40rpx", "borderTopWidth": 3, "borderRightWidth": 3, "borderBottomWidth": 0, "borderLeftWidth": 0, "borderStyle": "solid", "transform": "rotate(45deg) scale(0.5)", "borderTopRightRadius": "3rpx", "transformOrigin": "center center", "marginRight": "-5.8579rpx" } }, "fui-cell__border-top": { "": { "position": "absolute", "top": 0, "height": 0.5, "zIndex": -1 } }, "fui-cell__border-bottom": { "": { "position": "absolute", "bottom": 0, "height": 0.5, "zIndex": -1 } }, "fui-highlight": { "": { "!backgroundColor:active": "rgba(0,0,0,0.2)" } } };
const _sfc_main = {
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
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["fui-list__cell", { "fui-highlight": $props.highlight, "fui-list__cell-background": !$props.background }]),
      style: normalizeStyle({ paddingTop: $options.getPadding[0] || 0, paddingRight: $options.getPadding[1] || 0, paddingBottom: $options.getPadding[2] || $options.getPadding[0] || 0, paddingLeft: $options.getPadding[3] || $options.getPadding[1] || 0, background: $props.background, marginTop: $props.marginTop + "rpx", marginBottom: $props.marginBottom + "rpx", borderRadius: $props.radius }),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick && $options.handleClick(...args)),
      renderWhole: true
    },
    [
      $props.topBorder ? (openBlock(), createElementBlock(
        "view",
        {
          key: 0,
          style: normalizeStyle({ background: $options.getBorderColor, left: $props.topLeft + "rpx", right: $props.topRight + "rpx" }),
          class: normalizeClass(["fui-cell__border-top", { "fui-cell__border-color": !$options.getBorderColor }])
        },
        null,
        6
        /* CLASS, STYLE */
      )) : createCommentVNode("v-if", true),
      renderSlot(_ctx.$slots, "default"),
      $props.bottomBorder ? (openBlock(), createElementBlock(
        "view",
        {
          key: 1,
          style: normalizeStyle({ background: $options.getBorderColor, left: $options.getBottomLeft + "rpx", right: $props.bottomRight + "rpx" }),
          class: normalizeClass(["fui-cell__border-bottom", { "fui-cell__border-color": !$options.getBorderColor }])
        },
        null,
        6
        /* CLASS, STYLE */
      )) : createCommentVNode("v-if", true),
      $props.arrow ? (openBlock(), createElementBlock(
        "view",
        {
          key: 2,
          class: "fui-cell__arrow",
          style: normalizeStyle({ "border-color": $options.getArrowColor })
        },
        null,
        4
        /* STYLE */
      )) : createCommentVNode("v-if", true)
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-list-cell/fui-list-cell.vue"]]);
export {
  __easycom_2 as _
};
