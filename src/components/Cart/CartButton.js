import classes from './CartButton.module.css';
import { UIAction } from '../../store/Ui-slice';
import {useDispatch} from "react-redux"


const CartButton = (props) => {

const dispatch = useDispatch();

const toggleCartHandler =()=>{
  dispatch(UIAction.toggle());
}

  return (
    <button className={classes.button} onClick ={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
