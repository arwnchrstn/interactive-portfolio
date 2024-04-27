import { configureStore } from '@reduxjs/toolkit'

import edge, { edgeActions } from './slices/edge'
import focusedPanel, { focusedPanelActions } from './slices/focusedPanel'
import terminal, { terminalActions } from './slices/terminal'

const store = configureStore({
  reducer: {
    terminalState: terminal,
    edgeState: edge,
    focusedPanelState: focusedPanel,
  },
  devTools: process.env.NODE_ENV === 'production' ? false : true,
})

export default store

export { edgeActions, focusedPanelActions, terminalActions }

export type TerminalActionType = typeof terminalActions
export type EdgeActionType = typeof edgeActions
export type FocusedPanelActionType = typeof focusedPanelActions

export type AppRootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>
