"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/uni-app.es.js
  var import_vue = __toESM(require_vue());
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  var isString = (val) => typeof val === "string";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return isString(component) ? easycom : component;
  }

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/fui-button.js
  var import_vue2 = __toESM(require_vue());
  var _style_0 = { "fui-button__wrap": { "": { "position": "relative" } }, "fui-button": { "": { "borderWidth": 0, "borderStyle": "solid", "position": "relative", "paddingLeft": 0, "paddingRight": 0, "borderWidth::after": 0, "borderStyle::after": "solid", "borderColor::after": "#000000" } }, "fui-button__flex-1": { "": { "flex": 1 } }, "fui-button__text": { "": { "textAlign": "center", "flexDirection": "row", "alignItems": "center", "!justifyContent": "center", "!paddingLeft": 0 } }, "fui-button__opacity": { "": { "opacity": 0.5 } }, "fui-text__bold": { "": { "fontWeight": "bold" } }, "fui-button__link": { "": { "!borderColor": "rgba(0,0,0,0)", "!backgroundColor": "rgba(0,0,0,0)" } } };
  var _sfc_main = {
    name: "fui-button",
    emits: ["click", "getuserinfo", "contact", "getphonenumber", "error", "opensetting"],
    props: {
      //样式类型：primary，success， warning，danger，link，purple，gray
      type: {
        type: String,
        default: "primary"
      },
      //按钮背景色，当传入值时type失效
      background: {
        type: String,
        default: ""
      },
      //按钮显示文本
      text: {
        type: String,
        default: ""
      },
      //按钮字体颜色
      color: {
        type: String,
        default: ""
      },
      //按钮禁用背景色
      disabledBackground: {
        type: String,
        default: ""
      },
      //按钮禁用字体颜色
      disabledColor: {
        type: String,
        default: ""
      },
      borderWidth: {
        type: String,
        default: "0.5px"
      },
      borderColor: {
        type: String,
        default: ""
      },
      //V1.9.8+ 按钮大小，优先级高于width和height，medium、small、mini
      btnSize: {
        type: String,
        default: ""
      },
      //宽度
      width: {
        type: String,
        default: "100%"
      },
      //高度
      height: {
        type: String,
        default: ""
      },
      //字体大小，单位rpx
      size: {
        type: [Number, String],
        default: 0
      },
      bold: {
        type: Boolean,
        default: false
      },
      //['20rpx','30rpx','20rpx','30rpx']->[上，右，下，左]
      margin: {
        type: Array,
        default() {
          return ["0", "0"];
        }
      },
      //圆角
      radius: {
        type: String,
        default: ""
      },
      plain: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      formType: {
        type: String,
        default: ""
      },
      openType: {
        type: String,
        default: ""
      },
      //支付宝小程序 
      //当 open-type 为 getAuthorize 时，可以设置 scope 为：phoneNumber、userInfo
      scope: {
        type: String,
        default: ""
      },
      appParameter: {
        type: String,
        default: ""
      },
      index: {
        type: [Number, String],
        default: 0
      }
    },
    computed: {
      getTypeColor() {
        const app = uni && uni.$fui && uni.$fui.color;
        let colors = {
          primary: app && app.primary || "#465CFF",
          success: app && app.success || "#09BE4F",
          warning: app && app.warning || "#FFB703",
          danger: app && app.danger || "#FF2B2B",
          link: "transparent",
          purple: app && app.purple || "#6831FF",
          gray: "#F8F8F8"
        };
        return colors[this.type] || "transparent";
      },
      getBackground() {
        let color = this.getTypeColor;
        if (this.disabled || this.plain) {
          color = "transparent";
        }
        if (!this.disabled && !this.plain && this.background) {
          color = this.background;
        }
        return color;
      },
      getColor() {
        let color = "#fff";
        if (this.color) {
          color = this.disabled && this.disabledBackground ? this.disabledColor : this.color;
        } else {
          if (this.disabled && this.disabledBackground) {
            color = this.disabledColor || "#FFFFFF";
          } else {
            const app = uni && uni.$fui && uni.$fui.color;
            const primary = app && app.primary || "#465CFF";
            color = this.type === "gray" ? primary : "#FFFFFF";
          }
        }
        return color;
      },
      getSize() {
        let size = this.size || uni && uni.$fui && uni.$fui.fuiButton && uni.$fui.fuiButton.size || 32;
        if (this.btnSize === "small") {
          size = size > 28 ? 28 : size;
        } else if (this.btnSize === "mini") {
          size = size > 28 ? 24 : size;
        }
        return `${size}rpx`;
      },
      getWidth() {
        let width = this.width;
        if (this.btnSize && this.btnSize !== true) {
          width = {
            "medium": "400rpx",
            "small": "200rpx",
            "mini": "120rpx"
          }[this.btnSize] || width;
        }
        return width;
      },
      getHeight() {
        let height = this.height || uni && uni.$fui && uni.$fui.fuiButton && uni.$fui.fuiButton.height || "96rpx";
        if (this.btnSize && this.btnSize !== true) {
          height = {
            "medium": "84rpx",
            "small": "72rpx",
            "mini": "64rpx"
          }[this.btnSize] || height;
        }
        return height;
      },
      getRadius() {
        const radius = uni && uni.$fui && uni.$fui.fuiButton && uni.$fui.fuiButton.radius || "16rpx";
        return this.radius || radius;
      }
    },
    data() {
      let isNvue = false;
      isNvue = true;
      return {
        isNvue,
        time: 0,
        trigger: false,
        pc: false
      };
    },
    created() {
    },
    methods: {
      handleStart(e) {
      },
      handleClick() {
        if (this.disabled || !this.trigger)
          return;
        this.time = 0;
      },
      handleTap() {
        if (this.disabled)
          return;
        this.$emit("click", {
          index: Number(this.index)
        });
      },
      handleEnd(e) {
      },
      bindgetuserinfo({
        detail = {}
      } = {}) {
        this.$emit("getuserinfo", detail);
      },
      bindcontact({
        detail = {}
      } = {}) {
        this.$emit("contact", detail);
      },
      bindgetphonenumber({
        detail = {}
      } = {}) {
        this.$emit("getphonenumber", detail);
      },
      binderror({
        detail = {}
      } = {}) {
        this.$emit("error", detail);
      },
      bindopensetting({
        detail = {}
      } = {}) {
        this.$emit("opensetting", detail);
      },
      bindchooseavatar({
        detail = {}
      } = {}) {
        this.$emit("chooseavatar", detail);
      },
      bindlaunchapp({
        detail = {}
      } = {}) {
        this.$emit("launchapp", detail);
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_button = (0, import_vue2.resolveComponent)("button");
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "view",
      {
        class: (0, import_vue2.normalizeClass)(["fui-button__wrap", [!$options.getWidth || $options.getWidth === "100%" || $options.getWidth === true ? "fui-button__flex-1" : "", $props.disabled && !$props.disabledBackground ? "fui-button__opacity" : ""]]),
        style: (0, import_vue2.normalizeStyle)({ width: $options.getWidth, height: $options.getHeight, marginTop: $props.margin[0] || 0, marginRight: $props.margin[1] || 0, marginBottom: $props.margin[2] || $props.margin[0] || 0, marginLeft: $props.margin[3] || $props.margin[1] || 0, borderRadius: $options.getRadius, background: $options.getBackground }),
        onTouchstart: _cache[0] || (_cache[0] = (...args) => $options.handleStart && $options.handleStart(...args)),
        onTouchend: _cache[1] || (_cache[1] = (...args) => $options.handleClick && $options.handleClick(...args)),
        onTouchcancel: _cache[2] || (_cache[2] = (...args) => $options.handleEnd && $options.handleEnd(...args)),
        renderWhole: true
      },
      [
        (0, import_vue2.createVNode)(_component_button, {
          class: (0, import_vue2.normalizeClass)(["fui-button", [
            $props.bold ? "fui-text__bold" : "",
            $data.time && ($props.plain || $props.type === "link") ? "fui-button__opacity" : "",
            !$props.background && !$props.disabledBackground && !$props.plain ? "fui-button__" + $props.type : "",
            !$options.getWidth || $options.getWidth === "100%" || $options.getWidth === true ? "fui-button__flex-1" : "",
            $data.time && !$props.plain && $props.type !== "link" ? "fui-button__active" : "",
            $data.pc && !$props.disabled ? $props.plain || $props.type === "link" ? "fui-button__opacity-pc" : "fui-button__active-pc" : ""
          ]]),
          style: (0, import_vue2.normalizeStyle)({
            width: $options.getWidth,
            height: $options.getHeight,
            lineHeight: $options.getHeight,
            background: $props.disabled ? $props.disabledBackground || $options.getTypeColor : $props.plain ? "transparent" : $options.getBackground,
            borderWidth: !$props.borderColor || !$data.isNvue ? "0" : $props.borderWidth,
            borderColor: $props.borderColor ? $props.borderColor : $props.disabled && $props.disabledBackground ? $props.disabledBackground : $props.background || "transparent",
            borderRadius: $options.getRadius,
            fontSize: $options.getSize,
            color: $options.getColor
          }),
          loading: $props.loading,
          "form-type": $props.formType,
          "open-type": $props.openType,
          "app-parameter": $props.appParameter,
          onGetuserinfo: $options.bindgetuserinfo,
          onGetphonenumber: $options.bindgetphonenumber,
          onContact: $options.bindcontact,
          onError: $options.binderror,
          onOpensetting: $options.bindopensetting,
          onChooseavatar: $options.bindchooseavatar,
          onLaunchapp: $options.bindlaunchapp,
          disabled: $props.disabled,
          scope: $props.scope,
          onClick: (0, import_vue2.withModifiers)($options.handleTap, ["stop"])
        }, {
          default: (0, import_vue2.withCtx)(() => [
            $props.text ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
              "u-text",
              {
                key: 0,
                class: (0, import_vue2.normalizeClass)(["fui-button__text", { "fui-btn__gray-color": !$props.background && !$props.disabledBackground && !$props.plain && $props.type === "gray" && $props.color === "#fff", "fui-text__bold": $props.bold }]),
                style: (0, import_vue2.normalizeStyle)({ fontSize: $options.getSize, lineHeight: $options.getSize, color: $options.getColor })
              },
              (0, import_vue2.toDisplayString)($props.text),
              7
              /* TEXT, CLASS, STYLE */
            )) : (0, import_vue2.createCommentVNode)("v-if", true),
            (0, import_vue2.renderSlot)(_ctx.$slots, "default")
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["class", "style", "loading", "form-type", "open-type", "app-parameter", "onGetuserinfo", "onGetphonenumber", "onContact", "onError", "onOpensetting", "onChooseavatar", "onLaunchapp", "disabled", "scope", "onClick"])
      ],
      38
      /* CLASS, STYLE, HYDRATE_EVENTS */
    );
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-button/fui-button.vue"]]);

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/js/utils/utils.js
  var import_vue3 = __toESM(require_vue());
  var utils$1 = {
    /**
     * @desc 英文首字母大写：english=>English
     * @param {String}  value 需要处理的英文字符串
     **/
    titleCase(value) {
      if (value == null || value.length === 0)
        return value;
      return value.replace(/^[a-z]/, (matchStr) => {
        return matchStr.toLocaleUpperCase();
      });
    },
    /**
     * 把连续出现多次的字母字符串进行压缩。aaabbbbcccccd=>3a4b5cd
     * @param {String} value 需要压缩的字符串
     * @param {Boolean} ignoreCase 是否忽略大小写
     */
    compressLetter(value, ignoreCase) {
      let pattern = new RegExp("([a-zA-Z])\\1+", ignoreCase ? "ig" : "g");
      return value.replace(pattern, (matchStr, group_1) => {
        return matchStr.length + group_1;
      });
    },
    /**
     * @desc 等待多少毫秒再执行 ，同步阻塞
     * @param {String} millisecond 毫秒
     **/
    sleep(millisecond) {
      let now = /* @__PURE__ */ new Date();
      let exitTime = now.getTime() + millisecond;
      while (true) {
        now = /* @__PURE__ */ new Date();
        if (now.getTime() > exitTime)
          return;
      }
    },
    /**
     * @desc 去左右空格
     * @param {String} value 需要处理的字符串
     **/
    trim(value) {
      return value.replace(/(^\s*)|(\s*$)/g, "");
    },
    /**
     * @desc 去所有空格
     * @param {String} value 需要处理的字符串
     **/
    trimAll(value) {
      return value.replace(/\s+/g, "");
    },
    /**
     * @desc 替换所有相同字符串
     * @param {String} text 需要处理的字符串
     * @param {String} repstr 被替换的字符
     * @param {String} newstr 替换后的字符
     **/
    replaceAll(text, repstr, newstr) {
      return text.replace(new RegExp(repstr, "gm"), newstr);
    },
    /**
     * @desc 格式化手机号码
     * @param {String} num 手机号码
     **/
    numberFormatter(num) {
      return num.length === 11 ? num.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2") : num;
    },
    /**
     * @desc 金额格式化，保留两位小数
     * @param {String | Number} money 金额值
     **/
    moneyFormatter(money) {
      return parseFloat(money).toFixed(2).toString().split("").reverse().join("").replace(/(\d{3})/g, "$1,").replace(
        /\,$/,
        ""
      ).split("").reverse().join("");
    },
    /**
     * @desc 日期时间格式化
     * @param date 需要格式化的日期
     * @param format 格式化字符串(y-m-d h:i:s)
     * @param type  date的格式类型：1-日期字符串(2017/12/04 12:12:12) 2-时间戳(1603676514690) 3-日期字符串，无连接符(20171204121212) 
     * 4-new Date()时间格式(Thu Oct 01 2020 00:00:00 GMT+0800 (中国标准时间))
     * @param isMs  时间戳精度是否为毫秒，默认为true（当精度为秒时传false），type=2时有效
     **/
    dateFormatter(date, format, type = 1, isMs = true) {
      let formatDate = "";
      if (type === 3) {
        formatDate = utils$1._formatTimeStr(date, format);
      } else {
        formatDate = utils$1._formatDate(format, date, type, isMs);
      }
      return formatDate;
    },
    _formatDate(formatStr, fdate, type = 1, isMs) {
      if (!fdate)
        return "";
      let fTime, fStr = "ymdhis";
      if (type === 4) {
        fTime = fdate;
      } else {
        fdate = fdate.toString();
        if (~fdate.indexOf(".")) {
          fdate = fdate.substring(0, fdate.indexOf("."));
        }
        fdate = fdate.replace("T", " ").replace(/\-/g, "/");
        if (!formatStr)
          formatStr = "y-m-d h:i:s";
        if (fdate) {
          if (type === 2) {
            fdate = isMs ? Number(fdate) : Number(fdate) * 1e3;
          }
          fTime = new Date(fdate);
        } else {
          fTime = /* @__PURE__ */ new Date();
        }
      }
      let month = fTime.getMonth() + 1;
      let day = fTime.getDate();
      let hours = fTime.getHours();
      let minu = fTime.getMinutes();
      let second = fTime.getSeconds();
      month = month < 10 ? "0" + month : month;
      day = day < 10 ? "0" + day : day;
      hours = hours < 10 ? "0" + hours : hours;
      minu = minu < 10 ? "0" + minu : minu;
      second = second < 10 ? "0" + second : second;
      let formatArr = [
        fTime.getFullYear().toString(),
        month.toString(),
        day.toString(),
        hours.toString(),
        minu.toString(),
        second.toString()
      ];
      for (let i = 0; i < formatArr.length; i++) {
        formatStr = formatStr.replace(fStr.charAt(i), formatArr[i]);
      }
      return formatStr;
    },
    /**
     * @desc 格式化时间
     * @param timeStr 时间字符串 20191212162001
     * @param formatStr 需要的格式 如 y-m-d h:i:s | y/m/d h:i:s | y/m/d | y年m月d日 等
     **/
    _formatTimeStr(timeStr, formatStr) {
      if (!timeStr)
        return;
      timeStr = timeStr.toString();
      if (timeStr.length === 14) {
        let timeArr = timeStr.split("");
        let fStr = "ymdhis";
        if (!formatStr) {
          formatStr = "y-m-d h:i:s";
        }
        let formatArr = [
          [...timeArr].splice(0, 4).join(""),
          [...timeArr].splice(4, 2).join(""),
          [...timeArr].splice(6, 2).join(""),
          [...timeArr].splice(8, 2).join(""),
          [...timeArr].splice(10, 2).join(""),
          [...timeArr].splice(12, 2).join("")
        ];
        for (let i = 0; i < formatArr.length; i++) {
          formatStr = formatStr.replace(fStr.charAt(i), formatArr[i]);
        }
        return formatStr;
      }
      return timeStr;
    },
    /**
     * @desc RGB颜色转十六进制颜色
     * @param r
     * @param g
     * @param b
     **/
    rgbToHex(r, g, b) {
      return "#" + utils$1._toHex(r) + utils$1._toHex(g) + utils$1._toHex(b);
    },
    _toHex(n) {
      n = parseInt(n, 10);
      if (isNaN(n))
        return "00";
      n = Math.max(0, Math.min(n, 255));
      return "0123456789ABCDEF".charAt((n - n % 16) / 16) + "0123456789ABCDEF".charAt(n % 16);
    },
    /**
     * @desc 十六进制颜色转RGB颜色
     * @param hex 颜色值 #333 或 #333333
     **/
    hexToRGB(hex) {
      if (hex.length === 4) {
        let text = hex.substring(1, 4);
        hex = "#" + text + text;
      }
      let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    },
    /**
     * @desc 唯一标识，随机数
     * @param n 随机数位数
     **/
    unique(n) {
      n = n || 6;
      let rnd = "";
      for (let i = 0; i < n; i++)
        rnd += Math.floor(Math.random() * 10);
      return "firstui_" + (/* @__PURE__ */ new Date()).getTime() + rnd;
    },
    /**
     * @desc 获取uuid
     */
    getUUID() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        return (c === "x" ? Math.random() * 16 | 0 : "r&0x3" | "0x8").toString(16);
      });
    },
    /**
     * @desc 简单数组合并去重
     * @param arr1 数组1
     * @param arr2 数组2 可不传
     **/
    distinctArray(arr1, arr2) {
      arr1 = arr1 || [];
      arr2 = arr2 || [];
      return [.../* @__PURE__ */ new Set([...arr1, ...arr2])];
    },
    /**
     * @desc 获取日期时间段
     * @param type 1-今天 2-昨天 3-本周 4-本月 5-本年
     **/
    getDateTimeSlot(type) {
      let now = /* @__PURE__ */ new Date();
      let start = now.toDateString();
      let end = now.toDateString();
      switch (type) {
        case 1:
          start = `${start} 00:00:00`;
          end = `${end} 23:59:59`;
          break;
        case 2:
          now.setTime(now.getTime() - 3600 * 1e3 * 24 * 1);
          start = `${now.toDateString()} 00:00:00`;
          end = `${now.toDateString()} 23:59:59`;
          break;
        case 3:
          let weekday = now.getDay() || 7;
          now.setDate(now.getDate() - weekday + 1);
          start = `${now.toDateString()} 00:00:00`;
          end = `${end} 23:59:59`;
          break;
        case 4:
          start = `${now.getFullYear()}-${now.getMonth() + 1}-01 00:00:00`;
          end = `${end} 23:59:59`;
          break;
        case 5:
          start = `${now.getFullYear()}-01-01 00:00:00`;
          end = `${end} 23:59:59`;
          break;
      }
      return {
        start: new Date(start.replace(/\-/g, "/")),
        end: new Date(end.replace(/\-/g, "/"))
      };
    },
    /*
     * @desc 获取Url参数，返回一个对象
     * @param url url地址
     * ?a=1&b=2 ==> {a: "1", b: "2"}
     */
    getUrlParam(url) {
      let arrObj = url.split("?");
      let params = {};
      if (arrObj.length > 1) {
        arrObj = arrObj[1].split("&");
        arrObj.forEach((item) => {
          item = item.split("=");
          params[item[0]] = item[1];
        });
      }
      return params;
    },
    /**
     * @method 函数防抖
     * @desc 短时间内多次触发同一事件，只执行最后一次，或者只执行最开始的一次，中间的不执行。
     * @param func 目标函数
     * @param wait 延迟执行毫秒数
     * @param immediate true - 立即执行， false - 延迟执行
     */
    debounce(func, wait = 1e3, immediate = true) {
      let timer;
      return function() {
        let context = this, args = arguments;
        if (timer)
          clearTimeout(timer);
        if (immediate) {
          let callNow = !timer;
          timer = setTimeout(() => {
            timer = null;
          }, wait);
          if (callNow)
            func.apply(context, args);
        } else {
          timer = setTimeout(() => {
            func.apply(context, args);
          }, wait);
        }
      };
    },
    /**
     * @method 函数节流
     * @desc 指连续触发事件，但是在 n 秒内只执行一次函数。即 2n 秒内执行 2 次... 。会稀释函数的执行频率。
     * @param func 函数
     * @param wait 延迟执行毫秒数
     * @param type 1 在时间段开始的时候触发 2 在时间段结束的时候触发
     */
    throttle(func, wait = 1e3, type = 1) {
      let previous = 0;
      let timeout;
      return function() {
        let context = this;
        let args = arguments;
        if (type === 1) {
          let now = Date.now();
          if (now - previous > wait) {
            func.apply(context, args);
            previous = now;
          }
        } else if (type === 2) {
          if (!timeout) {
            timeout = setTimeout(() => {
              timeout = null;
              func.apply(context, args);
            }, wait);
          }
        }
      };
    }
  };
  var utils$2 = {
    titleCase: utils$1.titleCase,
    compressLetter: utils$1.compressLetter,
    sleep: utils$1.sleep,
    trim: utils$1.trim,
    trimAll: utils$1.trimAll,
    replaceAll: utils$1.replaceAll,
    numberFormatter: utils$1.numberFormatter,
    moneyFormatter: utils$1.moneyFormatter,
    dateFormatter: utils$1.dateFormatter,
    rgbToHex: utils$1.rgbToHex,
    hexToRGB: utils$1.hexToRGB,
    unique: utils$1.unique,
    distinctArray: utils$1.distinctArray,
    getDateTimeSlot: utils$1.getDateTimeSlot,
    getUrlParam: utils$1.getUrlParam,
    getUUID: utils$1.getUUID,
    debounce: utils$1.debounce,
    throttle: utils$1.throttle
  };
  var _style_02 = { "fui-btn__flex-center": { "": { "alignItems": "center", "justifyContent": "center", "flexDirection": "column" } }, "fui-section__title": { "": { "marginTop": "72rpx" } } };
  var _sfc_main2 = {
    data() {
      return {
        num: 0
      };
    },
    onLoad() {
      this.throttle = utils$2.throttle(() => {
        this.num++;
      }, 3e3);
    },
    methods: {
      titleCase() {
        const text = "english";
        const val = utils$2.titleCase(text);
        formatAppLog("log", "at pages/component/js/utils/utils.nvue:85", val);
        uni.fui.toast(val);
      },
      compressLetter() {
        const text = "aabbbcddddddddd";
        const val = utils$2.compressLetter(text);
        formatAppLog("log", "at pages/component/js/utils/utils.nvue:91", val);
        uni.fui.toast(val);
      },
      sleep() {
        utils$2.sleep(1e3);
        uni.fui.toast("1000ms\u540E\u6267\u884C\uFF01");
      },
      trim() {
        const text = " abcd ";
        const val = utils$2.trim(text);
        formatAppLog("log", "at pages/component/js/utils/utils.nvue:101", val);
        uni.fui.toast(`\u5B57\u7B26\u4E32${val}`);
      },
      trimAll() {
        const text = " a b c d ";
        const val = utils$2.trimAll(text);
        formatAppLog("log", "at pages/component/js/utils/utils.nvue:107", val);
        uni.fui.toast(`\u5B57\u7B26\u4E32${val}`);
      },
      replaceAll() {
        const text = "##a###b#######c#";
        const val = utils$2.replaceAll(text, "#", "");
        formatAppLog("log", "at pages/component/js/utils/utils.nvue:113", val);
        uni.fui.toast(val);
      },
      numberFormatter() {
        const text = "15715600012";
        const val = utils$2.numberFormatter(text);
        formatAppLog("log", "at pages/component/js/utils/utils.nvue:119", val);
        uni.fui.toast(val);
      },
      moneyFormatter() {
        const text = "2021";
        const val = utils$2.moneyFormatter(text);
        formatAppLog("log", "at pages/component/js/utils/utils.nvue:125", val);
        uni.fui.toast(val);
      },
      btnThrottle() {
        this.throttle();
      }
    }
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_fui_button = resolveEasycom((0, import_vue3.resolveDynamicComponent)("fui-button"), __easycom_0);
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue3.createElementVNode)("view", { class: "fui-wrap" }, [
        (0, import_vue3.createElementVNode)("view", { class: "fui-page__hd" }, [
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-page__title" }, "Utils"),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-page__desc" }, "Utils \u5DE5\u5177\u7C7B\uFF0C\u66F4\u591A\u4F7F\u7528\u8BF7\u67E5\u770B\u6587\u6863\u3002")
        ]),
        (0, import_vue3.createElementVNode)("view", { class: "fui-page__bd fui-page__spacing" }, [
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title fui-mtop--0" }, "\u82F1\u6587\u9996\u5B57\u6BCD\u5927\u5199"),
          (0, import_vue3.createElementVNode)("view", { class: "fui-btn__flex-center" }, [
            (0, import_vue3.createElementVNode)("u-text", { class: "fui-page__desc" }, "\u8F6C\u6362\uFF1Aenglish"),
            (0, import_vue3.createVNode)(_component_fui_button, {
              type: "gray",
              "btn-size": "medium",
              text: "\u9996\u5B57\u6BCD\u8F6C\u5927\u5199",
              bold: "",
              margin: ["24rpx"],
              onClick: $options.titleCase
            }, null, 8, ["onClick"])
          ]),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title" }, "\u538B\u7F29\u8FDE\u7EED\u7684\u5B57\u6BCD\u5B57\u7B26\u4E32"),
          (0, import_vue3.createElementVNode)("view", { class: "fui-btn__flex-center" }, [
            (0, import_vue3.createElementVNode)("u-text", { class: "fui-page__desc" }, "\u538B\u7F29\uFF1Aaabbbcddddddddd"),
            (0, import_vue3.createVNode)(_component_fui_button, {
              type: "gray",
              "btn-size": "medium",
              text: "\u538B\u7F29",
              bold: "",
              margin: ["24rpx"],
              onClick: $options.compressLetter
            }, null, 8, ["onClick"])
          ]),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title" }, "\u7B49\u5F85\u591A\u5C11\u6BEB\u79D2\u518D\u6267\u884C \uFF0C\u540C\u6B65\u963B\u585E"),
          (0, import_vue3.createElementVNode)("view", { class: "fui-btn__flex-center" }, [
            (0, import_vue3.createVNode)(_component_fui_button, {
              type: "gray",
              "btn-size": "medium",
              text: "\u7B49\u5F85 1000\u6BEB\u79D2",
              bold: "",
              margin: ["24rpx"],
              onClick: $options.sleep
            }, null, 8, ["onClick"])
          ]),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title" }, "\u53BB\u5B57\u7B26\u4E32\u5DE6\u53F3\u7A7A\u683C"),
          (0, import_vue3.createElementVNode)("view", { class: "fui-btn__flex-center" }, [
            (0, import_vue3.createElementVNode)("u-text", { class: "fui-page__desc" }, "\u5B57\u7B26\u4E32 abcd "),
            (0, import_vue3.createVNode)(_component_fui_button, {
              type: "gray",
              "btn-size": "medium",
              text: "\u53BB\u5DE6\u53F3\u7A7A\u683C",
              bold: "",
              margin: ["24rpx"],
              onClick: $options.trim
            }, null, 8, ["onClick"])
          ]),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title" }, "\u53BB\u5B57\u7B26\u4E32\u6240\u6709\u7A7A\u683C"),
          (0, import_vue3.createElementVNode)("view", { class: "fui-btn__flex-center" }, [
            (0, import_vue3.createElementVNode)("u-text", { class: "fui-page__desc" }, "\u5B57\u7B26\u4E32 a b c d "),
            (0, import_vue3.createVNode)(_component_fui_button, {
              type: "gray",
              "btn-size": "medium",
              text: "\u53BB\u6240\u6709\u7A7A\u683C",
              bold: "",
              margin: ["24rpx"],
              onClick: $options.trimAll
            }, null, 8, ["onClick"])
          ]),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title" }, "\u66FF\u6362\u6240\u6709\u76F8\u540C\u5B57\u7B26\u4E32"),
          (0, import_vue3.createElementVNode)("view", { class: "fui-btn__flex-center" }, [
            (0, import_vue3.createElementVNode)("u-text", { class: "fui-page__desc" }, "\u5C06\u5B57\u7B26\u4E32\uFF1A##a###b#######c# \u4E2D#\u66FF\u6362\u4E3A\u7A7A"),
            (0, import_vue3.createVNode)(_component_fui_button, {
              type: "gray",
              "btn-size": "medium",
              text: "\u66FF\u6362",
              bold: "",
              margin: ["24rpx"],
              onClick: $options.replaceAll
            }, null, 8, ["onClick"])
          ]),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title" }, "\u683C\u5F0F\u5316\u624B\u673A\u53F7\u7801"),
          (0, import_vue3.createElementVNode)("view", { class: "fui-btn__flex-center" }, [
            (0, import_vue3.createElementVNode)("u-text", { class: "fui-page__desc" }, "\u624B\u673A\u53F7\uFF1A15715600012"),
            (0, import_vue3.createVNode)(_component_fui_button, {
              type: "gray",
              "btn-size": "medium",
              text: "\u683C\u5F0F\u5316",
              bold: "",
              margin: ["24rpx"],
              onClick: $options.numberFormatter
            }, null, 8, ["onClick"])
          ]),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title" }, "\u683C\u5F0F\u5316\u91D1\u989D\uFF0C\u4FDD\u7559\u4E24\u4F4D\u5C0F\u6570"),
          (0, import_vue3.createElementVNode)("view", { class: "fui-btn__flex-center" }, [
            (0, import_vue3.createElementVNode)("u-text", { class: "fui-page__desc" }, "\u91D1\u989D\uFF1A2021"),
            (0, import_vue3.createVNode)(_component_fui_button, {
              type: "gray",
              "btn-size": "medium",
              text: "\u683C\u5F0F\u5316",
              bold: "",
              margin: ["24rpx"],
              onClick: $options.moneyFormatter
            }, null, 8, ["onClick"])
          ]),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title" }, "\u51FD\u6570\u8282\u6D41\uFF0C\u8FDE\u7EED\u89E6\u53D1\u4E8B\u4EF6"),
          (0, import_vue3.createElementVNode)("view", { class: "fui-btn__flex-center" }, [
            (0, import_vue3.createElementVNode)(
              "u-text",
              { class: "fui-page__desc" },
              "3s\u6267\u884C\u4E00\u6B21\uFF0C6s\u6267\u884C2\u6B21...\uFF1A" + (0, import_vue3.toDisplayString)($data.num),
              1
              /* TEXT */
            ),
            (0, import_vue3.createVNode)(_component_fui_button, {
              type: "gray",
              "btn-size": "medium",
              text: "\u6267\u884C +1",
              bold: "",
              margin: ["24rpx"],
              onClick: $options.btnThrottle
            }, null, 8, ["onClick"])
          ]),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title" }, "\u5176\u4ED6\u529F\u80FD"),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-page__desc" }, "\u9664\u4EE5\u4E0A\u529F\u80FD\u4EE5\u5916\uFF0C\u8FD8\u6709\uFF1A\u65E5\u671F\u65F6\u95F4\u683C\u5F0F\u5316\uFF0CRGB\u989C\u8272\u8F6C\u5341\u516D\u8FDB\u5236\u989C\u8272\uFF0C\u5341\u516D\u8FDB\u5236\u989C\u8272\u8F6CRGB\u989C\u8272\uFF0C\u83B7\u53D6\u552F\u4E00\u6807\u8BC6\uFF0C\u83B7\u53D6uuid\uFF0C\u7B80\u5355\u6570\u7EC4\u5408\u5E76\u53BB\u91CD\uFF0C\u83B7\u53D6\u65E5\u671F\u65F6\u95F4\u6BB5\uFF0C\u83B7\u53D6Url\u53C2\u6570\uFF0C\u51FD\u6570\u9632\u6296\uFF0C\u51FD\u6570\u8282\u6D41\u7B49\u529F\u80FD\uFF0C\u5177\u4F53\u4F7F\u7528\u8BF7\u67E5\u770B\u6587\u6863\u3002")
        ])
      ])
    ]);
  }
  var utils = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/js/utils/utils.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/component/js/utils/utils";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    utils.mpType = "page";
    const app = Vue.createPageApp(utils, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...utils.styles || []]));
    app.mount("#root");
  }
})();
/*!
 * 工具类：常用数据处理工具
 * Utils - v1.0.0 (2021/7/9, 11:07:14 AM)
 * https://github.com/FirstUI/FirstUI | Released under Apache License 2.0
 *
 * 官网地址：https://firstui.cn/
 * 文档地址：https://doc.firstui.cn/
 */
