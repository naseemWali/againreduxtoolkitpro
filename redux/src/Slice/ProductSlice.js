import { createSlice } from '@reduxjs/toolkit'


const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        product:[],
    },

    reducers: {
      
     addproduct:(state,action)=>{
        state.product=action.payload
     }

    },
    })
  
export const {addproduct } = todosSlice.actions
export default todosSlice.reducer