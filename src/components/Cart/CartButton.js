import classes from './CartButton.module.css';
import { UIAction } from '../../store/Ui-slice';
import {useDispatch, useSelector} from "react-redux"


const CartButton = (props) => {

const dispatch = useDispatch();

const toggleCartHandler =()=>{
  dispatch(UIAction.toggle());
}
const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <button className={classes.button} onClick ={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
