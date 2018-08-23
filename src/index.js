import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import { AppContainer } from 'react-hot-loader'
import hrl from './img/logo.png'
ReactDOM.render(<App />, document.getElementById('root'));
var heads=document.head || document.getElementsByTagName("head")[0];
var linken=document.createElement('link');
linken.setAttribute("rel", "icon")
linken.setAttribute("href", hrl);
linken.setAttribute("type", "image/png")
heads.appendChild(linken);
// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}

