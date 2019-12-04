import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import { compose } from "redux";
import { createEpicMiddleware } from "redux-observable";

import { AppContainer } from "./container";
import rootEpic from "./epics";
import reducers from "./reducers";
import i18n from "./i18n";
import "./index.scss";

// Create instance of redux observable
const epicMiddleware = createEpicMiddleware();

// Setup redux devtool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store with reducer and epic middleware
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic)

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <AppContainer />
    </I18nextProvider>
  </Provider>,
  document.getElementById("root")
);
