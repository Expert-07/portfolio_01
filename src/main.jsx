import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ParallaxProvider } from "react-scroll-parallax";
import AOS from 'aos'
import 'aos/dist/aos.css'

//initialize aos
AOS.init();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ParallaxProvider>
    <App />
  </ParallaxProvider>
  </React.StrictMode>,
)
