import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from '@material-ui/core/Toolbar';
import { ThemeProvider } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Sidebar from './components/Sidebar/Sidebar';
import appTheme from './App.theme';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Stats from './components/stats/Stats';
import Players from './components/players/Players';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      minWidth: 360
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      padding: theme.spacing(3),
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

export default function App() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <ThemeProvider theme={appTheme}>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Home
          </Typography>
        </Toolbar>
        <Sidebar changeMobileSidebar={handleDrawerToggle} isOpen={mobileOpen}/>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route path="/" exact component={Home} ></Route>
          <Route path="/players" exact component={Players} ></Route>
          <Route path="/stats" exact component={Stats} ></Route>

        </Switch>
      </main>
    </div>
    </ThemeProvider>
  );
}