import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = ['Home', 'New`s', 'Catagories', 'Donate'];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        width: 250,
        height: '100%',
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        p: 2,
      }}
      role="presentation"
    >
      <Typography variant="h6" sx={{ mb: 4, color: 'primary.main', cursor: 'pointer' }}>
        MyLogo
      </Typography>
      <List sx={{ flexGrow: 1 }}>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2, borderRadius: 1 }}
        fullWidth
      >
        Pull
      </Button>
    </Box>
  );

  return (
    <>
      <AppBar position="static"  component="nav" sx={{height:"4rem",bgcolor:"black"}}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between',width:"80%",mx:"auto", }}>
          <Typography variant="h6" component="div" sx={{ cursor: 'pointer',fontSize:"2rem" }}>
            OpenDatasets
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              {navItems.map((item) => (
                <Button key={item} color="inherit">
                  {item}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>


      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
