import React from 'react';
import { NICE, SUPER_NICE } from './colors';

import Header from './components/Header/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
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
