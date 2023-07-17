import { _ as __easycom_0 } from "../../../../fui-section.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode, createCommentVNode, withCtx } from "vue";
import { _ as _export_sfc, r as resolveEasycom } from "../../../../uni-app.es.js";
import { _ as __easycom_0$1 } from "../../../../fui-button.js";
import { _ as __easycom_0$2 } from "../../../../fui-text.js";
const _style_0 = { "fui-color__white": { "": { "color": "#FFFFFF", "fontSize": "32rpx" } } };
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    btnClick() {
      uni.$fui.toast("click~");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_section = resolveEasycom(resolveDynamicComponent("fui-section"), __easycom_0);
  const _component_fui_button = resolveEasycom(resolveDynamicComponent("fui-button"), __easycom_0$1);
  const _component_fui_text = resolveEasycom(resolveDynamicComponent("fui-text"), __easycom_0$2);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("u-text", { class: "fui-page__title" }, "Button"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "Button 按钮，支持自定义大小、颜色等。")
      ]),
      createElementVNode("view", { class: "fui-page__bd fui-page__spacing" }, [
        createVNode(_component_fui_section, {
          title: "按钮类型",
          padding: ["0", "0"],
          "margin-bottom": "32",
          "is-line": ""
        }),
        createVNode(_component_fui_button, {
          text: "默认按钮",
          onClick: $options.btnClick
        }, null, 8, ["onClick"]),
        createCommentVNode(" 注：nvue端使用插槽文本样式需自行定义，且需text 标签 包裹 "),
        createVNode(_component_fui_button, {
          margin: ["24rpx"],
          type: "success"
        }, {
          default: withCtx(() => [
            createVNode(_component_fui_text, {
              color: "#fff",
              text: "success"
            })
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_fui_button, { type: "warning" }, {
          default: withCtx(() => [
            createElementVNode("u-text", { class: "fui-color__white" }, "warning")
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_fui_button, {
          margin: ["24rpx"],
          type: "danger",
          text: "danger"
        }),
        createVNode(_component_fui_button, {
          type: "purple",
          text: "purple"
        }),
        createVNode(_component_fui_button, {
          margin: ["24rpx"],
          type: "link",
          color: "#465CFF",
          text: "链接 link"
        }),
        createVNode(_component_fui_section, {
          title: "禁用状态",
          padding: ["0", "0"],
          "margin-bottom": "32",
          "margin-top": "96"
        }),
        createVNode(_component_fui_button, {
          disabled: "",
          text: "禁用按钮"
        }),
        createVNode(_component_fui_button, {
          margin: ["24rpx"],
          disabled: "",
          loading: "",
          text: "禁用按钮"
        }),
        createVNode(_component_fui_button, {
          disabled: "",
          disabledBackground: "#F8F8F8",
          disabledColor: "#CCCCCC",
          text: "禁用按钮"
        }),
        createVNode(_component_fui_section, {
          title: "按钮形状",
          padding: ["0", "0"],
          "margin-bottom": "32",
          "margin-top": "96",
          "is-line": ""
        }),
        createVNode(_component_fui_button, {
          radius: "0",
          text: "方形按钮"
        }),
        createVNode(_component_fui_button, {
          radius: "96rpx",
          margin: ["24rpx"],
          text: "圆形按钮"
        }),
        createVNode(_component_fui_section, {
          title: "按钮大小",
          padding: ["0", "0"],
          "margin-bottom": "32",
          "margin-top": "96",
          "is-line": ""
        }),
        createVNode(_component_fui_button, {
          "btn-size": "medium",
          text: "medium"
        }),
        createVNode(_component_fui_button, {
          type: "warning",
          margin: ["24rpx"],
          "btn-size": "small",
          text: "small"
        }),
        createVNode(_component_fui_button, {
          type: "danger",
          "btn-size": "mini",
          text: "mini"
        }),
        createVNode(_component_fui_section, {
          title: "自定义按钮大小",
          padding: ["0", "0"],
          "margin-bottom": "32",
          "margin-top": "96",
          "is-line": ""
        }),
        createVNode(_component_fui_button, {
          plain: "",
          color: "#465CFF",
          borderColor: "#465CFF",
          text: "默认大小"
        }),
        createVNode(_component_fui_button, {
          type: "purple",
          margin: ["24rpx"],
          width: "224rpx",
          height: "84rpx",
          size: 28,
          text: "小型按钮"
        }),
        createVNode(_component_fui_button, {
          type: "danger",
          width: "200rpx",
          height: "72rpx",
          size: 28,
          text: "小型按钮"
        }),
        createVNode(_component_fui_section, {
          title: "自定义颜色",
          padding: ["0", "0"],
          "margin-bottom": "32",
          "margin-top": "96",
          "is-line": ""
        }),
        createVNode(_component_fui_button, {
          background: "#fff",
          color: "#465CFF",
          borderColor: "#465CFF",
          text: "朴素按钮"
        }),
        createVNode(_component_fui_button, {
          margin: ["24rpx"],
          background: "#fff",
          color: "#6831FF",
          borderColor: "#6831FF",
          text: "朴素按钮"
        }),
        createVNode(_component_fui_button, {
          background: "linear-gradient(to bottom right, #6831FF, #465CFF)",
          "border-width": "0",
          text: "渐变按钮"
        }),
        createVNode(_component_fui_button, {
          margin: ["24rpx"],
          background: "linear-gradient(to bottom right, #FF416C, #FF2B2B)",
          "border-width": "0",
          text: "渐变按钮"
        })
      ])
    ])
  ]);
}
const button = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/basics/button/button.nvue"]]);
export {
  button as default
};
