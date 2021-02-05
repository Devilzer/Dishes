import userReducer from "./reducers/userReducer";
import dishReducer from "./reducers/dishReducer";
import uiReducer from "./reducers/uiReducer";
import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    user : userReducer,
    dish : dishReducer,
    ui : uiReducer
});

const persistConfig = {
    key : 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig,rootReducer);

export default rootReducer;
