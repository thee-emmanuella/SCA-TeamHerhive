import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import AudioContextProvider from './Contexts/AudioContext'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <AudioContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AudioContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
