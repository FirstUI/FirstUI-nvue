import { a as requireNativePlugin, _ as _export_sfc, f as formatAppLog, r as resolveEasycom } from "../../../../uni-app.es.js";
import { _ as __easycom_0 } from "../../../../fui-text.js";
import { openBlock, createElementBlock, normalizeStyle, createElementVNode, renderSlot, Fragment, renderList, withModifiers, toDisplayString, resolveDynamicComponent, createVNode, withCtx, createCommentVNode } from "vue";
import { _ as __easycom_2$1 } from "../../../../fui-list-cell.js";
import { _ as __easycom_1 } from "../../../../fui-icon.js";
const mpwxs = {};
const mpjs = {};
const BindingX = requireNativePlugin("bindingx");
const dom = requireNativePlugin("dom");
const animation = requireNativePlugin("animation");
const bindingx = {
  data() {
    return {};
  },
  watch: {
    show(newVal) {
      if (this.stop)
        return;
      this.stop = true;
      if (newVal) {
        this.open(newVal);
      } else {
        this.close();
      }
    },
    buttons(newVal) {
      this.init();
    }
  },
  created() {
    this.group = this.getParent();
    if (this.group.children !== void 0) {
      this.group.children.push(this);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.box = this.getEl(this.$refs["fui_swipea_wrap"]);
      this.selector = this.getEl(this.$refs["fui_swipea_content"]);
      this.rightButton = this.getEl(this.$refs["fui_swipea_buttons"]);
    });
    this.init();
  },
  methods: {
    init() {
      this.$nextTick(() => {
        this.x = 0;
        this.button = {
          show: false
        };
        setTimeout(() => {
          this.getSelectorQuery();
        }, 200);
      });
    },
    handleClick(e, index, item) {
      e.stopPropagation();
      this.$emit("click", {
        item,
        index,
        param: this.param
      });
    },
    touchstart(e) {
      if (this.disabled)
        return;
      if (this.stop)
        return;
      this.stop = true;
      if (this.autoClose) {
        this.group && this.group.closeAuto(this);
      }
      const rightWidth = this.button.right.width || 0;
      let expression = this.range(this.x, -rightWidth, 0);
      let rightExpression = this.range(this.x + rightWidth, 0, rightWidth);
      this.eventpan = BindingX.bind({
        anchor: this.box,
        eventType: "pan",
        props: [{
          element: this.selector,
          property: "transform.translateX",
          expression
        }, {
          element: this.rightButton,
          property: "transform.translateX",
          expression: rightExpression
        }]
      }, (e2) => {
        if (e2.state === "end") {
          this.x = e2.deltaX + this.x;
          this.isclick = true;
          this.bindTiming(e2.deltaX);
        }
      });
    },
    touchend(e) {
      if (this.isopen && !this.isclick) {
        this.open(false);
      }
    },
    bindTiming(x) {
      const left = this.x;
      this.button.right.width || 0;
      const threshold = Number(this.threshold);
      if (!this.isopen) {
        if (left < -threshold) {
          this.open(true);
        } else {
          this.open(false);
        }
      } else {
        if (x < threshold && x > 0 || x < -threshold) {
          this.open(true);
        } else {
          this.open(false);
        }
      }
    },
    range(num, mix, max) {
      return `min(max(x+${num}, ${mix}), ${max})`;
    },
    open(type) {
      this.animation(type);
    },
    close() {
      this.animation(false);
    },
    animation(type) {
      const rightWidth = this.button.right.width || 0;
      if (this.eventpan && this.eventpan.token) {
        BindingX.unbind({
          token: this.eventpan.token,
          eventType: "pan"
        });
      }
      if (type) {
        Promise.all([
          this.move(this.selector, -rightWidth),
          this.move(this.rightButton, 0)
        ]).then(() => {
          this.setEmit(-rightWidth, type);
        });
      } else {
        Promise.all([
          this.move(this.selector, 0),
          this.move(this.rightButton, rightWidth)
        ]).then(() => {
          this.setEmit(0, type);
        });
      }
    },
    setEmit(x, type) {
      const rightWidth = this.button.right.width;
      this.isopen = this.isopen || false;
      this.stop = false;
      this.isclick = false;
      if (this.isopen !== type && this.x !== x) {
        if (type && rightWidth > 0) {
          this.$emit("change", {
            isOpen: true,
            param: this.param
          });
        }
        if (!type) {
          this.$emit("change", {
            isOpen: false,
            param: this.param
          });
        }
      }
      this.x = x;
      this.isopen = type;
    },
    move(ref, value) {
      return new Promise((resolve, reject) => {
        animation.transition(ref, {
          styles: {
            transform: `translateX(${value})`
          },
          duration: 150,
          //ms
          timingFunction: "linear",
          needLayout: false,
          delay: 0
          //ms
        }, function(res) {
          resolve(res);
        });
      });
    },
    getEl(el) {
      return el.ref;
    },
    getSelectorQuery() {
      Promise.all([
        this.getDom()
      ]).then((data) => {
        this.open(this.show);
      });
    },
    getDom() {
      return new Promise((resolve, reject) => {
        dom.getComponentRect(this.$refs["fui_swipea_buttons"], (data) => {
          if (data) {
            this.button["right"] = data.size;
            resolve(data);
          } else {
            reject();
          }
        });
      });
    }
  }
};
const _style_0$1 = { "fui-swipe__action-wrap": { "": { "position": "relative" } }, "fui-swipe__action-inner": { "": { "position": "relative" } }, "fui-swipe__action-left": { "": { "flex": 1 } }, "fui-swipe__action-right": { "": { "flexDirection": "row", "position": "absolute", "top": 0, "bottom": 0, "right": 0, "transform": "translateX(100%)" } }, "fui-swipe__action-btn": { "": { "flex": 1, "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "paddingTop": 0, "paddingRight": "48rpx", "paddingBottom": 0, "paddingLeft": "48rpx" } }, "fui-swipe__action-ani": { "": { "transitionProperty": "transform", "transitionDuration": 300, "transitionTimingFunction": "cubic-bezier(0.165,0.84,0.44,1)" } }, "@TRANSITION": { "fui-swipe__action-ani": { "property": "transform", "duration": 300, "timingFunction": "cubic-bezier(0.165,0.84,0.44,1)" } } };
const dangerColor = uni && uni.$fui && uni.$fui.color && uni.$fui.color.danger || "#FF2B2B";
const _sfc_main$2 = {
  name: "fui-swipe-action",
  mixins: [mpwxs, mpjs, bindingx],
  emits: ["click", "change"],
  props: {
    buttons: {
      type: Array,
      default() {
        return [{
          text: "删除",
          background: dangerColor
        }];
      }
    },
    size: {
      type: [Number, String],
      default: 32
    },
    color: {
      type: String,
      default: "#fff"
    },
    show: {
      type: Boolean,
      default: false
    },
    threshold: {
      type: [Number, String],
      default: 30
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    //1.9.9+
    marginTop: {
      type: [Number, String],
      default: 0
    },
    //1.9.9+
    marginBottom: {
      type: [Number, String],
      default: 0
    },
    param: {
      type: [Number, String],
      default: 0
    }
  },
  beforeUnmount() {
    this.__beforeUnmount = true;
    this.unInstall();
  },
  methods: {
    unInstall() {
      if (this.group) {
        this.group.children.forEach((item, index) => {
          if (item === this) {
            this.group.children.splice(index, 1);
          }
        });
      }
    },
    //获取父元素实例
    getParent(name = "fui-swipeaction-group") {
      let parent = this.$parent;
      let parentName = parent.$options.name;
      while (parentName !== name) {
        parent = parent.$parent;
        if (!parent)
          return false;
        parentName = parent.$options.name;
      }
      return parent;
    }
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: "fui-swipe__action-wrap",
      style: normalizeStyle({ marginTop: $props.marginTop + "rpx", marginBottom: $props.marginBottom + "rpx" }),
      ref: "fui_swipea_wrap",
      onHorizontalpan: _cache[0] || (_cache[0] = (...args) => _ctx.touchstart && _ctx.touchstart(...args)),
      onTouchend: _cache[1] || (_cache[1] = (...args) => _ctx.touchend && _ctx.touchend(...args)),
      renderWhole: true
    },
    [
      createElementVNode(
        "view",
        {
          class: "fui-swipe__action-right",
          ref: "fui_swipea_buttons"
        },
        [
          renderSlot(_ctx.$slots, "buttons", {}, () => [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($props.buttons, (item, index) => {
                return openBlock(), createElementBlock("view", {
                  class: "fui-swipe__action-btn",
                  style: normalizeStyle({ background: item.background }),
                  key: index,
                  onClick: withModifiers(($event) => _ctx.handleClick($event, index, item), ["stop"])
                }, [
                  createElementVNode(
                    "u-text",
                    {
                      class: "fui-swipe__action-text",
                      style: normalizeStyle({ fontSize: (item.size || $props.size) + "rpx", color: item.color || $props.color })
                    },
                    toDisplayString(item.text),
                    5
                    /* TEXT, STYLE */
                  )
                ], 12, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ],
        512
        /* NEED_PATCH */
      ),
      createElementVNode(
        "view",
        {
          class: "fui-swipe__action-left",
          ref: "fui_swipea_content"
        },
        [
          renderSlot(_ctx.$slots, "default")
        ],
        512
        /* NEED_PATCH */
      )
    ],
    36
    /* STYLE, HYDRATE_EVENTS */
  );
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-swipe-action/fui-swipe-action.vue"]]);
const _sfc_main$1 = {
  name: "fui-swipeaction-group",
  data() {
    return {};
  },
  created() {
    this.children = [];
  },
  methods: {
    reset() {
      this.children.forEach((child) => {
        child.init();
      });
    },
    close() {
      this.children.forEach((child) => {
        child.close();
      });
    },
    closeAuto(child) {
      if (this.openItem && this.openItem !== child) {
        this.openItem.close();
      }
      this.openItem = child;
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", { renderWhole: true }, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-swipeaction-group/fui-swipeaction-group.vue"]]);
const _style_0 = { "fui-wrap": { "": { "paddingBottom": "64rpx" } }, "fui-section__title": { "": { "marginLeft": "32rpx" } }, "fui-menu__box": { "": { "width": "160rpx", "flexDirection": "row", "alignItems": "center", "justifyContent": "center" } }, "fui-menu__btn": { "": { "width": "88rpx", "height": "88rpx", "backgroundColor": "#ffffff", "borderRadius": "48rpx", "alignItems": "center", "justifyContent": "center" } } };
const _sfc_main = {
  data() {
    return {
      show: false,
      buttons: [{
        text: "标为未读",
        background: "#465CFF"
      }, {
        text: "删除",
        background: "#FF2B2B"
      }]
    };
  },
  onLoad() {
    setTimeout(() => {
      this.show = true;
    }, 500);
  },
  methods: {
    vip() {
      uni.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容");
    },
    onClick(e) {
      formatAppLog("log", "at pages/component/operate/swipeAction/swipeAction.nvue:80", e);
      uni.fui.toast(e.item.text);
    },
    change(e) {
      formatAppLog("log", "at pages/component/operate/swipeAction/swipeAction.nvue:84", e);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_text = resolveEasycom(resolveDynamicComponent("fui-text"), __easycom_0);
  const _component_fui_list_cell = resolveEasycom(resolveDynamicComponent("fui-list-cell"), __easycom_2$1);
  const _component_fui_swipe_action = resolveEasycom(resolveDynamicComponent("fui-swipe-action"), __easycom_2);
  const _component_fui_icon = resolveEasycom(resolveDynamicComponent("fui-icon"), __easycom_1);
  const _component_fui_swipeaction_group = resolveEasycom(resolveDynamicComponent("fui-swipeaction-group"), __easycom_4);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("view", {
          class: "fui-page__title fui-align__center",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.vip && $options.vip(...args))
        }, [
          createVNode(_component_fui_text, {
            "font-weight": "600",
            size: "36",
            text: "SwipeAction"
          }),
          createElementVNode("u-image", {
            class: "fui-vip__icon",
            src: "/static/images/index/light/icon_member_3x.png"
          })
        ]),
        createElementVNode("u-text", { class: "fui-page__desc" }, "SwipeAction 滑动菜单，用于滑动操作的组件。")
      ]),
      createElementVNode("view", { class: "fui-page__bd" }, [
        createElementVNode("u-text", { class: "fui-section__title fui-mtop--0" }, "基础使用"),
        createVNode(_component_fui_swipeaction_group, null, {
          default: withCtx(() => [
            createCommentVNode("循环中区分可传参索引值：onClick($event,index) ,也可使用param属性值"),
            createVNode(_component_fui_swipe_action, {
              onClick: $options.onClick,
              onChange: $options.change
            }, {
              default: withCtx(() => [
                createVNode(_component_fui_list_cell, {
                  padding: ["36rpx", "32rpx"],
                  highlight: false
                }, {
                  default: withCtx(() => [
                    createElementVNode("u-text", null, "默认菜单按钮")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onClick", "onChange"]),
            createVNode(_component_fui_swipe_action, {
              buttons: $data.buttons,
              onClick: $options.onClick,
              onChange: $options.change
            }, {
              default: withCtx(() => [
                createVNode(_component_fui_list_cell, {
                  padding: ["36rpx", "32rpx"],
                  highlight: false
                }, {
                  default: withCtx(() => [
                    createElementVNode("u-text", null, "自定义菜单按钮")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["buttons", "onClick", "onChange"]),
            createVNode(_component_fui_swipe_action, { buttons: $data.buttons }, {
              buttons: withCtx(() => [
                createElementVNode("view", { class: "fui-menu__box" }, [
                  createElementVNode("view", { class: "fui-menu__btn" }, [
                    createVNode(_component_fui_icon, {
                      name: "delete",
                      size: 44
                    })
                  ])
                ])
              ]),
              default: withCtx(() => [
                createVNode(_component_fui_list_cell, {
                  padding: ["36rpx", "32rpx"],
                  highlight: false
                }, {
                  default: withCtx(() => [
                    createElementVNode("u-text", null, "插槽菜单")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["buttons"])
          ]),
          _: 1
          /* STABLE */
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "禁止滑动"),
        createVNode(_component_fui_swipeaction_group, null, {
          default: withCtx(() => [
            createVNode(_component_fui_swipe_action, { disabled: "" }, {
              default: withCtx(() => [
                createVNode(_component_fui_list_cell, {
                  padding: ["36rpx", "32rpx"],
                  highlight: false
                }, {
                  default: withCtx(() => [
                    createElementVNode("u-text", null, "不可滑动")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "默认打开"),
        createVNode(_component_fui_swipeaction_group, null, {
          default: withCtx(() => [
            createVNode(_component_fui_swipe_action, { show: $data.show }, {
              default: withCtx(() => [
                createVNode(_component_fui_list_cell, {
                  padding: ["36rpx", "32rpx"],
                  highlight: false
                }, {
                  default: withCtx(() => [
                    createElementVNode("u-text", null, "默认打开状态")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["show"])
          ]),
          _: 1
          /* STABLE */
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "可独立打开，不自动关闭"),
        createVNode(_component_fui_swipeaction_group, null, {
          default: withCtx(() => [
            createVNode(_component_fui_swipe_action, { autoClose: false }, {
              default: withCtx(() => [
                createVNode(_component_fui_list_cell, {
                  padding: ["36rpx", "32rpx"],
                  highlight: false
                }, {
                  default: withCtx(() => [
                    createElementVNode("u-text", null, "左滑菜单")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_fui_swipe_action, {
              autoClose: false,
              buttons: $data.buttons
            }, {
              default: withCtx(() => [
                createVNode(_component_fui_list_cell, {
                  padding: ["36rpx", "32rpx"],
                  highlight: false
                }, {
                  default: withCtx(() => [
                    createElementVNode("u-text", null, "自定义菜单按钮")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["buttons"])
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ])
  ]);
}
const swipeAction = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/operate/swipeAction/swipeAction.nvue"]]);
export {
  swipeAction as default
};
