import { _ as __easycom_0 } from "../../../../fui-button.js";
import { openBlock, createElementBlock, normalizeClass, normalizeStyle, withModifiers, createElementVNode, renderSlot, createCommentVNode, resolveDynamicComponent, createVNode, withCtx, Fragment, renderList, createBlock, toDisplayString } from "vue";
import { a as requireNativePlugin, _ as _export_sfc, r as resolveEasycom } from "../../../../uni-app.es.js";
import { _ as __easycom_2$1 } from "../../../../fui-list-cell.js";
const _style_0$1 = { "fui-drawer__popup-wrap": { "": { "position": "fixed", "left": 0, "right": 0, "top": 0, "bottom": 0, "zIndex": 1001, "flexDirection": "column", "opacity": 0, "overflow": "hidden" } }, "fui-drawer__popup": { "": { "flex": 1, "flexDirection": "column", "overflow": "hidden" } }, "fui-drawer_left": { "": { "transform": "translateX(-100%)" } }, "fui-drawer_right": { "": { "transform": "translateX(100%)" } } };
const dom = weex.requireModule("dom");
const animation = requireNativePlugin("animation");
const _sfc_main$1 = {
  name: "fui-drawer",
  emits: ["close"],
  props: {
    show: {
      type: Boolean,
      default: false
    },
    //left/right
    direction: {
      type: String,
      default: "right"
    },
    //背景颜色
    background: {
      type: String,
      default: "#fff"
    },
    zIndex: {
      type: [Number, String],
      default: 996
    },
    //点击遮罩 是否可关闭
    maskClosable: {
      type: Boolean,
      default: true
    },
    maskBackground: {
      type: String,
      default: "rgba(0,0,0,.6)"
    },
    //圆角值，左侧打开时为右侧圆角，右侧打开时为左侧圆角
    radius: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    let isNvue = false;
    isNvue = true;
    return {
      isNvue,
      isShow: false,
      width: 0,
      isMounted: false
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
  mounted() {
    this.isMounted = true;
    this.$nextTick(() => {
      setTimeout(() => {
        this._getSize((width) => {
          this.width = width;
        });
      }, 100);
    });
  },
  methods: {
    _getSize(callback) {
      dom.getComponentRect(this.$refs["fui_dwr_ani"], (ret) => {
        const size = ret.size;
        if (size) {
          callback && callback(size.width);
        }
      });
    },
    handleClose(e) {
      if (!this.maskClosable)
        return;
      this.$emit("close", {});
    },
    open() {
      this.isShow = true;
      this.$nextTick(() => {
        setTimeout(() => {
          this._animation(true);
        }, 50);
      });
    },
    close() {
      this._animation(false);
    },
    _animation(type) {
      if (!this.$refs["fui_dwr_ani"] || !this.$refs["fui_dwr_mk_ani"])
        return;
      animation.transition(
        this.$refs["fui_dwr_mk_ani"].ref,
        {
          styles: {
            opacity: type ? 1 : 0
          },
          duration: 250,
          timingFunction: "ease-in-out",
          needLayout: false,
          delay: 0
          //ms
        },
        () => {
          if (!type) {
            this.isShow = false;
          }
        }
      );
      let translateX = this.direction === "left" ? "-100%" : "100%";
      animation.transition(
        this.$refs["fui_dwr_ani"].ref,
        {
          styles: {
            transform: `translateX(${type ? "0" : translateX})`
          },
          duration: 250,
          timingFunction: "ease-in-out",
          needLayout: false,
          delay: 0
          //ms
        },
        () => {
        }
      );
    },
    stop(e, tap) {
      tap && e.stopPropagation();
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.isShow || !$data.isNvue ? (openBlock(), createElementBlock(
    "view",
    {
      key: 0,
      class: normalizeClass(["fui-drawer__popup-wrap", { "fui-drawer__wrap-show": $props.show }]),
      style: normalizeStyle({ zIndex: $props.zIndex, background: $props.maskBackground, alignItems: $props.direction === "left" ? "flex-start" : "flex-end" }),
      onClick: _cache[1] || (_cache[1] = withModifiers((...args) => $options.handleClose && $options.handleClose(...args), ["stop"])),
      onTouchmove: _cache[2] || (_cache[2] = withModifiers((...args) => $options.stop && $options.stop(...args), ["stop", "prevent"])),
      ref: "fui_dwr_mk_ani",
      renderWhole: true
    },
    [
      createElementVNode(
        "view",
        {
          ref: "fui_dwr_ani",
          class: normalizeClass(["fui-drawer__popup", ["fui-drawer_" + $props.direction, $props.show ? "fui-drawer__show" : ""]]),
          style: normalizeStyle({ background: $props.background, borderTopLeftRadius: ($props.direction === "right" ? $props.radius : 0) + "rpx", borderBottomLeftRadius: ($props.direction === "right" ? $props.radius : 0) + "rpx", borderTopRightRadius: ($props.direction === "left" ? $props.radius : 0) + "rpx", borderBottomRightRadius: ($props.direction === "left" ? $props.radius : 0) + "rpx" }),
          onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $options.stop($event, true), ["stop"]))
        },
        [
          renderSlot(_ctx.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    38
    /* CLASS, STYLE, HYDRATE_EVENTS */
  )) : createCommentVNode("v-if", true);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-drawer/fui-drawer.vue"]]);
const _style_0 = { "fui-page__bd": { "": { "alignItems": "center", "justifyContent": "center", "flexDirection": "column" } }, "fui-scroll__view": { "": { "width": "520rpx", "flex": 1, "overflow": "hidden" } }, "fui-title": { "": { "paddingTop": "64rpx", "paddingRight": "32rpx", "paddingBottom": "32rpx", "paddingLeft": "32rpx", "fontWeight": "bold" } }, "fui-btn__box": { "": { "paddingTop": "40rpx", "paddingRight": 0, "paddingBottom": "40rpx", "paddingLeft": 0, "flexDirection": "row", "justifyContent": "center" } } };
const _sfc_main = {
  data() {
    return {
      show: false,
      show2: false,
      itemList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    };
  },
  methods: {
    showDrawer(type) {
      if (type === 1) {
        this.show = true;
      } else {
        this.show2 = true;
      }
    },
    closeDrawer(type) {
      if (type === 1) {
        this.show = false;
      } else {
        this.show2 = false;
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_button = resolveEasycom(resolveDynamicComponent("fui-button"), __easycom_0);
  const _component_fui_list_cell = resolveEasycom(resolveDynamicComponent("fui-list-cell"), __easycom_2$1);
  const _component_fui_drawer = resolveEasycom(resolveDynamicComponent("fui-drawer"), __easycom_2);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("u-text", { class: "fui-page__title" }, "Drawer"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "Drawer 抽屉，抽屉式导航，用于展示侧滑菜单，侧滑导航。")
      ]),
      createElementVNode("view", { class: "fui-page__bd" }, [
        createVNode(_component_fui_button, {
          type: "gray",
          "btn-size": "medium",
          text: "从右往左开",
          bold: "",
          margin: ["24rpx"],
          onClick: _cache[0] || (_cache[0] = ($event) => $options.showDrawer(1))
        }),
        createVNode(_component_fui_button, {
          type: "gray",
          "btn-size": "medium",
          text: "从左往右开",
          bold: "",
          onClick: _cache[1] || (_cache[1] = ($event) => $options.showDrawer(2))
        })
      ]),
      createVNode(_component_fui_drawer, {
        show: $data.show,
        onClose: _cache[2] || (_cache[2] = ($event) => $options.closeDrawer(1))
      }, {
        default: withCtx(() => [
          createElementVNode("scroll-view", {
            scrollY: "",
            class: "fui-scroll__view"
          }, [
            createElementVNode("view", null, [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($data.itemList, (item, index) => {
                  return openBlock(), createBlock(
                    _component_fui_list_cell,
                    {
                      arrow: "",
                      key: index
                    },
                    {
                      default: withCtx(() => [
                        createElementVNode(
                          "u-text",
                          { class: "fui-text" },
                          "item" + toDisplayString(index + 1),
                          1
                          /* TEXT */
                        )
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
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["show"]),
      createVNode(_component_fui_drawer, {
        show: $data.show2,
        direction: "left",
        radius: 24,
        maskClosable: false
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "fui-scroll__view" }, [
            createElementVNode("view", { class: "fui-title" }, [
              createElementVNode("u-text", null, "左侧菜单栏")
            ]),
            createElementVNode("scroll-view", {
              scrollY: "",
              style: { "height": "720rpx" }
            }, [
              createElementVNode("view", null, [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($data.itemList, (item, index) => {
                    return openBlock(), createBlock(
                      _component_fui_list_cell,
                      { key: index },
                      {
                        default: withCtx(() => [
                          createElementVNode(
                            "u-text",
                            { class: "fui-text" },
                            "item" + toDisplayString(index + 1),
                            1
                            /* TEXT */
                          )
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
              ])
            ]),
            createElementVNode("view", { class: "fui-btn__box" }, [
              createVNode(_component_fui_button, {
                type: "warning",
                "btn-size": "medium",
                text: "关闭菜单栏",
                bold: "",
                onClick: _cache[3] || (_cache[3] = ($event) => $options.closeDrawer(2))
              })
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["show"])
    ])
  ]);
}
const drawer = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/nav/drawer/drawer.nvue"]]);
export {
  drawer as default
};
