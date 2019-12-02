import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";

import Spinner from "./shared/components/spinner/spinner";
import AppContainer from "./components/AppContainer";
import reducers from "./reducers";
import i18n from './i18n';
import "./index.scss";

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <AppContainer />
    </I18nextProvider>
  </Provider>,
  document.getElementById("root")
);
