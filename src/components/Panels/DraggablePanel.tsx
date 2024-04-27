import '@styles/draggable-panel.css'

import CloseIcon from '@mui/icons-material/Close'
import Crop75Icon from '@mui/icons-material/Crop75'
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed'
import MinimizeIcon from '@mui/icons-material/Minimize'
import { useEffect, useState } from 'react'
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable'

type ToggleActionProps = (
  action: 'active' | 'maximize' | 'hide',
  state: boolean,
) => void

type DraggablePanelProps = {
  title: string | JSX.Element
  children: React.ReactNode
  isMaximized: boolean
  isActive: boolean
  isHidden: boolean
  isFocused: boolean
  toggleMaximize: ToggleActionProps
  toggleActive: ToggleActionProps
  toggleHide: ToggleActionProps
  collapsedHeightWidth: string
}

function DraggablePanel({ children, ...props }: DraggablePanelProps) {
  const [position, setPostion] = useState(() => {
    return {
      x: Math.ceil(document.documentElement.clientWidth / 7),
      y: Math.ceil(document.documentElement.clientHeight / 10),
    }
  })
  const [isDragged, setIsDragged] = useState<boolean>(false)

  const handleStart = () => setIsDragged(true)
  const handleStop = (_: DraggableEvent, data: DraggableData) => {
    setIsDragged(false)
    setPostion({ x: data.lastX, y: data.lastY })
  }

  useEffect(() => {
    const x = Math.floor(
      Math.random() * (document.documentElement.clientWidth / 7),
    )
    const y = Math.floor(
      Math.random() * (document.documentElement.clientHeight / 10),
    )

    if (props.isMaximized) {
      setPostion({ x: 0, y: 0 })
    } else {
      setPostion({ x, y })
    }
  }, [props.isMaximized])

  return (
    <Draggable
      position={position}
      axis="both"
      handle="div.handle-drag"
      bounds="div.main-container"
      onStop={handleStop}
      onStart={handleStart}
    >
      <div
        className={`rounded border-2 border-gray-600 draggable-container absolute ${props.isFocused && !props.isHidden ? 'z-10' : 'z-0'}
        ${props.isHidden ? 'opacity-0 collapse' : 'opacity-1 visible'} 
        ${!isDragged ? 'transition-all' : ''}`}
        style={{
          height: props.isMaximized ? '100%' : props.collapsedHeightWidth,
          width: props.isMaximized ? '100%' : props.collapsedHeightWidth,
        }}
      >
        <div className="handle-drag bg-gray-700 p-1 text-gray-300 text-sm flex flex-row justify-between items-center absolute top-0 left-0 w-full">
          {props.title}
          <div className="flex flex-row gap-2">
            <button
              className="px-2 hover:bg-gray-500"
              onClick={props.toggleMaximize.bind(null, 'hide', !props.isHidden)}
            >
              <MinimizeIcon />
            </button>
            <button
              className="px-2 hover:bg-gray-500"
              onClick={props.toggleMaximize.bind(
                null,
                'maximize',
                !props.isMaximized,
              )}
            >
              {props.isMaximized ? <DynamicFeedIcon /> : <Crop75Icon />}
            </button>
            <button
              className="px-2 hover:bg-red-500"
              onClick={props.toggleActive.bind(null, 'active', false)}
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="bg-gray-900 p-1 draggable-content pt-10">
          {children}
        </div>
      </div>
    </Draggable>
  )
}
export default DraggablePanel
