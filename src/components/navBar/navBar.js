import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Tab, Tabs } from '@mui/material';
import { Home } from '../../pages';
import { buttonStyle, design, TabPanel } from './style';
import { About } from '../../pages/about';
import { Skills } from '../../pages/skills';
import { Expertize } from '../../pages/expertize';
import { Timeline } from '../../pages/timeline';
import { Contact } from '../../pages/contact';
import './style.css';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  indicator: {
    backgroundColor: '#eb523d !important',
  },
}));

const NavBar = () => {
  const classes = useStyles();
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
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: 'none', sm: 'block' },
                fontFamily: 'inherit',
                fontWeight: 900,
                marginLeft: '30px',
                marginTop: '10px'
              }}
              fontSize={30}
            >
              Welcome
            </Typography>
            <Tabs
              value={value}
              onChange={handleOnChange}
              sx={{ color: 'white' }}
              TabIndicatorProps={{
                color: 'black',
                className: classes.indicator,
              }}
            >
              <Tab
                label="Home"
                className={value !== 0 ? "button" : ""}
                style={{
                  ...buttonStyle,
                  color: value === 0 ? '#eb523d' : 'white',
                }}
                {...design(0)}
              />
              <Tab
                label="About"
                className={value !== 1 ? "button" : ""}
                style={{
                  ...buttonStyle,
                  color: value === 1 ? '#eb523d' : 'white',
                }}
                {...design(1)}
              />
              <Tab
                label="Timeline"
                className={value !== 2 ? "button" : ""}
                style={{
                  ...buttonStyle,
                  color: value === 2 ? '#eb523d' : 'white',
                }}
                {...design(2)}
              />
              <Tab
                label="Expertize"
                className={value !== 3 ? "button" : ""}
                style={{
                  ...buttonStyle,
                  color: value === 3 ? '#eb523d' : 'white',
                }}
                {...design(3)}
              />
              <Tab
                label="Skills"
                className={value !== 4 ? "button" : ""}
                style={{
                  ...buttonStyle,
                  color: value === 4 ? '#eb523d' : 'white',
                }}
                {...design(4)}
              />
              <Tab
                label="Contact"
                className={value !== 5 ? "button" : ""}
                style={{
                  ...buttonStyle,
                  color: value === 5 ? '#eb523d' : 'white',
                }}
                {...design(5)}
              />
            </Tabs>
          </Toolbar>
        </AppBar>
      </Box>
      <br />
      <TabPanel value={value} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <About />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Timeline />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Expertize />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Skills />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Contact setValue={setValue} />
      </TabPanel>
    </div>
  );
};

export default NavBar;
