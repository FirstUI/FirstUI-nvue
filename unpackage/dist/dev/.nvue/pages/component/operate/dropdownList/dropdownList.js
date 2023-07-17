import { a as requireNativePlugin, _ as _export_sfc, f as formatAppLog, r as resolveEasycom } from "../../../../uni-app.es.js";
import { _ as __easycom_1 } from "../../../../fui-icon.js";
import { openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, Fragment, renderList, withModifiers, createCommentVNode, toDisplayString, resolveDynamicComponent, createVNode, withCtx } from "vue";
import { _ as __easycom_2$1 } from "../../../../fui-list-cell.js";
const _style_0$1 = { "fui-dropdown__list-wrap": { "": { "position": "fixed", "left": 0, "right": 0, "top": 0, "bottom": 0, "paddingTop": "64rpx", "paddingRight": "64rpx", "paddingBottom": "64rpx", "paddingLeft": "64rpx", "alignItems": "center", "justifyContent": "center", "opacity": 0 } }, "fui-ddl__scroll": { "": { "flex": 1 } }, "fui-dropdown__list": { "": { "boxShadow": "0 0 10rpx rgba(2, 4, 38, 0.05)" } }, "fui-dropdown__list-item": { "": { "flex": 1, "flexDirection": "row", "alignItems": "center", "backgroundColor": "#FFFFFF", "position": "relative", "!backgroundColor:active": "rgba(0,0,0,0.2)" } }, "fui-ddl__flex": { "": { "flex": 1, "flexDirection": "row", "alignItems": "center" } }, "fui-ddl__item-line": { "": { "position": "relative", "borderBottomWidth": 0.5, "borderBottomStyle": "solid", "borderBottomColor": "#EEEEEE" } }, "fui-ddl__reverse": { "": { "justifyContent": "space-between", "flexDirection": "row-reverse" } }, "fui-ddl__checkbox": { "": { "fontSize": 0, "color": "rgba(0,0,0,0)", "width": "40rpx", "height": "40rpx", "borderWidth": 1, "borderStyle": "solid", "borderRadius": "40rpx", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "overflow": "hidden", "position": "relative" } }, "fui-is__checkmark": { "": { "!borderWidth": 0, "!backgroundColor": "rgba(0,0,0,0)" } }, "fui-ddl__checkmark": { "": { "width": "20rpx", "height": "40rpx", "borderBottomStyle": "solid", "borderBottomWidth": 3, "borderBottomColor": "#FFFFFF", "borderRightStyle": "solid", "borderRightWidth": 3, "borderRightColor": "#FFFFFF", "transform": "rotate(45deg) scale(0.5)", "transformOrigin": "54% 48%" } }, "fui-ddl__item-text": { "": { "fontWeight": "normal" } }, "fui-ddl__text-pl": { "": { "paddingLeft": "24rpx" } }, "fui-ddl__text-pr": { "": { "paddingRight": "24rpx" } }, "fui-ddl__icon-box": { "": { "overflow": "hidden", "backgroundColor": "#F1F4FA" } }, "fui-ddl__icon-ml": { "": { "marginLeft": "24rpx" } }, "fui-ddl__icon-mr": { "": { "marginRight": "24rpx" } } };
const animation = requireNativePlugin("animation");
const _sfc_main$1 = {
  name: "fui-dropdown-list",
  emits: ["click", "close"],
  props: {
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    height: {
      type: [Number, String],
      default: 0
    },
    width: {
      type: [Number, String],
      default: 0
    },
    background: {
      type: String,
      default: "#fff"
    },
    radius: {
      type: [Number, String],
      default: 0
    },
    padding: {
      type: Array,
      default() {
        return ["32rpx", "32rpx"];
      }
    },
    isCheckbox: {
      type: Boolean,
      default: true
    },
    checkboxColor: {
      type: String,
      default: ""
    },
    borderColor: {
      type: String,
      default: "#ccc"
    },
    isCheckMark: {
      type: Boolean,
      default: false
    },
    checkmarkColor: {
      type: String,
      default: "#fff"
    },
    isReverse: {
      type: Boolean,
      default: false
    },
    splitLine: {
      type: Boolean,
      default: false
    },
    //仅Nvue端有效
    lineColor: {
      type: String,
      default: "#eee"
    },
    iconWidth: {
      type: [Number, String],
      default: 48
    },
    size: {
      type: [Number, String],
      default: 32
    },
    color: {
      type: String,
      default: "#181818"
    },
    selectedColor: {
      type: String,
      default: ""
    },
    //点击遮罩 是否可关闭
    maskClosable: {
      type: Boolean,
      default: true
    },
    maskBackground: {
      type: String,
      default: "rgba(0, 0, 0, 0.6)"
    },
    zIndex: {
      type: Number,
      default: 1001
    }
  },
  computed: {
    getStyles() {
      let styles = "";
      let height = Number(this.height || 0);
      let width = Number(this.width || 0);
      if (height > 0) {
        styles += `height:${height}rpx;`;
      }
      if (width > 0) {
        styles += `width:${width}rpx;`;
      }
      return styles;
    },
    getChkColor() {
      let color = this.checkboxColor;
      if (!color || color === true) {
        const app = uni && uni.$fui && uni.$fui.color;
        color = app && app.primary || "#465CFF";
      }
      return color;
    }
  },
  data() {
    let isNvue = false;
    isNvue = true;
    return {
      isNvue,
      itemList: [],
      isShow: false
    };
  },
  watch: {
    options(newVal) {
      this.initData(newVal);
    }
  },
  created() {
    this.initData(this.options);
  },
  methods: {
    _animation(type) {
      if (!this.$refs["fui_ddl_ani"])
        return;
      animation.transition(
        this.$refs["fui_ddl_ani"].ref,
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
            this.isShow = false;
          }
        }
      );
    },
    initData(vals) {
      if (vals && vals.length > 0) {
        if (typeof vals[0] !== "object") {
          vals = vals.map((item) => {
            return {
              text: item,
              checked: false
            };
          });
        } else {
          vals.map((item) => {
            item.checked = item.checked || false;
          });
        }
        this.itemList = vals;
      }
    },
    itemClick(e, index) {
      e.stopPropagation();
      let item = this.itemList[index];
      let vals = [...this.itemList];
      vals.forEach((item2, idx) => {
        if (index === idx) {
          item2.checked = true;
        } else {
          item2.checked = false;
        }
      });
      this.itemList = vals;
      this.$emit("click", {
        index,
        ...item
      });
      this.close(2);
    },
    close(type) {
      this._animation(false);
      if (type === 1 && this.maskClosable) {
        this.$emit("close", {});
      }
    },
    show() {
      this.isShow = true;
      this.$nextTick(() => {
        setTimeout(() => {
          this._animation(true);
        }, 50);
      });
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.isShow || !$data.isNvue ? (openBlock(), createElementBlock(
    "view",
    {
      key: 0,
      class: normalizeClass(["fui-dropdown__list-wrap", { "fui-dropdown__list-show": $data.isShow }]),
      style: normalizeStyle({ background: $props.maskBackground, zIndex: $props.zIndex }),
      ref: "fui_ddl_ani",
      onClick: _cache[0] || (_cache[0] = ($event) => $options.close(1)),
      renderWhole: true
    },
    [
      createElementVNode(
        "view",
        {
          class: "fui-dropdown__list",
          style: normalizeStyle({ borderRadius: $props.radius + "rpx", background: $props.background })
        },
        [
          createElementVNode(
            "scroll-view",
            {
              showScrollbar: false,
              class: "fui-ddl__scroll",
              scrollY: "",
              style: normalizeStyle($options.getStyles)
            },
            [
              createElementVNode("view", null, [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($data.itemList, (model, index) => {
                    return openBlock(), createElementBlock("view", {
                      class: normalizeClass(["fui-dropdown__list-item", { "fui-ddl__reverse": $props.isReverse, "fui-ddl__item-line": $props.splitLine && $data.itemList.length - 1 !== index }]),
                      style: normalizeStyle({ background: $props.background, paddingTop: $props.padding[0] || 0, paddingRight: $props.padding[1] || 0, paddingBottom: $props.padding[2] || $props.padding[0] || 0, paddingLeft: $props.padding[3] || $props.padding[1] || 0, borderBottomColor: $props.lineColor }),
                      key: index,
                      onClick: withModifiers(($event) => $options.itemClick($event, index), ["stop", "prevent"])
                    }, [
                      $props.isCheckbox ? (openBlock(), createElementBlock(
                        "view",
                        {
                          key: 0,
                          class: normalizeClass(["fui-ddl__checkbox", { "fui-is__checkmark": $props.isCheckMark, "fui-ddl__checkbox-color": (!$props.checkboxColor || $props.checkboxColor === true) && model.checked && !$props.isCheckMark }]),
                          style: normalizeStyle({ background: model.checked && !$props.isCheckMark ? $options.getChkColor : "transparent", borderColor: model.checked && !$props.isCheckMark ? $options.getChkColor : $props.borderColor })
                        },
                        [
                          model.checked ? (openBlock(), createElementBlock(
                            "view",
                            {
                              key: 0,
                              class: "fui-ddl__checkmark",
                              style: normalizeStyle({ borderBottomColor: $props.checkmarkColor, borderRightColor: $props.checkmarkColor })
                            },
                            null,
                            4
                            /* STYLE */
                          )) : createCommentVNode("v-if", true)
                        ],
                        6
                        /* CLASS, STYLE */
                      )) : createCommentVNode("v-if", true),
                      createElementVNode("view", { class: "fui-ddl__flex" }, [
                        model.src ? (openBlock(), createElementBlock(
                          "view",
                          {
                            key: 0,
                            class: normalizeClass(["fui-ddl__icon-box", { "fui-ddl__icon-ml": !$props.isReverse && $props.isCheckbox, "fui-ddl__icon-mr": $props.isReverse }]),
                            style: normalizeStyle({ width: $props.iconWidth + "rpx", height: $props.iconWidth + "rpx" })
                          },
                          [
                            createElementVNode("u-image", {
                              src: model.src,
                              style: normalizeStyle({ width: $props.iconWidth + "rpx", height: $props.iconWidth + "rpx" })
                            }, null, 12, ["src"])
                          ],
                          6
                          /* CLASS, STYLE */
                        )) : createCommentVNode("v-if", true),
                        createElementVNode(
                          "u-text",
                          {
                            class: normalizeClass(["fui-ddl__item-text", { "fui-ddl__text-pl": !$props.isReverse && ($props.isCheckbox || model.src), "fui-ddl__text-pr": $props.isReverse && ($props.isCheckbox || model.src) }]),
                            style: normalizeStyle({ fontSize: $props.size + "rpx", color: $props.selectedColor && model.checked ? $props.selectedColor : $props.color })
                          },
                          toDisplayString(model.text),
                          7
                          /* TEXT, CLASS, STYLE */
                        )
                      ])
                    ], 14, ["onClick"]);
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
        4
        /* STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  )) : createCommentVNode("v-if", true);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-dropdown-list/fui-dropdown-list.vue"]]);
const _style_0 = { "fui-wrap": { "": { "paddingBottom": "120rpx" } }, "fui-flex__center": { "": { "flexDirection": "row", "alignItems": "center" } }, "fui-section__title": { "": { "marginLeft": "32rpx" } }, "fui-filter__icon": { "": { "transitionProperty": "transform", "transitionDuration": 150, "transitionTimingFunction": "linear", "transform": "rotate(0deg)" } }, "fui-icon__ani": { "": { "transform": "rotate(180deg)" } }, "fui-list__cell": { "": { "flex": 1 } }, "fui-select": { "": { "flex": 1, "height": "80rpx", "paddingTop": "32rpx", "paddingRight": "32rpx", "paddingBottom": "32rpx", "paddingLeft": "32rpx", "position": "relative", "flexDirection": "row", "alignItems": "center", "borderWidth": 0.5, "borderStyle": "solid", "borderColor": "#eeeeee" } }, "fui-input": { "": { "fontSize": "32rpx", "flex": 1, "paddingRight": "8rpx" } }, "@TRANSITION": { "fui-filter__icon": { "property": "transform", "duration": 150, "timingFunction": "linear" } } };
const _sfc_main = {
  data() {
    return {
      options: [{
        text: "机架式服务器",
        value: 1
      }, {
        text: "笔记本",
        value: 2
      }, {
        text: "平板电脑",
        value: 3
      }, {
        text: "台式机+显示器",
        value: 3
      }],
      assets: "",
      assetsShow: false,
      options2: ["注册激活", "站长工具", "投递文章", "媒体合作", "素材相关", "报告错误", "论坛事务", "发布软件", "网站排行榜", "其他事务"],
      question: "",
      quesShow: false,
      options3: ["最新车讯", "降价排行", "SUV", "违章罚单", "提车试驾", "测评体验", "选车指南", "美女车模", "加油优惠卡", "维修保养"],
      tag: "",
      tagShow: false
    };
  },
  methods: {
    assetsTap() {
      this.$refs.ddlAssets.show();
      this.assetsShow = true;
    },
    assetsItemClick(e) {
      formatAppLog("log", "at pages/component/operate/dropdownList/dropdownList.nvue:88", e);
      this.assets = e.text;
      this.assetsClose();
    },
    assetsClose() {
      this.assetsShow = false;
    },
    quesTap() {
      this.$refs.ddlQues.show();
      this.quesShow = true;
    },
    quesItemClick(e) {
      formatAppLog("log", "at pages/component/operate/dropdownList/dropdownList.nvue:100", e);
      this.question = e.text;
      this.quesClose();
    },
    quesClose() {
      this.quesShow = false;
    },
    tagTap() {
      this.$refs.ddlTag.show();
      this.tagShow = true;
    },
    tagItemClick(e) {
      formatAppLog("log", "at pages/component/operate/dropdownList/dropdownList.nvue:112", e);
      this.tag = e.text;
      this.tagClose();
    },
    tagClose() {
      this.tagShow = false;
    },
    empty() {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_icon = resolveEasycom(resolveDynamicComponent("fui-icon"), __easycom_1);
  const _component_fui_list_cell = resolveEasycom(resolveDynamicComponent("fui-list-cell"), __easycom_2$1);
  const _component_fui_dropdown_list = resolveEasycom(resolveDynamicComponent("fui-dropdown-list"), __easycom_2);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("u-text", { class: "fui-page__title" }, "DropdownList"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "DropdownList 下拉菜单，用于弹出一个菜单给用户选择操作，此组件为兼容Nvue端而写，居中弹出。")
      ]),
      createElementVNode("view", { class: "fui-page__bd" }, [
        createElementVNode("u-text", { class: "fui-section__title" }, "基础使用"),
        createVNode(_component_fui_list_cell, { highlight: false }, {
          default: withCtx(() => [
            createElementVNode("view", { class: "fui-list__cell fui-flex__center" }, [
              createElementVNode("u-text", { class: "fui-text" }, "资产类别："),
              createElementVNode("view", {
                class: "fui-select fui-flex__between",
                onClick: _cache[1] || (_cache[1] = (...args) => $options.assetsTap && $options.assetsTap(...args))
              }, [
                createElementVNode("u-input", {
                  placeholder: "请选择",
                  value: $data.assets,
                  class: "fui-input",
                  disabled: true,
                  onClick: _cache[0] || (_cache[0] = (...args) => $options.empty && $options.empty(...args))
                }, null, 8, ["value"]),
                createElementVNode(
                  "view",
                  {
                    class: normalizeClass(["fui-filter__icon", { "fui-icon__ani": $data.assetsShow }])
                  },
                  [
                    createVNode(_component_fui_icon, {
                      name: "turningdown",
                      size: 32
                    })
                  ],
                  2
                  /* CLASS */
                )
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        createElementVNode("view", { class: "fui-section__title" }, [
          createElementVNode("u-text", null, "固定高度、宽度 / 可滚动")
        ]),
        createVNode(_component_fui_list_cell, { highlight: false }, {
          default: withCtx(() => [
            createElementVNode("view", { class: "fui-list__cell fui-flex__center" }, [
              createElementVNode("u-text", { class: "fui-text" }, "问题分类："),
              createElementVNode("view", {
                class: "fui-select fui-flex__between",
                onClick: _cache[3] || (_cache[3] = (...args) => $options.quesTap && $options.quesTap(...args))
              }, [
                createElementVNode("u-input", {
                  placeholder: "请选择",
                  value: $data.question,
                  class: "fui-input",
                  disabled: true,
                  onClick: _cache[2] || (_cache[2] = (...args) => $options.empty && $options.empty(...args))
                }, null, 8, ["value"]),
                createElementVNode(
                  "view",
                  {
                    class: normalizeClass(["fui-filter__icon", { "fui-icon__ani": $data.quesShow }])
                  },
                  [
                    createVNode(_component_fui_icon, {
                      name: "turningdown",
                      size: 32
                    })
                  ],
                  2
                  /* CLASS */
                )
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "不显示选择框"),
        createVNode(_component_fui_list_cell, { highlight: false }, {
          default: withCtx(() => [
            createElementVNode("view", { class: "fui-list__cell fui-flex__center" }, [
              createElementVNode("u-text", { class: "fui-text" }, "问题分类："),
              createElementVNode("view", {
                class: "fui-select fui-flex__between",
                onClick: _cache[5] || (_cache[5] = (...args) => $options.tagTap && $options.tagTap(...args))
              }, [
                createElementVNode("u-input", {
                  placeholder: "请选择",
                  value: $data.tag,
                  class: "fui-input",
                  disabled: true,
                  onClick: _cache[4] || (_cache[4] = (...args) => $options.empty && $options.empty(...args))
                }, null, 8, ["value"]),
                createElementVNode(
                  "view",
                  {
                    class: normalizeClass(["fui-filter__icon", { "fui-icon__ani": $data.tagShow }])
                  },
                  [
                    createVNode(_component_fui_icon, {
                      name: "turningdown",
                      size: 32
                    })
                  ],
                  2
                  /* CLASS */
                )
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createVNode(_component_fui_dropdown_list, {
        options: $data.options,
        ref: "ddlAssets",
        onClick: $options.assetsItemClick,
        onClose: $options.assetsClose
      }, null, 8, ["options", "onClick", "onClose"]),
      createVNode(_component_fui_dropdown_list, {
        height: 600,
        width: 480,
        checkboxColor: "#FFB703",
        options: $data.options2,
        ref: "ddlQues",
        onClick: $options.quesItemClick,
        onClose: $options.quesClose
      }, null, 8, ["options", "onClick", "onClose"]),
      createVNode(_component_fui_dropdown_list, {
        isCheckbox: false,
        selectedColor: "#FF2B2B",
        splitLine: "",
        height: 600,
        width: 400,
        options: $data.options3,
        ref: "ddlTag",
        onClick: $options.tagItemClick,
        onClose: $options.tagClose
      }, null, 8, ["options", "onClick", "onClose"])
    ])
  ]);
}
const dropdownList = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/operate/dropdownList/dropdownList.nvue"]]);
export {
  dropdownList as default
};
