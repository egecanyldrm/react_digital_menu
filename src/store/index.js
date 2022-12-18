import { configureStore } from '@reduxjs/toolkit'
import DataReducer from './reducers/DataReducer'
export const store = configureStore({
    reducer: {
        data: DataReducer
    },
})