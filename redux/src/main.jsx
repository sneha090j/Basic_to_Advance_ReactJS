import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {legacy_createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './Services/Reducer/index.jsx'

const store=legacy_createStore(rootReducer)
console.log('store data',store)
ReactDOM.createRoot(document.getElementById('root')).render(
 
    <Provider store={store}>
    <App />
    </Provider>
)
