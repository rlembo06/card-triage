
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

const cards = createEntityAdapter();

const initialState = cards.getInitialState({})

/* ACTIONS & REDUCERS */
const { actions, reducer } = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
})

const selectors = {}

export { actions, selectors }
export default reducer
