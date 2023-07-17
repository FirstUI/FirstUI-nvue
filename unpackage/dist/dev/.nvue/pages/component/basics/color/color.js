import { _ as __easycom_0 } from "../../../../fui-section.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, Fragment, renderList, createVNode, normalizeStyle, toDisplayString } from "vue";
import { _ as _export_sfc, r as resolveEasycom } from "../../../../uni-app.es.js";
const colors = [{
  text: "主色",
  key: "key_01",
  data: [{
    color: "#FFFFFF",
    text: "蓝色",
    value: "#465CFF"
  }]
}, {
  text: "辅助色",
  key: "key_02",
  data: [{
    color: "#FFFFFF",
    text: "红色",
    value: "#FF2B2B"
  }, {
    color: "#FFFFFF",
    text: "黄色",
    value: "#FFB703"
  }, {
    color: "#FFFFFF",
    text: "紫色",
    value: "#6831FF"
  }, {
    color: "#FFFFFF",
    text: "绿色",
    value: "#09BE4F"
  }]
}, {
  text: "字体颜色",
  key: "key_03",
  data: [{
    color: "#FFFFFF",
    text: "深黑色",
    value: "#181818"
  }, {
    color: "#FFFFFF",
    text: "深灰色",
    value: "#333333"
  }, {
    color: "#FFFFFF",
    text: "灰色",
    value: "#B2B2B2"
  }, {
    color: "#FFFFFF",
    text: "浅灰色",
    value: "#CCCCCC"
  }, {
    color: "#181818",
    text: "白色",
    value: "#FFFFFF"
  }]
}, {
  text: "背景色",
  key: "key_04",
  data: [{
    color: "#181818",
    text: "浅蓝",
    value: "#F1F4FA"
  }, {
    color: "#181818",
    text: "白色",
    value: "#FFFFFF"
  }, {
    color: "#181818",
    text: "灰色",
    value: "#F8F8F8"
  }, {
    color: "#181818",
    text: "红色 5%",
    value: "rgba(255, 43, 43, .05)"
  }, {
    color: "#181818",
    text: "黄色 10%",
    value: "rgba(255, 183, 3, .1)"
  }, {
    color: "#181818",
    text: "紫色 5%",
    value: "rgba(104, 49, 255, .05)"
  }, {
    color: "#181818",
    text: "绿色 5%",
    value: "rgba(9, 190, 79, .05)"
  }, {
    color: "#FFFFFF",
    text: "黑色 60%",
    value: "rgba(0, 0, 0, 0.6)"
  }, {
    color: "#FFFFFF",
    text: "黑色 20%",
    value: "rgba(0, 0, 0, 0.2)"
  }]
}, {
  text: "边框颜色",
  key: "key_05",
  data: [{
    color: "#181818",
    text: "灰色",
    value: "#EEEEEE"
  }]
}, {
  text: "渐变色",
  key: "key_06",
  data: [{
    color: "#FFFFFF",
    text: "渐变色",
    gradual: "linear-gradient(to bottom right,#465CFF,#6831FF)",
    value: "#465CFF  #6831FF"
  }, {
    color: "#FFFFFF",
    text: "渐变色",
    gradual: "linear-gradient(to bottom right,#FD8C8C,#FF2B2B)",
    value: "#FD8C8C  #FF2B2B"
  }]
}];
const _style_0 = { "fui-color__item": { "": { "justifyContent": "space-between", "flexDirection": "row", "alignItems": "center", "height": "84rpx", "borderRadius": 42, "marginBottom": "24rpx", "boxShadow": "0 4rpx 8rpx 0 rgba(2, 4, 38, 0.05)" } }, "fui-text": { "": { "fontSize": "28rpx", "fontWeight": "400", "color": "#ffffff" } } };
const _sfc_main = {
  data() {
    return {
      colors
    };
  },
  methods: {
    getColor(e, color2) {
    }
  }
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
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("u-text", { class: "fui-page__title" }, "Color"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "Color 色彩，First UI用色指南。")
      ]),
      createElementVNode("view", { class: "fui-page__bd fui-page__spacing" }, [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList($data.colors, (item, index) => {
            return openBlock(), createElementBlock(
              Fragment,
              {
                key: item.key
              },
              [
                createVNode(_component_fui_section, {
                  title: item.text,
                  "is-line": "",
                  padding: ["0", "0"],
                  "margin-bottom": "32",
                  "margin-top": index === 0 ? 0 : 64
                }, null, 8, ["title", "margin-top"]),
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(item.data, (model, idx) => {
                    return openBlock(), createElementBlock("view", {
                      onClick: ($event) => $options.getColor($event, model.gradual || model.value),
                      key: idx,
                      class: "fui-color__item fui-page__spacing",
                      style: normalizeStyle({ background: model.gradual || model.value })
                    }, [
                      createElementVNode(
                        "u-text",
                        {
                          class: "fui-text",
                          style: normalizeStyle({ color: model.color })
                        },
                        toDisplayString(model.text),
                        5
                        /* TEXT, STYLE */
                      ),
                      createElementVNode(
                        "u-text",
                        {
                          class: "fui-text",
                          style: normalizeStyle({ color: model.color })
                        },
                        toDisplayString(model.value),
                        5
                        /* TEXT, STYLE */
                      )
                    ], 12, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ],
              64
              /* STABLE_FRAGMENT */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ])
  ]);
}
const color = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/basics/color/color.nvue"]]);
export {
  color as default
};
