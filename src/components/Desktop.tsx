import '@styles/desktop.css'

import Terminal from '@components//Panels/Terminal'
import Taskbar from '@components/Taskbar'

function Desktop() {
  return (
    <div className="main-container h-dvh w-dvw desktop-bg relative overflow-hidden pb-14">
      <Terminal />
      <Taskbar />
    </div>
  )
}

export default Desktop
