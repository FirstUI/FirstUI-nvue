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

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/nav/pagination/pagination.js
  var import_vue3 = __toESM(require_vue());

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/fui-icon.js
  var import_vue2 = __toESM(require_vue());
  var icons = {
    "addressbook": "\uE80C",
    "addfriends-fill": "\uE80A",
    "addfriends": "\uE80B",
    "backspace-fill": "\uE808",
    "backspace": "\uE809",
    "bankcard-fill": "\uE806",
    "bankcard": "\uE807",
    "camera-fill": "\uE804",
    "camera": "\uE805",
    "captcha-fill": "\uE802",
    "captcha": "\uE803",
    "cart-fill": "\uE800",
    "cart": "\uE801",
    "classify": "\uE7FE",
    "classify-fill": "\uE7FF",
    "comment-fill": "\uE7FC",
    "comment": "\uE7FD",
    "community-fill": "\uE7FA",
    "community": "\uE7FB",
    "coupon-fill": "\uE7F8",
    "coupon": "\uE7F9",
    "delete": "\uE7F6",
    "delete-fill": "\uE7F7",
    "edit": "\uE7F4",
    "edit-fill": "\uE7F5",
    "fabulous-fill": "\uE7F2",
    "fabulous": "\uE7F3",
    "find": "\uE7F0",
    "find-fill": "\uE7F1",
    "help-fill": "\uE7EE",
    "help": "\uE7EF",
    "home-fill": "\uE7EC",
    "home": "\uE7ED",
    "idcard-fill": "\uE7EA",
    "idcard": "\uE7EB",
    "info": "\uE7E8",
    "info-fill": "\uE7E9",
    "invite-fill": "\uE7E6",
    "invite": "\uE7E7",
    "kefu-fill": "\uE7E4",
    "kefu": "\uE7E5",
    "like-fill": "\uE7E2",
    "like": "\uE7E3",
    "location": "\uE7E0",
    "location-fill": "\uE7E1",
    "lock": "\uE7DE",
    "lock-fill": "\uE7DF",
    "mail-fill": "\uE7DC",
    "mail": "\uE7DD",
    "message": "\uE7DA",
    "message-fill": "\uE7DB",
    "mobile-fill": "\uE7D8",
    "mobile": "\uE7D9",
    "more": "\uE7D6",
    "more-fill": "\uE7D7",
    "my-fill": "\uE7D4",
    "my": "\uE7D5",
    "principal": "\uE80D",
    "notice-fill": "\uE7D2",
    "notice": "\uE7D3",
    "order": "\uE7D0",
    "order-fill": "\uE7D1",
    "picture": "\uE7CE",
    "picture-fill": "\uE7CF",
    "setup-fill": "\uE7CC",
    "setup": "\uE7CD",
    "share": "\uE7CA",
    "share-fill": "\uE7CB",
    "shop": "\uE7C8",
    "shop-fill": "\uE7C9",
    "star-fill": "\uE7C5",
    "star": "\uE7C6",
    "starhalf": "\uE7C7",
    "stepon-fill": "\uE7C3",
    "stepon": "\uE7C4",
    "wait-fill": "\uE7C1",
    "wait": "\uE7C2",
    "warning": "\uE7BF",
    "warning-fill": "\uE7C0",
    "plus": "\uE7BC",
    "plussign-fill": "\uE7BD",
    "plussign": "\uE7BE",
    "minus": "\uE7B9",
    "minussign": "\uE7BA",
    "minussign-fill": "\uE7BB",
    "close": "\uE7B8",
    "clear": "\uE7B6",
    "clear-fill": "\uE7B7",
    "checkbox-fill": "\uE7B5",
    "checkround": "\uE7B4",
    "checkbox": "\uE7B3",
    "check": "\uE7B2",
    "pulldown-fill": "\uE7AE",
    "pullup": "\uE7AF",
    "pullup-fill": "\uE7B0",
    "pulldown": "\uE7B1",
    "roundright-fill": "\uE7AC",
    "roundright": "\uE7AD",
    "arrowright": "\uE7A9",
    "arrowleft": "\uE7AA",
    "arrowdown": "\uE7AB",
    "left": "\uE7A6",
    "up": "\uE7A7",
    "right": "\uE7A8",
    "back": "\uE7A3",
    "top": "\uE7A4",
    "dropdown": "\uE7A5",
    "turningleft": "\uE79F",
    "turningup": "\uE7A0",
    "turningright": "\uE7A1",
    "turningdown": "\uE7A2",
    "refresh": "\uE79C",
    "loading": "\uE79D",
    "search": "\uE79E",
    "rotate": "\uE79B",
    "screen": "\uE79A",
    "signin": "\uE799",
    "calendar": "\uE798",
    "scan": "\uE797",
    "qrcode": "\uE796",
    "wallet": "\uE795",
    "telephone": "\uE794",
    "visible": "\uE793",
    "invisible": "\uE792",
    "menu": "\uE78E",
    "operate": "\uE78F",
    "slide": "\uE790",
    "list": "\uE791",
    "nonetwork": "\uE78D",
    "partake": "\uE78C",
    "qa": "\uE78B",
    "barchart": "\uE788",
    "piechart": "\uE789",
    "linechart": "\uE78A",
    "at": "\uE787",
    "face": "\uE77F",
    "redpacket": "\uE780",
    "suspend": "\uE781",
    "link": "\uE782",
    "keyboard": "\uE783",
    "play": "\uE784",
    "video": "\uE785",
    "voice": "\uE786",
    "sina": "\uE77A",
    "browser": "\uE77B",
    "moments": "\uE77C",
    "qq": "\uE77D",
    "wechat": "\uE77E",
    "balance": "\uE779",
    "bankcardpay": "\uE778",
    "wxpay": "\uE777",
    "alipay": "\uE776",
    "payment": "\uE818",
    "receive": "\uE817",
    "sendout": "\uE816",
    "evaluate": "\uE815",
    "aftersale": "\uE814",
    "warehouse": "\uE813",
    "transport": "\uE812",
    "delivery": "\uE811",
    "switch": "\uE810",
    "goods": "\uE80F",
    "goods-fill": "\uE80E"
  };
  var fuiicons = "/assets/fui-icon.2783439a.ttf";
  var _style_0 = { "fui-icon": { "": { "fontFamily": "fuiFont", "textDecoration": "none", "textAlign": "center" } } };
  var domModule = weex.requireModule("dom");
  domModule.addRule("fontFace", {
    "fontFamily": "fuiFont",
    "src": "url('" + fuiicons + "')"
  });
  var _sfc_main = {
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
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "u-text",
      {
        style: (0, import_vue2.normalizeStyle)({ color: $props.primary && (!$props.color || $props.color === true) ? $options.primaryColor : $options.getColor, fontSize: $options.getSize, lineHeight: $options.getSize, fontWeight: $props.fontWeight }),
        class: (0, import_vue2.normalizeClass)(["fui-icon", [$props.customPrefix]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick && $options.handleClick(...args))
      },
      (0, import_vue2.toDisplayString)($props.customPrefix ? $props.name : $data.icons[$props.name]),
      7
      /* TEXT, CLASS, STYLE */
    );
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-icon/fui-icon.vue"]]);

  // ../../../../../../Users/mac/Documents/github/FirstUI-nvue/unpackage/dist/dev/.nvue/pages/component/nav/pagination/pagination.js
  var _style_0$1 = { "fui-pagination__wrap": { "": { "flex": 1, "position": "relative", "overflow": "hidden", "flexDirection": "row", "justifyContent": "space-between", "alignItems": "center" } }, "fui-pagination__btn": { "": { "position": "relative", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "textAlign": "center", "borderWidth": 0.5, "borderStyle": "solid" } }, "fui-pagination__btn-ac": { "": { "opacity:active": 0.5 } }, "fui-pagination__num": { "": { "flex": 1, "flexDirection": "row", "justifyContent": "center", "alignItems": "center" } }, "fui-pagination__disabled": { "": { "opacity": 0.3 } }, "fui-page__number": { "": { "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between" } }, "fui-page__num-item": { "": { "height": "60rpx", "alignItems": "center", "justifyContent": "center", "marginTop": 0, "marginRight": "4rpx", "marginBottom": 0, "marginLeft": "4rpx", "opacity:active": 0.5 } }, "fui-page__num-width": { "": { "width": "60rpx" } }, "fui-page__num-padding": { "": { "paddingTop": 0, "paddingRight": "8rpx", "paddingBottom": 0, "paddingLeft": "8rpx" } }, "fui-page__num-text": { "": { "fontSize": "24rpx" } } };
  var _sfc_main$1 = {
    name: "fui-pagination",
    emits: ["change"],
    props: {
      prevText: {
        type: String,
        default: "\u4E0A\u4E00\u9875"
      },
      nextText: {
        type: String,
        default: "\u4E0B\u4E00\u9875"
      },
      width: {
        type: [Number, String],
        default: 128
      },
      height: {
        type: [Number, String],
        default: 60
      },
      borderColor: {
        type: String,
        default: "transparent"
      },
      background: {
        type: String,
        default: "#fff"
      },
      color: {
        type: String,
        default: "#333"
      },
      size: {
        type: [Number, String],
        default: 28
      },
      radius: {
        type: [Number, String],
        default: 12
      },
      //是否有点击效果
      highlight: {
        type: Boolean,
        default: true
      },
      //是否自定义按钮显示内容
      custom: {
        type: Boolean,
        default: false
      },
      //当前页码
      current: {
        type: [Number, String],
        default: 1
      },
      //当前页码字体颜色
      currentColor: {
        type: String,
        default: ""
      },
      //页码字体颜色
      pageColor: {
        type: String,
        default: "#333"
      },
      //页码字体大小
      pageFontSize: {
        type: [Number, String],
        default: 36
      },
      //是否需要展示页码
      isPage: {
        type: Boolean,
        default: true
      },
      //页码展示类型 1-简约型 2-展开型
      pageType: {
        type: [Number, String],
        default: 1
      },
      pageBgColor: {
        type: String,
        default: "rgba(0,0,0,0)"
      },
      activeBgColor: {
        type: String,
        default: ""
      },
      activeColor: {
        type: String,
        default: "#fff"
      },
      //数据总量
      total: {
        type: [Number, String],
        default: 0
      },
      //每页数据量
      pageSize: {
        type: [Number, String],
        default: 10
      }
    },
    computed: {
      maxPage() {
        let maxPage = 1;
        let total = Number(this.total);
        let pageSize = Number(this.pageSize);
        if (total && pageSize) {
          maxPage = Math.ceil(total / pageSize);
        }
        return maxPage;
      },
      getCurrentColor() {
        let color = this.currentColor;
        if (!color || color === true) {
          const app = uni && uni.$fui && uni.$fui.color;
          color = app && app.primary || "#465CFF";
        }
        return color;
      },
      getActiveBgColor() {
        let color = this.activeBgColor;
        if (!color || color === true) {
          const app = uni && uni.$fui && uni.$fui.color;
          color = app && app.primary || "#465CFF";
        }
        return color;
      }
    },
    watch: {
      current(val) {
        this.currentIndex = +val;
      },
      total(val) {
        if (this.pageType == 2) {
          this.getPageNumber();
        }
      },
      pageSize(val) {
        if (this.pageType == 2) {
          this.getPageNumber();
        }
      }
    },
    created() {
      this.currentIndex = +this.current;
      if (this.pageType == 2) {
        this.getPageNumber();
      }
    },
    data() {
      return {
        currentIndex: 1,
        pageNumber: [],
        pagerCount: 0
      };
    },
    methods: {
      toArray(start, end) {
        return Array.from(new Array(end + 1).keys()).slice(start);
      },
      getPageNumber() {
        const num = this.currentIndex;
        const total = this.total;
        const pageSize = this.pageSize;
        let pagerCount = this.pagerCount;
        if (!pagerCount) {
          pagerCount = 6;
          const width = Number(this.width);
          if (!isNaN(width) && width <= 60) {
            pagerCount = 8;
          }
          this.pagerCount = pagerCount;
        }
        let showPagerArr = this.toArray(1, pagerCount);
        let pagerNum = Math.ceil(total / pageSize);
        if (pagerNum <= 1) {
          showPagerArr = [1];
        } else if (pagerNum <= pagerCount) {
          showPagerArr = this.toArray(1, pagerNum);
        } else {
          showPagerArr[pagerCount - 1] = pagerNum;
          if (num < pagerCount - 1) {
            showPagerArr[pagerCount - 2] = "...";
          } else if (num >= pagerNum - (pagerCount - 3)) {
            showPagerArr[1] = "...";
            showPagerArr.forEach((item, index) => {
              if (index > 1) {
                showPagerArr[index] = pagerNum - (pagerCount - 3) + (index - 2);
              }
            });
          } else {
            showPagerArr[1] = "...";
            for (let i = 0; i < pagerCount - 3; i++) {
              showPagerArr[i + 2] = num + i;
            }
            showPagerArr[pagerCount - 2] = "...";
          }
        }
        this.pageNumber = showPagerArr;
      },
      clickPrev() {
        if (Number(this.currentIndex) === 1)
          return;
        this.currentIndex -= 1;
        this.change("prev");
      },
      clickNext() {
        if (Number(this.currentIndex) === this.maxPage)
          return;
        this.currentIndex += 1;
        this.change("next");
      },
      handleClick(item, index) {
        let pageNo = Number(item);
        const idx = this.pagerCount === 6 ? 4 : 6;
        if (isNaN(pageNo)) {
          if (index === 1) {
            pageNo = this.pageNumber[index + 1] - (this.pagerCount - 4);
          } else if (index === idx) {
            pageNo = this.pageNumber[index - 1] + 1;
          }
        } else {
          if (Number(this.currentIndex) === pageNo)
            return;
        }
        this.currentIndex = pageNo;
        this.change("pageNumber");
      },
      change(e) {
        this.getPageNumber();
        this.$emit("change", {
          type: e,
          current: this.currentIndex
        });
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
      class: "fui-pagination__wrap",
      renderWhole: true
    }, [
      (0, import_vue3.createElementVNode)(
        "view",
        {
          class: (0, import_vue3.normalizeClass)(["fui-pagination__btn", { "fui-pagination__disabled": $data.currentIndex === 1, "fui-pagination__btn-ac": $data.currentIndex !== 1 && $props.highlight, "fui-pagination__color": !$props.color }]),
          style: (0, import_vue3.normalizeStyle)({ width: $props.width + "rpx", height: $props.height + "rpx", borderColor: $props.borderColor, background: $props.background, borderRadius: $props.radius + "rpx" }),
          onClick: _cache[0] || (_cache[0] = (...args) => $options.clickPrev && $options.clickPrev(...args))
        },
        [
          !$props.custom ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
            "u-text",
            {
              key: 0,
              class: (0, import_vue3.normalizeClass)({ "fui-pagination__color": !$props.color }),
              style: (0, import_vue3.normalizeStyle)({ color: $props.color, fontSize: $props.size + "rpx" })
            },
            (0, import_vue3.toDisplayString)($props.prevText),
            7
            /* TEXT, CLASS, STYLE */
          )) : (0, import_vue3.createCommentVNode)("v-if", true),
          (0, import_vue3.renderSlot)(_ctx.$slots, "prev")
        ],
        6
        /* CLASS, STYLE */
      ),
      $props.isPage && $props.pageType == 1 ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
        key: 0,
        class: "fui-pagination__num"
      }, [
        (0, import_vue3.createElementVNode)(
          "u-text",
          {
            class: (0, import_vue3.normalizeClass)({ "fui-pagination__active-color": !$props.currentColor }),
            style: (0, import_vue3.normalizeStyle)({ color: $options.getCurrentColor, fontSize: $props.pageFontSize + "rpx" })
          },
          (0, import_vue3.toDisplayString)($data.currentIndex),
          7
          /* TEXT, CLASS, STYLE */
        ),
        (0, import_vue3.createElementVNode)(
          "u-text",
          {
            class: (0, import_vue3.normalizeClass)({ "fui-pagination__color": !$props.pageColor }),
            style: (0, import_vue3.normalizeStyle)({ color: $props.pageColor, fontSize: $props.pageFontSize + "rpx" })
          },
          "/" + (0, import_vue3.toDisplayString)($options.maxPage || 0),
          7
          /* TEXT, CLASS, STYLE */
        )
      ])) : (0, import_vue3.createCommentVNode)("v-if", true),
      $props.isPage && $props.pageType == 2 ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
        key: 1,
        class: "fui-page__number"
      }, [
        ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
          import_vue3.Fragment,
          null,
          (0, import_vue3.renderList)($data.pageNumber, (item, index) => {
            return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
              class: (0, import_vue3.normalizeClass)(["fui-page__num-item", { "fui-pagination__bg": !$props.activeBgColor && $data.currentIndex === item, "fui-page__num-width": item === "..." || item != "..." && item < 1e3, "fui-page__num-padding": item != "..." && item > 999 }]),
              key: index,
              style: (0, import_vue3.normalizeStyle)({ background: $data.currentIndex === item ? $options.getActiveBgColor : $props.pageBgColor, borderRadius: $props.radius + "rpx" }),
              onClick: (0, import_vue3.withModifiers)(($event) => $options.handleClick(item, index), ["stop"])
            }, [
              (0, import_vue3.createElementVNode)(
                "u-text",
                {
                  class: (0, import_vue3.normalizeClass)(["fui-page__num-text", { "fui-pagination__color": !$props.color && $data.currentIndex !== item }]),
                  style: (0, import_vue3.normalizeStyle)({ color: $data.currentIndex === item ? $props.activeColor : $props.pageColor })
                },
                (0, import_vue3.toDisplayString)(item),
                7
                /* TEXT, CLASS, STYLE */
              )
            ], 14, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])) : (0, import_vue3.createCommentVNode)("v-if", true),
      (0, import_vue3.createElementVNode)(
        "view",
        {
          class: (0, import_vue3.normalizeClass)(["fui-pagination__btn", { "fui-pagination__disabled": $data.currentIndex === $options.maxPage, "fui-pagination__btn-ac": $data.currentIndex !== $options.maxPage && $props.highlight, "fui-pagination__color": !$props.color }]),
          style: (0, import_vue3.normalizeStyle)({ width: $props.width + "rpx", height: $props.height + "rpx", borderColor: $props.borderColor, background: $props.background, borderRadius: $props.radius + "rpx" }),
          onClick: _cache[1] || (_cache[1] = (...args) => $options.clickNext && $options.clickNext(...args))
        },
        [
          !$props.custom ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
            "u-text",
            {
              key: 0,
              class: (0, import_vue3.normalizeClass)({ "fui-pagination__color": !$props.color }),
              style: (0, import_vue3.normalizeStyle)({ color: $props.color, fontSize: $props.size + "rpx" })
            },
            (0, import_vue3.toDisplayString)($props.nextText),
            7
            /* TEXT, CLASS, STYLE */
          )) : (0, import_vue3.createCommentVNode)("v-if", true),
          (0, import_vue3.renderSlot)(_ctx.$slots, "next")
        ],
        6
        /* CLASS, STYLE */
      )
    ]);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-pagination/fui-pagination.vue"]]);
  var _style_02 = { "fui-wrap": { "": { "paddingBottom": "96rpx" } }, "fui-pageno__wrap": { "": { "paddingTop": 0, "paddingRight": "64rpx", "paddingBottom": 0, "paddingLeft": "64rpx" } } };
  var _sfc_main2 = {
    data() {
      return {};
    },
    methods: {
      change(e) {
        formatAppLog("log", "at pages/component/nav/pagination/pagination.nvue:59", e);
      }
    }
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_fui_pagination = resolveEasycom((0, import_vue3.resolveDynamicComponent)("fui-pagination"), __easycom_0);
    const _component_fui_icon = resolveEasycom((0, import_vue3.resolveDynamicComponent)("fui-icon"), __easycom_1);
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue3.createElementVNode)("view", { class: "fui-wrap" }, [
        (0, import_vue3.createElementVNode)("view", { class: "fui-page__hd" }, [
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-page__title" }, "Pagination"),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-page__desc" }, "Pagination \u5206\u9875\u5668\uFF0C\u5F53\u6570\u636E\u91CF\u8FC7\u591A\u65F6\uFF0C\u4F7F\u7528\u5206\u9875\u5206\u89E3\u6570\u636E\u3002")
        ]),
        (0, import_vue3.createElementVNode)("view", { class: "fui-page__bd fui-page__spacing" }, [
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title fui-mtop--0" }, "\u57FA\u7840\u4F7F\u7528"),
          (0, import_vue3.createVNode)(_component_fui_pagination, {
            total: 100,
            onChange: $options.change
          }, null, 8, ["onChange"]),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title" }, "\u6837\u5F0F\u8C03\u6574"),
          (0, import_vue3.createVNode)(_component_fui_pagination, {
            total: 100,
            color: "#FFB703",
            background: "transparent",
            currentColor: "#FFB703"
          }),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title" }, "\u81EA\u5B9A\u4E49\u6309\u94AE\u5185\u5BB9"),
          (0, import_vue3.createVNode)(_component_fui_pagination, {
            total: 100,
            custom: "",
            background: "transparent"
          }, {
            prev: (0, import_vue3.withCtx)(() => [
              (0, import_vue3.createVNode)(_component_fui_icon, { name: "arrowleft" })
            ]),
            next: (0, import_vue3.withCtx)(() => [
              (0, import_vue3.createVNode)(_component_fui_icon, { name: "arrowright" })
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title" }, "\u9875\u7801\u5C55\u5F00"),
          (0, import_vue3.createVNode)(_component_fui_pagination, {
            total: 1e3,
            pageType: 2
          }),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title" }, "\u9875\u7801\u5C55\u5F00/\u8C03\u6574\u6837\u5F0F"),
          (0, import_vue3.createElementVNode)("view", { class: "fui-pageno__wrap" }, [
            (0, import_vue3.createVNode)(_component_fui_pagination, {
              total: 1e3,
              custom: "",
              pageType: 2,
              width: 62,
              background: "#FFB703",
              pageBgColor: "rgba(255, 183, 3, .1)",
              activeBgColor: "#FFB703"
            }, {
              prev: (0, import_vue3.withCtx)(() => [
                (0, import_vue3.createVNode)(_component_fui_icon, {
                  size: 40,
                  name: "arrowleft",
                  color: "#fff"
                })
              ]),
              next: (0, import_vue3.withCtx)(() => [
                (0, import_vue3.createVNode)(_component_fui_icon, {
                  size: 40,
                  name: "arrowright",
                  color: "#fff"
                })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          (0, import_vue3.createElementVNode)("u-text", { class: "fui-section__title" }, "\u9875\u7801\u5C55\u5F00/\u6309\u94AE\u5BBD\u5EA6\u8BBE\u4E3A60"),
          (0, import_vue3.createVNode)(_component_fui_pagination, {
            total: 1e3,
            custom: "",
            pageType: 2,
            width: 60,
            background: "#09BE4F",
            pageBgColor: "rgba(9, 190, 79, .05)",
            activeBgColor: "#09BE4F"
          }, {
            prev: (0, import_vue3.withCtx)(() => [
              (0, import_vue3.createVNode)(_component_fui_icon, {
                size: 40,
                name: "arrowleft",
                color: "#fff"
              })
            ]),
            next: (0, import_vue3.withCtx)(() => [
              (0, import_vue3.createVNode)(_component_fui_icon, {
                size: 40,
                name: "arrowright",
                color: "#fff"
              })
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ])
    ]);
  }
  var pagination = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/nav/pagination/pagination.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/component/nav/pagination/pagination";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    pagination.mpType = "page";
    const app = Vue.createPageApp(pagination, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...pagination.styles || []]));
    app.mount("#root");
  }
})();
