import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';

export class App extends Component {
  render() {
    return (
      <div>
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
