// import { configureStore } from '@reduxjs/toolkit'
import { createStore } from 'redux';

// importing reducers from folder reducers
import UserReducer from './reducers/user.reducer'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer, persistCombineReducers } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistCombineReducers(persistConfig, { user: UserReducer })
let store = createStore(persistedReducer)
let persistor = persistStore(store)
export { store, persistor }