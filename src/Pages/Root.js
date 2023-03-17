import { Outlet } from 'react-router-dom';
import React from 'react';
import MainNavigation from '../Components/Nav/MainNavigation';

const Root = () => {
  return (
    <React.Fragment>
      <MainNavigation />
      <Outlet />
    </React.Fragment>
  );
};

export default Root;
