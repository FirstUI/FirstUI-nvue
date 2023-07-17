import { _ as _export_sfc, f as formatAppLog, r as resolveEasycom } from "../../../../uni-app.es.js";
import { openBlock, createElementBlock, createElementVNode, normalizeClass, normalizeStyle, toDisplayString, createCommentVNode, renderSlot, Fragment, renderList, withModifiers, resolveDynamicComponent, createVNode, withCtx } from "vue";
import { _ as __easycom_1 } from "../../../../fui-icon.js";
const _style_0$1 = { "fui-pagination__wrap": { "": { "flex": 1, "position": "relative", "overflow": "hidden", "flexDirection": "row", "justifyContent": "space-between", "alignItems": "center" } }, "fui-pagination__btn": { "": { "position": "relative", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "textAlign": "center", "borderWidth": 0.5, "borderStyle": "solid" } }, "fui-pagination__btn-ac": { "": { "opacity:active": 0.5 } }, "fui-pagination__num": { "": { "flex": 1, "flexDirection": "row", "justifyContent": "center", "alignItems": "center" } }, "fui-pagination__disabled": { "": { "opacity": 0.3 } }, "fui-page__number": { "": { "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between" } }, "fui-page__num-item": { "": { "height": "60rpx", "alignItems": "center", "justifyContent": "center", "marginTop": 0, "marginRight": "4rpx", "marginBottom": 0, "marginLeft": "4rpx", "opacity:active": 0.5 } }, "fui-page__num-width": { "": { "width": "60rpx" } }, "fui-page__num-padding": { "": { "paddingTop": 0, "paddingRight": "8rpx", "paddingBottom": 0, "paddingLeft": "8rpx" } }, "fui-page__num-text": { "": { "fontSize": "24rpx" } } };
const _sfc_main$1 = {
  name: "fui-pagination",
  emits: ["change"],
  props: {
    prevText: {
      type: String,
      default: "上一页"
    },
    nextText: {
      type: String,
      default: "下一页"
    },
    width: {
      type: [Number, String],
      default: 128
    },
    height: {
      type: [Number, String],
      default: 60
    },
    borderColor: {
      type: String,
      default: "transparent"
    },
    background: {
      type: String,
      default: "#fff"
    },
    color: {
      type: String,
      default: "#333"
    },
    size: {
      type: [Number, String],
      default: 28
    },
    radius: {
      type: [Number, String],
      default: 12
    },
    //是否有点击效果
    highlight: {
      type: Boolean,
      default: true
    },
    //是否自定义按钮显示内容
    custom: {
      type: Boolean,
      default: false
    },
    //当前页码
    current: {
      type: [Number, String],
      default: 1
    },
    //当前页码字体颜色
    currentColor: {
      type: String,
      default: ""
    },
    //页码字体颜色
    pageColor: {
      type: String,
      default: "#333"
    },
    //页码字体大小
    pageFontSize: {
      type: [Number, String],
      default: 36
    },
    //是否需要展示页码
    isPage: {
      type: Boolean,
      default: true
    },
    //页码展示类型 1-简约型 2-展开型
    pageType: {
      type: [Number, String],
      default: 1
    },
    pageBgColor: {
      type: String,
      default: "rgba(0,0,0,0)"
    },
    activeBgColor: {
      type: String,
      default: ""
    },
    activeColor: {
      type: String,
      default: "#fff"
    },
    //数据总量
    total: {
      type: [Number, String],
      default: 0
    },
    //每页数据量
    pageSize: {
      type: [Number, String],
      default: 10
    }
  },
  computed: {
    maxPage() {
      let maxPage = 1;
      let total = Number(this.total);
      let pageSize = Number(this.pageSize);
      if (total && pageSize) {
        maxPage = Math.ceil(total / pageSize);
      }
      return maxPage;
    },
    getCurrentColor() {
      let color = this.currentColor;
      if (!color || color === true) {
        const app = uni && uni.$fui && uni.$fui.color;
        color = app && app.primary || "#465CFF";
      }
      return color;
    },
    getActiveBgColor() {
      let color = this.activeBgColor;
      if (!color || color === true) {
        const app = uni && uni.$fui && uni.$fui.color;
        color = app && app.primary || "#465CFF";
      }
      return color;
    }
  },
  watch: {
    current(val) {
      this.currentIndex = +val;
    },
    total(val) {
      if (this.pageType == 2) {
        this.getPageNumber();
      }
    },
    pageSize(val) {
      if (this.pageType == 2) {
        this.getPageNumber();
      }
    }
  },
  created() {
    this.currentIndex = +this.current;
    if (this.pageType == 2) {
      this.getPageNumber();
    }
  },
  data() {
    return {
      currentIndex: 1,
      pageNumber: [],
      pagerCount: 0
    };
  },
  methods: {
    toArray(start, end) {
      return Array.from(new Array(end + 1).keys()).slice(start);
    },
    getPageNumber() {
      const num = this.currentIndex;
      const total = this.total;
      const pageSize = this.pageSize;
      let pagerCount = this.pagerCount;
      if (!pagerCount) {
        pagerCount = 6;
        const width = Number(this.width);
        if (!isNaN(width) && width <= 60) {
          pagerCount = 8;
        }
        this.pagerCount = pagerCount;
      }
      let showPagerArr = this.toArray(1, pagerCount);
      let pagerNum = Math.ceil(total / pageSize);
      if (pagerNum <= 1) {
        showPagerArr = [1];
      } else if (pagerNum <= pagerCount) {
        showPagerArr = this.toArray(1, pagerNum);
      } else {
        showPagerArr[pagerCount - 1] = pagerNum;
        if (num < pagerCount - 1) {
          showPagerArr[pagerCount - 2] = "...";
        } else if (num >= pagerNum - (pagerCount - 3)) {
          showPagerArr[1] = "...";
          showPagerArr.forEach((item, index) => {
            if (index > 1) {
              showPagerArr[index] = pagerNum - (pagerCount - 3) + (index - 2);
            }
          });
        } else {
          showPagerArr[1] = "...";
          for (let i = 0; i < pagerCount - 3; i++) {
            showPagerArr[i + 2] = num + i;
          }
          showPagerArr[pagerCount - 2] = "...";
        }
      }
      this.pageNumber = showPagerArr;
    },
    clickPrev() {
      if (Number(this.currentIndex) === 1)
        return;
      this.currentIndex -= 1;
      this.change("prev");
    },
    clickNext() {
      if (Number(this.currentIndex) === this.maxPage)
        return;
      this.currentIndex += 1;
      this.change("next");
    },
    handleClick(item, index) {
      let pageNo = Number(item);
      const idx = this.pagerCount === 6 ? 4 : 6;
      if (isNaN(pageNo)) {
        if (index === 1) {
          pageNo = this.pageNumber[index + 1] - (this.pagerCount - 4);
        } else if (index === idx) {
          pageNo = this.pageNumber[index - 1] + 1;
        }
      } else {
        if (Number(this.currentIndex) === pageNo)
          return;
      }
      this.currentIndex = pageNo;
      this.change("pageNumber");
    },
    change(e) {
      this.getPageNumber();
      this.$emit("change", {
        type: e,
        current: this.currentIndex
      });
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "fui-pagination__wrap",
    renderWhole: true
  }, [
    createElementVNode(
      "view",
      {
        class: normalizeClass(["fui-pagination__btn", { "fui-pagination__disabled": $data.currentIndex === 1, "fui-pagination__btn-ac": $data.currentIndex !== 1 && $props.highlight, "fui-pagination__color": !$props.color }]),
        style: normalizeStyle({ width: $props.width + "rpx", height: $props.height + "rpx", borderColor: $props.borderColor, background: $props.background, borderRadius: $props.radius + "rpx" }),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.clickPrev && $options.clickPrev(...args))
      },
      [
        !$props.custom ? (openBlock(), createElementBlock(
          "u-text",
          {
            key: 0,
            class: normalizeClass({ "fui-pagination__color": !$props.color }),
            style: normalizeStyle({ color: $props.color, fontSize: $props.size + "rpx" })
          },
          toDisplayString($props.prevText),
          7
          /* TEXT, CLASS, STYLE */
        )) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "prev")
      ],
      6
      /* CLASS, STYLE */
    ),
    $props.isPage && $props.pageType == 1 ? (openBlock(), createElementBlock("view", {
      key: 0,
      class: "fui-pagination__num"
    }, [
      createElementVNode(
        "u-text",
        {
          class: normalizeClass({ "fui-pagination__active-color": !$props.currentColor }),
          style: normalizeStyle({ color: $options.getCurrentColor, fontSize: $props.pageFontSize + "rpx" })
        },
        toDisplayString($data.currentIndex),
        7
        /* TEXT, CLASS, STYLE */
      ),
      createElementVNode(
        "u-text",
        {
          class: normalizeClass({ "fui-pagination__color": !$props.pageColor }),
          style: normalizeStyle({ color: $props.pageColor, fontSize: $props.pageFontSize + "rpx" })
        },
        "/" + toDisplayString($options.maxPage || 0),
        7
        /* TEXT, CLASS, STYLE */
      )
    ])) : createCommentVNode("v-if", true),
    $props.isPage && $props.pageType == 2 ? (openBlock(), createElementBlock("view", {
      key: 1,
      class: "fui-page__number"
    }, [
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($data.pageNumber, (item, index) => {
          return openBlock(), createElementBlock("view", {
            class: normalizeClass(["fui-page__num-item", { "fui-pagination__bg": !$props.activeBgColor && $data.currentIndex === item, "fui-page__num-width": item === "..." || item != "..." && item < 1e3, "fui-page__num-padding": item != "..." && item > 999 }]),
            key: index,
            style: normalizeStyle({ background: $data.currentIndex === item ? $options.getActiveBgColor : $props.pageBgColor, borderRadius: $props.radius + "rpx" }),
            onClick: withModifiers(($event) => $options.handleClick(item, index), ["stop"])
          }, [
            createElementVNode(
              "u-text",
              {
                class: normalizeClass(["fui-page__num-text", { "fui-pagination__color": !$props.color && $data.currentIndex !== item }]),
                style: normalizeStyle({ color: $data.currentIndex === item ? $props.activeColor : $props.pageColor })
              },
              toDisplayString(item),
              7
              /* TEXT, CLASS, STYLE */
            )
          ], 14, ["onClick"]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ])) : createCommentVNode("v-if", true),
    createElementVNode(
      "view",
      {
        class: normalizeClass(["fui-pagination__btn", { "fui-pagination__disabled": $data.currentIndex === $options.maxPage, "fui-pagination__btn-ac": $data.currentIndex !== $options.maxPage && $props.highlight, "fui-pagination__color": !$props.color }]),
        style: normalizeStyle({ width: $props.width + "rpx", height: $props.height + "rpx", borderColor: $props.borderColor, background: $props.background, borderRadius: $props.radius + "rpx" }),
        onClick: _cache[1] || (_cache[1] = (...args) => $options.clickNext && $options.clickNext(...args))
      },
      [
        !$props.custom ? (openBlock(), createElementBlock(
          "u-text",
          {
            key: 0,
            class: normalizeClass({ "fui-pagination__color": !$props.color }),
            style: normalizeStyle({ color: $props.color, fontSize: $props.size + "rpx" })
          },
          toDisplayString($props.nextText),
          7
          /* TEXT, CLASS, STYLE */
        )) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "next")
      ],
      6
      /* CLASS, STYLE */
    )
  ]);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-pagination/fui-pagination.vue"]]);
const _style_0 = { "fui-wrap": { "": { "paddingBottom": "96rpx" } }, "fui-pageno__wrap": { "": { "paddingTop": 0, "paddingRight": "64rpx", "paddingBottom": 0, "paddingLeft": "64rpx" } } };
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    change(e) {
      formatAppLog("log", "at pages/component/nav/pagination/pagination.nvue:59", e);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_pagination = resolveEasycom(resolveDynamicComponent("fui-pagination"), __easycom_0);
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
        createElementVNode("u-text", { class: "fui-page__title" }, "Pagination"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "Pagination 分页器，当数据量过多时，使用分页分解数据。")
      ]),
      createElementVNode("view", { class: "fui-page__bd fui-page__spacing" }, [
        createElementVNode("u-text", { class: "fui-section__title fui-mtop--0" }, "基础使用"),
        createVNode(_component_fui_pagination, {
          total: 100,
          onChange: $options.change
        }, null, 8, ["onChange"]),
        createElementVNode("u-text", { class: "fui-section__title" }, "样式调整"),
        createVNode(_component_fui_pagination, {
          total: 100,
          color: "#FFB703",
          background: "transparent",
          currentColor: "#FFB703"
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "自定义按钮内容"),
        createVNode(_component_fui_pagination, {
          total: 100,
          custom: "",
          background: "transparent"
        }, {
          prev: withCtx(() => [
            createVNode(_component_fui_icon, { name: "arrowleft" })
          ]),
          next: withCtx(() => [
            createVNode(_component_fui_icon, { name: "arrowright" })
          ]),
          _: 1
          /* STABLE */
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "页码展开"),
        createVNode(_component_fui_pagination, {
          total: 1e3,
          pageType: 2
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "页码展开/调整样式"),
        createElementVNode("view", { class: "fui-pageno__wrap" }, [
          createVNode(_component_fui_pagination, {
            total: 1e3,
            custom: "",
            pageType: 2,
            width: 62,
            background: "#FFB703",
            pageBgColor: "rgba(255, 183, 3, .1)",
            activeBgColor: "#FFB703"
          }, {
            prev: withCtx(() => [
              createVNode(_component_fui_icon, {
                size: 40,
                name: "arrowleft",
                color: "#fff"
              })
            ]),
            next: withCtx(() => [
              createVNode(_component_fui_icon, {
                size: 40,
                name: "arrowright",
                color: "#fff"
              })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        createElementVNode("u-text", { class: "fui-section__title" }, "页码展开/按钮宽度设为60"),
        createVNode(_component_fui_pagination, {
          total: 1e3,
          custom: "",
          pageType: 2,
          width: 60,
          background: "#09BE4F",
          pageBgColor: "rgba(9, 190, 79, .05)",
          activeBgColor: "#09BE4F"
        }, {
          prev: withCtx(() => [
            createVNode(_component_fui_icon, {
              size: 40,
              name: "arrowleft",
              color: "#fff"
            })
          ]),
          next: withCtx(() => [
            createVNode(_component_fui_icon, {
              size: 40,
              name: "arrowright",
              color: "#fff"
            })
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ])
  ]);
}
const pagination = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/nav/pagination/pagination.nvue"]]);
export {
  pagination as default
};
