"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    const title = "  Magic-ui \u662F\u4E00\u4E2A\u57FA\u4E8Evue3 script setup \u8BED\u6CD5\u7CD6 \u548C TypeScript \u6253\u9020\u7684uni-app\u7684\u4E13\u7528UI\u6846\u67B6";
    function gotoList() {
      console.log("aaaaa");
      common_vendor.index.navigateTo({
        url: "../icon-list/icon-list"
      });
    }
    const list = ["\u56FE\u6807"];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(title),
        b: common_vendor.f(list, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index
          };
        }),
        c: common_vendor.o(gotoList)
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/libin/Documents/HBuilderProjects/magic-ui/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
