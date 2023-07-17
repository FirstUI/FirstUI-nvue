import { _ as __easycom_1 } from "../../../../fui-icon.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, Fragment, renderList, createBlock, toDisplayString } from "vue";
import { _ as _export_sfc, r as resolveEasycom } from "../../../../uni-app.es.js";
import { _ as __easycom_0, a as __easycom_1$1 } from "../../../../fui-grid.js";
const icons = [
  "addfriends",
  "addfriends-fill",
  "backspace",
  "backspace-fill",
  "bankcard",
  "bankcard-fill",
  "camera",
  "camera-fill",
  "captcha",
  "captcha-fill",
  "cart",
  "cart-fill",
  "classify",
  "classify-fill",
  "comment",
  "comment-fill",
  "community",
  "community-fill",
  "coupon",
  "coupon-fill",
  "delete",
  "delete-fill",
  "edit",
  "edit-fill",
  "fabulous",
  "fabulous-fill",
  "find",
  "find-fill",
  "help",
  "help-fill",
  "home",
  "home-fill",
  "idcard",
  "idcard-fill",
  "info",
  "info-fill",
  "invite",
  "invite-fill",
  "kefu",
  "kefu-fill",
  "like",
  "like-fill",
  "location",
  "location-fill",
  "lock",
  "lock-fill",
  "mail",
  "mail-fill",
  "message",
  "message-fill",
  "mobile",
  "mobile-fill",
  "more",
  "more-fill",
  "my",
  "my-fill",
  "notice",
  "notice-fill",
  "order",
  "order-fill",
  "picture",
  "picture-fill",
  "setup",
  "setup-fill",
  "share",
  "share-fill",
  "shop",
  "shop-fill",
  "star",
  "starhalf",
  "star-fill",
  "stepon",
  "stepon-fill",
  "wait",
  "wait-fill",
  "warning",
  "warning-fill",
  "plus",
  "plussign",
  "plussign-fill",
  "minus",
  "minussign",
  "minussign-fill",
  "close",
  "clear",
  "clear-fill",
  "checkbox-fill",
  "checkround",
  "checkbox",
  "check",
  "pulldown-fill",
  "pullup",
  "pullup-fill",
  "pulldown",
  "roundright-fill",
  "roundright",
  "arrowright",
  "arrowleft",
  "arrowdown",
  "left",
  "up",
  "right",
  "back",
  "top",
  "dropdown",
  "turningleft",
  "turningup",
  "turningright",
  "turningdown",
  "refresh",
  "loading",
  "search",
  "rotate",
  "screen",
  "signin",
  "calendar",
  "scan",
  "qrcode",
  "wallet",
  "telephone",
  "visible",
  "invisible",
  "menu",
  "operate",
  "slide",
  "list",
  "nonetwork",
  "partake",
  "qa",
  "barchart",
  "piechart",
  "linechart",
  "at",
  "face",
  "redpacket",
  "suspend",
  "link",
  "keyboard",
  "play",
  "video",
  "voice",
  "addressbook",
  "principal",
  "sina",
  "browser",
  "moments",
  "qq",
  "wechat",
  "balance",
  "bankcardpay",
  "wxpay",
  "alipay",
  "payment",
  "receive",
  "sendout",
  "evaluate",
  "aftersale",
  "warehouse",
  "transport",
  "delivery",
  "switch",
  "goods",
  "goods-fill",
  "",
  ""
];
const _style_0 = { "fui-icon__item": { "": { "flex": 1, "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "position": "relative" } }, "fui-icon__name": { "": { "fontSize": "28rpx", "fontWeight": "400", "paddingTop": "16rpx" } } };
const _sfc_main = {
  data() {
    return {
      icons
    };
  },
  methods: {
    getName(e) {
      this.icons[e.detail.index];
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fui_icon = resolveEasycom(resolveDynamicComponent("fui-icon"), __easycom_1);
  const _component_fui_grid_item = resolveEasycom(resolveDynamicComponent("fui-grid-item"), __easycom_0);
  const _component_fui_grid = resolveEasycom(resolveDynamicComponent("fui-grid"), __easycom_1$1);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "fui-wrap" }, [
      createElementVNode("view", { class: "fui-page__hd" }, [
        createElementVNode("u-text", { class: "fui-page__title" }, "Icon"),
        createElementVNode("u-text", { class: "fui-page__desc" }, "Icon 图标，First UI字体图标库，可自行扩展。")
      ]),
      createElementVNode("view", { class: "fui-page__bd fui-page__spacing" }, [
        createVNode(_component_fui_grid, {
          columns: 3,
          onClick: $options.getName
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($data.icons, (item, index) => {
                return openBlock(), createBlock(_component_fui_grid_item, {
                  highlight: item != "",
                  index,
                  key: index
                }, {
                  default: withCtx(() => [
                    createElementVNode("view", { class: "fui-icon__item" }, [
                      (openBlock(), createBlock(_component_fui_icon, {
                        name: item,
                        key: index
                      }, null, 8, ["name"])),
                      createElementVNode(
                        "u-text",
                        { class: "fui-icon__name" },
                        toDisplayString(item),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["highlight", "index"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"])
      ])
    ])
  ]);
}
const icon = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/component/basics/icon/icon.nvue"]]);
export {
  icon as default
};
