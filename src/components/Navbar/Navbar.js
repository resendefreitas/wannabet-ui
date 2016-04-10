import React from 'react';

import Header from './Header/Header';
import MenuButton from './Menu/MenuButton';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MenuButton />
      </div>
    );
  };
}

export default Navbar;
