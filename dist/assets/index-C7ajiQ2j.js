import { importShared } from './__federation_fn_import-lyDSGtOx.js';
import { j as jsxRuntimeExports, C as CozeWebSdk } from './CozeWebSdk-YQ2h0hPp.js';
import { r as reactDomExports } from './__federation_shared_react-dom-ChyTJqHm.js';

var client = {};

var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}

const {BrowserRouter} = await importShared('react-router-dom');
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserRouter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: "100%", width: "100%", background: "green" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    CozeWebSdk,
    {
      propData: {
        config_botId: "7442276476630171688",
        ui_asstBtn_isNeed: "true",
        ui_chatBot_width: "80%"
      },
      propState: {},
      event: {
        onChatBotHide: () => {
          console.log(11);
        },
        onChatBotShow: () => {
          console.log(22);
        }
      }
    }
  ) }) });
}

const React = await importShared('react');
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
