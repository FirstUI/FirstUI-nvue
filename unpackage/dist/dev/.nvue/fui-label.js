import { openBlock, createElementBlock, normalizeClass, normalizeStyle, withModifiers, renderSlot } from "vue";
import { _ as _export_sfc } from "./uni-app.es.js";
const _style_0 = { "fui-label__full": { "": { "flex": 1 } } };
const _sfc_main = {
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["fui-label__box", { "fui-label__full": $props.full, "fui-label__inline": $props.inline }]),
      style: normalizeStyle({ paddingTop: $props.padding[0] || 0, paddingRight: $props.padding[1] || 0, paddingBottom: $props.padding[2] || $props.padding[0] || 0, paddingLeft: $props.padding[3] || $props.padding[1] || 0, marginTop: $props.margin[0] || 0, marginRight: $props.margin[1] || 0, marginBottom: $props.margin[2] || $props.margin[0] || 0, marginLeft: $props.margin[3] || $props.margin[1] || 0 }),
      onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.onClick && $options.onClick(...args), ["stop"])),
      renderWhole: true
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-label/fui-label.vue"]]);
export {
  __easycom_2 as _
};
