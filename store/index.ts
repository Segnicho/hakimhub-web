import { configureStore } from '@reduxjs/toolkit'
import { hospitalDetailApi } from './../store/hospital/hospital-detail-api'

export const store = configureStore({
  reducer: {
    [hospitalDetailApi.reducerPath]: hospitalDetailApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hospitalDetailApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch