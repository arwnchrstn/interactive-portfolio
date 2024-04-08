import DateTime from './DateTime'
import TaskbarIcons from './TaskbarIcons'

function Taskbar() {
  return (
    <div className="h-14 w-full bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 left-0 bottom-0 absolute flex justify-between items-center p-3">
      <TaskbarIcons />
      <DateTime />
    </div>
  )
}

export default Taskbar
