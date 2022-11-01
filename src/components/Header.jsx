import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { sortingAlgorithms } from "../common/config";
import { useData } from "../common/store";
import shallow from "zustand/shallow";
import { AiFillGithub } from "react-icons/ai";

import { useNavigate } from "react-router-dom";
import { Route, Link, Routes, useLocation } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["Home", , "Algorithms", "About"];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

function Header(props) {
  let navigate = useNavigate();

  const location = useLocation();

  const { window } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, padding: "0px" }}>
        Sorting Visualizer
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => handleMenuClick(item)}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const [onHome, setOnHome] = React.useState(
    location.pathname == "/SortingVisualizer" ||
      location.pathname == "/SortingVisualizer/home"
      ? true
      : false
  );
  const [onAbout, setOnAbout] = React.useState(
    location.pathname == "/SortingVisualizer/about" ? true : false
  );
  const [onDoc, setOnDoc] = React.useState(
    location.pathname == "/SortingVisualizer/algorithms" ? true : false
  );

  const handleMenuClick = (pageURL) => {
    // console.log(pageURL);
    if (pageURL == "Home") {
      setOnHome(true);
      setOnAbout(false);
      setOnDoc(false);
      navigate("/SortingVisualizer/home");
    } else if (pageURL == "About") {
      setOnHome(false);
      setOnAbout(true);
      setOnDoc(false);
      navigate("/SortingVisualizer/about");
    } else if (pageURL == "Algorithms") {
      setOnHome(false);
      setOnAbout(false);
      setOnDoc(true);
      navigate("/SortingVisualizer/algorithms");
    }
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const classes = useStyles();

  const [algorithm, setAlgorithm] = useData(
    (state) => [state.algorithm, state.setAlgorithm],
    shallow
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 0,
              display: { xs: "none", sm: "block" },
              marginRight: "5%",
              cursor: "pointer",
            }}
            onClick={() => handleMenuClick("Home")}
          >
            Sorting Visualizer
          </Typography>
          <Box
            // sx={{ display: { xs: "none", sm: "block" } }}
            style={{}}
          >
            {/* {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: "#fff" }}
                onClick={() => handleMenuClick(item)}
              >
                {item}
              </Button>
            ))} */}
            <Button
              key={"Home"}
              style={
                onHome
                  ? {
                      // scale: "1.1",
                      background: "yellowgreen",
                      margin: "10px",
                      padding: "5px",
                      color: "black",
                    }
                  : { color: "#fff", margin: "10px", padding: "5px" }
              }
              onClick={() => handleMenuClick("Home")}
            >
              {"Home"}
            </Button>
            <Button
              key={"Algorithms"}
              style={
                onDoc
                  ? {
                      // scale: "1.1",
                      background: "yellowgreen",
                      margin: "10px",
                      padding: "5px",
                      color: "black",
                    }
                  : { color: "#fff", margin: "10px", padding: "5px" }
              }
              onClick={() => handleMenuClick("Algorithms")}
            >
              {"Algorithms"}
            </Button>
            <Button
              key={"About"}
              style={
                onAbout
                  ? {
                      // scale: "1.1",
                      background: "yellowgreen",
                      margin: "10px",
                      padding: "5px",
                      color: "black",
                    }
                  : { color: "#fff", margin: "10px", padding: "5px" }
              }
              onClick={() => handleMenuClick("About")}
            >
              {"About"}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3, padding: 0 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
