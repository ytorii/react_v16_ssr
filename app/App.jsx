import React, { Component } from 'react';
import LongTextList from './LongTextList'

export default class App extends Component {
  render() {
    return (
      [
        <h1 key='header'>Hello SSR!</h1>,
        <LongTextList count={5000} />
      ]
    );
  }
}
