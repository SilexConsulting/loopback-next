import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

import { uiActions } from '../redux/reducers/uiReducer';

const drawerWidth = 260;
const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

const ViewWrapper = ({ children, dispatch, drawerOpen }) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: drawerOpen,
      })}>
      <Toolbar>
        <IconButton color="inherit" edge="start"
          onClick={() => dispatch(uiActions.toggleNavDrawer())}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap></Typography>
      </Toolbar>
    </AppBar>
  );
}

export default connect(null)(ViewWrapper);
