import React, { useRef, useState } from "react";
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
import { buttonStyle, design } from "./style";
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

  const handleOnChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const timelineRef = useRef(null);
  const expertizeRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const pages = [
    {
      page: "HOME",
      ref: homeRef,
    },
    {
      page: "ABOUT",
      ref: aboutRef,
    },
    {
      page: "TIMELINE",
      ref: timelineRef,
    },
    {
      page: "EXPERTIZE",
      ref: expertizeRef,
    },
    {
      page: "SKILLS",
      ref: skillsRef,
    },
    {
      page: "CONTACT",
      ref: contactRef,
    },
  ];

  const handleClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <AppBar position="fixed" style={{ backgroundColor: "black" }}>
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
                    {pages.map((element, index) => (
                      <ListItem key={element.page} disablePadding>
                        <ListItemButton
                          onClick={() => {
                            handleClick(element.ref);
                            handleOnChange("", index);
                          }}
                          style={{
                            ...buttonStyle,
                            color: value === index ? "#eb523d" : "white",
                          }}
                        >
                          <ListItemText
                            className={value !== index ? "button" : ""}
                            style={{ justifyContent: "center" }}
                            primary={element.page}
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
                {pages.map((element, index) => (
                  <Tab
                    key={element.page}
                    label={element.page}
                    className={value !== index ? "button" : ""}
                    onClick={() => handleClick(element.ref)}
                    style={{
                      ...buttonStyle,
                      color: value === index ? "#eb523d" : "white",
                    }}
                    {...design(index)}
                  ></Tab>
                ))}
              </Tabs>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={timelineRef}>
        <Timeline />
      </div>
      <div ref={expertizeRef}>
        <Expertize />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={contactRef}>
        <Contact
          handleClick={handleClick}
          {...{ homeRef, aboutRef, timelineRef, expertizeRef, skillsRef }}
        />
      </div>
    </>
  );
};

export default NavBar;
