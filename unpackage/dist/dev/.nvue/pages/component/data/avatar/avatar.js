import { openBlock, createElementBlock, normalizeClass, normalizeStyle, createCommentVNode, toDisplayString, renderSlot, resolveDynamicComponent, createElementVNode, createVNode, withCtx } from "vue";
import { _ as _export_sfc, r as resolveEasycom } from "../../../../uni-app.es.js";
import { _ as __easycom_1 } from "../../../../fui-icon.js";
const _style_0$1 = { "fui-avatar__wrap": { "": { "position": "relative", "flexDirection": "row", "alignItems": "center", "justifyContent": "center" } }, "fui-avatar__img": { "": { "flex": 1 } }, "fui-avatar__text": { "": { "flex": 1, "lines": 1, "overflow": "hidden", "textOverflow": "ellipsis", "textAlign": "center" } }, "fui-avatar__size-small": { "": { "!width": "64rpx", "!height": "64rpx" } }, "fui-avatar__text-small": { "": { "!fontSize": "32rpx" } }, "fui-avatar__size-middle": { "": { "!width": "96rpx", "!height": "96rpx" } }, "fui-avatar__text-middle": { "": { "!fontSize": "44rpx" } }, "fui-avatar__size-large": { "": { "!width": "128rpx", "!height": "128rpx" } }, "fui-avatar__text-large": { "": { "!fontSize": "56rpx" } }, "fui-avatar__circle": { "": { "!borderRadius": 500 } }, "fui-avatar__square": { "": { "!borderRadius": "8rpx" } } };
const _sfc_main$1 = {
  name: "fui-avatar",
  emits: ["click", "error"],
  props: {
    src: {
      type: String,
      default: ""
    },
    errorSrc: {
      type: String,
      default: ""
    },
    mode: {
      type: String,
      default: "scaleToFill"
    },
    //微信小程序、百度小程序、字节跳动小程序
    //图片懒加载。只针对page与scroll-view下的image有效
    lazyLoad: {
      type: Boolean,
      default: true
    },
    //默认不解析 webP 格式，只支持网络资源 微信小程序2.9.0
    webp: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: "#D1D1D1"
    },
    //small（64）、middle（96）、large（128）
    size: {
      type: String,
      default: "middle"
    },
    //图片宽度，设置大于0的数值生效，默认使用size
    width: {
      type: [Number, String],
      default: 0
    },
    //默认等宽，设置图大于0的数值且设置了图片宽度生效
    height: {
      type: [Number, String],
      default: 0
    },
    //指定头像的形状，可选值为 circle、square
    shape: {
      type: String,
      default: "circle"
    },
    //图片圆角值，默认使用shape，当设置大于等于0的数值，shape失效
    radius: {
      type: [Number, String],
      default: -1
    },
    //没有src时可以使用文本代替
    text: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#fff"
    },
    //默认使用size下字体大小
    fontSize: {
      type: [Number, String],
      default: 0
    },
    fontWeight: {
      type: [Number, String],
      default: 600
    },
    marginRight: {
      type: [Number, String],
      default: 0
    },
    marginBottom: {
      type: [Number, String],
      default: 0
    },
    //在列表中的索引值
    index: {
      type: Number,
      default: 0
    },
    //其他参数
    params: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    styles() {
      let styles = "";
      if (this.width) {
        styles = `width:${this.width}rpx;height:${this.height || this.width}rpx;`;
      }
      if (this.radius !== -1) {
        styles += `border-radius:${this.radius}rpx;`;
      }
      return styles;
    },
    wrapStyles() {
      return `background:${this.background};margin-right:${this.marginRight}rpx;margin-bottom:${this.marginBottom}rpx;${this.styles};`;
    },
    textStyles() {
      let styles = `color:${this.color};font-weight:${this.fontWeight};`;
      if (this.fontSize) {
        styles += `font-size:${this.fontSize}rpx;`;
      }
      return styles;
    }
  },
  watch: {
    src(val) {
      this.src && (this.showImg = this.src);
    }
  },
  data() {
    return {
      showImg: ""
    };
  },
  created() {
    this.src && (this.showImg = this.src);
  },
  methods: {
    handleError(e) {
      if (this.src) {
        this.errorSrc && (this.showImg = this.errorSrc);
        this.$emit("error", {
          index: this.index,
          params: this.params
        });
      }
    },
    handleClick() {
      this.$emit("click", {
        index: this.index,
        params: this.params
      });
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["fui-avatar__wrap", [$props.width ? "" : "fui-avatar__size-" + $props.size, $props.radius === -1 ? "fui-avatar__" + $props.shape : ""]]),
      style: normalizeStyle($options.wrapStyles),
      onClick: _cache[1] || (_cache[1] = (...args) => $options.handleClick && $options.handleClick(...args)),
      renderWhole: true
    },
    [
      $props.src && $props.src !== true ? (openBlock(), createElementBlock("u-image", {
        key: 0,
        class: normalizeClass(["fui-avatar__img", [$props.radius === -1 ? "fui-avatar__" + $props.shape : "", $props.width ? "" : "fui-avatar__size-" + $props.size]]),
        style: normalizeStyle($options.styles),
        src: $data.showImg,
        mode: $props.mode,
        webp: $props.webp,
        lazyLoad: $props.lazyLoad,
        onError: _cache[0] || (_cache[0] = (...args) => $options.handleError && $options.handleError(...args))
      }, null, 46, ["src", "mode", "webp", "lazyLoad"])) : createCommentVNode("v-if", true),
      !$props.src && $props.src !== true && $props.text ? (openBlock(), createElementBlock(
        "u-text",
        {
          key: 1,
          class: normalizeClass(["fui-avatar__text", [$props.width ? "" : "fui-avatar__text-" + $props.size]]),
          style: normalizeStyle($options.textStyles)
        },
        toDisplayString($props.text),
        7
        /* TEXT, CLASS, STYLE */
      )) : createCommentVNode("v-if", true),
      renderSlot(_ctx.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-avatar/fui-avatar.vue"]]);
const _style_0 = { "fui-wrap": { "": { "paddingBottom": "64rpx" } }, "fui-align__center": { "": { "alignItems": "center" } } };
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_avatar = resolveEasycom(resolveDynamicComponent("fui-avatar"), __easycom_0);
  const _component_fui_icon = resolveEasycom(resolveDynamicComponent("fui-icon"), __easycom_1);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("u-text", { class: "fui-page__title" }, "Avatar"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "Avatar 头像，用图标、图片或者字符的形式展示用户或事物信息。")
      ]),
      createElementVNode("view", { class: "fui-page__bd fui-page__spacing" }, [
        createElementVNode("u-text", { class: "fui-section__title fui-mtop--0" }, "基础使用"),
        createElementVNode("view", { class: "fui-align__center" }, [
          createVNode(_component_fui_avatar, {
            size: "small",
            text: "A"
          }),
          createVNode(_component_fui_avatar, { text: "B" }),
          createVNode(_component_fui_avatar, {
            size: "large",
            text: "丁"
          }),
          createVNode(_component_fui_avatar, {
            text: "刘",
            background: "#FFB703"
          }),
          createVNode(_component_fui_avatar, {
            size: "small",
            text: "邹",
            background: "#465CFF"
          })
        ]),
        createElementVNode("u-text", { class: "fui-section__title" }, "改变圆角值"),
        createElementVNode("view", { class: "fui-align__center" }, [
          createVNode(_component_fui_avatar, {
            size: "small",
            text: "A",
            shape: "square",
            marginRight: "24"
          }),
          createVNode(_component_fui_avatar, {
            text: "B",
            shape: "square",
            marginRight: "24"
          }),
          createVNode(_component_fui_avatar, {
            size: "large",
            text: "丁",
            radius: "30",
            marginRight: "24"
          }),
          createVNode(_component_fui_avatar, {
            text: "刘",
            background: "#FFB703",
            radius: "30",
            marginRight: "24"
          }),
          createVNode(_component_fui_avatar, {
            size: "small",
            text: "邹",
            background: "#465CFF",
            radius: "0"
          })
        ]),
        createElementVNode("u-text", { class: "fui-section__title" }, "使用图片"),
        createElementVNode("view", { class: "fui-align__center" }, [
          createVNode(_component_fui_avatar, {
            size: "small",
            src: "/static/images/common/img_logo.png",
            shape: "square"
          }),
          createVNode(_component_fui_avatar, {
            src: "/static/images/common/img_logo.png",
            radius: "0"
          }),
          createVNode(_component_fui_avatar, {
            size: "large",
            src: "/static/images/common/img_logo.png",
            radius: "30"
          }),
          createVNode(_component_fui_avatar, { src: "/static/images/common/img_logo.png" }),
          createVNode(_component_fui_avatar, {
            size: "small",
            src: "/static/images/common/img_logo.png"
          })
        ]),
        createElementVNode("u-text", { class: "fui-section__title" }, "自定义图标"),
        createElementVNode("view", { class: "fui-align__center" }, [
          createVNode(_component_fui_avatar, { marginRight: "24" }, {
            default: withCtx(() => [
              createVNode(_component_fui_icon, {
                name: "my",
                color: "#fff"
              })
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_fui_avatar, null, {
            default: withCtx(() => [
              createVNode(_component_fui_icon, {
                name: "my-fill",
                color: "#fff"
              })
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ])
    ])
  ]);
}
const avatar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/data/avatar/avatar.nvue"]]);
export {
  avatar as default
};
