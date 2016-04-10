import React from 'react';
import { NICE, SUPER_NICE } from './colors';

import Navbar from './components/Navbar/Navbar';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>
          Home
        </h1>
      </div>
    );
  }
}

export default App;
