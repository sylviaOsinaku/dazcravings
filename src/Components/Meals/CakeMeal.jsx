import Card from '../Layouts/Card';
import classes from './CakeMeal.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const CakeMeal = props => {
  const cakePrice = `₦${props.price.toFixed(2)}`;
  return (
    <Card key={props.id} onClick={props.onClick}>
      <LazyLoadImage
        src={props.image}
        alt=""
        className={classes['meals-img']}
        effect="blur"
      />
      <div className={classes['details-container']}>
        <div>
          <p className={classes.p}>{props.cakeName}</p>
          <p className={classes.p}>my love</p>
        </div>
        <span>{cakePrice}</span>
      </div>
    </Card>
  );
};

export default CakeMeal;
