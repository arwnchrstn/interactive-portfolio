import '@styles/draggable-panel.css'

import CloseIcon from '@mui/icons-material/Close'
import Crop75Icon from '@mui/icons-material/Crop75'
import MinimizeIcon from '@mui/icons-material/Minimize'
import { useEffect, useState } from 'react'
import Draggable from 'react-draggable'

interface DraggablePanelProps {
  title: string
  children?: React.ReactNode
  isMaximized: boolean
}

function DraggablePanel({ children, ...props }: DraggablePanelProps) {
  const [position, setPostion] = useState(() => {
    return {
      x: Math.ceil(document.documentElement.clientWidth / 7),
      y: Math.ceil(document.documentElement.clientHeight / 10),
    }
  })

  useEffect(() => {
    if (props.isMaximized) {
      setPostion({ x: 0, y: 0 })
    } else {
      setPostion({
        x: Math.ceil(document.documentElement.clientWidth / 7),
        y: Math.ceil(document.documentElement.clientHeight / 10),
      })
    }
  }, [props.isMaximized])

  return (
    <Draggable
      position={position}
      axis="both"
      handle="div.handle-drag"
      bounds="div.main-container"
      onStop={(_, data) => setPostion({ x: data.lastX, y: data.lastY })}
    >
      <div
        className="rounded border-4 border-gray-700 draggable-container relative"
        style={{
          height: props.isMaximized ? '100%' : '65%',
          width: props.isMaximized ? '100%' : '65%',
        }}
      >
        <div className="handle-drag bg-gray-700 p-1 text-gray-300 text-sm flex flex-row justify-between items-center absolute top-0 left-0 w-full">
          <span className="text-sm font-medium">{props.title}</span>
          <div className="flex flex-row gap-2">
            <button className="px-2 hover:bg-gray-500">
              <MinimizeIcon />
            </button>
            <button className="px-2 hover:bg-gray-500">
              <Crop75Icon />
            </button>
            <button className="px-2 hover:bg-red-500">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="bg-gray-900 p-1 draggable-content pt-10">{children}</div>
      </div>
    </Draggable>
  )
}
export default DraggablePanel
