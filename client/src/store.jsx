import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import permissionsReducer from "./reducers/permissionsReducer"
import rolesReducer from "./reducers/rolesReducer"
import userReducer from "./reducers/userReducer"

const rootReducer = combineReducers({
  permissions: permissionsReducer,
  roles: rolesReducer,
  users: userReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
