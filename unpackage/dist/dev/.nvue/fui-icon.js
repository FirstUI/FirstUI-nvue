import { openBlock, createElementBlock, normalizeStyle, normalizeClass, toDisplayString } from "vue";
import { _ as _export_sfc } from "./uni-app.es.js";
const icons = {
  "addressbook": "",
  "addfriends-fill": "",
  "addfriends": "",
  "backspace-fill": "",
  "backspace": "",
  "bankcard-fill": "",
  "bankcard": "",
  "camera-fill": "",
  "camera": "",
  "captcha-fill": "",
  "captcha": "",
  "cart-fill": "",
  "cart": "",
  "classify": "",
  "classify-fill": "",
  "comment-fill": "",
  "comment": "",
  "community-fill": "",
  "community": "",
  "coupon-fill": "",
  "coupon": "",
  "delete": "",
  "delete-fill": "",
  "edit": "",
  "edit-fill": "",
  "fabulous-fill": "",
  "fabulous": "",
  "find": "",
  "find-fill": "",
  "help-fill": "",
  "help": "",
  "home-fill": "",
  "home": "",
  "idcard-fill": "",
  "idcard": "",
  "info": "",
  "info-fill": "",
  "invite-fill": "",
  "invite": "",
  "kefu-fill": "",
  "kefu": "",
  "like-fill": "",
  "like": "",
  "location": "",
  "location-fill": "",
  "lock": "",
  "lock-fill": "",
  "mail-fill": "",
  "mail": "",
  "message": "",
  "message-fill": "",
  "mobile-fill": "",
  "mobile": "",
  "more": "",
  "more-fill": "",
  "my-fill": "",
  "my": "",
  "principal": "",
  "notice-fill": "",
  "notice": "",
  "order": "",
  "order-fill": "",
  "picture": "",
  "picture-fill": "",
  "setup-fill": "",
  "setup": "",
  "share": "",
  "share-fill": "",
  "shop": "",
  "shop-fill": "",
  "star-fill": "",
  "star": "",
  "starhalf": "",
  "stepon-fill": "",
  "stepon": "",
  "wait-fill": "",
  "wait": "",
  "warning": "",
  "warning-fill": "",
  "plus": "",
  "plussign-fill": "",
  "plussign": "",
  "minus": "",
  "minussign": "",
  "minussign-fill": "",
  "close": "",
  "clear": "",
  "clear-fill": "",
  "checkbox-fill": "",
  "checkround": "",
  "checkbox": "",
  "check": "",
  "pulldown-fill": "",
  "pullup": "",
  "pullup-fill": "",
  "pulldown": "",
  "roundright-fill": "",
  "roundright": "",
  "arrowright": "",
  "arrowleft": "",
  "arrowdown": "",
  "left": "",
  "up": "",
  "right": "",
  "back": "",
  "top": "",
  "dropdown": "",
  "turningleft": "",
  "turningup": "",
  "turningright": "",
  "turningdown": "",
  "refresh": "",
  "loading": "",
  "search": "",
  "rotate": "",
  "screen": "",
  "signin": "",
  "calendar": "",
  "scan": "",
  "qrcode": "",
  "wallet": "",
  "telephone": "",
  "visible": "",
  "invisible": "",
  "menu": "",
  "operate": "",
  "slide": "",
  "list": "",
  "nonetwork": "",
  "partake": "",
  "qa": "",
  "barchart": "",
  "piechart": "",
  "linechart": "",
  "at": "",
  "face": "",
  "redpacket": "",
  "suspend": "",
  "link": "",
  "keyboard": "",
  "play": "",
  "video": "",
  "voice": "",
  "sina": "",
  "browser": "",
  "moments": "",
  "qq": "",
  "wechat": "",
  "balance": "",
  "bankcardpay": "",
  "wxpay": "",
  "alipay": "",
  "payment": "",
  "receive": "",
  "sendout": "",
  "evaluate": "",
  "aftersale": "",
  "warehouse": "",
  "transport": "",
  "delivery": "",
  "switch": "",
  "goods": "",
  "goods-fill": ""
};
const fuiicons = "/assets/fui-icon.2783439a.ttf";
const _style_0 = { "fui-icon": { "": { "fontFamily": "fuiFont", "textDecoration": "none", "textAlign": "center" } } };
var domModule = weex.requireModule("dom");
domModule.addRule("fontFace", {
  "fontFamily": "fuiFont",
  "src": "url('" + fuiicons + "')"
});
const _sfc_main = {
  name: "fui-icon",
  emits: ["click"],
  props: {
    name: {
      type: String,
      default: ""
    },
    size: {
      type: [Number, String],
      default: 0
    },
    //rpx | px
    unit: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    },
    //字重
    fontWeight: {
      type: [Number, String],
      default: "normal"
    },
    //是否禁用点击
    disabled: {
      type: Boolean,
      default: false
    },
    params: {
      type: [Number, String],
      default: 0
    },
    customPrefix: {
      type: String,
      default: ""
    },
    //是否显示为主色调，color为空时有效。【内部使用】
    primary: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getSize() {
      const size = uni.$fui && uni.$fui.fuiIcon && uni.$fui.fuiIcon.size || 64;
      const unit = uni.$fui && uni.$fui.fuiIcon && uni.$fui.fuiIcon.unit || "rpx";
      return (this.size || size) + (this.unit || unit);
    },
    primaryColor() {
      const app = uni && uni.$fui && uni.$fui.color;
      return app && app.primary || "#465CFF";
    },
    getColor() {
      const app = uni && uni.$fui && uni.$fui.fuiIcon;
      let color = this.color || app && app.color;
      if (!color || color === true) {
        color = "#333333";
      }
      return color;
    }
  },
  data() {
    return {
      icons
    };
  },
  methods: {
    handleClick() {
      if (this.disabled)
        return;
      this.$emit("click", {
        params: this.params
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "u-text",
    {
      style: normalizeStyle({ color: $props.primary && (!$props.color || $props.color === true) ? $options.primaryColor : $options.getColor, fontSize: $options.getSize, lineHeight: $options.getSize, fontWeight: $props.fontWeight }),
      class: normalizeClass(["fui-icon", [$props.customPrefix]]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick && $options.handleClick(...args))
    },
    toDisplayString($props.customPrefix ? $props.name : $data.icons[$props.name]),
    7
    /* TEXT, CLASS, STYLE */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-icon/fui-icon.vue"]]);
export {
  __easycom_1 as _
};
