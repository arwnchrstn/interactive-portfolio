import DraggablePanel from './DraggablePanel'

function Terminal() {
  return (
    <DraggablePanel title="Command Prompt" isMaximized={false}>
      <div className="text-gray-300">
        <p>Interactive Portfolio [Version 1.0.0]</p>
        <p>(c) Arwen Christian Ceres | {new Date().getFullYear()}</p>
      </div>
    </DraggablePanel>
  )
}
export default Terminal
