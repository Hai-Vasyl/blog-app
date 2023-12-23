import React from "react";
import { ModalComponent, RouterComponent } from "./components";
import { Provider } from "react-redux";
import { store } from "./redux";

export const App = () => {
  return (
    <Provider store={store}>
      <RouterComponent />
      <ModalComponent />
    </Provider>
  );
};

export default App;
