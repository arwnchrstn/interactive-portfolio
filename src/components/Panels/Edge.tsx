import '@styles/draggable-panel.css'

import egde from '@assets/edge.png'
import msicon from '@assets/microsoft.png'
import AppsIcon from '@mui/icons-material/Apps'
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import SearchIcon from '@mui/icons-material/Search'
import SettingsIcon from '@mui/icons-material/Settings'
import { AppRootState, edgeActions } from '@store/index'
import { useDispatch, useSelector } from 'react-redux'

import DraggablePanel from './DraggablePanel'
import PanelTitle from './PanelTitle'

function Edge() {
  const dispatch = useDispatch()
  const { isActive, isMaximized, isHidden } = useSelector(
    (state: AppRootState) => state.edgeState,
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
        dispatch(edgeActions.setActive(state))
        dispatch(edgeActions.setHidden(false))
      } else {
        dispatch(edgeActions.setActive(state))
        dispatch(edgeActions.setMaximize(false))
        dispatch(edgeActions.setHidden(true))
      }
    } else if (action === 'maximize') {
      dispatch(edgeActions.setMaximize(state))
    } else if (action === 'hide') {
      dispatch(edgeActions.setHidden(state))
    } else {
      throw new Error('Invalid dispatch action')
    }
  }

  return (
    <DraggablePanel
      title={<PanelTitle image={egde} title="Microsoft Edge" />}
      isMaximized={isMaximized}
      isActive={isActive}
      isHidden={isHidden}
      toggleActive={toggleAction}
      toggleMaximize={toggleAction}
      toggleHide={toggleAction}
      isFocused={focusedPanel === 'edge'}
      collapsedHeightWidth="80%"
    >
      <div className="text-gray-200 h-full flex flex-col px-3">
        <div className="h-14 flex gap-2 items-center justify-between">
          <div className="flex flex-row gap-1 items-center">
            <AppsIcon />
            <div className="flex flex-row gap-1 items-center">
              <img
                src={msicon}
                alt="microsoft icon"
                className="object-contain"
                width="20px"
              />
              <p className="text-md font-semibold">Microsoft Start</p>
            </div>
          </div>

          <div className="flex flex-row gap-3 items-center">
            <button className="border border-gray-300 py-1.5 px-6 rounded-2xl text-sm hover:bg-gray-800 transition-all">
              Sign in
            </button>
            <PhoneIphoneIcon />
            <MilitaryTechIcon />
            <SettingsIcon />
          </div>
        </div>

        <div className="grow flex flex-col justify-center items-center gap-16">
          <div className="flex justify-center items-center gap-4">
            <img
              src={msicon}
              alt="microsoft icon"
              className="object-contain"
              width="50px"
            />
            <p className="text-4xl font-semibold">Microsoft</p>
          </div>

          <div className="flex flex-row items-center bg-gray-700 py-2 px-4 w-2/4 rounded-3xl gap-5 h-12">
            <SearchIcon />
            <input
              type="text"
              className="msedge-input text-gray-300"
              placeholder="Search the web"
            />
          </div>
        </div>
      </div>
    </DraggablePanel>
  )
}
export default Edge
