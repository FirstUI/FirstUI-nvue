import { openBlock, createElementBlock, normalizeStyle, createElementVNode, renderSlot, toDisplayString, createCommentVNode, resolveDynamicComponent, createVNode, withCtx } from "vue";
import { _ as _export_sfc, r as resolveEasycom } from "../../../../uni-app.es.js";
import { _ as __easycom_1 } from "../../../../fui-icon.js";
const _style_0$1 = { "fui-divider__wrap": { "": { "position": "relative", "textAlign": "center", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "overflow": "hidden" } }, "fui-divider__line": { "": { "position": "absolute", "height": 0.5 } }, "fui-divider__text-box": { "": { "position": "relative", "textAlign": "center", "paddingTop": 0, "paddingRight": "6rpx", "paddingBottom": 0, "paddingLeft": "6rpx", "zIndex": 1, "flexDirection": "row", "alignItems": "center", "justifyContent": "center" } }, "fui-divider__text": { "": { "paddingTop": 0, "paddingRight": "12rpx", "paddingBottom": 0, "paddingLeft": "12rpx" } } };
const _sfc_main$1 = {
  name: "fui-divider",
  props: {
    text: {
      type: String,
      default: ""
    },
    //divider占据高度，单位rpx
    height: {
      type: [Number, String],
      default: 100
    },
    //divider宽度
    width: {
      type: String,
      default: "400rpx"
    },
    //divider颜色
    dividerColor: {
      type: String,
      default: "#CCCCCC"
    },
    //文字颜色
    color: {
      type: String,
      default: "#B2B2B2"
    },
    //文字大小 rpx
    size: {
      type: [Number, String],
      default: 24
    },
    fontWeight: {
      type: [Number, String],
      default: 400
    },
    //背景颜色，和当前页面背景色保持一致
    backgroundColor: {
      type: String,
      default: "#F1F4FA"
    }
  },
  computed: {
    getTop() {
      return Number(this.height) / 2 + "rpx";
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: "fui-divider__wrap",
      style: normalizeStyle({ height: $props.height + "rpx" }),
      renderWhole: true
    },
    [
      createElementVNode(
        "view",
        {
          class: "fui-divider__line",
          style: normalizeStyle({ width: $props.width, background: $props.dividerColor, top: $options.getTop })
        },
        null,
        4
        /* STYLE */
      ),
      createElementVNode(
        "view",
        {
          class: "fui-divider__text-box",
          style: normalizeStyle({ backgroundColor: $props.backgroundColor })
        },
        [
          renderSlot(_ctx.$slots, "default"),
          $props.text ? (openBlock(), createElementBlock(
            "u-text",
            {
              key: 0,
              class: "fui-divider__text",
              style: normalizeStyle({ fontWeight: $props.fontWeight, color: $props.color, fontSize: $props.size + "rpx", lineHeight: $props.size + "rpx" })
            },
            toDisplayString($props.text),
            5
            /* TEXT, STYLE */
          )) : createCommentVNode("v-if", true)
        ],
        4
        /* STYLE */
      )
    ],
    4
    /* STYLE */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-divider/fui-divider.vue"]]);
const _style_0 = { "fui-text": { "": { "fontSize": "24rpx", "paddingLeft": "8rpx" } } };
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_divider = resolveEasycom(resolveDynamicComponent("fui-divider"), __easycom_0);
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
        createElementVNode("u-text", { class: "fui-page__title" }, "Divider"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "Divider 分割线，可自定义线条宽度、颜色等。")
      ]),
      createElementVNode("view", { class: "fui-page__bd" }, [
        createVNode(_component_fui_divider, { text: "没有更多了" }),
        createVNode(_component_fui_divider, {
          dividerColor: "#465CFF",
          text: "没有更多了"
        }),
        createVNode(_component_fui_divider, {
          dividerColor: "#FFB703",
          color: "#FFB703",
          text: "没有更多了"
        }),
        createVNode(_component_fui_divider, {
          dividerColor: "#09BE4F",
          color: "#09BE4F",
          width: "750rpx",
          text: "没有更多了"
        }),
        createVNode(_component_fui_divider, {
          dividerColor: "linear-gradient(to top,#eee,#ccc)",
          text: "没有更多了"
        }),
        createVNode(_component_fui_divider, { text: "已加载完全部数据" }),
        createVNode(_component_fui_divider, null, {
          default: withCtx(() => [
            createElementVNode("view", { class: "fui-flex__center" }, [
              createVNode(_component_fui_icon, {
                name: "like",
                color: "#FF2B2B",
                size: 40
              }),
              createElementVNode("u-text", { class: "fui-text" }, "猜你喜欢")
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_fui_divider, null, {
          default: withCtx(() => [
            createElementVNode("view", { class: "fui-flex__center" }, [
              createVNode(_component_fui_icon, {
                name: "fabulous",
                color: "#FFB703",
                size: 40
              }),
              createElementVNode("u-text", { class: "fui-text" }, "好物推荐")
            ])
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ])
  ]);
}
const divider = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/data/divider/divider.nvue"]]);
export {
  divider as default
};
