import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api';

export const getChallenges = createAsyncThunk(
  'challenges/get',
  async () => {
    console.log('getChallenges');
    const params = {
      include: [{
          "relation": "challengeLevels",
          "scope": {
            "include": [
              {"relation": "tasks"}
            ]
          }
       }]
    }
    const response = await api.get(`/api/challenges?filter=${JSON.stringify(params)}`)
    return response.data
  }
)

export const getChallenge = createAsyncThunk(
  'challenges/getOne',
  async (payload) => {
    const params = {
      include: [{
          "relation": "challengeLevels",
          "scope": {
            "include": [
              {"relation": "tasks"}
            ]
          }
       }]
    }
    const response = await api.get(`/api/challenges/${payload.id}?filter=${JSON.stringify(params)}`)
    return response.data
  }
)

export const createChallenge = createAsyncThunk(
  'challenges/create',
  async (payload) => {
    const response = await api.post(`/api/challenges`, { ...payload })
    return response.data
  }
)

export const updateChallenge = createAsyncThunk(
  'challenges/update',
  async (payload) => {
    const response = await api.patch(`/api/challenges/${payload.id}`, { ...payload })
    return response.data
  }
)

export const toggleArchiveChallenge = createAsyncThunk(
  'challenges/archive',
  async (payload) => {
    const response = await api.patch(`/api/challenges/${payload.id}`, { 
      archived: !payload.archived,
    })
    return response.data
  }
)

export const uploadBadge = createAsyncThunk(
  'challenges/uploadBadge',
  async (payload) => {
    const formData = new FormData();
    formData.append(payload.name, payload.files[0], payload.name);
    const response = await api.post(`/api/ProfilePicture`, formData, { headers: { 'Content-Type': 'multipart/form-data' }})
    return response.data
  }
)

export const createChallengeLevel = createAsyncThunk(
  'challenges/createLevel',
  async (payload) => {
    const response = await api.post(`/api/challenges/${payload.challengeId}/challenge-levels`, { ...payload })
    return response.data
  }
)

export const deleteChallengeLevel = createAsyncThunk(
  'challenges/deleteLevel',
  async (payload) => {
    const response = await api.delete(`/api/challenge-levels/${payload.challengeLevelId}`)
    return response.data
  }
)

export const createTask = createAsyncThunk(
  'challenges/createTask',
  async (payload) => {
    const response = await api.post(`/api/challenge-levels/${payload.challengeLevelId}/tasks`, { ...payload })
    return response.data
  }
)

export const updateTask = createAsyncThunk(
  'challenges/updateTask',
  async (payload) => {
    console.log(payload);
    const response = await api.patch(`/api/tasks/${payload.id}`, { ...payload })
    return response.data
  }
)

export const deleteTask = createAsyncThunk(
  'challenges/deleteTask',
  async (payload) => {
    const response = await api.delete(`/api/tasks/${payload.taskId}`)
    return response.data
  }
)

const intitialState = {
  all: [],
  active: {
    id: null,
    name: '',
    shortDescription: '',
    description: '',
    archived: false,
    badge: '',
  },
}

const challenges = createSlice({
  name: 'challenges',
  initialState: intitialState,
  reducers: {},
  extraReducers: {
    [getChallenges.fulfilled]: (state, action) => {
      state.all = action.payload;
    },
    [getChallenge.fulfilled]: (state, action) => {
      state.active = action.payload;
    },
  }
})

export default challenges
export const challengesActions = challenges.actions;
