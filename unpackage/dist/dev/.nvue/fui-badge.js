import { openBlock, createElementBlock, normalizeClass, normalizeStyle, toDisplayString, createCommentVNode } from "vue";
import { _ as _export_sfc } from "./uni-app.es.js";
const _style_0 = { "fui-badge__wrap": { "": { "height": "36rpx", "color": "#FFFFFF", "fontSize": "24rpx", "lineHeight": "36rpx", "borderRadius": 100, "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "textAlign": "center", "zIndex": 10 } }, "fui-badge__dot": { "": { "!height": 8, "!width": 8, "borderRadius": 100, "zIndex": 10 } }, "fui-badge__text-color": { "": { "!color": "#FF2B2B" } }, "fui-badge__trans-origin": { "": { "transformOrigin": "center center" } }, "fui-badge__absolute": { "": { "position": "absolute" } } };
uni.getSystemInfoSync();
const _sfc_main = {
  name: "fui-badge",
  emits: ["click"],
  props: {
    value: {
      type: [Number, String],
      default: ""
    },
    max: {
      type: [Number, String],
      default: -1
    },
    //类型：primary，success，warning，danger，purple，white
    type: {
      type: String,
      default: "primary"
    },
    //背景色，如果设置背景则type失效
    background: {
      type: String,
      default: ""
    },
    //字体颜色
    color: {
      type: String,
      default: "#FFFFFF"
    },
    //是否显示为圆点
    dot: {
      type: Boolean,
      default: false
    },
    //margin-top值，单位rpx
    marginTop: {
      type: [Number, String],
      default: 0
    },
    //margin-left值，单位rpx
    marginLeft: {
      type: [Number, String],
      default: 0
    },
    //margin-right值，单位rpx
    marginRight: {
      type: [Number, String],
      default: 0
    },
    //是否绝对定位
    absolute: {
      type: Boolean,
      default: false
    },
    top: {
      type: String,
      default: "-8rpx"
    },
    right: {
      type: String,
      default: "-18rpx"
    },
    //缩放比例
    scaleRatio: {
      type: Number,
      default: 1
    }
  },
  data() {
    let isNvue = false;
    isNvue = true;
    return {
      isNvue,
      width: 0,
      showValue: ""
    };
  },
  computed: {
    getBgColor() {
      let color = this.background;
      if (!color && this.type) {
        const app = uni && uni.$fui && uni.$fui.color;
        const colors = {
          primary: app && app.primary || "#465CFF",
          success: app && app.success || "#09BE4F",
          warning: app && app.warning || "#FFB703",
          danger: app && app.danger || "#FF2B2B",
          purple: app && app.purple || "#6831FF",
          white: "#FFFFFF"
        };
        color = colors[this.type] || colors.primary;
      }
      return color;
    }
  },
  watch: {
    value(val) {
      this.getWidth();
    }
  },
  mounted() {
    this.getWidth();
  },
  methods: {
    _getTextWidth(text) {
      let sum = 0;
      for (let i = 0, len = text.length; i < len; i++) {
        if (text.charCodeAt(i) >= 0 && text.charCodeAt(i) <= 255)
          sum = sum + 1;
        else
          sum = sum + 2;
      }
      const px = uni.upx2px(text.length > 1 ? 32 : 24);
      var strCode = text.charCodeAt();
      let multiplier = 12;
      if (strCode >= 65 && strCode <= 90) {
        multiplier = 15;
      }
      return sum / 2 * multiplier + px + "px";
    },
    getWidth() {
      let max = Number(this.max);
      let val = Number(this.value);
      let value = "";
      if (isNaN(val) || max === -1) {
        value = this.value;
      } else {
        value = val > max ? `${max}+` : val;
      }
      this.showValue = value;
      this.width = this.dot ? "8px" : this._getTextWidth(String(value));
    },
    handleClick() {
      this.$emit("click");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.showValue || $props.dot ? (openBlock(), createElementBlock(
    "u-text",
    {
      key: 0,
      class: normalizeClass([$props.dot ? "fui-badge__dot" : "fui-badge__wrap", $props.background ? "" : "fui-badge__bg-" + $props.type, $props.absolute ? "fui-badge__absolute" : "", $props.scaleRatio != 1 && $data.isNvue ? "fui-badge__trans-origin" : "", !$props.background && $props.type === "white" ? "fui-badge__text-color" : ""]),
      style: normalizeStyle({ top: $props.absolute ? $props.top : "auto", right: $props.absolute ? $props.right : "auto", zoom: $props.scaleRatio, transform: $data.isNvue ? `scale(${$props.scaleRatio})` : "scale(1)", marginTop: $props.marginTop + "rpx", marginLeft: $props.marginLeft + "rpx", marginRight: $props.marginRight + "rpx", width: $data.width, color: $props.color, background: $options.getBgColor }),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick && $options.handleClick(...args))
    },
    toDisplayString($props.dot ? "" : $data.showValue),
    7
    /* TEXT, CLASS, STYLE */
  )) : createCommentVNode("v-if", true);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-badge/fui-badge.vue"]]);
export {
  __easycom_0 as _
};
