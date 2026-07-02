import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import User from './component/User.jsx'
import Userproduct from './component/Userproduct.jsx'

createRoot(document.getElementById('root')).render(

    <Userproduct>
<App/>
    </Userproduct>
)
