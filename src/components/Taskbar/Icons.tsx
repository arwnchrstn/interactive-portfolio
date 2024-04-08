import { useState } from 'react'

interface IconsProps {
  src: string
  alt: string
  className?: string
  openable?: boolean
  route?: string
}

function Icons({ openable = false, ...props }: IconsProps) {
  const [active, setActive] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)

  const handleClick = () => {
    setActive(true)
    setOpen(!open)
  }

  return (
    <div
      className={`taskbar-icon grid place-items-center rounded hover:bg-gray-600
        ${active && openable && 'bg-gray-600 border-b-2 border-sky-500'}
        ${!openable && open && 'bg-gray-600'}
        ${!open && 'bg-transparent'}`}
      onClick={handleClick}
    >
      <img src={props.src} className={`object-contain ${props.className}`} alt={props.alt} />
    </div>
  )
}
export default Icons
