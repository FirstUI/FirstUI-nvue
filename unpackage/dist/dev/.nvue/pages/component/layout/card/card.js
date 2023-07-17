import { openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, createCommentVNode, toDisplayString, renderSlot, resolveDynamicComponent, createVNode, withCtx } from "vue";
import { _ as _export_sfc, r as resolveEasycom } from "../../../../uni-app.es.js";
const _style_0$1 = { "fui-card__border": { "": { "position": "relative", "!boxShadow": "none", "borderWidth": 0.5, "borderStyle": "solid" } }, "fui-card__header": { "": { "flex": 1, "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between", "position": "relative" } }, "fui-card__header-left": { "": { "flexDirection": "row", "alignItems": "center" } }, "fui-card__header-line": { "": { "position": "relative", "borderBottomWidth": 0.5, "borderBottomStyle": "solid", "borderBottomColor": "#EEEEEE" } }, "fui-card__header-thumb": { "": { "marginRight": "20rpx" } }, "fui-card__header-title": { "": { "lines": 1 } }, "fui-card__header-right": { "": { "textAlign": "right" } }, "fui-card__body": { "": { "flex": 1 } }, "fui-card__footer": { "": { "flex": 1 } } };
const _sfc_main$1 = {
  name: "fui-card",
  emits: ["click"],
  props: {
    //card margin值：[上、右、下、左]
    margin: {
      type: Array,
      default() {
        return ["0", "32rpx"];
      }
    },
    //是否通栏，为true时margin-left，margin-right失效
    full: {
      type: Boolean,
      default: false
    },
    //card 背景色
    background: {
      type: String,
      default: "#fff"
    },
    //card 圆角，非nvue下showBorder为false时生效
    radius: {
      type: String,
      default: "16rpx"
    },
    //阴影：nvue下，android无效
    shadow: {
      type: String,
      default: "0 2rpx 4rpx 0 rgba(2, 4, 38, 0.05)"
    },
    //仅android且nvue下有效，box-shadow失效
    elevation: {
      type: String,
      default: "5px"
    },
    //是否显示card 边框，为true时box-shadow失效
    showBorder: {
      type: Boolean,
      default: false
    },
    //边框颜色，仅nvue下生效
    borderColor: {
      type: String,
      default: "#EEEEEE"
    },
    headerBackground: {
      type: String,
      default: "#fff"
    },
    //是否需要header底部线条
    headerLine: {
      type: Boolean,
      default: true
    },
    //是否需要内容与footer之间线条
    footerLine: {
      type: Boolean,
      default: false
    },
    //header 底部线条颜色，仅nvue有效，非nvue改变颜色使用css变量
    lineColor: {
      type: String,
      default: "#EEEEEE"
    },
    //header padding值：[上、右、下、左]
    padding: {
      type: Array,
      default() {
        return ["20rpx", "20rpx"];
      }
    },
    //头像，图标图片地址
    src: {
      type: String,
      default: ""
    },
    //图片宽度，单位rpx
    width: {
      type: [Number, String],
      default: 64
    },
    //图片高度，单位rpx
    height: {
      type: [Number, String],
      default: 64
    },
    //图片圆角
    imageRadius: {
      type: String,
      default: "8rpx"
    },
    title: {
      type: String,
      default: ""
    },
    size: {
      type: [Number, String],
      default: 30
    },
    color: {
      type: String,
      default: "#7F7F7F"
    },
    tag: {
      type: String,
      default: ""
    },
    tagSize: {
      type: [Number, String],
      default: 24
    },
    tagColor: {
      type: String,
      default: "#b2b2b2"
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    let isNvue = false;
    isNvue = true;
    return {
      isNvue
    };
  },
  methods: {
    handleClick() {
      this.$emit("click", {
        index: this.index
      });
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["fui-card__wrap", { "fui-card__full": $props.full, "fui-card__border": $props.showBorder, "fui-card__border-radius": $props.showBorder && !$data.isNvue && !$props.full }]),
      style: normalizeStyle({ marginTop: $props.margin[0] || 0, marginRight: $props.full ? 0 : $props.margin[1] || 0, marginBottom: $props.margin[2] || $props.margin[0] || 0, marginLeft: $props.full ? 0 : $props.margin[3] || $props.margin[1] || 0, background: $props.background, borderRadius: $props.full ? 0 : $props.radius, "box-shadow": $props.showBorder ? "none" : $props.shadow, borderColor: $data.isNvue ? $props.borderColor : "transparent" }),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick && $options.handleClick(...args)),
      renderWhole: true
    },
    [
      $props.tag || $props.title || $props.src ? (openBlock(), createElementBlock(
        "view",
        {
          key: 0,
          class: normalizeClass(["fui-card__header", { "fui-card__header-line": $props.headerLine }]),
          style: normalizeStyle({ "border-top-left-radius": $props.full ? 0 : $props.radius, "border-top-right-radius": $props.full ? 0 : $props.radius, "border-bottom-color": $data.isNvue && $props.headerLine ? $props.lineColor : "transparent", paddingTop: $props.padding[0] || 0, paddingRight: $props.padding[1] || 0, paddingBottom: $props.padding[2] || $props.padding[0] || 0, paddingLeft: $props.padding[3] || $props.padding[1] || 0 })
        },
        [
          createElementVNode("view", { class: "fui-card__header-left" }, [
            $props.src ? (openBlock(), createElementBlock("u-image", {
              key: 0,
              src: $props.src,
              class: "fui-card__header-thumb",
              style: normalizeStyle({ height: $props.height + "rpx", width: $props.width + "rpx", borderRadius: $props.imageRadius })
            }, null, 12, ["src"])) : createCommentVNode("v-if", true),
            $props.title ? (openBlock(), createElementBlock(
              "u-text",
              {
                key: 1,
                class: "fui-card__header-title",
                style: normalizeStyle({ fontSize: $props.size + "rpx", color: $props.color })
              },
              toDisplayString($props.title),
              5
              /* TEXT, STYLE */
            )) : createCommentVNode("v-if", true)
          ]),
          $props.tag ? (openBlock(), createElementBlock("view", {
            key: 0,
            class: "fui-card__header-right"
          }, [
            createElementVNode(
              "u-text",
              {
                style: normalizeStyle({ fontSize: $props.tagSize + "rpx", color: $props.tagColor })
              },
              toDisplayString($props.tag),
              5
              /* TEXT, STYLE */
            )
          ])) : createCommentVNode("v-if", true)
        ],
        6
        /* CLASS, STYLE */
      )) : createCommentVNode("v-if", true),
      createElementVNode(
        "view",
        {
          class: normalizeClass(["fui-card__body", { "fui-card__header-line": $props.footerLine }])
        },
        [
          renderSlot(_ctx.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      createElementVNode(
        "view",
        {
          class: "fui-card__footer",
          style: normalizeStyle({ "border-bottom-left-radius": $props.full ? 0 : $props.radius, "border-bottom-right-radius": $props.full ? 0 : $props.radius })
        },
        [
          renderSlot(_ctx.$slots, "footer")
        ],
        4
        /* STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-card/fui-card.vue"]]);
const _style_0 = { "fui-section__title": { "": { "marginLeft": "32rpx" } }, "fui-card__content": { "": { "fontSize": "28rpx", "paddingTop": "32rpx", "paddingRight": "20rpx", "paddingBottom": "32rpx", "paddingLeft": "20rpx" } }, "fui-padding": { "": { "paddingLeft": "32rpx", "paddingRight": "32rpx" } }, "fui-list__item": { "": { "height": "385rpx", "position": "relative", "backgroundColor": "#eeeeee" } }, "fui-cover": { "": { "height": "385rpx" } }, "fui-cover__bottom-radius": { "": { "borderBottomLeftRadius": "16rpx", "borderBottomRightRadius": "16rpx" } }, "fui-cover__top-radius": { "": { "borderTopLeftRadius": "16rpx", "borderTopRightRadius": "16rpx" } }, "fui-list__title": { "": { "position": "absolute", "left": 0, "right": 0, "bottom": 0, "color": "#ffffff", "fontWeight": "500", "paddingTop": "24rpx", "paddingRight": "20rpx", "paddingBottom": "24rpx", "paddingLeft": "20rpx", "backgroundImage": "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.6))" } }, "fui-card__title": { "": { "paddingTop": "32rpx", "paddingRight": "32rpx", "paddingBottom": "32rpx", "paddingLeft": "32rpx", "fontWeight": "500" } } };
const _sfc_main = {
  data() {
    return {
      resUrl: uni.fui.resUrl(),
      src: "/static/images/common/icon_tabbar_3x.png",
      src2: "/static/images/common/img_logo.png"
    };
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_card = resolveEasycom(resolveDynamicComponent("fui-card"), __easycom_0);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("u-text", { class: "fui-page__title" }, "Card"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "Card 卡片，常用的布局组件。")
      ]),
      createElementVNode("view", { class: "fui-page__bd" }, [
        createElementVNode("u-text", { class: "fui-section__title fui-mtop--0" }, "基础使用"),
        createVNode(_component_fui_card, {
          src: $data.src,
          title: "标题文字",
          tag: "额外信息"
        }, {
          default: withCtx(() => [
            createElementVNode("u-text", { class: "fui-card__content" }, "这是一个基础卡片的示例，此处为自定义内容区域，自行控制内容样式。")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["src"]),
        createElementVNode("u-text", { class: "fui-section__title" }, "通栏展示"),
        createVNode(_component_fui_card, {
          padding: ["20rpx", "32rpx"],
          full: "",
          src: $data.src,
          title: "标题文字",
          tag: "额外信息"
        }, {
          default: withCtx(() => [
            createElementVNode("u-text", { class: "fui-card__content fui-padding" }, "这是一个基础卡片的示例，此处为自定义内容区域，自行控制内容样式。")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["src"]),
        createElementVNode("u-text", { class: "fui-section__title" }, "推荐布局"),
        createVNode(_component_fui_card, {
          src: $data.src2,
          imageRadius: "20px",
          title: "First UI",
          color: "#465CFF",
          tag: "23小时前",
          headerLine: false,
          showBorder: ""
        }, {
          default: withCtx(() => [
            createElementVNode("view", { class: "fui-list__item" }, [
              createElementVNode("u-image", {
                class: "fui-cover fui-cover__bottom-radius",
                src: `${$data.resUrl}/cooperate/light/img_banner_3x.png`,
                mode: "widthFix"
              }, null, 8, ["src"]),
              createElementVNode("u-text", { class: "fui-list__title fui-cover__bottom-radius" }, "First UI重磅上线，一款轻量、全面、可靠的移动端组件库。")
            ])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["src"]),
        createElementVNode("u-text", { class: "fui-section__title" }, "推荐布局"),
        createVNode(_component_fui_card, null, {
          default: withCtx(() => [
            createElementVNode("view", { class: "fui-list__item" }, [
              createElementVNode("u-image", {
                class: "fui-cover fui-cover__top-radius",
                src: `${$data.resUrl}/cooperate/dark/img_banner_3x.png`,
                mode: "widthFix"
              }, null, 8, ["src"])
            ]),
            createElementVNode("u-text", { class: "fui-card__title" }, "First UI重磅上线，一款轻量、全面、可靠的移动端组件库。")
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ])
  ]);
}
const card = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/layout/card/card.nvue"]]);
export {
  card as default
};
