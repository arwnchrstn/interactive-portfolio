import { configureStore } from '@reduxjs/toolkit'

import terminal from './slices/terminal'

const store = configureStore({
  reducer: {
    terminalState: terminal,
  },
  devTools: process.env.NODE_ENV === 'production' ? false : true,
})

export default store
export type AppRootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>
