import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import account from "./accounts";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["account"],
};

const allReducers = combineReducers({
  account
});

const persistedReducer = persistReducer(persistConfig, allReducers);
const store = createStore(
  persistedReducer
);
const persistor = persistStore(store);

export { store, persistor };
