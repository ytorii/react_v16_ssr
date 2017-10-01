import React from 'react';
import App from 'App';
import { hydrate } from "react-dom"
import { render } from "react-dom"

hydrate(<App/>, document.getElementById('app'))
