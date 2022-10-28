import React, { useState } from 'react';
import {
  AppBar, Box, Toolbar, IconButton,
  Typography, Tab, Tabs,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Home } from '../../pages';
import {
  buttonStyle, design, Search,
  SearchIconWrapper,
  StyledInputBase, TabPanel,
} from './style';

const NavBar = () => {
  const [value, setValue] = useState(0);

  const handleOnChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1, height: 20 }}>
        <AppBar
          position="static"
          sx={{ color: 'white', backgroundColor: 'black' }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              My Portifolio
            </Typography>
            <Tabs
              value={value}
              onChange={handleOnChange}
              sx={{ color: 'white' }}
            >
              <Tab label="Home" sx={buttonStyle} {...design(0)} />
              <Tab label="About" sx={buttonStyle} {...design(1)} />
              <Tab label="Timeline" sx={buttonStyle} {...design(2)} />
              <Tab label="Expertize" sx={buttonStyle} {...design(3)} />
              <Tab label="Skills" sx={buttonStyle} {...design(4)} />
              <Tab label="Contact" sx={buttonStyle} {...design(5)} />
            </Tabs>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
      <br />
      <TabPanel value={value} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={value} index={1}>
         About Page
      </TabPanel>
      <TabPanel value={value} index={2}>
         Timeline Page
      </TabPanel>
      <TabPanel value={value} index={3}>
         Expertize Page
      </TabPanel>
      <TabPanel value={value} index={4}>
         Skills Page
      </TabPanel>
      <TabPanel value={value} index={5}>
         Contact Page
      </TabPanel>
    </div>
  );
};

export default NavBar;
