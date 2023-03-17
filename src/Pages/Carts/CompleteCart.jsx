import classes from './CompleteCart.module.css';
import minusSign from '../../icons/icon-minus.svg';
const CompleteCart = props => {
  const cakePrice = `₦${props.price.toFixed(2)}`;
  return (
    <div className={classes['complete-cart-container']}>
      <div style={{ display: 'flex', gap: '.3em' }}>
        <img src={props.cartImage} alt="" className={classes['cart-imge']} />

        <p>{props.cakeName}</p>
      </div>
      <div>
        <p>{cakePrice}</p>
        <small>&#215;{props.amount}</small>
        <button onClick={props.onRemove}>
          <img src={minusSign} alt="Minus sign" />
        </button>
      </div>
    </div>
  );
};

export default CompleteCart;
