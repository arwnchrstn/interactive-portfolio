import terminal from '@assets/terminal.png'
import { AppRootState, terminalActions } from '@store/index'
import { useDispatch, useSelector } from 'react-redux'

import DraggablePanel from './DraggablePanel'
import PanelTitle from './PanelTitle'

function Terminal() {
  const dispatch = useDispatch()
  const { isActive, isMaximized, isHidden } = useSelector(
    (state: AppRootState) => state.terminalState,
  )
  const { focusedPanel } = useSelector(
    (state: AppRootState) => state.focusedPanelState,
  )

  const toggleAction = (
    action: 'active' | 'maximize' | 'hide',
    state: boolean,
  ) => {
    if (action === 'active') {
      if (state) {
        dispatch(terminalActions.setActive(state))
        dispatch(terminalActions.setHidden(false))
      } else {
        dispatch(terminalActions.setActive(state))
        dispatch(terminalActions.setMaximize(false))
        dispatch(terminalActions.setHidden(true))
      }
    } else if (action === 'maximize') {
      dispatch(terminalActions.setMaximize(state))
    } else if (action === 'hide') {
      dispatch(terminalActions.setHidden(state))
    } else {
      throw new Error('Invalid dispatch action')
    }
  }

  return (
    <DraggablePanel
      title={<PanelTitle image={terminal} title="Command Prompt" />}
      isMaximized={isMaximized}
      isActive={isActive}
      isHidden={isHidden}
      toggleActive={toggleAction}
      toggleMaximize={toggleAction}
      toggleHide={toggleAction}
      isFocused={focusedPanel === 'terminal'}
      collapsedHeightWidth="65%"
    >
      <div className="text-gray-200">
        <p>Interactive Portfolio [Version 1.0.0]</p>
        <p>(c) Arwen Christian Ceres | {new Date().getFullYear()}</p>
      </div>
    </DraggablePanel>
  )
}
export default Terminal
