import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const location = useLocation();
  const pages = {
    home: {
      name: "Home",
      path: "/",
    },
    courses: {
      name: "Courses",
      path: "/courses",
    },
    manageCourses: {
      name: "Manage Courses",
      path: "/course",
    },
    about: {
      name: "About",
      path: "/about",
    },
  };

  const [open, setOpen] = useState(false);
  const [pageName, setPageName] = useState();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = (page) => {
    history.push(page.path);
    handleDrawerClose();
  };
  const getCurrentPageName = () => {
    if (location.pathname.includes(pages.about.path)) {
      return pages.about.name;
    }

    if (location.pathname.includes(pages.courses.path)) {
      return pages.courses.name;
    }

    if (location.pathname.includes(pages.manageCourses.path)) {
      return pages.manageCourses.name;
    }

    if (location.pathname.includes(pages.home.path)) {
      return pages.home.name;
    }

    return "Learning React";
  };

  useEffect(() => {
    debugger;
    setPageName(getCurrentPageName());
  }, [getCurrentPageName, location.pathname]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {pageName}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key="H" onClick={() => navigate(pages.home)}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button key="C" onClick={() => navigate(pages.courses)}>
            <ListItemText primary="Courses" />
          </ListItem>
          <ListItem button key="A" onClick={() => navigate(pages.about)}>
            <ListItemText primary="About" />
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
    // <nav>
    // <div class="nav-wrapper teal">
    //   <a href="/" class="right">
    //     React
    //   </a>
    //   <ul id="nav-mobile" class="left hide-on-med-and-down">
    //     <li>
    //       <NavLink to="/" activeClassName="teal darken-2" exact>
    //         Home
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/courses" activeClassName="teal darken-2">
    //         Courses
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/about" activeClassName="teal darken-2">
    //         About
    //       </NavLink>
    //     </li>
    //   </ul>
    // </div>
    // </nav>
  );
}

export default Header;
