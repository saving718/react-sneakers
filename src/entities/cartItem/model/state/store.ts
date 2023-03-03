import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createWrapper } from "next-redux-wrapper";

const rootReducer = combineReducers({
	cart: cartReducer,
});
const persistConfig = {
	key: "root",
	storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: any = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});
const makeStore = () => {
	const isServer = typeof window === "undefined";

	if (isServer) {
		return store;
	} else {

		store.__persistor = persistStore(store);
		return store;
	}
};
export const wrapper = createWrapper(makeStore);

export type RootState = ReturnType<typeof store.getState>;
