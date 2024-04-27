import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type EdgeInitialState = {
  isMaximized: boolean
  isActive: boolean
  isHidden: boolean
  panelName: 'edge'
}

const edgeInitialState: EdgeInitialState = {
  isMaximized: false,
  isActive: false,
  isHidden: true,
  panelName: 'edge',
}

const edgeSlice = createSlice({
  name: 'edgeSlice',
  initialState: edgeInitialState,
  reducers: {
    setMaximize: (state, action: PayloadAction<boolean>) => {
      state.isMaximized = action.payload
    },
    setActive: (state, action: PayloadAction<boolean>) => {
      state.isActive = action.payload
    },
    setHidden: (state, action: PayloadAction<boolean>) => {
      state.isHidden = action.payload
    },
  },
})

export default edgeSlice.reducer
export const edgeActions = edgeSlice.actions
