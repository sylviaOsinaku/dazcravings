import classes from './CartSummary.module.css';
const CartSummary = props => {
  const TotalPrice = `₦${props.price.toFixed(2)}`;
  return (
    <div className={classes['summary-container']}>
      <div className={classes['amount-container']}>
        <p>Total Amount</p>
        <p>{TotalPrice}</p>
      </div>

      <button>Checkout</button>
    </div>
  );
};

export default CartSummary;
