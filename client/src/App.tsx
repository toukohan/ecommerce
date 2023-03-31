import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import About from './pages/About'
import ProductList from './components/ProductList'
import Dashboard from './pages/Dashboard'
import Protected from './components/Protected'

function App() {

  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<ProductList />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="profile" element={<Profile />} />
        <Route path="dashboard" 
              element={<Protected>
                          <Dashboard />
                       </Protected>} />
        <Route path="*" element={<NotFound />} />
      </Route>

    </Routes>
  )
}

export default App
