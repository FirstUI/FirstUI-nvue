import { openBlock, createElementBlock, normalizeClass, normalizeStyle, createCommentVNode, createElementVNode, toDisplayString, renderSlot, resolveDynamicComponent, createVNode } from "vue";
import { _ as _export_sfc, r as resolveEasycom } from "../../../../uni-app.es.js";
const _style_0$1 = { "fui-textarea__wrap": { "": { "flexDirection": "row", "flex": 1, "alignItems": "center", "position": "relative", "borderWidth": 0 } }, "fui-textarea__flex-start": { "": { "!alignItems": "flex-start" } }, "fui-textarea__border-top": { "": { "position": "absolute", "top": 0, "height": 0.5, "zIndex": -1 } }, "fui-textarea__border-bottom": { "": { "position": "absolute", "bottom": 0, "height": 0.5, "zIndex": -1 } }, "fui-textarea__required": { "": { "position": "absolute", "left": "12rpx", "flex": 1, "top": "28rpx", "bottom": "28rpx", "alignItems": "center", "justifyContent": "center" } }, "fui-form__asterisk-text": { "": { "fontSize": "32rpx", "height": "32rpx" } }, "fui-textarea__label": { "": { "paddingRight": "12rpx" } }, "fui-textarea__self": { "": { "flex": 1, "paddingTop": 6, "paddingBottom": 10 } }, "fui-textarea-placeholder": { "": { "color": "#cccccc" } }, "fui-textarea__border-nvue": { "": { "borderStyle": "solid", "borderWidth": 0.5 } }, "fui-textarea__flex-1": { "": { "flex": 1 } }, "fui-textarea__counter": { "": { "paddingTop": "8rpx", "textAlign": "right", "flexDirection": "row", "flex": 1, "justifyContent": "flex-end" } }, "fui-text__right": { "": { "textAlign": "right" } } };
const _sfc_main$1 = {
  name: "fui-textarea",
  emits: ["input", "update:modelValue", "focus", "blur", "confirm", "click", "linechange", "keyboardheightchange"],
  props: {
    //是否为必填项
    required: {
      type: Boolean,
      default: false
    },
    requiredColor: {
      type: String,
      default: ""
    },
    requiredTop: {
      type: String,
      default: "34rpx"
    },
    //左侧标题
    label: {
      type: String,
      default: ""
    },
    //标题字体大小
    labelSize: {
      type: [Number, String],
      default: 32
    },
    labelColor: {
      type: String,
      default: "#333"
    },
    //label 最小宽度 rpx
    labelWidth: {
      type: [Number, String],
      default: 140
    },
    //获取焦点
    focus: {
      type: Boolean,
      default: false
    },
    autoHeight: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    },
    placeholderStyle: {
      type: String,
      default: ""
    },
    //输入框名称
    name: {
      type: String,
      default: ""
    },
    //输入框值
    value: {
      type: [Number, String],
      default: ""
    },
    //输入框值
    modelValue: {
      type: [Number, String],
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: [Number, String],
      default: 140
    },
    cursorSpacing: {
      type: Number,
      default: 0
    },
    showConfirmBar: {
      type: Boolean,
      default: true
    },
    cursor: {
      type: Number,
      default: -1
    },
    selectionStart: {
      type: Number,
      default: -1
    },
    selectionEnd: {
      type: Number,
      default: -1
    },
    adjustPosition: {
      type: Boolean,
      default: true
    },
    disableDefaultPadding: {
      type: Boolean,
      default: true
    },
    holdKeyboard: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: "200rpx"
    },
    minHeight: {
      type: String,
      default: "30rpx"
    },
    //标题与输入框是否顶端对齐
    flexStart: {
      type: Boolean,
      default: false
    },
    //输入框字体大小 rpx
    size: {
      type: [Number, String],
      default: 32
    },
    //输入框字体颜色
    color: {
      type: String,
      default: "#333"
    },
    // 是否显示 textarea 边框
    textareaBorder: {
      type: Boolean,
      default: false
    },
    // 是否显示上边框
    borderTop: {
      type: Boolean,
      default: true
    },
    //上边框left值，单位rpx
    topLeft: {
      type: [Number, String],
      default: 0
    },
    //上边框right值，单位rpx
    topRight: {
      type: [Number, String],
      default: 0
    },
    // 是否显示下边框
    borderBottom: {
      type: Boolean,
      default: true
    },
    //下边框left值，单位rpx
    bottomLeft: {
      type: [Number, String],
      default: 0
    },
    //下边框right值，单位rpx
    bottomRight: {
      type: [Number, String],
      default: 0
    },
    //边框颜色
    borderColor: {
      type: String,
      default: "#EEEEEE"
    },
    radius: {
      type: [String, Number],
      default: 0
    },
    // 是否自动去除两端的空格
    trim: {
      type: Boolean,
      default: true
    },
    textRight: {
      type: Boolean,
      default: false
    },
    //输入框padding值：[上，右，下，左]
    padding: {
      type: Array,
      default() {
        return ["32rpx", "32rpx"];
      }
    },
    //输入框背景颜色
    backgroundColor: {
      type: String,
      default: "#FFFFFE"
    },
    //输入框margin-top值 rpx
    marginTop: {
      type: Number,
      default: 0
    },
    //是否显示底部输入长度计数
    isCounter: {
      type: Boolean,
      default: false
    },
    //计数文本颜色
    counterColor: {
      type: String,
      default: "#B2B2B2"
    },
    //计数文本大小 rpx
    counterSize: {
      type: [Number, String],
      default: 28
    }
  },
  computed: {
    getRadius() {
      return Number(this.radius) * 2 + "rpx";
    },
    getRequiredColor() {
      let color = this.requiredColor;
      if (!color || color === true) {
        const app = uni && uni.$fui && uni.$fui.color;
        color = app && app.danger || "#FF2B2B";
      }
      return color;
    }
  },
  data() {
    return {
      placeholderStyl: "",
      count: 0,
      focused: false,
      val: ""
    };
  },
  watch: {
    focus(val) {
      this.$nextTick(() => {
        setTimeout(() => {
          this.focused = val;
        }, 20);
      });
    },
    focused(val) {
      if (!this.$refs.fuiTextarea)
        return;
      this.$nextTick(() => {
        setTimeout(() => {
          if (val) {
            this.$refs.fuiTextarea.focus();
          } else {
            this.$refs.fuiTextarea.blur();
          }
        }, 50);
      });
    },
    placeholderStyle() {
      this.fieldPlaceholderStyle();
    },
    modelValue(newVal) {
      this.val = this.getVal(newVal);
      this.count = this.getCount(String(this.val).length);
    },
    value(newVal) {
      this.val = this.getVal(newVal);
      this.count = this.getCount(String(this.val).length);
    }
  },
  created() {
    if (this.value && !this.modelValue) {
      this.val = this.getVal(this.value);
    } else {
      this.val = this.getVal(this.modelValue);
    }
    this.count = this.getCount(String(this.val).length);
    this.fieldPlaceholderStyle();
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.focused = this.focus;
      }, 300);
    });
  },
  methods: {
    getVal(val) {
      return !val && val !== 0 ? "" : val;
    },
    fieldPlaceholderStyle() {
      if (this.placeholderStyle) {
        this.placeholderStyl = this.placeholderStyle;
      } else {
        const size = uni.upx2px(this.size);
        this.placeholderStyl = `fontSize:${size}px;`;
      }
    },
    getCount(len) {
      const max = Number(this.maxlength);
      return len > max && max !== -1 ? max : len;
    },
    onInput(event) {
      let value = event.detail.value;
      if (this.trim)
        value = this.trimStr(value);
      let len = value.length;
      const max = Number(this.maxlength);
      if (len > max && max !== -1) {
        len = max;
        value = value.substring(0, max - 1);
      }
      this.count = len;
      this.val = value;
      this.$emit("input", value);
      this.$emit("update:modelValue", value);
    },
    onFocus(event) {
      this.$emit("focus", event);
    },
    onBlur(event) {
      this.$emit("blur", event);
    },
    onConfirm(e) {
      this.$emit("confirm", e);
    },
    fieldClick() {
      this.$emit("click", {
        name: this.name
      });
    },
    onLinechange(e) {
      this.$emit("linechange", e);
    },
    onKeyboardheightchange(e) {
      this.$emit("keyboardheightchange", e);
    },
    trimStr(str) {
      return str.replace(/^\s+|\s+$/g, "");
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["fui-textarea__wrap", { "fui-textarea__flex-start": $props.flexStart, "fui-textarea__border-nvue": $props.textareaBorder }]),
      style: normalizeStyle({ paddingTop: $props.padding[0] || 0, paddingRight: $props.padding[1] || 0, paddingBottom: $props.padding[2] || $props.padding[0] || 0, paddingLeft: $props.padding[3] || $props.padding[1] || 0, background: $props.backgroundColor, borderRadius: $props.radius + "rpx", borderColor: $props.borderColor, marginTop: $props.marginTop + "rpx" }),
      onClick: _cache[6] || (_cache[6] = (...args) => $options.fieldClick && $options.fieldClick(...args)),
      renderWhole: true
    },
    [
      $props.borderTop && !$props.textareaBorder ? (openBlock(), createElementBlock(
        "view",
        {
          key: 0,
          style: normalizeStyle({ background: $props.borderColor, left: $props.topLeft + "rpx", right: $props.topRight + "rpx" }),
          class: normalizeClass(["fui-textarea__border-top", { "fui-textarea__background": !$props.borderColor }])
        },
        null,
        6
        /* CLASS, STYLE */
      )) : createCommentVNode("v-if", true),
      $props.required && !$props.flexStart ? (openBlock(), createElementBlock("view", {
        key: 1,
        class: "fui-textarea__required"
      }, [
        createElementVNode(
          "u-text",
          {
            class: "fui-form__asterisk-text",
            style: normalizeStyle({ color: $options.getRequiredColor, paddingTop: "2rpx" })
          },
          "*",
          4
          /* STYLE */
        )
      ])) : createCommentVNode("v-if", true),
      $props.required && $props.flexStart ? (openBlock(), createElementBlock(
        "u-text",
        {
          key: 2,
          class: "fui-textarea__required",
          style: normalizeStyle({ color: $options.getRequiredColor, top: $props.requiredTop })
        },
        "*",
        4
        /* STYLE */
      )) : createCommentVNode("v-if", true),
      $props.label ? (openBlock(), createElementBlock(
        "view",
        {
          key: 3,
          class: "fui-textarea__label",
          style: normalizeStyle({ minWidth: $props.labelWidth + "rpx" })
        },
        [
          createElementVNode(
            "u-text",
            {
              style: normalizeStyle({ fontSize: $props.labelSize + "rpx", color: $props.labelColor })
            },
            toDisplayString($props.label),
            5
            /* TEXT, STYLE */
          )
        ],
        4
        /* STYLE */
      )) : createCommentVNode("v-if", true),
      renderSlot(_ctx.$slots, "left"),
      createElementVNode("view", { class: "fui-textarea__flex-1" }, [
        createElementVNode("u-textarea", {
          ref: "fuiTextarea",
          class: normalizeClass(["fui-textarea__self", { "fui-text__right": $props.textRight }]),
          style: normalizeStyle({ height: $props.height, minHeight: $props.minHeight, fontSize: $props.size + "rpx", color: $props.color }),
          placeholderClass: "fui-textarea-placeholder",
          name: $props.name,
          value: $data.val,
          placeholder: $props.placeholder,
          placeholderStyle: $data.placeholderStyl,
          disabled: $props.disabled,
          cursorSpacing: $props.cursorSpacing,
          maxlength: $props.maxlength,
          focus: $data.focused,
          autoHeight: $props.autoHeight,
          fixed: $props.fixed,
          showConfirmBar: $props.showConfirmBar,
          cursor: $props.cursor,
          selectionStart: $props.selectionStart,
          selectionEnd: $props.selectionEnd,
          adjustPosition: $props.adjustPosition,
          holdKeyboard: $props.holdKeyboard,
          disableDefaultPadding: $props.disableDefaultPadding,
          enableNative: false,
          showCount: false,
          onFocus: _cache[0] || (_cache[0] = (...args) => $options.onFocus && $options.onFocus(...args)),
          onBlur: _cache[1] || (_cache[1] = (...args) => $options.onBlur && $options.onBlur(...args)),
          onInput: _cache[2] || (_cache[2] = (...args) => $options.onInput && $options.onInput(...args)),
          onConfirm: _cache[3] || (_cache[3] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
          onLinechange: _cache[4] || (_cache[4] = (...args) => $options.onLinechange && $options.onLinechange(...args)),
          onKeyboardheightchange: _cache[5] || (_cache[5] = (...args) => $options.onKeyboardheightchange && $options.onKeyboardheightchange(...args))
        }, null, 46, ["name", "value", "placeholder", "placeholderStyle", "disabled", "cursorSpacing", "maxlength", "focus", "autoHeight", "fixed", "showConfirmBar", "cursor", "selectionStart", "selectionEnd", "adjustPosition", "holdKeyboard", "disableDefaultPadding"]),
        $props.isCounter ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "fui-textarea__counter"
        }, [
          createElementVNode(
            "u-text",
            {
              style: normalizeStyle({ fontSize: $props.counterSize + "rpx", color: $props.counterColor })
            },
            toDisplayString($props.maxlength != -1 ? `${$data.count}/${$props.maxlength}` : $data.count),
            5
            /* TEXT, STYLE */
          )
        ])) : createCommentVNode("v-if", true)
      ]),
      renderSlot(_ctx.$slots, "default"),
      $props.borderBottom && !$props.textareaBorder ? (openBlock(), createElementBlock(
        "view",
        {
          key: 4,
          style: normalizeStyle({ background: $props.borderColor, left: $props.bottomLeft + "rpx", right: $props.bottomRight + "rpx" }),
          class: normalizeClass(["fui-textarea__border-bottom", { "fui-textarea__background": !$props.borderColor }])
        },
        null,
        6
        /* CLASS, STYLE */
      )) : createCommentVNode("v-if", true)
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-textarea/fui-textarea.vue"]]);
const _style_0 = { "fui-section__title": { "": { "marginLeft": "32rpx" } }, "fui-textarea__box": { "": { "paddingTop": "32rpx", "paddingRight": "32rpx", "paddingBottom": "32rpx", "paddingLeft": "32rpx", "backgroundColor": "#FFFFFF" } } };
const _sfc_main = {
  data() {
    return {
      text: ""
    };
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_textarea = resolveEasycom(resolveDynamicComponent("fui-textarea"), __easycom_0);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("u-text", { class: "fui-page__title" }, "Textarea"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "Textarea 多行输入框，该组件是对原生textarea组件的增强，内置了常用布局样式，同时包含 textarea 所有功能。")
      ]),
      createElementVNode("view", { class: "fui-page__bd" }, [
        createElementVNode("u-text", { class: "fui-section__title fui-mtop--0" }, "基本使用"),
        createVNode(_component_fui_textarea, { placeholder: "请输入内容" }),
        createElementVNode("u-text", { class: "fui-section__title" }, "带标题"),
        createVNode(_component_fui_textarea, {
          flexStart: "",
          label: "标题",
          placeholder: "请输入内容"
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "输入长度计数、双向绑定"),
        createVNode(_component_fui_textarea, {
          isCounter: "",
          placeholder: "请输入内容",
          modelValue: $data.text,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.text = $event)
        }, null, 8, ["modelValue"]),
        createElementVNode("u-text", { class: "fui-section__title" }, "带边框"),
        createElementVNode("view", { class: "fui-textarea__box" }, [
          createVNode(_component_fui_textarea, {
            textareaBorder: "",
            placeholder: "请输入简介"
          })
        ]),
        createElementVNode("u-text", { class: "fui-section__title" }, "设置圆角"),
        createElementVNode("view", { class: "fui-textarea__box" }, [
          createVNode(_component_fui_textarea, {
            radius: 24,
            textareaBorder: "",
            "border-color": "#FFB703",
            "background-color": "#f8f8f8",
            placeholder: "请输入内容"
          })
        ])
      ])
    ])
  ]);
}
const textarea = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/form/textarea/textarea.nvue"]]);
export {
  textarea as default
};
