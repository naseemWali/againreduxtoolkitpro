import { configureStore } from '@reduxjs/toolkit'
import todosSlice from '../Slice/ProductSlice'

export const store = configureStore({
    reducer: {
    todo:todosSlice,
    },
  })

