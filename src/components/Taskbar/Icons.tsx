type IconsProps = {
  src: string
  alt: string
  className?: string
  openable?: boolean
  handleClick: () => void
  active: boolean
  maximized: boolean
  hidden: boolean
}

function Icons({ openable = false, ...props }: IconsProps) {
  return (
    <div
      className={`taskbar-icon grid place-items-center rounded hover:bg-gray-600
        ${props.active && openable && 'bg-gray-600 border-b-2 border-sky-500'}
        ${!openable && props.maximized && 'bg-gray-600'}
        ${props.hidden && 'bg-transparent'}`}
      onClick={props.handleClick}
    >
      <img
        src={props.src}
        className={`object-contain ${props.className}`}
        alt={props.alt}
      />
    </div>
  )
}
export default Icons
