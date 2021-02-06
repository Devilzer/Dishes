import userReducer from "./reducers/userReducer";
import dishReducer from "./reducers/dishReducer";

import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    user : userReducer,
    dish : dishReducer,
    
});

const persistConfig = {
    key : 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig,rootReducer);

export default rootReducer;
