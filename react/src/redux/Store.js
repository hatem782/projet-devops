import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";

import thunk from "redux-thunk";
import { TasksReducers } from "./Tasks.reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const allReducers = combineReducers({
  TasksReducers,
});

const store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)));

export { store };
