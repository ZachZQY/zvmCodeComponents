import { importShared } from './__federation_fn_import-lyDSGtOx.js';
import { r as reactExports } from './__federation_shared_react-DO25RkNm.js';
import 'https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.0.0-beta.4/libs/cn/index.js';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}

var jsxRuntimeExports = jsxRuntime.exports;

const {useRef,useEffect,useState} = await importShared('react');

const { CozeWebSDK } = window;
function CozeWebSdk({ propData, event, propState }) {
  const chatBotRef = useRef(null);
  const sdkRef = useRef(null);
  const initRef = useRef(false);
  const asstIconUrl = "https://lf-coze-web-cdn.coze.cn/obj/coze-web-cn/obric/coze/favicon.1970.png";
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (!chatBotRef.current) {
      console.log("等待中渲染完成...");
      return;
    }
    if (!propData?.config_botId) {
      console.log("未获取到config_botId,等待中...");
      return;
    }
    if (initRef.current) {
      console.log("sdk已经渲染过一次");
      return;
    }
    initRef.current = true;
    propState?.config_botId?.set(String(propData?.config_botId));
    sdkRef.current = new CozeWebSDK.WebChatClient({
      config: {
        // 智能体 ID
        botId: propData?.config_botId
      },
      auth: {
        //鉴权方式，默认type 为unauth，表示不鉴权；建议设置为 token，表示通过PAT或OAuth鉴权
        type: propData?.auth_type || "unauth",
        //type 为 token 时，需要设置PAT或OAuth访问密钥
        token: propData?.auth_token || void 0,
        //访问密钥过期时，使用的新密钥，可以按需设置。
        onRefreshToken: () => propData?.auth_refreshToken || void 0
      },
      userInfo: {
        id: propData?.userInfo_id || void 0,
        url: propData?.userInfo_url || asstIconUrl,
        nickname: propData?.userInfo_nickname || "用户"
      },
      ui: {
        base: {
          icon: propData?.ui_base_icon || asstIconUrl,
          layout: "pc",
          // 改为 pc 布局，因为 mobile 布局会有固定宽度限制
          lang: propData?.ui_base_lang || "zh-CN"
          //zIndex: 0,
        },
        asstBtn: {
          isNeed: propData?.ui_asstBtn_isNeed == "true" ? true : false
        },
        footer: {
          isShow: propData?.ui_footer_expressionText ? true : false,
          expressionText: propData?.ui_footer_expressionText
          // linkvars: {
          //   nameA: {
          //     text: "Coze",
          //     link: "https://www.coze.cn/",
          //   },
          //   nameB: {
          //     text: "Zion",
          //     link: "https://zion.functorz.com/",
          //   },
          // },
        },
        chatBot: {
          title: propData?.ui_chatBot_title || void 0,
          // uploadable: true,
          width: propData?.ui_chatBot_width || "100%",
          // 添加这行，设置宽度为 100%
          el: chatBotRef.current,
          onHide: () => {
            setIsVisible(false);
            event.onChatBotHide?.call(null);
            console.log("onHide---");
          },
          onShow: () => {
            setIsVisible(true);
            event.onChatBotShow?.call(null);
            console.log("onShow---");
          }
        }
      }
    });
    sdkRef.current.showChatBot();
    return () => {
    };
  }, [propData, event, propState]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "coze-web-sdk",
      ref: chatBotRef,
      style: {
        display: isVisible ? "flex" : "none",
        width: "100%",
        height: "100%",
        position: "relative",
        justifyContent: "center",
        // Center horizontally
        alignItems: "center",
        // Center vertically
        background: "transparent"
        // 添加透明背景
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
          // /* 隐藏关闭按钮 */
          // .efa8c49d8ce1a57573bf.e4f8c2c1d9d493c0cfdb {
          //   display: none !important;
          // }
          // /* 隐藏顶部标题栏 */
          // .header._874044fb502a454c2fe9-header {
          //   display: none !important;
          // }
        ` })
    }
  );
}

export { CozeWebSdk as C, jsxRuntimeExports as j };
