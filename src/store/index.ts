import { configureStore } from '@reduxjs/toolkit'
import dummyReducer from '@/store/slices/dummySlice'

export const store = configureStore({
  reducer: {
    dummy: dummyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch