import { openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot, createElementVNode, toDisplayString } from "vue";
import { _ as _export_sfc } from "./uni-app.es.js";
const _style_0 = { "fui-text__wrap": { "": { "alignItems": "center", "flexDirection": "row" } }, "fui-text__active": { "": { "opacity:active": 0.5 } }, "fui-text__nvue": { "": { "flex": 1 } }, "fui-text__center": { "": { "justifyContent": "center" } }, "fui-text__right": { "": { "justifyContent": "flex-end" } } };
const _sfc_main = {
  name: "fui-text",
  emits: ["click"],
  props: {
    //样式类型：primary，success， warning，danger，purple，gray，black
    type: {
      type: String,
      default: "black"
    },
    text: {
      type: [Number, String],
      default: ""
    },
    size: {
      type: [Number, String],
      default: 0
    },
    unit: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    },
    fontWeight: {
      type: [Number, String],
      default: 400
    },
    //left、center、right
    align: {
      type: String,
      default: "left"
    },
    //none、 underline、line-through 
    decoration: {
      type: String,
      default: "none"
    },
    //是否将行高设置与字体大小一致
    lineHeight: {
      type: Boolean,
      default: false
    },
    padding: {
      type: Array,
      default() {
        return ["0", "0"];
      }
    },
    block: {
      type: Boolean,
      default: false
    },
    //文本类型：text、mobile、amount、name
    textType: {
      type: String,
      default: "text"
    },
    //是否格式化，仅mobile、amount时有效
    format: {
      type: Boolean,
      default: false
    },
    call: {
      type: Boolean,
      default: false
    },
    //文本是否可选：nvue不支持，加此属性导致事件无法冒泡
    selectable: {
      type: Boolean,
      default: false
    },
    //文本是否可选：微信小程序
    userSelect: {
      type: Boolean,
      default: false
    },
    //是否解码：App、H5、微信小程序
    decode: {
      type: Boolean,
      default: false
    },
    //是否有点击效果
    highlight: {
      type: Boolean,
      default: false
    },
    disable: {
      type: Boolean,
      default: false
    },
    unShrink: {
      type: Boolean,
      default: false
    },
    param: {
      type: [Number, String],
      default: ""
    }
  },
  computed: {
    getSize() {
      const size = uni && uni.$fui && uni.$fui.fuiText && uni.$fui.fuiText.size || 32;
      const unit = uni && uni.$fui && uni.$fui.fuiText && uni.$fui.fuiText.unit || "rpx";
      return (this.size || size) + (this.unit || unit);
    },
    getColor() {
      let color = this.color || "";
      if (!color && this.type) {
        const app = uni && uni.$fui && uni.$fui.color;
        const text = uni && uni.$fui && uni.$fui.fuiText;
        color = {
          primary: app && app.primary || "#465CFF",
          success: app && app.success || "#09BE4F",
          warning: app && app.warning || "#FFB703",
          danger: app && app.danger || "#FF2B2B",
          purple: app && app.purple || "#6831FF",
          gray: "#B2B2B2",
          black: text && text.color || "#181818"
        }[this.type];
      }
      return color;
    }
  },
  methods: {
    getText(text, textType, format) {
      let _text = text;
      if (format) {
        if (textType === "mobile") {
          _text = this.numberFormatter(text);
        } else if (textType === "amount") {
          _text = this.moneyFormatter(text);
        } else if (textType === "name") {
          _text = this.nameFormatter(text);
        }
      }
      return _text;
    },
    numberFormatter(num) {
      return num.length === 11 ? num.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2") : num;
    },
    moneyFormatter(money) {
      return parseFloat(money).toFixed(2).toString().split("").reverse().join("").replace(/(\d{3})/g, "$1,").replace(
        /\,$/,
        ""
      ).split("").reverse().join("");
    },
    trimAll(value) {
      return value.toString().replace(/\s+/g, "");
    },
    nameFormatter(name) {
      let _name = this.trimAll(name || "");
      if (_name && _name.length >= 2) {
        const arr = _name.split("");
        _name = arr[0] + "*";
        if (arr.length > 2) {
          _name = _name + arr[arr.length - 1];
        }
      }
      return _name;
    },
    handleTap() {
      if (this.disable)
        return;
      this.$emit("click", {
        text: this.text,
        param: this.param
      });
      if (this.call) {
        uni.makePhoneCall({
          phoneNumber: this.text
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["fui-text__wrap", [$props.block ? "fui-text__block" : "fui-text__inline", "fui-text__" + $props.align, $props.highlight && !$props.disable ? "fui-text__active" : ""]]),
      style: normalizeStyle({ textAlign: $props.align, paddingTop: $props.padding[0] || 0, paddingRight: $props.padding[1] || 0, paddingBottom: $props.padding[2] || $props.padding[0] || 0, paddingLeft: $props.padding[3] || $props.padding[1] || 0 }),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.handleTap && $options.handleTap(...args)),
      renderWhole: true
    },
    [
      renderSlot(_ctx.$slots, "default"),
      createElementVNode("view", { class: "fui-text__nvue" }, [
        createElementVNode("u-text", {
          class: normalizeClass(["fui-text__content", [$props.color ? "" : "fui-text__" + $props.type, $props.unShrink ? "fui-text__unshrink" : ""]]),
          style: normalizeStyle({ color: $options.getColor, fontSize: $options.getSize, lineHeight: $props.lineHeight ? $options.getSize : "auto", textAlign: $props.align, textDecoration: $props.decoration, fontWeight: $props.fontWeight }),
          userSelect: $props.userSelect,
          decode: $props.decode
        }, toDisplayString($options.getText($props.text, $props.textType, $props.format)), 15, ["userSelect", "decode"])
      ]),
      renderSlot(_ctx.$slots, "right")
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-text/fui-text.vue"]]);
export {
  __easycom_0 as _
};
