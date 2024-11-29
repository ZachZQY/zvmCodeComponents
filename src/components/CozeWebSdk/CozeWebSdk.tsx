import "https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.0.0-beta.4/libs/cn/index.js";
import { EventHandler, State } from "zvm-code-context";
import { useRef, useEffect, useState } from 'react';  // 添加这行
export interface CozeWebSdkPropData {
  // config
  config_botId: string;

  // auth
  auth_type?: string;
  auth_token?: string;
  auth_refreshToken?: string;

  // userInfo
  userInfo_id?: string;
  userInfo_url?: string;
  userInfo_nickname?: string;

  // base
  ui_base_icon?: string;
  ui_base_lang?: string;

  // asstBtn
  ui_asstBtn_isNeed?: string;

  // footer
  ui_footer_expressionText?: string;

  // chatBot
  ui_chatBot_title?: string;
  ui_chatBot_width?: string;
}

export interface CozeWebSdkStateData {
  config_botId?: State<string>;
}

export interface CozeWebSdkEvent {
  onChatBotHide: EventHandler;
  onChatBotShow: EventHandler;
}

export interface CozeWebSdkProps {
  propData: CozeWebSdkPropData;
  propState: CozeWebSdkStateData;
  event: CozeWebSdkEvent;
}

const { CozeWebSDK } = window as any;

export function CozeWebSdk({ propData, event, propState }: CozeWebSdkProps) {

  const chatBotRef = useRef<HTMLDivElement>(null);  // 添加 ref
  const sdkRef = useRef<any>(null);  // 添加一个 ref 存储 SDK 实例
  const initRef = useRef(false);  // 添加一个标记来追踪是否已经初始化
  const asstIconUrl = "https://lf-coze-web-cdn.coze.cn/obj/coze-web-cn/obric/coze/favicon.1970.png"
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (!chatBotRef.current) {
      console.log("等待中渲染完成...");
      return
    }
    if (!propData?.config_botId) {
      console.log("未获取到config_botId,等待中...");
      return
    }

    if (initRef.current) {
      console.log("sdk已经渲染过一次");
      return
    }

    initRef.current = true;  // 标记已初始化
    propState?.config_botId?.set(String(propData?.config_botId));
    // WebSDK
    sdkRef.current = new CozeWebSDK.WebChatClient({
      config: {
        // 智能体 ID
        botId: propData?.config_botId,
      },
      auth: {
        //鉴权方式，默认type 为unauth，表示不鉴权；建议设置为 token，表示通过PAT或OAuth鉴权
        type: propData?.auth_type || "unauth",
        //type 为 token 时，需要设置PAT或OAuth访问密钥
        token: propData?.auth_token || undefined,
        //访问密钥过期时，使用的新密钥，可以按需设置。
        onRefreshToken: () => propData?.auth_refreshToken || undefined,
      },
      userInfo: {
        id: propData?.userInfo_id || undefined,
        url: propData?.userInfo_url || asstIconUrl,
        nickname: propData?.userInfo_nickname || "用户",
      },
      ui: {
        base: {
          icon: propData?.ui_base_icon || asstIconUrl,
          layout: "pc", // 改为 pc 布局，因为 mobile 布局会有固定宽度限制
          lang: propData?.ui_base_lang || "zh-CN",
          //zIndex: 0,
        },
        asstBtn: {
          isNeed: propData?.ui_asstBtn_isNeed == "true" ? true : false,
        },
        footer: {
          isShow: propData?.ui_footer_expressionText ? true : false,
          expressionText: propData?.ui_footer_expressionText,
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
          title: propData?.ui_chatBot_title || undefined,
          // uploadable: true,
          width: propData?.ui_chatBot_width || "100%", // 添加这行，设置宽度为 100%
          el: chatBotRef.current,
          onHide: () => {
            setIsVisible(false);
            event.onChatBotHide?.call(null);
            console.log("onHide---");
            // todo...
          },
          onShow: () => {
            setIsVisible(true);
            event.onChatBotShow?.call(null);
            console.log("onShow---");

            // todo...
          },
        },
      },
    });
    sdkRef.current.showChatBot();


    // 只在组件真正卸载时清理
    return () => {
      // 移除销毁实例的逻辑
      // 如果确实需要在特定情况下销毁，可以通过其他方式触发
    };

  }, [propData, event, propState]); // 使用 useEffect 确保 DOM 已经准备好

  return (
    <div
      className="coze-web-sdk"
      ref={chatBotRef}
      style={{
        display: isVisible ? 'flex' : 'none',
        width: '100%',
        height: '100%',
        position: 'relative',
        justifyContent: 'center',  // Center horizontally
        alignItems: 'center',       // Center vertically
        background: 'transparent',  // 添加透明背景
      }}
    >
      <style>
        {`
          // /* 隐藏关闭按钮 */
          // .efa8c49d8ce1a57573bf.e4f8c2c1d9d493c0cfdb {
          //   display: none !important;
          // }
          // /* 隐藏顶部标题栏 */
          // .header._874044fb502a454c2fe9-header {
          //   display: none !important;
          // }
        `}
      </style>
    </div>
  );
}
