import { a as requireNativePlugin, _ as _export_sfc, f as formatAppLog, r as resolveEasycom } from "../../../../uni-app.es.js";
import { _ as __easycom_0 } from "../../../../fui-button.js";
import { openBlock, createElementBlock, withModifiers, createElementVNode, normalizeClass, normalizeStyle, toDisplayString, createCommentVNode, Fragment, renderList, resolveDynamicComponent, createVNode } from "vue";
const _style_0$1 = { "fui-actionsheet__wrap": { "": { "position": "fixed", "left": 0, "right": 0, "bottom": 0, "transform": "translateY(100%)", "transformOrigin": "center center" } }, "fui-as__bg-light": { "": { "backgroundColor": "#F8F8F8" } }, "fui-as__bg-dark": { "": { "backgroundColor": "#111111" } }, "fui-actionsheet__radius": { "": { "borderTopLeftRadius": "24rpx", "borderTopRightRadius": "24rpx" } }, "fui-actionsheet__tips": { "": { "flex": 1, "paddingTop": "40rpx", "paddingRight": "60rpx", "paddingBottom": "40rpx", "paddingLeft": "60rpx", "textAlign": "center", "alignItems": "center", "justifyContent": "center", "fontWeight": "normal" } }, "fui-as__btn-light": { "": { "backgroundColor": "#FFFFFF" } }, "fui-as__btn-dark": { "": { "backgroundColor": "#222222" } }, "fui-actionsheet__operate-box": { "": { "paddingBottom": "12rpx" } }, "fui-actionsheet__btn": { "": { "height": "100rpx", "lineHeight": "100rpx", "flex": 1, "alignItems": "center", "justifyContent": "center", "textAlign": "center", "fontWeight": "normal", "position": "relative", "backgroundColor:active": "rgba(0,0,0,0.2)" } }, "fui-as__divider-light": { "": { "borderTopWidth": 0.5, "borderTopStyle": "solid", "borderTopColor": "#EEEEEE" } }, "fui-as__divider-dark": { "": { "borderTopWidth": 0.5, "borderTopStyle": "solid", "borderTopColor": "#333333" } }, "fui-as__safe-weex": { "": { "paddingBottom": 34 } }, "fui-actionsheet__mask": { "": { "position": "fixed", "top": 0, "left": 0, "right": 0, "bottom": 0, "backgroundColor": "rgba(0,0,0,0.6)" } } };
const animation = requireNativePlugin("animation");
const _sfc_main$1 = {
  name: "fui-actionsheet",
  emits: ["click", "cancel"],
  props: {
    //是否显示操作菜单
    show: {
      type: Boolean,
      default: false
    },
    //菜单按钮数组，可自定义文本颜色
    itemList: {
      type: Array,
      default() {
        return [];
      }
    },
    //菜单按钮字体大小 rpx
    itemSize: {
      type: [Number, String],
      default: 32
    },
    //提示信息
    tips: {
      type: String,
      default: ""
    },
    //提示信息文本颜色
    color: {
      type: String,
      default: "#7F7F7F"
    },
    //提示文字大小 rpx
    size: {
      type: [Number, String],
      default: 26
    },
    //是否需要圆角
    radius: {
      type: Boolean,
      default: true
    },
    //是否需要取消按钮
    isCancel: {
      type: Boolean,
      default: true
    },
    //light/dark
    theme: {
      type: String,
      default: "light"
    },
    //点击遮罩 是否可关闭
    maskClosable: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: [Number, String],
      default: 996
    },
    //是否适配底部安全区
    safeArea: {
      type: Boolean,
      default: true
    }
  },
  data() {
    let isNvue = false;
    isNvue = true;
    return {
      iphoneX: false,
      vals: [],
      isNvue,
      isShow: false
    };
  },
  computed: {
    getStyle() {
      return `z-index:${Number(this.zIndex) - 10};`;
    }
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
    },
    itemList(newVal) {
      this.initData(newVal);
    }
  },
  created() {
    this.iphoneX = this.isPhoneX();
    this.initData(this.itemList);
  },
  methods: {
    initData(vals) {
      if (vals && vals.length > 0) {
        if (typeof vals[0] !== "object") {
          vals = vals.map((item) => {
            return {
              text: item
            };
          });
        }
        this.vals = vals;
      }
    },
    handleClickMask() {
      if (!this.maskClosable)
        return;
      this.handleClickCancel();
    },
    handleClickItem(index) {
      if (!this.show)
        return;
      this.$emit("click", {
        index,
        ...this.vals[index]
      });
    },
    handleClickCancel() {
      this.$emit("cancel");
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
      if (!this.$refs["fui_asm_ani"] || !this.$refs["fui_as_ani"])
        return;
      let styles = {
        transform: `translateY(${type ? "0" : "100%"})`
      };
      animation.transition(
        this.$refs["fui_asm_ani"].ref,
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
        }
      );
      animation.transition(
        this.$refs["fui_as_ani"].ref,
        {
          styles,
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
    },
    isPhoneX() {
      if (!this.safeArea)
        return false;
      const res = uni.getSystemInfoSync();
      let iphonex = false;
      let models = [
        "iphonex",
        "iphonexr",
        "iphonexsmax",
        "iphone11",
        "iphone11pro",
        "iphone11promax",
        "iphone12",
        "iphone12mini",
        "iphone12pro",
        "iphone12promax",
        "iphone13",
        "iphone13mini",
        "iphone13pro",
        "iphone13promax",
        "iphone14",
        "iphone14mini",
        "iphone14pro",
        "iphone14promax",
        "iphone15",
        "iphone15mini",
        "iphone15pro",
        "iphone15promax"
      ];
      const model = res.model.replace(/\s/g, "").toLowerCase();
      const newModel = model.split("<")[0];
      if (models.includes(model) || models.includes(newModel) || res.safeAreaInsets && res.safeAreaInsets.bottom > 0) {
        iphonex = true;
      }
      return iphonex;
    },
    stop() {
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.isShow || !$data.isNvue ? (openBlock(), createElementBlock(
    "view",
    {
      key: 0,
      onTouchmove: _cache[2] || (_cache[2] = withModifiers((...args) => $options.stop && $options.stop(...args), ["stop", "prevent"])),
      renderWhole: true
    },
    [
      createElementVNode(
        "view",
        {
          class: normalizeClass(["fui-actionsheet__mask", { "fui-actionsheet__mask-show": $props.show }]),
          ref: "fui_asm_ani",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClickMask && $options.handleClickMask(...args)),
          style: normalizeStyle($options.getStyle)
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      createElementVNode(
        "view",
        {
          class: normalizeClass(["fui-actionsheet__wrap", { "fui-actionsheet__show": $props.show, "fui-actionsheet__radius": $props.radius, "fui-as__bg-light": $props.theme === "light", "fui-as__bg-dark": $props.theme === "dark" }]),
          ref: "fui_as_ani",
          style: normalizeStyle({ zIndex: $props.zIndex })
        },
        [
          $props.tips ? (openBlock(), createElementBlock(
            "u-text",
            {
              key: 0,
              class: normalizeClass(["fui-actionsheet__tips", { "fui-actionsheet__radius": $props.radius, "fui-as__btn-light": $props.theme === "light", "fui-as__btn-dark": $props.theme === "dark" }]),
              style: normalizeStyle({ fontSize: $props.size + "rpx", color: $props.color })
            },
            toDisplayString($props.tips),
            7
            /* TEXT, CLASS, STYLE */
          )) : createCommentVNode("v-if", true),
          createElementVNode(
            "view",
            {
              class: normalizeClass({ "fui-actionsheet__operate-box": $props.isCancel })
            },
            [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($data.vals, (item, index) => {
                  return openBlock(), createElementBlock("u-text", {
                    class: normalizeClass(["fui-actionsheet__btn", { "fui-actionsheet__btn-last": !$props.isCancel && index == $data.vals.length - 1, "fui-as__safe-weex": !$props.isCancel && index == $data.vals.length - 1 && $data.iphoneX && $props.safeArea, "fui-actionsheet__radius": $props.radius && !$props.tips && index === 0, "fui-as__divider-light": (index !== 0 || $props.tips) && $props.theme === "light", "fui-as__divider-dark": (index !== 0 || $props.tips) && $props.theme === "dark", "fui-as__btn-light": $props.theme === "light", "fui-as__btn-dark": $props.theme === "dark" }]),
                    style: normalizeStyle({ color: $props.theme === "dark" ? item.darkColor || "#D1D1D1" : item.color || "#181818", fontSize: $props.itemSize + "rpx" }),
                    key: index,
                    onClick: ($event) => $options.handleClickItem(index)
                  }, toDisplayString(item.text), 15, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ],
            2
            /* CLASS */
          ),
          $props.isCancel ? (openBlock(), createElementBlock(
            "u-text",
            {
              key: 1,
              style: normalizeStyle({ color: $props.theme === "dark" ? "#D1D1D1" : "#181818", fontSize: $props.itemSize + "rpx" }),
              class: normalizeClass(["fui-actionsheet__btn fui-actionsheet__cancel", { "fui-as__safe-weex": $data.iphoneX && $props.safeArea, "fui-as__btn-light": $props.theme === "light", "fui-as__btn-dark": $props.theme === "dark" }]),
              onClick: _cache[1] || (_cache[1] = (...args) => $options.handleClickCancel && $options.handleClickCancel(...args))
            },
            "取消",
            6
            /* CLASS, STYLE */
          )) : createCommentVNode("v-if", true)
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    32
    /* HYDRATE_EVENTS */
  )) : createCommentVNode("v-if", true);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-actionsheet/fui-actionsheet.vue"]]);
const _style_0 = { "fui-page__bd": { "": { "alignItems": "center", "justifyContent": "center", "flexDirection": "column" } } };
const _sfc_main = {
  data() {
    return {
      show: false,
      tips: "",
      itemList: [],
      isCancel: true,
      theme: "light"
    };
  },
  methods: {
    showActionSheet(type) {
      this.tips = "";
      this.isCancel = true;
      this.theme = "light";
      switch (type) {
        case 1:
          this.tips = "退出后不会删除任何历史数据，下次登录依然可以使用本账号。";
          this.itemList = [{
            text: "退出登录",
            color: "#FF2B2B"
          }];
          break;
        case 2:
          this.itemList = ["点赞", "评论", "收藏"];
          break;
        case 3:
          this.itemList = ["点赞", "评论", "收藏"];
          this.theme = "dark";
          break;
        case 4:
          this.tips = "请选择性别";
          this.itemList = ["男", "女", "未知"];
          this.isCancel = false;
          break;
      }
      setTimeout(() => {
        this.show = true;
      }, 50);
    },
    itemClick(e) {
      formatAppLog("log", "at pages/component/operate/actionsheet/actionsheet.nvue:67", e);
      uni.fui.toast(e.text);
      this.cancel();
    },
    cancel() {
      this.show = false;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_button = resolveEasycom(resolveDynamicComponent("fui-button"), __easycom_0);
  const _component_fui_actionsheet = resolveEasycom(resolveDynamicComponent("fui-actionsheet"), __easycom_1);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("u-text", { class: "fui-page__title" }, "ActionSheet"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "ActionSheet 上拉菜单，从底部弹出的模态框，提供和当前场景相关的操作菜单。")
      ]),
      createElementVNode("view", { class: "fui-page__bd fui-page__spacing" }, [
        createVNode(_component_fui_button, {
          type: "gray",
          "btn-size": "medium",
          text: "带提示",
          bold: "",
          margin: ["24rpx"],
          onClick: _cache[0] || (_cache[0] = ($event) => $options.showActionSheet(1))
        }),
        createVNode(_component_fui_button, {
          type: "gray",
          "btn-size": "medium",
          text: "无提示操作",
          bold: "",
          onClick: _cache[1] || (_cache[1] = ($event) => $options.showActionSheet(2))
        }),
        createVNode(_component_fui_button, {
          type: "gray",
          "btn-size": "medium",
          text: "暗黑模式",
          margin: ["24rpx"],
          bold: "",
          onClick: _cache[2] || (_cache[2] = ($event) => $options.showActionSheet(3))
        }),
        createVNode(_component_fui_button, {
          type: "gray",
          "btn-size": "medium",
          text: "无取消按钮",
          bold: "",
          onClick: _cache[3] || (_cache[3] = ($event) => $options.showActionSheet(4))
        })
      ]),
      createVNode(_component_fui_actionsheet, {
        show: $data.show,
        tips: $data.tips,
        itemList: $data.itemList,
        isCancel: $data.isCancel,
        theme: $data.theme,
        onClick: $options.itemClick,
        onCancel: $options.cancel
      }, null, 8, ["show", "tips", "itemList", "isCancel", "theme", "onClick", "onCancel"])
    ])
  ]);
}
const actionsheet = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/operate/actionsheet/actionsheet.nvue"]]);
export {
  actionsheet as default
};
