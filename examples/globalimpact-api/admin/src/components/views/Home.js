import React from 'react';
import { connect } from 'react-redux';
import Wrapper from '../Wrapper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Home = ({ children }) => {

  return (
    <Wrapper>
      <Grid item>
        <Typography variant='h2'>Home</Typography>
      </Grid>
    </Wrapper>
  );
}

export default connect(null)(Home);
