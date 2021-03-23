import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import logo from "../images/Navbar/logo.png";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withGetScreen } from "react-getscreen";
import DropdownShop from "./DropdownShop";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "80px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navbar: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    background: "white",
    width: "100%",
    height: "80px",
    margin: "auto",
    position: "fixed",
    zIndex: 100,
    boxShadow: "0px 1px 10px #000000",
  },
}));

const Navbar = (props) => {
  const style = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (props.isTablet())
    return (
      <div className={style.root}>
        <AppBar position="static">
          <Toolbar className={style.navbar}>
            <Typography variant="h6" className={style.title}>
              <img src={logo} alt="logo" />
            </Typography>
            <IconButton
              edge="start"
              className={style.menuButton}
              color="inherit"
              aria-label="menu">
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}>
                <MenuIcon />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <NavLink
                  exact
                  to="/"
                  className={classes.NavLinkSmall}
                  activeClassName={classes.selected}>
                  <MenuItem onClick={handleClose}>HOME</MenuItem>
                </NavLink>
                <NavLink
                  to="/shop"
                  className={classes.NavLinkSmall}
                  activeClassName={classes.selected}>
                  <MenuItem onClick={handleClose}>SHOP</MenuItem>
                </NavLink>
                <NavLink
                  to="/blog"
                  className={classes.NavLinkSmall}
                  activeClassName={classes.selected}>
                  <MenuItem onClick={handleClose}>BLOG</MenuItem>
                </NavLink>
                <NavLink
                  to="/pages"
                  className={classes.NavLinkSmall}
                  activeClassName={classes.selected}>
                  <MenuItem onClick={handleClose}>PAGES</MenuItem>
                </NavLink>
                <NavLink
                  to="/contact"
                  className={classes.NavLinkSmall}
                  activeClassName={classes.selected}>
                  <MenuItem onClick={handleClose}>CONTACT</MenuItem>
                </NavLink>
              </Menu>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  return (
    <Grid container justify="center" style={{ marginBottom: "80px" }}>
      <ul className={classes.nav}>
        <Grid item xl={2} lg={2} md={2} m={3} xs={4}>
          <li className={classes.li}>
            <NavLink exact to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </li>
        </Grid>
        <Grid item xl={2} lg={2} md={2} m={2} xs={2}>
          <li className={classes.li}>
            <NavLink
              exact
              to="/"
              className={classes.NavLink}
              activeClassName={classes.selected}>
              HOME
            </NavLink>
          </li>
        </Grid>
        <Grid item xl={2} lg={2} md={2} m={2} xs={2}>
          <li>
            <NavLink
              to="/shop"
              className={classes.NavLink}
              activeClassName={classes.selected}>
              <DropdownShop />
            </NavLink>
          </li>
        </Grid>
        <Grid item xl={2} lg={2} md={2} m={2} xs={2}>
          <li>
            <NavLink
              to="/blog"
              className={classes.NavLink}
              activeClassName={classes.selected}>
              BLOG
            </NavLink>
          </li>
        </Grid>
        <Grid item xl={2} lg={2} md={2} m={2} xs={2}>
          <li>
            <NavLink
              to="/pages"
              className={classes.NavLink}
              activeClassName={classes.selected}>
              PAGES
            </NavLink>
          </li>
        </Grid>
        <Grid item xl={2} lg={2} md={2} m={2} xs={2}>
          <li>
            <NavLink
              to="/contact"
              className={classes.NavLink}
              activeClassName={classes.selected}>
              CONTACT
            </NavLink>
          </li>
        </Grid>
      </ul>
    </Grid>
  );
};
export default withGetScreen(Navbar);
