import { a as requireNativePlugin, _ as _export_sfc, r as resolveEasycom } from "../../../../uni-app.es.js";
import { openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, toDisplayString, createCommentVNode, resolveDynamicComponent, createVNode } from "vue";
const _style_0$1 = { "fui-loading": { "": { "flexDirection": "row", "alignItems": "center", "justifyContent": "center" } }, "fui-loading__fixed": { "": { "zIndex": 1008 } }, "fui-loading__wrap": { "": { "width": "208rpx", "height": "208rpx", "flexDirection": "column", "borderRadius": "12rpx" } }, "fui-loading__ani": { "": { "width": "64rpx", "height": "64rpx", "marginTop": 0, "marginRight": 6, "marginBottom": "30rpx", "marginLeft": 6 } }, "fui-loading__row": { "": { "flex": 1, "height": "36rpx" } }, "fui-loading-row__ani": { "": { "width": "36rpx", "height": "36rpx", "borderRadius": "36rpx", "marginRight": "20rpx" } }, "fui-loading__text": { "": { "textAlign": "center" } }, "fui-loading__mask": { "": { "position": "fixed", "left": 0, "top": 0, "right": 0, "bottom": 0, "zIndex": 1002, "alignItems": "center", "justifyContent": "center" } } };
const animation = requireNativePlugin("animation");
const _sfc_main$1 = {
  name: "fui-loading",
  props: {
    //col、row
    type: {
      type: String,
      default: "col"
    },
    //提示文字
    text: {
      type: String,
      default: "加载中"
    },
    //文本颜色，type=col时生效
    colColor: {
      type: String,
      default: "#FFFFFF"
    },
    //文本颜色，type=row时生效
    rowColor: {
      type: String,
      default: "#7F7F7F"
    },
    //字体大小，单位rpx
    size: {
      type: [Number, String],
      default: 26
    },
    //loading背景色，type=col时生效
    backgroundColor: {
      type: String,
      default: "rgba(0, 0, 0, 0.6)"
    },
    //loading icon图片地址，type=col时生效
    srcCol: {
      type: String,
      default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAARVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////9SnXPCAAAAFnRSTlMA8ECgECCAYDDQ4MCwUL9wkN9vP49fRXb34AAAA1dJREFUaN7tmtmSozAMReXdxuyk+f9PnaW6o06CAdtSumqG8xqSi6QrGwfBxcXFD2OW5cP+pVsWDe9AL7YP6xO9mj1w0t3CmkK0H0yhd0qsBzBoazutZxDKACFSrefpJZmFUfad0vpVtonWOvkHZ62Kzas0QcLnJ0dFuxGOHNqny8QMVfjw6By5c+n4GHnwVOGq7tiDD3G74uq234Idzbmue7hVXZtmYfEncqRDicekKPSo+Z6o/EI7bB6Zfc+hXBl1R13V+0Jm6uL3inCiKGZX6g7ENwXKrrwfEB3uyubszYovXahBx3ve9LkvoG4lcc36pf7zagu16JCzeo4E8aLy+TJL1CXAfJWtP7zHKcsPp+NYh6NEY2posOeSbT4v64CMiLU7dvQIVGAsqzyuSKOBEHvCXwHvjZAGQ94PuAVaJIa8X2EDxMSDkGXh0lG9KCkMmCnkbdNq6oARt7t8Oa6A0dhhx1oREPpe9ukVxgEHBnOdyLQAHkI61wqtxcCQ9rXATDPgk9uef7kjFl+PiRJH4EKlijwmniyp15DEqtYBFz7VyQKXLR5ST9iJLibvZLuZiQh8qO1+kizPHq+hNXpT2AIjrlnX+GIii8J8eJPatyQwcwn/j8ISu5uZwj7+d4QBl8w3I3CT4EOnjjcCeJHJXUsDJ35LeHhDPw0yaesROIkmaesAjJgVtmjZizygd99b5CnunCQVsNGlFsbAnOs+tfkNTMdFzOjuqb0HJlR6J4h4uKHH7CSz47SX2tsIGr6Dm9mNyPGFrHZrqBuuKvuD1dhxGbs/6tOGuJcxoObMM5/QQIoWx8G0HA99IwZ89EZzAEI6PKMc+kt4ykRjix4ne6IrczhjGmzmoAn/dOlyXpgrumPoeLrr6JRd1hOkJVN2mW9mFZGywwbJU+51pa/QWJnKk6/o3xbX/Xxl0ZUPvxXp4nREqyuG31zZnFD5nJHp8ZsVc0I9NkTOFFsw9UN7t5x8W1E9oQSdyJ2p1fP04srKSUUlz0zLiqQlKwbwppvfVZ0DjvkR/bWO2urDbIp2t2n9knWk/+ojorfzsty9v8y2n/DTZgBKZLueInZAjR7CkWoYDLBgXCvSs/uoyoJ3Y3zWjOPg4T14KQf7m0FKqeHi4uJH+QUYYoTOYC/s2wAAAABJRU5ErkJggg=="
    },
    //loading icon图片地址，type=row时生效
    srcRow: {
      type: String,
      default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAAM1BMVEUAAACPj4+IiIiIiIiIiIiIiIiKioqHh4eHh4eHh4eHh4eIiIiIiIiJiYmIiIiJiYmIiIi8awvKAAAAEHRSTlMAEEDw4NAwwKAgYICQULBwL0wVnQAAAmpJREFUWMPtmOmO4yAQhLlvMO//tDuyjfAaCEcj7UqTT5o/iafSVLcLY/TldyHID8fPH94oir2TLD6QyugdxVoeazAnYPUaFtsws+yNVjR+htolcWz/luHyhL7F55XNQ0Narx+L8TY8bSGTXsiYUB5V8A+zHJ4rud+p3GI+PiwqCXv0Ec+T42awf3L8+iMtzwwp36UEPHR1SIYPKueS+xxJe1CZiYkooNmTvjLHUzHDR7TVgnI2UXR9k/OhQHslieKCcb87reRnB5fCzMeTVp5cUbeY8O6arEYknYs60CJXK21zOvot7DSK4lrR51eA7dQ1y1bFF9MT2Chb358DsLHeLJeKhpZdDgkDFp1jQtRGXiEYOtZU1PLdUt7OFT84gnJUHNE5XOCO2PLnCALDzl21HD2Yam4ZRU9kER8Qs/V7IQ7BIWVqp10TTCFN0gdgwvumJmkcwWDFgigsQtv4Sv8baZ2lt5Pn+n+Wfm+CMsUsHFIJQ7VH+l2hSXsaHFUbEb1l2GRt5zFb/FC1nSfskGam+lSP4cqmks10jyOc1fditiGMXD1G4DekTH5sf14gkTeD1QOdbrRLXodGAKb1hC7gh5nmvzvgI0NoHyswA1niP7WKQE4dmtYHDH4MwzxS3T2MmCWje5OL2aK26j9EC7qkrVIk97XtrM+RYzSoHSZmUCTlLoLNvTs+aFLug+XEu2Mt59boRl9+4vk7gbD79fXnii2dsS6Xc4lb3fx5lX1bfKfPD1HJInetS64lJQnxhkrryV2+INbxeCHXN1PtaGxClUYgvGJ1XY82IA7Fn7IyFO7DIDcYfflN/AFNdjdeDj7M+wAAAABJRU5ErkJggg=="
    },
    isFixed: {
      type: Boolean,
      default: true
    },
    //是否需要遮罩，非nvue有效，nvue默认带遮罩，isFixed为true时生效
    isMask: {
      type: Boolean,
      default: false
    },
    //v1.9.9+
    maskBgColor: {
      type: String,
      default: "transparent"
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
  //nvue暂不支持vue3，所以不需要做兼容,此处以防后续兼容
  beforeUnmount() {
    this.deg = 0;
    this.stop = true;
  },
  methods: {
    _animation() {
      if (!this.$refs["fui_loading"] || this.stop)
        return;
      animation.transition(
        this.$refs["fui_loading"].ref,
        {
          styles: {
            transform: `rotate(${this.deg}deg)`
          },
          duration: 800,
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
      class: normalizeClass({ "fui-loading__mask": ($props.isMask || $data.isNvue) && $props.isFixed }),
      style: normalizeStyle({ backgroundColor: $props.isFixed ? $props.maskBgColor : "transparent" }),
      renderWhole: true
    },
    [
      $props.type === "col" ? (openBlock(), createElementBlock(
        "view",
        {
          key: 0,
          class: normalizeClass(["fui-loading fui-loading__wrap", { "fui-loading__fixed": $props.isFixed && !$data.isNvue }]),
          style: normalizeStyle({ backgroundColor: $props.backgroundColor, position: $props.isFixed && !$data.isNvue ? "fixed" : "static" })
        },
        [
          createElementVNode("u-image", {
            ref: "fui_loading",
            class: "fui-loading__ani",
            src: $props.srcCol
          }, null, 8, ["src"]),
          createElementVNode(
            "u-text",
            {
              class: "fui-loading__text",
              style: normalizeStyle({ color: $props.colColor, fontSize: $props.size + "rpx", "line-height": $props.size + "rpx" })
            },
            toDisplayString($props.text),
            5
            /* TEXT, STYLE */
          )
        ],
        6
        /* CLASS, STYLE */
      )) : (openBlock(), createElementBlock(
        "view",
        {
          key: 1,
          class: normalizeClass(["fui-loading fui-loading__row", { "fui-loading__fixed": $props.isFixed && !$data.isNvue }]),
          style: normalizeStyle({ position: $props.isFixed && !$data.isNvue ? "fixed" : "static" })
        },
        [
          createCommentVNode(' <loading-indicator :animating="true"></loading-indicator> '),
          createElementVNode("u-image", {
            ref: "fui_loading",
            class: "fui-loading-row__ani",
            src: $props.srcRow
          }, null, 8, ["src"]),
          createElementVNode(
            "u-text",
            {
              class: "fui-loading__text",
              style: normalizeStyle({ color: $props.rowColor, fontSize: $props.size + "rpx", "line-height": $props.size + "rpx" })
            },
            toDisplayString($props.text),
            5
            /* TEXT, STYLE */
          )
        ],
        6
        /* CLASS, STYLE */
      ))
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-loading/fui-loading.vue"]]);
const _style_0 = { "fui-wrap": { "": { "paddingBottom": "120rpx" } } };
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_loading = resolveEasycom(resolveDynamicComponent("fui-loading"), __easycom_0);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("u-text", { class: "fui-page__title" }, "Loading"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "Loading 加载。")
      ]),
      createElementVNode("view", { class: "fui-page__bd fui-page__spacing" }, [
        createElementVNode("u-text", {
          class: "fui-section__title",
          style: { "margin-top": "0" }
        }, "基础使用（type=row）"),
        createVNode(_component_fui_loading, {
          type: "row",
          isFixed: false
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "基础使用（type=col）"),
        createElementVNode("view", { class: "fui-flex__center" }, [
          createVNode(_component_fui_loading, { isFixed: false })
        ]),
        createCommentVNode(" 居中且显示遮罩，仅 isFixed为true时生效"),
        createCommentVNode(' <fui-loading isMask mask-bg-color="rgba(0,0,0,.3)"></fui-loading> '),
        createElementVNode("u-text", { class: "fui-section__title" }, "更换图标（type=row）"),
        createVNode(_component_fui_loading, {
          type: "row",
          isFixed: false,
          srcRow: "/static/images/component/loading_gray.png",
          text: "正在加载..."
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "更换图标（type=col）"),
        createElementVNode("view", { class: "fui-flex__center" }, [
          createVNode(_component_fui_loading, {
            isFixed: false,
            srcCol: "/static/images/component/loading_white.png",
            text: "正在加载..."
          })
        ])
      ])
    ])
  ]);
}
const loading = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/operate/loading/loading.nvue"]]);
export {
  loading as default
};
