
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import App from './App';
import { ChakraProvider, theme } from '@chakra-ui/react'
import history from './utils/history'
import configureStore from './store/configureStore'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

const initialState = {}
const store = configureStore(initialState, history)
const MOUNT_NODE = document.getElementById('root')


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
  </Provider>,
  MOUNT_NODE
);