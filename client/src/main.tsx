import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserProvider } from './context/UserProvider'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './App'
import './index.scss'

const store = configureStore();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Provider store={store}>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Provider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
