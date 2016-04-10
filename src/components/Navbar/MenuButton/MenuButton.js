import React from 'react';
import { Link } from 'react-router'

import './MenuButton.less';

class MenuButton extends React.Component {
  render() {
    return (
      <Link to="/menu">
        <button className="Menu__button btn btn-default btn-lg">
          <span className="Menu__button-icon glyphicon glyphicon-menu-hamburger"></span>
        </button>
      </Link>
    );
  };
}

export default MenuButton;
