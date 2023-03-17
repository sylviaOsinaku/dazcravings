import React, { useState, useEffect } from 'react';
import CartContext from './CartContext';

const CartProvider = props => {
  const [CartItem, setCartItem] = useState([]);
  const [cartTotalAmount, setCartTotalAmount] = useState([0]);

  useEffect(() => {
    const calculateTotalAmount = () => {
      const total = CartItem.map(item => item.amount * item.price);
      return total;
    };

    setCartTotalAmount(calculateTotalAmount);
  }, [CartItem]);

  const addItemHandler = cartitem => {
    const existingCartItem = CartItem.find(item => item.id === cartitem.id);
    if (existingCartItem) {
      existingCartItem.amount += cartitem.amount;
      setCartItem(
        CartItem.map(item => (item.id === cartitem.id ? { ...item } : item))
      );
    } else {
      setCartItem(prevData => {
        return [...prevData, cartitem];
      });
    }
  };

  const removeItemFromCart = itemId => {
    const existingCartItem = CartItem.find(item => item.id === itemId);
    if (existingCartItem.amount === 1) {
      setCartItem(CartItem.filter(item => item.id !== itemId));
    } else {
      setCartItem(
        CartItem.map(item =>
          item.id === itemId ? { ...item, amount: item.amount - 1 } : item
        )
      );
    }
  };

  const cartContent = {
    cartItems: CartItem,
    totalAmount: cartTotalAmount?.reduce((acc, cur) => acc + cur, 0),
    addItem: addItemHandler,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContent}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
