import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navbar from './components/navbar/Navbar'
import Login from './pages/login/Login'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Navbar />
        {/* <Login /> */}
        <App />
    </React.StrictMode>
)
