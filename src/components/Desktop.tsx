import '@styles/desktop.css'

import Edge from '@components/Panels/Edge'
import Terminal from '@components/Panels/Terminal'
import Taskbar from '@components/Taskbar'

function Desktop() {
  return (
    <div className="flex flex-col desktop-bg h-dvh w-dvw">
      <div className="main-container grow relative overflow-hidden">
        <Edge />
        <Terminal />
      </div>
      <Taskbar />
    </div>
  )
}

export default Desktop
