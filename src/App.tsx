import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { CozeWebSdk } from "./components/CozeWebSdk";

function App() {
  return (
    <BrowserRouter>
      <div style={{ height: "100%", width: "100%", background: "green" }}>
        <CozeWebSdk
          propData={{
            config_botId: "7442276476630171688",
            ui_asstBtn_isNeed: "true",
            ui_chatBot_width: "80%"
          }}
          propState={{}}
          event={{
            onChatBotHide: () => {

              console.log(11);

            },
            onChatBotShow: () => {
              console.log(22);
            }
          }}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
