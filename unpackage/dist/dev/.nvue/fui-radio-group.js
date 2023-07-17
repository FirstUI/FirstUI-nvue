import { resolveComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, withModifiers, createCommentVNode, createVNode, createBlock, withCtx, renderSlot } from "vue";
import { _ as _export_sfc } from "./uni-app.es.js";
const _style_0 = { "fui-radio__input": { "": { "fontSize": 0, "color": "rgba(0,0,0,0)", "width": "40rpx", "height": "40rpx", "borderWidth": 1, "borderStyle": "solid", "borderRadius": "40rpx", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "overflow": "hidden", "position": "relative" } }, "fui-check__mark": { "": { "width": "20rpx", "height": "40rpx", "borderBottomStyle": "solid", "borderBottomWidth": 3, "borderBottomColor": "#FFFFFF", "borderRightStyle": "solid", "borderRightWidth": 3, "borderRightColor": "#FFFFFF", "transform": "rotate(45deg) scale(0.5)", "transformOrigin": "54% 48%" } }, "fui-radio__hidden": { "": { "width": "100wx", "height": "100wx", "borderWidth": 0, "position": "absolute", "top": 0, "left": 0, "opacity": 0, "zIndex": 2 } }, "fui-radio__disabled": { "": { "opacity": 0.6 } } };
const _sfc_main$1 = {
  name: "fui-radio",
  emits: ["change"],
  options: {
    virtualHost: true
  },
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
    //radio选中背景颜色
    color: {
      type: String,
      default: ""
    },
    //radio未选中时边框颜色
    borderColor: {
      type: String,
      default: "#ccc"
    },
    borderRadius: {
      type: String,
      default: "40rpx"
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
      if (this.group.value) {
        this.val = this.value === this.group.value;
      }
      if (this.group.modelValue) {
        this.val = this.value === this.group.modelValue;
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
      if (newVal && this.group) {
        this.group.changeValue(this.value, this);
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
    radioChange(e) {
      if (this.disabled || this.val)
        return;
      this.val = true;
      this.$emit("change", {
        checked: this.val,
        value: this.value
      });
    },
    getParent(name = "fui-radio-group") {
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
      this.radioChange();
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_radio = resolveComponent("radio");
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["fui-radio__input", { "fui-radio__disabled": $props.disabled, "fui-radio__color": !$options.getColor && $data.val && !$props.isCheckMark }]),
      style: normalizeStyle({ backgroundColor: $options.getBackgroundColor($data.val, $props.isCheckMark), borderColor: $options.getBorderColor($data.val, $props.isCheckMark), zoom: $data.isNvue ? 1 : $props.scaleRatio, transform: `scale(${$data.isNvue ? $props.scaleRatio : 1})`, borderRadius: $props.borderRadius }),
      onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.radioChange && $options.radioChange(...args), ["stop"])),
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
      createVNode(_component_radio, {
        class: "fui-radio__hidden",
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
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-radio/fui-radio.vue"]]);
const _sfc_main = {
  name: "fui-radio-group",
  emits: ["change", "input", "update:modelValue"],
  props: {
    name: {
      type: String,
      default: ""
    },
    modelValue: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      val: ""
    };
  },
  watch: {
    modelValue(val) {
      this.modelChange(val);
    },
    value(val) {
      this.modelChange(val);
    }
  },
  created() {
    this.childrens = [];
  },
  methods: {
    radioChange(e) {
      this.$emit("change", e);
      this.$emit("input", e.detail.value);
      this.$emit("update:modelValue", e.detail.value);
    },
    changeValue(value, target) {
      if (value === this.val)
        return;
      this.val = value;
      this.childrens.forEach((item) => {
        if (item !== target) {
          item.val = false;
        }
      });
      let e = {
        detail: {
          value
        }
      };
      this.radioChange(e);
    },
    modelChange(val) {
      this.childrens.forEach((item) => {
        if (item.value === val) {
          item.val = true;
        } else {
          item.val = false;
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_radio_group = resolveComponent("radio-group");
  return openBlock(), createBlock(_component_radio_group, { name: $props.name }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-radio-group/fui-radio-group.vue"]]);
export {
  __easycom_0 as _,
  __easycom_2 as a
};
