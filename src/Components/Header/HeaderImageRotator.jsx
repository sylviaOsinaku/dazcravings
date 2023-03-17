import { Carousel } from 'react-bootstrap';
import classes from './HeaderImageRotator.module.css';
import cake1 from '../../img/cake-1.jpeg';
import cake2 from '../../img/cake-2.jpeg';
import cupcake1 from '../../img/cupcake-1.jpeg';
import cupcake2 from '../../img/cupcake-2.jpeg';
import dough1 from '../../img/doughnut-3.jpeg';
import dough2 from '../../img/doughnut-2.jpeg';

const HeaderImageRotator = () => {
  return (
    <div className={classes.slider}>
      <Carousel>
        <Carousel.Item interval={1000}>
          <div
            style={{ backgroundImage: `url(${cake1})` }}
            className={classes.hero}
          >
            <div className={classes.image_overlay}></div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <div
            style={{ backgroundImage: `url(${cake2})` }}
            className={classes.hero}
          >
            {' '}
            <div className={classes.image_overlay}></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{ backgroundImage: `url(${cupcake1})` }}
            className={classes.hero}
          >
            {' '}
            <div className={classes.image_overlay}></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{ backgroundImage: `url(${cupcake2})` }}
            className={classes.hero}
          >
            <div className={classes.image_overlay}></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{ backgroundImage: `url(${dough1})` }}
            className={classes.hero}
          >
            {' '}
            <div className={classes.image_overlay}></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{ backgroundImage: `url(${dough2})` }}
            className={classes.hero}
          >
            {' '}
            <div className={classes.image_overlay}></div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default HeaderImageRotator;
