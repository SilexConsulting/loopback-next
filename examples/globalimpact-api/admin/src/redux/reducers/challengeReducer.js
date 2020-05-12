import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api';

export const getChallenges = createAsyncThunk(
  'challenges/get',
  async () => {
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

export const createChallenge = createAsyncThunk(
  'challenges/create',
  async (payload) => {
    const response = await api.post(`/api/challenges`, { ...payload })
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

const intitialState = {
  all: [],
}

const challenges = createSlice({
  name: 'challenges',
  initialState: intitialState,
  reducers: {},
  extraReducers: {
    [getChallenges.pending]: (state, action) => {
    },
    [getChallenges.fulfilled]: (state, action) => {
      state.all = action.payload;
    },
    [getChallenges.rejected]: (state, action) => {
    },
  }
})

export default challenges
export const challengesActions = challenges.actions;
