import { _ as _export_sfc, f as formatAppLog, r as resolveEasycom } from "../../../../uni-app.es.js";
import { _ as __easycom_0, a as __easycom_2$1 } from "../../../../fui-radio-group.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, Fragment, renderList, createBlock, toDisplayString } from "vue";
import { _ as __easycom_2 } from "../../../../fui-label.js";
import { _ as __easycom_2$2 } from "../../../../fui-list-cell.js";
const _style_0 = { "fui-section__title": { "": { "marginLeft": "32rpx" } }, "fui-list__item": { "": { "flexDirection": "row", "alignItems": "center", "backgroundColor": "#FFFFFF", "paddingTop": "28rpx", "paddingRight": "32rpx", "paddingBottom": "28rpx", "paddingLeft": "32rpx" } }, "fui-text": { "": { "fontSize": "30rpx", "paddingLeft": "16rpx" } }, "fui-list__cell": { "": { "flex": 1, "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between" } } };
const _sfc_main = {
  data() {
    return {
      val: "1",
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
      ]
    };
  },
  methods: {
    change(e) {
      formatAppLog("log", "at pages/component/form/radio/radio.nvue:105", "change:" + e.detail.value);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_radio = resolveEasycom(resolveDynamicComponent("fui-radio"), __easycom_0);
  const _component_fui_label = resolveEasycom(resolveDynamicComponent("fui-label"), __easycom_2);
  const _component_fui_radio_group = resolveEasycom(resolveDynamicComponent("fui-radio-group"), __easycom_2$1);
  const _component_fui_list_cell = resolveEasycom(resolveDynamicComponent("fui-list-cell"), __easycom_2$2);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("u-text", { class: "fui-page__title" }, "Radio"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "Radio 单项选择器。")
      ]),
      createElementVNode("view", { class: "fui-page__bd" }, [
        createElementVNode("u-text", { class: "fui-section__title fui-mtop--0" }, "基本使用"),
        createVNode(_component_fui_radio_group, {
          name: "radio",
          modelValue: $data.val,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.val = $event),
          onChange: $options.change
        }, {
          default: withCtx(() => [
            createElementVNode("view", { class: "fui-list__item" }, [
              createVNode(_component_fui_label, null, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "fui-align__center" }, [
                    createVNode(_component_fui_radio, { value: "1" }),
                    createElementVNode("u-text", { class: "fui-text" }, "选中")
                  ])
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_fui_label, { margin: ["0", "0", "0", "40rpx"] }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "fui-align__center" }, [
                    createVNode(_component_fui_radio, { value: "2" }),
                    createElementVNode("u-text", { class: "fui-text" }, "未选中")
                  ])
                ]),
                _: 1
                /* STABLE */
              })
            ])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue", "onChange"]),
        createElementVNode("u-text", { class: "fui-section__title" }, "推荐布局"),
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
                                value: item.value,
                                color: "#FFB703",
                                borderColor: "#B2B2B2"
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
        createElementVNode("u-text", { class: "fui-section__title" }, "推荐布局"),
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
                            createElementVNode("view", { class: "fui-list__cell" }, [
                              createElementVNode(
                                "u-text",
                                null,
                                toDisplayString(item.name),
                                1
                                /* TEXT */
                              ),
                              createVNode(_component_fui_radio, {
                                checked: item.checked,
                                value: item.value
                              }, null, 8, ["checked", "value"])
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
        createElementVNode("u-text", { class: "fui-section__title" }, "推荐布局"),
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
                            createElementVNode("view", { class: "fui-list__cell" }, [
                              createElementVNode(
                                "u-text",
                                null,
                                toDisplayString(item.name),
                                1
                                /* TEXT */
                              ),
                              createVNode(_component_fui_radio, {
                                isCheckMark: "",
                                checkMarkColor: "#FF2B2B",
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
        createElementVNode("u-text", { class: "fui-section__title" }, "修改圆角值"),
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
                                value: item.value,
                                color: "#FFB703",
                                borderColor: "#B2B2B2",
                                borderRadius: "8rpx"
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
        })
      ])
    ])
  ]);
}
const radio = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/form/radio/radio.nvue"]]);
export {
  radio as default
};
