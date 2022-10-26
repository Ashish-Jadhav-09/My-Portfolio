import React, { useState } from "react";
import {
 styled,
 alpha,
 AppBar,
 Box,
 Toolbar,
 IconButton,
 Typography,
 InputBase,
 Tab,
 Tabs,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
 position: "relative",
 borderRadius: theme.shape.borderRadius,
 backgroundColor: alpha(theme.palette.common.white, 0.15),
 "&:hover": {
  backgroundColor: alpha(theme.palette.common.white, 0.25),
 },
 marginLeft: 0,
 width: "100%",
 [theme.breakpoints.up("sm")]: {
  marginLeft: theme.spacing(1),
  width: "auto",
 },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
 padding: theme.spacing(0, 2),
 height: "100%",
 position: "absolute",
 pointerEvents: "none",
 display: "flex",
 alignItems: "center",
 justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
 color: "inherit",
 "& .MuiInputBase-input": {
  padding: theme.spacing(1, 1, 1, 0),
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  transition: theme.transitions.create("width"),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
   width: "12ch",
   "&:focus": {
    width: "20ch",
   },
  },
 },
}));

const buttonStyle = {
 width: "auto",
 height: "auto",
 backgroundColor: "black",
 color: "white",
 marginRight: "1rem",
};

const TabPanel = (props) => {
 const { children, value, index, ...other } = props;

 console.log("index", index, children);
 return (
  <div
   role="tabpanel"
   hidden={value !== index}
   id={`simple-tabpanel-${index}`}
   aria-labelledby={`simple-tab-${index}`}
   {...other}
  >
   {value === index && (
    <Box sx={{ p: 3 }}>
     <Typography>{children}</Typography>
    </Box>
   )}
  </div>
 );
};

const design = (index) => {
 return {
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
 };
};

const NavBar = () => {
 const [value, setValue] = useState(0);

 const handleOnChange = (event, newValue) => {
  setValue(newValue);
 };

 return (
  <div>
   <Box sx={{ flexGrow: 1, height: 20 }}>
    <AppBar position="static" sx={{ color: "white", backgroundColor: "black" }}>
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
       sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
      >
       My Portifolio
      </Typography>
      <Tabs value={value} onChange={handleOnChange} sx={{ color: "white" }}>
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
        inputProps={{ "aria-label": "search" }}
       />
      </Search>
     </Toolbar>
    </AppBar>
   </Box>
   <br />
   <br />
   <br />
   <br />

   <TabPanel value={value} index={0}>
    Item One
   </TabPanel>
   <TabPanel value={value} index={1}>
    Item Two
   </TabPanel>
   <TabPanel value={value} index={2}>
    Item Three
   </TabPanel>
   <TabPanel value={value} index={3}>
    Item Four
   </TabPanel>
   <TabPanel value={value} index={4}>
    Item Five
   </TabPanel>
   <TabPanel value={value} index={5}>
    Item Six
   </TabPanel>
  </div>
 );
};

export default NavBar;
