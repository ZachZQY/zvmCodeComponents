// import { CozeAPI, COZE_CN_BASE_URL, ChatEventType, RoleType } from '@coze/api';


// const COZE_API_TOKEN = 'pat_RIRkIz2an4JxzO3vJUhfmz5pOTQY9u2Cv7H1qevMGt4HdFBmOBAsye9gLUaXZgRJ'

// import { useStore } from "./store";

// const {  setNodeContent } = useStore.getState()
// let client:any
// try {
//   client= new CozeAPI({
//     token: COZE_API_TOKEN, // Get your PAT from https://www.coze.com/open/oauth/pats
//     baseURL: COZE_CN_BASE_URL,
//     allowPersonalAccessTokenInBrowser: true,
//   });
// } catch (e:any) {
//   setNodeContent(JSON.stringify(e.message))
//   console.error(e);
// }



// async function quickChat() {
   

//   const stream = await client.chat.stream({
//     bot_id: '7435964789111373850',
//     additional_messages: [{
//       role: RoleType.User,
//       content: '你好!',
//       content_type: 'text',
//     }]
//   });

//    for await (const part of stream) {
//     if (part.event === ChatEventType.CONVERSATION_CHAT_CREATED) {
//       // console.log('[START]');
//     } else if (part.event === ChatEventType.CONVERSATION_MESSAGE_DELTA) {
//       console.log(part.data.content);
      
//       setNodeContent(part.data.content)
//       console.log(useStore.getState().NodeContent);
      
//     } else if (part.event === ChatEventType.CONVERSATION_MESSAGE_COMPLETED) {
//       const { role, type, content } = part.data;
//       if (role === 'assistant' && type === 'answer') {
//         setNodeContent('\n')
       
//         console.log(useStore.getState().NodeContent);
//       } else {
//         setNodeContent( 'role:'+role+',type:'+type+',content:'+content)

//         console.log(useStore.getState().NodeContent);
//       }
//     } else if (part.event === ChatEventType.CONVERSATION_CHAT_COMPLETED) {
//        setNodeContent(JSON.stringify(part.data.usage))
//       // console.log(part.data.usage);
//     } else if (part.event === ChatEventType.DONE) {
//       setNodeContent(part.data)
//       // console.log(part.data);
//     } else if (part.event === ChatEventType.ERROR) {
//       setNodeContent(JSON.stringify(part.data))
//       // console.error(part.data);
//     }
//    }
   
// }

// export {
//   quickChat
// }