import { openBlock, createElementBlock, createElementVNode, normalizeClass, normalizeStyle, createCommentVNode, renderSlot, resolveDynamicComponent, createVNode, withCtx, toDisplayString } from "vue";
import { _ as _export_sfc, r as resolveEasycom } from "../../../../uni-app.es.js";
import { _ as __easycom_1 } from "../../../../fui-icon.js";
const _style_0 = { "fui-input__number": { "": { "flexDirection": "row", "alignItems": "center" } }, "fui-number__minus": { "": { "position": "relative", "flexDirection": "column", "alignItems": "center", "justifyContent": "center" } }, "fui-minus__sign": { "": { "height": 2, "borderRadius": 2 } }, "fui-number__plus": { "": { "position": "relative", "flexDirection": "row", "alignItems": "center", "justifyContent": "center" } }, "fui-plus__sign-col": { "": { "position": "absolute", "top": 0, "transform": "translateX(-1px)", "width": 2, "borderRadius": 2 } }, "fui-plus__sign-row": { "": { "height": 2, "borderRadius": 2 } }, "fui-number__input": { "": { "textAlign": "center", "fontWeight": "500", "borderWidth": 0 } }, "fui-number__disabled": { "": { "opacity": 0.6 } } };
const _sfc_main$1 = {
  name: "fui-input-number",
  emits: ["change", "update:modelValue", "input", "blur"],
  props: {
    modelValue: {
      type: [Number, String],
      default: 1
    },
    //number、text（主要用与输入负号）
    type: {
      type: String,
      default: "number"
    },
    //最小值
    min: {
      type: Number,
      default: 1
    },
    //最大值
    max: {
      type: Number,
      default: 99
    },
    //每次点击改变的间隔大小
    step: {
      type: Number,
      default: 1
    },
    //是否禁用操作
    disabled: {
      type: Boolean,
      default: false
    },
    //加减号宽度，单位rpx
    signWidth: {
      type: [Number, String],
      default: 24
    },
    //加减号颜色
    signColor: {
      type: String,
      default: "#181818"
    },
    //input高度，单位rpx
    height: {
      type: [Number, String],
      default: 40
    },
    //input宽度，单位rpx
    width: {
      type: [Number, String],
      default: 80
    },
    //input圆角，单位rpx
    radius: {
      type: [Number, String],
      default: 8
    },
    size: {
      type: Number,
      default: 26
    },
    //input 背景颜色
    backgroundColor: {
      type: String,
      default: "#EEEEEE"
    },
    //input 字体颜色
    color: {
      type: String,
      default: "#181818"
    },
    //输入框margin-left，margin-right值
    margin: {
      type: [Number, String],
      default: 16
    },
    //是否自定义加减号，为true则去除默认加减号，使用插槽自定义
    custom: {
      type: Boolean,
      default: false
    },
    //索引值，列表中使用
    index: {
      type: [Number, String],
      default: 0
    },
    //自定义参数
    params: {
      type: [Number, String],
      default: 0
    }
  },
  created() {
    this.inputValue = this.getValue(this.modelValue);
  },
  computed: {
    getMinHeight() {
      return Number(this.height) - 8 + "rpx";
    }
  },
  data() {
    let isNvue = false;
    isNvue = true;
    return {
      inputValue: 0,
      oldValue: 0,
      isNvue
    };
  },
  watch: {
    modelValue(val) {
      this.inputValue = this.getValue(val);
    },
    inputValue(newVal, oldVal) {
      if (!isNaN(Number(newVal)) && Number(newVal) !== Number(oldVal)) {
        const val = this.getValue(+newVal);
        this.oldValue = val;
        this.$emit("change", {
          value: val,
          index: this.index,
          params: this.params
        });
        this.$emit("input", val);
        this.$emit("update:modelValue", +val);
      }
    }
  },
  methods: {
    getScale(val, step) {
      let scale = 1;
      let scaleVal = 1;
      if (!Number.isInteger(step)) {
        scale = Math.pow(10, (step + "").split(".")[1].length);
      }
      if (!Number.isInteger(val)) {
        scaleVal = Math.pow(10, (val + "").split(".")[1].length);
      }
      return Math.max(scale, scaleVal);
    },
    getValue(val) {
      val = Number(val);
      if (val < this.min) {
        val = this.min;
      } else if (val > this.max) {
        val = this.max;
      }
      return val;
    },
    calcNum: function(type) {
      if (this.disabled || this.inputValue == this.min && type === "reduce" || this.inputValue == this.max && type === "plus")
        return;
      const scale = this.getScale(Number(this.inputValue), Number(this.step));
      let num = Number(this.inputValue) * scale;
      let step = this.step * scale;
      if (type === "reduce") {
        num -= step;
      } else if (type === "plus") {
        num += step;
      }
      let value = Number((num / scale).toFixed(String(scale).length - 1));
      if (value < this.min) {
        value = this.min;
      } else if (value > this.max) {
        value = this.max;
      }
      this.inputValue = String(value);
    },
    plus: function() {
      this.calcNum("plus");
    },
    minus: function() {
      this.calcNum("reduce");
    },
    blur: function(e) {
      let value = e.detail.value;
      if (value && !isNaN(Number(value))) {
        if (~value.indexOf(".") && Number.isInteger(this.step) && Number.isInteger(Number(value))) {
          value = value.split(".")[0];
        }
        value = this.getValue(value);
      } else {
        value = this.oldValue;
      }
      setTimeout(() => {
        e.detail.value = value;
        this.$emit("blur", e);
        this.inputValue = value;
      }, this.type === "text" ? 100 : 0);
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "fui-input__number",
    renderWhole: true
  }, [
    createElementVNode(
      "view",
      {
        class: normalizeClass(["fui-number__minus", [$props.disabled || $props.min >= $data.inputValue ? "fui-number__disabled" : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.minus && $options.minus(...args)),
        style: normalizeStyle({ minHeight: $options.getMinHeight })
      },
      [
        !$props.custom ? (openBlock(), createElementBlock(
          "view",
          {
            key: 0,
            class: "fui-minus__sign",
            style: normalizeStyle({ backgroundColor: $props.signColor, width: $props.signWidth + "rpx" })
          },
          null,
          4
          /* STYLE */
        )) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "default")
      ],
      6
      /* CLASS, STYLE */
    ),
    createElementVNode("u-input", {
      type: $props.type,
      modelValue: $data.inputValue,
      onInput: _cache[1] || (_cache[1] = ($event) => $data.inputValue = $event.detail.value),
      disabled: $props.disabled,
      onBlur: _cache[2] || (_cache[2] = (...args) => $options.blur && $options.blur(...args)),
      class: "fui-number__input",
      style: normalizeStyle({ color: $props.color, fontSize: $props.size + "rpx", backgroundColor: $props.backgroundColor, height: $props.height + "rpx", minHeight: $props.height + "rpx", width: $props.width + "rpx", borderRadius: $props.radius + "rpx", marginLeft: $props.margin + "rpx", marginRight: $props.margin + "rpx" })
    }, null, 44, ["type", "modelValue", "disabled"]),
    createElementVNode(
      "view",
      {
        class: normalizeClass(["fui-number__plus", [$props.disabled || $data.inputValue >= $props.max ? "fui-number__disabled" : ""]]),
        style: normalizeStyle({ minWidth: $props.signWidth + "rpx", minHeight: $props.signWidth + "rpx" }),
        onClick: _cache[3] || (_cache[3] = (...args) => $options.plus && $options.plus(...args))
      },
      [
        !$props.custom ? (openBlock(), createElementBlock(
          "view",
          {
            key: 0,
            class: "fui-plus__sign-col",
            style: normalizeStyle({ height: $props.signWidth + "rpx", backgroundColor: $props.signColor, left: $data.isNvue ? $props.signWidth / 2 + "rpx" : "50%" })
          },
          null,
          4
          /* STYLE */
        )) : createCommentVNode("v-if", true),
        !$props.custom ? (openBlock(), createElementBlock(
          "view",
          {
            key: 1,
            class: "fui-plus__sign-row",
            style: normalizeStyle({ width: $props.signWidth + "rpx", backgroundColor: $props.signColor })
          },
          null,
          4
          /* STYLE */
        )) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "plus")
      ],
      6
      /* CLASS, STYLE */
    )
  ]);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-input-number/fui-input-number.vue"]]);
const _sfc_main = {
  data() {
    return {
      val: 1,
      inputVal: ""
    };
  },
  methods: {
    change(e) {
      this.inputVal = e.value;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_input_number = resolveEasycom(resolveDynamicComponent("fui-input-number"), __easycom_0);
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
        createElementVNode("u-text", { class: "fui-page__title" }, "InputNumber"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "InputNumber 数字输入框，该组件多用于购物车加减商品等场景。")
      ]),
      createElementVNode("view", { class: "fui-page__bd fui-page__spacing" }, [
        createElementVNode("u-text", { class: "fui-section__title fui-mtop--0" }, "基本使用"),
        createVNode(_component_fui_input_number),
        createElementVNode("u-text", { class: "fui-section__title" }, "改变加减号颜色"),
        createVNode(_component_fui_input_number, {
          signColor: "#FFB703",
          value: "1.1",
          modelValue: "1.1"
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "改变数字框背景色"),
        createVNode(_component_fui_input_number, { backgroundColor: "#F1F4FA" }),
        createElementVNode("u-text", { class: "fui-section__title" }, "自定义加减号"),
        createVNode(_component_fui_input_number, {
          custom: "",
          backgroundColor: "#FFF",
          size: 30,
          width: 60,
          margin: "0"
        }, {
          plus: withCtx(() => [
            createVNode(_component_fui_icon, {
              name: "plussign-fill",
              size: 48,
              color: "#FFB703"
            })
          ]),
          default: withCtx(() => [
            createVNode(_component_fui_icon, {
              name: "minussign",
              size: 48,
              color: "#FFB703"
            })
          ]),
          _: 1
          /* STABLE */
        }),
        createElementVNode(
          "u-text",
          { class: "fui-section__title" },
          "使用v-model：" + toDisplayString($data.val),
          1
          /* TEXT */
        ),
        createVNode(_component_fui_input_number, {
          modelValue: $data.val,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.val = $event)
        }, null, 8, ["modelValue"]),
        createElementVNode("u-text", { class: "fui-section__title" }, "设置最小值和最大值"),
        createVNode(_component_fui_input_number, {
          min: -9,
          max: 9
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "设置步长（步长0.1)"),
        createVNode(_component_fui_input_number, { step: 0.1 }, null, 8, ["step"]),
        createElementVNode("u-text", { class: "fui-section__title" }, "禁用状态"),
        createVNode(_component_fui_input_number, { disabled: "" }),
        createElementVNode(
          "u-text",
          { class: "fui-section__title" },
          "事件获取数字框的值: " + toDisplayString($data.inputVal),
          1
          /* TEXT */
        ),
        createVNode(_component_fui_input_number, { onChange: $options.change }, null, 8, ["onChange"]),
        createElementVNode("u-text", { class: "fui-section__title" }, "支持输入负号"),
        createVNode(_component_fui_input_number, {
          type: "text",
          min: -99
        })
      ])
    ])
  ]);
}
const inputNumber = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/form/inputNumber/inputNumber.nvue"]]);
export {
  inputNumber as default
};
