import React, { useState, useContext } from 'react';
import CartContext from '../../Store/CartContext';
import Modal from '../Layouts/Modal';
import classes from './DisplayInnerMeal.module.css';

const DisplayInnerMeal = props => {
  const modalData = props.innerItem;
  const ctx = useContext(CartContext);
  const [cartCount, setCartCount] = useState(0);
  const addCartHandler = () => {
    setCartCount(prevCount => (prevCount += 1));
  };
  const removeCartHandler = () => {
    setCartCount(prevCount => {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  };

  const addToCartHandler = () => {
    ctx.addItem({
      cakeName: modalData.cakeName,
      image: modalData.image,
      price: modalData.price,
      id: modalData.id,
      amount: cartCount,
      variations: [],
      cartImage: modalData['cart-image'],
    });
    console.log(ctx);
    props.onConfirm();
  };

  return (
    <Modal onConfirm={props.onConfirm}>
      <div className={classes.wrapper}>
        <img src={modalData.image} alt="" className={classes.img} />
        <div>
          <h2>{modalData.cakeName}</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            porro ipsam doloribus.
          </p>
          <div>
            {'blue'} {'green'} {'yellow'}
          </div>
          <div>
            <button onClick={addCartHandler} className={classes.button}>
              +
            </button>
            <span className={classes.num}>{cartCount}</span>
            <button onClick={removeCartHandler} className={classes.button}>
              -
            </button>
          </div>
          <div>
            <button onClick={addToCartHandler} className={classes.button}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DisplayInnerMeal;
