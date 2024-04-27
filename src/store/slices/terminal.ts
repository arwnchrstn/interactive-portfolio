import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TerminalInitialState = {
  isMaximized: boolean
  isActive: boolean
  isHidden: boolean
  panelName: 'terminal'
}

const terminalInitialState: TerminalInitialState = {
  isMaximized: false,
  isActive: true,
  isHidden: false,
  panelName: 'terminal',
}

const terminalSlice = createSlice({
  name: 'terminalSlice',
  initialState: terminalInitialState,
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

export default terminalSlice.reducer
export const terminalActions = terminalSlice.actions
