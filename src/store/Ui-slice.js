import {createSlice} from "@reduxjs/toolkit"

const initialUIslice = {
        cartIsvisible:false,
        notification: null
}

const UIslice = createSlice({
    name: 'ui',
    initialState: initialUIslice,
    reducers:{
        toggle(state){
            state.cartIsvisible = !state.cartIsvisible
        },
        showNotification(state,action){
            state.notification = {status: action.payload.status,
                 title: action.payload.title, 
                message: action.payload.message}
        }
        }
})

export const UIAction = UIslice.actions
export default UIslice.reducer