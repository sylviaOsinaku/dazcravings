import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CartButton from '../Carts/CartButton';
import classes from './MainNavigation.module.css';
import menuIcon from '../../icons/icon-hamburger.svg';
const MainNavigation = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const mobileNavHandler = () => {
    console.log('hey');
    setShowMobileNav(true);
  };

  return (
    <header>
      <nav className={classes.nav}>
        <span className={classes.logo}>Cravings</span>

        <div className={classes.links}>
          <img
            src={menuIcon}
            alt=""
            className={classes['menu-icon']}
            onClick={mobileNavHandler}
          />

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Products
          </NavLink>
        </div>
        <NavLink
          to="./carts"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          <CartButton />
        </NavLink>
      </nav>
    </header>
  );
};

export default MainNavigation;
