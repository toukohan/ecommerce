import { Outlet, Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import useAuth from '../hooks/useAuth';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

import MenuIcon from '@mui/icons-material/Menu';

const sections =[
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Contact', url: '/contact' },
    { title: 'Blog', url: '/blog' },
    { title: 'Careers', url: '/careers' },

]

const NavBar = () => {
  const { userData } = useContext(UserContext);
  const { signOut } = useAuth();


  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
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
        <Button onClick={() => console.log(userData)} variant="outlined" size="small">
          Test user data
        </Button>
        <IconButton>
          <SearchIcon />
        </IconButton>
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
      </Toolbar>
      <Toolbar
        component="nav"
        variant="regular"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
           
            to={section.url}
            key={section.title}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
      <Outlet />
    </>
  );
};

export default NavBar;