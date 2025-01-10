import { UIAction } from "./Ui-slice";
import { cartAction } from "./CartSlice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://fir-cd915-default-rtdb.firebaseio.com/cart.json', {
                method: 'GET'
            });
            if (!response.ok) {
                throw new Error("Can't fetch the data")
            }
            const data = await response.json()
            return data
        }
        try {
            const cartData = await fetchData();
            dispatch(cartAction.replaceCart({
                items: cartData.items||[],
                totatQuantity: cartData.totatQuantity   
            }))
        } catch (error) {
            dispatch(
                UIAction.showNotification({
                    status: 'fail',
                    title: 'Failed!',
                    message: 'Fetching data failed!'
                }))
        }
    }

}




export const sentCartData = (cart) => {
    return async (dispatch) => {
        dispatch(UIAction.showNotification({
            status: 'pending',
            title: 'Sending',
            message: 'Sending the data!'
        })
        );

        const sendRequest = async () => {
            const response = await fetch('https://fir-cd915-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart),
            }
            );
            if (!response.ok) {
                throw new Error('Sending cart data failed!')
            }
        };
        try {
            await sendRequest();
            dispatch(
                UIAction.showNotification({
                    status: 'Success',
                    title: 'Success!',
                    message: 'Cart Data sent successfully!'
                })
            )

        } catch (error) {
            dispatch(
                UIAction.showNotification({
                    status: 'fail',
                    title: 'Failed!',
                    message: 'Sending data failed!'
                })
            )
        }


    }
}