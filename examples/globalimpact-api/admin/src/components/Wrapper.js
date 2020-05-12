import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';

const Wrapper = withStyles({
  root: {
    display: 'flex',
    height: '100%',
    width: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    minWidth: '100%',
    maxWidth: '100%',
    overflowX: 'hidden',
    position: 'relative',
  },
})(Box);

function mapStateToProps(state) {
  return {
    drawerOpen: state.ui.nav.drawerOpen
  }
}

const ViewWrapper = ({ children, dispatch, drawerOpen }) => {
  return (
    <Wrapper>
      <Header drawerOpen={drawerOpen} />
      <Sidebar drawerOpen={drawerOpen}/>
      <Main drawerOpen={drawerOpen}>
        <Grid container direction="column" spacing={3}>
          {children}
        </Grid>
      </Main>
    </Wrapper>
  );
}

export default connect(mapStateToProps)(ViewWrapper);
