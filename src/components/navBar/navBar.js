import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Tab,
  Tabs,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  Divider,
} from "@mui/material";
import { Home } from "../../pages";
import { buttonStyle, design, TabPanel } from "./style";
import { About } from "../../pages/about";
import { Skills } from "../../pages/skills";
import { Expertize } from "../../pages/expertize";
import { Timeline } from "../../pages/timeline";
import { Contact } from "../../pages/contact";
import { makeStyles } from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  indicator: {
    backgroundColor: "#eb523d !important",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const pages = ["HOME", "ABOUT", "TIMELINE", "EXPERTIZE", "SKILL", "CONTACT"];

  const handleOnChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: "black" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "inherit",
                fontWeight: 900,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                marginLeft: "30px",
              }}
              fontSize={30}
            >
              Welcome
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                variant="temporary"
                open={open}
                onClose={handleDrawerClose}
                ModalProps={{
                  keepMounted: true,
                }}
                sx={{
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: 200,
                    color: "white",
                    backgroundColor: "black",
                  },
                }}
              >
                <Box className="drawer">
                  <Toolbar sx={{ fontSize: 20 }}>My Portfolio...</Toolbar>
                  <Divider />
                  <List>
                    {pages.map((item, index) => (
                      <ListItem key={item} disablePadding>
                        <ListItemButton
                          onClick={() => {
                            handleOnChange("", index);
                            handleDrawerClose();
                          }}
                          style={{
                            ...buttonStyle,
                            color: value === index ? "#eb523d" : "white",
                          }}
                        >
                          <ListItemText
                            className={value !== index ? "button" : ""}
                            style={{ justifyContent: "center" }}
                            primary={item}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "inherit",
                fontWeight: 900,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
              fontSize={30}
            >
              Welcome
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Tabs
                value={value}
                onChange={handleOnChange}
                sx={{ color: "white" }}
                TabIndicatorProps={{
                  color: "black",
                  className: classes.indicator,
                }}
              >
                {pages.map((page, index) => (
                  <Tab
                    key={page}
                    label={page}
                    className={value !== index ? "button" : ""}
                    style={{
                      ...buttonStyle,
                      color: value === index ? "#eb523d" : "white",
                    }}
                    {...design(index)}
                  />
                ))}
              </Tabs>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
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
    </>
  );
};

export default NavBar;
