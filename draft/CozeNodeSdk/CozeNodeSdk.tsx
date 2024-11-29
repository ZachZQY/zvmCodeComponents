import { Button } from "antd";
import { EventHandler, State } from "zvm-code-context";
// import { useState, useEffect } from "react";


// import "./style.css";

// import { quickChat } from "./Coze-Node-SDK";

import "https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.0.0-beta.4/libs/cn/index.js";

const { CozeWebSDK } = window as any;

// import { useStore } from "./store";

export interface CozePropData {
  test?: string;
}

export interface CozeStateData {
  testcallbackValue?: State<string>;
}

export interface CozeEvent {
  onConfirm?: EventHandler;
  onCancel?: EventHandler;
}

export interface CozeProps {
  propData: CozePropData;
  propState: CozeStateData;
  event: CozeEvent;
}

export function CozeWebSdk({ propData, event, propState }: CozeProps) {
  console.log(propData, event, propState);

  // console.log(window);

  // NodeSDK
  // const { NodeContent } = useStore();
  
  // WebSDK
  const cozeWeb = new CozeWebSDK.WebChatClient({
    config: {
      // 智能体 ID
      botId: "7435964789111373850",
    },
    auth: {
      //鉴权方式，默认type 为unauth，表示不鉴权；建议设置为 token，表示通过PAT或OAuth鉴权
      type: "token",
      //type 为 token 时，需要设置PAT或OAuth访问密钥
      token:
        "pat_RIRkIz2an4JxzO3vJUhfmz5pOTQY9u2Cv7H1qevMGt4HdFBmOBAsye9gLUaXZgRJ",
      //访问密钥过期时，使用的新密钥，可以按需设置。
      onRefreshToken: () =>
        "pat_RIRkIz2an4JxzO3vJUhfmz5pOTQY9u2Cv7H1qevMGt4HdFBmOBAsye9gLUaXZgRJ",
    },
    userInfo: {
      id: "1234",
      url: "https://c-ssl.duitang.com/uploads/blog/202312/16/aLS3E7Avt0XEb2X.png",
      nickname: "CaiCai",
    },
    ui: {
      base: {
        icon: "https://fz-zion-static.functorz.com/202411241215/bf73dcf6132b57d362d4be77ebaf631b/project/2000000000202504/images/qNrKAKMOXLDMfBEplir62w==.webp?x-oss-process=image/resize,h_120,w_120,m_mfit",
        layout: "mobile",
        zIndex: 1000,
      },
      asstBtn: {
        isNeed: true,
      },
      footer: {
        isShow: true,
        expressionText: "Powered by {{name}}&{{name1}}",
        linkvars: {
          name: {
            text: "Zion",
            link: "https://zion.functorz.com/",
          },
          name1: {
            text: "Cai",
            link: "https://zion.functorz.com/",
          },
        },
      },
      chatBot: {
        title: "Zion & Coze",
        uploadable: true,
        width: 800,
        // el: document.getElementById("position_demo"),
        el: undefined,
        onHide: () => {
          console.log("CozeWebSDK.WebChatClient onHide");
          // todo...
        },
        onShow: () => {
          console.log("CozeWebSDK.WebChatClient onShow");

          // todo...
        },
      },
    },
  });
  const openWeb = () => {
    cozeWeb.showChatBot();
  };


  

  return (
    <div>
      {/* Coze Node SDK  */}
      {/* <div className="flex-col m5 p10 border-black text-wrap word-break Node-SDK gap-24">
        <h3 className="text-center">Coze——Node——SDK</h3>
       
        <Button type="primary" onClick={quickChat}>
          Coze-Node-SDK
        </Button>
        {NodeContent}
      </div> */}

      {/* web SDK */}
      <div>
        <Button type="primary" onClick={openWeb}>
          打开web-sdk聊天页面
        </Button>
      </div>
      {/* <div
        className="web-sdk"
        id="position_demo"
        style={{
          position: "absolute",
          right: "10px",
          bottom: "20px",
          width: "200px",
          height: "500px",
        }}
      ></div> */}
    </div>
  );
}
