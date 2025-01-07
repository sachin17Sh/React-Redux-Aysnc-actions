import {createSlice} from "@reduxjs/toolkit"

const initialUIslice = {
        cartIsvisible:false
}

const UIslice = createSlice({
    name: 'ui',
    initialState: initialUIslice,
    reducers:{
        toggle(state){
            state.cartIsvisible = !state.cartIsvisible
        }
    }
})

export const UIAction = UIslice.actions
export default UIslice.reducer