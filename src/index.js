import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import storeFunc from "./redux/store";

console.log(storeFunc);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeFunc.store}>
      <PersistGate loading={null} persistor={storeFunc.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
