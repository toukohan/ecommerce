import { Outlet, Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import useAuth from '../hooks/useAuth';
import { CartContext } from '../context/CartProvider';
import { useSelector, useDispatch } from 'react-redux';
import CartIcon from './CartIcon';
import Cart from './Cart';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

import DashboardIcon from '@mui/icons-material/Dashboard';

const sections =[
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Products', url: '/products' },
    { title: 'Blog', url: '/blog' },
    { title: 'Careers', url: '/careers' },

]

const NavBar = () => {
  const { userData } = useContext(UserContext);
  const { signOut } = useAuth();
  const dispatch = useDispatch();
  const { hidden } = useSelector((state: any) => state.cart);

  return (
    <nav>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Typography
          component="h1"
          variant="h5"
          color="inherit"
          align="left"
          noWrap
          sx={{ flex: 1 }}
        >
          Fancy E-Commerce Site
        </Typography>
        
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Link to="/dashboard">
          <Button>Dashboard</Button>
        </Link>
        {userData && <Link to="/profile">{userData.user.email}</Link>}
        {userData === null ? (
        <Link to="/signin">
        <Button variant="outlined" size="small">
         Sign in
        </Button>
        </Link>
        ) : (
        <Button variant="outlined" size="small" onClick={ signOut }>
          Sign out
        </Button>
        )}
        <Button variant="outlined" size="small" 
          onClick={() => {
            dispatch({ type: 'TOGGLE_CART_HIDDEN'});
          }}>
          <CartIcon  />
        </Button>
        {!hidden && <Cart />}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="regular"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
           
            to={{ pathname: `${section.url}`, search: `?category=all` }}
            key={section.title}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
      <Outlet />
    </nav>
  );
};

export default NavBar;