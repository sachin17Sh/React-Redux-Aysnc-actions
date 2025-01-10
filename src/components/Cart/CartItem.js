import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartAction } from '../../store/CartSlice';

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch()

  const additemhandler=() =>{
    dispatch(cartAction.addItemtoCart({
      id,
      title,
      price
    }))
  }
  const removeitemhandler=()=>{
    dispatch(cartAction.removeItemToCart(id))
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeitemhandler}>-</button>
          <button onClick={additemhandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
