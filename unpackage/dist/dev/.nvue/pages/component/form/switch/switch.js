import { _ as __easycom_0 } from "../../../../fui-switch.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, toDisplayString } from "vue";
import { _ as _export_sfc, r as resolveEasycom } from "../../../../uni-app.es.js";
import { _ as __easycom_2 } from "../../../../fui-list-cell.js";
import { _ as __easycom_2$1 } from "../../../../fui-label.js";
const _style_0 = { "fui-section__title": { "": { "marginLeft": "32rpx" } }, "fui-cells": { "": { "flex": 1, "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between" } } };
const _sfc_main = {
  data() {
    return {
      status: false
    };
  },
  methods: {
    change(e) {
      this.status = e.detail.value;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_switch = resolveEasycom(resolveDynamicComponent("fui-switch"), __easycom_0);
  const _component_fui_list_cell = resolveEasycom(resolveDynamicComponent("fui-list-cell"), __easycom_2);
  const _component_fui_label = resolveEasycom(resolveDynamicComponent("fui-label"), __easycom_2$1);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("u-text", { class: "fui-page__title" }, "Switch"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "Switch 开关选择器，原生组件增强。")
      ]),
      createElementVNode("view", { class: "fui-page__bd" }, [
        createElementVNode("u-text", { class: "fui-section__title fui-mtop--0" }, "基础使用"),
        createVNode(_component_fui_list_cell, {
          highlight: false,
          padding: ["28rpx", "32rpx"]
        }, {
          default: withCtx(() => [
            createElementVNode("view", { class: "fui-cells" }, [
              createElementVNode(
                "u-text",
                { class: "fui-text" },
                "状态：" + toDisplayString($data.status ? "ON" : "OFF"),
                1
                /* TEXT */
              ),
              createVNode(_component_fui_switch, { onChange: $options.change }, null, 8, ["onChange"])
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "默认打开"),
        createVNode(_component_fui_list_cell, {
          highlight: false,
          padding: ["28rpx", "32rpx"]
        }, {
          default: withCtx(() => [
            createElementVNode("view", { class: "fui-cells" }, [
              createElementVNode("u-text", null, "checked"),
              createVNode(_component_fui_switch, { checked: "" })
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "禁用状态"),
        createVNode(_component_fui_list_cell, {
          highlight: false,
          padding: ["28rpx", "32rpx"]
        }, {
          default: withCtx(() => [
            createElementVNode("view", { class: "fui-cells" }, [
              createElementVNode("u-text", null, "checked/disabled"),
              createVNode(_component_fui_switch, {
                checked: "",
                disabled: ""
              })
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "改变大小、颜色"),
        createVNode(_component_fui_label, null, {
          default: withCtx(() => [
            createVNode(_component_fui_list_cell, null, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-cells" }, [
                  createElementVNode("u-text", null, "scaleRatio"),
                  createVNode(_component_fui_switch, {
                    scaleRatio: 0.8,
                    color: "#FFB703"
                  }, null, 8, ["scaleRatio"])
                ])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "展示为checkbox"),
        createVNode(_component_fui_label, null, {
          default: withCtx(() => [
            createVNode(_component_fui_list_cell, null, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-cells" }, [
                  createElementVNode("u-text", { class: "fui-text" }, "type=checkbox"),
                  createVNode(_component_fui_switch, {
                    type: "checkbox",
                    color: "#FFB703",
                    scaleRatio: 1.1
                  }, null, 8, ["scaleRatio"])
                ])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ])
  ]);
}
const _switch = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/form/switch/switch.nvue"]]);
export {
  _switch as default
};
