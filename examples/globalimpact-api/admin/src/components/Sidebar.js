import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { push } from 'connected-react-router'

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import IconButton from '@material-ui/core/IconButton';


import {uiActions} from '../redux/reducers/uiReducer';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 260,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 260,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

const Sidebar = ({ children, dispatch, drawerOpen }) => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={drawerOpen}
      width="240px"
      classes={{
        paper: classes.drawerPaper,
      }}>
      <div className={classes.drawerHeader}>
        <IconButton onClick={() => dispatch(uiActions.toggleNavDrawer())}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button={true} onClick={() => dispatch(push('/'))}>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button={true} onClick={() => dispatch(push('/challenges'))}>
          <ListItemIcon><EmojiEventsIcon /></ListItemIcon>
          <ListItemText primary="Challenges" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default connect(null)(Sidebar);
