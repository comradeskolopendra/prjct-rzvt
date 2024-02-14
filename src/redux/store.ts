import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userReducer, contentsReducer } from './slices';

const rootReducer = combineReducers({
    user: userReducer,
    contents: contentsReducer
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