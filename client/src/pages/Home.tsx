import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Categories from "../components/Categories";

const Home = () => {
    return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1"gutterBottom>
          Fancy E-Commerce Site
        </Typography>
        <NavBar />
        <Categories />
        <Copyright />
      </Box>
    </Container>
    )
    }

export default Home

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" to="/">
          Fancy 
        </Link>{' '}
        {new Date().getFullYear()}.
      </Typography>
    );
  }