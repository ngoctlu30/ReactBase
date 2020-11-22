import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import rootReducer from "./modules/reducer";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["auth"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
	const store = createStore(persistedReducer, applyMiddleware(thunk));
	const persistor = persistStore(store);
	return { store, persistor };
}
