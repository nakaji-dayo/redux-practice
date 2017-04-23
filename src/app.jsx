import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App.jsx'
import Home from './containers/Home'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './configureStore'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)


window.onerror = function(message, url, lineNum) {
  console.log('report fatal error');
};
