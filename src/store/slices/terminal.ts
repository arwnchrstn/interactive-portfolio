import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TerminalInitialState {
  isMaximized: boolean
  isActive: boolean
}

const terminalInitialState: TerminalInitialState = {
  isMaximized: true,
  isActive: true,
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
  },
})

export default terminalSlice.reducer
export const { setMaximize } = terminalSlice.actions
