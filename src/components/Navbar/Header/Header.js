import React from 'react';
import './Header.less';

class Header extends React.Component {
  render() {
    return (
      <div className="Header row">
        <div className="col-lg-12 text-center">
          <h3 className="Header__title">
            WANNABET
          </h3>
        </div>
      </div>
    );
  };
}

export default Header;
