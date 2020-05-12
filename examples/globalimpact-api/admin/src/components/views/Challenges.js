import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Wrapper from '../Wrapper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import AddIcon from '@material-ui/icons/Add';

import {getChallenges} from '../../redux/reducers/challengeReducer';
import {uiActions} from '../../redux/reducers/uiReducer';

import styles from '../../styles/globalStyles';

function mapStateToProps(state) {
  return {
    challenges: state.challenges,
  }
}


const Challenges = ({ children, challenges, dispatch }) => {
  const classes = styles();

  useEffect(() => { 
    dispatch(getChallenges());
  }, []);

  const renderChallengeList = () => {
    return challenges.all.map((challenge) => {
      return (
        <ListItem button alignItems="flex-start">
          <ListItemAvatar>
            <EmojiEventsIcon />
          </ListItemAvatar>
          <ListItemText
            primary={challenge.name}
            secondary={
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  {challenge.shortDescription}
                </Typography>
            }
          />
        </ListItem>
      )
    })
  }

  return (
    <Wrapper>
      <Grid item>
        <Grid container alignContent='space-between'>
          <Grid item>
            <Typography variant='h2'>Challenges</Typography>
          </Grid>
          <Grid item className={classes.pushRight}>
            <Box mt={2}>
              <Button
                onClick={() => dispatch(uiActions.openModal({modal: 'newChallenge'}))}
                variant="outlined"
                color="primary"
              ><AddIcon /></Button>
            </Box>
          </Grid>
        </Grid>
        <List>
          { renderChallengeList() }
        </List>
      </Grid>
    </Wrapper>
  );
}

export default connect(mapStateToProps)(Challenges);
