import React, { Component } from 'react';
import LongTextList from './LongTextList'
import RecursiveDivs from './RecursiveDivs'

export default class App extends Component {
  render() {
    return (
      [
        <h1 key='header'>React SSR v16</h1>,
        <RecursiveDivs depth={4} breadth={11} />
      ]
    );
  }
}
