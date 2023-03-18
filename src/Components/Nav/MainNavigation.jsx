import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import CartButton from '../Carts/CartButton';
import classes from './MainNavigation.module.css';
import menuIcon from '../../icons/icon-hamburger.svg';
const MainNavigation = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <header>
      <nav className={classes.nav}>
        <span className={classes.logo}>Cravings</span>

        <div>
          <img
            src={menuIcon}
            alt=""
            className={classes['menu-icon']}
            onClick={() => {
              setShowMobileNav(!showMobileNav);
            }}
          />
          <motion.div
            transition={{
              opacity: { ease: 'linear' },
              layout: { duration: 0.3 },
            }}
            layout
            className={
              showMobileNav
                ? classes['mobilenav']
                : classes['nav_inner_wrapper']
            }
          >
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
            <NavLink
              to="./carts"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              <CartButton />
            </NavLink>
          </motion.div>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
