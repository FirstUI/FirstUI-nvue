import { a as requireNativePlugin, _ as _export_sfc, f as formatAppLog, r as resolveEasycom } from "../../../../uni-app.es.js";
import { _ as __easycom_0 } from "../../../../fui-button.js";
import { openBlock, createElementBlock, normalizeStyle, normalizeClass, withModifiers, createElementVNode, toDisplayString, createCommentVNode, renderSlot, Fragment, renderList, resolveDynamicComponent, createVNode } from "vue";
const _style_0$1 = { "fui-dialog__wrap": { "": { "position": "fixed", "zIndex": 996, "top": 0, "right": 0, "left": 0, "bottom": 0, "alignItems": "center", "justifyContent": "center", "opacity": 0 } }, "fui-dialog__inner": { "": { "width": "680rpx", "textAlign": "center", "overflow": "hidden", "flexDirection": "column" } }, "fui-dialog__title": { "": { "paddingTop": "64rpx", "paddingRight": "48rpx", "paddingBottom": 0, "paddingLeft": "48rpx", "fontWeight": "700", "fontSize": "34rpx", "textAlign": "center" } }, "fui-dialog__body": { "": { "paddingTop": "32rpx", "paddingRight": "48rpx", "paddingBottom": "32rpx", "paddingLeft": "48rpx", "marginBottom": "32rpx" } }, "fui-dialog__descr": { "": { "fontSize": "30rpx", "fontWeight": "normal", "textAlign": "center" } }, "fui-dialog__mtop": { "": { "marginTop": "32rpx" } }, "fui-dialog__footer": { "": { "flexDirection": "row", "position": "relative", "lineHeight": "112rpx", "height": "112rpx", "borderTopWidth": 0.5, "borderTopStyle": "solid", "borderTopColor": "#EEEEEE" } }, "fui-dialog__btn": { "": { "flex": 1, "height": "112rpx", "lineHeight": "112rpx", "fontWeight": "700", "position": "relative", "fontSize": "34rpx", "borderLeftWidth": 0.5, "borderLeftStyle": "solid", "borderLeftColor": "#EEEEEE", "textAlign": "center", "backgroundColor:active": "rgba(0,0,0,0.2)" } }, "fui-dialog__btn-first": { "": { "borderLeftWidth": 0 } } };
const animation = requireNativePlugin("animation");
const primaryColor = uni && uni.$fui && uni.$fui.color && uni.$fui.color.primary || "#465CFF";
const _sfc_main$1 = {
  name: "fui-dialog",
  emits: ["click", "close"],
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "温馨提示"
    },
    color: {
      type: String,
      default: "#333"
    },
    content: {
      type: String,
      default: ""
    },
    contentColor: {
      type: String,
      default: "#7F7F7F"
    },
    buttons: {
      type: Array,
      default() {
        return [{
          text: "取消"
        }, {
          text: "确定",
          color: primaryColor
        }];
      }
    },
    background: {
      type: String,
      default: "#fff"
    },
    radius: {
      type: [Number, String],
      default: 24
    },
    maskBackground: {
      type: String,
      default: "rgba(0,0,0,.6)"
    },
    maskClosable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    let isNvue = false;
    isNvue = true;
    return {
      visible: false,
      isNvue
    };
  },
  watch: {
    show: {
      handler(newVal) {
        if (newVal) {
          this.open();
        } else {
          this.close();
        }
      },
      immediate: true
    }
  },
  methods: {
    handleClick(index) {
      this.$emit("click", {
        index,
        ...this.buttons[index]
      });
    },
    maskClose() {
      if (!this.maskClosable)
        return;
      this.$emit("close", {});
    },
    open() {
      this.visible = true;
      this.$nextTick(() => {
        setTimeout(() => {
          this._animation(true);
        }, 50);
      });
    },
    close(type) {
      this._animation(false);
    },
    _animation(type) {
      let styles = {
        opacity: type ? 1 : 0
      };
      if (!this.$refs["fui_dialog_ani"])
        return;
      animation.transition(
        this.$refs["fui_dialog_ani"].ref,
        {
          styles,
          duration: 200,
          //ms
          timingFunction: "ease-in",
          needLayout: false,
          delay: 0
          //ms
        },
        () => {
          if (!type) {
            this.visible = false;
          }
        }
      );
    },
    stop() {
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.visible || !$data.isNvue ? (openBlock(), createElementBlock(
    "view",
    {
      key: 0,
      onClick: _cache[1] || (_cache[1] = (...args) => $options.maskClose && $options.maskClose(...args)),
      style: normalizeStyle({ background: $props.maskBackground }),
      class: normalizeClass(["fui-dialog__wrap", { "fui-wrap__show": $props.show }]),
      onTouchmove: _cache[2] || (_cache[2] = withModifiers((...args) => $options.stop && $options.stop(...args), ["stop", "prevent"])),
      ref: "fui_dialog_ani",
      renderWhole: true
    },
    [
      createElementVNode(
        "view",
        {
          class: "fui-dialog__inner",
          style: normalizeStyle({ background: $props.background, borderRadius: $props.radius + "rpx" }),
          onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.stop && $options.stop(...args), ["stop"]))
        },
        [
          $props.title ? (openBlock(), createElementBlock(
            "u-text",
            {
              key: 0,
              class: "fui-dialog__title",
              style: normalizeStyle({ color: $props.color })
            },
            toDisplayString($props.title),
            5
            /* TEXT, STYLE */
          )) : createCommentVNode("v-if", true),
          createElementVNode(
            "view",
            {
              class: normalizeClass(["fui-dialog__body", { "fui-dialog__mtop": !$props.title }])
            },
            [
              $props.content ? (openBlock(), createElementBlock(
                "u-text",
                {
                  key: 0,
                  class: "fui-dialog__descr",
                  style: normalizeStyle({ color: $props.contentColor })
                },
                toDisplayString($props.content),
                5
                /* TEXT, STYLE */
              )) : createCommentVNode("v-if", true),
              renderSlot(_ctx.$slots, "default")
            ],
            2
            /* CLASS */
          ),
          createElementVNode("view", { class: "fui-dialog__footer" }, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($props.buttons, (item, index) => {
                return openBlock(), createElementBlock("u-text", {
                  key: index,
                  style: normalizeStyle({ color: item.color || "#333333" }),
                  class: normalizeClass(["fui-dialog__btn", { "fui-dialog__btn-first": index === 0 }]),
                  onClick: ($event) => $options.handleClick(index)
                }, toDisplayString(item.text), 15, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ],
        4
        /* STYLE */
      )
    ],
    38
    /* CLASS, STYLE, HYDRATE_EVENTS */
  )) : createCommentVNode("v-if", true);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-dialog/fui-dialog.vue"]]);
const _style_0 = { "fui-page__bd": { "": { "alignItems": "center", "justifyContent": "center", "flexDirection": "column" } } };
const _sfc_main = {
  data() {
    return {
      show: false,
      visible: false,
      buttons: [{
        text: "确定",
        color: "#FF2B2B"
      }]
    };
  },
  methods: {
    showDialog(type) {
      if (type === 1) {
        this.show = true;
      } else {
        this.visible = true;
      }
    },
    onClick(e) {
      formatAppLog("log", "at pages/component/operate/dialog/dialog.nvue:41", e);
      this.onClose();
    },
    //设置maskClosable为true时（点击遮罩可关闭），需要配合@close事件一起使用，通过控制show来达到关闭效果
    onClose(e) {
      this.show = false;
    },
    onTap(e) {
      formatAppLog("log", "at pages/component/operate/dialog/dialog.nvue:49", e);
      this.visible = false;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_button = resolveEasycom(resolveDynamicComponent("fui-button"), __easycom_0);
  const _component_fui_dialog = resolveEasycom(resolveDynamicComponent("fui-dialog"), __easycom_1);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("u-text", { class: "fui-page__title" }, "Dialog"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "Dialog 对话框，在浮层中显示，引导用户进行相关操作。")
      ]),
      createElementVNode("view", { class: "fui-page__bd fui-page__spacing" }, [
        createVNode(_component_fui_button, {
          type: "gray",
          "btn-size": "medium",
          text: "基础使用",
          bold: "",
          margin: ["24rpx"],
          onClick: _cache[0] || (_cache[0] = ($event) => $options.showDialog(1))
        }),
        createVNode(_component_fui_button, {
          type: "gray",
          "btn-size": "medium",
          text: "自定义按钮",
          bold: "",
          onClick: _cache[1] || (_cache[1] = ($event) => $options.showDialog(2))
        })
      ]),
      createVNode(_component_fui_dialog, {
        show: $data.show,
        content: "弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",
        maskClosable: "",
        onClick: $options.onClick,
        onClose: $options.onClose
      }, null, 8, ["show", "onClick", "onClose"]),
      createVNode(_component_fui_dialog, {
        show: $data.visible,
        title: "我是标题",
        content: "我是自定义的对话框！",
        buttons: $data.buttons,
        onClick: $options.onTap
      }, null, 8, ["show", "buttons", "onClick"])
    ])
  ]);
}
const dialog = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/operate/dialog/dialog.nvue"]]);
export {
  dialog as default
};
