import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      [
        <h1 key='header'>Hello SSR!</h1>,
        <div>{this.props.text}</div>
      ]
    );
  }
}
