import { _ as __easycom_0 } from "../../../../fui-badge.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, createCommentVNode } from "vue";
import { _ as _export_sfc, r as resolveEasycom } from "../../../../uni-app.es.js";
import { _ as __easycom_2 } from "../../../../fui-list-cell.js";
const _style_0 = { "fui-section__title": { "": { "marginLeft": "32rpx" } }, "fui-list__item": { "": { "flex": 1, "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between" } }, "fui-item__img-box": { "": { "position": "relative", "marginRight": "24rpx", "paddingTop": "8rpx", "paddingRight": "8rpx", "paddingBottom": "8rpx", "paddingLeft": 0 } }, "fui-item__img": { "": { "width": "96rpx", "height": "96rpx" } } };
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_badge = resolveEasycom(resolveDynamicComponent("fui-badge"), __easycom_0);
  const _component_fui_list_cell = resolveEasycom(resolveDynamicComponent("fui-list-cell"), __easycom_2);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("u-text", { class: "fui-page__title" }, "Badge"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "Badge 徽章，可自定义颜色。")
      ]),
      createElementVNode("view", { class: "fui-page__bd" }, [
        createElementVNode("u-text", { class: "fui-section__title fui-mtop--0" }, "基础使用"),
        createVNode(_component_fui_list_cell, { highlight: false }, {
          default: withCtx(() => [
            createVNode(_component_fui_badge, { value: "1" }),
            createVNode(_component_fui_badge, {
              type: "success",
              value: "2"
            }),
            createVNode(_component_fui_badge, {
              type: "warning",
              value: "3"
            }),
            createVNode(_component_fui_badge, {
              type: "danger",
              value: "4"
            }),
            createVNode(_component_fui_badge, {
              type: "purple",
              value: "5"
            }),
            createVNode(_component_fui_badge, {
              value: "6",
              background: "#eee",
              color: "#333"
            }),
            createVNode(_component_fui_badge, { dot: "" }),
            createVNode(_component_fui_badge, {
              type: "success",
              dot: ""
            }),
            createVNode(_component_fui_badge, {
              type: "warning",
              dot: ""
            }),
            createVNode(_component_fui_badge, {
              type: "danger",
              dot: ""
            }),
            createVNode(_component_fui_badge, {
              type: "purple",
              dot: ""
            })
          ]),
          _: 1
          /* STABLE */
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "新消息"),
        createVNode(_component_fui_list_cell, {
          arrow: "",
          topBorder: ""
        }, {
          default: withCtx(() => [
            createElementVNode("view", { class: "fui-list__item" }, [
              createElementVNode("u-text", { class: "fui-text" }, "单行列表"),
              createVNode(_component_fui_badge, {
                value: "1",
                type: "danger"
              })
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_fui_list_cell, { arrow: "" }, {
          default: withCtx(() => [
            createElementVNode("view", { class: "fui-list__item" }, [
              createElementVNode("u-text", { class: "fui-text" }, "单行列表"),
              createVNode(_component_fui_badge, {
                dot: "",
                type: "danger"
              })
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_fui_list_cell, { arrow: "" }, {
          default: withCtx(() => [
            createElementVNode("view", { class: "fui-align__center" }, [
              createElementVNode("u-text", { class: "fui-text" }, "单行列表"),
              createVNode(_component_fui_badge, {
                type: "danger",
                marginLeft: 16,
                value: "8"
              })
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_fui_list_cell, {
          arrow: "",
          bottomLeft: 0
        }, {
          default: withCtx(() => [
            createElementVNode("view", { class: "fui-align__center" }, [
              createElementVNode("u-text", { class: "fui-text" }, "单行列表"),
              createVNode(_component_fui_badge, {
                type: "danger",
                marginLeft: 16,
                value: "new"
              })
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "新消息、绝对定位"),
        createVNode(_component_fui_list_cell, {
          topBorder: "",
          padding: ["24rpx", "32rpx"]
        }, {
          default: withCtx(() => [
            createCommentVNode(" 注: nvue android 端元素默认超出隐藏，badge请勿超出父级元素 "),
            createElementVNode("view", { class: "fui-align__center" }, [
              createElementVNode("view", { class: "fui-item__img-box" }, [
                createElementVNode("u-image", {
                  class: "fui-item__img",
                  src: "/static/images/common/icon_tabbar_3x.png",
                  mode: "widthFix"
                }),
                createVNode(_component_fui_badge, {
                  absolute: "",
                  type: "danger",
                  value: 2,
                  top: "0",
                  right: "0"
                })
              ]),
              createElementVNode("view", null, [
                createElementVNode("u-text", { class: "fui-text" }, "联系人名称"),
                createElementVNode("u-text", { class: "fui-page__desc" }, "摘要信息")
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_fui_list_cell, {
          bottomLeft: 0,
          padding: ["24rpx", "32rpx"]
        }, {
          default: withCtx(() => [
            createElementVNode("view", { class: "fui-align__center" }, [
              createElementVNode("view", { class: "fui-item__img-box" }, [
                createElementVNode("u-image", {
                  class: "fui-item__img",
                  src: "/static/images/common/icon_tabbar_3x.png",
                  mode: "widthFix"
                }),
                createVNode(_component_fui_badge, {
                  absolute: "",
                  type: "danger",
                  dot: "",
                  top: "0",
                  right: "0"
                })
              ]),
              createElementVNode("view", null, [
                createElementVNode("u-text", { class: "fui-text" }, "联系人名称"),
                createElementVNode("u-text", { class: "fui-page__desc" }, "摘要信息")
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ])
  ]);
}
const badge = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/data/badge/badge.nvue"]]);
export {
  badge as default
};
