import { _ as _export_sfc, f as formatAppLog, r as resolveEasycom } from "../../../../uni-app.es.js";
import { _ as __easycom_0 } from "../../../../fui-section.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode, createCommentVNode, withCtx } from "vue";
import { _ as __easycom_0$1 } from "../../../../fui-text.js";
const _style_0 = { "fui-wrap": { "": { "paddingBottom": "96rpx" } } };
const _sfc_main = {
  data() {
    return {
      text: "First UI是一套超高性能、超高颜值的移动端UI综合解决方案，包含业内顶尖的组件库、强大的功能库、丰富精美的模板库，提供uni-app(完美支持nvue)、微信小程序、支付宝小程序等版本，兼顾高效率与高性能，让您的开发获得百倍提质提速！"
    };
  },
  methods: {
    handleClick(e) {
      formatAppLog("log", "at pages/component/basics/text/text.nvue:46", e);
      uni.$fui.toast("点击了~");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_section = resolveEasycom(resolveDynamicComponent("fui-section"), __easycom_0);
  const _component_fui_text = resolveEasycom(resolveDynamicComponent("fui-text"), __easycom_0$1);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("u-text", { class: "fui-page__title" }, "Text"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "Text 文本，用于包裹文本内容。")
      ]),
      createElementVNode("view", { class: "fui-page__bd fui-page__spacing" }, [
        createVNode(_component_fui_section, {
          title: "基本使用",
          "is-line": "",
          padding: ["0", "0"],
          "margin-bottom": "32"
        }),
        createVNode(_component_fui_text, {
          text: $data.text,
          size: 28
        }, null, 8, ["text"]),
        createVNode(_component_fui_section, {
          title: "不同样式类型",
          "is-line": "",
          padding: ["0", "0"],
          "margin-top": "96",
          marginBottom: "32"
        }),
        createCommentVNode(" 注：nvue 端 默认 flex-direction:column "),
        createElementVNode("view", { class: "fui-row" }, [
          createVNode(_component_fui_text, {
            text: "primary",
            type: "primary"
          }),
          createVNode(_component_fui_text, {
            text: "success",
            type: "success"
          }),
          createVNode(_component_fui_text, {
            text: "warning",
            type: "warning"
          }),
          createVNode(_component_fui_text, {
            text: "danger",
            type: "danger"
          }),
          createVNode(_component_fui_text, {
            text: "purple",
            type: "purple"
          }),
          createVNode(_component_fui_text, {
            text: "gray",
            type: "gray"
          }),
          createVNode(_component_fui_text, {
            text: "black",
            type: "black"
          })
        ]),
        createVNode(_component_fui_section, {
          title: "块状 / 自定义颜色",
          "is-line": "",
          padding: ["0", "0"],
          "margin-top": "96",
          marginBottom: "32"
        }),
        createVNode(_component_fui_text, {
          text: "block",
          color: "brown",
          block: ""
        }),
        createVNode(_component_fui_text, {
          text: "yellow",
          color: "yellow",
          block: ""
        }),
        createVNode(_component_fui_section, {
          title: "数据脱敏-姓名",
          "is-line": "",
          padding: ["0", "0"],
          "margin-top": "96",
          marginBottom: "32"
        }),
        createVNode(_component_fui_text, {
          text: "张三",
          "text-type": "name",
          format: "",
          block: ""
        }),
        createVNode(_component_fui_text, {
          text: "王小仙",
          "text-type": "name",
          format: "",
          block: ""
        }),
        createVNode(_component_fui_section, {
          title: "数据脱敏-手机号",
          "is-line": "",
          padding: ["0", "0"],
          "margin-top": "96",
          marginBottom: "32"
        }),
        createVNode(_component_fui_text, {
          text: "13544339908",
          "text-type": "mobile",
          format: ""
        }),
        createVNode(_component_fui_section, {
          title: "金额格式化",
          "is-line": "",
          padding: ["0", "0"],
          "margin-top": "96",
          marginBottom: "32"
        }),
        createVNode(_component_fui_text, {
          text: "20000",
          "text-type": "amount",
          format: ""
        }, {
          default: withCtx(() => [
            createElementVNode("u-text", null, "￥")
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_fui_section, {
          title: "点击效果",
          "is-line": "",
          padding: ["0", "0"],
          "margin-top": "96",
          marginBottom: "32"
        }),
        createVNode(_component_fui_text, {
          text: "https://firstui.cn",
          highlight: "",
          onClick: $options.handleClick
        }, null, 8, ["onClick"])
      ])
    ])
  ]);
}
const text = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/basics/text/text.nvue"]]);
export {
  text as default
};
