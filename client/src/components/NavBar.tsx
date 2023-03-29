import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import useAuth from '../hooks/useAuth';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Link
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
  const { user } = useContext(UserContext);
  const { signOut } = useAuth();

  console.log('user', user)

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
        <IconButton>
          <SearchIcon />
        </IconButton>
        {user && <Link sx={{ p: 1 }} href="/profile">{user.user.email}</Link>}
        {user === null ? (
        <Link href="/signin">
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
            color="inherit"
            noWrap
            key={section.title}
            variant="subtitle1"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
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