import { openBlock, createElementBlock, normalizeStyle, createElementVNode, normalizeClass, renderSlot, createCommentVNode, Fragment, renderList } from "vue";
import { _ as _export_sfc, a as requireNativePlugin } from "./uni-app.es.js";
const _style_0$1 = { "fui-grid__item": { "": { "flexDirection": "column" } }, "fui-grid__item-box": { "": { "position": "relative", "flex": 1, "flexDirection": "column" } }, "fui-grid__item-border": { "": { "position": "relative", "borderBottomColor": "#EEEEEE", "borderBottomStyle": "solid", "borderBottomWidth": 0.5, "borderRightColor": "#EEEEEE", "borderRightStyle": "solid", "borderRightWidth": 0.5 } }, "fui-highlight": { "": { "!backgroundColor:active": "rgba(0,0,0,0.2)" } } };
const _sfc_main$1 = {
  name: "fui-grid-item",
  emits: ["click"],
  inject: ["grid"],
  props: {
    //是否有点击效果
    highlight: {
      type: Boolean,
      default: true
    },
    backgroundColor: {
      type: String,
      default: "transparent"
    },
    //索引
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      columns: 0,
      showBorder: true,
      width: 0,
      height: 0,
      borderColor: "#eaeef1"
    };
  },
  created() {
    this.init();
  },
  beforeUnmount() {
    if (this.grid) {
      this.grid.children.forEach((item, index) => {
        if (item === this) {
          this.grid.children.splice(index, 1);
        }
      });
    }
  },
  methods: {
    init() {
      if (this.grid) {
        this.columns = this.grid.columns;
        this.showBorder = this.grid.showBorder;
        this.borderColor = this.grid.borderColor;
        this.grid.children.push(this);
        this.width = this.grid.width;
        this.height = this.grid.height;
      }
    },
    handleClick() {
      const e = {
        detail: {
          index: this.index
        }
      };
      this.grid && this.grid.handleClick(e);
      this.$emit("click", e);
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.width ? (openBlock(), createElementBlock(
    "view",
    {
      key: 0,
      style: normalizeStyle("width:" + $data.width + ";" + ($data.height ? "height:" + $data.height : "")),
      class: "fui-grid__item",
      renderWhole: true
    },
    [
      createElementVNode(
        "view",
        {
          class: normalizeClass([{ "fui-grid__item-border": $data.showBorder, "fui-highlight": $props.highlight }, "fui-grid__item-box"]),
          style: normalizeStyle({ "border-right-color": $data.borderColor, "border-bottom-color": $data.borderColor, "border-top-color": $data.borderColor, backgroundColor: $props.backgroundColor }),
          onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick && $options.handleClick(...args))
        },
        [
          renderSlot(_ctx.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    4
    /* STYLE */
  )) : createCommentVNode("v-if", true);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-grid-item/fui-grid-item.vue"]]);
const _style_0 = { "fui-grid__wrap": { "": { "flex": 1, "flexDirection": "column" } }, "fui-grid__wrap-hidden": { "": { "opacity": 0 } }, "fui-grid__wrap-show": { "": { "!opacity": 1 } }, "fui-grid": { "": { "flexDirection": "row", "flexWrap": "wrap" } }, "fui-grid__between": { "": { "justifyContent": "space-between" } }, "fui-grid__border": { "": { "position": "relative", "borderLeftStyle": "solid", "borderLeftWidth": 0.5, "borderTopStyle": "solid", "borderTopWidth": 0.5 } } };
const dom = requireNativePlugin("dom");
const _sfc_main = {
  name: "fui-grid",
  emits: ["click"],
  props: {
    // 每行显示个数
    columns: {
      type: Number,
      default: 3
    },
    // 是否显示边框
    showBorder: {
      type: Boolean,
      default: true
    },
    // 边框颜色 仅nvue有效
    borderColor: {
      type: String,
      default: "#EEEEEE"
    },
    // 是否正方形显示,默认为 true
    square: {
      type: Boolean,
      default: true
    },
    // item 项是否两端对齐，仅在宽度无法拉满且影响美观时使用，谨慎使用 v2.0.0+
    between: {
      type: Boolean,
      default: false
    },
    //当数据无法铺满时，且设置了between 布局，末尾补足占位元素个数
    //最后一行数据个数+emptyElements 不可大于 columns 值
    emptyElements: {
      type: [Number, String],
      default: 0
    }
  },
  provide() {
    return {
      grid: this
    };
  },
  data() {
    const elemId = `fui_${Math.ceil(Math.random() * 1e6).toString(36)}`;
    return {
      elemId,
      width: 0,
      height: 0,
      isShow: false,
      seats: []
    };
  },
  created() {
    this.children = [];
    let sys = uni.getSystemInfoSync();
    this.width = 100 / this.columns + "%";
    if (this.square) {
      this.height = parseInt((sys.windowWidth - 1) / this.columns * 10) / 10 + "px";
    }
  },
  watch: {
    columns(val) {
      this.$nextTick(() => {
        this.init();
      });
    },
    showBorder(val) {
      this.childChange();
    },
    emptyElements(val) {
      this.createEmptyEl(val);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
      this.createEmptyEl(this.emptyElements);
    });
  },
  methods: {
    init() {
      setTimeout(() => {
        this.getWidth((width, height) => {
          this.children.forEach((item, index) => {
            item.width = width;
            item.height = height;
          });
          this.isShow = true;
        });
      }, 50);
    },
    createEmptyEl(val) {
      const nums = Number(val);
      let seats = [];
      if (nums && nums > 0) {
        for (let i = 0; i < nums; i++) {
          seats.push(i);
        }
        this.seats = seats;
      } else {
        this.seats = [];
      }
    },
    childChange() {
      this.children.forEach((item, index) => {
        item.showBorder = this.showBorder;
      });
    },
    handleClick(e) {
      this.$emit("click", e);
    },
    getWidth(fn) {
      dom.getComponentRect(this.$refs["fui_grid"], (ret) => {
        let width = (ret.size.width - 1) / this.columns;
        this.width = parseInt(width * 10) / 10 + "px";
        if (this.square) {
          this.height = this.width;
        }
        fn(this.width, this.height);
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["fui-grid__wrap", [$data.isShow ? "fui-grid__wrap-show" : "fui-grid__wrap-hidden"]]),
      renderWhole: true
    },
    [
      createElementVNode("view", {
        id: $data.elemId,
        ref: "fui_grid",
        class: normalizeClass(["fui-grid", { "fui-grid__border": $props.showBorder, "fui-grid__between": $props.between }]),
        style: normalizeStyle({ "border-left-color": $props.borderColor, "border-top-color": $props.borderColor })
      }, [
        renderSlot(_ctx.$slots, "default"),
        $data.seats.length > 0 && $props.between ? (openBlock(true), createElementBlock(
          Fragment,
          { key: 0 },
          renderList($data.seats, (item, index) => {
            return openBlock(), createElementBlock(
              "view",
              {
                key: index,
                style: normalizeStyle("width:" + $data.width + ";" + ($data.height ? "height:" + $data.height : ""))
              },
              null,
              4
              /* STYLE */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        )) : createCommentVNode("v-if", true)
      ], 14, ["id"])
    ],
    2
    /* CLASS */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-grid/fui-grid.vue"]]);
export {
  __easycom_0 as _,
  __easycom_1 as a
};
