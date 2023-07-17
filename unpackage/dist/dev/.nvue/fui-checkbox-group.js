import { resolveComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, withModifiers, createCommentVNode, createVNode, createBlock, withCtx, renderSlot } from "vue";
import { _ as _export_sfc } from "./uni-app.es.js";
const _style_0 = { "fui-checkbox__input": { "": { "fontSize": 0, "color": "rgba(0,0,0,0)", "width": "40rpx", "height": "40rpx", "borderWidth": 1, "borderStyle": "solid", "borderRadius": "40rpx", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "overflow": "hidden", "position": "relative" } }, "fui-check__mark": { "": { "width": "20rpx", "height": "40rpx", "borderBottomStyle": "solid", "borderBottomWidth": 3, "borderBottomColor": "#FFFFFF", "borderRightStyle": "solid", "borderRightWidth": 3, "borderRightColor": "#FFFFFF", "transform": "rotate(45deg) scale(0.5)", "transformOrigin": "54% 48%" } }, "fui-checkbox__hidden": { "": { "width": "100wx", "height": "100wx", "borderWidth": 0, "position": "absolute", "top": 0, "left": 0, "zIndex": 2 } }, "fui-checkbox__disabled": { "": { "opacity": 0.6 } } };
const _sfc_main$1 = {
  name: "fui-checkbox",
  emits: ["change"],
  props: {
    value: {
      type: String,
      default: ""
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    //checkbox选中背景颜色
    color: {
      type: String,
      default: ""
    },
    //checkbox未选中时边框颜色
    borderColor: {
      type: String,
      default: "#ccc"
    },
    borderRadius: {
      type: String,
      default: "40px"
    },
    //是否只展示对号，无边框背景
    isCheckMark: {
      type: Boolean,
      default: false
    },
    //对号颜色
    checkMarkColor: {
      type: String,
      default: "#fff"
    },
    scaleRatio: {
      type: [Number, String],
      default: 1
    }
  },
  created() {
    this.val = this.checked;
    this.group = this.getParent();
    if (this.group) {
      this.group.childrens.push(this);
      if (this.group.value && this.group.value.length > 0) {
        this.val = this.group.value.includes(this.value);
      }
      if (this.group.modelValue && this.group.modelValue.length > 0) {
        this.val = this.group.modelValue.includes(this.value);
      }
    }
    this.label = this.getParent("fui-label");
    if (this.label) {
      this.label.childrens.push(this);
    }
  },
  watch: {
    checked(newVal) {
      this.val = newVal;
    },
    val(newVal) {
      if (this.group) {
        this.group.changeValue(this.val, this);
      }
    }
  },
  computed: {
    getColor() {
      let color = this.color;
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
      val: false,
      isNvue
    };
  },
  methods: {
    getBackgroundColor(val, isCheckMark) {
      let color = val ? this.getColor : "#fff";
      if (isCheckMark) {
        color = "transparent";
      }
      return color;
    },
    getBorderColor(val, isCheckMark) {
      let color = val ? this.getColor : this.borderColor;
      if (isCheckMark) {
        color = "transparent";
      }
      return color;
    },
    checkboxChange(e) {
      if (this.disabled)
        return;
      this.val = !this.val;
      this.$emit("change", {
        checked: this.val,
        value: this.value
      });
    },
    getParent(name = "fui-checkbox-group") {
      let parent = this.$parent;
      let parentName = parent.$options.name;
      while (parentName !== name) {
        parent = parent.$parent;
        if (!parent)
          return false;
        parentName = parent.$options.name;
      }
      return parent;
    },
    labelClick() {
      this.checkboxChange();
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_checkbox = resolveComponent("checkbox");
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["fui-checkbox__input", { "fui-checkbox__disabled": $props.disabled, "fui-checkbox__color": !$options.getColor && $data.val && !$props.isCheckMark }]),
      style: normalizeStyle({ backgroundColor: $options.getBackgroundColor($data.val, $props.isCheckMark), borderColor: $options.getBorderColor($data.val, $props.isCheckMark), zoom: $data.isNvue ? 1 : $props.scaleRatio, transform: `scale(${$data.isNvue ? $props.scaleRatio : 1})`, borderRadius: $props.borderRadius }),
      onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.checkboxChange && $options.checkboxChange(...args), ["stop"])),
      renderWhole: true
    },
    [
      $data.val ? (openBlock(), createElementBlock(
        "view",
        {
          key: 0,
          class: "fui-check__mark",
          style: normalizeStyle({ borderBottomColor: $props.checkMarkColor, borderRightColor: $props.checkMarkColor })
        },
        null,
        4
        /* STYLE */
      )) : createCommentVNode("v-if", true),
      createVNode(_component_checkbox, {
        class: "fui-checkbox__hidden",
        style: { "opacity": "0", "position": "absolute" },
        color: $options.getColor,
        disabled: $props.disabled,
        value: $props.value,
        checked: $data.val
      }, null, 8, ["color", "disabled", "value", "checked"])
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-checkbox/fui-checkbox.vue"]]);
const _sfc_main = {
  name: "fui-checkbox-group",
  emits: ["change", "input", "update:modelValue"],
  props: {
    name: {
      type: String,
      default: ""
    },
    modelValue: {
      type: Array,
      default() {
        return [];
      }
    },
    value: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      vals: ""
    };
  },
  watch: {
    modelValue(vals) {
      this.modelChange(vals);
    },
    value(vals) {
      this.modelChange(vals);
    }
  },
  created() {
    this.childrens = [];
  },
  methods: {
    checkboxChange(e) {
      this.$emit("change", e);
      this.$emit("input", e.detail.value);
      this.$emit("update:modelValue", e.detail.value);
    },
    changeValue(checked, target) {
      let vals = [];
      this.childrens.forEach((item) => {
        if (item.val) {
          vals.push(item.value);
        }
      });
      this.vals = vals;
      let e = {
        detail: {
          value: vals
        }
      };
      this.checkboxChange(e);
    },
    modelChange(vals) {
      this.childrens.forEach((item) => {
        if (vals.includes(item.value)) {
          item.val = true;
        } else {
          item.val = false;
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_checkbox_group = resolveComponent("checkbox-group");
  return openBlock(), createBlock(_component_checkbox_group, { name: $props.name }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-checkbox-group/fui-checkbox-group.vue"]]);
export {
  __easycom_0 as _,
  __easycom_2 as a
};
