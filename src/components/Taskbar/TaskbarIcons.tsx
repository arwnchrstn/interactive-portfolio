import '@styles/taskbar.css'

// import chrome from '@assets/chrome.png'
import edge from '@assets/edge.png'
import terminal from '@assets/terminal.png'
// import windows from '@assets/windows.png'
import {
  AppRootState,
  edgeActions,
  focusedPanelActions,
  terminalActions,
} from '@store/index'
import { IconActionTypes, IconTypes } from '@utils/taskbar.types'
import { useDispatch, useSelector } from 'react-redux'

import Icons from './Icons'

function TaskbarIcons() {
  const terminalState = useSelector(
    (state: AppRootState) => state.terminalState,
  )
  const edgeState = useSelector((state: AppRootState) => state.edgeState)
  const dispatch = useDispatch()

  // function handleIconClick(
  //   icon: 'windows',
  //   action: typeof terminalActions,
  // ): void
  function handleIconClick(icon: 'edge', action: typeof edgeActions): void
  // function handleIconClick(icon: 'chrome', action: typeof terminalActions): void
  function handleIconClick(
    icon: 'terminal',
    action: typeof terminalActions,
  ): void
  function handleIconClick(icon: IconTypes, action: IconActionTypes) {
    if (icon === 'terminal') {
      dispatch(focusedPanelActions.setFocusedPanel('terminal'))
      if (!terminalState.isActive) {
        dispatch(action.setActive(true))
        dispatch(action.setMaximize(false))
        dispatch(action.setHidden(false))
      } else {
        dispatch(action.setHidden(!terminalState.isHidden))
      }
    } else if (icon === 'edge') {
      dispatch(focusedPanelActions.setFocusedPanel('edge'))
      if (!edgeState.isActive) {
        dispatch(action.setActive(true))
        dispatch(action.setMaximize(false))
        dispatch(action.setHidden(false))
      } else {
        dispatch(action.setHidden(!edgeState.isHidden))
      }
    }
  }

  return (
    <div className="h-100 flex gap-x-2 text-white">
      {/* <Icons src={windows} alt="windows icon" /> */}
      <Icons
        src={edge}
        alt="microsoft edge icon"
        openable
        handleClick={() => handleIconClick('edge', edgeActions)}
        active={edgeState.isActive}
        maximized={edgeState.isMaximized}
        hidden={edgeState.isHidden}
      />

      {/* <Icons src={chrome} alt="google chrome icon" openable /> */}
      <Icons
        src={terminal}
        alt="command prompt icon"
        openable
        handleClick={() => handleIconClick('terminal', terminalActions)}
        active={terminalState.isActive}
        maximized={terminalState.isMaximized}
        hidden={terminalState.isHidden}
      />
    </div>
  )
}
export default TaskbarIcons
