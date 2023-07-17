import { resolveComponent, openBlock, createElementBlock, normalizeStyle, createBlock, normalizeClass, createCommentVNode, createVNode } from "vue";
import { _ as _export_sfc } from "./uni-app.es.js";
const _style_0 = { "fui-switch__input": { "": { "borderWidth": 1, "borderStyle": "solid", "borderColor": "rgba(0,0,0,0)" } }, "fui-checkbox__self": { "": { "fontSize": 0, "width": "40rpx", "height": "40rpx", "borderRadius": "40rpx", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "overflow": "hidden", "position": "relative" } }, "uni-switch-input": { "": { "!marginRight": 0 } }, "fui-check__mark": { "": { "width": "20rpx", "height": "40rpx", "borderBottomStyle": "solid", "borderBottomWidth": 3, "borderBottomColor": "#FFFFFF", "borderRightStyle": "solid", "borderRightWidth": 3, "borderRightColor": "#FFFFFF", "transform": "rotate(45deg) scale(0.5)", "transformOrigin": "54% 48%" } }, "fui-switch__hidden": { "": { "position": "absolute", "top": -1, "left": -1, "opacity": 0, "width": "100wx", "height": "100wx", "right": 0, "bottom": 0, "borderWidth": 0 } }, "fui-checkbox__disabled": { "": { "opacity": 0.6 } } };
const _sfc_main = {
  name: "fui-switch",
  emits: ["change"],
  props: {
    //开关选择器名称
    name: {
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
    //样式，有效值：switch, checkbox
    type: {
      type: String,
      default: "switch"
    },
    //switch选中颜色
    color: {
      type: String,
      default: ""
    },
    //边框颜色，type=checkbox时生效
    borderColor: {
      type: String,
      default: "#ccc"
    },
    //对号颜色，type=checkbox时生效
    checkMarkColor: {
      type: String,
      default: "#fff"
    },
    scaleRatio: {
      type: [Number, String],
      default: 1
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
      isNvue,
      isLabel: false
    };
  },
  watch: {
    checked(val) {
      this.val = val;
    }
  },
  created() {
    this.val = this.checked;
    this.label = this.getParent();
    if (this.label) {
      this.isLabel = true;
      this.label.childrens.push(this);
    }
  },
  methods: {
    change(e, label) {
      if (this.label && !label)
        return;
      this.val = e.detail.value;
      this.$emit("change", e);
    },
    labelClick() {
      if (this.disabled)
        return;
      let e = {
        detail: {
          value: !this.val
        }
      };
      this.change(e, true);
    },
    getParent(name = "fui-label") {
      let parent = this.$parent;
      let parentName = parent.$options.name;
      while (parentName !== name) {
        parent = parent.$parent;
        if (!parent)
          return false;
        parentName = parent.$options.name;
      }
      return parent;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_switch = resolveComponent("switch");
  return openBlock(), createElementBlock(
    "view",
    {
      class: "fui-switch__input",
      style: normalizeStyle({ zoom: $data.isNvue ? 1 : $props.scaleRatio, transform: `scale(${$data.isNvue ? $props.scaleRatio : 1})` }),
      renderWhole: true
    },
    [
      $props.type === "switch" ? (openBlock(), createBlock(_component_switch, {
        key: 0,
        onChange: $options.change,
        name: $props.name,
        checked: $data.val,
        disabled: $props.disabled,
        color: $options.getColor
      }, null, 8, ["onChange", "name", "checked", "disabled", "color"])) : (openBlock(), createElementBlock(
        "view",
        {
          key: 1,
          class: normalizeClass(["fui-checkbox__self", { "fui-checkbox__disabled": $props.disabled, "fui-switch__color": !$options.getColor && $data.val }]),
          style: normalizeStyle({ background: $data.val ? $options.getColor : "#fff", border: $data.val ? `1px solid ${$options.getColor}` : `1px solid ${$props.borderColor}` })
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
          createVNode(_component_switch, {
            class: normalizeClass(["fui-switch__hidden", { "fui-pointer__events": $data.isLabel }]),
            style: { "opacity": "0", "position": "absolute" },
            onChange: $options.change,
            name: $props.name,
            type: "checkbox",
            checked: $data.val,
            disabled: $props.disabled
          }, null, 8, ["class", "onChange", "name", "checked", "disabled"])
        ],
        6
        /* CLASS, STYLE */
      ))
    ],
    4
    /* STYLE */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-switch/fui-switch.vue"]]);
export {
  __easycom_0 as _
};
