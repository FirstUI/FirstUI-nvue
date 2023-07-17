import { _ as __easycom_0, a as __easycom_1 } from "../../../../fui-grid.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, Fragment, renderList, createBlock } from "vue";
import { _ as _export_sfc, r as resolveEasycom } from "../../../../uni-app.es.js";
const _style_0 = { "fui-section__title": { "": { "marginLeft": "32rpx" } }, "fui-grid__cell": { "": { "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "flex": 1, "fontSize": "28rpx", "fontWeight": "400" } }, "fui-padding": { "": { "paddingTop": "36rpx", "paddingRight": 0, "paddingBottom": "36rpx", "paddingLeft": 0 } }, "fui-icon": { "": { "width": "96rpx", "height": "96rpx", "marginBottom": "16rpx" } }, "fui-icon__2x": { "": { "width": "64rpx", "height": "64rpx", "marginBottom": "16rpx" } }, "fui-flex__column": { "": { "flex": 1 } } };
const _sfc_main = {
  data() {
    return {
      //百度小程序循环数字有问题
      nums: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      arrs: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      value: ["广东省", "韶关市"],
      options: [{
        name: "北京市",
        id: "100000",
        children: [{
          name: "北京市",
          id: "110000"
        }]
      }, {
        name: "广东省",
        id: "440000",
        children: [{
          name: "广州市",
          id: "440100"
        }, {
          name: "韶关市",
          id: "440200"
        }, {
          name: "深圳市",
          id: "440300"
        }, {
          name: "珠海市",
          id: "440400"
        }, {
          name: "汕头市",
          id: "440500"
        }]
      }]
    };
  },
  onLoad() {
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_grid_item = resolveEasycom(resolveDynamicComponent("fui-grid-item"), __easycom_0);
  const _component_fui_grid = resolveEasycom(resolveDynamicComponent("fui-grid"), __easycom_1);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("u-text", { class: "fui-page__title" }, "Grid"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "Grid 宫格，主要使用场景如：热门内容等。")
      ]),
      createElementVNode("view", { class: "fui-page__bd" }, [
        createElementVNode("u-text", { class: "fui-section__title fui-mtop--0" }, "九宫格"),
        createVNode(_component_fui_grid, null, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($data.nums, (item, index) => {
                return openBlock(), createBlock(_component_fui_grid_item, {
                  index,
                  key: index
                }, {
                  default: withCtx(() => [
                    createElementVNode("view", { class: "fui-grid__cell" }, [
                      createElementVNode("u-image", {
                        src: "/static/images/common/icon_tabbar_3x.png",
                        class: "fui-icon",
                        mode: "widthFix"
                      }),
                      createElementVNode("u-text", { class: "fui-text" }, "Grid")
                    ])
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["index"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "高度自适应"),
        createVNode(_component_fui_grid, { square: false }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($data.nums, (item, index) => {
                return openBlock(), createBlock(
                  _component_fui_grid_item,
                  { key: index },
                  {
                    default: withCtx(() => [
                      createElementVNode("view", { class: "fui-grid__cell fui-padding" }, [
                        createElementVNode("u-image", {
                          src: "/static/images/common/icon_tabbar_2x.png",
                          class: "fui-icon__2x",
                          mode: "widthFix"
                        }),
                        createElementVNode("u-text", { class: "fui-text" }, "Grid")
                      ])
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
        createElementVNode("u-text", { class: "fui-section__title" }, "改变列数（4列）"),
        createVNode(_component_fui_grid, { columns: 4 }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($data.arrs, (item, index) => {
                return openBlock(), createBlock(
                  _component_fui_grid_item,
                  { key: index },
                  {
                    default: withCtx(() => [
                      createElementVNode("view", { class: "fui-grid__cell fui-padding" }, [
                        createElementVNode("u-image", {
                          src: "/static/images/common/icon_tabbar_2x.png",
                          class: "fui-icon__2x",
                          mode: "widthFix"
                        }),
                        createElementVNode("u-text", { class: "fui-text" }, "Grid")
                      ])
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
const grid = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/layout/grid/grid.nvue"]]);
export {
  grid as default
};
