import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { phonebookReducer } from "./phonebook/";
// import storage from "redux-persist/lib/storage";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

// const contactsPersistConfig = {
//   key: "contacts",
//   storage,
//   blacklist: ["filter"],
// };

// const rootReducer = combineReducers({
//   contacts: persistReducer(contactsPersistConfig, phonebookReducer),
// });

const rootReducer = combineReducers({
  contacts: phonebookReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
  // devTools: true,
  devTools: process.env.NODE_ENV === "development",
});

// const persistor = persistStore(store);

// const storeFunc = { store, persistor };

// export default storeFunc;

export default store;
