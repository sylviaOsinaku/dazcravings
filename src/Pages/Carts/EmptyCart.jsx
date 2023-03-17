import { useNavigate } from 'react-router-dom';

import emptyCartGif from './CartImgEmp/sad-face-emoji.gif';
import classes from './EmptyCart.module.css';
const EmptyCart = () => {
  const navigateToProduct = useNavigate();
  const navigateHandler = () => {
    navigateToProduct('../products');
  };
  return (
    <div className={classes['empty-cart-container']}>
      <img src={emptyCartGif} alt="" />
      <p>Ọga mi i know say sapa dey but try dey enjoy!</p>
      <small>
        <div className={classes.emptyLink} onClick={navigateHandler}>
          Go back to Products
        </div>
      </small>
    </div>
  );
};

export default EmptyCart;
