import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Wrapper from '../Wrapper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';
import TabPanel from '../ui/TabPanel';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import ArchiveIcon from '@material-ui/icons/Archive';
import UnarchiveIcon from '@material-ui/icons/Unarchive';


import {getChallenges} from '../../redux/reducers/challengeReducer';
import {toggleArchiveChallenge} from '../../redux/reducers/challengeReducer';
import {uiActions} from '../../redux/reducers/uiReducer';
import { push } from 'connected-react-router'

import styles from '../../styles/globalStyles';

function mapStateToProps(state) {
  return {
    challenges: state.challenges,
  }
}


const Challenges = ({ children, challenges, dispatch }) => {
  const classes = styles();

  const [state, setState] = useState({
    tab: 0,
  });

  const handleTabChange = (event, newValue) => {
    setState({
      tab: newValue,
    });
  }

  const handleArchive = (challenge) => {
    dispatch(toggleArchiveChallenge(challenge))
      .then(() => {
        dispatch(getChallenges());
      })
  }

  const populate = async () => {
    await dispatch(getChallenges());
  }

  useEffect(() => {
    populate() 
  }, [challenges]);

  const renderChallenge = (challenge) => {
    return (
      <ListItem key={challenge.id} button onClick={() => dispatch(push(`/challenges/${challenge.id}`))} role={undefined}>
        <ListItemAvatar>
          <Avatar src={`/api/ProfilePicture/${challenge.badge}`} />
        </ListItemAvatar>
        <ListItemText 
          primary={challenge.name} 
          secondary={challenge.shortDescription} />
        <ListItemSecondaryAction>
          <IconButton onClick={() => handleArchive(challenge)} edge="end" aria-label="comments">
            { challenge.archived ? <UnarchiveIcon /> : <ArchiveIcon /> }
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
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
              <Fab
                onClick={() => dispatch(uiActions.openModal({modal: 'newChallenge'}))}
                variant="round"
                color="primary"
              ><AddIcon /></Fab>
            </Box>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Paper elevation={3} square>
            <Tabs
              value={state.tab}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleTabChange}
            >
              <Tab label="Active" />
              <Tab label="Archived" />
            </Tabs>
            <TabPanel value={state.tab} index={0}>
              <List>
                { challenges.all.map((challenge) => {
                  return challenge.archived ? false : renderChallenge(challenge);   
                })}
              </List>
            </TabPanel>
            <TabPanel value={state.tab} index={1}>
              <List>
                { challenges.all.map((challenge) => {
                  return challenge.archived ? renderChallenge(challenge) : false;   
                })}
              </List>
            </TabPanel>
          </Paper>
        </Box>
      </Grid>
    </Wrapper>
  );
}

export default connect(mapStateToProps)(Challenges);
