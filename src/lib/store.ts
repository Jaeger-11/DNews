import { configureStore } from '@reduxjs/toolkit'
import contentReducer from './features/contentSlice';
import userReducer from "./features/userSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
        content : contentReducer,
        user : userReducer
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']