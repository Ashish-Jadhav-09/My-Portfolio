import React, { useEffect, useRef, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  Divider,
  Button,
} from "@mui/material";
import { Home } from "../../pages";
import { buttonStyle } from "./style";
import { About } from "../../pages/about";
import { Skills } from "../../pages/skills";
import { Expertize } from "../../pages/expertize";
import { Timeline } from "../../pages/timeline";
import { Contact } from "../../pages/contact";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import "./style.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

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

  const sectionRefs = pages.map(({ ref }) => ref);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.findIndex(
            (ref) => ref.current === entry.target
          );
          if (index !== -1) {
            setActiveSection(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionRefs]);

  const handleButtonClick = (index) => {
    setActiveSection(index);
    sectionRefs[index].current.scrollIntoView({ behavior: "smooth" });
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
                            handleButtonClick(index);
                          }}
                          style={{
                            ...buttonStyle,
                            color:
                              index === activeSection ? "#eb523d" : "white",
                          }}
                        >
                          <ListItemText
                            key={element.page}
                            onClick={() => handleButtonClick(index)}
                            className={index !== activeSection ? "button" : ""}
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
              {pages.map((element, index) => (
                <Button
                  key={element.page}
                  onClick={() => handleButtonClick(index)}
                  disableRipple
                >
                  <Typography
                    className="button"
                    style={{
                      ...buttonStyle,
                      color: index === activeSection ? "#eb523d" : "white",
                    }}
                  >
                    {element.page}
                  </Typography>
                </Button>
              ))}
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
