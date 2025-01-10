import { createSlice } from "@reduxjs/toolkit"
const initialCartSlice = {
    items: [],
    totalQuantity: 0,
    changed: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartSlice,
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity || 0;
            state.items = action.payload.items  || [];
        },
        
        addItemtoCart(state, action) {
            const newItem = action.payload; //contain Item to add
            const exitingItem = state.items.find((item) => item.id === newItem.id) //check if the item exists or not 
            state.totalQuantity++;
            state.changed = true;
            if (!exitingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                })
            } else {
                exitingItem.quantity++;
                exitingItem.totalPrice = exitingItem.totalPrice + newItem.price;
            }
        },


        removeItemToCart(state, action) {
            const id = action.payload; //contains item to be remove 
            const exitingItem = state.items.find(item => item.id === id);
            state.changed = true;
            state.totalQuantity--;
            if (exitingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
            } else {
                exitingItem.quantity--;
                exitingItem.totalPrice = exitingItem.totalPrice - exitingItem.price
            }

        }
    }
})

export const cartAction = cartSlice.actions
export default cartSlice.reducer