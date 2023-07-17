import { a as requireNativePlugin, _ as _export_sfc, f as formatAppLog, r as resolveEasycom } from "../../../../uni-app.es.js";
import { _ as __easycom_1$1 } from "../../../../fui-icon.js";
import { openBlock, createElementBlock, renderSlot, normalizeStyle, createCommentVNode, normalizeClass, createElementVNode, Fragment, renderList, withModifiers, toDisplayString, resolveDynamicComponent, createVNode, withCtx } from "vue";
import { _ as __easycom_2 } from "../../../../fui-list-cell.js";
const _style_0$1 = { "fui-dropdown__menu": { "": { "flex": 1, "position": "relative" } }, "fui-ddm__scroll": { "": { "flex": 1 } }, "fui-dropdown__menu-list": { "": { "boxShadow": "0 0 10rpx rgba(2, 4, 38, 0.05)", "opacity": 0, "position": "fixed", "flexDirection": "row", "transitionProperty": "opacity", "transitionDuration": 300, "transitionTimingFunction": "ease-in-out" } }, "fui-ddm__down": { "": { "transformOrigin": "0 0" } }, "fui-ddm__up": { "": { "transformOrigin": "0 100%", "transform": "translate(0, -100%)" } }, "fui-ddm__mask": { "": { "position": "fixed", "top": 0, "left": 0, "right": 0, "bottom": 0, "zIndex": 990 } }, "fui-dropdown__menu-item": { "": { "flexDirection": "row", "alignItems": "center", "backgroundColor": "#FFFFFF", "position": "relative", "!backgroundColor:active": "rgba(0,0,0,0.2)" } }, "fui-ddm__flex": { "": { "flex": 1, "flexDirection": "row", "alignItems": "center" } }, "fui-ddm__item-line": { "": { "position": "relative", "borderBottomWidth": 0.5, "borderBottomStyle": "solid", "borderBottomColor": "#EEEEEE" } }, "fui-ddm__reverse": { "": { "justifyContent": "space-between", "flexDirection": "row-reverse" } }, "fui-ddm__checkbox": { "": { "fontSize": 0, "color": "rgba(0,0,0,0)", "width": "40rpx", "height": "40rpx", "borderWidth": 1, "borderStyle": "solid", "borderRadius": "40rpx", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "overflow": "hidden", "position": "relative" } }, "fui-is__checkmark": { "": { "!borderWidth": 0, "!backgroundColor": "rgba(0,0,0,0)" } }, "fui-ddm__checkmark": { "": { "width": "20rpx", "height": "40rpx", "borderBottomStyle": "solid", "borderBottomWidth": 3, "borderBottomColor": "#FFFFFF", "borderRightStyle": "solid", "borderRightWidth": 3, "borderRightColor": "#FFFFFF", "transform": "rotate(45deg) scale(0.5)", "transformOrigin": "54% 48%" } }, "fui-ddm__item-text": { "": { "fontWeight": "normal" } }, "fui-ddm__text-pl": { "": { "paddingLeft": "24rpx" } }, "fui-ddm__text-pr": { "": { "paddingRight": "24rpx" } }, "fui-ddm__icon-box": { "": { "overflow": "hidden", "backgroundColor": "#F1F4FA" } }, "fui-ddm__icon-ml": { "": { "marginLeft": "24rpx" } }, "fui-ddm__icon-mr": { "": { "marginRight": "24rpx" } }, "@TRANSITION": { "fui-dropdown__menu-list": { "property": "opacity", "duration": 300, "timingFunction": "ease-in-out" } } };
const dom = weex.requireModule("dom");
const animation = requireNativePlugin("animation");
const _sfc_main$1 = {
  name: "fui-dropdown-menu",
  emits: ["click", "close"],
  props: {
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    maxHeight: {
      type: [Number, String],
      default: 400
    },
    minWidth: {
      type: [Number, String],
      default: 0
    },
    left: {
      type: [Number, String],
      default: 0
    },
    //right大于等于0时生效，left失效
    right: {
      type: [Number, String],
      default: -1
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
      type: String,
      default: "32rpx"
    },
    isCheckbox: {
      type: Boolean,
      default: true
    },
    //选择框选中后颜色
    checkboxColor: {
      type: String,
      default: ""
    },
    //选择框未选中时边框颜色
    borderColor: {
      type: String,
      default: "#ccc"
    },
    //是否只展示对号，无边框背景
    isCheckMark: {
      type: Boolean,
      default: false
    },
    //对号颜色
    checkmarkColor: {
      type: String,
      default: "#fff"
    },
    //选择框与内容是否颠倒排列
    isReverse: {
      type: Boolean,
      default: false
    },
    //是否需要分割线条
    splitLine: {
      type: Boolean,
      default: false
    },
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
    isMask: {
      type: Boolean,
      default: true
    },
    maskBackground: {
      type: String,
      default: "transparent"
    },
    //down/up
    direction: {
      type: String,
      default: "down"
    }
  },
  watch: {
    isShow(val) {
      if (val) {
        this.isNvueShow = true;
        this.$nextTick(() => {
          setTimeout(() => {
            this._animationFn(true);
          }, 50);
        });
      } else {
        this._animationFn(false);
      }
    },
    options(newVal) {
      this.initData(newVal);
    }
  },
  data() {
    let isNvue = false;
    isNvue = true;
    return {
      isNvue,
      isNvueShow: false,
      n_left: 0,
      n_top: 20,
      itemList: [],
      isShow: false
    };
  },
  computed: {
    getStyles() {
      let styles = `border-radius:${this.radius}rpx;background:${this.background};`;
      let right = Number(this.right || 0);
      if (right >= 0) {
        styles += "right:0;";
      }
      styles += `left:${this.n_left}px;top:${this.n_top}px;height:${this.maxHeight}rpx;`;
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
  created() {
    this.initData(this.options);
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.resetCalc();
      }, 100);
    });
  },
  methods: {
    resetCalc(callback, height) {
      if (!this.$refs["fui_dm_wrap"])
        return;
      dom.getComponentRect(this.$refs["fui_dm_wrap"], (option) => {
        if (option && option.result && option.size) {
          let cbk = callback && typeof callback === "function";
          let height2 = option.size.height;
          if (cbk && height2) {
            height2 = height2;
          }
          let top = option.size.top;
          this.n_left = option.size.left;
          this.n_top = this.direction === "down" ? height2 + top : top;
          if (cbk) {
            callback(true);
          }
        }
      });
    },
    _animationFn(type) {
      if (!this.$refs["fui_ddm_list"])
        return;
      let styles = {
        opacity: type ? 1 : 0
      };
      if (this.direction === "up") {
        styles.transform = `translate(0, -100%)`;
      }
      animation.transition(
        this.$refs["fui_ddm_list"].ref,
        {
          styles,
          duration: 300,
          //ms
          timingFunction: "ease",
          needLayout: false,
          delay: 0
          //ms
        },
        () => {
          if (!type) {
            this.isNvueShow = false;
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
    itemClick(index) {
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
      this.isShow = false;
      if (type === 1) {
        this.$emit("close", {});
      }
    },
    show() {
      this.isShow = true;
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: "fui-dropdown__menu",
      ref: "fui_dm_wrap",
      onClick: _cache[1] || (_cache[1] = (...args) => $options.resetCalc && $options.resetCalc(...args)),
      renderWhole: true
    },
    [
      renderSlot(_ctx.$slots, "default"),
      $data.isShow && $props.isMask ? (openBlock(), createElementBlock(
        "view",
        {
          key: 0,
          class: "fui-ddm__mask",
          style: normalizeStyle({ background: $props.maskBackground }),
          onClick: _cache[0] || (_cache[0] = ($event) => $options.close(1))
        },
        null,
        4
        /* STYLE */
      )) : createCommentVNode("v-if", true),
      $data.isNvueShow || !$data.isNvue ? (openBlock(), createElementBlock(
        "view",
        {
          key: 1,
          class: normalizeClass(["fui-dropdown__menu-list", { "fui-ddm__down": $props.direction !== "up", "fui-ddm__up": $props.direction === "up", "fui-ddm__down-show": $data.isShow && $props.direction !== "up", "fui-ddm__up-show": $data.isShow && $props.direction === "up" }]),
          style: normalizeStyle($options.getStyles),
          ref: "fui_ddm_list"
        },
        [
          createElementVNode(
            "scroll-view",
            {
              showScrollbar: false,
              class: "fui-ddm__scroll",
              scrollY: "",
              style: normalizeStyle({ height: $data.isNvue ? $props.maxHeight + "rpx" : "auto", maxHeight: $props.maxHeight + "rpx", minWidth: $props.minWidth + "rpx" })
            },
            [
              createElementVNode("view", null, [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($data.itemList, (model, index) => {
                    return openBlock(), createElementBlock("view", {
                      class: normalizeClass(["fui-dropdown__menu-item", { "fui-ddm__reverse": $props.isReverse, "fui-ddm__item-line": $props.splitLine && $data.itemList.length - 1 !== index }]),
                      style: normalizeStyle({ background: $props.background, padding: $props.padding, borderBottomColor: $props.splitLine && $data.isNvue ? $props.lineColor : "transparent" }),
                      key: index,
                      onClick: withModifiers(($event) => $options.itemClick(index), ["stop"])
                    }, [
                      $props.isCheckbox ? (openBlock(), createElementBlock(
                        "view",
                        {
                          key: 0,
                          class: normalizeClass(["fui-ddm__checkbox", { "fui-is__checkmark": $props.isCheckMark, "fui-ddm__checkbox-color": (!$props.checkboxColor || $props.checkboxColor === true) && model.checked && !$props.isCheckMark }]),
                          style: normalizeStyle({ background: model.checked && !$props.isCheckMark ? $options.getChkColor : "transparent", borderColor: model.checked && !$props.isCheckMark ? $options.getChkColor : $props.borderColor })
                        },
                        [
                          model.checked ? (openBlock(), createElementBlock(
                            "view",
                            {
                              key: 0,
                              class: "fui-ddm__checkmark",
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
                      createElementVNode("view", { class: "fui-ddm__flex" }, [
                        model.src ? (openBlock(), createElementBlock(
                          "view",
                          {
                            key: 0,
                            class: normalizeClass(["fui-ddm__icon-box", { "fui-ddm__icon-ml": !$props.isReverse && $props.isCheckbox, "fui-ddm__icon-mr": $props.isReverse }]),
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
                            class: normalizeClass(["fui-ddm__item-text", { "fui-ddm__text-pl": !$props.isReverse && ($props.isCheckbox || model.src), "fui-ddm__text-pr": $props.isReverse && ($props.isCheckbox || model.src) }]),
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
        6
        /* CLASS, STYLE */
      )) : createCommentVNode("v-if", true)
    ],
    512
    /* NEED_PATCH */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-dropdown-menu/fui-dropdown-menu.vue"]]);
const _style_0 = { "fui-wrap": { "": { "paddingBottom": "120rpx" } }, "fui-section__title": { "": { "marginLeft": "32rpx" } }, "fui-flex__center": { "": { "flexDirection": "row", "alignItems": "center" } }, "fui-filter__bar": { "": { "height": "88rpx", "flexDirection": "row", "alignItems": "center", "backgroundColor": "#ffffff", "marginBottom": "40rpx" } }, "fui-filter__item": { "": { "height": "88rpx", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "fontSize": "30rpx" } }, "fui-filter__icon": { "": { "transitionProperty": "transform", "transitionDuration": 150, "transitionTimingFunction": "linear", "transform": "rotate(0deg)" } }, "fui-icon__ani": { "": { "transform": "rotate(180deg)" } }, "fui-list__cell": { "": { "flex": 1 } }, "fui-flex__1": { "": { "flex": 1 } }, "fui-select": { "": { "height": "80rpx", "paddingTop": "32rpx", "paddingRight": "32rpx", "paddingBottom": "32rpx", "paddingLeft": "32rpx", "flex": 1, "position": "relative", "flexDirection": "row", "alignItems": "center", "borderWidth": 0.5, "borderStyle": "solid", "borderColor": "#eeeeee" } }, "fui-input": { "": { "fontSize": "32rpx", "flex": 1, "paddingRight": "8rpx", "color": "#181818" } }, "@TRANSITION": { "fui-filter__icon": { "property": "transform", "duration": 150, "timingFunction": "linear" } } };
const _sfc_main = {
  data() {
    return {
      options: [{
        text: "综合推荐",
        value: 1,
        checked: true
      }, {
        text: "新品优先",
        value: 2
      }, {
        text: "评论数从高到低",
        value: 3
      }],
      options1: [{
        text: "默认排序",
        value: 11,
        checked: true
      }, {
        text: "销量排序",
        value: 12
      }, {
        text: "价格排序",
        value: 13
      }],
      range: "综合推荐",
      rangeShow: false,
      sort: "默认排序",
      sortShow: false,
      //数据格式二
      options2: ["注册激活", "站长工具", "投递文章", "媒体合作", "素材相关", "报告错误", "论坛事务", "发布软件", "网站排行榜", "其他事务"],
      question: "",
      quesShow: false,
      options3: ["最新车讯", "降价排行", "SUV", "违章罚单", "提车试驾", "测评体验", "选车指南", "美女车模", "加油优惠卡", "维修保养"],
      tag: "",
      tagShow: false
    };
  },
  methods: {
    filterTap(type) {
      if (type === 1) {
        this.$refs.ddmRange.show();
        this.rangeShow = true;
      } else {
        this.$refs.ddmSort.show();
        this.sortShow = true;
      }
    },
    rangeItemClick(e) {
      formatAppLog("log", "at pages/component/operate/dropdownMenu/dropdownMenu.nvue:123", e);
      this.range = e.text;
      this.rangeClose();
    },
    rangeClose() {
      this.rangeShow = false;
    },
    sortItemClick(e) {
      formatAppLog("log", "at pages/component/operate/dropdownMenu/dropdownMenu.nvue:131", e);
      this.sort = e.text;
      this.sortClose();
    },
    sortClose() {
      this.sortShow = false;
    },
    quesTap() {
      this.$refs.ddmQues.show();
      this.quesShow = true;
    },
    quesItemClick(e) {
      formatAppLog("log", "at pages/component/operate/dropdownMenu/dropdownMenu.nvue:143", e);
      this.question = e.text;
      this.quesClose();
    },
    quesClose() {
      this.quesShow = false;
    },
    tagTap() {
      this.$refs.ddmTag.show();
      this.tagShow = true;
    },
    tagItemClick(e) {
      formatAppLog("log", "at pages/component/operate/dropdownMenu/dropdownMenu.nvue:155", e);
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
  const _component_fui_icon = resolveEasycom(resolveDynamicComponent("fui-icon"), __easycom_1$1);
  const _component_fui_dropdown_menu = resolveEasycom(resolveDynamicComponent("fui-dropdown-menu"), __easycom_1);
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
        createElementVNode("u-text", { class: "fui-page__title" }, "DropdownMenu"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "DropdownMenu 下拉菜单，用于弹出一个下拉菜单给用户选择操作。")
      ]),
      createElementVNode("view", { class: "fui-page__bd" }, [
        createElementVNode("u-text", { class: "fui-section__title" }, "选择框位置、样式改变"),
        createElementVNode("view", { class: "fui-filter__bar" }, [
          createElementVNode("view", { class: "fui-flex__1" }, [
            createVNode(_component_fui_dropdown_menu, {
              maxHeight: "324",
              size: 28,
              selectedColor: "#465CFF",
              options: $data.options,
              onClick: $options.rangeItemClick,
              onClose: $options.rangeClose,
              ref: "ddmRange"
            }, {
              default: withCtx(() => [
                createElementVNode("view", {
                  class: "fui-filter__item",
                  onClick: _cache[0] || (_cache[0] = ($event) => $options.filterTap(1))
                }, [
                  createElementVNode(
                    "u-text",
                    { class: "fui-text" },
                    toDisplayString($data.range),
                    1
                    /* TEXT */
                  ),
                  createElementVNode(
                    "view",
                    {
                      class: normalizeClass(["fui-filter__icon", { "fui-icon__ani": $data.rangeShow }])
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
              ]),
              _: 1
              /* STABLE */
            }, 8, ["options", "onClick", "onClose"])
          ]),
          createElementVNode("view", { class: "fui-flex__1" }, [
            createVNode(_component_fui_dropdown_menu, {
              maxHeight: "324",
              minWidth: 300,
              right: "0",
              size: 28,
              selectedColor: "#465CFF",
              isCheckMark: "",
              checkmarkColor: "#465CFF",
              isReverse: "",
              options: $data.options1,
              onClick: $options.sortItemClick,
              onClose: $options.sortClose,
              ref: "ddmSort"
            }, {
              default: withCtx(() => [
                createElementVNode("view", {
                  class: "fui-filter__item",
                  onClick: _cache[1] || (_cache[1] = ($event) => $options.filterTap(2))
                }, [
                  createElementVNode(
                    "u-text",
                    { class: "fui-text" },
                    toDisplayString($data.sort),
                    1
                    /* TEXT */
                  ),
                  createElementVNode(
                    "view",
                    {
                      class: normalizeClass(["fui-filter__icon", { "fui-icon__ani": $data.sortShow }])
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
              ]),
              _: 1
              /* STABLE */
            }, 8, ["options", "onClick", "onClose"])
          ])
        ]),
        createElementVNode("u-text", { class: "fui-section__title" }, "可滚动、改变选择框颜色"),
        createVNode(_component_fui_list_cell, { highlight: false }, {
          default: withCtx(() => [
            createElementVNode("view", { class: "fui-list__cell fui-flex__center" }, [
              createElementVNode("u-text", { class: "fui-text" }, "问题分类："),
              createElementVNode("view", { class: "fui-flex__1" }, [
                createVNode(_component_fui_dropdown_menu, {
                  checkboxColor: "#FFB703",
                  minWidth: 400,
                  splitLine: "",
                  options: $data.options2,
                  ref: "ddmQues",
                  onClick: $options.quesItemClick,
                  onClose: $options.quesClose
                }, {
                  default: withCtx(() => [
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
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["options", "onClick", "onClose"])
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "向上展开、不显示选择框"),
        createVNode(_component_fui_list_cell, { highlight: false }, {
          default: withCtx(() => [
            createElementVNode("view", { class: "fui-list__cell fui-flex__center" }, [
              createElementVNode("u-text", { class: "fui-text" }, "选择标签："),
              createElementVNode("view", { class: "fui-flex__1" }, [
                createVNode(_component_fui_dropdown_menu, {
                  isCheckbox: false,
                  selectedColor: "#FF2B2B",
                  splitLine: "",
                  options: $data.options3,
                  ref: "ddmTag",
                  direction: "up",
                  onClick: $options.tagItemClick,
                  onClose: $options.tagClose
                }, {
                  default: withCtx(() => [
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
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["options", "onClick", "onClose"])
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ])
  ]);
}
const dropdownMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/operate/dropdownMenu/dropdownMenu.nvue"]]);
export {
  dropdownMenu as default
};
