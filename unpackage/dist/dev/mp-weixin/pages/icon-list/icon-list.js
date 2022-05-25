"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_m_icon2 = common_vendor.resolveComponent("m-icon");
  _easycom_m_icon2();
}
const _easycom_m_icon = () => "../../uni_modules/magic-ui/components/m-icon/m-icon.js";
if (!Math) {
  _easycom_m_icon();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    const list = [
      {
        name: "add-rectangle",
        size: "50px"
      },
      {
        name: "image-circle",
        size: "50px"
      },
      {
        name: "invoice",
        size: "50px"
      },
      {
        name: "shopping-bag",
        size: "50px"
      },
      {
        name: "chat-01",
        size: "50px"
      },
      {
        name: "sort-arrow-up",
        size: "50px"
      },
      {
        name: "chat-03",
        size: "50px"
      },
      {
        name: "chat-02",
        size: "50px"
      },
      {
        name: "arrow-right",
        size: "50px"
      },
      {
        name: "direction-right",
        size: "50px"
      },
      {
        name: "direction-down",
        size: "50px"
      },
      {
        name: "search",
        size: "50px"
      }
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(list, (item, index, i0) => {
          return {
            a: "b3e8d426-0-" + i0,
            b: common_vendor.p({
              name: item.name,
              size: item.size
            }),
            c: common_vendor.t(item.name),
            d: index
          };
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/libin/Documents/HBuilderProjects/magic-ui/pages/icon-list/icon-list.vue"]]);
wx.createPage(MiniProgramPage);
