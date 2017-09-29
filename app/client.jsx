import React from 'react';
import App from 'App';
import { hydrate } from "react-dom"
import { render } from "react-dom"

const props = window.APP_PROPS

hydrate(<App items={props} />, document.getElementById('app'))
