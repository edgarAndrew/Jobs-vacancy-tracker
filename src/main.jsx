import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux"
import store from "./store"
import {Provider as AlertProvider,positions,transitions} from 'react-alert'
import AlertTemplate from "react-alert-template-basic"

const options = {
  position:positions.BOTTOM_CENTER,
  timeout:3500,
  transition:transitions.SCALE
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </Provider>
)
