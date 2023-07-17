import { openBlock, createElementBlock, normalizeStyle, renderSlot, normalizeClass, resolveDynamicComponent, createElementVNode, createVNode, withCtx } from "vue";
import { _ as _export_sfc, r as resolveEasycom } from "../../../../uni-app.es.js";
const _style_0$2 = {};
const _sfc_main$2 = {
  name: "fui-col",
  props: {
    //栅格占据的列数
    span: {
      type: Number,
      default: 24
    },
    //栅格左侧的间隔格数
    offset: {
      type: Number,
      default: 0
    },
    //栅格向右移动格数
    pushLeft: {
      type: Number,
      default: -1
    },
    //栅格向左移动格数
    pullRight: {
      type: Number,
      default: -1
    },
    //max-width:767px 响应式栅格数或者栅格属性对象
    //Number时表示在此屏幕宽度下，栅格占据的列数。Object时可配置多个描述{span: 4, offset: 4}
    xs: {
      type: [Number, Object],
      default: -1
    },
    //max-width:768px 响应式栅格数或者栅格属性对象
    sm: {
      type: [Number, Object],
      default: -1
    },
    //max-width:992px 响应式栅格数或者栅格属性对象
    md: {
      type: [Number, Object],
      default: -1
    },
    //max-width:1200px 响应式栅格数或者栅格属性对象
    lg: {
      type: [Number, Object],
      default: -1
    },
    //max-width:1920px 响应式栅格数或者栅格属性对象
    xl: {
      type: [Number, Object],
      default: -1
    }
  },
  data() {
    return {
      classList: "fui-col",
      gutter: 0,
      sizeClass: "",
      parentWidth: 0,
      nvueWidth: 0,
      marginLeft: 0,
      right: 0,
      left: 0
    };
  },
  created() {
    let parent = this.$parent;
    while (parent && parent.$options.componentName !== "fuiRow") {
      parent = parent.$parent;
    }
    this.updateGutter(parent.gutter);
    parent.$watch("gutter", (gutter) => {
      this.updateGutter(gutter);
    });
    this.updateNvueWidth(parent.width);
    parent.$watch("width", (width) => {
      this.updateNvueWidth(width);
    });
  },
  computed: {
    sizeChange() {
      let {
        span,
        offset,
        pullRight,
        pushLeft
      } = this;
      return `${span}-${offset}-${pullRight}-${pushLeft}`;
    }
  },
  watch: {
    sizeChange: {
      immediate: true,
      handler(newVal) {
        this.updateNvueWidth(this.parentWidth);
      }
    }
  },
  methods: {
    updateGutter(parentGutter) {
      parentGutter = Number(parentGutter);
      if (!isNaN(parentGutter)) {
        this.gutter = parentGutter / 2;
      }
    },
    updateNvueWidth(width) {
      this.parentWidth = width;
      ["span", "offset", "pull", "push"].forEach((size) => {
        const curSize = this[size];
        if ((curSize || curSize === 0) && curSize !== -1) {
          let RPX = 1 / 24 * curSize * width;
          RPX = Number(RPX);
          switch (size) {
            case "span":
              this.nvueWidth = RPX;
              break;
            case "offset":
              this.marginLeft = RPX;
              break;
            case "pull":
              this.right = RPX;
              break;
            case "push":
              this.left = RPX;
              break;
          }
        }
      });
    },
    updateCol() {
      let classList = ["fui-col"];
      classList.push("fui-col-" + this.span);
      classList.push("fui-col-offset-" + this.offset);
      if (this.pushLeft !== -1) {
        this.pushLeft && classList.push("fui-col-push-" + this.pushLeft);
      }
      if (this.pullRight !== -1) {
        this.pullRight && classList.push("fui-col-pull-" + this.pullRight);
      }
      this.screenSizeSet("xs", classList);
      this.screenSizeSet("sm", classList);
      this.screenSizeSet("md", classList);
      this.screenSizeSet("lg", classList);
      this.screenSizeSet("xl", classList);
      this.classList = classList;
    },
    screenSizeSet(screen, classList) {
      if (typeof this[screen] === "number" && this[screen] !== -1) {
        classList.push("fui-col-" + screen + "-" + this[screen]);
      } else if (typeof this[screen] === "object") {
        typeof this[screen].offset === "number" && classList.push("fui-col-" + screen + "-offset-" + this[screen].offset);
        typeof this[screen].pushLeft === "number" && classList.push("fui-col-" + screen + "-push-" + this[screen].pushLeft);
        typeof this[screen].pullRight === "number" && classList.push("fui-col-" + screen + "-pull-" + this[screen].pullRight);
        typeof this[screen].span === "number" && classList.push("fui-col-" + screen + "-" + this[screen].span);
      }
    }
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      style: normalizeStyle({
        paddingLeft: `${Number($data.gutter)}rpx`,
        paddingRight: `${Number($data.gutter)}rpx`,
        width: `${$data.nvueWidth}rpx`,
        position: "relative",
        marginLeft: `${$data.marginLeft}rpx`,
        left: `${$data.right === 0 ? $data.left : -$data.right}rpx`
      }),
      renderWhole: true
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    4
    /* STYLE */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-col/fui-col.vue"]]);
const _style_0$1 = { "fui-row__box": { "": { "flex": 1, "position": "relative", "flexDirection": "row" } }, "fui-row__flex": { "": { "flexDirection": "row" } }, "fui-row__middle": { "": { "alignItems": "center" } }, "fui-row__bottom": { "": { "alignItems": "flex-end" } }, "fui-row__end": { "": { "justifyContent": "flex-end" } }, "fui-row__center": { "": { "justifyContent": "center" } }, "fui-row__space-around": { "": { "justifyContent": "space-around" } }, "fui-row__space-between": { "": { "justifyContent": "space-between" } } };
const _sfc_main$1 = {
  name: "fui-row",
  componentName: "fuiRow",
  props: {
    //是否为flex布局
    isFlex: {
      type: Boolean,
      default: false
    },
    //flex 布局下的水平排列方式 start/end/center/space-around/space-between
    justify: {
      type: String,
      default: "start"
    },
    //flex 布局下的垂直排列方式	top/middle/bottom
    align: {
      type: String,
      default: "top"
    },
    marginTop: {
      type: String,
      default: "0"
    },
    marginBottom: {
      type: String,
      default: "0"
    },
    //栅格间隔
    gutter: {
      type: Number,
      default: 0
    },
    // nvue如果使用span等属性，需要配置宽度
    width: {
      type: [String, Number],
      default: 750
    }
  },
  data() {
    return {
      flex: false
    };
  },
  watch: {
    isFlex(val) {
    }
  },
  created() {
    this.flex = true;
  },
  computed: {
    marginValue() {
      return 0;
    },
    justifyClass() {
      return this.justify !== "start" ? `fui-row__${this.justify}` : "";
    },
    alignClass() {
      return this.align !== "top" ? `fui-row__${this.align}` : "";
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["fui-row__box", [$data.flex ? "fui-row__flex" : "", $options.justifyClass, $options.alignClass]]),
      style: normalizeStyle({
        marginTop: $props.marginTop,
        marginBottom: $props.marginBottom,
        marginLeft: `-${$options.marginValue}rpx`,
        marginRight: `-${$options.marginValue}rpx`
      }),
      renderWhole: true
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-row/fui-row.vue"]]);
const _style_0 = { "fui-section__title": { "": { "marginLeft": "32rpx" } }, "fui-col__item": { "": { "height": "84rpx", "borderRadius": "16rpx" } }, "fui-color__black": { "": { "backgroundColor": "#333333" } }, "fui-color__yellow": { "": { "backgroundColor": "#FFB703" } } };
const _sfc_main = {
  data() {
    return {
      gutter: 0
    };
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_col = resolveEasycom(resolveDynamicComponent("fui-col"), __easycom_0);
  const _component_fui_row = resolveEasycom(resolveDynamicComponent("fui-row"), __easycom_1);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("u-text", { class: "fui-page__title" }, "Layout"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "Layout 栅格布局，将整个屏幕宽度分为 24 单位，每个单位的大小，由当前屏幕尺寸决定。")
      ]),
      createElementVNode("view", { class: "fui-page__bd" }, [
        createElementVNode("u-text", { class: "fui-section__title fui-mtop--0" }, "基础布局"),
        createVNode(_component_fui_row, { "margin-bottom": "24rpx" }, {
          default: withCtx(() => [
            createVNode(_component_fui_col, null, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-col__item fui-color__black" })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_fui_row, { "margin-bottom": "24rpx" }, {
          default: withCtx(() => [
            createVNode(_component_fui_col, { span: 12 }, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-col__item fui-color__black" })
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_fui_col, { span: 12 }, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-col__item fui-color__yellow" })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_fui_row, { marginBottom: "24rpx" }, {
          default: withCtx(() => [
            createVNode(_component_fui_col, { span: 8 }, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-col__item fui-color__black" })
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_fui_col, { span: 8 }, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-col__item fui-color__yellow" })
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_fui_col, { span: 8 }, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-col__item fui-color__black" })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_fui_row, { marginBottom: "24rpx" }, {
          default: withCtx(() => [
            createVNode(_component_fui_col, { span: 6 }, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-col__item fui-color__black" })
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_fui_col, { span: 6 }, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-col__item fui-color__yellow" })
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_fui_col, { span: 6 }, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-col__item fui-color__black" })
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_fui_col, { span: 6 }, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-col__item fui-color__yellow" })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_fui_row, { marginBottom: "24rpx" }, {
          default: withCtx(() => [
            createVNode(_component_fui_col, { span: 4 }, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-col__item fui-color__black" })
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_fui_col, { span: 4 }, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-col__item fui-color__yellow" })
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_fui_col, { span: 4 }, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-col__item fui-color__black" })
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_fui_col, { span: 4 }, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-col__item fui-color__yellow" })
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_fui_col, { span: 4 }, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-col__item fui-color__black" })
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_fui_col, { span: 4 }, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-col__item fui-color__yellow" })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "混合布局"),
        createVNode(_component_fui_row, {
          marginBottom: "24rpx",
          gutter: $data.gutter
        }, {
          default: withCtx(() => [
            createVNode(_component_fui_col, { span: 8 }, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-col__item fui-color__black" })
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_fui_col, { span: 8 }, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-col__item fui-color__yellow" })
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_fui_col, { span: 4 }, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-col__item fui-color__black" })
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_fui_col, { span: 4 }, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-col__item fui-color__yellow" })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }, 8, ["gutter"]),
        createVNode(_component_fui_row, {
          marginBottom: "24rpx",
          gutter: $data.gutter
        }, {
          default: withCtx(() => [
            createVNode(_component_fui_col, { span: 4 }, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-col__item fui-color__black" })
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_fui_col, { span: 16 }, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-col__item fui-color__yellow" })
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_fui_col, { span: 4 }, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-col__item fui-color__black" })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }, 8, ["gutter"]),
        createElementVNode("u-text", { class: "fui-section__title" }, "分栏偏移"),
        createVNode(_component_fui_row, {
          marginBottom: "10px",
          gutter: $data.gutter
        }, {
          default: withCtx(() => [
            createVNode(_component_fui_col, { span: 8 }, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-col__item fui-color__black" })
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_fui_col, {
              span: 8,
              offset: 6
            }, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-col__item fui-color__yellow" })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }, 8, ["gutter"]),
        createVNode(_component_fui_row, {
          marginBottom: "10px",
          gutter: $data.gutter
        }, {
          default: withCtx(() => [
            createVNode(_component_fui_col, {
              span: 6,
              offset: 6
            }, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-col__item fui-color__black" })
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_fui_col, {
              span: 6,
              offset: 6
            }, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-col__item fui-color__yellow" })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }, 8, ["gutter"]),
        createVNode(_component_fui_row, {
          marginBottom: "10px",
          gutter: $data.gutter
        }, {
          default: withCtx(() => [
            createVNode(_component_fui_col, {
              span: 12,
              pullRight: 0
            }, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-col__item fui-color__black" })
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_fui_col, {
              span: 6,
              pushLeft: 6
            }, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-col__item fui-color__yellow" })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }, 8, ["gutter"]),
        createVNode(_component_fui_row, {
          marginBottom: "24rpx",
          gutter: $data.gutter
        }, {
          default: withCtx(() => [
            createVNode(_component_fui_col, {
              span: 12,
              offset: 6
            }, {
              default: withCtx(() => [
                createElementVNode("view", { class: "fui-col__item fui-color__black" })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }, 8, ["gutter"])
      ])
    ])
  ]);
}
const layout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/layout/layout/layout.nvue"]]);
export {
  layout as default
};
