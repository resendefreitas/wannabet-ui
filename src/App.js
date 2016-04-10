import React from 'react';
import { NICE, SUPER_NICE } from './colors';

import Navbar from './components/Navbar/Navbar';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1 style={{color: NICE}} >
          HELLO
        </h1>
        <h2 style={{color: NICE}} >
          WORLD
        </h2>
      </div>
    );
  }
}

export default App;
