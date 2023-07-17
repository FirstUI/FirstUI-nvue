import { _ as __easycom_2$1 } from "../../../../fui-list-cell.js";
import { openBlock, createElementBlock, normalizeStyle, createElementVNode, toDisplayString, createCommentVNode, normalizeClass, renderSlot, resolveDynamicComponent, createVNode, withCtx } from "vue";
import { _ as _export_sfc, r as resolveEasycom } from "../../../../uni-app.es.js";
import { _ as __easycom_0 } from "../../../../fui-badge.js";
const _style_0$1 = { "fui-list__wrap": { "": { "flex": 1 } }, "fui-list__title": { "": { "lineHeight": 1 } }, "fui-list__footer": { "": { "lineHeight": 1 } }, "fui-list__container": { "": { "position": "relative", "flex": 1 } }, "fui-list__border-top": { "": { "position": "absolute", "top": 0, "height": 0.5, "zIndex": -1 } }, "fui-list__border-bottom": { "": { "position": "absolute", "bottom": 0, "height": 0.5, "zIndex": -1 } } };
const _sfc_main$1 = {
  name: "fui-list",
  props: {
    //fui-list margin-top值,单位rpx
    marginTop: {
      type: [Number, String],
      default: 0
    },
    //标题
    title: {
      type: String,
      default: ""
    },
    //标题颜色
    color: {
      type: String,
      default: "#7F7F7F"
    },
    //标题字体大小 单位rpx
    size: {
      type: [Number, String],
      default: 28
    },
    //标题padding值['32rpx','32rpx','20rpx','32rpx'] 上、右、下、左
    padding: {
      type: Array,
      default() {
        return ["32rpx", "32rpx", "20rpx", "32rpx"];
      }
    },
    //标题背景色
    background: {
      type: String,
      default: "transparent"
    },
    //底部说明文字
    footer: {
      type: String,
      default: ""
    },
    //底部说明文字颜色
    footerColor: {
      type: String,
      default: "#7F7F7F"
    },
    //底部说明文字大小 单位rpx
    footerSize: {
      type: [Number, String],
      default: 28
    },
    //底部说明文本padding值['20rpx','32rpx','0','32rpx'] 上、右、下、左
    footerPadding: {
      type: Array,
      default() {
        return ["20rpx", "32rpx", "0"];
      }
    },
    //是否显示上边框
    topBorder: {
      type: Boolean,
      default: true
    },
    //是否显示下边框
    bottomBorder: {
      type: Boolean,
      default: false
    },
    //边框颜色，非nvue下传值则全局默认样式失效
    borderColor: {
      type: String,
      default: "#EEEEEE"
    },
    //上边框left值，单位rpx
    topLeft: {
      type: [Number, String],
      default: 0
    },
    //上边框right值，单位rpx
    topRight: {
      type: [Number, String],
      default: 0
    },
    //下边框left值，单位rpx
    bottomLeft: {
      type: [Number, String],
      default: 0
    },
    //下边框right值，单位rpx
    bottomRight: {
      type: [Number, String],
      default: 0
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: "fui-list__wrap",
      style: normalizeStyle({ marginTop: $props.marginTop + "rpx" }),
      renderWhole: true
    },
    [
      $props.title ? (openBlock(), createElementBlock(
        "view",
        {
          key: 0,
          class: "fui-list__title",
          style: normalizeStyle({ paddingTop: $props.padding[0] || 0, paddingRight: $props.padding[1] || 0, paddingBottom: $props.padding[2] || $props.padding[0] || 0, paddingLeft: $props.padding[3] || $props.padding[1] || 0, background: $props.background })
        },
        [
          createElementVNode(
            "u-text",
            {
              style: normalizeStyle({ color: $props.color, fontSize: $props.size + "rpx" })
            },
            toDisplayString($props.title),
            5
            /* TEXT, STYLE */
          )
        ],
        4
        /* STYLE */
      )) : createCommentVNode("v-if", true),
      createElementVNode("view", { class: "fui-list__container" }, [
        $props.topBorder ? (openBlock(), createElementBlock(
          "view",
          {
            key: 0,
            style: normalizeStyle({ background: $props.borderColor, left: $props.topLeft + "rpx", right: $props.topRight + "rpx" }),
            class: normalizeClass(["fui-list__border-top", { "fui-list__border-color": !$props.borderColor }])
          },
          null,
          6
          /* CLASS, STYLE */
        )) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "default"),
        $props.bottomBorder ? (openBlock(), createElementBlock(
          "view",
          {
            key: 1,
            style: normalizeStyle({ background: $props.borderColor, left: $props.bottomLeft + "rpx", right: $props.bottomRight + "rpx" }),
            class: normalizeClass(["fui-list__border-bottom", { "fui-list__border-color": !$props.borderColor }])
          },
          null,
          6
          /* CLASS, STYLE */
        )) : createCommentVNode("v-if", true)
      ]),
      $props.footer ? (openBlock(), createElementBlock(
        "view",
        {
          key: 1,
          class: "fui-list__footer",
          style: normalizeStyle({ paddingTop: $props.footerPadding[0] || 0, paddingRight: $props.footerPadding[1] || 0, paddingBottom: $props.footerPadding[2] || $props.footerPadding[0] || 0, paddingLeft: $props.footerPadding[3] || $props.footerPadding[1] || 0 })
        },
        [
          createElementVNode(
            "u-text",
            {
              style: normalizeStyle({ color: $props.footerColor, fontSize: $props.footerSize + "rpx" })
            },
            toDisplayString($props.footer),
            5
            /* TEXT, STYLE */
          )
        ],
        4
        /* STYLE */
      )) : createCommentVNode("v-if", true)
    ],
    4
    /* STYLE */
  );
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-list/fui-list.vue"]]);
const _style_0 = { "fui-section__title": { "": { "marginLeft": "32rpx" } }, "fui-list__item": { "": { "flex": 1, "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between" } }, "fui-text__explain": { "": { "fontSize": "28rpx", "color": "#7F7F7F" } }, "fui-list__icon": { "": { "width": "48rpx", "height": "48rpx", "marginRight": "24rpx" } } };
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_list_cell = resolveEasycom(resolveDynamicComponent("fui-list-cell"), __easycom_2$1);
  const _component_fui_badge = resolveEasycom(resolveDynamicComponent("fui-badge"), __easycom_0);
  const _component_fui_list = resolveEasycom(resolveDynamicComponent("fui-list"), __easycom_2);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("u-text", { class: "fui-page__title" }, "List"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "List 列表，常用的布局组件。")
      ]),
      createElementVNode("view", { class: "fui-page__bd" }, [
        createElementVNode("u-text", { class: "fui-section__title fui-mtop--0" }, "基础使用"),
        createVNode(_component_fui_list, null, {
          default: withCtx(() => [
            createVNode(_component_fui_list_cell, null, {
              default: withCtx(() => [
                createElementVNode("u-text", null, "标题文字")
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_fui_list_cell, null, {
              default: withCtx(() => [
                createElementVNode("u-text", null, "标题文字"),
                createElementVNode("u-text", { class: "fui-text__explain" }, "说明文字")
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_fui_list_cell, { arrow: "" }, {
              default: withCtx(() => [
                createElementVNode("u-text", null, "标题文字")
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_fui_list_cell, { arrow: "" }, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-list__item" }, [
                  createElementVNode("u-text", null, "标题文字"),
                  createElementVNode("u-text", { class: "fui-text__explain" }, "说明文字")
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
                createElementVNode("view", { class: "fui-list__item" }, [
                  createElementVNode("u-text", null, "标题文字"),
                  createVNode(_component_fui_badge, {
                    value: "1",
                    type: "danger"
                  })
                ])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        createElementVNode("u-text", {
          class: "fui-section__title",
          style: { "margin-bottom": "0" }
        }, "无点击效果、带标题"),
        createVNode(_component_fui_list, {
          bottomBorder: "",
          title: "带标题的列表"
        }, {
          default: withCtx(() => [
            createVNode(_component_fui_list_cell, { highlight: false }, {
              default: withCtx(() => [
                createElementVNode("u-text", null, "标题文字")
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_fui_list_cell, {
              bottomBorder: false,
              highlight: false,
              arrow: ""
            }, {
              default: withCtx(() => [
                createElementVNode("u-text", null, "标题文字")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "带图标的列表"),
        createVNode(_component_fui_list_cell, { topBorder: "" }, {
          default: withCtx(() => [
            createElementVNode("view", { class: "fui-align__center" }, [
              createElementVNode("u-image", {
                class: "fui-list__icon",
                src: "/static/images/common/icon_tabbar.png",
                mode: "widthFix"
              }),
              createElementVNode("u-text", null, "标题文字")
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_fui_list_cell, null, {
          default: withCtx(() => [
            createElementVNode("view", { class: "fui-align__center" }, [
              createElementVNode("u-image", {
                class: "fui-list__icon",
                src: "/static/images/common/icon_tabbar.png",
                mode: "widthFix"
              }),
              createElementVNode("u-text", null, "标题文字")
            ]),
            createElementVNode("u-text", { class: "fui-text__explain" }, "说明文字")
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_fui_list_cell, { arrow: "" }, {
          default: withCtx(() => [
            createElementVNode("view", { class: "fui-align__center" }, [
              createElementVNode("u-image", {
                class: "fui-list__icon",
                src: "/static/images/common/icon_tabbar.png",
                mode: "widthFix"
              }),
              createElementVNode("u-text", null, "标题文字")
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
            createElementVNode("view", { class: "fui-list__item" }, [
              createElementVNode("view", { class: "fui-align__center" }, [
                createElementVNode("u-image", {
                  class: "fui-list__icon",
                  src: "/static/images/common/icon_tabbar.png",
                  mode: "widthFix"
                }),
                createElementVNode("u-text", null, "标题文字")
              ]),
              createElementVNode("u-text", { class: "fui-text__explain" }, "说明文字")
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "改变底部线条左侧偏移距离"),
        createVNode(_component_fui_list_cell, {
          topBorder: "",
          bottomLeft: 104
        }, {
          default: withCtx(() => [
            createElementVNode("view", { class: "fui-align__center" }, [
              createElementVNode("u-image", {
                class: "fui-list__icon",
                src: "/static/images/common/icon_tabbar.png",
                mode: "widthFix"
              }),
              createElementVNode("u-text", null, "标题文字")
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_fui_list_cell, { bottomLeft: 0 }, {
          default: withCtx(() => [
            createElementVNode("view", { class: "fui-align__center" }, [
              createElementVNode("u-image", {
                class: "fui-list__icon",
                src: "/static/images/common/icon_tabbar.png",
                mode: "widthFix"
              }),
              createElementVNode("u-text", null, "标题文字")
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "改变底部线条右侧偏移距离"),
        createVNode(_component_fui_list_cell, { bottomRight: 32 }, {
          default: withCtx(() => [
            createElementVNode("view", { class: "fui-align__center" }, [
              createElementVNode("u-image", {
                class: "fui-list__icon",
                src: "/static/images/common/icon_tabbar.png",
                mode: "widthFix"
              }),
              createElementVNode("u-text", null, "标题文字")
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_fui_list_cell, { bottomBorder: false }, {
          default: withCtx(() => [
            createElementVNode("view", { class: "fui-align__center" }, [
              createElementVNode("u-image", {
                class: "fui-list__icon",
                src: "/static/images/common/icon_tabbar.png",
                mode: "widthFix"
              }),
              createElementVNode("u-text", null, "标题文字")
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "无线条"),
        createVNode(_component_fui_list_cell, {
          bottomBorder: false,
          arrow: ""
        }, {
          default: withCtx(() => [
            createElementVNode("view", { class: "fui-align__center" }, [
              createElementVNode("u-image", {
                class: "fui-list__icon",
                src: "/static/images/common/icon_tabbar.png",
                mode: "widthFix"
              }),
              createElementVNode("u-text", null, "标题文字")
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_fui_list_cell, {
          bottomBorder: false,
          arrow: ""
        }, {
          default: withCtx(() => [
            createElementVNode("view", { class: "fui-align__center" }, [
              createElementVNode("u-image", {
                class: "fui-list__icon",
                src: "/static/images/common/icon_tabbar.png",
                mode: "widthFix"
              }),
              createElementVNode("u-text", null, "标题文字")
            ])
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ])
  ]);
}
const list = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/layout/list/list.nvue"]]);
export {
  list as default
};
