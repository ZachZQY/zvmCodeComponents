# 快速开始
```bash
# 安装依赖
npm i

# 运行调试
npm run dev

# 测试打包
npm run build

# 如果没安装functorz，安装并登录IDE
npm install -g functorz
npx functorz signin 你的邮箱账号 你的密码

# 发布
npx functorz publish

```

# 组件配置文件说明
cozeWebSdk文档地址:https://www.coze.cn/docs/developer_guides/install_web_sdk
配置参数定义完全参照cozeWebSdk文档
```ts
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
  ui_asstBtn_isNeed?: string;// "false" 或 "true"

  // footer
  ui_footer_expressionText?: string;

  // chatBot
  ui_chatBot_title?: string;
  ui_chatBot_width?: string;
}
```
