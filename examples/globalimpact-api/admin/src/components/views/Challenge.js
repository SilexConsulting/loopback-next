import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
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
import Input from '@material-ui/core/Input';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';
import TabPanel from '../ui/TabPanel';
import TextField from '@material-ui/core/TextField';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import ArchiveIcon from '@material-ui/icons/Archive';
import UnarchiveIcon from '@material-ui/icons/Unarchive';
import ImageIcon from '@material-ui/icons/Image';
import DeleteIcon from '@material-ui/icons/Delete';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import NewChallengeLevelForm from '../ui/NewChallengeLevelForm';
import NewTaskForm from '../ui/NewTaskForm';

import {SdgGoalData} from '../../Goals';

import { getChallenge } from '../../redux/reducers/challengeReducer';
import { deleteTask } from '../../redux/reducers/challengeReducer';
import { deleteChallengeLevel } from '../../redux/reducers/challengeReducer';
import { updateChallenge } from '../../redux/reducers/challengeReducer';
import { uploadBadge } from '../../redux/reducers/challengeReducer';
import { toggleArchiveChallenge } from '../../redux/reducers/challengeReducer';
import { uiActions } from '../../redux/reducers/uiReducer';
import { push } from 'connected-react-router'

import styles from '../../styles/globalStyles';

function mapStateToProps(state) {
  return {
    challenge: state.challenges.active,
  }
}

