import { resolveComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, Fragment, renderList, createBlock, withCtx, createElementVNode, toDisplayString, createCommentVNode, resolveDynamicComponent, createVNode } from "vue";
import { _ as _export_sfc, r as resolveEasycom } from "../../../../uni-app.es.js";
const _style_0 = { "fui-footer": { "": { "flex": 1, "overflow": "hidden", "paddingTop": "32rpx", "paddingBottom": "32rpx", "paddingLeft": "32rpx", "paddingRight": "32rpx" } }, "fui-footer__fixed-bottom": { "": { "position": "fixed", "zIndex": 99, "bottom": 0, "left": 0, "right": 0 } }, "fui-footer__link": { "": { "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "fontSize": "28rpx" } }, "fui-link__item": { "": { "position": "relative", "lineHeight": 1 } }, "fui-link__text": { "": { "paddingTop": 0, "paddingRight": "18rpx", "paddingBottom": 0, "paddingLeft": "18rpx", "borderRightWidth": 0.5, "borderRightStyle": "solid", "fontWeight": "400" } }, "fui-link__text-border": { "": { "borderRightWidth": 0 } }, "fui-link-hover": { "": { "opacity": 0.5 } }, "fui-footer__text": { "": { "flex": 1, "flexDirection": "row", "justifyContent": "center", "flexWrap": "wrap", "lineHeight": 1, "textAlign": "center", "paddingTop": "8rpx", "fontWeight": "400" } }, "fui-as__safe-weex": { "": { "paddingBottom": 34 } } };
const _sfc_main$1 = {
  name: "fui-footer",
  props: {
    //url，openType，delta ，text，color，size
    //链接设置  object数据格式对应上面注释的属性值
    navigate: {
      type: Array,
      default: function() {
        return [];
      }
    },
    //底部文本
    text: {
      type: String,
      default: ""
    },
    //文本字体颜色
    color: {
      type: String,
      default: "#B2B2B2"
    },
    //文本字体大小
    size: {
      type: [Number, String],
      default: 24
    },
    //footer背景颜色
    background: {
      type: String,
      default: "transparent"
    },
    //分隔线颜色，仅nvue生效
    borderColor: {
      type: String,
      default: "#B2B2B2"
    },
    //是否固定在底部
    isFixed: {
      type: Boolean,
      default: false
    },
    //是否适配底部安全区
    safeArea: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    linkColor() {
      const app = uni && uni.$fui && uni.$fui.color;
      return app && app.link || "#465CFF";
    }
  },
  data() {
    return {
      iphoneX: false
    };
  },
  created() {
    this.iphoneX = this.isPhoneX();
  },
  methods: {
    isPhoneX() {
      if (!this.safeArea)
        return false;
      const res = uni.getSystemInfoSync();
      let iphonex = false;
      let models = [
        "iphonex",
        "iphonexr",
        "iphonexsmax",
        "iphone11",
        "iphone11pro",
        "iphone11promax",
        "iphone12",
        "iphone12mini",
        "iphone12pro",
        "iphone12promax",
        "iphone13",
        "iphone13mini",
        "iphone13pro",
        "iphone13promax",
        "iphone14",
        "iphone14mini",
        "iphone14pro",
        "iphone14promax",
        "iphone15"
      ];
      const model = res.model.replace(/\s/g, "").toLowerCase();
      const newModel = model.split("<")[0];
      if (models.includes(model) || models.includes(newModel) || res.safeAreaInsets && res.safeAreaInsets.bottom > 0) {
        iphonex = true;
      }
      return iphonex;
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_navigator = resolveComponent("navigator");
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["fui-footer", [$props.isFixed ? "fui-footer__fixed-bottom" : ""]]),
      style: normalizeStyle({ background: $props.background }),
      renderWhole: true
    },
    [
      $props.navigate.length > 0 ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "fui-footer__link"
      }, [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList($props.navigate, (item, index) => {
            return openBlock(), createBlock(_component_navigator, {
              key: index,
              class: "fui-link__item",
              "hover-class": "fui-link-hover",
              "hover-stop-propagation": "",
              "open-type": item.openType || "navigate",
              url: item.url,
              delta: item.delta
            }, {
              default: withCtx(() => [
                createElementVNode(
                  "u-text",
                  {
                    class: normalizeClass(["fui-link__text", { "fui-link__color": !item.color, "fui-link__text-border": index === $props.navigate.length - 1 }]),
                    style: normalizeStyle({ color: item.color || $options.linkColor, fontSize: (item.size || 28) + "rpx", borderColor: $props.borderColor, lineHeight: (item.size || 28) + "rpx" })
                  },
                  toDisplayString(item.text),
                  7
                  /* TEXT, CLASS, STYLE */
                )
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["open-type", "url", "delta"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])) : createCommentVNode("v-if", true),
      createElementVNode(
        "view",
        {
          class: normalizeClass(["fui-footer__text", { "fui-as__safe-weex": $data.iphoneX && $props.safeArea }])
        },
        [
          createElementVNode(
            "u-text",
            {
              style: normalizeStyle({ color: $props.color, fontSize: $props.size + "rpx" })
            },
            toDisplayString($props.text),
            5
            /* TEXT, STYLE */
          )
        ],
        2
        /* CLASS */
      )
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-footer/fui-footer.vue"]]);
const _sfc_main = {
  data() {
    return {
      navigate: [{
        text: "底部链接",
        openType: "navigateBack"
      }],
      navigate2: [{
        text: "底部链接",
        openType: "navigateBack"
      }, {
        text: "底部链接",
        openType: "navigateBack"
      }]
    };
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_footer = resolveEasycom(resolveDynamicComponent("fui-footer"), __easycom_0);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("u-text", { class: "fui-page__title" }, "Footer"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "Footer 页脚。")
      ]),
      createElementVNode("view", { class: "fui-page__bd" }, [
        createVNode(_component_fui_footer, { text: "Copyright © 2021 firstui.cn" }),
        createVNode(_component_fui_footer, {
          navigate: $data.navigate,
          text: "Copyright © 2021 firstui.cn"
        }, null, 8, ["navigate"]),
        createVNode(_component_fui_footer, {
          navigate: $data.navigate2,
          text: "Copyright © 2021 firstui.cn"
        }, null, 8, ["navigate"]),
        createVNode(_component_fui_footer, {
          isFixed: "",
          navigate: $data.navigate,
          text: "Copyright © 2021 firstui.cn"
        }, null, 8, ["navigate"])
      ])
    ])
  ]);
}
const footer = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/basics/footer/footer.nvue"]]);
export {
  footer as default
};
