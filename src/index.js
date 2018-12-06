import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import reducer from "./reducers";
import thunk from "redux-thunk";
import createHistory from 'history/createBrowserHistory'
import { syncHistoryWithStore, routerReducer } from "react-router-redux";
import { BrowserRouter, Route, Switch} from 'react-router-dom'

const store = createStore(reducer, applyMiddleware(thunk, logger));
const history = syncHistoryWithStore(createHistory(), store);


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
