import { configureStore } from '@reduxjs/toolkit'
import templeReducer from './slices/currentTemples'

const store = configureStore({
    reducer: {
        temples: templeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store