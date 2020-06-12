import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import Navbar from "./Routes/Navbar";
import Routes from "./Routes/Routes";
export default function App() {
  console.log(store.getState());

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <h1 className="row d-flex justify-content-center mt-3">
            Expense Manager
          </h1>
          <Navbar />
          <Routes />
        </div>
      </Provider>
    </BrowserRouter>
  );
}
