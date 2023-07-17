import { openBlock, createElementBlock, normalizeClass, normalizeStyle, toDisplayString, createCommentVNode, renderSlot, resolveDynamicComponent, createElementVNode, createVNode, withCtx } from "vue";
import { _ as _export_sfc, r as resolveEasycom } from "../../../../uni-app.es.js";
import { _ as __easycom_1 } from "../../../../fui-icon.js";
const _style_0$1 = { "fui-tag__wrap": { "": { "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "position": "relative", "borderWidth": 0.5, "borderStyle": "solid", "borderColor": "rgba(0,0,0,0)", "fontWeight": "normal", "overflow": "hidden", "textOverflow": "ellipsis" } }, "fui-tag__no-border": { "": { "borderWidth": 0 } }, "fui-tag__text": { "": { "lines": 1, "overflow": "hidden", "textOverflow": "ellipsis" } }, "fui-tag__origin-left": { "": { "transformOrigin": "0 center" } }, "fui-tag__origin-right": { "": { "transformOrigin": "100% center" } }, "fui-tag__opacity": { "": { "opacity:active": 0.5 } } };
function hexToRGB(hex) {
  if (hex.length === 4) {
    let text = hex.substring(1, 4);
    hex = "#" + text + text;
  }
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}` : "241,244,250";
}
const _sfc_main$1 = {
  name: "fui-tag",
  emits: ["click"],
  props: {
    text: {
      type: String,
      default: ""
    },
    //类型：primary，success，warning，danger，purple
    type: {
      type: String,
      default: "primary"
    },
    //三种主题：dark、light、plain。background为空时生效
    theme: {
      type: String,
      default: "dark"
    },
    //背景色，如果设置背景则type失效
    background: {
      type: String,
      default: ""
    },
    //v2.0.0+ 
    isBorder: {
      type: Boolean,
      default: true
    },
    borderColor: {
      type: String,
      default: ""
    },
    //字体颜色
    color: {
      type: String,
      default: ""
    },
    //字体大小 rpx
    size: {
      type: [Number, String],
      default: 24
    },
    //缩放比例
    scaleRatio: {
      type: Number,
      default: 1
    },
    originLeft: {
      type: Boolean,
      default: false
    },
    originRight: {
      type: Boolean,
      default: false
    },
    //是否有点击效果
    highlight: {
      type: Boolean,
      default: false
    },
    radius: {
      type: [Number, String],
      default: 8
    },
    //padding值，上右下左，同css顺序
    padding: {
      type: Array,
      default() {
        return ["16rpx", "32rpx"];
      }
    },
    //margin-top值 
    marginTop: {
      type: [Number, String],
      default: 0
    },
    marginBottom: {
      type: [Number, String],
      default: 0
    },
    marginLeft: {
      type: [Number, String],
      default: 0
    },
    marginRight: {
      type: [Number, String],
      default: 0
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    const app = uni && uni.$fui && uni.$fui.color;
    return {
      dark: {
        primary: app && app.primary || "#465CFF",
        success: app && app.success || "#09BE4F",
        warning: app && app.warning || "#FFB703",
        danger: app && app.danger || "#FF2B2B",
        purple: app && app.purple || "#6831FF"
      }
    };
  },
  computed: {
    getBackground() {
      let background = this.background;
      if (!background) {
        switch (this.theme) {
          case "light":
            background = `rgba(${hexToRGB(this.dark[this.type])},.05)`;
            break;
          case "dark":
            background = this.dark[this.type];
            break;
          default:
            background = "rgba(0,0,0,0)";
            break;
        }
      }
      return background;
    },
    getColor() {
      let color = this.color;
      if (!color) {
        if (this.theme === "dark") {
          color = "#fff";
        } else {
          color = this.dark[this.type];
        }
      }
      return color;
    },
    getBorderColor() {
      let borderColor = this.borderColor;
      if (!borderColor) {
        if (this.theme === "light") {
          borderColor = `rgba(${hexToRGB(this.dark[this.type])},.05)`;
        } else {
          borderColor = this.dark[this.type];
        }
      }
      return borderColor;
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
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["fui-tag__wrap", [$props.highlight ? "fui-tag__opacity" : "", $props.originLeft ? "fui-tag__origin-left" : "", $props.originRight ? "fui-tag__origin-right" : "", !$props.background ? `fui-tag__${$props.type}-${$props.theme}` : "", $props.background && !$props.borderColor || !$props.isBorder ? "fui-tag__no-border" : ""]]),
      style: normalizeStyle({ backgroundColor: $options.getBackground, fontSize: $props.size + "rpx", lineHeight: $props.size + "rpx", color: $props.color, borderColor: $options.getBorderColor, transform: `scale(${$props.scaleRatio})`, borderRadius: $props.radius + "rpx", paddingTop: $props.padding[0] || 0, paddingRight: $props.padding[1] || 0, paddingBottom: $props.padding[2] || $props.padding[0] || 0, paddingLeft: $props.padding[3] || $props.padding[1] || 0, marginTop: $props.marginTop + "rpx", marginRight: $props.marginRight + "rpx", marginBottom: $props.marginBottom + "rpx", marginLeft: $props.marginLeft + "rpx" }),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick && $options.handleClick(...args)),
      renderWhole: true
    },
    [
      $props.text ? (openBlock(), createElementBlock(
        "u-text",
        {
          key: 0,
          class: normalizeClass(["fui-tag__text", [!$props.background ? `fui-tag_${$props.type}-${$props.theme}` : ""]]),
          style: normalizeStyle({ fontSize: $props.size + "rpx", lineHeight: $props.size + "rpx", color: $options.getColor })
        },
        toDisplayString($props.text),
        7
        /* TEXT, CLASS, STYLE */
      )) : createCommentVNode("v-if", true),
      renderSlot(_ctx.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-tag/fui-tag.vue"]]);
const _style_0 = { "fui-align__center": { "": { "flexWrap": "wrap" } }, "fui-close__icon": { "": { "flexDirection": "row", "alignItems": "center", "paddingTop": "6rpx", "paddingRight": 0, "paddingBottom": "4rpx", "paddingLeft": "24rpx" } } };
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_tag = resolveEasycom(resolveDynamicComponent("fui-tag"), __easycom_0);
  const _component_fui_icon = resolveEasycom(resolveDynamicComponent("fui-icon"), __easycom_1);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("u-text", { class: "fui-page__title" }, "Tag"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "Tag 标签，用于标记或分类。")
      ]),
      createElementVNode("view", { class: "fui-page__bd fui-page__spacing" }, [
        createElementVNode("u-text", { class: "fui-section__title fui-mtop--0" }, "基础使用"),
        createElementVNode("view", { class: "fui-align__center" }, [
          createVNode(_component_fui_tag, {
            text: "标签一",
            "margin-bottom": "24",
            "margin-right": "24"
          }),
          createVNode(_component_fui_tag, {
            text: "标签二",
            type: "danger",
            "margin-bottom": "24",
            "margin-right": "24"
          }),
          createVNode(_component_fui_tag, {
            text: "标签三",
            type: "success",
            "margin-bottom": "24",
            "margin-right": "24"
          }),
          createVNode(_component_fui_tag, {
            text: "标签四",
            type: "warning",
            "margin-bottom": "24",
            "margin-right": "24"
          }),
          createVNode(_component_fui_tag, {
            text: "标签五",
            type: "purple",
            "margin-bottom": "24"
          })
        ]),
        createElementVNode("u-text", { class: "fui-section__title" }, "浅色调"),
        createElementVNode("view", { class: "fui-align__center" }, [
          createVNode(_component_fui_tag, {
            text: "标签一",
            "margin-bottom": "24",
            theme: "light",
            "margin-right": "24"
          }),
          createVNode(_component_fui_tag, {
            text: "标签二",
            type: "danger",
            theme: "light",
            "margin-bottom": "24",
            "margin-right": "24"
          }),
          createVNode(_component_fui_tag, {
            text: "标签三",
            type: "success",
            theme: "light",
            "margin-bottom": "24",
            "margin-right": "24"
          }),
          createVNode(_component_fui_tag, {
            text: "标签四",
            type: "warning",
            theme: "light",
            "margin-bottom": "24",
            "margin-right": "24"
          }),
          createVNode(_component_fui_tag, {
            text: "标签五",
            type: "purple",
            theme: "light",
            "margin-bottom": "24",
            "margin-right": "24"
          })
        ]),
        createElementVNode("u-text", { class: "fui-section__title" }, "空心"),
        createElementVNode("view", { class: "fui-align__center" }, [
          createVNode(_component_fui_tag, {
            text: "标签一",
            "margin-bottom": "24",
            theme: "plain",
            "margin-right": "24"
          }),
          createVNode(_component_fui_tag, {
            text: "标签二",
            type: "danger",
            theme: "plain",
            "margin-bottom": "24",
            "margin-right": "24"
          }),
          createVNode(_component_fui_tag, {
            text: "标签三",
            type: "success",
            theme: "plain",
            "margin-bottom": "24",
            "margin-right": "24"
          }),
          createVNode(_component_fui_tag, {
            text: "标签四",
            type: "warning",
            theme: "plain",
            "margin-bottom": "24",
            "margin-right": "24"
          }),
          createVNode(_component_fui_tag, {
            text: "标签五",
            type: "purple",
            theme: "plain",
            "margin-bottom": "24"
          })
        ]),
        createElementVNode("u-text", { class: "fui-section__title" }, "带关闭按钮"),
        createElementVNode("view", { class: "fui-align__center" }, [
          createVNode(_component_fui_tag, {
            text: "标签一",
            theme: "light",
            "margin-right": "24",
            padding: ["12rpx", "20rpx"]
          }, {
            default: withCtx(() => [
              createElementVNode("view", { class: "fui-close__icon" }, [
                createVNode(_component_fui_icon, {
                  name: "close",
                  color: "#465CFF",
                  size: 32
                })
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_fui_tag, {
            text: "标签二",
            type: "danger",
            theme: "light",
            "margin-right": "24",
            padding: ["12rpx", "20rpx"]
          }, {
            default: withCtx(() => [
              createElementVNode("view", { class: "fui-close__icon" }, [
                createVNode(_component_fui_icon, {
                  name: "clear",
                  color: "#FF2B2B",
                  size: 32
                })
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_fui_tag, {
            text: "标签三",
            type: "success",
            theme: "light",
            "margin-right": "24",
            padding: ["12rpx", "20rpx"]
          }, {
            default: withCtx(() => [
              createElementVNode("view", { class: "fui-close__icon" }, [
                createVNode(_component_fui_icon, {
                  name: "clear-fill",
                  color: "#09BE4F",
                  size: 32
                })
              ])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        createElementVNode("u-text", { class: "fui-section__title" }, "自定义颜色、大小"),
        createElementVNode("view", { class: "fui-align__center" }, [
          createVNode(_component_fui_tag, {
            text: "标签一",
            background: "rgba(255, 43, 43, .05)",
            color: "#333",
            "margin-bottom": "24",
            "margin-right": "24"
          }),
          createVNode(_component_fui_tag, {
            text: "标签二",
            background: "#CCCCCC",
            color: "#fff",
            "margin-bottom": "24",
            "margin-right": "24"
          }),
          createVNode(_component_fui_tag, {
            text: "标签三",
            background: "rgba(255, 183, 3, .1)",
            color: "#FF2B2B",
            "margin-bottom": "24",
            scaleRatio: 0.8,
            "margin-right": "24"
          }, null, 8, ["scaleRatio"]),
          createVNode(_component_fui_tag, {
            text: "标签四",
            background: "rgba(104, 49, 255, .05)",
            color: "#181818",
            "margin-bottom": "24",
            padding: ["20rpx", "40rpx"],
            "margin-right": "24"
          }),
          createVNode(_component_fui_tag, {
            text: "标签五",
            background: "rgba(9, 190, 79, .05)",
            color: "#181818",
            "margin-bottom": "24",
            padding: ["12rpx", "24rpx"]
          })
        ])
      ])
    ])
  ]);
}
const tag = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/data/tag/tag.nvue"]]);
export {
  tag as default
};
