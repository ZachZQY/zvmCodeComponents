import { importShared } from './__federation_fn_import-lyDSGtOx.js';

const constate = await importShared('constate');

const createModel = function (model) {
    const [Provider, useModel] = (constate?.default || constate)(model);
    return { Provider, useModel };
};

const APP_COMPONENT_ID = 'App';
const ContextModel = createModel(function ContextModel({ component, query, }) {
    const engine = component.engine;
    const si = engine.systemInterface;
    const discover = (compId) => {
        return component.discover(compId);
    };
    const navigate = (path, config) => {
        si.navigate(path);
    };
    const appComponent = component.discover(APP_COMPONENT_ID);
    const appCompVariables = appComponent.state || appComponent.variables;
    const globalData = appCompVariables?.App_CustomState.get();
    const pageComponent = engine.root.getPage();
    const pageCompVariables = pageComponent.state || pageComponent.variables;
    const pageData = pageCompVariables.Page_CustomState;
    return { component, discover, query, navigate, globalData, pageData };
});
const AppContextProvider = ContextModel.Provider;
function useAppContext() {
    return ContextModel.useModel();
}

export { APP_COMPONENT_ID, AppContextProvider, ContextModel, useAppContext };
