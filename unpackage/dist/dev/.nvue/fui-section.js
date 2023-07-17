import { openBlock, createElementBlock, normalizeStyle, createElementVNode, normalizeClass, createCommentVNode, renderSlot, toDisplayString } from "vue";
import { _ as _export_sfc } from "./uni-app.es.js";
const _style_0 = { "fui-sections__title": { "": { "position": "relative", "flexDirection": "row", "alignItems": "center" } }, "fui-sections__line": { "": { "position": "absolute", "left": 0 } }, "fui-sections__descr-text": { "": { "fontWeight": "400" } } };
const _sfc_main = {
  name: "fui-section",
  emits: ["click"],
  props: {
    title: {
      type: String,
      default: ""
    },
    //默认使用全局配置值
    size: {
      type: [Number, String],
      default: 0
    },
    lineHeight: {
      type: [Number, String],
      default: 0
    },
    color: {
      type: String,
      default: ""
    },
    fontWeight: {
      type: [Number, String],
      default: 0
    },
    descr: {
      type: String,
      default: ""
    },
    descrSize: {
      type: [Number, String],
      default: 0
    },
    descrColor: {
      type: String,
      default: ""
    },
    descrTop: {
      type: [Number, String],
      default: 0
    },
    isLine: {
      type: Boolean,
      default: false
    },
    lineWidth: {
      type: String,
      default: "2px"
    },
    lineColor: {
      type: String,
      default: ""
    },
    //square、circle
    lineCap: {
      type: String,
      default: "circle"
    },
    //nvue android端不支持负数
    lineRight: {
      type: [Number, String],
      default: 16
    },
    lineGap: {
      type: [Number, String],
      default: 0
    },
    background: {
      type: String,
      default: "transparent"
    },
    padding: {
      type: Array,
      default() {
        return ["0", "32rpx"];
      }
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
    getLineColor() {
      let color = this.lineColor;
      if (!color || color === true) {
        color = uni && uni.$fui && uni.$fui.color.primary || "#465CFF";
      }
      return color;
    },
    getLeft() {
      const left = Number(this.lineRight || 0);
      return `${left > 0 ? 0 : left}rpx`;
    },
    getTitleStyle() {
      const app = uni && uni.$fui && uni.$fui.fuiSection;
      const size = this.size || app && app.size || 32;
      const color = this.color || app && app.color || "#181818";
      const weight = this.fontWeight || app && app.fontWeight || 600;
      const left = Number(this.lineRight || 0);
      let style = `font-size:${size}rpx;color:${color};font-weight:${weight};padding-left:${left <= 0 || !this.isLine ? 0 : left}rpx;`;
      style += `line-height:${this.lineHeight == 0 ? size : this.lineHeight}rpx`;
      return style;
    },
    getDescrStyle() {
      const app = uni && uni.$fui && uni.$fui.fuiSection;
      const size = this.descrSize || app && app.descrSize || 28;
      const color = this.descrColor || app && app.descrColor || "#B2B2B2";
      return `font-size:${size}rpx;color:${color};`;
    },
    getDescrTop() {
      const app = uni && uni.$fui && uni.$fui.fuiSection;
      return "padding-top:" + (this.descrTop || app && app.descrTop || 8) + "rpx;";
    }
  },
  methods: {
    handleClick() {
      this.$emit("click", {
        title: this.title
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: "fui-sections__wrap",
      style: normalizeStyle({ marginTop: $props.marginTop + "rpx", marginBottom: $props.marginBottom + "rpx", background: $props.background, paddingTop: $props.padding[0] || 0, paddingRight: $props.padding[1] || 0, paddingBottom: $props.padding[2] || $props.padding[0] || 0, paddingLeft: $props.padding[3] || $props.padding[1] || 0 }),
      renderWhole: true
    },
    [
      createElementVNode("view", {
        class: "fui-sections__title",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick && $options.handleClick(...args))
      }, [
        $props.isLine ? (openBlock(), createElementBlock(
          "view",
          {
            key: 0,
            class: normalizeClass(["fui-sections__line", { "fui-sections__line-color": !$options.getLineColor }]),
            style: normalizeStyle({ background: $options.getLineColor, width: $props.lineWidth, top: $props.lineGap + "rpx", bottom: $props.lineGap + "rpx", borderRadius: $props.lineCap === "circle" ? $props.lineWidth : 0, left: $options.getLeft })
          },
          null,
          6
          /* CLASS, STYLE */
        )) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "default"),
        $props.title ? (openBlock(), createElementBlock(
          "u-text",
          {
            key: 1,
            class: "fui-sections__title-text",
            style: normalizeStyle($options.getTitleStyle)
          },
          toDisplayString($props.title),
          5
          /* TEXT, STYLE */
        )) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "right")
      ]),
      $props.descr ? (openBlock(), createElementBlock(
        "view",
        {
          key: 0,
          class: "fui-sections__descr",
          style: normalizeStyle($options.getDescrTop)
        },
        [
          createElementVNode(
            "u-text",
            {
              class: "fui-sections__descr-text",
              style: normalizeStyle($options.getDescrStyle)
            },
            toDisplayString($props.descr),
            5
            /* TEXT, STYLE */
          )
        ],
        4
        /* STYLE */
      )) : createCommentVNode("v-if", true),
      renderSlot(_ctx.$slots, "descr")
    ],
    4
    /* STYLE */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-section/fui-section.vue"]]);
export {
  __easycom_0 as _
};
