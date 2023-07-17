import { _ as __easycom_0 } from "../../../../fui-section.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx } from "vue";
import { _ as _export_sfc, r as resolveEasycom } from "../../../../uni-app.es.js";
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_section = resolveEasycom(resolveDynamicComponent("fui-section"), __easycom_0);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createVNode(_component_fui_section, {
        title: "Section",
        descr: "Section 标题栏，主要用于文章、列表详情等标题展示。",
        "margin-top": 52
      }),
      createElementVNode("view", { class: "fui-page__bd" }, [
        createVNode(_component_fui_section, {
          title: "装饰线条",
          isLine: "",
          "margin-top": "64"
        }),
        createVNode(_component_fui_section, {
          title: "线条宽度/颜色调整",
          "line-width": "8rpx",
          "line-color": "#FF2B2B",
          isLine: "",
          "margin-top": "96"
        }),
        createVNode(_component_fui_section, {
          title: "标题/无线条/带描述",
          descr: "我是描述文本~",
          "margin-top": "96"
        }),
        createVNode(_component_fui_section, {
          padding: ["32rpx", "32rpx"],
          background: "#fff",
          title: "设置背景",
          isLine: "",
          "margin-top": "96"
        }),
        createVNode(_component_fui_section, {
          title: "插槽使用/加图标",
          "margin-top": "64"
        }, {
          right: withCtx(() => [
            createElementVNode("u-image", {
              class: "fui-vip__icon",
              src: "/static/images/index/light/icon_member_3x.png"
            })
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_fui_section, {
          title: "线条渐变色/调整字体大小",
          "line-width": "3px",
          size: "48",
          isLine: "",
          "line-color": "linear-gradient(to bottom , #FFB703, #FF416C)",
          "margin-top": "96"
        })
      ])
    ])
  ]);
}
const section = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/layout/section/section.nvue"]]);
export {
  section as default
};