const Challenge = ({challenge, match, dispatch }) => {
  const classes = styles();

  const [state, setState] = useState({
    name: '',
    shortDescription: '',
    description: '',
    badge: '',
    badgeFiles: [],
    sdgGoals: [],
  });

  const updateFormState = (payload) => {
    setState({
      ...state,
      id: payload.id,
      name: payload.name,
      shortDescription: payload.shortDescription,
      description: payload.description,
      sdgGoals: payload.sdgGoals,
      badge: payload.badge,
    }) 
  }
  useEffect(() => { 
    dispatch(getChallenge({
      id: match.params.id
    })).then((response) => {
      updateFormState(response.payload)     
    })
  }, []);

  const handleInputChange = (event) => {
    let {name, value} = event.target;
    setState({...state, [name]: value});
  }

  const handleBadgeSelect = (event) => {
    let {files, value} = event.target;
    setState({
      ...state,
      badge: files[0].name, 
      badgeFiles: files 
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();


    let payload = { 
      ...state
    };;
    let badgeUploadResponse;
    if (state.badgeFiles.length) {
      badgeUploadResponse = await dispatch(uploadBadge({
        name: `badge_${state.name.replace(/\s/g, '')}.png`,
        files: state.badgeFiles,
      }))
      payload.badge = badgeUploadResponse.files[0].fieldname;
    } else {
      delete payload.badge;
    }
    delete payload.badgeFiles

    dispatch(updateChallenge(payload)).then((response) => {
      dispatch(getChallenge({
        id: match.params.id
      })).then((response) => {
        updateFormState(response.payload)        
      })
    })
  }

  const handleGoalSelect = (event) => {
    let {name, checked} = event.target;
    if (checked) {
      const goal = [parseInt(name)];
      setState({
        ...state,
        sdgGoals: state.sdgGoals.concat(goal),
      })
    } else {
      const goals = state.sdgGoals.filter(goal => goal !== parseInt(name));
      setState({
        ...state,
        sdgGoals: goals,
      })
    }
  }

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask({
      taskId
    })).then((response) => {
      dispatch(getChallenge({
        id: match.params.id
      })).then((response) => {
        updateFormState(response.payload)        
      })
    })
  }

  const handleDeleteChallengeLevel = (challengeLevelId) => {
    console.log(challengeLevelId)
    dispatch(deleteChallengeLevel({
      challengeLevelId
    })).then((response) => {
      dispatch(getChallenge({
        id: match.params.id
      })).then((response) => {
        updateFormState(response.payload)        
      })
    })
  }

  const renderGoals = () => {
    return SdgGoalData.map((goal) => {
      let checked = state.sdgGoals.includes(goal.id);
      return (
        <Grid item xs={4}>
          <FormControlLabel
            className={classes.w100}
            control={<Checkbox color="primary" checked={checked} onChange={handleGoalSelect} name={goal.id} />}
            label={`${goal.id}. ${goal.name}`}
          />
        </Grid>)
    })
  }

  const renderChallengeLevels = () => {
    return challenge.challengeLevels ? challenge.challengeLevels.map((level) => {
      return (
        <Box mb={3}>
          <Card variant="outlined" className={classes.w100}>
            <CardContent>
              <Grid container>
                <Grid xs={8} item>
                  <Typography variant="h6" component="span">{level.name}</Typography><br/>
                  <Typography variant="body1" component="span">{level.description}</Typography>
                </Grid>
                <Grid item className={classes.pushRight}>
                  <Button size="small" color="primary" onClick={() => handleDeleteChallengeLevel(level.id)}>
                    <DeleteIcon />
                  </Button>
                </Grid>
              </Grid>
              <Box py={3}>
                <Typography variant="subtitle"><strong>Tasks</strong></Typography>
                <List>
                  {
                    level.tasks ? level.tasks.map((task) => {
                      return (<ListItem>
                        <ListItemText primary={task.description} />
                        <ListItemSecondaryAction>
                          <Button size="small" color="primary" onClick={() => handleDeleteTask(task.id)}>
                            <DeleteIcon />
                          </Button>
                        </ListItemSecondaryAction>
                      </ListItem>)
                    }) : null 
                  }
                  <NewTaskForm challengeLevel={level} challengeId={challenge.id} />
                  
                </List>
              </Box>
            </CardContent>
          </Card>
        </Box>
      )
    }) : <Box p={3}><Typography variant='body1'>No challenge levels</Typography></Box>;
  }

  return (
    <Wrapper>
      <Grid item>
        <Box mt={3}>
          <Grid container spacing={5}>
            <Grid item md={6}>
              <Typography variant='h2'>{challenge.name}</Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Name"
                  margin="dense"
                  name="name"
                  type="text"
                  value={state.name}
                  onChange={handleInputChange}
                  fullWidth
                />  
                <TextField
                  label="Short Description"
                  margin="dense"
                  name="shortDescription"
                  multiline={true}
                  rows={3}
                  type="text"
                  value={state.shortDescription}
                  onChange={handleInputChange}
                  fullWidth
                /> 
                <TextField
                  label="Full Description"
                  margin="dense"
                  name="description"
                  multiline={true}
                  rows={8}
                  type="text"
                  value={state.description}
                  onChange={handleInputChange}
                  fullWidth
                />
                <Box py={3}>
                  <Input
                    id="badge-input"
                    className={classes.hide}
                    accept="image/*"
                    name="badge"
                    type="file"
                    onChange={handleBadgeSelect}
                  />
                  <label htmlFor="badge-input">
                    <Button
                      component="span"
                      color="primary"
                      startIcon={<ImageIcon />}>
                      Select Badge Image
                    </Button>
                    <Typography
                      className={classes.spaceLeft}
                      component="span"
                      variant="body2"
                      color="textPrimary">
                      { challenge.badge }
                    </Typography>
                  </label>
                </Box>
                <Grid container>
                  {renderGoals()}
                </Grid>
                <Box py={3}>
                  <Button type="submit" variant="contained" color="primary">
                    Update Challenge Details
                  </Button>
                </Box>
              </form>
            </Grid>
            <Grid item md={6}>
              <Grid container>
                <Grid item>
                  <Typography variant='h6'>Challenge Levels</Typography>
                </Grid>
                <Grid item className={classes.pushRight}>
                  <Button
                    onClick={() => dispatch(uiActions.openModal({
                      modal: 'newChallengeLevel',
                      data: {
                        challengeId: challenge.id
                      }
                    }))}
                    color="primary"
                  ><AddIcon /></Button>
                </Grid>
              </Grid>
              {renderChallengeLevels()}
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Wrapper>
  );
}

export default connect(mapStateToProps)(withRouter(Challenge));
