import { configureStore } from '@reduxjs/toolkit'
import { hospitalDetailApi } from './../store/hospital/hospital-detail-api'
import { hospitalsApi } from './features/hospital/hospitals-api'

export const store = configureStore({
  reducer: {
    [hospitalDetailApi.reducerPath]: hospitalDetailApi.reducer,
    [hospitalsApi.reducerPath]: hospitalsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hospitalDetailApi.middleware)
    .concat(hospitalsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch