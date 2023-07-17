import { _ as __easycom_0, a as __easycom_2$2 } from "../../../../fui-radio-group.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, Fragment, renderList, createBlock, toDisplayString } from "vue";
import { _ as _export_sfc, r as resolveEasycom } from "../../../../uni-app.es.js";
import { _ as __easycom_2 } from "../../../../fui-list-cell.js";
import { _ as __easycom_2$1 } from "../../../../fui-label.js";
import { _ as __easycom_0$1, a as __easycom_2$3 } from "../../../../fui-checkbox-group.js";
import { _ as __easycom_0$2 } from "../../../../fui-switch.js";
const _style_0 = { "fui-section__title": { "": { "marginLeft": "32rpx" } }, "fui-text": { "": { "fontSize": "30rpx", "paddingLeft": "16rpx" } }, "fui-list__cell": { "": { "flex": 1, "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between" } }, "fui-text--size": { "": { "fontSize": "32rpx" } } };
const _sfc_main = {
  data() {
    return {
      radioItems: [
        {
          name: "小于18岁",
          value: "1",
          checked: true
        },
        {
          name: "18~28岁",
          value: "2",
          checked: false
        },
        {
          name: "29~40岁",
          value: "3",
          checked: false
        }
      ],
      checkboxItems: [
        {
          name: "篮球",
          value: "1",
          checked: true
        },
        {
          name: "羽毛球",
          value: "2",
          checked: false
        },
        {
          name: "乒乓球",
          value: "3",
          checked: false
        }
      ]
    };
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_radio = resolveEasycom(resolveDynamicComponent("fui-radio"), __easycom_0);
  const _component_fui_list_cell = resolveEasycom(resolveDynamicComponent("fui-list-cell"), __easycom_2);
  const _component_fui_label = resolveEasycom(resolveDynamicComponent("fui-label"), __easycom_2$1);
  const _component_fui_radio_group = resolveEasycom(resolveDynamicComponent("fui-radio-group"), __easycom_2$2);
  const _component_fui_checkbox = resolveEasycom(resolveDynamicComponent("fui-checkbox"), __easycom_0$1);
  const _component_fui_checkbox_group = resolveEasycom(resolveDynamicComponent("fui-checkbox-group"), __easycom_2$3);
  const _component_fui_switch = resolveEasycom(resolveDynamicComponent("fui-switch"), __easycom_0$2);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("u-text", { class: "fui-page__title" }, "Label"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "Label 标签，用来改进表单组件的可用性，将控件放在该标签下，当点击时，就会触发对应的控件。")
      ]),
      createElementVNode("view", { class: "fui-page__bd" }, [
        createElementVNode("u-text", { class: "fui-section__title fui-mtop--0" }, "Radio 单项选择器"),
        createVNode(_component_fui_radio_group, null, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($data.radioItems, (item, index) => {
                return openBlock(), createBlock(
                  _component_fui_label,
                  { key: index },
                  {
                    default: withCtx(() => [
                      createVNode(
                        _component_fui_list_cell,
                        null,
                        {
                          default: withCtx(() => [
                            createElementVNode("view", { class: "fui-align__center" }, [
                              createVNode(_component_fui_radio, {
                                checked: item.checked,
                                value: item.value
                              }, null, 8, ["checked", "value"]),
                              createElementVNode(
                                "u-text",
                                { class: "fui-text" },
                                toDisplayString(item.name),
                                1
                                /* TEXT */
                              )
                            ])
                          ]),
                          _: 2
                          /* DYNAMIC */
                        },
                        1024
                        /* DYNAMIC_SLOTS */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1024
                  /* DYNAMIC_SLOTS */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "Checkbox 多项选择器"),
        createVNode(_component_fui_checkbox_group, null, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($data.checkboxItems, (item, index) => {
                return openBlock(), createBlock(
                  _component_fui_label,
                  { key: index },
                  {
                    default: withCtx(() => [
                      createVNode(
                        _component_fui_list_cell,
                        null,
                        {
                          default: withCtx(() => [
                            createElementVNode("view", { class: "fui-list__cell" }, [
                              createElementVNode(
                                "u-text",
                                null,
                                toDisplayString(item.name),
                                1
                                /* TEXT */
                              ),
                              createVNode(_component_fui_checkbox, {
                                isCheckMark: "",
                                checkMarkColor: "#FFB703",
                                scaleRatio: 1.3,
                                checked: item.checked,
                                value: item.value
                              }, null, 8, ["scaleRatio", "checked", "value"])
                            ])
                          ]),
                          _: 2
                          /* DYNAMIC */
                        },
                        1024
                        /* DYNAMIC_SLOTS */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1024
                  /* DYNAMIC_SLOTS */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "Switch 开关选择器"),
        createVNode(_component_fui_label, null, {
          default: withCtx(() => [
            createVNode(_component_fui_list_cell, null, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-list__cell" }, [
                  createElementVNode("u-text", { class: "fui-text--size" }, "scaleRatio"),
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
        createVNode(_component_fui_label, null, {
          default: withCtx(() => [
            createVNode(_component_fui_list_cell, null, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-list__cell" }, [
                  createElementVNode("u-text", { class: "fui-text--size" }, "type=checkbox"),
                  createVNode(_component_fui_switch, {
                    type: "checkbox",
                    color: "#09BE4F",
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
const label = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/form/label/label.nvue"]]);
export {
  label as default
};
