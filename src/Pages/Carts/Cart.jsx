import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import CartContext from '../../Store/CartContext';
import CartSummary from './CartSummary';
import CompleteCart from './CompleteCart';
import EmptyCart from './EmptyCart';
import classes from './Cart.module.css';

const Cart = () => {
  const ctx = useContext(CartContext);
  const hasCatalog = ctx.cartItems.length > 0;
  const totalCart = ctx.cartItems
    .map(cart => cart.amount)
    .reduce((acc, cur) => acc + cur, 0);
  const removeItemHandler = id => {
    ctx.removeItem(id);
  };
  return (
    <React.Fragment>
      <h1>Shopping Cart ({totalCart})</h1>

      {!hasCatalog && <EmptyCart />}

      {hasCatalog && (
        <Container className={classes['cart-container']}>
          <div>
            {ctx.cartItems.map(cartitem => {
              return (
                <CompleteCart
                  key={cartitem.id}
                  cartImage={cartitem.cartImage}
                  price={cartitem.price}
                  amount={cartitem.amount}
                  cakeName={cartitem.cakeName}
                  onRemove={removeItemHandler.bind(null, cartitem.id)}
                  id={cartitem.id}
                />
              );
            })}
          </div>

          <CartSummary price={ctx.totalAmount} />
        </Container>
      )}
    </React.Fragment>
  );
};

export default Cart;
