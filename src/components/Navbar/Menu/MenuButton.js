import React from 'react';
import './MenuButton.less';

class MenuButton extends React.Component {
  render() {
    return (
      <button className="Menu__button btn btn-default btn-lg">
        <span className="Menu__button-icon glyphicon glyphicon-menu-hamburger"></span>
      </button>
    );
  };
}

export default MenuButton;
