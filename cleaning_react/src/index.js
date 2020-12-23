import React , {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './i18next'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { combineReducers, compose, createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import authReducer from './store/reducers/auth'
const rootReducer = combineReducers({
  auth:authReducer,
  // event:eventsRedcers,
  // booking:bookingsReducers
})
// process.env.NODE_ENV === 'development'? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: null || compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
))


ReactDOM.render(
  <Suspense fallback={(<div>Loading~~~~~~~</div>)}>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </Suspense>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
