import { configureStore } from '@reduxjs/toolkit'
import CreateFormSlice from './DragDrop'
import { getDefaultMiddleware } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    builder: CreateFormSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
  // middleware(getDefaultMiddleware) {
  //   return getDefaultMiddleware().concat(pokemonApi.middleware);
  // },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
