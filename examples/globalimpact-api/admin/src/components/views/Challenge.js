import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import Wrapper from '../Wrapper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { CountryDropdown, CountryRegionData } from 'react-country-region-selector';


import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import ImageIcon from '@material-ui/icons/Image';
import DeleteIcon from '@material-ui/icons/Delete';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import NewTaskForm from '../ui/NewTaskForm';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TabPanel from '../ui/TabPanel';
import ArchiveIcon from '@material-ui/icons/Archive';
import UnarchiveIcon from '@material-ui/icons/Unarchive';

import {SdgGoalData} from '../../Goals';

import { getChallenge } from '../../redux/reducers/challengeReducer';
import { updateTask } from '../../redux/reducers/challengeReducer';
import { deleteChallengeLevel } from '../../redux/reducers/challengeReducer';
import { updateChallenge } from '../../redux/reducers/challengeReducer';
import { uploadBadge } from '../../redux/reducers/challengeReducer';
import { uiActions } from '../../redux/reducers/uiReducer';
import Avatar from '@material-ui/core/Avatar';

import styles from '../../styles/globalStyles';

function mapStateToProps(state) {
  return {
    challenge: state.challenges.active,
  }
}

const Challenge = ({challenge, match, dispatch }) => {
  const classes = styles();

  const [state, setState] = useState({
    tab: 0,
    name: '',
    shortDescription: '',
    description: '',
    badge: '',
    badgeFiles: [],
    country: '',
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
    };

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

  const handleTabChange = (event, newValue) => {
    setState({
      ...state,
      tab: newValue,
    });
  }

  const handleArchiveTask = (task) => {
    dispatch(updateTask({
      ...task,
      archived: !task.archived
    })).then((response) => {
      dispatch(getChallenge({
        id: match.params.id
      })).then((response) => {
        updateFormState(response.payload)        
      })
    })
  }

  const handleDeleteChallengeLevel = (challengeLevelId) => {
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
                {
                  level.tasks ? (
                  <Box>
                    <Tabs
                      value={state.tab}
                      indicatorColor="primary"
                      textColor="primary"
                      onChange={handleTabChange}
                    >
                      <Tab label="Active Tasks" />
                      <Tab label="Archived Tasks" />
                    </Tabs>
                    <TabPanel value={state.tab} index={0}>
                      <List>
                        {
                          level.tasks ? level.tasks.map((task) => {
                            return !task.archived ? (
                              <ListItem button onClick={() => dispatch(uiActions.openModal({
                                modal: 'editTask',
                                data: {
                                  challengeId: challenge.id,
                                  task: task
                                }
                              }))}>
                                <ListItemText primary={task.description} />
                                <ListItemSecondaryAction>
                                  <Button size="small" color="primary" onClick={() => handleArchiveTask(task)}>
                                    <ArchiveIcon />
                                  </Button>
                                </ListItemSecondaryAction>
                              </ListItem>) : null
                          }) : null 
                        }
                        
                      </List>
                    </TabPanel>
                    <TabPanel value={state.tab} index={1}>
                      <List>
                        {
                          level.tasks ? level.tasks.map((task) => {
                            return task.archived ? (
                              <ListItem button onClick={() => dispatch(uiActions.openModal({
                                modal: 'editTask',
                                data: {
                                  challengeId: challenge.id,
                                  task: task
                                }
                              }))}>
                                <ListItemText primary={task.description} />
                                <ListItemSecondaryAction>
                                  <Button size="small" color="primary" onClick={() => handleArchiveTask(task)}>
                                    <UnarchiveIcon />
                                  </Button>
                                </ListItemSecondaryAction>
                              </ListItem>) : null
                          }) : null 
                        }
                      </List>
                    </TabPanel>
                  </Box>) : null
                }
                <NewTaskForm challengeLevel={level} challengeId={challenge.id} />
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
              <Grid container spacing={5}>
                <Grid item md={10}>
                  <Typography variant='h2'>{challenge.name}</Typography>
                </Grid>
                <Grid item md={2}>
                  <Avatar src={`/api/ProfilePicture/${challenge.badge}`} className={classes.large} />
                </Grid>
              </Grid>
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
                  rows={5}
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
