import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import { persistStore } from "redux-persist";

const store = createStore(rootReducer,composeWithDevTools());
const persistor = persistStore(store);

export {store, persistor};