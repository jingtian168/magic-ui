"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  props: {
    name: { type: String, required: false, default: "" },
    color: { type: String, required: false, default: "" },
    size: { type: String, required: false, default: "" }
  },
  setup(__props) {
    const props = __props;
    const iconClasses = common_vendor.computed$1(() => ({
      [`magic-icon-${props.name}`]: true
    }));
    const iconStyles = common_vendor.computed$1(() => {
      return {
        color: props.color,
        fontSize: props.size
      };
    });
    console.log(props);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.n(common_vendor.unref(iconClasses)),
        b: common_vendor.s(common_vendor.unref(iconStyles))
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/libin/Documents/HBuilderProjects/magic-ui/uni_modules/magic-ui/components/m-icon/m-icon.vue"]]);
wx.createComponent(Component);
