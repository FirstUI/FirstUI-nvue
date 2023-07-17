import { resolveComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, withModifiers, renderSlot, createBlock, createCommentVNode, toDisplayString, createVNode, resolveDynamicComponent, withCtx } from "vue";
import { _ as _export_sfc, r as resolveEasycom } from "../../../../uni-app.es.js";
import { _ as __easycom_1 } from "../../../../fui-icon.js";
const _style_0 = { "fui-alert__wrap": { "": { "flex": 1, "flexDirection": "row", "alignItems": "center", "position": "relative" } }, "fui-alert__content": { "": { "flex": 1, "flexDirection": "column" } }, "fui-desc__padding": { "": { "paddingTop": 3 } }, "fui-text__p-left": { "": { "paddingLeft": "20rpx" } }, "fui-text__p-right": { "": { "paddingRight": "60rpx" } }, "fui-alert__single": { "": { "lines": 1, "flexDirection": "row", "overflow": "hidden", "textOverflow": "ellipsis" } }, "fui-alert__icon-close": { "": { "position": "absolute", "right": "30rpx", "top": "16rpx" } } };
const _sfc_main$1 = {
  name: "fui-alert",
  emits: ["leftClick", "click", "close"],
  props: {
    //info, success, warn, waiting,clear
    type: {
      type: String,
      default: ""
    },
    //背景色，如果设置type对应颜色失效
    background: {
      type: String,
      default: ""
    },
    //padding值：[上，右，下，左]
    padding: {
      type: Array,
      default() {
        return ["20rpx", "32rpx"];
      }
    },
    //margin-top值，单位rpx
    marginTop: {
      type: [Number, String],
      default: 0
    },
    //margin-bottom值，单位rpx
    marginBottom: {
      type: [Number, String],
      default: 0
    },
    //圆角
    radius: {
      type: String,
      default: "16rpx"
    },
    //icon颜色
    iconColor: {
      type: String,
      default: "#fff"
    },
    //icon字体大小，px
    iconSize: {
      type: Number,
      default: 22
    },
    closable: {
      type: Boolean,
      default: false
    },
    closeColor: {
      type: String,
      default: "#fff"
    },
    //关闭icon字体大小，px
    closeSize: {
      type: Number,
      default: 22
    },
    //是否自定义左侧内容,默认图标失效
    isLeft: {
      type: Boolean,
      default: false
    },
    //内容是否与图标之间有间隔，isLeft为true时生效
    spacing: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#fff"
    },
    size: {
      type: String,
      default: "14px"
    },
    desc: {
      type: String,
      default: ""
    },
    descColor: {
      type: String,
      default: "#fff"
    },
    descSize: {
      type: String,
      default: "12px"
    },
    //描述文字单行展示，超出隐藏
    single: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getColor(type) {
      const app = uni && uni.$fui && uni.$fui.color;
      const color = app && app.primary || "#465CFF";
      const colors = {
        "success": app && app.success || "#09BE4F",
        "warn": app && app.warning || "#FFB703",
        "clear": app && app.danger || "#FF2B2B"
      };
      return colors[type] ? colors[type] : color;
    },
    leftClick() {
      this.$emit("leftClick", {});
    },
    onClick() {
      this.$emit("click", {});
    },
    close() {
      this.$emit("close", {});
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon = resolveComponent("icon");
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["fui-alert__wrap", [$props.background ? "" : "fui-alert__" + $props.type]]),
      style: normalizeStyle({ background: $props.background || $options.getColor($props.type), borderRadius: $props.radius, paddingTop: $props.padding[0] || 0, paddingRight: $props.padding[1] || 0, paddingBottom: $props.padding[2] || $props.padding[0] || 0, paddingLeft: $props.padding[3] || $props.padding[1] || 0, marginTop: $props.marginTop + "rpx", marginBottom: $props.marginBottom + "rpx" }),
      renderWhole: true
    },
    [
      createElementVNode("view", {
        class: "fui-alert__shrink",
        onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.leftClick && $options.leftClick(...args), ["stop"]))
      }, [
        renderSlot(_ctx.$slots, "default"),
        !$props.isLeft && $props.type && $props.type !== "true" ? (openBlock(), createBlock(_component_icon, {
          key: 0,
          type: $props.type,
          size: $props.iconSize,
          color: $props.iconColor
        }, null, 8, ["type", "size", "color"])) : createCommentVNode("v-if", true)
      ]),
      createElementVNode(
        "view",
        {
          class: normalizeClass(["fui-alert__content", { "fui-text__p-left": !$props.isLeft && $props.type && $props.type !== "true" || $props.spacing && $props.isLeft, "fui-text__p-right": $props.closable }]),
          onClick: _cache[1] || (_cache[1] = withModifiers((...args) => $options.onClick && $options.onClick(...args), ["stop"]))
        },
        [
          $props.title ? (openBlock(), createElementBlock(
            "u-text",
            {
              key: 0,
              class: "fui-alert__text",
              style: normalizeStyle({ fontSize: $props.size, color: $props.color })
            },
            toDisplayString($props.title),
            5
            /* TEXT, STYLE */
          )) : createCommentVNode("v-if", true),
          $props.desc ? (openBlock(), createElementBlock(
            "u-text",
            {
              key: 1,
              class: normalizeClass(["fui-alert__text fui-desc__padding", { "fui-alert__single": $props.single }]),
              style: normalizeStyle({ fontSize: $props.descSize, color: $props.descColor })
            },
            toDisplayString($props.desc),
            7
            /* TEXT, CLASS, STYLE */
          )) : createCommentVNode("v-if", true),
          renderSlot(_ctx.$slots, "content")
        ],
        2
        /* CLASS */
      ),
      createElementVNode("view", { class: "fui-alert__shrink" }, [
        renderSlot(_ctx.$slots, "right")
      ]),
      $props.closable ? (openBlock(), createElementBlock(
        "view",
        {
          key: 0,
          class: normalizeClass({ "fui-alert__icon-close": $props.desc })
        },
        [
          createVNode(_component_icon, {
            onClick: withModifiers($options.close, ["stop"]),
            type: "cancel",
            size: $props.closeSize,
            color: $props.closeColor
          }, null, 8, ["onClick", "size", "color"])
        ],
        2
        /* CLASS */
      )) : createCommentVNode("v-if", true)
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-alert/fui-alert.vue"]]);
const _sfc_main = {
  data() {
    return {
      show: true,
      shown: true
    };
  },
  methods: {
    close() {
      this.show = false;
    },
    close2() {
      this.shown = false;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_alert = resolveEasycom(resolveDynamicComponent("fui-alert"), __easycom_0);
  const _component_fui_icon = resolveEasycom(resolveDynamicComponent("fui-icon"), __easycom_1);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("u-text", { class: "fui-page__title" }, "Alert"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "Alert 警告框。")
      ]),
      createElementVNode("view", { class: "fui-page__bd fui-page__spacing" }, [
        createElementVNode("u-text", { class: "fui-section__title fui-mtop--0" }, "基础使用"),
        createVNode(_component_fui_alert, { title: "An info alert" }),
        createVNode(_component_fui_alert, {
          type: "success",
          isLeft: "",
          title: "An success alert",
          marginTop: 24
        }),
        createVNode(_component_fui_alert, {
          type: "warn",
          isLeft: "",
          title: "An warn alert",
          marginTop: 24
        }),
        createVNode(_component_fui_alert, {
          type: "clear",
          isLeft: "",
          title: "An error alert",
          marginTop: 24
        }),
        createVNode(_component_fui_alert, {
          isLeft: "",
          title: "An info alert",
          desc: "Content of alert. Content of alert.",
          marginTop: 24
        }),
        createVNode(_component_fui_alert, {
          type: "clear",
          isLeft: "",
          title: "An error alert",
          desc: "Content of alert. Content of alert.",
          marginTop: 24
        }),
        createVNode(_component_fui_alert, {
          type: "warn",
          isLeft: "",
          title: "An warn alert",
          desc: "Content of alert. Content of alert.",
          marginTop: 24
        }),
        createVNode(_component_fui_alert, {
          type: "success",
          title: "An warn alert",
          desc: "Content of alert. Content of alert.",
          marginTop: 24
        }),
        createVNode(_component_fui_alert, {
          type: "info",
          title: "An info alert",
          marginTop: 24
        }),
        createVNode(_component_fui_alert, {
          type: "clear",
          title: "An success alert",
          marginTop: 24
        }),
        createVNode(_component_fui_alert, {
          type: "warn",
          title: "An warn alert",
          marginTop: 24
        }),
        $data.show || $data.shown ? (openBlock(), createElementBlock("u-text", {
          key: 0,
          class: "fui-section__title"
        }, "可关闭")) : createCommentVNode("v-if", true),
        $data.show ? (openBlock(), createBlock(_component_fui_alert, {
          key: 1,
          closable: "",
          title: "An info alert",
          onClose: $options.close
        }, null, 8, ["onClose"])) : createCommentVNode("v-if", true),
        $data.shown ? (openBlock(), createBlock(_component_fui_alert, {
          key: 2,
          type: "success",
          closable: "",
          title: "An info alert",
          desc: "Content of alert. Content of alert.Content of alert.",
          onClose: $options.close2,
          marginTop: 24
        }, null, 8, ["onClose"])) : createCommentVNode("v-if", true),
        createElementVNode("u-text", { class: "fui-section__title" }, "自定义图标"),
        createVNode(_component_fui_alert, {
          type: "info",
          isLeft: "",
          spacing: "",
          title: "An info alert",
          size: "28rpx"
        }, {
          default: withCtx(() => [
            createVNode(_component_fui_icon, {
              name: "info",
              size: 48,
              color: "#fff"
            })
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_fui_alert, {
          type: "success",
          isLeft: "",
          spacing: "",
          title: "An info alert",
          size: "28rpx",
          marginTop: 24
        }, {
          default: withCtx(() => [
            createVNode(_component_fui_icon, {
              name: "checkbox",
              size: 48,
              color: "#fff"
            })
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_fui_alert, {
          type: "warn",
          isLeft: "",
          spacing: "",
          title: "An info alert",
          size: "28rpx",
          marginTop: 24
        }, {
          default: withCtx(() => [
            createVNode(_component_fui_icon, {
              name: "warning",
              size: 48,
              color: "#fff"
            })
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_fui_alert, {
          type: "clear",
          isLeft: "",
          spacing: "",
          title: "An info alert",
          size: "28rpx",
          marginTop: 24
        }, {
          default: withCtx(() => [
            createVNode(_component_fui_icon, {
              name: "clear",
              size: 48,
              color: "#fff"
            })
          ]),
          _: 1
          /* STABLE */
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "自定义颜色"),
        createVNode(_component_fui_alert, {
          type: "clear",
          iconColor: "#FF2B2B",
          background: "#fff",
          color: "#181818",
          title: "An info alert"
        }),
        createVNode(_component_fui_alert, {
          type: "success",
          iconColor: "#09BE4F",
          background: "#fff",
          color: "#181818",
          title: "An info alert",
          marginTop: 24
        }),
        createVNode(_component_fui_alert, {
          type: "warn",
          iconColor: "#FFB703",
          background: "#fff",
          color: "#181818",
          title: "An info alert",
          marginTop: 24
        })
      ])
    ])
  ]);
}
const alert = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/data/alert/alert.nvue"]]);
export {
  alert as default
};
