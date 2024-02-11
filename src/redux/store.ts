import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './slices';

const rootReducer = combineReducers({
    user: userReducer
})

const store = configureStore({
    devTools: true,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([])
})

export {
    rootReducer
}
export default store;