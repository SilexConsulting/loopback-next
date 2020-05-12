import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

const drawerWidth = 260;
const useStyles = makeStyles((theme) => ({
  content: {
    height: '100%',
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingTop: theme.spacing(12),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const Main = ({ children, drawerOpen }) => {
  const classes = useStyles();

  return (
    <Container component="main"
    className={clsx(classes.content, {
      [classes.contentShift]: drawerOpen,
    }, )}>
      {children}
    </Container>
  );
}

export default Main
