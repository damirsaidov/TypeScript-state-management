import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './src/features/store'
import asyncReducer from './src/features/asyncSlice'
export const store = configureStore({
  reducer: {
    todo: counterReducer,
    async: asyncReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
