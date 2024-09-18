// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';


export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);

  // Abre el menú al hacer clic en el icono del menú
  // const handleMenuClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // Cierra el menú
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='transparent'  >
        <Toolbar>
          {/* Menú hamburguesa: solo visible en pantallas pequeñas */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            // onClick={handleMenuClick}
            sx={{ 
              mr: 2, 
              display: { xs: 'block', md: 'none' }  // Visible solo en pantallas pequeñas
            }}
          >
            <MenuIcon />
          </IconButton>

          <Typography 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }} // Oculto en pantallas pequeñas
          >
            Atómico3
          </Typography>

          {/* Botones: ocultos en pantallas pequeñas, visibles en medianas y grandes */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <a color="inherit" href='/'>Home</a>
            <Button color="inherit" className='sign'>About</Button>
            {/* Añadir más botones aquí */}
            <a color="inherit" href='/terms '>Terms</a>
            <Button color="inherit">Contact</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Menú desplegable para pantallas pequeñas */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleCloseMenu}>Login</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Sign Up</MenuItem>
        {/* Añadir más elementos del menú aquí */}
        <MenuItem onClick={handleCloseMenu}>About</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Contact</MenuItem>
      </Menu>
    </Box>
  );
}
