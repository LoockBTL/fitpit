import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import store from './redux/store'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header/index'
import App from './components/app/index'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <App />
    </BrowserRouter>
  </Provider>
)
