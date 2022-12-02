import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'

import type { RootState } from '@/store/store'

import { type PatientsState, FETCH_PATIENTS_LIST } from './types'

import patientsApi from '@/api/patients'

const patientsAdapter = createEntityAdapter()

const initialState = patientsAdapter.getInitialState<PatientsState>({
  ids: [],
  entities: {},
  status: {
    fetching: {
      status: 'NONE',
      error: null,
    },
  },
})

const fetchPatientsList = createAsyncThunk(FETCH_PATIENTS_LIST, () => patientsApi.getList())

/* ACTIONS & REDUCERS */
const { actions: actionsSlice, reducer } = createSlice({
  name: 'patients',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPatientsList.pending, (state: PatientsState) => {
        state.status.fetching.status = 'PENDING'
        state.status.fetching.error = null
      })
      .addCase(fetchPatientsList.fulfilled, (state: PatientsState, payload) => {
        state.status.fetching.status = 'DONE'
        patientsAdapter.setAll(state, payload)
      })
      .addCase(fetchPatientsList.rejected, (state: PatientsState, { error }) => {
        state.status.fetching.status = 'REJECTED'
        state.status.fetching.error = error.message || 'Failure to retrieve patients'
      })
  },
})

/* SELECTORS */
const patientsSelectors = patientsAdapter.getSelectors((state: RootState) => state.patients)

const selectors = { ...patientsSelectors }

/* EXPORTS */

const actions = { ...actionsSlice, fetchPatientsList }

export { actions, selectors }
export default reducer
