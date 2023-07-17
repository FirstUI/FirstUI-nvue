import { a as requireNativePlugin, _ as _export_sfc, r as resolveEasycom } from "../../../../uni-app.es.js";
import { openBlock, createElementBlock, normalizeClass, normalizeStyle, createCommentVNode, createElementVNode, toDisplayString, resolveDynamicComponent, createVNode } from "vue";
const _style_0$1 = { "fui-loadmore__wrap": { "": { "alignItems": "center", "justifyContent": "center" } }, "fui-loadmore__col": { "": { "flexDirection": "column" } }, "fui-loadmore__row": { "": { "flexDirection": "row" } }, "fui-loadmore__icon": { "": { "marginTop": 0, "marginRight": 6, "marginBottom": 0, "marginLeft": 6, "borderWidth": 2, "borderStyle": "solid", "borderRadius": 100 } }, "fui-loadmore__icon-ani": { "": { "marginTop": 0, "marginRight": 6, "marginBottom": 0, "marginLeft": 6 } }, "fui-loadmore__text": { "": { "paddingTop": "16rpx" } } };
const animation = requireNativePlugin("animation");
const _sfc_main$1 = {
  name: "fui-loadmore",
  props: {
    //占据高度，单位rx
    height: {
      type: [Number, String],
      default: 100
    },
    //1-上拉加载 2-正在加载... 3-没有更多了
    state: {
      type: [Number, String],
      default: 2
    },
    initText: {
      type: String,
      default: "上拉加载"
    },
    //提示文字
    text: {
      type: String,
      default: "正在加载..."
    },
    noneText: {
      type: String,
      default: "没有更多了"
    },
    //文字颜色
    color: {
      type: String,
      default: "#7F7F7F"
    },
    //文字大小，单位rpx
    size: {
      type: [Number, String],
      default: 24
    },
    //loading图标背景色
    iconColor: {
      type: String,
      default: "#B2B2B2"
    },
    //loading图标高亮部分颜色
    activeColor: {
      type: String,
      default: ""
    },
    //loading 图标的宽度，单位rpx
    iconWidth: {
      type: [Number, String],
      default: 32
    },
    //自定义loading图标image路径，若自定义图标则iconColor、activeColor属性失效
    src: {
      type: String,
      default: ""
    },
    //loading图标和文字排列方向，可取值：col，row
    direction: {
      type: String,
      default: "row"
    }
  },
  watch: {
    state(newValue, oldValue) {
      this.$nextTick(() => {
        if (newValue == 2) {
          this.stop = false;
          setTimeout(() => {
            this._animation();
          }, 50);
        } else {
          this.stop = true;
        }
      });
    }
  },
  computed: {
    getActiveColor() {
      let color = this.activeColor;
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
      deg: 0,
      stop: false
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.deg += 360;
        this._animation();
      }, 50);
    });
  },
  beforeUnmount() {
    this.deg = 0;
    this.stop = true;
  },
  methods: {
    getStateText(state) {
      state = Number(state);
      return [this.initText, this.text, this.noneText][state - 1];
    },
    _animation() {
      if (!this.$refs["fui_loadmore"] || this.stop)
        return;
      animation.transition(
        this.$refs["fui_loadmore"].ref,
        {
          styles: {
            transform: `rotate(${this.deg}deg)`
          },
          duration: 700,
          //ms
          timingFunction: "linear",
          iterationCount: "infinite",
          needLayout: false,
          delay: 0
          //ms
        },
        () => {
          this.deg += 360;
          this._animation();
        }
      );
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["fui-loadmore__wrap", ["fui-loadmore__" + $props.direction]]),
      style: normalizeStyle({ height: $props.height + "rpx" }),
      renderWhole: true
    },
    [
      !$props.src && $props.state == 2 ? (openBlock(), createElementBlock(
        "view",
        {
          key: 0,
          class: normalizeClass(["fui-loadmore__icon", { "fui-loadmore__border-left": !$data.isNvue && !$props.activeColor }]),
          ref: "fui_loadmore",
          style: normalizeStyle({ width: $props.iconWidth + "rpx", height: $props.iconWidth + "rpx", "border-left-color": $options.getActiveColor, "border-right-color": $props.iconColor, "border-top-color": $props.iconColor, "border-bottom-color": $props.iconColor })
        },
        null,
        6
        /* CLASS, STYLE */
      )) : createCommentVNode("v-if", true),
      $props.src && $props.state == 2 ? (openBlock(), createElementBlock("u-image", {
        key: 1,
        class: "fui-loadmore__icon-ani",
        ref: "fui_loadmore",
        src: $props.src,
        style: normalizeStyle({ width: $props.iconWidth + "rpx", height: $props.iconWidth + "rpx" })
      }, null, 12, ["src"])) : createCommentVNode("v-if", true),
      createElementVNode(
        "u-text",
        {
          class: normalizeClass({ "fui-loadmore__text": $props.direction === "col" }),
          style: normalizeStyle({ color: $props.color, "font-size": $props.size + "rpx", "line-height": $props.size + "rpx" })
        },
        toDisplayString($options.getStateText($props.state)),
        7
        /* TEXT, CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-loadmore/fui-loadmore.vue"]]);
const _style_0 = { "fui-section__title": { "": { "marginLeft": "32rpx" } } };
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_loadmore = resolveEasycom(resolveDynamicComponent("fui-loadmore"), __easycom_0);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("u-text", { class: "fui-page__title" }, "LoadMore"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "LoadMore 加载更多，主要使用场景如：上拉加载等。")
      ]),
      createElementVNode("view", { class: "fui-page__bd" }, [
        createElementVNode("u-text", { class: "fui-section__title fui-mtop--0" }, "基本使用"),
        createVNode(_component_fui_loadmore),
        createVNode(_component_fui_loadmore, { activeColor: "#FFB703" }),
        createVNode(_component_fui_loadmore, {
          iconColor: "rgba(255, 183, 3, .2)",
          activeColor: "#FFB703",
          color: "#FFB703"
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "direction:col"),
        createVNode(_component_fui_loadmore, {
          direction: "col",
          text: "加载中",
          color: "#465CFF"
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "自定义图标"),
        createVNode(_component_fui_loadmore, {
          src: "/static/images/component/loading_gray.png",
          iconWidth: 36,
          text: "加载中..."
        })
      ])
    ])
  ]);
}
const loadmore = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/data/loadmore/loadmore.nvue"]]);
export {
  loadmore as default
};
