import { _ as _export_sfc, f as formatAppLog, r as resolveEasycom } from "../../../../uni-app.es.js";
import { openBlock, createElementBlock, normalizeClass, normalizeStyle, createCommentVNode, createElementVNode, toDisplayString, renderSlot, withModifiers, resolveDynamicComponent, createVNode, withCtx } from "vue";
import { _ as __easycom_1 } from "../../../../fui-icon.js";
import { _ as __easycom_0$1 } from "../../../../fui-button.js";
const _style_0$1 = { "fui-input__wrap": { "": { "flexDirection": "row", "flex": 1, "alignItems": "center", "position": "relative", "borderWidth": 0 } }, "fui-input__border-top": { "": { "position": "absolute", "top": 0, "height": 0.5, "zIndex": -1 } }, "fui-input__border-bottom": { "": { "position": "absolute", "bottom": 0, "height": 0.5, "zIndex": -1 } }, "fui-input__required": { "": { "position": "absolute", "left": "12rpx", "top": "28rpx", "bottom": "28rpx", "alignItems": "center", "justifyContent": "center" } }, "fui-form__asterisk-text": { "": { "fontSize": "32rpx", "height": "32rpx" } }, "fui-input__label": { "": { "paddingRight": "12rpx" } }, "fui-input__self-wrap": { "": { "flex": 1, "flexDirection": "row", "position": "relative" } }, "fui-input__cover": { "": { "position": "absolute", "left": 0, "right": 0, "top": 0, "bottom": 0 } }, "fui-input__self": { "": { "flex": 1, "paddingRight": "12rpx", "backgroundColor": "rgba(0,0,0,0)" } }, "fui-input__clear-wrap": { "": { "width": "32rpx", "height": "32rpx", "transform": "rotate(45deg) scale(1.1)", "position": "relative", "borderRadius": "32rpx" } }, "fui-input__clear": { "": { "width": "32rpx", "height": "32rpx", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "position": "absolute", "left": 0, "top": 0, "transform": "scale(0.5) translateZ(0)" } }, "fui-input__clear-a": { "": { "width": "32rpx", "borderWidth": "2rpx", "borderStyle": "solid", "borderColor": "#ffffff", "backgroundColor": "#ffffff" } }, "fui-input__clear-b": { "": { "height": "32rpx", "borderWidth": "2rpx", "borderStyle": "solid", "borderColor": "#ffffff", "backgroundColor": "#ffffff" } }, "fui-input__placeholder": { "": { "color": "#cccccc", "fontSize": "32rpx" } }, "fui-input__border-nvue": { "": { "borderWidth": 0.5, "borderStyle": "solid" } }, "fui-input__text-right": { "": { "textAlign": "right" } } };
const _sfc_main$1 = {
  name: "fui-input",
  emits: ["input", "update:modelValue", "focus", "blur", "confirm", "click", "keyboardheightchange"],
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
    //左侧标题
    label: {
      type: String,
      default: ""
    },
    //标题字体大小
    labelSize: {
      type: [Number, String],
      default: 0
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
    clearable: {
      type: Boolean,
      default: false
    },
    clearColor: {
      type: String,
      default: "#CCCCCC"
    },
    //获取焦点
    focus: {
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
    //输入框值 vue2
    value: {
      type: [Number, String],
      default: ""
    },
    //输入框值
    modelValue: {
      type: [Number, String],
      default: ""
    },
    //vue3
    modelModifiers: {
      default: () => ({})
    },
    //兼容写法，type为text时也做Number处理，NaN时返回原值
    number: {
      type: Boolean,
      default: false
    },
    //与官方input type属性一致
    type: {
      type: String,
      default: "text"
    },
    password: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: [Number, String],
      default: 140
    },
    min: {
      type: [Number, String],
      default: "NaN"
    },
    max: {
      type: [Number, String],
      default: "NaN"
    },
    cursorSpacing: {
      type: Number,
      default: 0
    },
    confirmType: {
      type: String,
      default: "done"
    },
    confirmHold: {
      type: Boolean,
      default: false
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
    holdKeyboard: {
      type: Boolean,
      default: false
    },
    autoBlur: {
      type: Boolean,
      default: false
    },
    alwaysEmbed: {
      type: Boolean,
      default: false
    },
    size: {
      type: [Number, String],
      default: 0
    },
    color: {
      type: String,
      default: "#333"
    },
    inputBorder: {
      type: Boolean,
      default: false
    },
    isFillet: {
      type: Boolean,
      default: false
    },
    radius: {
      type: [Number, String],
      default: 8
    },
    borderTop: {
      type: Boolean,
      default: false
    },
    topLeft: {
      type: [Number, String],
      default: 0
    },
    topRight: {
      type: [Number, String],
      default: 0
    },
    borderBottom: {
      type: Boolean,
      default: true
    },
    bottomLeft: {
      type: [Number, String],
      default: 32
    },
    bottomRight: {
      type: [Number, String],
      default: 0
    },
    borderColor: {
      type: String,
      default: "#EEEEEE"
    },
    trim: {
      type: Boolean,
      default: true
    },
    textRight: {
      type: Boolean,
      default: false
    },
    padding: {
      type: Array,
      default() {
        return ["28rpx", "32rpx"];
      }
    },
    backgroundColor: {
      type: String,
      default: "#FFFFFF"
    },
    marginTop: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      placeholderStyl: "",
      focused: false,
      val: ""
    };
  },
  computed: {
    getRadius() {
      let radius = this.radius + "rpx";
      if (this.isFillet) {
        radius = "120px";
      }
      return radius;
    },
    getBorderRadius() {
      let radius = Number(this.radius) * 2 + "rpx";
      if (this.isFillet) {
        radius = "240px";
      }
      return radius;
    },
    getSize() {
      const size = uni.$fui && uni.$fui.fuiInput && uni.$fui.fuiInput.size || 32;
      return `${this.size || size}rpx`;
    },
    getLabelSize() {
      const labelSize = uni.$fui && uni.$fui.fuiInput && uni.$fui.fuiInput.labelSize || 32;
      return `${this.labelSize || labelSize}rpx`;
    },
    dangerColor() {
      const app = uni && uni.$fui && uni.$fui.color;
      return app && app.danger || "#FF2B2B";
    }
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
      if (!this.$refs.fuiInput)
        return;
      this.$nextTick(() => {
        setTimeout(() => {
          if (val) {
            this.$refs.fuiInput.focus();
          } else {
            this.$refs.fuiInput.blur();
          }
        }, 50);
      });
    },
    placeholderStyle() {
      this.fieldPlaceholderStyle();
    },
    modelValue(newVal) {
      this.val = newVal;
    },
    value(newVal) {
      this.val = newVal;
    }
  },
  created() {
    if (this.value && !this.modelValue) {
      this.val = this.value;
    } else {
      this.val = this.modelValue;
    }
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
    fieldPlaceholderStyle() {
      if (this.placeholderStyle) {
        this.placeholderStyl = this.placeholderStyle;
      } else {
        const _size = uni.$fui && uni.$fui.fuiInput && uni.$fui.fuiInput.size || 32;
        const size = uni.upx2px(this.size || _size);
        this.placeholderStyl = `fontSize:${size}px;`;
      }
    },
    onInput(event) {
      let value = event.detail.value;
      if (this.trim)
        value = this.trimStr(value);
      this.val = value;
      const currentVal = Number(value);
      if ((this.modelModifiers.number || this.number || this.type === "digit" || this.type === "number") && !isNaN(currentVal) && Number.isSafeInteger(currentVal)) {
        let eVal = this.type === "digit" ? value : currentVal;
        if (typeof currentVal === "number") {
          const min = Number(this.min);
          const max = Number(this.max);
          if (typeof min === "number" && currentVal < min) {
            eVal = min;
          } else if (typeof max === "number" && max < currentVal) {
            eVal = max;
          }
        }
        value = isNaN(eVal) ? value : eVal;
      }
      this.$nextTick(() => {
        event.detail.value !== "" && (this.val = String(value));
      });
      const inputValue = event.detail.value !== "" ? value : "";
      this.$emit("input", inputValue);
      this.$emit("update:modelValue", inputValue);
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
    onClear(event) {
      if (this.disabled && !this.readonly)
        return;
      uni.hideKeyboard();
      this.val = "";
      this.$emit("input", "");
      this.$emit("update:modelValue", "");
    },
    fieldClick() {
      this.$emit("click", {
        name: this.name,
        target: "wrap"
      });
    },
    /**
     * 在安卓nvue上，事件无法冒泡 
     * 外层容器点击事件无法触发，需要单独处理
     */
    fieldClickAndroid(e) {
    },
    getParent(name = "fui-form-item") {
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
    onKeyboardheightchange(e) {
      this.$emit("keyboardheightchange", e.detail);
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
      class: normalizeClass(["fui-input__wrap", { "fui-input__border-nvue": $props.inputBorder }]),
      style: normalizeStyle({ paddingTop: $props.padding[0] || 0, paddingRight: $props.padding[1] || 0, paddingBottom: $props.padding[2] || $props.padding[0] || 0, paddingLeft: $props.padding[3] || $props.padding[1] || 0, background: $props.backgroundColor, marginTop: $props.marginTop + "rpx", borderRadius: $options.getRadius, borderColor: $props.borderColor }),
      onClick: _cache[7] || (_cache[7] = (...args) => $options.fieldClick && $options.fieldClick(...args)),
      renderWhole: true
    },
    [
      $props.borderTop && !$props.inputBorder ? (openBlock(), createElementBlock(
        "view",
        {
          key: 0,
          style: normalizeStyle({ background: $props.borderColor, left: $props.topLeft + "rpx", right: $props.topRight + "rpx" }),
          class: normalizeClass(["fui-input__border-top", { "fui-input__background": !$props.borderColor }])
        },
        null,
        6
        /* CLASS, STYLE */
      )) : createCommentVNode("v-if", true),
      $props.required ? (openBlock(), createElementBlock("view", {
        key: 1,
        class: "fui-input__required"
      }, [
        createElementVNode(
          "u-text",
          {
            style: normalizeStyle({ color: $props.requiredColor || $options.dangerColor }),
            class: "fui-form__asterisk-text"
          },
          "*",
          4
          /* STYLE */
        )
      ])) : createCommentVNode("v-if", true),
      $props.label ? (openBlock(), createElementBlock(
        "view",
        {
          key: 2,
          class: "fui-input__label",
          style: normalizeStyle({ minWidth: $props.labelWidth + "rpx" })
        },
        [
          createElementVNode(
            "u-text",
            {
              style: normalizeStyle({ fontSize: $options.getLabelSize, color: $props.labelColor })
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
      createElementVNode("view", { class: "fui-input__self-wrap" }, [
        createElementVNode("u-input", {
          ref: "fuiInput",
          class: normalizeClass(["fui-input__self", { "fui-input__text-right": $props.textRight }]),
          style: normalizeStyle({ fontSize: $options.getSize, color: $props.color }),
          placeholderClass: "fui-input__placeholder",
          type: $props.type,
          name: $props.name,
          value: $data.val,
          placeholder: $props.placeholder,
          password: $props.password || $props.type === "password",
          placeholderStyle: $data.placeholderStyl,
          disabled: $props.disabled || $props.readonly,
          cursorSpacing: $props.cursorSpacing,
          maxlength: $props.maxlength,
          focus: $data.focused,
          confirmType: $props.confirmType,
          confirmHold: $props.confirmHold,
          cursor: $props.cursor,
          selectionStart: $props.selectionStart,
          selectionEnd: $props.selectionEnd,
          adjustPosition: $props.adjustPosition,
          holdKeyboard: $props.holdKeyboard,
          autoBlur: $props.autoBlur,
          enableNative: false,
          alwaysEmbed: $props.alwaysEmbed,
          onFocus: _cache[0] || (_cache[0] = (...args) => $options.onFocus && $options.onFocus(...args)),
          onBlur: _cache[1] || (_cache[1] = (...args) => $options.onBlur && $options.onBlur(...args)),
          onInput: _cache[2] || (_cache[2] = (...args) => $options.onInput && $options.onInput(...args)),
          onConfirm: _cache[3] || (_cache[3] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
          onKeyboardheightchange: _cache[4] || (_cache[4] = (...args) => $options.onKeyboardheightchange && $options.onKeyboardheightchange(...args))
        }, null, 46, ["type", "name", "value", "placeholder", "password", "placeholderStyle", "disabled", "cursorSpacing", "maxlength", "focus", "confirmType", "confirmHold", "cursor", "selectionStart", "selectionEnd", "adjustPosition", "holdKeyboard", "autoBlur", "alwaysEmbed"]),
        $props.disabled || $props.readonly ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "fui-input__cover",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.fieldClickAndroid && $options.fieldClickAndroid(...args))
        })) : createCommentVNode("v-if", true)
      ]),
      $props.clearable && $data.val != "" ? (openBlock(), createElementBlock(
        "view",
        {
          key: 3,
          class: "fui-input__clear-wrap",
          style: normalizeStyle({ background: $props.clearColor }),
          onClick: _cache[6] || (_cache[6] = withModifiers((...args) => $options.onClear && $options.onClear(...args), ["stop"]))
        },
        [
          createElementVNode("view", { class: "fui-input__clear" }, [
            createElementVNode("view", { class: "fui-input__clear-a" })
          ]),
          createElementVNode("view", { class: "fui-input__clear" }, [
            createElementVNode("view", { class: "fui-input__clear-b" })
          ])
        ],
        4
        /* STYLE */
      )) : createCommentVNode("v-if", true),
      renderSlot(_ctx.$slots, "default"),
      $props.borderBottom && !$props.inputBorder ? (openBlock(), createElementBlock(
        "view",
        {
          key: 4,
          style: normalizeStyle({ background: $props.borderColor, left: $props.bottomLeft + "rpx", right: $props.bottomRight + "rpx" }),
          class: normalizeClass(["fui-input__border-bottom", { "fui-input__background": !$props.borderColor }])
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
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-input/fui-input.vue"]]);
const _style_0 = { "fui-section__title": { "": { "marginLeft": "32rpx" } }, "fui-left__icon": { "": { "paddingRight": "24rpx" } } };
const _sfc_main = {
  data() {
    return {
      text: "",
      password: true
    };
  },
  watch: {
    text(val) {
      formatAppLog("log", "at pages/component/form/input/input.nvue:72", val);
    }
  },
  methods: {
    input(e) {
      formatAppLog("log", "at pages/component/form/input/input.nvue:77", e);
    },
    change() {
      this.password = !this.password;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_input = resolveEasycom(resolveDynamicComponent("fui-input"), __easycom_0);
  const _component_fui_icon = resolveEasycom(resolveDynamicComponent("fui-icon"), __easycom_1);
  const _component_fui_button = resolveEasycom(resolveDynamicComponent("fui-button"), __easycom_0$1);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("u-text", { class: "fui-page__title" }, "Input"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "Input 输入框，该组件是对原生input组件的增强，内置了常用布局样式，同时包含 input 所有功能。")
      ]),
      createElementVNode("view", { class: "fui-page__bd" }, [
        createElementVNode("u-text", { class: "fui-section__title fui-mtop--0" }, "基本使用"),
        createVNode(_component_fui_input, {
          borderTop: "",
          placeholder: "请输入用户名",
          onInput: $options.input
        }, null, 8, ["onInput"]),
        createVNode(_component_fui_input, {
          bottomLeft: 0,
          placeholder: "请输入手机号码",
          maxlength: "11"
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "带标题"),
        createVNode(_component_fui_input, {
          label: "标题",
          borderTop: "",
          placeholder: "这是一个输入框"
        }),
        createVNode(_component_fui_input, {
          label: "标题文字",
          bottomLeft: 0,
          placeholder: "请输入文本"
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "密码框"),
        createVNode(_component_fui_input, {
          borderTop: "",
          padding: ["20rpx", "32rpx"],
          placeholder: "请输入密码",
          password: $data.password,
          onInput: $options.input
        }, {
          default: withCtx(() => [
            createVNode(_component_fui_icon, {
              name: $data.password ? "invisible" : "visible",
              color: "#B2B2B2",
              size: 50,
              onClick: $options.change
            }, null, 8, ["name", "onClick"])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["password", "onInput"]),
        createElementVNode("u-text", { class: "fui-section__title" }, "带清除按钮、双向绑定"),
        createVNode(_component_fui_input, {
          label: "标题",
          bottomLeft: 0,
          borderTop: "",
          placeholder: "请输入文本",
          clearable: "",
          modelValue: $data.text,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.text = $event)
        }, null, 8, ["modelValue"]),
        createElementVNode("u-text", { class: "fui-section__title" }, "显示边框/设置圆角"),
        createElementVNode("view", { class: "fui-page__spacing" }, [
          createVNode(_component_fui_input, {
            label: "标题",
            inputBorder: "",
            placeholder: "请输入文本"
          }),
          createVNode(_component_fui_input, {
            marginTop: 24,
            isFillet: "",
            inputBorder: "",
            placeholder: "请输入文本"
          }),
          createVNode(_component_fui_input, {
            marginTop: 24,
            radius: 24,
            "border-color": "#FFB703",
            inputBorder: "",
            placeholder: "请输入文本"
          })
        ]),
        createElementVNode("u-text", { class: "fui-section__title" }, "必填项"),
        createVNode(_component_fui_input, {
          required: "",
          label: "标题",
          borderTop: "",
          placeholder: "请输入文本"
        }),
        createVNode(_component_fui_input, {
          required: "",
          label: "标题文字",
          bottomLeft: 0,
          placeholder: "请输入文本内容"
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "输入文本右对齐"),
        createVNode(_component_fui_input, {
          textRight: "",
          label: "身高",
          borderTop: "",
          placeholder: "请输入身高"
        }, {
          default: withCtx(() => [
            createElementVNode("u-text", null, "cm")
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_fui_input, {
          textRight: "",
          label: "体重",
          bottomLeft: 0,
          placeholder: "请输入体重"
        }, {
          default: withCtx(() => [
            createElementVNode("u-text", null, "kg")
          ]),
          _: 1
          /* STABLE */
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "禁用状态"),
        createVNode(_component_fui_input, {
          label: "标题",
          bottomLeft: 0,
          borderTop: "",
          placeholder: "这是一个被禁用的输入框",
          disabled: ""
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "右侧加按钮"),
        createVNode(_component_fui_input, {
          padding: ["20rpx", "32rpx"],
          label: "验证码",
          bottomLeft: 0,
          placeholder: "请输入手机验证码"
        }, {
          default: withCtx(() => [
            createVNode(_component_fui_button, {
              type: "gray",
              bold: "",
              width: "200rpx",
              height: "64rpx",
              size: 28,
              text: "获取验证码"
            })
          ]),
          _: 1
          /* STABLE */
        }),
        createElementVNode("u-text", { class: "fui-section__title" }, "左侧加图标"),
        createVNode(_component_fui_input, { placeholder: "请输入手机号" }, {
          left: withCtx(() => [
            createElementVNode("view", { class: "fui-left__icon" }, [
              createVNode(_component_fui_icon, {
                name: "mobile",
                color: "#333",
                size: 48
              })
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_fui_input, {
          padding: ["20rpx", "32rpx"],
          placeholder: "请输入验证码",
          bottomLeft: 0
        }, {
          left: withCtx(() => [
            createElementVNode("view", { class: "fui-left__icon" }, [
              createVNode(_component_fui_icon, {
                name: "captcha",
                size: 48
              })
            ])
          ]),
          default: withCtx(() => [
            createVNode(_component_fui_button, {
              type: "gray",
              bold: "",
              width: "200rpx",
              height: "64rpx",
              size: 28,
              text: "获取验证码"
            })
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ])
  ]);
}
const input = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/form/input/input.nvue"]]);
export {
  input as default
};
