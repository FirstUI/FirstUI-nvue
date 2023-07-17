import { _ as _export_sfc, f as formatAppLog, r as resolveEasycom } from "../../../../uni-app.es.js";
import { openBlock, createElementBlock, createElementVNode, withModifiers, normalizeClass, normalizeStyle, renderSlot, createCommentVNode, resolveDynamicComponent, createVNode, withCtx, Fragment, renderList, createBlock, toDisplayString } from "vue";
import { _ as __easycom_2 } from "../../../../fui-list-cell.js";
const _style_0$2 = { "fui-collapse-item__title": { "": { "flexDirection": "row", "alignItems": "center", "transitionProperty": "borderBottomColor", "transitionDuration": 300, "position": "relative" } }, "fui-collapse__border": { "": { "position": "absolute", "bottom": 0, "right": 0, "height": 0.5, "zIndex": -1 } }, "fui-collapse__disabled": { "": { "opacity": 0.5 } }, "fui-collapse__title": { "": { "flex": 1, "overflow": "hidden" } }, "fui-collapse__arrow-inner": { "": { "height": "40rpx", "width": "40rpx", "borderTopWidth": 0, "borderRightWidth": 3, "borderBottomWidth": 3, "borderLeftWidth": 0, "borderStyle": "solid", "transform": "rotate(45deg) scale(.5)", "position": "absolute", "top": "-6rpx", "left": 0 } }, "fui-collapse__arrow": { "": { "width": "40rpx", "height": "40rpx", "position": "relative" } }, "fui-collapse__arrow-close": { "": { "transform": "rotate(0deg)" } }, "fui-collapse__arrow-active": { "": { "transform": "rotate(180deg)" } }, "fui-collapse__item-ani": { "": { "transitionProperty": "transform", "transitionDuration": 300, "transitionTimingFunction": "ease" } }, "fui-collapse__content-wrap": { "": { "overflow": "hidden", "position": "relative", "height": 0 } }, "fui-collapse-__content-ani": { "": { "transitionProperty": "height", "transitionDuration": 300 } }, "fui-collapse__content": { "": { "position": "absolute" } }, "fui-collapse__content-open": { "": { "position": "relative" } }, "@TRANSITION": { "fui-collapse-item__title": { "property": "borderBottomColor", "duration": 300 }, "fui-collapse__item-ani": { "property": "transform", "duration": 300, "timingFunction": "ease" }, "fui-collapse-__content-ani": { "property": "height", "duration": 300 } } };
const dom = weex.requireModule("dom");
const _sfc_main$2 = {
  name: "fui-collapse-item",
  emits: ["change"],
  props: {
    //item项索引或者唯一标识
    index: {
      type: [Number, String],
      default: 0
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: "#fff"
    },
    //是否显示动画,如果动画卡顿严重建议不开启
    animation: {
      type: Boolean,
      default: true
    },
    // 是否展开
    open: {
      type: Boolean,
      default: false
    },
    isBorder: {
      type: Boolean,
      default: true
    },
    borderColor: {
      type: String,
      default: "#EEEEEE"
    },
    borderLeft: {
      type: [Number, String],
      default: 0
    },
    arrow: {
      type: Boolean,
      default: true
    },
    arrowColor: {
      type: String,
      default: "#B2B2B2"
    },
    arrowRight: {
      type: [Number, String],
      default: 24
    },
    contentBg: {
      type: String,
      default: "#fff"
    }
  },
  data() {
    const elId = `fui_${Math.ceil(Math.random() * 1e6).toString(36)}`;
    return {
      isOpen: false,
      isHeight: null,
      height: 0,
      elId
    };
  },
  watch: {
    open(val) {
      this.isOpen = val;
    }
  },
  updated(e) {
    this.$nextTick(() => {
      setTimeout(() => {
        this.init();
      }, 50);
    });
  },
  created() {
    this.collapse = this.getCollapse();
    if (this.collapse && this.collapse.children.indexOf(this) === -1) {
      this.collapse.children.push(this);
    }
    this.oldHeight = 0;
  },
  // TODO vue3
  beforeUnmount() {
    this.uninstall();
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.init();
        this.isOpen = this.open;
      }, 50);
    });
  },
  methods: {
    init() {
      this.getNvueHeight();
    },
    uninstall() {
      if (this.collapse) {
        this.collapse.children.forEach((item, index) => {
          if (item === this) {
            this.collapse.children.splice(index, 1);
          }
        });
      }
    },
    onClick(isOpen) {
      if (this.disabled)
        return;
      this.isOpen = isOpen;
      if (this.collapse) {
        this.collapse.collapseChange(this, isOpen, this.index);
      } else {
        this.$emit("change", {
          index: this.index,
          isOpen
        });
      }
    },
    getCollapseHeight(index = 0) {
      uni.createSelectorQuery().in(this).select(`#${this.elId}`).fields({
        size: true
      }, (data) => {
        if (index >= 10)
          return;
        if (!data) {
          index++;
          this.getCollapseHeight(index);
          return;
        }
        this.height = data.height + 1;
        this.isHeight = true;
      }).exec();
    },
    getNvueHeight() {
      dom.getComponentRect(this.$refs["fui_collapse__el"], (option) => {
        if (option && option.result && option.size) {
          this.height = option.size.height + 1;
          this.isHeight = true;
        }
      });
    },
    getCollapse(name = "fui-collapse") {
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
  return openBlock(), createElementBlock("view", {
    class: "fui-collapse__item",
    renderWhole: true
  }, [
    createElementVNode(
      "view",
      {
        onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $options.onClick(!$data.isOpen), ["stop"])),
        class: normalizeClass(["fui-collapse-item__title", { "fui-collapse__disabled": $props.disabled }]),
        style: normalizeStyle({ background: $props.background })
      },
      [
        createElementVNode("view", { class: "fui-collapse__title" }, [
          renderSlot(_ctx.$slots, "default")
        ]),
        $props.arrow ? (openBlock(), createElementBlock(
          "view",
          {
            key: 0,
            class: normalizeClass([{ "fui-collapse__arrow-close": !$data.isOpen, "fui-collapse__arrow-active": $data.isOpen, "fui-collapse__item-ani": $props.animation }, "fui-collapse__arrow"]),
            style: normalizeStyle({ marginRight: $props.arrowRight + "rpx" })
          },
          [
            createElementVNode(
              "view",
              {
                class: "fui-collapse__arrow-inner",
                style: normalizeStyle({ borderColor: $props.arrowColor })
              },
              null,
              4
              /* STYLE */
            )
          ],
          6
          /* CLASS, STYLE */
        )) : createCommentVNode("v-if", true),
        $props.isBorder ? (openBlock(), createElementBlock(
          "view",
          {
            key: 1,
            style: normalizeStyle({ background: $props.borderColor, left: $props.borderLeft + "rpx" }),
            class: normalizeClass(["fui-collapse__border", { "fui-collapse__border-color": !$props.borderColor }])
          },
          null,
          6
          /* CLASS, STYLE */
        )) : createCommentVNode("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    ),
    createElementVNode(
      "view",
      {
        class: normalizeClass(["fui-collapse__content-wrap", { "fui-collapse-__content-ani": $props.animation }]),
        style: normalizeStyle({ height: ($data.isOpen ? $data.height : 0) + "px", background: $props.contentBg })
      },
      [
        createElementVNode("view", {
          id: $data.elId,
          ref: "fui_collapse__el",
          class: normalizeClass(["fui-collapse__content", { "fui-collapse__content-open": $data.isHeight }])
        }, [
          renderSlot(_ctx.$slots, "content")
        ], 10, ["id"])
      ],
      6
      /* CLASS, STYLE */
    )
  ]);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-collapse-item/fui-collapse-item.vue"]]);
const _style_0$1 = { "fui-collapse__wrap": { "": { "flex": 1, "flexDirection": "column", "backgroundColor": "#ffffff" } } };
const _sfc_main$1 = {
  name: "fui-collapse",
  emits: ["change"],
  props: {
    // 是否开启手风琴效果
    accordion: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.children = [];
  },
  methods: {
    collapseChange(obj, isOpen, idx) {
      if (this.accordion && isOpen) {
        this.children.forEach((item, index) => {
          if (item !== obj) {
            item.isOpen = false;
          }
        });
      }
      this.$emit("change", {
        index: idx,
        isOpen
      });
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "fui-collapse__wrap",
    renderWhole: true
  }, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-collapse/fui-collapse.vue"]]);
const _style_0 = { "fui-wrap": { "": { "paddingBottom": "64rpx" } }, "fui-section__title": { "": { "marginLeft": "32rpx" } }, "fui-item__box": { "": { "paddingTop": "26rpx", "paddingRight": "32rpx", "paddingBottom": "26rpx", "paddingLeft": "32rpx", "flexDirection": "row", "alignItems": "center" } }, "fui-logo": { "": { "width": "48rpx", "height": "48rpx", "marginRight": "24rpx" } }, "fui-descr": { "": { "paddingTop": "32rpx", "paddingRight": "32rpx", "paddingBottom": "32rpx", "paddingLeft": "32rpx", "fontSize": "28rpx", "lineHeight": "52rpx", "color": "#7F7F7F" } }, "fui-text": { "": { "fontSize": "28rpx", "width": "680rpx" } } };
const _sfc_main = {
  data() {
    return {
      items: [{
        src: "/static/images/common/logo.png",
        title: "First UI",
        descr: "First UI 是一套基于uni-app开发的组件化、可复用、易扩展、低耦合的跨平台移动端UI 组件库。",
        isOpen: true
      }, {
        src: "/static/images/common/icon_tabbar_2x.png",
        title: "标题内容",
        descr: "自定义折叠内容主体，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开。再次点击标题，折叠内容。"
      }],
      list: [{
        question: "我只想用某个组件可以吗？",
        answer: "可以，组件支持按需引入，详见 First UI 文档 “快速上手”，使用组件前请先仔细阅读组件文档。"
      }, {
        question: "为什么文档或示例中有些组件在GitHub或npm下载的包中无法找到？",
        answer: "First UI 分为 “开源版” 和 “商业版”，所有示例或文档中加 “V” 的表示需要开通会员才可获取源码使用，会员内容不会发布到任何公开渠道。"
      }, {
        question: "组件支持Nvue、支付宝小程序...吗？",
        answer: "支持。组件支持哪些平台请参考组件具体文档，每个组件文档中都有支持平台的说明。"
      }]
    };
  },
  methods: {
    change(e) {
      formatAppLog("log", "at pages/component/data/collapse/collapse.nvue:115", e);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_collapse_item = resolveEasycom(resolveDynamicComponent("fui-collapse-item"), __easycom_0);
  const _component_fui_collapse = resolveEasycom(resolveDynamicComponent("fui-collapse"), __easycom_1);
  const _component_fui_list_cell = resolveEasycom(resolveDynamicComponent("fui-list-cell"), __easycom_2);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("u-text", { class: "fui-page__title" }, "Collapse"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "Collapse 折叠面板，可以折叠/展开的内容区域。")
      ]),
      createElementVNode("view", { class: "fui-page__bd" }, [
        createElementVNode("u-text", { class: "fui-section__title fui-mtop--0" }, "基础使用"),
        createCommentVNode("fui-collapse-item可单独使用 @change事件仅无父组件fui-collapse时生效"),
        createVNode(_component_fui_collapse_item, { onChange: $options.change }, {
          content: withCtx(() => [
            createElementVNode("u-text", { class: "fui-descr" }, "First UI 是一套基于uni-app开发的组件化、可复用、易扩展、低耦合的跨平台移动端UI 组件库。")
          ]),
          default: withCtx(() => [
            createElementVNode("view", { class: "fui-item__box" }, [
              createElementVNode("u-image", {
                src: "/static/images/common/logo.png",
                class: "fui-logo"
              }),
              createElementVNode("u-text", { class: "fui-text" }, "First UI")
            ])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onChange"]),
        createElementVNode("u-text", { class: "fui-section__title" }, "默认展开"),
        createVNode(_component_fui_collapse, { onChange: $options.change }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($data.items, (item, index) => {
                return openBlock(), createBlock(_component_fui_collapse_item, {
                  index,
                  open: item.isOpen,
                  key: index
                }, {
                  content: withCtx(() => [
                    createElementVNode(
                      "u-text",
                      {
                        class: "fui-descr",
                        style: { "background-color": "rgba(255, 183, 3, .1)" }
                      },
                      toDisplayString(item.descr),
                      1
                      /* TEXT */
                    )
                  ]),
                  default: withCtx(() => [
                    createElementVNode("view", { class: "fui-item__box" }, [
                      createElementVNode("u-image", {
                        src: item.src,
                        class: "fui-logo"
                      }, null, 8, ["src"]),
                      createElementVNode(
                        "u-text",
                        { class: "fui-text" },
                        toDisplayString(item.title),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["index", "open"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onChange"]),
        createElementVNode("u-text", { class: "fui-section__title" }, "手风琴效果"),
        createVNode(_component_fui_collapse, {
          accordion: "",
          onChange: $options.change
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($data.items, (item, index) => {
                return openBlock(), createBlock(_component_fui_collapse_item, {
                  index,
                  key: index
                }, {
                  content: withCtx(() => [
                    createElementVNode(
                      "u-text",
                      {
                        class: "fui-descr",
                        style: { "background-color": "rgba(255, 183, 3, .1)" }
                      },
                      toDisplayString(item.descr),
                      1
                      /* TEXT */
                    )
                  ]),
                  default: withCtx(() => [
                    createElementVNode("view", { class: "fui-item__box" }, [
                      createElementVNode("u-image", {
                        src: item.src,
                        class: "fui-logo"
                      }, null, 8, ["src"]),
                      createElementVNode(
                        "u-text",
                        { class: "fui-text" },
                        toDisplayString(item.title),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["index"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onChange"]),
        createElementVNode("u-text", { class: "fui-section__title" }, "无动画效果"),
        createVNode(_component_fui_collapse, { onChange: $options.change }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($data.items, (item, index) => {
                return openBlock(), createBlock(_component_fui_collapse_item, {
                  animation: false,
                  arrowColor: "#333",
                  index,
                  key: index
                }, {
                  content: withCtx(() => [
                    createElementVNode(
                      "u-text",
                      {
                        class: "fui-descr",
                        style: { "background-color": "rgba(255, 183, 3, .1)" }
                      },
                      toDisplayString(item.descr),
                      1
                      /* TEXT */
                    )
                  ]),
                  default: withCtx(() => [
                    createElementVNode("view", { class: "fui-item__box" }, [
                      createElementVNode("u-image", {
                        src: item.src,
                        class: "fui-logo"
                      }, null, 8, ["src"]),
                      createElementVNode(
                        "u-text",
                        { class: "fui-text" },
                        toDisplayString(item.title),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["index"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onChange"]),
        createElementVNode("u-text", { class: "fui-section__title" }, "禁用不可点击"),
        createVNode(_component_fui_collapse, { onChange: $options.change }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($data.items, (item, index) => {
                return openBlock(), createBlock(_component_fui_collapse_item, {
                  disabled: index === 1,
                  arrowColor: "#333",
                  index,
                  key: index
                }, {
                  content: withCtx(() => [
                    createElementVNode(
                      "u-text",
                      {
                        class: "fui-descr",
                        style: { "background-color": "rgba(255, 183, 3, .1)" }
                      },
                      toDisplayString(item.descr),
                      1
                      /* TEXT */
                    )
                  ]),
                  default: withCtx(() => [
                    createElementVNode("view", { class: "fui-item__box" }, [
                      createElementVNode("u-image", {
                        src: item.src,
                        class: "fui-logo"
                      }, null, 8, ["src"]),
                      createElementVNode(
                        "u-text",
                        { class: "fui-text" },
                        toDisplayString(item.title),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["disabled", "index"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onChange"]),
        createElementVNode("u-text", { class: "fui-section__title" }, "不显示箭头"),
        createVNode(_component_fui_collapse, {
          accordion: "",
          onChange: $options.change
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($data.list, (item, index) => {
                return openBlock(), createBlock(_component_fui_collapse_item, {
                  arrow: false,
                  index,
                  key: index
                }, {
                  content: withCtx(() => [
                    createElementVNode(
                      "u-text",
                      {
                        class: "fui-descr",
                        style: { "color": "#09BE4F" }
                      },
                      toDisplayString(item.answer),
                      1
                      /* TEXT */
                    )
                  ]),
                  default: withCtx(() => [
                    createVNode(
                      _component_fui_list_cell,
                      { padding: ["0", "0"] },
                      {
                        default: withCtx(() => [
                          createElementVNode("view", { class: "fui-item__box" }, [
                            createElementVNode(
                              "u-text",
                              { class: "fui-text" },
                              toDisplayString(item.question),
                              1
                              /* TEXT */
                            )
                          ])
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["index"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onChange"])
      ])
    ])
  ]);
}
const collapse = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/data/collapse/collapse.nvue"]]);
export {
  collapse as default
};
