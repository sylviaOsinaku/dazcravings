import React, { useContext } from 'react';
import cartIcon from '../../icons/icon-cart.svg';
import CartContext from '../../Store/CartContext';
import classes from './CartButton.module.css';
const CartButton = () => {
  const ctx = useContext(CartContext);
  const totalCart = ctx.cartItems
    .map(cart => cart.amount)
    .reduce((acc, cur) => acc + cur, 0);
  return (
    <div className={classes.button}>
      <img src={cartIcon} alt="" className={classes.icon} />
      <span>Your Cart</span>
      <span className={classes.badge}>{totalCart}</span>
    </div>
  );
};
export default CartButton;
