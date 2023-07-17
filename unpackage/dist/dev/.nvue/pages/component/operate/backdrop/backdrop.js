import { _ as __easycom_0 } from "../../../../fui-button.js";
import { openBlock, createElementBlock, normalizeStyle, withModifiers, renderSlot, resolveDynamicComponent, createElementVNode, createVNode, createCommentVNode } from "vue";
import { a as requireNativePlugin, _ as _export_sfc, r as resolveEasycom } from "../../../../uni-app.es.js";
const _style_0$1 = { "fui-backdrop__wrap": { "": { "left": 0, "right": 0, "top": 0, "bottom": 0, "alignItems": "center", "justifyContent": "center", "opacity": 1e-3 } } };
const animation = requireNativePlugin("animation");
const _sfc_main$1 = {
  name: "fui-backdrop",
  emits: ["click"],
  props: {
    show: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: "rgba(0, 0, 0, 0.6)"
    },
    //是否绝对定位，默认固定定位fixed
    absolute: {
      type: Boolean,
      default: false
    },
    //absolute定位且组件在根目录下时是否铺满屏幕,仅nvue有效
    full: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 980
    },
    closable: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    show(val) {
      if (val) {
        this.openAni();
      } else {
        this.closeAni();
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        if (this.show) {
          this._ani(true);
        } else {
          this._aniHidden(this.show);
        }
      }, 50);
    });
  },
  data() {
    return {
      winWidth: 300,
      winHeight: 600
    };
  },
  created() {
    let sys = uni.getSystemInfoSync();
    this.winWidth = sys.windowWidth;
    this.winHeight = sys.windowHeight;
  },
  methods: {
    openAni() {
      this._aniHidden(true, () => {
        this._ani(true);
      });
    },
    closeAni(type) {
      this._ani(false, () => {
        this._aniHidden(false);
      });
    },
    _ani(type, callback) {
      let styles = {
        opacity: type ? 1 : 0
      };
      if (!this.$refs["fui_bd_ani"])
        return;
      animation.transition(
        this.$refs["fui_bd_ani"].ref,
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
          callback && callback();
        }
      );
    },
    _aniHidden(isShow, callback) {
      if (!this.$refs["fui_bd_ani"])
        return;
      let styles = {
        transform: isShow ? "translateX(0px)" : "translateX(-1500px)"
      };
      animation.transition(
        this.$refs["fui_bd_ani"].ref,
        {
          styles,
          duration: 0,
          needLayout: false,
          delay: 0
        },
        () => {
          callback && callback();
        }
      );
    },
    handleClick() {
      if (this.closable && this.show) {
        this.$emit("click");
      }
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      ref: "fui_bd_ani",
      class: "fui-backdrop__wrap",
      style: normalizeStyle({ background: $props.background, position: $props.absolute ? "absolute" : "fixed", width: $props.absolute && $props.full ? $data.winWidth + "px" : "100%", height: $props.absolute && $props.full ? $data.winHeight + "px" : "100%" }),
      onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.handleClick && $options.handleClick(...args), ["stop"])),
      renderWhole: true
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    4
    /* STYLE */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-backdrop/fui-backdrop.vue"]]);
const _style_0 = { "fui-page__bd": { "": { "alignItems": "center", "justifyContent": "center", "flexDirection": "column" } } };
const _sfc_main = {
  data() {
    return {
      show: false
    };
  },
  methods: {
    open() {
      this.show = true;
    },
    //关闭遮罩通过show进行控制
    close() {
      this.show = false;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_button = resolveEasycom(resolveDynamicComponent("fui-button"), __easycom_0);
  const _component_fui_backdrop = resolveEasycom(resolveDynamicComponent("fui-backdrop"), __easycom_1);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("u-text", { class: "fui-page__title" }, "Backdrop"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "Backdrop 遮罩层，在组件中设置显示蒙层。")
      ]),
      createElementVNode("view", { class: "fui-page__bd" }, [
        createVNode(_component_fui_button, {
          type: "gray",
          "btn-size": "medium",
          text: "打开遮罩层",
          bold: "",
          margin: ["24rpx"],
          onClick: $options.open
        }, null, 8, ["onClick"])
      ]),
      createCommentVNode("closable为true时click事件才生效"),
      createVNode(_component_fui_backdrop, {
        show: $data.show,
        closable: "",
        onClick: $options.close
      }, null, 8, ["show", "onClick"])
    ])
  ]);
}
const backdrop = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/operate/backdrop/backdrop.nvue"]]);
export {
  backdrop as default
};
