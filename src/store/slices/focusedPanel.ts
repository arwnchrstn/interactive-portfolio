import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IconTypes } from '@utils/taskbar.types'

type FocusedPanelState = {
  focusedPanel: Exclude<IconTypes, 'windows'>
}

const initialFocusedPanelState: FocusedPanelState = {
  focusedPanel: 'terminal',
}

const focusedPanelSlice = createSlice({
  name: 'focusedPanelSlice',
  initialState: initialFocusedPanelState,
  reducers: {
    setFocusedPanel: (
      state,
      action: PayloadAction<Exclude<IconTypes, 'windows'>>,
    ) => {
      state.focusedPanel = action.payload
    },
  },
})

export const focusedPanelActions = focusedPanelSlice.actions
export default focusedPanelSlice.reducer
