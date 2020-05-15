import { createSlice } from '@reduxjs/toolkit';


const intitialState = {
  nav: {
    drawerOpen: false,
  },
  modals: {
    newChallenge: {
      visible: false,
      data: {}
    },
    newChallengeLevel: {
      visible: false,
      data: {
        challengeId: 0,
      }
    },
    editTask: {
      visible: false,
      data: {
        challengeId: 0,
        task: {
          description: '',
          id: 0,
        },
      }
    }
  }
}

const ui = createSlice({
  name: 'ui',
  initialState: intitialState,
  reducers: {
    toggleNavDrawer: (state, action) => {
      state.nav.drawerOpen = !state.nav.drawerOpen; 
    },
    openModal: (state, action) => {
      state.modals[action.payload.modal].visible = true;
      if (action.payload.data) {
        state.modals[action.payload.modal].data = action.payload.data;
        console.log(state.modals[action.payload.modal].data, action.payload)
      }
    },
    closeModal: (state, action) => {
      state.modals[action.payload.modal].visible = false;
      state.modals[action.payload.modal].data = intitialState.modals[action.payload.modal].data;
    },
  }
})

export default ui
export const uiActions = ui.actions;
