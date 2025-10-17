import React from 'react';
import Header from '../Pages/Header';

const NavBarSetUp = (Component) => {
  return (props) => (
    <>
      <Header />
      <Component {...props} />
    </>
  );
};

export default NavBarSetUp;
