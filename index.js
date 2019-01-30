/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from 'react-dom';
// eslint-disable-next-line import/no-unresolved, import/extensions
/* eslint-enable import/no-extraneous-dependencies */
// Using with webpack
import App from './App'

// eslint-disable-next-line react/no-multi-comp
render(
    <App />,
    document.getElementById('root')
);