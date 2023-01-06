import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import SortingAlgorithm from "./components/SortingAlgorithm";

function App() {
  return (
    <Provider store={store}>
      <SortingAlgorithm />
    </Provider>
  );
}

export default App;
