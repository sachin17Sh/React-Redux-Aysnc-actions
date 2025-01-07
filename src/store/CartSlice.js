import {createSlice} from "@reduxjs/toolkit"

const initialCartSlice = {
            items:[],
            totalQuantity:0

}

const cartSlice = createSlice({
    name:'cart',
    initialState:initialCartSlice,
    reducers:{
        addItemtoCart(state, action) {
            const newItem = action.payload;
            const exitingItem = state.items.find(item=> item.id == newItem.id)
            if(!exitingItem){
                state.items.push({
                    itemId: newItem.id,
                    price:newItem.price,
                    quantity:1,
                    totalPrice: newItem.price,
                    name: newItem.title
                })
            } else {
                exitingItem.quantity++
                exitingItem.totalPrice = exitingItem.totalPrice + newItem.price;
            }


        },
        removeItemToCart(state, action) {
            const id = action.payload;
            const exitingItem = state.items.find(item=> item.id ==id);
            if (exitingItem.quantity ===1) {
                state.items = state.items.filter(item=>item.id !== id)
            } else {
                exitingItem--
                exitingItem.totalPrice = exitingItem.totalPrice -exitingItem.price
            }

        }
    }
})

export const cartAction = cartSlice.actions
export default cartSlice.reducer