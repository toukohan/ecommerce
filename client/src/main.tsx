import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserProvider } from './context/UserProvider'

import App from './App'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
