import {configureStore} from "@reduxjs/toolkit"
import UIreducer from "./Ui-slice"
import CartReducer from "./CartSlice"

const store= configureStore({
    reducer:{
        ui: UIreducer,
        cart: CartReducer

    }
    
})

export default store