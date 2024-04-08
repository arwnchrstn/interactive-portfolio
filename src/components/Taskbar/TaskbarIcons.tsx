import '@styles/taskbar.css'

import chrome from '@assets/chrome.png'
import edge from '@assets/edge.png'
import terminal from '@assets/terminal.png'
import windows from '@assets/windows.png'

import Icons from './Icons'

function TaskbarIcons() {
  return (
    <div className="h-100 flex gap-x-2 text-white">
      <Icons src={windows} alt="windows icon" route="windows" />
      <Icons src={edge} alt="microsoft edge icon" openable route="edge" />
      <Icons src={chrome} alt="google chrome icon" openable route="chrome" />
      <Icons src={terminal} alt="command prompt icon" openable route="terminal" />
    </div>
  )
}
export default TaskbarIcons
