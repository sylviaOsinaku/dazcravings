import classes from './Header.module.css';
import HeaderImageRotator from './HeaderImageRotator';

const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.h1}>
        Cake doesn’t settle well when
        <br /> it’s all you’ve had to eat.
      </h1>
      <p className={classes.p}>
        You can’t get the icing off your tongue, the smell of batter baking has
        festered in your nostrils wired to the pungent taste of red from between
        your teeth.
      </p>
      <HeaderImageRotator />
    </header>
  );
};

export default Header;
