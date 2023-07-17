import { a as requireNativePlugin, _ as _export_sfc, f as formatAppLog, r as resolveEasycom } from "../../../../uni-app.es.js";
import { _ as __easycom_0 } from "../../../../fui-button.js";
import { openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot, createCommentVNode, resolveDynamicComponent, createElementVNode, createVNode, withCtx } from "vue";
import { _ as __easycom_0$1 } from "../../../../fui-text.js";
const _style_0$1 = { "fui-popup__animation": { "": { "transitionTimingFunction": "ease", "transitionDuration": 300, "transitionProperty": "transform,opacity", "position": "relative", "zIndex": 99 } }, "fui-popup__fade-out": { "": { "opacity": 0 } }, "fui-popup__fade-in": { "": { "opacity": 1 } }, "@TRANSITION": { "fui-popup__animation": { "timingFunction": "ease", "duration": 300, "property": "transform,opacity" } } };
const animation$1 = requireNativePlugin("animation");
const _sfc_main$1 = {
  name: "fui-animation",
  emits: ["click", "change"],
  props: {
    //是否显示
    show: {
      type: Boolean,
      default: false
    },
    /*
     过渡动画类型
      ['fade,'slide-top','slide-right','slide-bottom','slide-left','zoom-in','zoom-out']
    */
    animationType: {
      type: Array,
      default() {
        return [];
      }
    },
    duration: {
      type: Number,
      default: 300
    },
    //styles 组件样式，同 css 样式
    styles: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      isShow: false,
      transform: "",
      ani: {
        in: "",
        active: ""
      }
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
  computed: {
    stylesObject() {
      const defStyles = {
        position: "fixed",
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        "justify-content": "center",
        "align-items": "center"
      };
      const mergeStyles = Object.assign({}, defStyles, this.styles);
      const styles = {
        ...mergeStyles,
        "transition-duration": this.duration / 1e3 + "s"
      };
      let transfrom = "";
      for (let i in styles) {
        let line = this.toLine(i);
        transfrom += line + ":" + styles[i] + ";";
      }
      return transfrom;
    }
  },
  methods: {
    change() {
      this.$emit("click", {
        detail: this.isShow
      });
    },
    open() {
      clearTimeout(this.timer);
      this.isShow = true;
      this.transform = "";
      this.ani.in = "";
      for (let i in this.getTranfrom(false)) {
        if (i === "opacity") {
          this.ani.in = "fui-popup__fade-out";
        } else {
          this.transform += `${this.getTranfrom(false)[i]} `;
        }
      }
      this.$nextTick(() => {
        setTimeout(() => {
          this._animation(true);
        }, 50);
      });
    },
    close(type) {
      clearTimeout(this.timer);
      this._animation(false);
    },
    _animation(type) {
      let styles = this.getTranfrom(type);
      if (!this.$refs["fui_ani"])
        return;
      animation$1.transition(
        this.$refs["fui_ani"].ref,
        {
          styles,
          duration: this.duration,
          //ms
          timingFunction: "ease",
          needLayout: false,
          delay: 0
          //ms
        },
        () => {
          if (!type) {
            this.isShow = false;
          }
          this.$emit("change", {
            detail: this.isShow
          });
        }
      );
    },
    getTranfrom(type) {
      let styles = {
        transform: ""
      };
      this.animationType.forEach((mode) => {
        switch (mode) {
          case "fade":
            styles.opacity = type ? 1 : 0;
            break;
          case "slide-top":
            styles.transform += `translateY(${type ? "0" : "-100%"}) `;
            break;
          case "slide-right":
            styles.transform += `translateX(${type ? "0" : "100%"}) `;
            break;
          case "slide-bottom":
            styles.transform += `translateY(${type ? "0" : "100%"}) `;
            break;
          case "slide-left":
            styles.transform += `translateX(${type ? "0" : "-100%"}) `;
            break;
          case "zoom-in":
            styles.transform += `scale(${type ? 1 : 0.8}) `;
            break;
          case "zoom-out":
            styles.transform += `scale(${type ? 1 : 1.2}) `;
            break;
        }
      });
      return styles;
    },
    toLine(name) {
      return name.replace(/([A-Z])/g, "-$1").toLowerCase();
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.isShow ? (openBlock(), createElementBlock(
    "view",
    {
      key: 0,
      class: normalizeClass(["fui-popup__animation", [$data.ani.in]]),
      style: normalizeStyle("transform:" + $data.transform + ";" + $options.stylesObject),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.change && $options.change(...args)),
      ref: "fui_ani",
      renderWhole: true
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  )) : createCommentVNode("v-if", true);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-animation/fui-animation.vue"]]);
const _style_0 = { "fui-page__bd": { "": { "alignItems": "center", "justifyContent": "center", "flexDirection": "column" } }, "fui-ani__box": { "": { "width": "240rpx", "height": "240rpx", "backgroundColor": "#6831FF" } } };
const _sfc_main = {
  data() {
    return {
      show: false,
      mode: ["fade"],
      styles: {}
    };
  },
  methods: {
    ani(mode, mask) {
      if (mask) {
        this.$set(this.styles, "backgroundColor", "rgba(0,0,0,0.6)");
      } else {
        this.$set(this.styles, "backgroundColor", "rgba(0,0,0,0)");
      }
      setTimeout(() => {
        this.mode = mode;
        this.show = !this.show;
      }, 80);
    },
    handleClick() {
      this.show = false;
    },
    change(e) {
      formatAppLog("log", "at pages/component/basics/animation/animation.nvue:61", e);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_button = resolveEasycom(resolveDynamicComponent("fui-button"), __easycom_0);
  const _component_fui_text = resolveEasycom(resolveDynamicComponent("fui-text"), __easycom_0$1);
  const _component_fui_animation = resolveEasycom(resolveDynamicComponent("fui-animation"), __easycom_2);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("u-text", { class: "fui-page__title" }, "Animation"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "Animation 动画，过渡效果。")
      ]),
      createElementVNode("view", { class: "fui-page__bd fui-page__spacing" }, [
        createVNode(_component_fui_button, {
          type: "gray",
          "btn-size": "medium",
          text: "Fade",
          bold: "",
          margin: ["24rpx"],
          onClick: _cache[0] || (_cache[0] = ($event) => $options.ani(["fade"], true))
        }),
        createVNode(_component_fui_button, {
          type: "gray",
          "btn-size": "medium",
          text: "Slide Top",
          bold: "",
          onClick: _cache[1] || (_cache[1] = ($event) => $options.ani(["slide-top"]))
        }),
        createVNode(_component_fui_button, {
          type: "gray",
          "btn-size": "medium",
          text: "Slide Left",
          bold: "",
          margin: ["24rpx"],
          onClick: _cache[2] || (_cache[2] = ($event) => $options.ani(["slide-left"]))
        }),
        createVNode(_component_fui_button, {
          type: "gray",
          "btn-size": "medium",
          text: "Slide Right",
          bold: "",
          onClick: _cache[3] || (_cache[3] = ($event) => $options.ani(["slide-right"]))
        }),
        createVNode(_component_fui_button, {
          type: "gray",
          "btn-size": "medium",
          text: "Slide Bottom",
          bold: "",
          margin: ["24rpx"],
          onClick: _cache[4] || (_cache[4] = ($event) => $options.ani(["slide-bottom"]))
        }),
        createVNode(_component_fui_button, {
          type: "gray",
          "btn-size": "medium",
          text: "Zoom In",
          bold: "",
          onClick: _cache[5] || (_cache[5] = ($event) => $options.ani(["zoom-in", "fade"]))
        }),
        createVNode(_component_fui_button, {
          type: "gray",
          "btn-size": "medium",
          text: "Zoom Out",
          bold: "",
          margin: ["24rpx"],
          onClick: _cache[6] || (_cache[6] = ($event) => $options.ani(["zoom-out", "fade"]))
        }),
        createVNode(_component_fui_button, {
          type: "gray",
          "btn-size": "medium",
          text: "Custom",
          bold: "",
          onClick: _cache[7] || (_cache[7] = ($event) => $options.ani(["slide-left", "slide-top", "fade"]))
        })
      ]),
      createVNode(_component_fui_animation, {
        duration: 500,
        animationType: $data.mode,
        styles: $data.styles,
        show: $data.show,
        onClick: $options.handleClick,
        onChange: $options.change
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "fui-ani__box fui-flex__center" }, [
            createVNode(_component_fui_text, {
              text: "transition",
              color: "#fff"
            })
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["animationType", "styles", "show", "onClick", "onChange"])
    ])
  ]);
}
const animation = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/basics/animation/animation.nvue"]]);
export {
  animation as default
};
