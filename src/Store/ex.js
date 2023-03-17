import React, { useState } from 'react';

const updateCartItem = () => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = item => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeItemFromCart = itemId => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  {
    cartItems.map(item => (
      <div key={item.id}>
        <p>{item.name}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Price: {item.price}</p>
        <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
      </div>
    ));
  }
};
// function updateCartItem(cartItems, itemToUpdate, quantityChange) {
//   const existingCartItem = cartItems.find(item => item.id === itemToUpdate.id);

//   if (existingCartItem) {
//     const updatedQuantity = existingCartItem.quantity + quantityChange;

//     if (updatedQuantity === 0) {
//       // Remove the item from the cart if the quantity is zero
//       return cartItems.filter(item => item.id !== itemToUpdate.id);
//     } else {
//       // Update the quantity of the existing item in the cart
//       return cartItems.map(item => {
//         if (item.id === itemToUpdate.id) {
//           return { ...item, quantity: updatedQuantity };
//         } else {
//           return item;
//         }
//       });
//     }
//   } else {
//     // Add the item to the cart if it doesn't already exist
//     return [...cartItems, { ...itemToUpdate, quantity: 1 }];
//   }
// }

export default updateCartItem;
