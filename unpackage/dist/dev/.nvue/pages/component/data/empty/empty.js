import { _ as __easycom_0 } from "../../../../fui-button.js";
import { openBlock, createElementBlock, normalizeClass, normalizeStyle, createCommentVNode, toDisplayString, renderSlot, resolveDynamicComponent, createElementVNode, createVNode, withCtx } from "vue";
import { _ as _export_sfc, r as resolveEasycom } from "../../../../uni-app.es.js";
const _style_0 = { "fui-empty__wrap": { "": { "flex": 1, "flexDirection": "column", "alignItems": "center", "justifyContent": "center" } }, "fui-empty__fixed": { "": { "position": "fixed", "left": 0, "top": 0, "right": 0, "bottom": 0, "zIndex": 99 } }, "fui-empty__title": { "": { "textAlign": "center", "fontWeight": "500", "paddingTop": "48rpx" } }, "fui-empty__desc": { "": { "textAlign": "center", "fontWeight": "normal", "paddingTop": "8rpx" } } };
const _sfc_main$1 = {
  name: "fui-empty",
  props: {
    src: {
      type: String,
      default: ""
    },
    width: {
      type: [Number, String],
      default: 576
    },
    height: {
      type: [Number, String],
      default: 318
    },
    title: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#333333"
    },
    size: {
      type: [Number, String],
      default: 32
    },
    descr: {
      type: String,
      default: ""
    },
    descrColor: {
      type: String,
      default: "#B2B2B2"
    },
    descrSize: {
      type: [Number, String],
      default: 24
    },
    isFixed: {
      type: Boolean,
      default: false
    },
    marginTop: {
      type: [Number, String],
      default: 0
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["fui-empty__wrap", { "fui-empty__fixed": $props.isFixed }]),
      style: normalizeStyle({ marginTop: $props.marginTop + "rpx" }),
      renderWhole: true
    },
    [
      $props.src ? (openBlock(), createElementBlock("u-image", {
        key: 0,
        src: $props.src,
        style: normalizeStyle({ width: $props.width + "rpx", height: $props.height + "rpx" }),
        mode: "widthFix"
      }, null, 12, ["src"])) : createCommentVNode("v-if", true),
      $props.title ? (openBlock(), createElementBlock(
        "u-text",
        {
          key: 1,
          class: normalizeClass(["fui-empty__title", { "fui-empty__title-color": !$props.color }]),
          style: normalizeStyle({ color: $props.color, fontSize: $props.size + "rpx" })
        },
        toDisplayString($props.title),
        7
        /* TEXT, CLASS, STYLE */
      )) : createCommentVNode("v-if", true),
      $props.descr ? (openBlock(), createElementBlock(
        "u-text",
        {
          key: 2,
          class: normalizeClass(["fui-empty__desc", { "fui-empty__descr-color": !$props.descrColor }]),
          style: normalizeStyle({ color: $props.descrColor, fontSize: $props.descrSize + "rpx" })
        },
        toDisplayString($props.descr),
        7
        /* TEXT, CLASS, STYLE */
      )) : createCommentVNode("v-if", true),
      renderSlot(_ctx.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-empty/fui-empty.vue"]]);
const _sfc_main = {
  data() {
    return {
      resUrl: ""
    };
  },
  onLoad() {
    setTimeout(() => {
      this.resUrl = uni.fui.resUrl();
    }, 50);
  },
  methods: {
    goIndex() {
      uni.fui.href("/pages/tabbar/index/index", true);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_button = resolveEasycom(resolveDynamicComponent("fui-button"), __easycom_0);
  const _component_fui_empty = resolveEasycom(resolveDynamicComponent("fui-empty"), __easycom_1);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("u-text", { class: "fui-page__title" }, "Empty"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "Empty 缺省页，页面的信息内容为空或信息响应异常的状态。")
      ]),
      createElementVNode("view", { class: "fui-page__bd" }, [
        createVNode(_component_fui_empty, {
          src: `${$data.resUrl}/component/empty/img_data_3x.png`,
          title: "暂无数据",
          descr: "功能开发中，敬请期待！"
        }, {
          default: withCtx(() => [
            createVNode(_component_fui_button, {
              text: "返回首页",
              size: 28,
              width: "336rpx",
              height: "84rpx",
              radius: "100rpx",
              background: "#fff",
              margin: ["64rpx", "0"],
              borderColor: "#465CFF",
              color: "#465CFF",
              onClick: $options.goIndex
            }, null, 8, ["onClick"])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["src"]),
        createVNode(_component_fui_empty, {
          src: `${$data.resUrl}/component/empty/img_news_3x.png`,
          title: "暂无新消息",
          marginTop: "64"
        }, null, 8, ["src"]),
        createVNode(_component_fui_empty, {
          src: `${$data.resUrl}/component/empty/img_address_3x.png`,
          title: "暂无地址信息",
          marginTop: "64"
        }, null, 8, ["src"]),
        createVNode(_component_fui_empty, {
          src: `${$data.resUrl}/component/empty/img_network_3x.png`,
          title: "请检查网络设置！",
          marginTop: "64"
        }, null, 8, ["src"]),
        createVNode(_component_fui_empty, {
          src: `${$data.resUrl}/component/empty/img_order_3x.png`,
          title: "暂无订单",
          marginTop: "64"
        }, null, 8, ["src"]),
        createVNode(_component_fui_empty, {
          src: `${$data.resUrl}/component/empty/img_search_3x.png`,
          title: "没有找到搜索的内容额~",
          marginTop: "64"
        }, null, 8, ["src"])
      ])
    ])
  ]);
}
const empty = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/data/empty/empty.nvue"]]);
export {
  empty as default
};
