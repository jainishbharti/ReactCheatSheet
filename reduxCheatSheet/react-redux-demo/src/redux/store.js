import { legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "../redux/rootReducer";
import { applyMiddleware } from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";

export const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
