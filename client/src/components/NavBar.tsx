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

  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          Hello
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
         Sign up
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </>
  );
};

export default NavBar;