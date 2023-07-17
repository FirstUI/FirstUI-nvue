import { _ as __easycom_0 } from "../../../../fui-button.js";
import { openBlock, createElementBlock, normalizeClass, createElementVNode, normalizeStyle, renderSlot, createCommentVNode, toDisplayString, resolveDynamicComponent, createVNode, withCtx } from "vue";
import { a as requireNativePlugin, _ as _export_sfc, r as resolveEasycom } from "../../../../uni-app.es.js";
import { _ as __easycom_1$1 } from "../../../../fui-icon.js";
const _style_0$1 = { "fui-toast__wrap": { "": { "position": "fixed", "left": "64rpx", "right": "64rpx", "top": 0, "bottom": 0, "backgroundColor": "rgba(0,0,0,0)", "zIndex": 1002, "alignItems": "center", "justifyContent": "center", "opacity": 0 } }, "fui-toast__inner": { "": { "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "borderRadius": "16rpx" } }, "fui-toast__icon-box": { "": { "paddingBottom": "20rpx" } }, "fui-toast__text": { "": { "fontWeight": "400", "textAlign": "center" } } };
const animation = requireNativePlugin("animation");
const _sfc_main$1 = {
  name: "fui-toast",
  props: {
    padding: {
      type: Array,
      default() {
        return ["32rpx", "32rpx"];
      }
    },
    background: {
      type: String,
      default: "rgba(0,0,0,.6)"
    },
    //图标宽度（高度与宽度一致）rpx
    width: {
      type: [Number, String],
      default: 64
    },
    size: {
      type: [Number, String],
      default: 30
    },
    color: {
      type: String,
      default: "#fff"
    },
    zIndex: {
      type: Number,
      default: 1001
    }
  },
  data() {
    let isNvue = false;
    isNvue = true;
    return {
      timer: null,
      visible: false,
      src: "",
      text: "",
      isNvue
    };
  },
  beforeUnmount() {
    clearTimeout(this.timer);
    this.timer = null;
  },
  methods: {
    _animation(type, duration = 2e3) {
      if (!this.$refs["fui_toast_ani"])
        return;
      animation.transition(
        this.$refs["fui_toast_ani"].ref,
        {
          styles: {
            opacity: type ? 1 : 0
          },
          duration: 300,
          //ms
          timingFunction: "ease-in-out",
          needLayout: false,
          delay: 0
          //ms
        },
        () => {
          if (!type) {
            this.visible = false;
          } else {
            this.timer = setTimeout(() => {
              this._animation(false);
              clearTimeout(this.timer);
              this.timer = null;
            }, duration);
          }
        }
      );
    },
    show: function(options) {
      clearTimeout(this.timer);
      let {
        duration = 2e3,
        src = "",
        text = ""
      } = options;
      this.text = text;
      this.src = src;
      this.visible = true;
      this.$nextTick(() => {
        setTimeout(() => {
          this._animation(true, duration);
        }, 50);
      });
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.visible || !$data.isNvue ? (openBlock(), createElementBlock(
    "view",
    {
      key: 0,
      class: normalizeClass(["fui-toast__wrap", { "fui-toast__show": $data.visible }]),
      ref: "fui_toast_ani",
      renderWhole: true
    },
    [
      createElementVNode(
        "view",
        {
          class: "fui-toast__inner",
          style: normalizeStyle({ paddingTop: $props.padding[0] || 0, paddingRight: $props.padding[1] || 0, paddingBottom: $props.padding[2] || $props.padding[0] || 0, paddingLeft: $props.padding[3] || $props.padding[1] || 0, background: $props.background, zIndex: $props.zIndex })
        },
        [
          renderSlot(_ctx.$slots, "default"),
          $data.src ? (openBlock(), createElementBlock(
            "view",
            {
              key: 0,
              class: "fui-toast__icon-box",
              style: normalizeStyle({ width: $props.width + "rpx", height: $props.width + "rpx" })
            },
            [
              createElementVNode("u-image", {
                class: "fui-toast__icon",
                src: $data.src,
                style: normalizeStyle({ width: $props.width + "rpx", height: $props.width + "rpx" })
              }, null, 12, ["src"])
            ],
            4
            /* STYLE */
          )) : createCommentVNode("v-if", true),
          $data.text ? (openBlock(), createElementBlock(
            "u-text",
            {
              key: 1,
              class: "fui-toast__text",
              style: normalizeStyle({ fontSize: $props.size + "rpx", color: $props.color })
            },
            toDisplayString($data.text),
            5
            /* TEXT, STYLE */
          )) : createCommentVNode("v-if", true)
        ],
        4
        /* STYLE */
      )
    ],
    2
    /* CLASS */
  )) : createCommentVNode("v-if", true);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-toast/fui-toast.vue"]]);
const _style_0 = { "fui-page__bd": { "": { "alignItems": "center", "justifyContent": "center", "flexDirection": "column" } }, "fui-toast__custom": { "": { "alignItems": "center", "justifyContent": "center", "flexDirection": "column" } }, "fui-toast__txt": { "": { "fontSize": "32rpx", "color": "#FFFFFF", "paddingTop": "12rpx" } } };
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    showToast(type) {
      let options = {};
      if (type === 3) {
        this.$refs.toast2.show(options);
      } else {
        if (type === 1) {
          options.src = "/static/images/common/img_logo.png";
          options.text = "First UI !";
        } else if (type === 2) {
          options.text = "请输入手机号";
        }
        this.$refs.toast.show(options);
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_button = resolveEasycom(resolveDynamicComponent("fui-button"), __easycom_0);
  const _component_fui_toast = resolveEasycom(resolveDynamicComponent("fui-toast"), __easycom_1);
  const _component_fui_icon = resolveEasycom(resolveDynamicComponent("fui-icon"), __easycom_1$1);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("u-text", { class: "fui-page__title" }, "Toast"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "Toast 轻提示，一种轻量级反馈/提示，适合用于页面转场、数据交互的等场景中。")
      ]),
      createElementVNode("view", { class: "fui-page__bd fui-page__spacing" }, [
        createVNode(_component_fui_button, {
          type: "gray",
          "btn-size": "medium",
          text: "带图标提示",
          bold: "",
          margin: ["24rpx"],
          onClick: _cache[0] || (_cache[0] = ($event) => $options.showToast(1))
        }),
        createVNode(_component_fui_button, {
          type: "gray",
          "btn-size": "medium",
          text: "无图标提示",
          bold: "",
          onClick: _cache[1] || (_cache[1] = ($event) => $options.showToast(2))
        }),
        createVNode(_component_fui_button, {
          type: "gray",
          "btn-size": "medium",
          text: "自定义内容",
          margin: ["24rpx"],
          bold: "",
          onClick: _cache[2] || (_cache[2] = ($event) => $options.showToast(3))
        })
      ]),
      createVNode(
        _component_fui_toast,
        { ref: "toast" },
        null,
        512
        /* NEED_PATCH */
      ),
      createCommentVNode("自定义内容"),
      createVNode(
        _component_fui_toast,
        { ref: "toast2" },
        {
          default: withCtx(() => [
            createElementVNode("view", { class: "fui-toast__custom" }, [
              createVNode(_component_fui_icon, {
                name: "checkbox",
                color: "#fff"
              }),
              createElementVNode("u-text", { class: "fui-toast__txt" }, "操作成功")
            ])
          ]),
          _: 1
          /* STABLE */
        },
        512
        /* NEED_PATCH */
      )
    ])
  ]);
}
const toast = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/operate/toast/toast.nvue"]]);
export {
  toast as default
};
